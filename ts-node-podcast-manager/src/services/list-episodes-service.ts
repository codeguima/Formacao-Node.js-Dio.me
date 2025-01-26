
import { PodcastTransferModel } from "../models/transfer-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repositories"
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {

    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    };

    const data = await repositoryPodcast();

    //verificação de conteudo
    responseFormat ={
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data,
    };
    
            
    return responseFormat;
};
