import React from 'react';

interface SignOutFormProps {
  title: string;
  subtitle?: string;
}

const SignOutForm: React.FC<SignOutFormProps> = ({ title, subtitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
};

export default SignOutForm;
