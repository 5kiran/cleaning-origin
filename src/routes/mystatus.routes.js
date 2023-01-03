const express = require("express");
const router = express.Router();

const StatusController = require('../controllers/mystatus.controllers');
const statusController = new StatusController();
const authMiddleware = require('../middleware/auth.middleware');

// 나의 청소 서비스 목록 조회(고객,업체) API
router.get('/mystatus/services', authMiddleware, statusController.myStatus)

// 나의 청소 진행 현황 업데이트(업체) API
router.put('/business/services/:serviceId', authMiddleware, statusController.serviceStatusUpdate)


module.exports = router;