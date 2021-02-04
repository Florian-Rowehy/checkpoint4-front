import React from 'react';

const Pagination = (props) => {
    const pagination = [];
    console.log(props)
    for (let index = 1; index <= props.nbPages; index++) {
        pagination[pagination.length] = (
            <li key={index} className={"page-item " + (props.currentPage === index && "active")}>
                <button className="page-link" type="button" onClick={()=>{props.pageClickHandler(index)}} >{index}</button>
            </li>
        );
        
    }
    return (
    <div>
        <ul className="pagination justify-content-center">
            <li className={"page-item" + (props.currentPage <= 1 && "disabled")}>
                <button className="page-link" onClick={props.prevPageClickHandler} >&laquo;</button>
            </li>
            {
                pagination
            }
            <li className={"page-item" + (props.currentPage >= props.nbPages && "disabled")}>
                <button className="page-link" onClick={props.nextPageClickHandler}>&raquo;</button>
            </li>
        </ul>
    </div>
    )
}

export default Pagination;