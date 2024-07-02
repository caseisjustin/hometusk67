"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Cart_1 = __importDefault(require("../models/Cart"));
const router = (0, express_1.Router)();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, ticketId, quantity } = req.body;
    const cart = yield Cart_1.default.create({ userId, ticketId, quantity });
    res.json(cart);
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const carts = yield Cart_1.default.findAll();
    res.json(carts);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cart = yield Cart_1.default.findByPk(req.params.id);
    if (cart) {
        res.json(cart);
    }
    else {
        res.status(404).send('Cart not found');
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, ticketId, quantity } = req.body;
    const cart = yield Cart_1.default.findByPk(req.params.id);
    if (cart) {
        cart.userId = userId;
        cart.ticketId = ticketId;
        cart.quantity = quantity;
        yield cart.save();
        res.json(cart);
    }
    else {
        res.status(404).send('Cart not found');
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cart = yield Cart_1.default.findByPk(req.params.id);
    if (cart) {
        yield cart.destroy();
        res.status(204).send();
    }
    else {
        res.status(404).send('Cart not found');
    }
}));
exports.default = router;
