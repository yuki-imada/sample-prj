
// データをforでグルグル取得(extend)
var userList = Vue.extend({
  props: ['my-lists'],
  template: '<li>{{ myLists.username }} - {{ myLists.mail }}</li>'
});

// axios設定
axios.interceptors.request.use(function (config) {
  config.timeout = 100000;
  //config.responseType = 'json';
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 型判定関数is
function is(type, obj) {
    var clas = Object.prototype.toString.call(obj).slice(8, -1);
    return obj !== undefined && obj !== null && clas === type;
}

new Vue({
  el: '#example',
  data: {
    users: [
      {username: 'ほげ太郎', mail: 'hogetaro@shinko-1930.co.jp' }
    ]
	},
  components: { 'user-list':userList },
  methods: {
    getData: function() {
      // べた書き
      // val = [
      //   {username: 'ほげ太郎', mail: 'hogetaro@shinko-1930.co.jp' },
      //   {username: 'ほげ次郎', mail: 'hogejiro@shinko-1930.co.jp' },
      //   {username: 'ほげ三郎', mail: 'hogesaburo@shinko-1930.co.jp' }
      // ];
      // this.users = val;
      // console.log(this.users);

      event.preventDefault();
      axios.get('https://xutkf36mk9.execute-api.ap-northeast-1.amazonaws.com/imada_dev/imada/ddb')
      // 正常系
      .then(function (response) {
        // console.log("response.data", response.data);
        // console.log(JSON.stringify(response.data));
        console.log("response.data.Items", response.data.Items);
        console.log(JSON.stringify(response.data.Items));
        // val = JSON.stringify(response.data.Items);
        val = response.data.Items;
        this.users = val;
        // console.log("response.data.Items[0]", response.data.Items[0]);
        // console.log(JSON.stringify(response.data.Items[0]));
        // this.users = JSON.stringify(response.data.Items);
        // this.users = response.data.Items;
        // console.log(is('Object', this.users));
        // console.log(is('Array', this.users));
        console.log(this.users);
        // for (var i = 0; i < this.users; i++) {
        //   console.log(JSON.stringify(response.data.Items[i]));
        //   this.users.push(JSON.stringify(response.data.Items[i]));
        // }
        //this.users = response.data.Items;
        // for (var i = 0; i < response.data.Items.length; i++) {
        //   console.log(JSON.stringify(response.data.Items[i]));
        //   this.users.push(JSON.stringify(response.data.Items[i]));
        // }
      })
      // 異常系
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  computed: {	}
});
