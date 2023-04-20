import { ProductData } from "../helpers/interfaces";

const { I } = inject();

class Products {

    getProductUrl(product: ProductData){
        return "http://opencart.qatestlab.net/index.php?route=product/product&product_id="+product.id;
    }

}

export = new Products();