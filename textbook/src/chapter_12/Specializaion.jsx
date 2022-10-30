import React from "react";
import Dialog from  "./Dialog";
import "./Dialog.css";

function Specializaion(props){
    return(
        <div>
        <Dialog className="dialog" title="경고" id="warning" color="red"
        check={true} Bcontexts="확인">
            <p>중복 로그인이 감지되었습니다</p>
        </Dialog>
        <Dialog className="dialog" title="환영합니다"id="Greeting" color="yellow"
        check={true} Bcontexts="확인">
            <p>로그인 되었습니다</p>
        </Dialog> 
        <Dialog className="dialog" title="Error !"id="Error" color="green"
        check={true} Bcontexts="확인">
            <p>로그인 형식이 잘못되었습니다</p>
        </Dialog> 
        <Dialog className="dialog" title="공지사항" id="Alarm" color="pink" 
        check={false}>
            <p>개인정보 업데이트 관련 공지 확인 바람</p>
        </Dialog> 
        </div>
    );
}

export default Specializaion;
