import React, { createContext, useState, useContext, useEffect } from "react";

const CarrinhoContext = createContext()

export default function CartProvider({ children }) {
    const [carrinho, setCarrinho] = useState([])
    const [valorTotal, setValorTotal] = useState()

    useEffect(() => {
       let valor = 0
       carrinho.map((item)=>{
           valor = valor + item.valor 
       })
       setValorTotal(valor)
    },[carrinho])

    function add(item) {
        const newCarrinho = carrinho
        newCarrinho.push(item)
        setCarrinho([...newCarrinho])

    }
    function remove (index){
        const newCarrinho = carrinho.filter((item, i)=> i!==index) 
        
        setCarrinho([...newCarrinho])
    }

    const store = {
        add,
        carrinho,
        valorTotal,
        remove

    }

    return (
        <CarrinhoContext.Provider value={store}>
            {children}

        </CarrinhoContext.Provider>
    )

}

export function useCarrinho() {
    const context = useContext(CarrinhoContext)
    const {
        carrinho,
        add,
        valorTotal,
        remove
       
    } = context

    return{
        carrinho,
            add,
            valorTotal,
            remove
    }
}