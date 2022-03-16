import './App.css';
import Site from './Site';

function App() {
  return (
    <div>
      <div id="navBar">
        <h1> 리액트 프로그래밍 시작 </h1>
      </div>
      <Site/>
      <h2>첫번째 실습</h2>
      <p>
        이 모양을 만든 후 src폴더만 압축하여 사이버캠퍼스 과제게시판에 올려
        주세요
      </p>
      <div>다른 사람의 것을 보고 하면 안됩니다</div>
    </div>
  );
}

export default App;
