interface IFurnitureDescription {
    type: string,
    name: string,
    code: string,
    design: string,
    littleDescription: string,
    description: string
}

interface IFurniture {
    id: string, 
    header: string, 
    text: string,
    image: string,
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