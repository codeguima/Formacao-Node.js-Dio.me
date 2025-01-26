import * as http from "http";
import { HttpMethod } from "./utils/http-methods";
import { Routes } from "./routes/routes";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { StatusCode } from "./utils/status-code";
import { ContentType } from "./utils/content-type";


export const app = async (
     request: http.IncomingMessage, 
     response: http.ServerResponse
    
    ) => {
        try {
            const baseUrl = request.url?.split("?")[0];

            if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
                await getListEpisodes(request, response);

            } else if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
                await getFilterEpisodes(request, response);

            } else {
                response.writeHead(StatusCode.NOT_FOUND, { 'content-type': ContentType.JSON });
                response.end(JSON.stringify({ error: "Rota não encontrada" }));
            }
        } catch (error:any) {
            response.writeHead(StatusCode.INTERNAL_SERVER_ERROR, { 'content-type': ContentType.JSON });
            response.end(JSON.stringify({ error: error.message || "Erro interno do servidor" }));
        }
};
