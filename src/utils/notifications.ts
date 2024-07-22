import { toast, TypeOptions } from 'react-toastify';

export enum EToastTheme {
  light,
  dark,
  colored,
}



export const Notification = ( content: string, type: TypeOptions  = 'success' ) =>
  toast(content, {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    type: type,
  });
