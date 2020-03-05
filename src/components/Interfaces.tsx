interface ICardHeader {
    title: string,
    subheader: string
}

interface ICardMedia {
    image: string,
    title: string
}

interface IFurniture {
    id: string, 
    header: string, 
    text: string,
    cardheader: ICardHeader
}

interface IProps {
    input: string
}

interface IFurnitureList {
    furniture: IFurniture[]
}

interface INoteAdd {
    onNoteAdd(note: IFurniture): void
}

export { IFurniture, IFurnitureList, INoteAdd }