export function formatWeight(weight:number){
    return new Intl.NumberFormat("fa-IR").format(weight);
}

export function formatDateToShamsi(date:Date){
    return new Intl.DateTimeFormat("fa-IR").format(date);
}