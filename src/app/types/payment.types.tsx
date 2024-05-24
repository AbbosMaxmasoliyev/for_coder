export const enum Status {
    PAID = "PAID",
    NOW = "NOW",
    NEXT = "NEXT",
}


export interface PaymenItem {
    itemTitle: string,
    date: number,
    price: number,
    status: string
}



export interface PaymenItemProps {
    itemTitle: string,
    items?: PaymenItem[], // qo'shimcha qismlar bo'lishi yoki bo'lmasligi ham mumkin shuning uchun optional holatdan olindi 
    totalSum?: number, // bu asosan qo'shimcha opsiyalar olinmagan holda ishlatish mumkin bo'lgan umumiy summa hisoblanadi
    forId: string // forId ning olinishi bu htmldagi input[id] va label[for] ulanishida browserda xato kelib chiqmasligi uchun foydalaniladi
}