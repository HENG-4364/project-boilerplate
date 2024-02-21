'use client'

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
    const [count, setCount] = useState(0)
    return <><ul style={{ marginLeft: 50 }}>
        <li>
            <Link href="/">
                Home
            </Link>
        </li>
        <li>
            <Link href="/my-account/account-settings">
                Account Setting
            </Link>
        </li>
        <li>
            <Link href="/my-account/help-center">
                Help Center
            </Link>
        </li>
        <li>
            <Link href="/my-account/account-settings">
                Change Password
            </Link>
        </li>
    </ul></>
}