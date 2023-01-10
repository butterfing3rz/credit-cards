import React from 'react'

const Index = () => {
    return(
        <div className='container'>
            <div className="cards_list">
                <div className="titlebar">
                    <div className="titlebar_item">
                        <h1>Credit Cards</h1>
                    </div>
                    <div className="titlebar_item">
                        <div className="btn">
                            Add Card
                        </div>
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
                        {/*<img src="" height="40px" />*/}
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
        </div>
    )
}

export default Index
