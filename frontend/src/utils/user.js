

export function validateUserInput({name, income, goal}){
    if(!name || name.length < 3) return false;
    if(!income || isNaN(income) || income <= 0) return false;
    if(!goal || goal.length < 3) return false;

    return true;
}

export function validateExpense({category, date, amount}){

    // Parse date parts
    const [year, month, day] = date.split("-").map(Number);

    // Create local midnight date for selected date
    const select = new Date(year, month - 1, day);
    
    // Create local midnight date for today
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    if (!category || category === "") return false;
    if (!date || select > now) return false;
    if (!amount || isNaN(amount) || amount <= 0) return false;

    return true;
}