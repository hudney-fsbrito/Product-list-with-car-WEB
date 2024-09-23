import { v4 as uuidv4 } from 'uuid';

export class Product{
    [x: string]: any;
    private _id: string = uuidv4();
    private _nameProduct: string;
    private _price: number;
    private _category: string;
    private _imageProductUrl:string;

    constructor (
        nameProduct: string,
        price: number,
        category: string,
        imageProductUrl:string,
    ){
        this._nameProduct = nameProduct;
        this._price = price;
        this._category = category;
        this._imageProductUrl = imageProductUrl;
    }
    
    get getNameProduct(){
        return this._nameProduct
    }
    get getPrice(){
        return this._price
    }

}
