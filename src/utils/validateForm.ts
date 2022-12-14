export type values = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string | any;
};

function validateEmail(email: string) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export const validateForm = (values: values) => {
  let errors: any = {};
  if (!values?.firstName) errors.firstName = "First name is required";
  if (!values?.lastName) errors.lastName = "Last name is required";
  if (!values?.email) {
    errors.email = "Email is required";
  } else if (!validateEmail(values?.email)) {
    errors.email = "Email is not valid";
  }
  if (!values?.phone) errors.phone = "Phone is required";
  if (!values?.message) {
    errors.message = "Message is required";
  } else if (!(values.message.length > 50) || !(values.message.length <= 500)) {
    errors.message = "Message must be between 50 and 500 characters";
  }

  if (Object.keys(errors).length === 0) {
    return { isValid: true, errors };
  } else {
    return { isValid: false, errors };
  }
};
