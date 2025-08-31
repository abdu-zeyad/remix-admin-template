import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => [
  { title: 'Terms of Service - MAKAN' },
  {
    name: 'description',
    content: 'Read the terms of service for MAKAN - مكان app.',
  },
];

export default function Terms() {
  return (
    <div className='max-w-3xl px-6 py-12 mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>Terms of Service</h1>
      <p className='text-gray-700 mb-4'>
        These are the terms of service for MAKAN - مكان app.
      </p>
      <p className='text-gray-700'>
        Replace this content with your real terms of service.
      </p>
    </div>
  );
}
