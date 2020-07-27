import { getInsertInput, getFragmentDom, getInsertDom } from '../../utils/util';
import './index.scss';

interface IOptions {
	onChange?: (value) => void;
	onInput?: (value) => void;
}

interface IcarInput {
	inputEl: HTMLElement;
	init: (option: IOptions) => void;
}

const carInput: IcarInput = {
	inputEl: getInsertInput(),
	init(option: IOptions | null = null) {
		const _this = this;
		_this.el.type = 'text';
		if (option && option.onChange) {
			_this.el.addEventListener('change', function() {
				option.onChange(this.value)
			})
		}
		if (option && option.onInput) {
			_this.el.addEventListener('input', function() {
				option.onInput(this.value)
			})
		}
	}
}

export default carInput;
