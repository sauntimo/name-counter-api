"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const nameCounter_1 = tslib_1.__importDefault(require("../services/nameCounter"));
const router = express_1.Router();
const nameCounter = new nameCounter_1.default();
router.get('/:name', (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const nameCount = yield nameCounter.countName(req.params.name);
    return res.status(http_status_codes_1.StatusCodes.OK).json(nameCount);
}));
exports.default = router;
