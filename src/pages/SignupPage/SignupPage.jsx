/** @jsxImportSource @emotion/react */
import * as s from './style';

function SignupPage(props) {
    return (
        <div css={s.mainLayout}>
            <div css={s.layout}>
                <div css={s.headerLayout}>
                    {/* 로고 자리 */}
                    <h1>회원가입</h1>
                </div>
                <div css={s.container}>
                    <div css={s.inputUser}>
                        <input type="text" name="username"/>
                        <input type="text" name="password"/>
                        <input type="text" name="checkPassword"/>
                        <input type="text" name="name"/>
                        <input type="text" name="email"/>
                    </div>
                    <div css={s.inputPhone}>
                        <input type="text" name="phone"/>
                        <button>인증요청</button>
                        {/* 인증번호 요청 누르면 인증번호 칸 활성화되게(추가) */}
                    </div>
                </div>
                <div css={s.joinOkButton}>
                    <button>회원가입 하기</button>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;