import React, { useState, useEffect } from 'react';
import Got from '../Assets/got.png';
import '../Component/QuastinSection.css';

function QuestinSection() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [point, setPoint] = useState(0);
  const finalPoint = ()=>{
    alert(`you have${point}`);
  }

  const dev = () => {
    const data = [
      {
        qn: 'What is the capital of France?',
        a: 'Paris',
        b: 'London',
        c: 'Berlin',
        d: 'Madrid',
        ans: 'Paris',
      },
      {
        qn: 'What is the largest planet in our solar system?',
        a: 'Earth',
        b: 'Mars',
        c: 'Jupiter',
        d: 'Venus',
        ans: 'Jupiter',
      },
    ];

    setQuestions(data);
  };

  const showNextItem = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // You can wrap around to the first question when you reach the end.
      setCurrentIndex(0);
    }
  };

  const incrementPoint = () => {
    setPoint(point + 5);
  };
  const decrementPoint =()=>{
    setPoint(point -2);
  }

  useEffect(() => {
    dev();
  }, []);

  return (
    <div>
      {questions[currentIndex] && (
        <div className="Secbgc p-5 shadow-lg">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="text-white">Qn: {currentIndex + 1}</h3>
            <h3 className="text-white">Score: {point}</h3>
          </div>
          <div>
            <img src={Got} className='shadow' alt="" />
          </div>
          <div className="row m-2" style={{ width: '500px' }}>
            <div className="col-12 text-white">
              <h6 style={{ textAlign: 'center' }}>
                {questions[currentIndex].qn}
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <input
                type="button"
                className="form-control w-100 m-2 btnbgc"
                value={questions[currentIndex].a}
                onClick={()=>{questions[currentIndex].ans===questions[currentIndex].a? incrementPoint() :decrementPoint() }}
              />
            </div>
            <div className="col-6">
              <input
                type="button"
                className="form-control w-100 m-2 btnbgc"
                value={questions[currentIndex].b}
                onClick={()=>{questions[currentIndex].ans===questions[currentIndex].b? incrementPoint() :decrementPoint() }}
              />
            </div>
            <div className="col-6">
              <input
                type="button"
                className="form-control w-100 m-2 btnbgc"
                value={questions[currentIndex].c}
                onClick={()=>{questions[currentIndex].ans===questions[currentIndex].c? incrementPoint() :decrementPoint() }}
              />
            </div>
            <div className="col-6">
              <input
                type="button"
                className="form-control w-100 m-2 btnbgc"
                value={questions[currentIndex].d}
                onClick={()=>{questions[currentIndex].ans===questions[currentIndex].d? incrementPoint() :decrementPoint() }}
              />
            </div>
          </div>
          <div className="row justify-content-end mt-5">
            <button className="btn btn-danger w-25" onClick={()=>{{currentIndex==questions.length - 1?finalPoint():showNextItem()}}}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuestinSection;
