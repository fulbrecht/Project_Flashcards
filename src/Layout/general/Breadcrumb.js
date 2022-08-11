import React from "react";

function Breadcrumb({crumbName = "", crumbLink = "", current}){


    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                {crumbName ? <li className="breadcrumb-item"><a href={crumbLink}>{crumbName}</a></li> : null }
                <li className="breadcrumb-item active" aria-current="page">{current}</li>
            </ol>
        </nav>
    )
}

export default Breadcrumb;