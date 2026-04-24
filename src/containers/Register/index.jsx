import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { api } from "../../services/api"
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"


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


export function Register() {
    const navigate = useNavigate()
    const schema = yup
    .object({
        name: yup.string().required("Nome é obrigatório"),
    email: yup
    .string()
    .email("Email inválido")
    .required("Email é obrigatório"),
    password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais")
    .required("Confirmação de senha é obrigatória")
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

        try {
            const {status} = await
        api.post("/users", {
                name: data.name,
                email: data.email,
                password: data.password,
        },
    {
        validateStatus: () => true, 
    }
);

if (status === 200 || status === 201){
    setTimeout(() => {
        navigate("/login");
    }, 2000);
    toast.success("Conta criada com sucesso!")
} else if (status === 400 ) {
    toast.error("Email já cadastrado.")
} else {
    throw new Error();
}
       
        
        // console.log(status);
        }    catch (error) {
            toast.error("Ocorreu um erro ao criar a conta. Tente novamente.")

        }
        

       
    }

    return (
        <Container>
            <LeftContainer>
            </LeftContainer>

            <RightContainer> 
                <Title>
                    Criar Conta
                </Title>

                <Form onSubmit={handleSubmit(onSubmit)}>

                    <InputContainer>
                <label>Nome</label>
                <input type="text" placeholder="Digite seu nome" {...register("name")} />
                <p>{errors.name?.message}</p>
                </InputContainer>

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

                  <InputContainer>
                <label>Confirmar Senha</label>
                <input type="password" placeholder="Digite sua senha novamente" {...register("confirmPassword")} />
                <p>{errors.confirmPassword?.message}</p>
                </InputContainer>
                <Button type="submit">Criar Conta</Button>
                </Form>
                <p> 
                    Já possui conta? <Link to="/login"> Clique aqui. </Link>
                    </p>  
            </RightContainer>
        </Container>
    )
}