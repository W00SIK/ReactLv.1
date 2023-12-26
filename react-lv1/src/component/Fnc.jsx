import React, { useState } from "react"
import Main from "./Main"
const Fnc = () => {

    // 기본 배열
    const [goal, setGoal] = useState([
        { goalId: 1, goal: "리액트 공부하기", goalDetail: "리엑트 기초를 공부해봅시다." },
    ])
    const [done, setDone] = useState([
        { doneId: 1, done: "리액트 공부하기", doneDetail: "리엑트 기초를 공부해봅시다." },
    ])

    // 제목, 내용 input
    const [title, setTitle] = useState()
    const [detail, setDetail] = useState()

    // 추가 버튼
    const addBtnHendlker = () => {
        const newgoal = {
            id: goal.length + 1,
            goal: title,
            goalDetail: detail,
        }
        setGoal([...goal, newgoal]);
        setTitle("")
        setDetail("")
    };


    // 완료 버튼
    const doneBtnHendler = (index) => {
        const newdone = {
            id: done.length + 1,
            done: goal[index].goal,
            doneDetail: goal[index].goalDetail,
        }
        setDone([...done, newdone]);
        console.log(done)
        removeBtnHendler()
    }

    // 취소 버튼
    const cancelBtnHendler = (index) => {
        const newgoal = {
            id: goal.length + 1,
            goal: done[index].done,
            goalDetail: done[index].doneDetail,
        }
        setGoal([...goal, newgoal]);
        removeBtnHendlerW()
    }


    // 제거 버튼
    const removeBtnHendler = (id) => {
        const a = goal.filter((item) => item.goalId !== id)
        setGoal(a)
    }
    const removeBtnHendlerW = (id) => {
        const a = done.filter((item) => item.doneId !== id)
        setDone(a)
    }

    return (
        <Main 
        title={title}
        detail={detail}
        goal={goal}
        done={done}
        setTitle={setTitle}
        setDetail={setDetail}
        addBtnHendlker={addBtnHendlker}
        removeBtnHendler={removeBtnHendler}
        doneBtnHendler={doneBtnHendler}
        removeBtnHendlerW={removeBtnHendlerW}
        cancelBtnHendler={cancelBtnHendler}
        ></Main>
    )
}


export default Fnc