import { Chart, registerComponentController } from '@antv/g2';
import Slider from '@antv/g2/lib/Chart/controller/slider';
import { getInsertDom } from '../utils/util';

// 引入 slider 组件
registerComponentController('slider', Slider);

// 右侧ATS数据面板
const ATSBoard: HTMLElement = getInsertDom('ATSBoard');

// BMS ESP ADAS 数据
const BMS_DCChgPosRelaySta_Data = [
	{ time: '02:50:00', value: 0.5 },
	{ time: '02:50:15', value: 0.5 },
	{ time: '02:50:30', value: 0.4 },
	{ time: '02:50:45', value: 0.46 },
	{ time: '02:51:00', value: 0.45 },
	{ time: '02:51:15', value: 0.5 },
	{ time: '02:51:30', value: 0.5 },
	{ time: '02:51:45', value: 0.5 },
	{ time: '02:52:00', value: 0.5 },
	{ time: '02:52:15', value: 0.5 }
];
const ESP_VehicleSpeed_Data = [
	{ time: '02:50:00', value: 0.05 },
	{ time: '02:50:15', value: 0.05 },
	{ time: '02:50:30', value: 0.04 },
	{ time: '02:50:45', value: 0.046 },
	{ time: '02:51:00', value: 0.045 },
	{ time: '02:51:15', value: 0.05 },
	{ time: '02:51:30', value: 0.05 },
	{ time: '02:51:45', value: 0.03 },
	{ time: '02:52:00', value: 0.05 },
	{ time: '02:52:15', value: 0.05 }
];
const ADAS_APDriverCarSta_Data = [
	{ time: '02:50:00', value: 0.5 },
	{ time: '02:50:15', value: 0.5 },
	{ time: '02:50:30', value: 0.4 },
	{ time: '02:50:45', value: 0.46 },
	{ time: '02:51:00', value: 0.45 },
	{ time: '02:51:15', value: 0.5 },
	{ time: '02:51:30', value: 0.5 },
	{ time: '02:51:45', value: 0.5 },
	{ time: '02:52:00', value: 0.5 },
	{ time: '02:52:15', value: 0.5 }
];

// 高度预设置
const winHeight: number = window.innerHeight;
const offsetTop: number = winHeight * 0.2 + 10;

// ATSBoardChart初始化
const ATSBoardChart: Chart = new Chart({
	container: ATSBoard,
	width: 800,
	height: winHeight,
});
ATSBoardChart.axis('value', {
	grid: {
		line: {
			style: {
				stroke: '#ffffff'
			}
		}
	},
	line: {
		style: {
			lineWidth: 0.5,
			stroke: '#ffffff'
		},
	},
	tickLine: {
		length: 6,
		style: {
			stroke: '#ffffff'
		},
	},
	label: {
		style: {
			fill: '#ffffff'
		}
	}
});
ATSBoardChart.tooltip({
	showCrosshairs: true,
	crosshairs: {
		line: {
			style: {
				lineWidth: 2,
				stroke: '#ffffff'
			}
		}
	}
});

// BMS视图
const BMS_View: any = ATSBoardChart.createView({
	region: {
		start: { x: 0.07, y: 0.05 }, // 指定该视图绘制的起始位置，x y 为 [0 - 1] 范围的数据
		end: { x: 0.95, y: 0.25 }, // 指定该视图绘制的结束位置，x y 为 [0 - 1] 范围的数据
	},
	padding: [5, 5], // 指定视图的留白
});
BMS_View.data(BMS_DCChgPosRelaySta_Data); //填充数据
BMS_View.scale({
  	time: {
   	 	range: [0, 1],
  	},
	value: {
		range: [0, 1],
		min: 0,
		max: 1,
		tickInterval: 0.2,
	},
});
BMS_View.line().position('time*value').label('value', {style: { fill: '#fff' }});
BMS_View.point().position('time*value');
BMS_View.axis('time', {
	title: {
		text: 'BMS_DCChgPosRelaySts: Positive Fast Charge Re 正极快充继电器状态',
		offset: -offsetTop,
		style: {
			fill: '#1890ff'
		}
	},
	line: {
		style: {
			lineWidth: 0.5,
			stroke: '#ffffff'
		},
	},

	label: {
		style: {
			fill: '#ffffff'
		}
	},
	tickLine: {
		style: {
			stroke: '#ffffff'
		}
	}
});
BMS_View.tooltip({
	showCrosshairs: true
});

