// データをforでグルグル取得(component)
Vue.component('fruits-list', {
  props: ['my-lists'],
  template: '<li>{{ myLists.name }} - {{ myLists.plice }}</li>'
});
// データをforでグルグル取得(extend)
var fList = Vue.extend({
  props: ['my-lists'],
  template: '<li>{{ myLists.name }} - {{ myLists.plice }}円</li>'
});

// コンポーネント(自己完結?)
Vue.component('comp-comp', { template: '<p>これはVue.component</p>' });
// コンポーネント(new Vue側で呼び出し)
var compExt = Vue.extend({ template: '<p>これはVue.extend</p>' });

// 親子関係(子)
var listChild = Vue.extend({ template: '<h3>子要素</h3>' });
// 親子関係(親)
var listParent = Vue.extend({
	template: '<div><h2>親要素</h2><list-child></list-child></div>',
  components: { 'list-child': listChild }
});

// 子から親へデータ渡す
var cButt = Vue.extend({
  template: '<span>{{counter}}個<button v-on:click="addToCart">追加</button></span>',
  data: function () {
    return {
    	counter: 0
    };
  },
  methods: {
    addToCart: function () {
      this.counter += 1;
      this.$emit('increment');
    }
  },
});


new Vue({
  el: '#example',
  data: { name: '', pw: '',
		lists: [
      {name: '梨',plice: 100 },
      {name: 'いちご',plice: 150},
      {name: 'ミカン',plice: 120}
    ],
    total: 0,
    counts: [
    	{name: 'hoge'},
      {name: 'fuga'}
    ]
	},
  components: {
  	'comp-ext':compExt,
    'list-parent': listParent,
    'f-list':fList,
    'c-butt':cButt
    },
  methods: {
    updatePw: function(event) {
      this.pw = event.target.value; },
    sendData: function() {
      alert(this.name); },
      increment: function () {this.total += 1}
	},
  computed: {
		isValid: function() {
      return this.name.length > 0; },
    isShort: function() {
      return this.pw.length > 7; }
	}
});
