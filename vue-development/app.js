// 存取localstorage数据
var store = {
	save(key,value){
		localStorage.setItem(key,JSON.stringify(value));
	},
	fetch(key){
		return JSON.parse(localStorage.getItem(key)) || [];
	}
};

// 数据格式
// let list = [
// 	{
// 		id: '11321',
// 		title: "吃饭",
// 		isChecked: false	//不选中
// 	},
// 	{
// 		id: '21321',
// 		title: "睡觉",
// 		isChecked: true		//选中
// 	},
// 	{
// 		id: '31321',
// 		title: "打豆豆",
// 		isChecked: true
// 	}
// ];

// 取出所有值
var list = store.fetch('lillian-vue');
//过滤的三种情况 all finished unfinished
var filter = {
	all: function (list) {
		return list;
	},
	finished: function (list) {
		return list.filter(function (item) {
			return item.isChecked;
		})
	},
	unfinished: function (list) {
		return list.filter(function (item) {
			return !item.isChecked;
		})
	}
};

var vm = new Vue({
	el	: ".main",
	data: {
		list: list,
		todo: "",
		edtorTodos: '',	//记录正在编辑的数据
		beforeTitle: '', //记录原始title
		visibility: 'all'	//通过这个属性值的变化，对数据进行筛选
	},
	watch: {
		/*list: function(){	//监控list属性，当属性对应的值发生变化就会执行函数。浅层监控，一级
			store.save('lillian-vue', this.list);
		}*/
		list: {	//深度监控，内部所有属性
			handler() {
				store.save('lillian-vue', this.list);
			},
			deep: true
		}
	},
	computed: {	//计算属性
		noCheckeLength() {
			return this.list.filter(function (item) {
				return !item.isChecked;
			}).length;
		},
		filterList: function(){
			//过滤的三种情况 all finished unfinished
			return filter[this.visibility] ? filter[this.visibility](list) : list;
		}
	},
	methods: {
		addTodo(data, ev) { //添加任务, enter键触发
			this.list.push({	//vue改写方法
				// title: ev.target.value	//尽量不操作dom
				title: this.todo,	//利用绑定模型todo驱动
				isChecked : false
			});
			this.todo = ""; //同步清空输入框
		},
		deleteTodo(todo){	//删除任务
			var index = this.list.indexOf(todo);
			this.list.splice(index,1);	//vue改写方法
		},
		edtorTodo(todo){	//编辑任务
			// 编辑任务的时候，记录一下原始title，取消时用
			this.beforeTitle = todo.title;

			this.edtorTodos = todo;
			// console.log(this.edtorTodos);
		},
		edtorTodoed(todo){ //编辑完成
			this.edtorTodos = '';
			console.log(todo.id);
		},
		cancelTodo(todo){ //取消编辑
			todo.title = this.beforeTitle;
			this.beforeTitle = '';
			this.edtorTodos = '';
		}
	},
	directives: {
		"focuce": {	//自定义指令 focus使input自动获取焦点
			update(el,binding){ //指令的钩子函数，触发更新时，运行
				// el指向原生input对象
				// binding里面有一些绑定数据
				if(binding.value){
					el.focus();
				}
			}
		}
	}
});
function watchHashChange() {
	let hash = window.location.hash.slice(1); // 截取hash值

	vm.visibility = hash;
}
watchHashChange();
window.addEventListener("hashchange",watchHashChange);