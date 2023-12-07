import { fetch_data } from "../../wasm/pkg"
export default async function getSentence() {
    await fetch_data("https://v1.hitokoto.cn/?c=a")
        .then((res) => {
            console.log(res)
        })
        .catch((e) => {
            console.error(e)
        });

}