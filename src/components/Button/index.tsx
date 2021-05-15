import React from 'react'
import styles from './Button.module.scss'

type Props = {
  onClick: () => void
  children?: React.ReactNode
}

export default function Button({ onClick, children }: Props) {
  return (
    <button type="button" onClick={onClick} className={styles.root}>
      {children}
    </button>
  )
}
