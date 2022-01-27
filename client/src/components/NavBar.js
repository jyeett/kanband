import {useHistory, Link, NavLink} from "react-router-dom"
import {Navbar, Container, Nav, Offcanvas, Button} from 'react-bootstrap'
// import NavDropdownList from "./NavDropdownList"

function NavBar({user, setCurrentUser}) {
    const history = useHistory();

    const handleLogout = () => {
        fetch('/logout', {method: "DELETE"})
        .then(res => {
              if (res.ok) {
                history.push("/");
                setCurrentUser(null) 
              }
            })
    }

    function homeButton() {
       user ? history.push("/home") : history.push('/')
       history.go(0)
    }

    return(
        <>
            <Navbar style={{"backgroundColor": "#59386e"}} variant="dark" expand={false}>
                <Container fluid>
                    {<Navbar.Brand onClick={homeButton}>KanbanD</Navbar.Brand>}
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    style={{"backgroundColor": "#59386e", "color": "white"}}
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">KanbanD</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        {user ? <h4>Hello {user.username}!</h4> : null}
                        {user ? <Button onClick={handleLogout}>Logout</Button> : null}
                        {/* {user ? <Link to="/albumlist">All Albums</Link> : null} */}
                        
                        {/* {albums.length > 0 ? <NavDropdownList albums={albums} setActiveAlbum={setActiveAlbum} /> : null} */}

                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;