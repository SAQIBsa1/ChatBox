import {ChatEngine} from 'react-chat-engine';
import  ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
const App = () => {


    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
        <ChatEngine
        height="100vh"
        projectID="110bdf42-3af2-4dab-953c-089cb14517ea"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(ChatAppProps) => <ChatFeed { ...ChatAppProps} />}
        />

    );
}
export default App;