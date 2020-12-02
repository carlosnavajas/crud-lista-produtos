const Produto = require("../model/Produto");

class ProdutoController {
  async store(req, res) {
    const data = await Produto.create(req.body);

    return res.json(data);
  }
  async index(req, res) {
    const data = await Produto.find({});

    return res.json(data);
  }

  async findOneById(req, res) {
    const data = await Produto.findById(req.params.id).exec();

    return res.json(data);
  }

  async updateById(req, res) {
    const data = await Produto.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      context: 'query'
     });
    
    return res.json(data);
  }

  async deleteById(req, res) {

    const data = await Produto.findByIdAndDelete(req.params.id)

    return res.json(data);
  }
}

module.exports = new ProdutoController();