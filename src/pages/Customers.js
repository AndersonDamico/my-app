import { useState, useEffect} from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import CustomersCard from '../components/CustomerCard'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles ((theme) => ({
    root: {
        flexGrow: 1,
    },
    card:{
        padding:theme.spacing(2),
        background: 'red',
    },
}))

const Customers = () => {
    const [customers, setCustomers] = useState ([])

    

   useEffect (() =>{
    axios ('https://reqres.in/api/users')
        .then (response => {
           const {data} = response.data
           
           setCustomers (data)
        })
   }, [])
   
    return (
        <>
            <h1>Customers</h1>
            <Grid container>
                {
                    customers.map (item => (
                        <grid item xs={12} md={4}>
                            <CustomersCard 
                                nome={item.first_nome}
                                Lastname={item.last_name}
                                email={item.email}
                                avatar={item.avatar}
                            />
                        </grid>
                    ))
                }
           </Grid>
        </>
    )
 }
 
 export default Customers