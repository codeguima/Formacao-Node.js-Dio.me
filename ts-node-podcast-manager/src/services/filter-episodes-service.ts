

import { PodcastTransferModel } from "../models/transfer-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repositories"
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
    podcastName: string | undefined

):Promise<PodcastTransferModel> => {
    try {

        let responseFormat: PodcastTransferModel = {
            statusCode: 0,
            body: [],
        };

        const queryString = podcastName?.split("?p=")[1] || "";
        const data = await repositoryPodcast(queryString);

        if (!queryString) {
            throw new Error("O nome do podcast não foi fornecido corretamente.");
        }

        //verificação de conteudo
        responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

        responseFormat.body = data;

        return await responseFormat;

    } catch (error:any) {
        throw new Error(`Erro ao filtrar episódios: ${error.message}`);
    }
};

