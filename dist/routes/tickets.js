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
const Ticket_1 = __importDefault(require("../models/Ticket"));
const router = (0, express_1.Router)();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, price } = req.body;
    const ticket = yield Ticket_1.default.create({ title, description, price });
    res.json(ticket);
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tickets = yield Ticket_1.default.findAll();
    res.json(tickets);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ticket = yield Ticket_1.default.findByPk(req.params.id);
    if (ticket) {
        res.json(ticket);
    }
    else {
        res.status(404).send('Ticket not found');
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, price } = req.body;
    const ticket = yield Ticket_1.default.findByPk(req.params.id);
    if (ticket) {
        ticket.title = title;
        ticket.description = description;
        ticket.price = price;
        yield ticket.save();
        res.json(ticket);
    }
    else {
        res.status(404).send('Ticket not found');
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ticket = yield Ticket_1.default.findByPk(req.params.id);
    if (ticket) {
        yield ticket.destroy();
        res.status(204).send();
    }
    else {
        res.status(404).send('Ticket not found');
    }
}));
exports.default = router;
