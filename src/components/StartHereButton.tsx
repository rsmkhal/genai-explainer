import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
interface StartHereButtonProps {
  className?: string;
}
const StartHereButton = ({
  className = ''
}: StartHereButtonProps) => {
  return <Link to="/introduction" className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}>
      Start Here
      <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
    </Link>;
};
export default StartHereButton;