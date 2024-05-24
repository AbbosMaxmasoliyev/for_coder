'use client'

import { NextComponentType } from 'next'
import { useRef, useState } from 'react'
import { PaymenItemProps, Status } from '../types/payment.types'
import moment from "moment"
import { formatNumber } from '../utils/number'
import StatusPayment from './statusPayment'
import { useSelector, useDispatch } from "react-redux"
import { RootState } from '@/store/rootReducer'
import { setActiveSelection } from '@/store/slices/payment.slice'

const PaymentItem: React.FC<PaymenItemProps> = ({ itemTitle, items, forId, totalSum }) => {
    const activeSelection = useSelector((state: RootState) => state.payment.activeSelection)
    const dispatch = useDispatch()
    const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === "on") {
            dispatch(setActiveSelection(itemTitle))
            console.log(activeSelection);

        }
    }
    const paymenSelectRef = useRef<HTMLInputElement>(null)
    return (
        <div className="flex flex-col border-neutral-600 border w-full rounded-xl items-center p-3.5 bg-white bg-opacity-20">
            <div className="w-full flex flex-row items-center p-3   justify-between">
                <div className="flex flex-row">

                    <label className="relative flex items-center  rounded-full cursor-pointer mr-3" htmlFor={forId}>
                        <input name="type" type="radio"
                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-white-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-white checked:before:bg-white hover:before:opacity-10"
                            id={forId}
                            ref={paymenSelectRef}
                            // Onchange eventi orqali contextdagi active holatdagi item o'zgartiriladi va buning yordamida bu item tanlanganida buning qo'shimcha opsiyalari ham ko'rinadigan qilindi
                            onChange={handleValue}
                        />
                        <span
                            className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                            </svg>
                        </span>
                    </label>
                    <label className=" text-white cursor-pointer select-none font-bold font-poppins" htmlFor={forId}>
                        {itemTitle}
                    </label>
                </div>
                {totalSum && <p className='font-poppins_light self-end text-white'>{formatNumber(totalSum)} UZS</p>}
            </div>
            <div className="flex flex-col  w-full">

                {activeSelection === itemTitle && items && items.map((payment) => (
                    <div className="flex flex-row w-full items-center justify-between p-3 last:border-b-transparent border-b-neutral-500 border-b">
                        <div className={`flex w-4/12 flex-col  ${payment.status == "PAID" ? "opacity-30 font-poppins_light" : "font-poppins_bold"}`}>
                            <p className=' text-white'>{payment.itemTitle}</p>
                            <p className=' text-white'>{moment(payment.date).format("DD.MM.YYYY")}</p>
                        </div>
                        <div className="flex flex-row w-8/12 justify-end items-center gap-2">
                            <p className={`font-poppins font-normal text-base text-white w-8/12 text-right pr-2  ${payment.status == "PAID" ? "opacity-30 font-poppins_light line-through" : "font-poppins_bold"}`} >{formatNumber(payment.price)} UZS</p>
                            <StatusPayment status={payment.status} forId={payment.itemTitle} />
                        </div>
                    </div>
                ))

                }
            </div>

        </div>
    )
}

export default PaymentItem