import { AbstractEntity } from "./AbstractEntity";

export class Linguagem extends AbstractEntity {
    nome! : string

    constructor(){
        super()
        this.ativo = true
    }
}