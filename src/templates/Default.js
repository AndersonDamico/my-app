import Header from "../partials/Header/Header";

const Default = ({ children }) => {
    return (
        <>
         <Header />
         {children}
        </>
    )
}

export default Default