import { Container } from "../../styles"
import { ContainerModal, CardModal, ModalImage, ModalDescription, ModalTitle, ModalButton, ModalPortion, ModalButtonClose } from "./styles"
import close from '../../assets/images/close.png'
import { useDispatch } from "react-redux";
import { adicionar } from "../../store/slices/carrinhoSlice";

interface ModalPratosProps {
  id: number
  urlImage: string;
  title: string;
  description: string;
  open: boolean;
  onClick: (valor: boolean) => void;
  value: number;
  portion: string
}

const ModalPratos: React.FC<ModalPratosProps> = ({ id, urlImage, title, description, value, portion, open, onClick }) => {

  const prato = {id: id,
    preco: value,
    foto: urlImage,
    nome: title,
    descricao: description,
    porcao: portion}

  const dispath = useDispatch()

  return (
    <ContainerModal isOpen={open} onClick={() => onClick(false)}>
      <Container onClick={(e) => e.stopPropagation()}> 
        <CardModal>
          <div>
            <ModalImage src={urlImage} />
          </div>
          <div>
            <ModalTitle>{title}</ModalTitle>
            <ModalDescription>{description}</ModalDescription>
            <ModalPortion>{`Serve: ${portion}`}</ModalPortion>
            <ModalButton onClick={() => {
              dispath(adicionar(prato))
              onClick(false)
            }
              
            }>{`Adicionar ao carrinho - R$ ${value.toFixed(2)}`}</ModalButton>
            <ModalButtonClose src={close} onClick={() => onClick(false)}></ModalButtonClose>
          </div>
        </CardModal>
      </Container>
    </ContainerModal>
  );
};

export default ModalPratos;
