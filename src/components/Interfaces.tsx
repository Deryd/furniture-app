interface IFurnitureDescription {
    type: string,
    name: string,
    code: string,
    design: string,
    littleDescription: string,
    description: string
}

interface ICardMedia {
    image: string,
    title: string
}

interface IFurniture {
    id: string, 
    header: string, 
    text: string,
    furnitureDescription: IFurnitureDescription
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