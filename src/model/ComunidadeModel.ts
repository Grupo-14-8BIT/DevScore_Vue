import { Desenvolvedor } from "../model/DesenvolvedorModel";
import { Projeto } from "../model/ProjetoModel";


export class Comunidade {
    id!: number;
  descricao!: string;
  projeto!: Projeto[];
  membros!: Desenvolvedor[];
 



}