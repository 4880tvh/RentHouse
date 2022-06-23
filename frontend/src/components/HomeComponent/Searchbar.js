import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AdvancedSearch from '../SearchComponent/AdvancedSearch'

const Searchbar = () => {
    const [keyword, setKeyword] = useState("")

    const handleSearch = (e) => {
        
    }

    return (
        <>
            <div className="hero-wrap ftco-degree-bg" data-stellar-background-ratio="0.5">
                <div className="overlay">
                </div>
                <div className="container">
                    <div className="row no-gutters slider-text justify-content-center align-items-center">
                        <div className="col-lg-8 col-md-6 d-flex align-items-end">
                            <div className="text text-center">
                                <h1 className="mb-4" style={{ fontFamily: "Arial" }}>Tìm nhà trọ một cách dễ dàng<br /></h1>
                                <p style={{ fontSize: "18px" }}>Sự hài lòng của khách hàng là niềm hạnh phúc của chúng tôi</p>
                                <form action="#" className="search-location mt-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-10 align-items-end">
                                            <div className="form-group">
                                                <div className="form-field">
                                                    {/* <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Tìm địa điểm"
                                                    />
                                                    <button onClick={(e) => handleSearch(e)}><span className="ion-ios-search"></span></button> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mouse">
                    <Link to="#" className="mouse-icon">
                        <div className="mouse-wheel"><span className="ion-ios-arrow-round-down"></span></div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Searchbar