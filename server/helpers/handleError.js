export const handleError = (e) => {
    switch (e.message) {
        case `User name is required`:
            return {
                code: 400,
                status: "error",
                message: `User name is required`,
            };

        case `\"password\" is required`:
            return {
                code: 400,
                status: "error",
                message: `Password is required`,
            };

        case `Phone number or email is required`:
            return {
                code: 400,
                status: "error",
                message: `Phone number or email is required`,
            };

        case `\"email\" must be a valid email`:
            return {
                code: 400,
                status: "error",
                message: `Eamil invalid`,
            };

        case `\"password\" is not allowed to be empty"`:
            return {
                code: 400,
                status: "error",
                message: `Password is empty`,
            };

        case `Password invalid`:
            return {
                code: 400,
                status: "error",
                message: `Password invalid`,
            };

        case `Phone number invalid`:
            return {
                code: 400,
                status: "error",
                message: `Phone number invalid`,
            };

        case `\"password\" missing required peer \"confirm\"`:
            return {
                code: 400,
                status: "error",
                message: `Password confirm is required`,
            };

        case `\"confirm\" must be [ref:password]`:
            return {
                code: 400,
                status: "error",
                message: `Password and password confirm is not same`,
            };

        case `Token invalid`:
            return {
                code: 400,
                status: "error",
                message: `Token invalid`,
            };

        case `Password incorrect`:
            return {
                code: 400,
                status: "error",
                message: `Password incorrect`,
            };

        case `duplicate key value violates unique constraint "users_email_key"`:
            return {
                code: 400,
                status: "error",
                message: `Email already exists`,
            };

        case `duplicate key value violates unique constraint "users_phone_number_key"`:
            return {
                code: 400,
                status: "error",
                message: `Phone number was registerd`,
            };

        case ``:
            return {
                code: 400,
                status: "error",
                message: ``,
            };

        case ``:
            return {
                code: 400,
                status: "error",
                message: ``,
            };

        default:
            return {
                code: 400,
                status: "error",
                message: e.message,
            };
        // return {
        //     code: 500,
        //     status: "error",
        //     message: `Internal server error`,
        // };
    }
};
