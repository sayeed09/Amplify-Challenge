import React from 'react';
import { data } from "../utils/data"
import CustomerItem from "../components/Customers/CustomerItem";
import HeaderProvider from "../components/Customers/HeaderProvider";

function CustomerList() {
    const [customerResponseData, setCustomerResponseData] = React.useState([]);

    React.useEffect(() => {
        getCustomersList();
    }, []);

    const getCustomersList = () => {
        setCustomerResponseData(data);
    }

    return <>
        {customerResponseData.length > 0 ?
            <div className="container" style={{ marginTop: "15px" }}>
                <table className="table">

                    <HeaderProvider />

                    {customerResponseData.map((item) => {
                        return <tr> <CustomerItem key={item.id} item={item} /></tr>
                    })}
                </table>
            </div>
            :
            <p>Loading ....</p>
        }
    </>
}

export default CustomerList;
