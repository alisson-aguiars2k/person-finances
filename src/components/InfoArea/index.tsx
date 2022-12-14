import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';
import * as C from './styled';

import { FaArrowAltCircleRight } from "@react-icons/all-files/fa/FaArrowAltCircleRight";
import { FaArrowAltCircleLeft } from "@react-icons/all-files/fa/FaArrowAltCircleLeft";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

type Props = {
    currentMonth: string;
    onChangeMonth: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({ currentMonth, onChangeMonth, income, expense }: Props) => {

    const theme = useContext(ThemeContext);

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onChangeMonth(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onChangeMonth(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    return (
      <C.Container>
        <C.MonthArea>
          <C.MonthArrow
            onClick={handlePrevMonth}
            data-tip="Mês Anterior"
            data-for="tip-top"
          >
            <FaArrowAltCircleLeft color={theme.background.secundary} />
          </C.MonthArrow>
          <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
          <C.MonthArrow
            onClick={handleNextMonth}
            data-tip="Proximo Mês"
            data-for="tip-top"
          >
            <FaArrowAltCircleRight color={theme.background.secundary} />
          </C.MonthArrow>
        </C.MonthArea>
        <C.ResumeArea>
          <ResumeItem
            tipTitle="Valor arrecadado"
            title="Receitas"
            value={parseFloat(income.toFixed(2))}
          />
          <ResumeItem
            tipTitle="Valor Gasto"
            title="Despesas"
            value={parseFloat(expense.toFixed(2))}
          />
          <ResumeItem
            tipTitle="Diferença entre Receita - Despesa"
            title="Balanço"
            value={parseFloat((income - expense).toFixed(2))}
            color={income - expense < 0 ? "darkred" : "#28a745"}
          />
        </C.ResumeArea>
      </C.Container>
    );
}