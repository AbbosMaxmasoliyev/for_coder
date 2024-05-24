import React from 'react'
import PaymentItem from './payment.item'
import StatusPayment from './statusPayment'
import { PaymenItem } from '../types/payment.types'
import { formatNumber } from '../utils/number'

const Modal = () => {

    // Ushbu o'zgaruvci ma'lumotlar dinamik holda kelishi sababli o'zgarishga tayyor qilib qo'yildi va bunda birinchi oldin to'langan holatni bildiradi, ikkinchisi esa hozirda to'lanishi shart bo'lgan qism, keyingilari esa keyinchalik yoki hozir to'lash uchun tayyorlab dinamiklashtirildi
    const payment: PaymenItem[] = [
        {
            date: 1716573225,
            itemTitle: "1-oy",
            status: "PAID",
            price: 150000,
        },
        {
            date: 1716573225,
            itemTitle: "2-oy",
            status: "NOW",
            price: 150000,
        },
        {
            date: 1716573225,
            itemTitle: "3-oy",
            status: "NEXT",
            price: 150000,
        }
    ]
    return (
        <div className='payment_modal flex flex-col border border-neutral-800 p-10 rounded-3xl w-96 bg-gradient-to-r from-black to-red-950 bg-opacity-90 relative overflow-hidden'>
            {/* Ushbu joyda orqa fondagi rangni joyiga keltirish  uchun qo'shimcha divlardan foydalanildi va ulaning z-index'lari eng past ya'ni 0 ga tushirilgan */}
            <div className="w-full h-full bg-slate-950 bg-blend-saturation opacity-40 blur-3xl  absolute top-0 left-0 z-0"></div>
            <div className="w-full h-full bg-slate-950 bg-blend-saturation opacity-40 blur-3xl  absolute top-0 left-0 z-0"></div>
            <button className="size-8 absolute top-4 right-4">
                <i className="icon-x"></i>
            </button>
            {/* Bu yerda asosiy divlar z-index bilan ko'tarildi va orqa fondagi rangga qo'shimcha rang bilan usti yopildi */}
            <div className="relative z-10">
                <div className="payment_modal_top flex flex-col gap-4">
                    <p className='text-xl font-bold font-poppins text-white'>To'lov holati</p>
                    <p className='font-poppins text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, veniam.</p>
                </div>
                <div className="flex items-center my-6 flex-col  gap-5">
                    {/* Bu yerda ikki xil bo'lib to'lash uchun Qismlar bilan ishlangan, yanada dinamklashtirish ham mumkin buning uchun bularga kiritiladigan ma'lumotlar o'zgaruvchiga tenlashtirilib map qilish mumkin ammo hozircha  ehtiyoj sezilmagani bois ushbu yo'ldan foydanildi */}
                    <PaymentItem forId='month' itemTitle={"Oylik to'lov"} items={payment} />
                    <PaymentItem forId='full' itemTitle={"Butunlay yopish"} totalSum={450000} />
                </div>
                <div className="flex flex-row gap-3 justify-between ">
                    <div className="flex flex-col w-4/12 gap-3">
                        <p className='font-poppins text-sm text-gray-500'>Umumiy to'landi</p>
                        <p className='text-xl font-bold font-poppins text-white'>{formatNumber(450000)} UZS</p>
                    </div>
                    <div className="w-2/12 flex justify-center">
                        <div className="line"></div>
                    </div>
                    <div className="flex flex-col w-4/12 gap-3">
                        <p className='font-poppins text-sm text-gray-500'>Umumiy to'landi</p>
                        <p className='text-xl font-bold font-poppins text-white'>{formatNumber(450000)} UZS</p>
                    </div>
                </div>
                <button className='w-full py-5 bg-purple-600 rounded-md mt-6 font-poppins font-bold'>To'lov {formatNumber(450000)} UZS</button>
            </div>
        </div>
    )
}

export default Modal