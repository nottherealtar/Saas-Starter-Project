import { forwardRef, ComponentProps } from 'react';
import { Root as PrimitiveButton } from '@radix-ui/react-primitive';
import clsx from 'clsx';

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary';
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className, ...props }, ref) => (
    <PrimitiveButton
      ref={ref}
      className={clsx(
        'px-4 py-2 rounded font-bold transition',
        variant === 'primary'
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'bg-gray-200 text-gray-900 hover:bg-gray-300',
        className
      )}
      {...props}
    />
  )
);

Button.displayName = 'Button';
export default Button;