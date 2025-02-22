/* eslint-disable @typescript-eslint/no-unused-vars */
// This disables the ESLint rule that warns about unused variables.

"use client";
// This directive ensures the component runs on the client side in a Next.js app.

import { SignIn, useUser } from "@clerk/nextjs";
// Importing the `SignIn` component and `useUser` hook from Clerk for authentication.

import { useSearchParams } from "next/navigation";
// Importing `useSearchParams` from Next.js to access URL query parameters.

import { dark } from "@clerk/themes";
import React from "react";
// Importing React library.

const SignInComponent = () => {
  // Defining a functional component named `SignInComponent`.

  const { user } = useUser();
  // Extracting the `user` object from Clerk’s `useUser()` hook to access authentication data.

  const searchParams = useSearchParams();
  // Using `useSearchParams` to retrieve URL query parameters.

  const isCheckoutPage = searchParams.get("showSignUp") !== null;
  // Checking if the `showSignUp` parameter exists in the URL, indicating if the page is a checkout page.

  const courseId = searchParams.get("id");
  // Retrieving the `id` parameter from the URL, which represents a course ID.

  const signUpUrl = isCheckoutPage
    ? `/checkout?step=1&id=${courseId}&showsSignUp`
    : "/signup";
  // Constructing the sign-up URL dynamically based on whether it's a checkout page.
  // If `isCheckoutPage` is true, it redirects to `/checkout?step=1&id=${courseId}&showsSignUp`,
  // otherwise, it redirects to the generic `/signup` page.

  const getRedirectUrl = () => {
    // Function to determine the redirect URL after sign-in.

    if (isCheckoutPage) {
      return `/checkout?step=2&id=${courseId}&showSignUp=true`;
    }
    // If it's a checkout page, the user is redirected to step 2 of the checkout process.

    const userType = user?.publicMetadata?.userType as string;
    // Extracting the `userType` from `publicMetadata`, which determines if the user is a teacher or a regular user.

    if (userType === "teacher") {
      return "/teacher/courses";
    }
    // If the user is a teacher, they are redirected to the teacher's courses page.

    return "/user/courses";
    // Default redirection for regular users to their courses page.
  };

  return (
    <SignIn
      appearance={{
        baseTheme: dark,
      }}
      signInUrl={signUpUrl}
      forceRedirectUrl={getRedirectUrl()}
      routing="hash"
      afterSignOutUrl={"/"}
    />
  );
  // Rendering the `SignIn` component from Clerk with the following properties:
  // - `signInUrl`: The dynamically generated sign-up URL.
  // - `forceRedirectUrl`: The URL where the user is redirected after sign-in, determined by `getRedirectUrl()`.
  // - `routing="hash"`: Uses hash-based routing for sign-in.
  // - `afterSignOutUrl={"/"}`: Redirects the user to the home page after signing out.
};

export default SignInComponent;
// Exporting the component for use in other parts of the application.
