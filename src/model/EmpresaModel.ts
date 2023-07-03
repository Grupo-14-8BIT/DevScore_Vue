import { Amigo } from "../model/AmigoModel";
import { Comunidade } from "../model/ComunidadeModel";

export class Empresa {
    id!: number;
  nome!: string;
  descricao!: string;
  amigos!: Amigo[];
  email!: string;
  login!: string;
  imagem!: string;
  comunidades!:Comunidade[];

 

}