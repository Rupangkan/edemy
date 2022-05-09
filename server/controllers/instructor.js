import User from "../models/user";
import Course from "../models/course";
import queryString from "query-string";

export const makeInstructor = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).exec();
        // const account = await stripe.accounts.retrieve(user.stripe_account_id);
        // console.log("ACCOUNT => ", account);

        const statusUpdated = await User.findByIdAndUpdate(
            user._id,
            {
                $addToSet: { role: "Instructor" },
            },
            { new: true }
        )
            .select("-password")
            .exec();
        res.json(statusUpdated);

    } catch (err) {
        console.log(err);
    }
};

export const currentInstructor = async (req, res) => {
    try {
        let user = await User.findById(req.user._id).select("-password").exec();
        // console.log("CURRENT INSTRUCTOR => ", user);
        if (!user.role.includes("Instructor")) {
            return res.sendStatus(403);
        } else {
            res.json({ ok: true });
        }
    } catch (err) {
        console.log(err);
    }
};

export const instructorCourses = async (req, res) => {
    try {
        const courses = await Course.find({ instructor: req.user._id })
            .sort({ createdAt: -1 })
            .exec();
        res.json(courses);
    } catch (err) {
        console.log(err);
    }
};
