type TextHighlightProps = {
  color: string;
  children?: React.ReactNode;
};

export const TextHighlight = ({ color, children }: TextHighlightProps) => (
  <strong
    style={{
      color,
      fontWeight: '600',
      whiteSpace: 'normal',
      wordBreak: 'break-word',
      overflowWrap: 'break-word',
    }}
  >
    {children}
  </strong>
);
