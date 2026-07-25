import React, { useMemo } from 'react';
import { motion, Variants } from 'framer-motion';
import cn from 'classnames';

export interface CodeBoxProps {
  content: string | string[];
  title?: string;
  showLineNumbers?: boolean;
  className?: string;
}

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const line: Variants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0 },
};

const CodeBox: React.FC<CodeBoxProps> = ({
  content,
  title = 'terminal',
  showLineNumbers = true,
  className,
}) => {
  const lines = useMemo(
    () => (Array.isArray(content) ? content : content.split('\n')),
    [content]
  );

  return (
    <div className={cn('nb-codebox', className)}>
      <div className="nb-codebox-header">
        <span className="nb-codebox-dot" style={{ background: '#FF6B6B' }} />
        <span className="nb-codebox-dot" style={{ background: '#FFD23F' }} />
        <span className="nb-codebox-dot" style={{ background: '#88D498' }} />
        <span className="nb-codebox-title">{title}</span>
      </div>

      <motion.pre
        className="nb-codebox-body"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {lines.map((text, i) => (
          <motion.div key={i} variants={line} className="nb-codebox-line">
            {showLineNumbers && <span className="nb-codebox-linenum">{i + 1}</span>}
            <span className="nb-codebox-code">{text.length ? text : ' '}</span>
          </motion.div>
        ))}
      </motion.pre>
    </div>
  );
};

export default CodeBox;
