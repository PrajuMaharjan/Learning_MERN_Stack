import logo from './logo.svg';

const Header=({title})=>{
    return( 
        <header className="App-header">
            <h1>{title}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        </header>
    )
}
Header.defaultProps={
    title:"Default Title"
}
export default Header;