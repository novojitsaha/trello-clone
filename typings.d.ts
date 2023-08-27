interface Board {
    columns: Map<TypedColumn, Column>
}

type TypedColumn = "todo" | "inProgress" | "done"

interface Column {
    id: TypeColumn,
    todos: Todo[]
}

interface Todo {
    $id: string,
    $createdAt: string,
    title: string,
    status: TypedColumn,
    image?: string,
}

interface Image {
    bucketId: string,
    fileId: string,

}