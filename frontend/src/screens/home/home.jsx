import Quote from "../../assets/budgetQuote.jpg";
import './home.css';
import {useNavigate} from "react-router-dom";
import { validateUserInput } from "../../utils/user";
import {useState, useEffect} from "react";

function Home(){
//   const [items, setItems] = useState([]);
//   const [name, setName] = useState("");

//   useEffect(() => {
//     fetch("/api/items")
//       .then(res => res.json())
//       .then(data => setItems(data));
//     },[]);

//     const addItem = async () => {
//       await fetch("/api/items",{
//         method: "POST",
//         headers: {"Content-Type": "application/json" },
//         body: JSON.stringify({name}),
//       });
//       setName("");
//       const updated = await fetch("/api/items").then(res => res.json());
//       setItems(updated);
//     };
  const [name, setName] = useState("");
  const [income, setIncome] = useState("");
  const [goal, setGoal] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const isValid = validateUserInput({name, income, goal});

    if(!isValid){
      alert("Please check your input");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/add-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, income, goal }),
      });

      const data = await response.json();

      if (!response.ok) {
        // const data = await response.json();
        throw new Error(data.message || "Failed to add user.");
      }

      if(data.userId){
        localStorage.setItem("userId", data.userId);
      } else {
        throw new Error("User ID not returned from server.");
      }

      // Success
      setError("");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  // const goToDashboard =()=>{
  //   navigate('/dashboard');
  // };

    return(
      <div className="home">
        <div>
            <img src={Quote} alt="Quote"/>
        </div>
        <div className="monthly">
          <div className="title">
            <div className="month">Monthly</div> 
            <div className="budget">Budget</div>
          </div>
            <div className="inputs">
                <input 
                  placeholder="Insert Your Income"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  />
                <input 
                  placeholder="Insert Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
                <input 
                  placeholder="Insert Your Goal"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                />
                <button onClick={handleSubmit}>Start Your Calculations</button>
            </div>
            {error && <div>{error}</div>}
            {/* <ul>{items.map(i => <li key={i.id}>{i.name}</li>)}</ul> */}
        </div>
      </div>
    );
}

export default Home;