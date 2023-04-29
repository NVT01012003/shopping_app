import Joi from "joi";

const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

export const validator = Joi.object({
    email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com"] },
    }),
    phone_number: Joi.string().pattern(regexPhoneNumber),
    password: Joi.string()
        .pattern(
            /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$.%^&*])[a-zA-Z0-9!@.#$%^&*]{4,10}$/
        )
        .required(),
    confirm: Joi.ref("password"),
})
    .with("email", "password")
    .or("phone_number", "password")
    .xor("phone_number", "email");

export const registerValidator = validator.with("password", "confirm");

class CredentialValidator {
    validateRegister = ({ email, phone_number, password, confirm }) => {
        if (email) {
            const { value, error } = registerValidator.validate({
                email,
                password,
                confirm,
            });
            if (error) throw new Error(error.message);
            else return value;
        } else if (phone_number) {
            const { value, error } = registerValidator.validate({
                phone_number,
                password,
                confirm,
            });
            if (error) throw new Error(error.message);
            else return value;
        } else throw new Error("Phone number or email is required");
    };
    validateLogin = ({ email, phone_number, password }) => {
        if (email) {
            const { value, error } = validator.validate({
                email,
                password,
            });
            if (error) throw new Error(error.message);
            else return value;
        } else if (phone_number) {
            const { value, error } = validator.validate({
                phone_number,
                password,
            });
            if (error) throw new Error(error.message);
            else return value;
        } else throw new Error("Phone number or email is required");
    };
}

export const credentialValidator = new CredentialValidator();
