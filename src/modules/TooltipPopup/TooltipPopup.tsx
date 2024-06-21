import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { createPortal } from 'react-dom';

import { ReactComponent as OkIcon } from '../../assets/icons/Ok.svg';
import myStore from '../../store/myStore';
import styles from './TooltipPopup.module.scss';

export const TooltipPopup: FC = observer(() => {
  const { tooltipText, setTooltipText } = myStore;

  setTimeout(() => {
    setTooltipText('');
  }, 3000);

  return tooltipText
    ? createPortal(
      <div data-testid="popup_action_completed" className={styles.container}>
        <OkIcon />
        <p data-testid="popup_action_completed_text">{tooltipText}</p>
      </div>,
      document.getElementById('portal') as HTMLElement,
    )
    : null;
});
