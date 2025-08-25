import './subscriptionGoals.css';
import Netflix from '../../assets/logos/netflix.png';
import Amazon from '../../assets/logos/amazon.png';
import FB from '../../assets/logos/fb.png';
import Google from '../../assets/logos/google.png';
import Spotify from '../../assets/logos/spotify.png';


function SubscriptionGoals({goal, userId}){

    const handleQuickAdd = async(amount) =>{
        try{
            const now = new Date();

            const response = await fetch("http://localhost:5000/api/users/add-expense",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    user_id: userId,
                    category: "subscription",
                    date_time: now.toISOString(),
                    amount,
                }),
            });

            if (!response.ok) throw new Error("Failed to add the subscription");

            alert('Added new subscription');
        } catch(err){
            console.error(err.message);
        }
    };

    return(
        <div className='subscript_box'>
            <div style={{color: 'black', fontSize: '30px'}}> Optional</div>
            <div style={{border:'1px dashed black', width: '291px'}}></div>
            <div className='list'>
                <div style={{color: 'black'}}>Choose Any Fix Expense</div>
                <div className='row-item'>
                    <div className='row'>
                        <img src={Netflix} alt='netflix logo' className='logo'/>
                        <div style={{color: 'black'}}>Netflix</div>
                    </div>
                    <button className='select-btn' onClick={()=> handleQuickAdd(150)}>select</button>
                </div>
                <div className='row-item'>
                    <div className='row'>
                        <img src={Spotify} alt='spotify logo' className='logo'/>
                        <div style={{color: 'black'}}>Spotify</div>
                    </div>
                    <button className='select-btn' onClick={()=> handleQuickAdd(100)}>select</button>
                </div>
                <div className='row-item'>
                    <div className='row'>
                        <img src={Amazon} alt='amazon logo' className='logo'/>
                        <div style={{color: 'black'}}>Amazon</div>
                    </div>
                    <button className='select-btn' onClick={()=> handleQuickAdd(50)}>select</button>
                </div>
                <div className='row-item'>
                    <div className='row'>
                        <img src={Google} alt='google logo' className='logo'/>
                        <div style={{color: 'black'}}>Google</div>
                    </div>
                    <button className='select-btn' onClick={()=> handleQuickAdd(75)}>select</button>
                </div>
                <div className='row-item'>
                    <div className='row'>
                        <img src={FB} alt='facebook logo' className='logo'/>
                        <div style={{color: 'black'}}>Facebook</div>
                    </div>
                    <button className='select-btn' onClick={()=> handleQuickAdd(20)}>select</button>
                </div>
            </div>
            <div style={{border:'1px dashed black', width: '291px'}}></div>
            <div style={{color: 'black', fontSize: '30px'}}> Goal</div>
            <div 
                style={{
                    color:'black', 
                    borderLeft: '4px solid #51D289', 
                    width: '289px', 
                    margin: '16px 0',
                    overflow: 'hidden'}}>{goal}</div>
        </div>
    )
}

export default SubscriptionGoals;