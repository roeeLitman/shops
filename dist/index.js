"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routeSeller_1 = __importDefault(require("./routes/routeSeller"));
const rootClient_1 = __importDefault(require("./routes/rootClient"));
const rootMessenger_1 = __importDefault(require("./routes/rootMessenger"));
const db_1 = __importDefault(require("./config/db"));
const PORT = (process.env.PORT || 1414);
const app = (0, express_1.default)();
(0, db_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use('/seller', routeSeller_1.default);
app.use('client', rootClient_1.default);
app.use('/messenger', rootMessenger_1.default);
app.listen(PORT, () => {
    console.log(`http://localhost:27017${PORT}`);
});
function connectDB() {
    throw new Error("Function not implemented.");
}
