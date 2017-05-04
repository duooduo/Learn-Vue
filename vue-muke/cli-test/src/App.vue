<template>
	<div id="app">
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
		<componentA :dataA="dataA"></componentA>


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
import componentA from './components/a.vue';
import Vue from 'vue';
export default {
	name: 'app',
	components: {componentA},
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
			}
		}
	},
	methods: {
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
h1, h2 {
  font-weight: normal;
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
