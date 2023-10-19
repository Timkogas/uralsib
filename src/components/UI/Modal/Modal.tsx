import { type FC, type ReactNode, useEffect, useCallback } from 'react'
import styles from './Modal.module.scss'
import classNames from 'classnames'
import CloseIcon from '../../../assets/images/close.svg'

interface ModalProps {
  className?: string
  classNameContent?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}


const Modal: FC<ModalProps> = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen = false,
    classNameContent,
    onClose,
  } = props

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose()
    }
  }, [onClose])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }

  }, [isOpen, onKeyDown])

  return (

    <div className={classNames(styles.Modal, className, { [styles.opened]: isOpen })}>
      <div className={styles.overlay} onClick={closeHandler}>
        <div
          className={classNames(styles.content, classNameContent)}
          onClick={onContentClick}
        >
          {children}
          <img src={CloseIcon} className={styles.icon} onClick={closeHandler}/>
        </div>
      </div>
    </div>

  )
}

export default Modal
