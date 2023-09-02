import {Sidebar} from "../containers/sidebar";
import '../Index.scss'
import {observer} from 'mobx-react-lite'


const App = observer(() => {
    return (
        <div className="app">
    
     <Sidebar/>
        </div>
    );
});

export default App;