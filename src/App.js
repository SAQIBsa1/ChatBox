import {ChatEngine} from 'react-chat-engine';
import  ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
const App = () => {


    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
        <ChatEngine
        height="100vh"
        projectID="db35b5ed-ae82-4725-a8d2-7fe324390260"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(ChatAppProps) => <ChatFeed { ...ChatAppProps} />}
        />

    );
}
export default App;