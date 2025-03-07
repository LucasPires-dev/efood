export type Pratos = {
    id: number,
    preco: number,
    foto: string,
    nome: string,
    descricao: string,
    porcao: string
}

export type RestaurantesApi = {
    id: number,
    titulo: string,
    destacado: boolean,
    tipo: string,
    avaliacao: number,
    descricao: string,
    capa: string,
    cardapio: Pratos[],
}