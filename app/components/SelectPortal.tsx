import { RefObject, useRef, useState } from 'react'
import { createPortal } from 'react-dom';
import styles from './Filters.module.css'

type SelectPortalProps = {
  name: string,
  options: { value: string, title: string }[],
  defaultOption: string,
  updateFilter: (target: HTMLElement) => void,
  renderContainer: HTMLElement
}

export default function SelectPortal({ name, options, defaultOption, updateFilter, renderContainer }: SelectPortalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref: RefObject<HTMLSelectElement> = useRef<HTMLSelectElement>(null)
  const containerRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

  function updateValue(target: HTMLElement) {
    if (!ref.current) return
    if (target?.dataset.value !== ref.current.value && target.dataset.value) {
      ref.current.value = target.dataset.value
    } else if (target.dataset.value === "") {
      ref.current.value = ""
    }
    updateFilter(ref.current)
    setIsOpen(false)
  }

  function handleOpen() {
    setIsOpen(!isOpen)
    containerRef.current?.classList.toggle(styles.isOpened)
  }

  return (
    <div onClick={handleOpen} className={styles.selectWrapper} ref={containerRef}>
      <select ref={ref} name={name} className={styles.select} defaultValue={''} required>
        <option value="" disabled hidden>{defaultOption}</option>
        {options.length > 0 && options.map(option => (
          <option key={option.value} value={option.value} hidden>{option.title}</option>
        ))}

        {isOpen && createPortal(
          <ul className={`fv ${styles.optionsList} ${styles.hidden}`}>
            <li onClick={e => updateValue(e.target as HTMLElement)} data-value="" className={styles.optionItem}>Не выбран</li>
            {options.length > 0 && options.map(option => (
              <li
                key={option.value}
                onClick={e => updateValue(e.target as HTMLElement)}
                data-value={option.value}
                className={styles.optionItem}
              >{option.title}</li>
            ))}
          </ul>,
          renderContainer
        )}
      </select>
    </div>
  );
};
