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
const User_1 = __importDefault(require("../models/User"));
const router = (0, express_1.Router)();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const user = yield User_1.default.create({ name, email, password });
    res.json(user);
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User_1.default.findAll();
    res.json(users);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findByPk(req.params.id);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).send('User not found');
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const user = yield User_1.default.findByPk(req.params.id);
    if (user) {
        user.name = name;
        user.email = email;
        user.password = password;
        yield user.save();
        res.json(user);
    }
    else {
        res.status(404).send('User not found');
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findByPk(req.params.id);
    if (user) {
        yield user.destroy();
        res.status(204).send();
    }
    else {
        res.status(404).send('User not found');
    }
}));
exports.default = router;
