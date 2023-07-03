import { Amigo } from "../model/AmigoModel";
import { Projeto } from "../model/ProjetoModel";

export class Desenvolvedor {
    id!: number;
  ativo!: boolean;
  nome!: string;
  nick!: string;
  email!: string;
  senha!: string;
  profile_imagem!: string;
  amigo!: Amigo[];
  projeto!:Projeto[];

  
constructor() { }
}