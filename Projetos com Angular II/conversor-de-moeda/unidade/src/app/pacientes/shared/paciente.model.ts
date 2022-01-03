export class Paciente {
    constructor(
        public id?:number,
        public nome?:string,
        public sus?:number,
        public prioridade?:string,
        public atendido?:boolean,
        public ativo?:boolean
    ) {

    }
}