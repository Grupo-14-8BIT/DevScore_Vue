import { Linguagem } from "@/model/LinguagemModel";
import axios, { AxiosInstance } from "axios";

export class LinguagemClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8081/api/Linguagem',
            headers: { 'Content-type': 'application/json' }
        });
    }

    public async findById(id: number): Promise<Linguagem> {
        try {
            return (await this.axiosClient.get<Linguagem>(`/${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async listAll(): Promise<Linguagem[]> {
        try {
            return (await this.axiosClient.get<Linguagem[]>(`/lista`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(linguagem: Linguagem): Promise<void> {
        try {
            return (await this.axiosClient.post('/', linguagem)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async editar(linguagem: Linguagem): Promise<Linguagem> {
        try {
            return (await this.axiosClient.put(`/${linguagem.id}`, linguagem)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async deletar(id: number): Promise<string> {
        try {
            return (await this.axiosClient.delete<string>(`/${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

} 