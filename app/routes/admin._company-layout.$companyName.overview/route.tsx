import { Outlet } from '@remix-run/react';

export default function Component() {
  return (
    <div>
      <h2>Overview</h2>
      <Outlet />
    </div>
  );
}
