'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import { useAuth } from "@/firebase/auth";
import { Loader } from "@/components/index";
import {
  collection,
  addDoc,
  getDocs,
  where,
  query,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function Home() {

  const router = useRouter();
  const { signOut, authUser, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !authUser) {
      router.push("/login");
    }
    if (!!authUser) {
      // fetch api
    }
  }, [authUser, isLoading, router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      HI.
    </main>
  )
}
