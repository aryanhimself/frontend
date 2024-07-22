import { toast } from "react-toastify";

const successToast = {
  closeButton: false,
  type: toast.TYPE.SUCCESS,
  autoClose: 2000,
  hideProgressBar: true,
  draggable: false,
};

const errorToast = {
  closeButton: false,
  type: toast.TYPE.ERROR,
  autoClose: 2000,
  hideProgressBar: true,
  draggable: false,
};

const messageToast = {
  closeButton: false,
  type: toast.TYPE.INFO,
  autoClose: 2000,
  hideProgressBar: true,
  draggable: false,
};

const warningToast = {
  closeButton: false,
  type: toast.TYPE.WARNING,
  autoClose: 2000,
  hideProgressBar: true,
  draggable: false,
};

export { successToast, errorToast, messageToast, warningToast };
