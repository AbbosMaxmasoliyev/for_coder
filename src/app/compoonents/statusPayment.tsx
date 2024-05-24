"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface StatusPaymentProps {
    status: string,
    forId: string
}

const StatusPayment: React.FC<StatusPaymentProps> = ({ status, forId }) => {
    const [checkValue, setCheckValue] = useState<boolean>(false)
    const checkInputRef = useRef<HTMLInputElement>(null)

    switch (status) {
        case "PAID":
            return (
                <div className={`active  rounded-md h-6 flex justify-center  w-1/12`}>
                </div>
            )
        case "NOW":
            return (
                <div className="flex  h-10 flex-row items-center w-1/12">
                    <input
                        type="checkbox"
                        className="hidden"
                        ref={checkInputRef}
                        id={forId}

                        disabled
                    />
                    <label htmlFor={forId} className="bg-transparent">
                        <div className={`checked bg-violet-800 opacity-70  rounded-md w-6 h-6 flex justify-center`}>
                        </div>
                    </label >

                </div >
            )
        case "NEXT":
            return (
                <div className="flex  h-10 w-1/12">
                    <input
                        type="checkbox"
                        className="hidden"
                        ref={checkInputRef}
                        id={forId}
                        onChange={() => {
                            setCheckValue(!checkValue)
                        }}

                    />
                    <label htmlFor={forId} className="bg-transparent flex flwx-row items-center">
                        <div className={`${checkValue ? "checked bg-violet-700" : "bg-white"}  rounded-md w-6 h-6 flex justify-center `}>
                        </div>
                    </label >

                </div >
            )
    }
    return (
        <div>StatusPayment</div>
    )
}

export default StatusPayment