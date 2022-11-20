import { Category } from "../types/category"

export const categories: Category = {
    food : { title: 'alimentação', color: 'darkred', expense: true },
    rent : { title: 'Aluguel', color: 'blue', expense: true },
    salary : { title: 'Salário', color: 'darkgreen', expense: false },
    fuel : { title: 'Combustível', color: 'darkgreen', expense: true },
}