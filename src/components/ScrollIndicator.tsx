import React from 'react';

interface ScrollIndicatorProps {
  height?: string;
  bgColor?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  height = '10px',
  bgColor = 'gray',
  // @tss-ignore
  ...props
}) => {
  const [scroll, setScroll] = React.useState<number>(0);
  React.useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll: number = document.documentElement.scrollTop;
      const windowHeight: number =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      // @ts-ignore
      setScroll((+scroll * 100).toFixed(1));
    };

    window.addEventListener('scroll', progressBarHandler);

    return () => window.removeEventListener('scroll', progressBarHandler);
  });
  return (
    <div
      className='scroll_indicator'
      style={{
        height: `${height}`,
        backgroundColor: `${bgColor}`,
        position: 'sticky',
        top: '0%',
        left: '0%',
        width: `${scroll}%`,
        zIndex: 1000,
      }}
    ></div>
  );
};

export default ScrollIndicator;
