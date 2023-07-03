import { Comentario } from "../model/ComentarioModel";
import { Like } from "../model/LikeModel";

export class Post {
    id!: number;
  nome!: string;
  descricao!: string;
  data_post!: string;
  data_atividade!: string;
  imagem!: string;
  comentarios!: Comentario[];
  like!:Like[];



}