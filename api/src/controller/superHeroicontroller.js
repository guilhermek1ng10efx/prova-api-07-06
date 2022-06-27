import { con } from "./connections.js";

export async function listarHerois(){
    const comando =`
    
SELECT *
FROM tb_super_heroi    
    `

    const[linhas] = await con.query(comando)
    return linhas;
}