import cookie from 'cookie'
import { NextResponse } from 'next/server'

export const GET = async (req, res) => {
   try {
      const headers = new Headers()
      headers.append('Set-Cookie', cookie.serialize('authToken', '', {
         httpOnly: true,
         secure: true,
         maxAge: 360000,
         path: '/',
      }))
      return NextResponse.json({ success: true, message: "Logged out!" }, { status: 200, headers })
   } catch (error) {
      return NextResponse.json({ success: false, error }, { status: 500 })
   }
}