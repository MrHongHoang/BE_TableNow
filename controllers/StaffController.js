const StaffService = require("../services/StaffSevice");

const createStaff = async (req, res) => {
  try {
    const { staffName, staffSex, accountStaff, passwordStaff } = req.body;

    if (!staffName || !staffSex || !accountStaff || !passwordStaff) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }

    const response = await StaffService.createStaff(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const loginStaff = async (req, res) => {
  try {
    const { staffName, staffSex, accountStaff, passwordStaff } = req.body;

    if (!accountStaff || !passwordStaff) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    //  else if (!isCheckEmail) {
    //   return res.status(200).json({
    //     status: "ERR",
    //     message: "The input is email",
    //   });
    // } else if (password !== confirmPassword) {
    //   return res.status(200).json({
    //     status: "ERR",
    //     message: "The input is equal confirmPassword",
    //   });
    // }

    const response = await StaffService.loginStaff(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const updateStaff = async (req, res) => {
  try {
    const staffId = req.params.id;
    const data = req.body;
    if (!staffId) {
      return res.status(200).json({
        status: "ERR",
        message: "The staffId is required",
      });
    }

    const response = await StaffService.updateStaff(staffId, data);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteStaff = async (req, res) => {
  try {
    const staffId = req.params.id;
    if (!staffId) {
      return res.status(200).json({
        status: "ERR",
        message: "The staffId is required",
      });
    }

    const response = await StaffService.deleteStaff(staffId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getAllStaff = async (req, res) => {
  try {
    const response = await StaffService.getAllStaff();
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getDetailsStaff = async (req, res) => {
  try {
    const staffId = req.params.id;
    if (!staffId) {
      return res.status(200).json({
        status: "ERR",
        message: "The staffId is required",
      });
    }

    const response = await StaffService.getDetailsStaff(staffId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

module.exports = {
  createStaff,
  loginStaff,
  updateStaff,
  deleteStaff,
  getAllStaff,
  getDetailsStaff,
};
