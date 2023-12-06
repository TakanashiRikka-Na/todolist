import { useState } from 'react';
import { useListStore } from '../../store/listStore';
import css from './index.module.css'

export default function index(props: { data: string, id: number }) {
    const [status, setStatus] = useState(false)
    const { datas, setDatas } = useListStore()
    const changeStatus = () => {
        setStatus(status ? false : true)
    }
    const deleteIDs = () => {
        datas.splice(props.id - 1, 1)
        setDatas(datas)
    }
    return (
        <div className={css.back}>
            <div className={css.id}>{props.id}</div>
            <div className={css.data}>{props.data}</div>
            <div className={css.ctrlBar}>
                <div className={css.flag}>{status ? "√" : "X"}</div>
                <div className={css.change} onClick={changeStatus}>改变状态</div>
                <div className={css.delete} onClick={deleteIDs}>删除</div>
            </div>
        </div>
    )


}

