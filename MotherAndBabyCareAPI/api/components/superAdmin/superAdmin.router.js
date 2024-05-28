import { VerifyToken } from "../../middleware/VerifyToken.js";
import CheckRole from "../../middleware/CheckRole.js";
import {
  controllerGetSuperAdminById,
  controllerDeleteLogs,
} from "./superAdmin.controller.js";

import express from "express";
export const routerSuperAdmin = express.Router();

routerSuperAdmin.get("/", VerifyToken);
routerSuperAdmin.delete(
  "/deleteLogs",
  VerifyToken,
  CheckRole("superadmin"),
  controllerDeleteLogs
);
