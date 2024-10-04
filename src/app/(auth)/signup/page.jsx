"use client"
import ActivityIndicator from "@/components/ActivityIndicator";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useState } from "react";

const SignUp = () => {
  const { isLoading, registerUser } = useAuth()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")

  const handleSubmit = async () => {
    await registerUser(email, password, confirmPassword)
  };

  return (
    <div className="h-full bg-neutral-200 dark:bg-neutral-700 flex justify-center">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="flex items-center bg-[#1b8059] rounded-t-lg lg:w-6/12 lg:rounded-l-lg lg:rounded-r-none">
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      The web framework for perfectionists with deadlines.
                    </h4>
                    {isLoading && <ActivityIndicator />}
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <div className=" font-secondary text-2xl md:text-6xl">
                        Django
                      </div>
                      <h4 className="mb-12 mt-3 pb-1 font-light">
                        Join us to become a part on the Team.
                      </h4>
                    </div>

                    <form>
                      <p className="mb-4">Create your account</p>
                      <div className="grid">
                        <input
                          type="text"
                          label="email"
                          placeholder="Enter Email"
                          className="mb-4 py-3 dark:bg-white bg-gray-100 border-2 border-black dark:text-black rounded px-3 text-sm"
                          value={email}
                          onChange={(e) => {
                            setemail(e.target.value)
                          }}
                        ></input>

                        <input
                          placeholder="password"
                          type="Password"
                          label="Password"
                          className="mb-4 py-3 dark:bg-white bg-gray-100 border-2 border-black dark:text-black rounded px-3 text-sm"
                          value={password}
                          onChange={(e) => {
                            setpassword(e.target.value)
                          }}
                        ></input>
                        <input
                          placeholder="Confirm Password"
                          type="Password"
                          label="Password"
                          className="mb-4 py-3 dark:bg-white bg-gray-100 border-2 border-black dark:text-black rounded px-3 text-sm"
                          value={confirmPassword}
                          onChange={(e) => {
                            setconfirmPassword(e.target.value)
                          }}
                        ></input>
                      </div>

                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="mb-3 bg-gradient-to-r from-lime-600 from-10% via-emerald-600 via-30% to-green-700 to-90% inline-block w-full rounded px-6 font-bold pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="button"
                          onClick={handleSubmit}
                        >
                          Sign Up
                        </button>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Already have an Account?</p>

                        <Link
                          href={"login"}
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        >
                          Login
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
