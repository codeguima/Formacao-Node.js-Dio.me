import fastify from "fastify";

interface DriverParams{
    id: string;
};

const server = fastify({logger: true});

const teams = [
    { id: 1, name: "McLaren", base: "Woking, United Kingdom"},
    { id: 1, name: "Mercedes", base: "Brackley, United Kingdom"},
    { id: 1, name: "Red Bull Rancing", base: "Milton Keynes, United Kingdom"},
];

const drivers = [
    {id: 1, name: "Max Verstappen", team: "Red Bull Rancing"},
    {id: 2, name: "Lewis Hamilton", team: "Ferrari"},
    {id: 3, name: "Lando Norris", team: "McLaren"},
]

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


server.listen({port: 3333}, () => {
    console.log("Server init");
});
