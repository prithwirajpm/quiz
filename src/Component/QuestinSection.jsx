import React, { useState, useEffect, useRef } from 'react';
import Got from '../Assets/got.png';
import '../Component/QuastinSection.css';
import AlertScroe from './AlertScroe';

function QuestinSection() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [point, setPoint] = useState(0);
  const [btnColor, setbtnColor] = useState('btnbgc');
  const [showBox, setShowBox] = useState(true);


  const buttonRef = useRef(null)

  const [btnColors, setBtnColors] = useState(['btnDanger', 'btnDanger', 'btnDanger', 'btnDanger']);


  const finalPoint = () => {
    if (point == 0) {
      alert("Question is Over");
      window.location.reload();
    } else {
      alert(`you have${point}`);
      // window.location.reload();
    }

  }

  const dev = () => {
    const data = [
      {
        qn: 'Who is known as "The Imp" in Game of Thrones?',
        a: 'Jon Snow',
        b: 'Tyrion Lannister',
        c: 'Jaime Lannister',
        d: 'Eddard Stark',
        ans: 'Tyrion Lannister',
      },
      {
        qn: 'What is the name of Daenerys Targaryen\'s largest dragon?',
        a: 'Rhaegar',
        b: 'Viserion',
        c: 'Drogon',
        d: 'Balerion',
        ans: 'Drogon',
      },
      {
        qn: 'Which house\'s sigil features a direwolf?',
        a: 'House Targaryen',
        b: 'House Lannister',
        c: 'House Stark',
        d: 'House Baratheon',
        ans: 'House Stark',
      },
      {
        qn: 'Who is known as the "Red Woman" and is a priestess of R\'hllor?',
        a: 'Cersei Lannister',
        b: 'Melisandre',
        c: 'Margaery Tyrell',
        d: 'Catelyn Stark',
        ans: 'Melisandre',
      },
      {
        qn: 'Which character loses their hand early in the series but later gets a gold replacement?',
        a: 'Theon Greyjoy',
        b: 'Jorah Mormont',
        c: 'Jon Snow',
        d: 'Jaime Lannister',
        ans: 'Jaime Lannister',
      },
      {
        qn: 'Which character loses their hand early in the series but later gets a gold replacement?',
        a: 'Theon Greyjoy',
        b: 'Jorah Mormont',
        c: 'Jon Snow',
        d: 'Jaime Lannister',
        ans: 'Jaime Lannister',
      },
    ];

    setQuestions(data);
  };

  const showNextItem = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // You can wrap around to the first question when you reach the end.
      const alertMsg = point === 0 ? "Question is Over" : `you have${point}`;

      alert(alertMsg);
      window.location.reload();

    }
  };

  const incrementPoint = (e) => {
    console.log(e);
    setbtnColor('btnRed');
    setTimeout(() => {
      setPoint(point + 5);
      if (currentIndex != questions.length - 1) {
        showNextItem();
        setbtnColor();
      } else {
        // finalPoint()
      }
    }, 500);
  };
  const decrementPoint = () => {
    setbtnColor('btnGreen');
    setTimeout(() => {
      setPoint(point - 2);
      if (currentIndex != questions.length - 1) {
        showNextItem();
        setbtnColor();
      } else {
        // finalPoint()
      }
    }, 500);

  }

  const checkAns = (option) => {
    const options = { a: 0, b: 1, c: 2, d: 3 }
    const q = questions[currentIndex]
    const correctAnswer = q.ans
    const userAnswer = q[option]
    const successColor = "btnGreen"
    const wrongColor = "btnRed"
    const buttonColors = ["btnDanger", "btnDanger", "btnDanger", "btnDanger"]

    const userAnswerIndex = options[option]
    let score = point

    if (userAnswer === correctAnswer) {
      // Correct answer given
      buttonColors[userAnswerIndex] = successColor
      score += 5
    } else {
      // Wrong answer given
      buttonColors[userAnswerIndex] = wrongColor
      score -= 2

      const correctOption = Object.entries(q).filter((item) => item[1] == correctAnswer)[0][0]
      const correctAnswerIndex = options[correctOption]
      buttonColors[correctAnswerIndex] = successColor
    }

    setPoint(score)
    setBtnColors(buttonColors)
    setTimeout(() => {
      setBtnColors(["btnDanger", "btnDanger", "btnDanger", "btnDanger"]);
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        // You can wrap around to the first question when you reach the end.
        const alertMsg = point === 0 ? "Question is Over" : `you have ${score}`;

        alert(alertMsg);
        window.location.reload();

      }

      buttonRef.current.blur();

    }, 500);


  }

  useEffect(() => {
    dev();
  }, []);

  return (
    <div>
      {
        currentIndex == questions.length - 1 ? <AlertScroe point={point} /> :

          <div>
            {questions[currentIndex] && (
              <div className="Secbgc p-5 shadow-lg" style={{ width: '750px',height:'651px' }}>
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="text-white">Qn: {currentIndex + 1}</h3>
                  <h3 className="text-white">Score: {point}</h3>
                </div>
                <div className="w-100 d-flex justify-content-center align-items-center">
                  <img src={Got} className='shadow' alt="" />
                </div>
                <div className="row pt-3 pb-3 w-100">
                  <div className="col-12 text-white d-flex justify-content-center align-items-center">
                    <h5 style={{ textAlign: 'center' }}>
                      {questions[currentIndex].qn}
                    </h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <input
                      id='btn_a'
                      type="button"
                      className={`form-control w-100 m-2 ${btnColors[0]}`}
                      value={questions[currentIndex].a}
                      onClick={() => checkAns('a')}
                      ref={buttonRef}
                    // onClick={() => { questions[currentIndex].ans === questions[currentIndex].a ? incrementPoint() : decrementPoint() }}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="button"
                      className={`form-control w-100 m-2 ${btnColors[1]}`}
                      value={questions[currentIndex].b}
                      onClick={() => checkAns('b')}
                      ref={buttonRef}
                    // onClick={() => { questions[currentIndex].ans === questions[currentIndex].b ? incrementPoint(this) : decrementPoint() }}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="button"
                      className={`form-control w-100 m-2 ${btnColors[2]}`}
                      value={questions[currentIndex].c}
                      onClick={() => checkAns('c')}
                      ref={buttonRef}

                    // onClick={() => { questions[currentIndex].ans === questions[currentIndex].c ? incrementPoint() : decrementPoint() }}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="button"
                      className={`form-control w-100 m-2 ${btnColors[3]}`}
                      value={questions[currentIndex].d}
                      onClick={() => checkAns('d')}
                      ref={buttonRef}
                    // onClick={() => { questions[currentIndex].ans === questions[currentIndex].d ? incrementPoint() : decrementPoint() }}
                    />
                  </div>
                </div>
                <div className="row justify-content-end mt-5">
                  <input type="submit" className="btn platinum w-25" onClick={() => { { currentIndex == questions.length - 1 ? finalPoint() : showNextItem() } }} value="Skip" />

                </div>
              </div>
            )}
          </div>
      }
    </div>

  );
}

export default QuestinSection;




