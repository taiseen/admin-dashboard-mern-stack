import User from "../../model/User.js";

export const getCustomers = async (req, res) => {

    try {
        const customers = await User.find({ role: "user" }).select("-password");

        res.status(200).json(customers);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};