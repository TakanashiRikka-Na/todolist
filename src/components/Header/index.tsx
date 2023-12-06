import { useRef } from 'react'

import css from './index.module.css'
import { useListStore } from '../../store/listStore'

export default function index() {

    const { datas, setDatas } = useListStore()
    const inputRef = useRef<HTMLInputElement>(null)
    const add = () => {
        const inputValue = inputRef.current?.value
        if (inputValue) {
            datas.push(inputValue)
            setDatas(datas)
            console.log(datas)
        }
    }
    return (
        <div className={css.x}>
            <div className={css.title}>TodoList</div>
            <input type="text" name="" id="" ref={inputRef} />
            <div className={css.addBtn} onClick={add}>添加</div>
        </div>
    )
}