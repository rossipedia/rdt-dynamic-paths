import { json, LoaderFunctionArgs } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';

export function loader({ params }: LoaderFunctionArgs) {
  return json({ params });
}

export default function Component() {
  const { params } = useLoaderData<typeof loader>();
  return (
    <div>
      <h2>{params.companyName}</h2>
      <Outlet />
    </div>
  );
}
