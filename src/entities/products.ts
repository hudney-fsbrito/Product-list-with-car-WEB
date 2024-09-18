import { v4 as uuidv4 } from 'uuid';
class Product{
    private _id: string = uuidv4();
    private _nameProduto: string;
    private _price: number;
    private _category: string;
    private _imageProdutoUrl:string;

    constructor (
        nameProduto: string,
        price: number,
        category: string,
        imageProdutoUrl:string,
    ){
        this._nameProduto = nameProduto;
        this._price = price;
        this._category = category;
        this._imageProdutoUrl = imageProdutoUrl;
    }

}