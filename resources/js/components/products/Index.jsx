import React, { useState, useEffect } from 'react'
import Swal from "sweetalert2";

const Index = () => {

    // delete portion
    const deleteCard = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to undo this action",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                   axios.get('/api/delete_card/'+id)
                       .then(()=>{
                           toast.fire({
                               icon:"error",
                               title: "Card Deleted Successfully"
                           })
                           getCards()
                       })
                       .catch(()=>{
                            Swal.fire(
                                'Error'
                            )
                       })
                }
            })
    }


    // adding card to table portion
    const [cards, setCards] = useState([])

    // useEffect portion
    useEffect(()=>{
        getCards()
    },[])

    const getCards = async () => {
        await axios.get("/api/get_all_card")
            .then(({data})=> {
                setCards(data.cards)
        })
    }


    // create a card component
    const [cardNum, setCardNum] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")

    const createCard = async (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('cardNum', cardNum)
        formData.append('month', month)
        formData.append('year', year)

        await axios.post("/api/add_card", formData)
            .then(({data})=> {
                toast.fire({
                    icon:"success",
                    title: "Card Added Successfully"
                })
                getCards()
            })
            .catch(({response})=> {
                Swal.fire(
                    "Error",
                    "Invalid or Expired Card",
                    "warning"
                )
            })
    }

    // HTML components
    return(
        <div className='container'>
            <div className="cards_list">
                <div className="titlebar">
                    <div className="titlebar_item">
                        <h1>Charged Cards</h1>
                    </div>
                </div>

                <div className="table">
                    <div className="list_header">
                        <p>Charge Date</p>
                        <p>Card Number</p>
                        <p>Expiration Date</p>
                        <p>Authorization Code</p>
                        <p>Void Charge</p>
                    </div>
                    {
                        cards.length > 0 && (
                            cards.map((item, key)=>(
                                <div className="list_items" key={key}>
                                    <a>{item.chargeDate}</a>
                                    <a>{item.cardNum}</a>
                                    <a>{item.expDate}</a>
                                    <a>{item.authCode}</a>
                                    <div>
                                        <button className="btn-icon delete" onClick={()=>deleteCard(item.id)}>
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>

            <br></br><br></br><br></br><br></br>

            <div className="cards_create">
                <div className="titlebar">
                    <div className="titlebar_item2">
                        <h1>Charge a Card</h1>
                    </div>
                </div>

                <div className="inputs">
                    <p>Card Number</p>
                    <input type="text" value={cardNum} onChange={(event)=>{setCardNum(event.target.value)}}/>

                    <br></br><br></br>

                    <p>Expiration Date</p>
                        <select value={month} onChange={(event)=>setMonth(event.target.value)}>
                            <option value="Month">Month</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>

                        <select value={year} onChange={(event)=>setYear(event.target.value)}>
                            <option value="Year">Year</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                        </select>
                    <br></br><br></br>

                    <div className="titlebar_item">
                        <div className="btn" onClick={(event)=>createCard(event)}>
                            Charge Card
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
