const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema(
  {
    produto: {
      type: String,
      required: true
    },
    tipo_produto: {
      type: String,
      required: true
    },
    valor: {
      type: Number,
      required: true
    },
    quantidade: {
        type: Number,
        required: true
      },
    data_entrega: {
          type: Date,
          required: true
        }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Produto", ProdutoSchema);