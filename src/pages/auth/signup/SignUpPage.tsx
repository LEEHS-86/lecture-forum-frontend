import styled from "styled-components";

const AuthContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AuthFormCard = styled.form`
    width: 100%;
    max-width: 480px;
    background-color: ${props => props.theme.color.background.paper};
    border-radius: 16px;
    border: 1px solid ${props => props.theme.color.divider};
    padding: 40px 20px;    
`;

const AuthTitle = styled.h1`
    font-size: 28px;
    font-weight: 800;
    color: ${props => props.theme.color.primary};
    margin-bottom: 8px;
    text-align: center;
`;

const AuthSubTitle = styled.h6`
    font-size: 15px;
    color: ${props => props.theme.color.text.disabled};
    text-align: center;
    margin-bottom: 32px;
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Label = styled.label`
    font-size: 14px;
    font-weight: 800;
    color: ${props => props.theme.color.text.default};
`;

const Input = styled.input`
    width: 100%;
    padding: 12px 16px;
    background-color: ${props => props.theme.color.background.default};
    border: 1px solid ${props => props.theme.color.divider};
    border-radius: 8px;
    font-size: 15px;
    color: ${props => props.theme.color.text.default};
    transition: all 0.5s;

    &::placeholder {
        color: ${props => props.theme.color.text.disabled};
    }
    &::focus {
        border-color: ${props => props.theme.color.primary};
    }
`;
const ErrorMessage = styled.span`
    font-size: 13px;
    color: ${props => props.theme.color.error};
    font-weight: 500;
`;


function SignUpPage() {
    return (
        <AuthContainer>
            <AuthFormCard>
                <AuthTitle>회원가입</AuthTitle>
                <AuthSubTitle>토론대난투에 오신 걸 환영합니다!</AuthSubTitle>
                <InputGroup>
                    <Label>아이디</Label>
                    <Input />
                    <ErrorMessage>에러메세지 출력</ErrorMessage>
                </InputGroup>
            </AuthFormCard>
        </AuthContainer>
    )
}

export default SignUpPage;
