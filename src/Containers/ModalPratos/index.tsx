import { Container } from "../../styles"
import { ContainerModal, CardModal, ModalImage, ModalDescription, ModalTitle, ModalButton, ModalPortion, ModalButtonClose } from "./styles"
import close from '../../assets/images/close.png'

interface ModalPratosProps {
  urlImage: string;
  title: string;
  description: string;
  open: boolean;
  onClick: (valor: boolean) => void;
  value: number;
  portion: string
}

const ModalPratos: React.FC<ModalPratosProps> = ({ urlImage, title, description, value, portion, open, onClick }) => {
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
            <ModalButton>{`Adicionar ao carrinho - R$ ${value}`}</ModalButton>
            <ModalButtonClose src={close} onClick={() => onClick(false)}></ModalButtonClose>
          </div>
        </CardModal>
      </Container>
    </ContainerModal>
  );
};

export default ModalPratos;
