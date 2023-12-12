import { Notify } from 'notiflix';

const Notification = message => {
  Notify.init({
    backOverlay: true,
    info: {
      background: '#8a2be2',
    },
  });

  return Notify.info(message);
};

export default Notification;