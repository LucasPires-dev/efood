import { ContainerModal, CardModal, CartTitle, ModalButton, CartList, CartItem, CartImage, CardPrice, InputsContaine, Label, Input, DivRow, Mensagem, Titulo} from "./styles"
import Lixeira from '../../assets/images/lixeira-de-reciclagem.png'
import React, { InputHTMLAttributes, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { limparCarrinho, remover } from "../../store/slices/carrinhoSlice";

interface ModalPratosProps {
  open: boolean;
  onClick: (valor: boolean) => void;
}

interface ModalPedidoProps {
  open: boolean;
  onClose: () => void;
}


const ModalPedido: React.FC<ModalPratosProps> = ({open, onClick: updateOpen}) => {

  const carrinhoItens = useSelector((state: RootState) => state.carrinho.itens)
  const dispatch = useDispatch()
  
  const [idPedido, setIdPedido] = useState<string>('')
  const [endereco, setEndereco] = useState({
  destinatario: '',
  cidade: '',
  cep: '',
  numero: '',
  complemento: '',
  rua: '', 
});
  const [pagamento, setPagamento] = useState({
  titular: '',
  cartao: '',
  mesValidade: '',
  anoValidade: '',
  cvv: '',
});


  const finalizarPedido = async () => {
  try {
    const response = await fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        products: carrinhoItens.map(item => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: endereco.destinatario,
          address: {
            description: endereco.rua,
            city: endereco.cidade,
            zipCode: endereco.cep,
            number: endereco.numero,
            complement: endereco.complemento
          }
        },
        payment: {
          card: {
            name: pagamento.titular,
            number: pagamento.cartao,
            code: pagamento.cvv,
            expires: {
              month: pagamento.mesValidade,
              year: pagamento.anoValidade
            }
          }
        }
      })
    });

    const responseJson: { orderId: string } = await response.json();

    setIdPedido(responseJson.orderId);

  } catch (error) {
    console.log(`Erro ao finalizar pedido:`, error);
  }
}
  
  const Carrinho: React.FC<{ onContinue: () => void}> = ({onContinue}) => (
    <>
    <Titulo>Carrinho</Titulo>
      {carrinhoItens.length > 0 ? <><CartList>
        {carrinhoItens.map(item => {
          return (<CartItem>
          <div>
            <CartImage src={item.foto}/>
          </div>
          <div>
            <CartTitle>{item.nome}</CartTitle>
            <p>R$ {item.preco.toFixed(2)}</p>
          </div>            
          <i onClick={() => dispatch(remover(item))}><img src={Lixeira}/></i>
        </CartItem>)
        })}
      </CartList>
      <CardPrice>
        <div>
          <p>Valor:</p>
          <span>
            R$ {carrinhoItens.reduce((acc, prato) => acc + prato.preco, 0).toFixed(2)}
          </span>
        </div>
        <ModalButton disabled={carrinhoItens.length === 0} onClick={onContinue}>Continuar com a entrega</ModalButton>
      </CardPrice></>: <p>Carrinho vazio</p> }
    </>
  )
  
  // Componente de endereço
  const Endereco: React.FC<{ onContinue: () => void; onBack: () => void; }> = ({ onContinue, onBack }) => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onContinue();
  };
    return (
    <form id="endereco" onSubmit={handleSubmit}>
      <Titulo>Endereço</Titulo>
      <InputsContaine>
        <div>
          <Label>Quem irá receber o pedido?</Label>
          <Input
            type="text"
            value={endereco.destinatario}
            onChange={(e) => setEndereco({ ...endereco, destinatario: e.target.value })}
          />
        </div>
        <div>
          <Label>Endereço</Label>
          <Input
            type="text"
            value={endereco.cidade}
            onChange={(e) => setEndereco({ ...endereco, cidade: e.target.value })}
          />
        </div>
        <div>
          <Label>Cidade</Label>
          <Input
            type="text"
            value={endereco.cep}
            onChange={(e) => setEndereco({ ...endereco, cep: e.target.value })}
          />
        </div>
        <DivRow>
          <div>
            <Label>CEP</Label>
            <Input
              type="text"
              value={endereco.numero}
              onChange={(e) => setEndereco({ ...endereco, numero: e.target.value })}
            />
          </div>
          <div>
            <Label>Número</Label>
            <Input
              type="text"
              value={endereco.complemento}
              onChange={(e) => setEndereco({ ...endereco, complemento: e.target.value })}
            />
          </div>
        </DivRow>
        <div>
          <Label>Complemento (opcional)</Label>
          <Input
            type="text"
            value={endereco.rua}
            onChange={(e) => setEndereco({ ...endereco, rua: e.target.value })}
          />
        </div>
      </InputsContaine>
      <CardPrice>
        <ModalButton form="endereco">Continuar com o pagamento</ModalButton>
        <ModalButton onClick={onBack}>Voltar para o carrinho</ModalButton>
      </CardPrice>
    </form>
  )};
  
  // Componente de pagamento
  const Pagamento: React.FC<{ onContinue: () => void; onBack: () => void }> = ({ onContinue, onBack }) => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onContinue();
    }

    return (
    <form id="pagamento" onSubmit={handleSubmit}>
      <Titulo>Pagamento</Titulo>
      <InputsContaine>
        <div>
          <Label>Nome no Cartão</Label>
          <Input
            type="text"
            value={pagamento.titular}
            onChange={(e) => setPagamento({ ...pagamento, titular: e.target.value })}
          />
        </div>
        <DivRow col1={70} col2={30}>
          <div>
            <Label>Número do cartão</Label>
            <Input
              type="text"
              value={pagamento.cartao}
              onChange={(e) => setPagamento({ ...pagamento, cartao: e.target.value })}
            />
          </div>
          <div>
            <Label>CVV</Label>
            <Input
              type="text"
              value={pagamento.cvv}
              onChange={(e) => setPagamento({ ...pagamento, cvv: e.target.value })}
            />
          </div>
        </DivRow>
        <DivRow>
          <div>
            <Label>Mês do vencimento</Label>
            <Input
            type="text"
            value={pagamento.mesValidade}
            onChange={(e) => setPagamento({ ...pagamento, mesValidade: e.target.value })}
          />
          </div>
          <div>
            <Label>Ano do vencimento</Label>
            <Input
            type="text"
            value={pagamento.anoValidade}
            onChange={(e) => setPagamento({ ...pagamento, anoValidade: e.target.value })}
          />
          </div>
        </DivRow>
      </InputsContaine>
      <CardPrice>
        <ModalButton type="submit" form="pagamento">Finalizar o pagamento</ModalButton>
        <ModalButton onClick={onBack}>Voltar</ModalButton>
      </CardPrice>
    </form>
  )};
  
  const MensagemPedidoFeito: React.FC<{onBack: () => void; }>  = ({onBack}) => (
    <>
      <Titulo>Pedido realizado - {idPedido}</Titulo>
      <Mensagem>
      <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
      <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>
      <p>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
      <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
      </Mensagem>
    
      <CardPrice>
        <ModalButton onClick={onBack}>Okay!</ModalButton>
      </CardPrice>
    </>
  )
  
  const [etapa, setEtapa] = useState<"carrinho" | "endereco" | "pagamento" | "mensagemPedidoCriado">("carrinho");

  if (!open) return null; // Modal fechado

  return (
    <ContainerModal isOpen={open} onClick={() => updateOpen(false)}>
  <CardModal onClick={(e) => e.stopPropagation()}>
    {etapa === "carrinho" && (
      <Carrinho onContinue={() => setEtapa("endereco")} />
    )}
    {etapa === "endereco" && (
      <Endereco
        onContinue={() => setEtapa("pagamento")}
        onBack={() => setEtapa("carrinho")}
      />
    )}
    {etapa === "pagamento" && (
      <Pagamento
        onContinue={() => {
          finalizarPedido()
          setEtapa("mensagemPedidoCriado")
        }}
        
        onBack={() => setEtapa("endereco")}
      />
    )}
    {etapa === "mensagemPedidoCriado" && (
      <MensagemPedidoFeito
        onBack={() => {
          updateOpen(false);
          setEtapa("carrinho");
          setIdPedido('')
          dispatch(limparCarrinho());
        }}
      />
    )}
  </CardModal>
</ContainerModal>
  );
};

export default ModalPedido;
