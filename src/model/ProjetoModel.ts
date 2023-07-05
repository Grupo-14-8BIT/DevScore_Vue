
import { Comentario } from "../model/ComentarioModel";
import { Like } from "../model/LikeModel";

export class Projeto {
    id!: number;
  nome!:string;
  linguagem!: string;
  link!: string;
  descricao!: string;
  dataPostagem!: string;
  comentarios!: Comentario[];
  likes!: Like[];
  



}