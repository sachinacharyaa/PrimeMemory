"use strict";
//it is needed after you loged in
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
const userMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(403).json({
            message: "No token provided",
        });
    }
    try {
        const token = authHeader.split(" ")[1];
        const decoded = jsonwebtoken_1.default.verify(token, config_1.JWT_PASSWORD);
        req.userId = decoded.id;
        next();
    }
    catch (e) {
        res.status(403).json({
            message: "Invalid or expired token",
        });
    }
};
exports.userMiddleware = userMiddleware;
// Signin → get token
// Token → send in Authorization
// Middleware → verify token
// Valid → next()
// Invalid → 403 error
