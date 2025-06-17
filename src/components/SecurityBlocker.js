// src/components/SecurityBlocker.js
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const SecurityBlocker = () => {
  useEffect(() => {
    const notificationSound = new Audio('/notification.mp3'); // put this file in public/

    const playNotification = () => {
      notificationSound.currentTime = 0;
      notificationSound.play().catch(() => {
        // autoplay restriction
        console.warn('Sound blocked until user interacts with the page');
      });
    };

    const showToast = (eventName) => {
      playNotification();
      Swal.fire({
        icon: 'warning',
        title: 'Action Blocked',
        text: `You cannot use "${eventName}" here.`,
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
      });
    };

    const showDevToolsAlert = () => {
      playNotification();
      Swal.fire({
        icon: 'error',
        title: 'DevTools Blocked',
        text: 'Access to developer tools is disabled.',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
      });
    };

    ['copy', 'selectstart', 'contextmenu'].forEach((event) => {
      document.addEventListener(event, (e) => {
        e.preventDefault();
        showToast(event);
      });
    });

    document.addEventListener('keydown', (e) => {
      const key = e.key.toLowerCase();
      const devToolKeys =
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['i', 'j', 'c'].includes(key)) ||
        (e.ctrlKey && ['u', 's'].includes(key));

      if (devToolKeys) {
        e.preventDefault();
        showDevToolsAlert();
      }
    });

    return () => {
      ['copy', 'selectstart', 'contextmenu'].forEach((event) => {
        document.removeEventListener(event, (e) => e.preventDefault());
      });
    };
  }, []);

  return null;
};

export default SecurityBlocker;
