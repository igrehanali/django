import { NextResponse } from 'next/server'
import { loginUser } from '../../../../api/auth/data'
import cookie from 'cookie'

export const POST = async (req, res) => {
   try {
      const { email, password } = await req?.json()
      const user = await loginUser(email, password)
      if (user?.success == false) {
         return NextResponse.json({ user }, { status: 401 })
      }
      const headers = new Headers()
      headers.append('Set-Cookie', cookie.serialize('authToken', user.user?.id, {
         httpOnly: true,
         secure: true,
         maxAge: 360000,
         path: '/',
      }))
      return NextResponse.json({ user }, { status: 200, headers })
   } catch (error) {
      return NextResponse.json({ success: false, error }, { status: 500 })
   }
}