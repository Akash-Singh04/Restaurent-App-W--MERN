import SocialIcons from './SocialIcons'
import ResponsiveAppBar from './Navbar'
import Menu from './menu'
import CusineMenu from './CusineMenu'
import MenuRender from './MenuRender'
function App() {
  return (
    <div>
    <ResponsiveAppBar />
    <Menu />
    {/* <MenuRender /> */}
    <SocialIcons />
    </div>
  )
}

export default App
