import { useEffect, useRef, useState } from "react"
import Toast from "./Toast"
import axiosApi from "../../axios";
import {format} from 'date-fns';

export default function NewPostForm({setPost}){
    const [input, setInput] = useState('')
    const [toast, setToast] = useState(false)
    const toaster = useRef()

    useEffect(() => {
        if(toast){
            toaster.current.classList.add('active')
        }
    }, [toast])

    function handleSubmit(e){
        e.preventDefault()
        if(input === ''){
            setToast(true)
            setTimeout(function(){
                setToast(false)
            }, 3000)
        }
        else{
            axiosApi.post('/posts', {
                userId: process.env.NODE_ENV === "production" ? "9553c67e-a740-45da-881b-3ce67c4cd48b" : "a4ca9ac5-9921-4528-a876-9a5c5def8035",
                content:input,
                date:format(new Date(), "yyyy-MM-dd"),
            })
            setPost(input)
            setInput('')
        }
    }
    function removeToast(){
        setToast(false)
    }
    return (
        <form className="news-header flex-row border-bot" onSubmit={handleSubmit}>
            <div className="flex-row status">
                <div className="news-dp">
                    <img src="images/laura-circle.png" alt=""/>
                </div>
                <div className="mind-input">
                    <input className="hover post-input"type="text" placeholder="Whats on your mind, Laura?" value={input} onChange={e => setInput(e.target.value)}/>
                </div>
                {toast && <Toast toaster={toaster} removeToast={removeToast}/>}
            </div>
        </form>
    )
}
