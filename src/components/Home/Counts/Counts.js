import React from 'react';
import './Counts.css';

const Counts = () => {
    const countData = [
        {
            totalNumber: 200,
            content: 'Patients Every Day'
        },
        {
            totalNumber: 8,
            content: 'Years Experience'
        },
        {
            totalNumber: 50,
            content: 'Diagnosis Verity'
        }
    ];
    return (
        <div className="counts-container">
            <div className="counts">
                
                    {
                        countData.map(data=> <div className="counts-card">
                            <h1>{data.totalNumber}+</h1>
                            <p>{data.content}</p>
                        </div>)
                    }
            </div>
        </div>
    );
};

export default Counts;