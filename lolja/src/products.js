import styled from "styled-components";


const SDiv= styled.div`
    height: 260px;
    padding: 10px;
    border-radius: 10px;
    background: #f2f2f2;
    cursor: pointer;
    
    img {
        width: 100%;
        height: 140px;
        border-radius: 5px;
    }
`;

const SDivInfo = styled.div`
    padding: 15px;

    P {
        font-size: 15 px;
    }
    span {
        font-size: 20px;
        font-weight: bold;
    }
`;

/**
 * @param {object} product Produto Listagem
 * @param {Function} onClick Funcao de seleção
 */

function Product({product, onClick}){
    let conts = (<SDiv onClick={() => onClick(product)}>
        <img src={product.image} alt={product.name}/>
        <SDivInfo>
            <p>{product.name}</p>
            <span>R${product.price}</span>
        </SDivInfo>
    </SDiv>);
    return conts;
}

const SSection = styled.section`
 overflow:auto;
 padding: 20px;
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
 grid-auto-rows: 230px;
  gap: 20px;
`;

/**
 * @param {object[]} products Produto Listagem
 * @param {Function} onClick Funcao de seleção
 */

function Products({products, onClick, isLoading = false}){
    let elemt = (
        <SSection>
            {isLoading ? "Carreagngo..."
            : products.length > 0 
            ? products.map((product) => (<Product key={product.id} product={product} onClick={onClick}/>))
            : "nenhum produto encontrado"
            }
        </SSection>
    );
    return elemt;

}

export default Products;