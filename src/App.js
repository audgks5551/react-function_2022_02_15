import { useState } from "react";

function App() {

  // useState안에 getter와 setter가 있어서 반환할 때 [getA, setB] 형태로 반환
  // setToDo 값이 toDo에 저장됨
  // useState를 포함한 hooks는 react 모듈에 선언되어있는 함수
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  
  // input의 값이 하나씩 변할 때 마다 toDo에 저장됨 
  // 브라우저는 이벤트를 감지하고, 이벤트(event) 발생 시 알려준다
  // event target: 이벤트가 일어날 객체
  // event handler, event listener: 이벤트 발생했을 때, 동작하는 코드
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    
      // 새로고침 막기
      event.preventDefault();

      // 아무것도 적지 않았다면 아무것도 하지않고 리턴
      if (toDo === "") {
        return;
      }

      // 배열에 저장
      setToDos( currentArray => [toDo, ...currentArray] );

      // input 초기화
      setToDo("");
  }

  // state가 변할 때 마다 컴포넌트가 실행됨
  console.log(toDos);

  return (
    <div>
      <form onSubmit={onSubmit}> 
        <input 
          onChange={onChange} // event listener
          value={toDo} 
          type="text" 
          placeholder="Write your to do..." 
        />
        <button>+</button>
      </form>

    </div>
  );
}

export default App;
