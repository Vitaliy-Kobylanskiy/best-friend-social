import React from 'react';
import cl from './Paginator.module.scss';

const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let curP = props.currentPage;
    let curPF = ((curP - 2) < 0) ? 0 : curP - 2;
    let curPL = curP + 1;
    let slicedPages = pages.slice(curPF, curPL);

    return (
        <div className={cl.wrapperCounter}>
            {
                slicedPages.map(p => {
                    return <span key={p} onClick={(e) => { props.onPageChanged(p) }}
                        className={`${props.currentPage === p ? cl.selectedPage : ""} ${cl.selectedItems}`}>-{p}-</span>
                })
            }
        </div>
    );
};

export default Paginator;