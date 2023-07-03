import axios, { AxiosInstance } from "axios";

import { Desenvolvedor } from "@/model/DesenvolvedorModel";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";

export class DesenvolvedorClient {
    
    private axiosClient : AxiosInstance

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/desenvolvedor',
            headers: {'Content-Type' : 'application/json'}
        });
    }

    public async findById(id : number) : Promise<Desenvolvedor> {
        try {
            return (await this.axiosClient.get<Desenvolvedor>(`/${id}`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async findAll() : Promise<Desenvolvedor[]> {
        try {
            return (await this.axiosClient.get<Desenvolvedor[]>(`/findAll`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async findByAtivo() : Promise<Desenvolvedor[]> {
        try {
            return (await this.axiosClient.get<Desenvolvedor[]>(`/ativo`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(dev : Desenvolvedor) : Promise<string> {
        try {
            return (await this.axiosClient.post(`/create`, dev))
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async edit(id: number, dev: Desenvolvedor) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/update?id=${id}`, dev)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async deletar(id : number) : Promise<string> {
        try {
            return (await this.axiosClient.delete(`/${id}`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async findByFiltrosPaginado(pageRequest : PageRequest) : Promise<PageResponse<Desenvolvedor>> {
        try {
            let requestPath = ''

            requestPath += `?page=${pageRequest.currentPage}`
            requestPath += `&size=${pageRequest.pageSize}`
            requestPath += `&sort=${pageRequest.sortField === undefined ? '' : pageRequest.sortField}, ${pageRequest.direction}`

            return (await this.axiosClient.get<PageResponse<Desenvolvedor>>(requestPath, {params : {filtros : pageRequest.filter } })).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }
}

export default new DesenvolvedorClient();