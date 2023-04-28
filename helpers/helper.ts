class Helper{

    async parsePrice(price: string): Promise<number>{
        return parseFloat(price.split('$')[1]);
    }

    async parseOptionPrice(price:string): Promise<number>{
        return parseFloat(price.split('$')[1].split(')')[0]);
    }

}

export = new Helper();