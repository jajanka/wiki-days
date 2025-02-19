'use client';

import useStore from '@/app/providers/store';

const Loading = () => {
  const loading = useStore((state) => state.loading);

  if (!loading) return null;

  return (
    <div className="loader-main">
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
