

export function validateUserInput({name, income, goal}){
    if(!name || name.length < 3) return false;
    if(!income || isNaN(income) || income <= 0) return false;
    if(!goal || goal.length < 3) return false;

    return true;
}