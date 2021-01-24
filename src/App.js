import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Finish the tutorial',
      day: 'January 24 at 22:00pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Read',
      day: 'January 24 at 23:00pm',
      reminder: false
    }
  ])

  return (
    <div className="container">
      <Header text = {'Task Tracker'}/>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
