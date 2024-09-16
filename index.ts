class Produto{
    private _id: string;
    private _nameProduto: string;
    private _price: number;
    private _category: string;
    private _imageProdutoUrl:string;

    constructor (
        id:string,
        nameProduto: string,
        price: number,
        category: string,
        imageProdutoUrl:string,
    ){
        this._id = id;
        this._nameProduto = nameProduto;
        this._price = price;
        this._category = category;
        this._imageProdutoUrl = imageProdutoUrl;
    }

}