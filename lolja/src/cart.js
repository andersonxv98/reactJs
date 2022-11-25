import styled from "styled-components";
import Button from "./button";

const SLi= styled.li`
    margin-bottom: 10px;
    padding: 16 px;
    border-radius: 8px;
    background: #f2f2f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SDivInfo = styled.div`
    P {
        font-size: 16 px;
        margin-bottom: 2px;
    }
    span {
        font-size: 16px;
        font-weight: bold;
    }
`;

const SDivUnits = styled.div`
    width: 86px,
    display: flex,
    justify-content: space-between;
    align-items: center;

    button {
        padding: 5px 10px;
        border: 1 px solid #ffffff;
        border-radius: 5 px;
        cursor:pointer;
    }
`;

/**
 * @param {object} product Produto Listagem
 */

function CartProduct({product, onChange, isLoading}) {
    let elemt = (
        <SLi>
            <SDivInfo>
                <p>{product.name}</p>
                <span> R${product.price}</span>
            </SDivInfo>
        
        <SDivUnits>
         <button disabled={isLoading} on onClick={() =>{product, -1}}>
            -
         </button>
         <p>{product.units}</p>
         <button disabled={isLoading} on onClick={() =>{product, +1}}>
            +
         </button>
        </SDivUnits>
        </SLi>        

    );

    return elemt;
}

const SSection = styled.section`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 50px;
    gap: 20px
`;

const SUl = styled.ul `
    list-style-type: none;
`;

/**
 *@param {Object[]} products Produtos de listagem
 *@param {Function} onClick Função de finalização
 *@param {Boolean} isLoading status do carregamento
 */

 function Cart({products, onChange, onClick, isLoading = false}){
    let elem = (
        <SSection>
            <SUl>
                {products.map((product)=>(
                    <CartProduct
                        key={product.id}
                        product= {product}
                        onChange = {onChange}
                        isLoading = {isLoading}
                        />
                ))}
            </SUl>
            <Button onClick={onClick} isLoading={isLoading}>
                Finalizar Compra
            </Button>
        </SSection>
    )
    return elem;
 }
 export default Cart;