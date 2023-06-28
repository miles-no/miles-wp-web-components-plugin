import React, { useEffect, useRef } from 'react';

const MilesImageBlockWrapper = (props) => {
	const milesImageBlockRef = useRef(null);

	useEffect(() => {
		const milesImageBlock = milesImageBlockRef.current;

		// Set the attributes based on the props passed
		Object.entries(props).forEach(([name, value]) => {
			if (value !== undefined) {
				milesImageBlock.setAttribute(name, value);
			}
		});

		// Clean up
		return () => {
			Object.keys(props).forEach((name) => {
				milesImageBlock.removeAttribute(name);
			});
		};
	}, [props]);

	return <miles-image-block ref={milesImageBlockRef}>{props.children}</miles-image-block>;
};

export default MilesImageBlockWrapper;
