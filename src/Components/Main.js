import React, { useState } from "react";
import { BsSearch } from "react-icons/bs"
import Card from "./Card";
import axios from "axios";

const Main = () => {

    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const searchBook = (evt) => {
        if(evt.key==="Enter")
        {
           axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCRU8rRQi_f83CJzSXLd8JhaPkcJf38Ebk'+'&maxResults=40')
           .then(res=>setData(res.data.items))
           .catch(err=>console.log(err))
        }
    }
    return (
        <>
        <div className="header">
            <div className="row1">
                <h1>A room without a book is <br/>a body without a soul.</h1>
            </div>

            <div className="row2">
                <h2>Find your favourite book.</h2>
                <div className="search">
                    <input type="text" placeholder="Enter your book Name" 
                        value={search} onChange={e=>setSearch(e.target.value)}
                            onKeyPress={searchBook}/>
                    <button><BsSearch/></button>
                </div>
                <img src="./images/bg2.png" alt=""></img>
            </div>
        </div>

        <div className="container">
            {
                <Card book ={bookData}/>
            }
        </div>

        </>
    )
}

export default Main