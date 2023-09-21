import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Times } from '@/icons';
import clsxm from '@/utils/clsxm';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import useOnClickOutside from '@/hooks/useOnClickOutside';

interface ModalProps {
  className?: string;
  classNames?: {
    root?: string;
    closeButton?: string;
  };
  isShowing: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
  const modalRef = React.useRef<HTMLDivElement>(null);

  // ====== HANDLERS =======
  const handleCloseModal = () => {
    props.onClose?.();
    close();
  };

  // ======  HOOKS  ========

  useOnClickOutside(modalRef, handleCloseModal);
  useBodyScrollLock(props.isShowing);

  return (
    <AnimatePresence>
      {props.isShowing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={clsxm([
            'fixed left-0 top-0 z-[10000] grid h-screen w-screen place-items-center overflow-y-auto bg-[#27272766] p-4 backdrop-blur-[0.1rem] md:p-6',
            props.classNames?.root,
          ])}
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 30 }}
            className={clsxm([
              'relative w-[min(100%,36.438rem)] rounded-2xl bg-white p-10 shadow-md',
              props.className,
            ])}
          >
            {/* children */}
            {props.children}

            {/* close button */}
            <button
              type='button'
              onClick={handleCloseModal}
              className={clsxm([
                'absolute right-6 top-6 rounded-md p-3 duration-200 hover:bg-black-8 active:scale-90 md:right-8 md:top-8 lg:right-10 lg:top-10',
                props.classNames?.closeButton,
              ])}
            >
              <Times className='text-icon h-5 w-5' />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
