import { transactionHistory } from './TransactionHistory.module.css'
import capitalize from '../../helperFunction/helperFunction.js'


function TransactionHistoryItem(item) {
    return (
        <tr>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
        </tr>
    );
}


export default function TransactionHistory({items}) {
    return (
            <table className={transactionHistory}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <TransactionHistoryItem
                            key={item.id}
                            type={capitalize(item.type)}
                            amount={item.amount}
                            currency={item.currency}
                        />
                    ))}
                </tbody>
            </table>
    )
}



