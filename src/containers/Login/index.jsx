// import Bg from '../../assets/bg-1.svg'
import { 
    Container, 
    LeftContainer, 
    RightContainer,
    Title,
    Form, 
    InputContainer,  
    Button       } from "./styles"


export function Login() {

    return (
        <Container>
            <LeftContainer>
            </LeftContainer>

            <RightContainer> 
                <Title>
                    Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span>Login e senha.</span> 
                </Title>

                <Form>

                <InputContainer>
                <label>Email</label>
                <input type="email" placeholder="Digite seu email" />
                </InputContainer>

                <InputContainer>
                <label>Senha</label>
                <input type="password" placeholder="Digite sua senha" />
                </InputContainer>
                <Button>Entrar</Button>
                </Form>
                <p> 
                    Não possui conta? <a> Clique aqui. </a>
                    </p>  
            </RightContainer>
        </Container>
    )
}