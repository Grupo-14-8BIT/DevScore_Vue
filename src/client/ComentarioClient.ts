import { Comentario } from "@/model/ComentarioModel";
import axios, { AxiosInstance } from "axios";


export class ComentarioClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/Comentario',
            headers: { 'Content-type': 'application/json' }
        });
    }

    public async findById(id: number): Promise<Comentario> {
        try {
            return (await this.axiosClient.get<Comentario>(`/${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async listAll(): Promise<Comentario[]> {
        try {
            return (await this.axiosClient.get<Comentario[]>(`/lista`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

   

    public async cadastrar(comentario: Comentario): Promise<Comentario> {
        try {
            return (await this.axiosClient.post(``, comentario)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async editar(comentario: Comentario): Promise<Comentario> {
        try {
            return (await this.axiosClient.put(`/${comentario.id}`, comentario)).data
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