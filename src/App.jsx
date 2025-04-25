import Header from "./Components/Header"
import Intro from "./Components/Intro"
import RecentPrj from "./Components/RecentPrj"
import Scroller from "./Components/scroller"


function App() {


  return (
   <div className="mainBg">
   <Header></Header>
   <Intro></Intro>
   <Scroller></Scroller>
   <RecentPrj></RecentPrj>
   </div>
  )
}

export default App
