import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let post = "강남 우동 맛집";
  let [a,b] = useState('남자 코트 추천');
  let [logo, setLogo] = useState('ReactBlog');
  let [blogTitles, setTitles] = useState(['첫번째 글', '두번째 글', '세번째 글']);
  let [blogLikes, setLikes] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'red', fontSize:"16px"}}>{logo}</h4>
      </div>
      <button onClick={()=>{
        // 새로운 화살표를 생성함.
        // destructing!!
        let copy = [...blogTitles];
        // state 변경 함수 특징 : 갈아치우기 전에 기존과 동일한지 검증함
        // 만약 동일하면 다시 렌더링하지 않음.
        // array 데이터의 지정하는 화살표가 변경되지 않기때문에 위와 같은 원리로 동작하지 않음
        copy[0] = '영번째 글';
        setTitles(copy);
      }}>글수정</button>
      
      <button onClick={()=>{
        // 정렬하는 기능
        let copy2 = [...blogTitles];
        copy2.sort((a,b) => {
          return a > b ? -1 : a < b ? 1 : 0;
        });
        setTitles(copy2);
      }}>글정렬</button>
      {/* 일부만 바꿔서 state 변경함수에 넣는 방법 */}
      <div className="list">
        <h4>{ blogTitles[0] }<span onClick={ ()=>{setLikes(blogLikes+=1)} }> 🔥</span> {blogLikes} </h4>
        <p>2월 17일 발행</p>
        <br></br>
      </div>
      <script>

      </script>
      <div className="list">
        <h4>{ blogTitles[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ blogTitles[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <ModalCreator></ModalCreator>
    </div>
  );
}

function ModalCreator(){
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  )
};

export default App;
