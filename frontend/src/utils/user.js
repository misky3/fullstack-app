

export function validateUserInput({name, income, goal}){
    if(!name || name.length < 3) return false;
    if(!income || isNaN(income) || income <= 0) return false;
    if(!goal || goal.length < 3) return false;

    return true;
}

export function validateExpense({category, date, amount}){
    const select = new Date(date);
    const now = new Date();

    if(!category || category === "") return false;
    if(select > now) return false;
    if(!amount || isNaN(amount) || amount <= 0) return false;

    return true;
}