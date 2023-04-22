
const { I } = inject();

class ProductUrl {

    getProductUrl(id: string){
        return "/index.php?route=product/product&product_id="+id;
    }

}

export = new ProductUrl();