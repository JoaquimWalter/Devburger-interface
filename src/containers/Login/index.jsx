import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import {useNavigate} from "react-router-dom"
import * as yup from "yup"
import { api } from "../../services/api"
import {toast} from "react-toastify"


import { 
    Container, 
    LeftContainer, 
    RightContainer,
    Title,
    Form, 
    InputContainer,  
    Link
          } from "./styles"

    import { Button } from "../../components/Button"


export function Login() {
    const navigate = useNavigate()      

    const schema = yup
    .object({
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Senha é obrigatória")
})
.required()


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
     })

     async function onSubmit  (data) {
       const {
        data: {token}
    } = await toast.promise(
        api.post("/sessions", {
                email: data.email,
                password: data.password,
        }),{
            pending: "Verificando suas credenciais...",
            success:{
                render() {
                    setTimeout(() => {
                        navigate("/");
                    }, 2000);
                    return "Login realizado com sucesso!"
                }

            },
            error: "Ops, algo deu errado. Verifique suas credenciais e tente novamente."
        },
       )
       
        
        localStorage.setItem("token", token)
    }

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

                <Form onSubmit={handleSubmit(onSubmit)}>

                <InputContainer>
                <label>Email</label>
                <input type="email" placeholder="Digite seu email" {...register("email")} />
                <p>{errors.email?.message}</p>
                </InputContainer>

                <InputContainer>
                <label>Senha</label>
                <input type="password" placeholder="Digite sua senha" {...register("password")} />
                <p>{errors.password?.message}</p>
                </InputContainer>
                <Button type="submit">Entrar</Button>
                </Form>
                <p> 
                    Não possui conta? <Link to="/cadastro"> Clique aqui. </Link>
                    </p>  
            </RightContainer>
        </Container>
    )
}