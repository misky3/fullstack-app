import './DoughnutChart.css';

function DoughnutChart({income, totalExpenses}){
    const spentPercent = ((totalExpenses / income)*100).toFixed(1);
    const remainingPercent = 100- spentPercent;

    return(
        <div className='doughtnut-chart'>
            <div className='doughnut'
                style={{
            background: `conic-gradient(#ff6384 ${spentPercent}%, #36a2eb ${spentPercent}% 100%)`,
            }}
            >
                <div className='center-text'>{spentPercent}%</div>
            </div>
        </div>
    );
}

export default DoughnutChart;