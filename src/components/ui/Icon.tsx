
interface IconProps {
  className?: string;
  content: string | number | null;
} // need to move this to interface file or can be used as is if not reused elsewhere and small component - //TODO## Madhu - revisit this

export const Icon = ({ className, content }: IconProps) => {
  return <span className={className}>{content}</span>;
};

// This Pure UI component renders an icon with content and optional className.