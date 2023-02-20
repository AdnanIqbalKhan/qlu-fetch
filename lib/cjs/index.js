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
exports.QluFetch = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const QluFetch = function (url, options = {}, retries = 3) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, node_fetch_1.default)(url, options)
            .then(res => {
            if (res.ok) {
                return res.json();
            }
            if (retries > 0) {
                return (0, exports.QluFetch)(url, options, retries - 1);
            }
            throw new Error(`ERROR: ${res.status}`);
        })
            .catch(error => {
            if (retries > 0) {
                return (0, exports.QluFetch)(url, options, retries - 1);
            }
            console.error(error.message);
        });
    });
};
exports.QluFetch = QluFetch;
