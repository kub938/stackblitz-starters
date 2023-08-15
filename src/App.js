import React,{useRef} from 'react';
import Hello from './Hello';
import './style.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';



export default function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.veloper@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id:3,
      username: 'liz',
      email: 'liz@example.com'
    },
  ];
  const nextId = useRef(4);
  const onCreate = () =>{

    nextId.current +=1;
  };
  return (
    <>
      <Hello/>
      <Wrapper>
        <Hello name="react" color="red" isSpecial={true} />
        <Hello color="pink" />
      </Wrapper>
      <Counter></Counter>
      <InputSample/>
      <UserList users={users}/>
    </>
  );
}
