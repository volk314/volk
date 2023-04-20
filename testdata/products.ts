
const { I } = inject();

class Products {

    getProductUrl(id: string){
        return "http://opencart.qatestlab.net/index.php?route=product/product&product_id="+id;
    }

}

export = new Products();