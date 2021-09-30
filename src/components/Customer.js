const Customer = ({customer}) => {
    return (
        <div>
            <h4>{customer.id}{' '}{customer.name}{' '}{customer.balance}{' '}{customer.account}</h4>
        </div>
    )
}

export default Customer
