const express = require('express');

const Produtos = require('../Models/produtos');

module.exports = {
    async index(request, response){
        const produtos = await Produtos.find();

        return response.json({produtos});
    },

    async show(request, response){
        const { sex } = request.query;
        const produtos = await Produtos.find({ sex: sex });
        const produtosUni = await Produtos.find({ sex: "uni" });

        return response.json({produtos, produtosUni});
    },
    async create(request, response){
        try{
            const { filename } = request.file;
            const { name, description, price, sex, style, size } = request.body;

            const produtos = await Produtos.create({
                name: name,
                img: filename,
                description: description,
                price: price,
                sex: sex,
                style: style,
                size: size
            });

            return response.json({ produtos });
        }catch(err) {
            return response.status(400).json({ error: 'Produto erro' });
        }
    },
}