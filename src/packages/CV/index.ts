export class CuotaVariable {
    private No: any = [];
    private cuota: any = [];
    private Interes: any = [];
    private abono: any = [];
    private saldo: any = [];
    public data: any = [];
    constructor(
        public plazo:number  = 12, 
        public interes: number  = 18, 
        public prestamo:number  = 100000,
    ){};
    private AnualMensual( interes: number, plazo: any ): number {
        const INTERESANUAL = interes / 100;
        return Number((Math.pow(INTERESANUAL + 1, 1 / plazo) - 1).toFixed(3));
    }
    table = (): any => {
        let interesMensual = this.AnualMensual( this.interes, this.plazo );
        for (let i = 0; i < this.plazo; i++) {
          var no = 1 + i;
          this.No.push({no});
          this.cuota.push({}); 
          this.Interes.push({}); 
          this.abono.push({ abono: Number((this.prestamo / this.plazo).toFixed(2))}); 
          this.saldo.push({}); 
          };
        this.Interes[0] = {interes: this.prestamo * interesMensual};
        this.saldo[0]= {saldo: this.prestamo - this.abono[0].abono}
  
        for (let i:number | string = 1; i < this.plazo; i++){
        this.Interes[i] =  {interes: Number((this.saldo[i-1].saldo *  interesMensual).toFixed(2))  };
        this.saldo[i] =   {saldo: Number((this.saldo[i-1].saldo - this.abono[i].abono).toFixed(2)) };
        }
        this.cuota.forEach((item: { cuota: number; }, i: string | number) =>{
        item.cuota = Number(( this.Interes[i].interes + this.abono[i].abono).toFixed(2));
        });
        this.data.push(this.No,this.cuota,this.Interes,this.abono,this.saldo);
        console.log(this.data);
        return this.data;
  
    }
}
