
import { Comentario } from "../model/ComentarioModel";
import { Like } from "../model/LikeModel";

export class Projeto {
    id!: number;
  link!: string;
  nome!:string;
  linguagens!:string;
  descricao!: string;
  dataPostagem!: string;
  comentarios!: Comentario[];
  likes!: Like[];

}