import React from "react";

const AboutUsFunc = ({ developerName }) => {
    return (
        <div className="card text-center">
            <div className="card-header">درباره ی من</div>
            <div className="card-body">
                <h5 className="card-title"> درباره ی سازندهی ToDo و مستندات</h5>
                <p className="card-text">سازنده :{developerName} </p>
                {/* <p className="card-text">سازنده :حسین </p> */}
                <h4 className="card-title">مباحس و پکیج ها</h4>
                <h5 className="card-title">پکیج ها</h5>
                <ul>
                    <li>react-booststarp</li>
                    <li>radium</li>
                    <li>react-toastify</li>
                    <li>react-router</li>
                    <li>react-router-dom</li>
                </ul>
                <h5 className="card-title">مباحث</h5>

            </div>
        </div>

    );
}
export default AboutUsFunc;