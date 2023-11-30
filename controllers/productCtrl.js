const productRepo = require('../repositories/productRepo');


const get = async (req, res) => {
    try {
        const page = req.params.page || 1;
        const size = req.params.size || 10;
        const search = req.query.search || '';
       // const productCount = await productRepo.count(search);
        //const pages = Math.ceil(productCount / size);
        if (req.role.canReadProducts) {
            const data = await productRepo.get(page, size);
            const response = {
                metaData: {
                    //pages: pages,
                  //  rows: productCount
                },
                productData: data
            }
            res.status(200);
            res.json(response);
        }
        else {
            res.status(401).send('You don\'t have permission to do this action');
        }
    }
    catch (err) {
        console.error(err);
        res.status(500);
        res.send('Internal srver error')
    }
};

const add = async (req, res) => {
    try {
        if (req.role.canUpdateProducts) {
            const body = req.body;
            await productRepo.add(body);
            res.status(201).send('product added succesfully');
        }
        else {
            res.status(401).send('Your role does\'nt allow you to proceed');
        }
    }
    catch (err) {
        res.status(500).send('Internal server error');
    }
};
async function getById(req, res) {
    try {
        const id = req.params.id;
        const data = await productRepo.getById(id);
        if (data) {
            res.status(200);
            res.json(data);
        }
        else {
            res.status(404).send('Product not found');
        }
    }
    catch (err) {

        res.status(500).send('Internal Server Error');
    }

};


module.exports = {
    get,
    add,
    getById
}