import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => [
  { title: 'Contact - MAKAN' },
  { name: 'description', content: 'Get in touch with MAKAN - مكان team.' },
];

export default function Contact() {
  return (
    <div className='max-w-3xl px-6 py-12 mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>Contact Us</h1>
      <p className='text-gray-700 mb-4'>
        If you have any questions or need support, you can reach out to us.
      </p>
      <p className='text-gray-700'>
        📧 Email:{' '}
        <a
          href='mailto:support@makanapp.com'
          className='text-blue-600 underline'
        >
          support@makanapp.com
        </a>
      </p>
    </div>
  );
}
