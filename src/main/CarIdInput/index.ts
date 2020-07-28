import { getInsertInput, getFragmentDom } from '../../utils/util';
import './index.scss';

interface IOptions {
	onChange?: (value) => void;
	onInput?: (value) => void;
	onEnter?: () => void;
}

interface IcarInput {
	inputEl: HTMLElement;
	fragEl: DocumentFragment;
	init: (option: IOptions) => DocumentFragment;
}

const carInput: IcarInput = {
	inputEl: getInsertInput(),
	fragEl: getFragmentDom(),
	init(option: IOptions | null = null): DocumentFragment {
		const _this = this;
		_this.inputEl.type = 'text';
		_this.inputEl.placeholder = '请输入SIN号';
		if (option && option.onChange) {
			_this.inputEl.addEventListener('change', function() {
				option.onChange(this.value)
			})
		}
		if (option && option.onInput) {
			_this.inputEl.addEventListener('input', function() {
				option.onInput(this.value)
			})
		}
		if (option && option.onEnter) {
			window.addEventListener('keydown', function(e: KeyboardEvent) {
				if (e.keyCode === 13) {
					option.onEnter()
				}
			})
		}
		this.fragEl.appendChild(this.inputEl);
		return this.fragEl;
	}
}

export default carInput;
