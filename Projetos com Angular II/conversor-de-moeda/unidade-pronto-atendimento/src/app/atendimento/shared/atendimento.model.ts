export class Atendimento {
    constructor(
        public id?:number,
        public nome?:string,
        public cartaoSus?: number,
        public status?: string,
        public ativo?:boolean
    ) {

    }
}