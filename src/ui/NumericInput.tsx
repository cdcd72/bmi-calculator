import React, { ChangeEvent, InputHTMLAttributes, KeyboardEvent } from 'react';

import Input from '@/ui/Input';

interface NumericInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  allowDecimal?: boolean;
  min?: number;
  max?: number;
  decimals?: number;
  onChange?: (value: string) => void;
}

function NumericInput({
  allowDecimal = true,
  min,
  max,
  decimals: decimalPlaces = 2,
  onKeyDown,
  onChange,
  ...props
}: NumericInputProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // 允許的控制鍵
    const allowedKeys = [
      'Backspace',
      'Delete',
      'Tab',
      'Escape',
      'Enter',
      'Home',
      'End',
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'ArrowDown',
    ];

    // 檢查是否為允許的控制鍵
    if (allowedKeys.includes(e.key)) {
      onKeyDown?.(e);
      return;
    }

    // 檢查是否為數字
    if (e.key >= '0' && e.key <= '9') {
      onKeyDown?.(e);
      return;
    }

    // 檢查小數點
    if (allowDecimal && e.key === '.') {
      const currentValue = (e.target as HTMLInputElement).value;
      // 如果已經有小數點，則不允許再輸入
      if (!currentValue.includes('.')) {
        onKeyDown?.(e);
        return;
      }
    }

    // 阻止其他所有按鍵（包括 e, E, +, -, 等）
    e.preventDefault();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // 限制小數位數（在輸入時就限制）
    if (allowDecimal && decimalPlaces !== undefined && value.includes('.')) {
      const parts = value.split('.');
      if (parts[1] && parts[1].length > decimalPlaces) {
        value = `${parts[0]}.${parts[1].slice(0, decimalPlaces)}`;
      }
    }

    // 只在失去焦點時驗證範圍，輸入過程中不強制範圍限制
    onChange?.(value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // 在失去焦點時驗證並修正數值範圍
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      if (min !== undefined && numValue < min) {
        value = min.toString();
        onChange?.(value);
      } else if (max !== undefined && numValue > max) {
        value = max.toString();
        onChange?.(value);
      }
    }

    // 調用原始的 onBlur 事件
    props.onBlur?.(e);
  };

  return (
    <Input
      type="number"
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      onBlur={handleBlur}
      {...props}
    />
  );
}

export default NumericInput;
