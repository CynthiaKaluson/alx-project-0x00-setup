export interface ButtonProps {
    title: string
    styles: string  // ← THIS IS REQUIRED by the task
    size?: 'small' | 'medium' | 'large'
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full'
    className?: string
}