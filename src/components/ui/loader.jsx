import Image from 'next/image';

export const Loader = () => {
	return (
		<Image
			className='mr-2'
			src='/loading.svg'
			width={25}
			height={25}
			alt='Loading...'
		/>
	)
}