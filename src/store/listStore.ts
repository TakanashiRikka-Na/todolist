import { create } from "zustand"


interface ListElemType {
    data: string,
    setData: (data: string) => void,

}

interface ListType {
    datas: string[]
    setDatas: (datas: string[]) => void
}




export const useListElemStore = create<ListElemType>((set) => ({
    data: "",

    setData: (data: string) => set({ data: data }),

}));


export const useListStore = create<ListType>((set) => ({
    datas: [],
    setDatas: (datas: string[]) => set({ datas: datas })
}))