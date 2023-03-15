import { Button } from "flowbite-react"
import { Navbar } from "flowbite-react";

const Nav = ()=> {

return(
<Navbar
  fluid={true}
  rounded={true}
>
  {/* <Navbar.Brand href="">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </Navbar.Brand> */}
  <div className="flex md:order-2">
    <Button>
      Create Budget
    </Button>
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