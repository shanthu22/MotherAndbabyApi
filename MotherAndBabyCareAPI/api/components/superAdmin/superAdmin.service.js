import fs from "fs";

const filepath = "./logs/app.log";
export const serviceGetSuperAdminById = async (callback) => {};

export const serviceAddSuperAdmin = async (data, callback) => {};

// export const serviceUpdateSuperAdmin = async (data, callback) => {};

export const serviceDeleteSuperAdmin = async (id, callback) => {};

export const serviceDeleteLogs = async (callback) => {
  fs.truncate(filepath, 0, callback);
};
