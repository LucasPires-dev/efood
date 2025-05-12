import { ContainerModal, CardModal, CartTitle, ModalButton, CartList, CartItem, CartImage, CardPrice, Form, Label, Input, DivRow, Mensagem, Titulo} from "./styles"
import Lixeira from '../../assets/images/lixeira-de-reciclagem.png'
import React, { useState } from "react";

interface ModalPratosProps {
  open: boolean;
  onClick: (valor: boolean) => void;
}

interface ModalPedidoProps {
  open: boolean;
  onClose: () => void;
}

const Carrinho: React.FC<{ onContinue: () => void}> = ({onContinue}) => (
  <>
  <Titulo>Carrinho</Titulo>
    <CartList>
      <CartItem>
        <div>
          <CartImage src="https://cdn-images.dzcdn.net/images/artist/fc07c0d163fa262eafc16c28ff09425a/1900x1900-000000-80-0-0.jpg"/>
        </div>
        <div>
          <CartTitle>jkadksdajhksdhajk</CartTitle>
          <p>R$ 20,00</p>
        </div>            
        <i><img src={Lixeira}/></i>
      </CartItem>
    </CartList>
    <CardPrice>
      <div>
        <p>Valor:</p>
        <span>
          R$100,00
        </span>
      </div>
      <ModalButton onClick={onContinue}>Coninuar com a entrega</ModalButton>
    </CardPrice>
  </>
)

// Componente de endereço
const Endereco: React.FC<{ onContinue: () => void; onBack: () => void; }> = ({ onContinue, onBack }) => (
  <div>
    <Titulo>Endereço</Titulo>
    <Form>
      <div>
        <Label>Quem irá receber o pedido?</Label>
        <Input type="text" />
      </div>
      <div>
        <Label>Endereço</Label>
        <Input type="text" />
      </div>
      <div>
        <Label>Cidade</Label>
        <Input type="text" />
      </div>
      <DivRow>
        <div>
          <Label>CEP</Label>
          <Input type="number" />
        </div>
        <div>
          <Label>Número</Label>
          <Input type="number" />
        </div>
      </DivRow>
      <div>
        <Label>Complemento (opcional)</Label>
        <Input type="text" />
      </div>
    </Form>
    <CardPrice>
      <ModalButton onClick={onContinue}>Continuar com o pagamento</ModalButton>
      <ModalButton onClick={onBack}>Voltar para o carrinho</ModalButton>
    </CardPrice>
  </div>
);

// Componente de pagamento
const Pagamento: React.FC<{ onContinue: () => void; onBack: () => void }> = ({ onContinue, onBack }) => (
  <div>
    <Titulo>Pagamento</Titulo>
    <Form>
      <div>
        <Label>Nome no Cartão</Label>
        <Input type="text" />
      </div>
      <DivRow col1={70} col2={30}>
        <div>
          <Label>Número do cartão</Label>
          <Input type="number" />
        </div>
        <div>
          <Label>CVV</Label>
          <Input type="number" />
        </div>
      </DivRow>
      <DivRow>
        <div>
          <Label>Mês do vencimento</Label>
          <Input type="number" />
        </div>
        <div>
          <Label>Ano do vencimento</Label>
          <Input type="number" />
        </div>
      </DivRow>
    </Form>
    <CardPrice>
      <ModalButton onClick={onContinue}>Finalizar o pagamento</ModalButton>
      <ModalButton onClick={onBack}>Voltar</ModalButton>
    </CardPrice>
  </div>
);

const MensagemPedidoFeito: React.FC<{onBack: () => void; }>  = ({onBack}) => (
  <>
    <Titulo>Pedido realizado - #1234567-89</Titulo>
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

const ModalPedido: React.FC<ModalPratosProps> = ({open, onClick: updateOpen}) => {

  const [etapa, setEtapa] = useState<"carrinho" | "endereco" | "pagamento" | "mensagemPedidoCriado">("carrinho");

  if (!open) return null; // Modal fechado

  return (
    <ContainerModal isOpen={open}>
      <CardModal>
        {etapa === "carrinho" && (
          <Carrinho
            onContinue={() => setEtapa("endereco")}
          />
        )}
        {etapa === "endereco" && (
          <Endereco
            onContinue={() => setEtapa("pagamento")}
            onBack={() => setEtapa("carrinho")}
          />
        )}
        {etapa === "pagamento" && (
          <Pagamento
            onContinue={() => setEtapa("mensagemPedidoCriado")}
            onBack={() => setEtapa("endereco")}
          />
        )}
        {etapa === "mensagemPedidoCriado" && (
          <MensagemPedidoFeito
            onBack={() => {
              updateOpen(false)
              setEtapa("carrinho")
            }}
          />
        )}
      </CardModal>
    </ContainerModal>
  );
};

export default ModalPedido;