// ESP视图
const ESP_View: any = ATSBoardChart.createView({
	region: {
		start: { x: 0.07, y: 0.35 }, // 指定该视图绘制的起始位置，x y 为 [0 - 1] 范围的数据
		end: { x: 0.95, y: 0.55 }, // 指定该视图绘制的结束位置，x y 为 [0 - 1] 范围的数据
	},
	padding: [5, 5], // 指定视图的留白
});
ESP_View.data(ESP_VehicleSpeed_Data);
ESP_View.scale({
	time: {
		range: [0, 1],
	},
  	value: {
		range: [0, 1],
		min: 0,
		max: 0.07,
		tickInterval: 0.01,
		// tickCount: 6
	},
});
ESP_View.line().position('time*value').label('value', {style: { fill: '#fff' }});
ESP_View.point().position('time*value');
ESP_View.axis('time', {
	title: {
		text: 'ESP_Vehiclespeed:   Vehicle speed out 当前车',
		offset: -offsetTop,
		style: {
			fill: '#1890ff'
		}
	},
	line: {
		style: {
			lineWidth: 0.5,
			stroke: '#ffffff'
		},
	},
	label: {
		style: {
			fill: '#ffffff'
		}
	}
});
ESP_View.tooltip({
	showCrosshairs: true,
	crosshairs: 'x',
	region: [0, 1],
	crosshairsRegion: [0, 1],
	x: 100,
	y: 200
});

// ADAS视图
const ADAS_View: any = ATSBoardChart.createView({
	region: {
		start: { x: 0.07, y: 0.65 }, // 指定该视图绘制的起始位置，x y 为 [0 - 1] 范围的数据
		end: { x: 0.95, y: 0.95 }, // 指定该视图绘制的结束位置，x y 为 [0 - 1] 范围的数据
	},
	padding: [0, 5, 100], // 指定视图的留白
});
ADAS_View.data(ADAS_APDriverCarSta_Data);
ADAS_View.scale({
	time: {
		range: [0, 1],
	},
	value: {
		range: [0, 1],
		min: 0,
		max: 1,
		tickInterval: 0.2,
	},
});
ADAS_View.line().position('time*value').label('value', {style: { fill: '#fff' }});
ADAS_View.point().position('time*value');
ADAS_View.axis('time', {
	title: {
		text: 'ADAS_APDriverCarSta:  APA And APO Driver Status',
		offset: -offsetTop,
		style: {
			fill: '#1890ff'
		}
	},
	line: {
		style: {
			lineWidth: 0.5,
			stroke: '#ffffff'
		},
	},
	label: {
		style: {
			fill: '#ffffff'
		}
	}
});
ADAS_View.tooltip({
	crosshairs: 'y',
	crosshairsRegion: [0, 1]
});

const updateMap = {
	index: 0,
	idxs: []
}

ADAS_View.option('slider', {
	start: 0,
	end: 1,
	trendCfg: {
	  isArea: false,
	  backgroundStyle: false,
	  lineStyle: false
	},
	backgroundStyle: {
		fill: '#000000'
	},
	handlerStyle: {
		fill: '#ffffff'
	},
	textStyle: {
		fill: '#ffffff'
	},
	formatter(val, datum, idx) {
		if (updateMap.idxs.length >= 2) {
			updateMap.idxs = [idx]
		} else {
			const len = updateMap.idxs.push(idx);
			if (len === 2 && updateMap.index > 2) {
				// 更新view
				const New_BMS_DCChgPosRelaySta_Data = BMS_DCChgPosRelaySta_Data.slice(updateMap.idxs[0], updateMap.idxs[1] + 1);
				const New_ESP_VehicleSpeed_Data = ESP_VehicleSpeed_Data.slice(updateMap.idxs[0], updateMap.idxs[1] + 1);
				BMS_View.changeData(New_BMS_DCChgPosRelaySta_Data);
				ESP_View.changeData(New_ESP_VehicleSpeed_Data);
			}
			updateMap.index++;
		}
		return val
	},
});

// 添加按钮
const leftSign: HTMLElement = getInsertDom('left-sign');
leftSign.innerText = '右侧面板';
leftSign.addEventListener('click', () => {
	ATSBoard.classList.toggle('slide-in')
});
ATSBoard.appendChild(leftSign);

export {
	ATSBoardChart
}