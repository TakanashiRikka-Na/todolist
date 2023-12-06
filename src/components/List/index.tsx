import { useListStore } from '../../store/listStore'
import ListElem from "./../ListElem"


export default function index() {
    const { datas } = useListStore()
    return (<div>
        {datas.map((item, index) => (
            <ListElem data={item} id={index + 1}></ListElem>
        ))}
    </div>)
}