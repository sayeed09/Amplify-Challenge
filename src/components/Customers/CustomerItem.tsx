import React from 'react';

interface IProps {
    item: any;
}

function CustomerItem(props: IProps) {
    const { item } = props;
    const [quote, setQuote] = React.useState(null);

    const getQuote = () => {
        if (item.smoker) {
            setQuote(Math.random() * 50)
        } else {
            setQuote(Math.random() * 10)
        }
    }

    return <>
        <td>
            {item.id.slice(0, 4)}
        </td>
        <td>
            {item.first_name}
        </td>
        <td>
            {item.last_name}
        </td>
        <td>
            {item.smoker ? 'Yes' : 'No'}
        </td>
        <td>
            <button onClick={() => getQuote()} className="btn btn-primary">Get Quote</button>
        </td>
        <td>
            {quote ? Number(quote).toFixed(2) : ''}
        </td>
    </>
}

export default CustomerItem;
