import { Desenvolvedor } from "../model/DesenvolvedorModel";
import { Like } from "../model/LikeModel";
import { Post } from "../model/PostModel";


export class Comentario {
    id!: number;
  comentario!: Comentario[];
  post!: Post;
  user!: Desenvolvedor;
  tento!: string;
  data!: string;
  like!: Like[];



}