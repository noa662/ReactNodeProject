const express = require("express");
const { addSetting, deleteSetting, getAllSettings, updateSetting, getSetting } = require("../Controllers/SettingController");
const router = express.Router();
router.get("/", getAllSettings);  // שליפת כל ההגדרות
router.get("/:id", getSetting);  // שליפת הגדרה ספציפית לפי ID
router.post("/", addSetting);  // יצירת הגדרה חדשה
router.put("/:id", updateSetting);  // עדכון הגדרה
router.delete("/:id", deleteSetting);  // מחיקת הגדרה

module.exports = router;