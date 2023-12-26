import React from "react"

const Main = ({
    title, 
    detail, 
    goal, 
    done, 
    setTitle, 
    setDetail, 
    addBtnHendlker, 
    doneBtnHendler, 
    removeBtnHendler, 
    cancelBtnHendler,
    removeBtnHendlerW, 
}) => {
    return (
        <div className = "form">
            <div className="navBarStyle">
                <div >My Todo List</div>
                <div>React</div>
            </div>
            <div className="inputBarStyle">
                제목
                <input
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value)
                    }}
                />
                내용
                <input
                    value={detail}
                    onChange={(event) => {
                        setDetail(event.target.value)
                    }}
                />
                <button className="addBtnStyle" onClick={addBtnHendlker}>
                    추가하기
                </button>
            </div>

            <div className="main">
                <div className="workingFontH">
                    Working..
                </div>
                <div className="workingStyle">
                    {
                        goal.map((item, index) => {
                            return (
                                <div key={item.goalId} className="workingBoxStyle">
                                    <div>
                                        <div className="workingFontH">{item.goal}</div>
                                        <div className="workingFontH2">{item.goalDetail}</div>
                                    </div>
                                    <div className="workingBoxBtnStyle">
                                        <button className="workBtn" onClick={() => removeBtnHendler(item.goalId)}>삭제하기</button>
                                        <button className="workBtn" onClick={() => doneBtnHendler(index)}>완료</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="workingFontH">
                    Done..!
                </div>
                <div className="workingStyle">
                    {
                        done.map((item, index) => {
                            return (
                                <div key={item.id} className="workingBoxStyle">
                                    <div>
                                        <div className="workingFontH">{item.done}</div>
                                        <div className="workingFontH2">{item.doneDetail}</div>
                                    </div>
                                    <div className="workingBoxBtnStyle">
                                        <button className="workBtn" onClick={() => removeBtnHendlerW(item.doneId)}>삭제하기</button>
                                        <button className="workBtn" onClick={() => cancelBtnHendler(index)}>취소</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Main