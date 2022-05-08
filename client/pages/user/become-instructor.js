import { useContext, useState } from "react";
import { Context } from "../../context";
import { Button } from "antd";
import axios from "axios";
import {
    SettingOutlined,
    UserSwitchOutlined,
    LoadingOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import UserRoute from "../../components/routes/UserRoute";

const BecomeInstructor = () => {
    // state
    // const [loading, setLoading] = useState(false);
    const {
        state: { user },
        dispatch
    } = useContext(Context);


    const becomeInstructor = () => {
        // console.log("become instructor");
        // setLoading(true);
        if (user) {
            axios.post("/api/make-instructor").then((res) => {
                // console.log(res);
                dispatch({
                    type: "LOGIN",
                    payload: res.data,
                });
                window.localStorage.setItem("user", JSON.stringify(res.data));
                window.location.href = "/instructor";
                toast.success("You've become an instructor")
            });
        }
    };

    return (
        <>
            <h1 className="jumbotron text-center square">Become Instructor</h1>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                        <div className="pt-4">
                            <UserSwitchOutlined className="display-1 pb-3" />
                            <br />
                            <h2>Setup payout to publish courses on AECLMS</h2>
                            <p className="lead text-warning">
                                AECLMS partners with Razorpay to transfer earnings to your bank
                                account
                            </p>

                            <Button
                                className="mb-3"
                                type="primary"
                                block
                                shape="round"
                                icon={<SettingOutlined />}
                                size="large"
                                onClick={becomeInstructor}
                                disabled={
                                    (user && user.role && user.role.includes("Instructor"))
                                }
                            >
                                {/* {loading ? "Processing..." : "Payout Setup"} */}
                                Payout Setup
                            </Button>

                            <p className="lead">
                                You will be redirected to Razorpay to complete onboarding process.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BecomeInstructor;