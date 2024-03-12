"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

function Footer() {
     const { user } = useUser();
     console.log(user);

     return user && <div>Footer</div>;
}

export default Footer;
