import Customer from './Customer'

const Customers = ({customers}) => {
    return (
        <div>
            {customers.map((customer)=>(<Customer key={customer.id} customer={customer}/>))}
        </div>
    )
}

export default Customers
