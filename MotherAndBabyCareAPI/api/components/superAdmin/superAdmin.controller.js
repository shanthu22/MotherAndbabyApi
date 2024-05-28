import logger from "../../../logger.js";

import {
  serviceGetSuperAdminById,
  serviceAddSuperAdmin,
  serviceDeleteSuperAdmin,
  serviceDeleteLogs,
} from "./superAdmin.service.js";

export const controllerGetSuperAdminById = (req, res) => {
  const id = params.id;
  serviceGetSuperAdminById(id, (error, result) => {
    if (error) {
      logger.error("Superadmin controller--ERROR");
      res.status(500).json({ message: "Error in controller" });
    } else {
      res.status(200).json(result);
    }
  });
};

export const controllerDeleteLogs = (req, res) => {
  serviceDeleteLogs((error, result) => {
    if (error) {
      logger.error("Superadmin controller--ERROR");
      res.status(500).json({ message: "Error in controller", error: error });
    } else {
      res.status(200).json({ message: "Log file cleared successfully" });
    }
  });
};
