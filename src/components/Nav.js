import { Navbar } from "flowbite-react"

const Nav = ()=> {

return(
<Navbar
  fluid={true}
  rounded={true}
>
 <div className="flex md:order-2">
    
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/budgets/">
      Budgets
    </Navbar.Link>
    
  </Navbar.Collapse>
</Navbar>
)
}

export default Nav;