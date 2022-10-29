import React,{useState,useEffect}from "react";
import './App.css';

const serverURL="http://localhost:65020/users";

function App(){
  const [userData,setUserData]=useState(null);
  const [compareText,setCompareText]=useState("");
  
  const getUserData=()=>{
    fetch(serverURL)
    .then((res)=>res.json())
    .then((data)=>setUserData(data))
    .then(console.log(userData))
  }

  useEffect(getUserData,[]);

  const onSubmitHandler=(event)=>{
    event.preventDefault();
    const name=event.target.name.value;
    const id=event.target.id.value;
    const passwd=event.target.passwd.value;
    console.log("Submit버튼 클릭후 서버로 POST전송");
    
    fetch(serverURL,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({name,id,passwd}),
    })
    .then(getUserData())
  }

  const Compare=(event)=>{
    event.preventDefault();
    const name=event.target.name.value;
    const id=event.target.id.value;
    console.log("Compare버튼 클릭후 서버로 Get전송");
    fetch(serverURL,{
      method:'GET',
    })
    .then((res)=>res.json())
    .then(res=>{
      const user=res.find(
        (user)=>user.id===id&&user.name===name
      );
      if(user===undefined) setCompareText("그런 회원은 없습니다.")
      else setCompareText("회원으로 확인되었습니다.")
    })
  }

  return (
    <>
      <div>
        <h2>회원등록</h2>
        <form name="form1" onSubmit={onSubmitHandler}>
          <input type="text" name="name" placeholder="이름"/>
          <input type="text" name="id" placeholder="아이디"/>
          <input type="text" name="passwd" placeholder="암호"/>
          <button type="submit">등록</button>
        </form>
      </div>
      <div>
        <h2>회원확인</h2>
        <form form="form2" onSubmit={Compare}>
          <input type="text" name="name" placeholder="이름"/>
          <input type="text" name="id" placeholder="아이디"/>
          <button type="submit">확인</button>
        </form>
        <p style={{color:"red"}}>{compareText}</p>
      </div>
      <p></p>
      <div>
        <h2>회원명단</h2>
        <ol>
          {(userData===null)?(
            <p>서버에서 데이터를 가져오는 중...</p>
          ):(
            userData.map((user,i)=>(
              <li key={user.keyid}>{user.name}{user.id}{user.passwd}</li>
            ))
          )}
        </ol>
      </div>
    </>
  )
}

export default App;