import React from 'react'

const Index = () => {
    return(
        <div className='container'>
            <div className="cards_list">
                <div className="titlebar">
                    <div className="titlebar_item">
                        <h1>Credit Cards</h1>
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
                    <div className="list_items">
                        <a>Today</a>
                        <a>1234</a>
                        <a>Tomorrow</a>
                        <a>6789</a>
                        <div>
                            <button className="btn-icon delete">
                                <i className="far fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <br></br><br></br><br></br><br></br>

            <div className="cards_create">
                <div className="titlebar">
                    <div className="titlebar_item">
                        <h1>Add a Card</h1>
                    </div>
                </div>

                <div className="inputs">
                    <p>Card Number</p>
                    <input type="text" />

                    <br></br><br></br>

                    <p>Expiration Date</p>
                        <select>
                            <option value="Month">Month</option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                            <option value="6">06</option>
                            <option value="7">07</option>
                            <option value="8">08</option>
                            <option value="9">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>

                        <select>
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
                        <div className="btn">
                            Add Card
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
