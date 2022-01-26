import ExpenseDate from "./ExpenseDate";
import Expenses from "./Expenses";
import './ExpenseItem.css';

function ExpenseItem(props) {
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <Expenses ampunt={props.amount}/>
            </div>
        </div>
    );
}

export default ExpenseItem;
