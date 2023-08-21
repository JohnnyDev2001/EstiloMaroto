const mongoose = require('../database');


const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    img:{
        type: String,
    },
    description:{
        type: String,
        require: false,
    },
    price: {
        type: String,
        require: true,
    },
    sex: {
        type: String,
        require: true,
    },
    style: {
        type: String,
        require: false,
    },
    size: {
        type: String,
        require: false,
    },
    createdAt:{
        type:Date,
        default: Date.now,
    },
},{
    toJSON: {
    virtuals: true,
  }
},);

ProductSchema.virtual('thumbnail_url').get(function() {
    return `http://localhost:3333/files/${this.img}`
});

const Produto = mongoose.model('Produto', ProductSchema);

module.exports = Produto;