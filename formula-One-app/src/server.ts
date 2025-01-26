import fastify from "fastify";
import cors from "@fastify/cors";


//-------------------------------------------------------------------------------------//
//data

interface DriverParams{
    id: string;
};

const teams = [
    { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
    { id: 4, name: "Ferrari", base: "Maranello, Italy" },
    { id: 5, name: "Aston Martin", base: "Silverstone, United Kingdom" },
    { id: 6, name: "Alpine", base: "Enstone, United Kingdom" },
    { id: 7, name: "AlphaTauri", base: "Faenza, Italy" },
    { id: 8, name: "Williams", base: "Grove, United Kingdom" },
    { id: 9, name: "Haas", base: "Kannapolis, United States" },
    { id: 10, name: "Alfa Romeo", base: "Hinwil, Switzerland" },
];

const drivers = [
    { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 2, name: "Lewis Hamilton", team: "Mercedes" },
    { id: 3, name: "Lando Norris", team: "McLaren" },
    { id: 4, name: "Charles Leclerc", team: "Ferrari" },
    { id: 5, name: "Fernando Alonso", team: "Aston Martin" },
    { id: 6, name: "George Russell", team: "Mercedes" },
    { id: 7, name: "Sergio Perez", team: "Red Bull Racing" },
    { id: 8, name: "Carlos Sainz", team: "Ferrari" },
    { id: 9, name: "Pierre Gasly", team: "Alpine" },
    { id: 10, name: "Esteban Ocon", team: "Alpine" },
    { id: 11, name: "Yuki Tsunoda", team: "AlphaTauri" },
    { id: 12, name: "Alex Albon", team: "Williams" },
    { id: 13, name: "Logan Sargeant", team: "Williams" },
    { id: 14, name: "Kevin Magnussen", team: "Haas" },
    { id: 15, name: "Nico Hulkenberg", team: "Haas" },
    { id: 16, name: "Valtteri Bottas", team: "Alfa Romeo" },
    { id: 17, name: "Zhou Guanyu", team: "Alfa Romeo" },
    { id: 18, name: "Oscar Piastri", team: "McLaren" },
];



//-------------------------------------------------------------------------------------//
//configurações api

const server = fastify({logger: true});

server.register(cors, {origin:"*",  methods: ['GET', 'POST']});

//-------------------------------------------------------------------------------------//
//rotas

server.get("/teams", async (request, response) =>{
    response.type("application/json").code(200);
    return {teams};
});

server.get("/drivers", async (request, response) =>{
    response.type("application/json").code(200);
    return {drivers};
});

server.get<{Params: DriverParams}>(
    "/drivers/:id",
     async (request, response) =>{

        const id = parseInt(request.params.id);
        const driver = drivers.find( (x) => x.id === id );

        if(!driver){
            response.type("application/json").code(404);
            return { message: "Driver Not Found"}
        }else{
            response.type("application/json").code(200);
            return { driver };
        }
    
});

//-------------------------------------------------------------------------------------//
//expor endpoint

server.listen({port: 3333}, () => {
    console.log("Server init");
});
