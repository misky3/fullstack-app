import './DoughnutChart.css';

function DoughnutChart({income, totalExpenses}){
    const spentPercent = ((totalExpenses / income)*100).toFixed(1);

    return(
        <div className='doughtnut-chart'>
            <div className='doughnut'
                style={{
            background: `conic-gradient(#D2D2D2 ${spentPercent}%, #67F5BAFF ${spentPercent}% 100%)`,
            }}
            >
                <div className='center-text'>{spentPercent}% Spent</div>
            </div>
        </div>
    );
}

export default DoughnutChart;