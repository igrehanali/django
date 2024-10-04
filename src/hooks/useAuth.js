"use client";
import { addUser, loginUser } from "@/api/auth/data";
import { validateEmail } from "@/utils/myUtils";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useAuth = () => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);

  const registerUser = async (email, password, confirmPassword) => {
    try {
      if (!validateEmail(email)) {
        alert("Please Enter a valid Email Address");
        return;
      }
      if (password?.length < 6) {
        alert("Password should have atleast 6 characters");
        return;
      }
      if (password != confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      // setisLoading(true)
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.status === 200 || response.status === 201) {
        const res = await response.json();
        if (res?.user?.success == true) {
          router.push("login");
        }
      } else {
        const res = await response.json();
        alert(res?.user?.message);
      }
      // setisLoading(false)
    } catch (error) {
      setisLoading(false);
    }
  };

  // const login = async (email, password) => {
  //     try {
  //         if (!validateEmail(email)) {
  //             alert("Please Enter a valid Email Address")
  //             return
  //         }
  //         // setisLoading(true)
  //         const response = await fetch("http://localhost:3000/api/auth/login", {
  //             method: 'POST',
  //             headers: {
  //                 'Content-Type': 'application/json',
  //             },
  //             body: JSON.stringify({
  //                 email,
  //                 password,
  //             }),
  //         });

  //         if (response.status === 200 || response.status === 201) {
  //             const res = await response.json();
  //             if (res?.user?.success == true) {
  //                 router.push('/')
  //             }
  //         } else {
  //             const res = await response.json();
  //             alert(res?.user?.message)
  //         }
  //         // setisLoading(false)
  //     } catch (error) {

  //         setisLoading(false)
  //     }
  // }

  const login = (email, password) => {
    router.push("/");
    console.log("clicked");
  };

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 || response.status === 201) {
        const res = await response.json();
        if (res?.success == true) {
          router.push("login");
        }
      } else {
        const res = await response.json();
        alert(res?.message);
      }
      // setisLoading(false)
    } catch (error) {
      setisLoading(false);
    }
  };

  return {
    isLoading,
    registerUser,
    login,
    logout,
  };
};

export default useAuth;
