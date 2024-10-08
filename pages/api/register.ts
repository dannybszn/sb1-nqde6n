import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { connectToDatabase } from '@/lib/db'
import { User } from '@/models/User'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    await connectToDatabase()
    const { firstName, lastName, email, phoneNumber, password } = req.body

    let user = await User.findOne({ email })
    if (user) {
      return res.status(400).json({ message: 'User already exists' })
    }

    user = new User({
      firstName,
      lastName,
      email,
      phoneNumber,
      password: await bcrypt.hash(password, 10)
    })

    await user.save()

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' })

    res.status(201).json({ token })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}