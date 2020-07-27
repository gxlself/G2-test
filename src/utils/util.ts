function getInsertDom(id: string): HTMLElement | null {
	const containerEl: HTMLDivElement = document.createElement('div');
	containerEl.setAttribute('id', id);
	document.body.appendChild(containerEl);
	return containerEl;
}

function getInsertInput(): HTMLInputElement | null {
	const containerEl: HTMLInputElement = document.createElement('input');
	return containerEl;
}


function getFragmentDom(): DocumentFragment{
	const containerEl: DocumentFragment = document.createDocumentFragment();
	return containerEl;
}

export {
	getInsertDom,
	getFragmentDom,
	getInsertInput
}