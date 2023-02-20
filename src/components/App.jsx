import SocialIcons from './SocialIcons'
import ResponsiveAppBar from './Navbar'
import Menu from './menu'
import CusineMenu from './CusineMenu'
import MenuRender from './MenuRender'
import Hero from './hero'
function App() {
  return (
    <div>
    <ResponsiveAppBar />
    <Hero />
    <Menu />
    {/* <MenuRender /> */}
    <SocialIcons />
    </div>
  )
}

export default App
