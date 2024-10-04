import { NextResponse } from 'next/server'
import { addUser } from '../../../../api/auth/data'

export const POST = async (req, res) => {
   try {
      const { email, password } = await req?.json()
      const user = await addUser(email, password)

      if (user?.success == false) {
         return NextResponse.json({ user }, { status: 401 })
      }

      return NextResponse.json({ user }, { status: 200 })
   } catch (error) {
      return NextResponse.json({ success: false, error }, { status: 500 })
   }
}