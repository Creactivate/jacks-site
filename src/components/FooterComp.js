import React from 'react';

function FooterComp() {
    let thisYear = new Date();
    return (
        <footer>
            <div>
                <p>Jack Poppleton © {thisYear.getFullYear()} </p>
            </div>
        </footer>
    )
}

export default FooterComp;