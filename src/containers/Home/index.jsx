import { CategoryCarrousel } from "../../components/CategoryCarrousel";
import { 
    Banner, 
    Container, 
    Content } from "./styles";


export function Home() {
    return (
        <main>
            <Banner>
            <h1>Bem-vindo(a)!</h1>
            </Banner>
            
            <Container>
                <Content>
                    <CategoryCarrousel/>
                    <div>Carrosel Produtos</div>
                </Content>
            </Container>
            
        </main>
        
    )
}