export type  TestItem = Pick<TestItemResponse, "name" | "updated_at" | "created_at" | 'id'>

export interface TestItemResponse {
    id: number,
    name: string,
    updated_at: any,
    created_at: any
}