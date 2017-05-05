<template>
	<div id="app">
		<h3>指令 事件</h3>
		<p v-text="hello"></p>
		<p v-html="hello"></p>

		<ul class="vfor">v-for渲染数组
			<li v-for="(item, index) in list" :class="{odd: index%2}">{{item.name}} - {{item.price}} - {{index}}</li>
		</ul>
		<a :href="link" :title="hello" :class="className" :style="linkCss">to baidu</a>
		<a :href="link" :title="hello" :class="[classA, classB, {'big-font': hasError}]">to baidu</a>
		<button @click="changeItem">addItem</button>

		<a v-if="isPartA">partA</a>
		<a v-else>no data</a>
		<a v-show="!isPartA">partB</a>
		<button @click="toggle">toggle</button>

		<ul>v-for渲染对象
			<li v-for="(value, key) in objList">{{key}} - {{value}}</li>
		</ul>
		<comA :dataA="dataA" @my-event="onComaMyEvent"></comA>

		{{myValue}}
		<!--<input type="text" v-model="myValue">-->
		<!--<input type="text" v-model.lazy="myValue">延迟更改，类型string-->
		<input type="text" v-model.number="myValue">数据类型为number
		<!--<input type="text" v-model.trim="myValue">裁剪空格-->

		{{myBox}}
		<input type="radio" v-model="myBox" value="apple">
		<input type="radio" v-model="myBox" value="banana">
		<input type="radio" v-model="myBox" value="pinapple">

		{{selection}}
		<select v-model="selection">
			<option v-for="item in selectOptions" :value="item.value">{{item.text}}</option>
		</select>

		<h3>计算属性</h3>
		<input type="text" v-model="myValue2">
		{{myValue2WithoutNum}}
		{{getMyValue2WithouNum()}}

		<p style="text-align: left">1. computed计算属性是基于它们的依赖进行缓存的，只有在它的相关依赖发生改变时才会重新求值</p>
		<p style="text-align: left">2. 而对于method ，只要发生重新渲染，method 调用总会执行该函数。</p>
		<p style="text-align: left">[总之]：数据量大，需要缓存的时候用computed；每次确实需要重新加载，不需要缓存时用methods</p>
		<p style="text-align: left">[总之]：尽量用computed计算属性来监视数据的变化，因为它本身就这个特性，用watch没有computed“自动”，手动设置使代码变复杂。</p>

		<h3>属性监听</h3>
		<input type="text" v-model="myVal">
		<ul>
			<li v-for="item in list">{{item.name}} + {{item.price}}</li>
		</ul>
		<button @click="changeList">change</button>




		<hr>
		<hr>
		<img src="./assets/logo.png">
		<h1 v-bind:title="name">你好, {{name}}</h1>
		<h2>Essential Links</h2>
		<ul>
			<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
			<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
			<li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
			<li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
		</ul>
		<h2>Ecosystem</h2>
		<ul>
			<li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
			<li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
			<li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
			<li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
		</ul>
	</div>
</template>

<script>
import comA from './components/a.vue';
import Vue from 'vue';
export default {
	name: 'app',
	components: {comA},
	data () {
		return {
			msg: 'Welcome to Your Vue.js App',
			name: 'Lillian',
			hello: '<span>hello</span>',
			link: 'http://www.baidu.com',
			dataA: '123',
			classStr: 'red-font',
			className: {
				'red-font': true,
				'blue-font': true
			},
			classArr: ['red-font', 'big-font'],
			classA: 'class-A',
			classB: 'class-B',
			hasError: false,
			linkCss: {
				'color': 'red',
				'font-size': '20px'
			},
			isPartA: true,
			list: [
				{
					name: 'apple',
					price: 34
				},
				{
					name: 'banana',
					price: 56
				}
			],
			objList: {
				name: 'apple',
				price: 34,
				color: 'red',
				weight: 14
			},
			myValue: "",
			myBox: [],
			selection: null,
			selectOptions: [
				{
					text: 'apple',
					value: 0
				},
				{
					text: 'banana',
					value: 1
				}
			],
			myValue2: "啊啊11啊",
			myVal: ""
		}
	},
	watch: {
		myVal(val, oldVal){
			console.log(val, oldVal);
		},
		list(){
			this.tellUser()
		}
	},
	computed: {
		myValue2WithoutNum(){
			return this.myValue2.replace(/\d/g, '')
		}
	},
	methods: {
		changeList(){
			Vue.set(this.list, 1, {
				name: 'pinaapple',
				price: 123
			});
//			this.tellUser();
		},
		tellUser(){
			alert('list change');
		},
		getMyValue2WithouNum(){
			return this.myValue2.replace(/\d/g, '')
		},
		addItem(){
			this.list.push({
				name: 'add apple',
				price: 34
			});
		},
		changeItem(){
			Vue.set(this.list, 1, {
				name: 'pinapple',
				price: 133
			});
//			改值不会触发更新视图，需要用set来解决
//			this.list[1] = {
//				name: 'pinapple',
//				price: 133
//			}
		},
		toggle(){
			this.isPartA = !this.isPartA;
		},
		onComaMyEvent(parmfromA){
			console.log('onComaMyEvent' + parmfromA);
		}
	}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.red-font { color: red;}
h3 {
	font-size: 30px; font-weight: bold; color: #3399ff;
}

ul {
  list-style-type: none;
  padding: 0;
	&.vfor { border: 1px solid #666;
		li { display: block;}
		.odd { color: #fa5653;}
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
}
a {
  color: #42b983;
}

</style>
