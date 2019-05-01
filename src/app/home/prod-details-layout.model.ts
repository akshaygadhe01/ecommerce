export class product {
    public id: number;
    public name: string;
    public descr: string;
    public imgurl: string;
    public price:string;

constructor(id:number,name:string,descr:string,imgurl: string,price:string)  {
    this.id=id;
    this.name=name;
    this.descr=descr;
    this.imgurl=imgurl;
    this.price=price;
}  

}