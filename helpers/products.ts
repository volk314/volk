
const { I } = inject();

class ProductUrl {

    getProductUrl(id: string){
        return ""+id;
    }

}

export = new ProductUrl();