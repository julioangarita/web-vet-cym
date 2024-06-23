{"filter":false,"title":"appconsult.js","tooltip":"/static/js/appconsult.js","undoManager":{"mark":30,"position":30,"stack":[[{"start":{"row":0,"column":0},"end":{"row":20,"column":0},"action":"insert","lines":["function consult_user() {","    let id_user = document.getElementById(\"ident\").value","    let obj_user = {","        \"id\": id_user,","        \"passw\": \"12345\" //es solo para pruebas no se utiliza","    }","    fetch(\"/consult_user\", {","        \"method\":\"post\",","        \"headers\":{\"Content-Type\":\"application/json\"},","        \"body\":JSON.stringify(obj_user)","    })","    .then(resp => resp.json())","    .then(data => {","        alert(data.status)","    })","    .catch(err => {","        alert(\"Error \" + err)","    })","}","",""],"id":7}],[{"start":{"row":13,"column":24},"end":{"row":13,"column":25},"action":"remove","lines":["s"],"id":8},{"start":{"row":13,"column":23},"end":{"row":13,"column":24},"action":"remove","lines":["u"]},{"start":{"row":13,"column":22},"end":{"row":13,"column":23},"action":"remove","lines":["t"]},{"start":{"row":13,"column":21},"end":{"row":13,"column":22},"action":"remove","lines":["a"]},{"start":{"row":13,"column":20},"end":{"row":13,"column":21},"action":"remove","lines":["t"]},{"start":{"row":13,"column":19},"end":{"row":13,"column":20},"action":"remove","lines":["s"]}],[{"start":{"row":13,"column":19},"end":{"row":13,"column":20},"action":"insert","lines":["N"],"id":9},{"start":{"row":13,"column":20},"end":{"row":13,"column":21},"action":"insert","lines":["o"]},{"start":{"row":13,"column":21},"end":{"row":13,"column":22},"action":"insert","lines":["m"]},{"start":{"row":13,"column":22},"end":{"row":13,"column":23},"action":"insert","lines":["b"]},{"start":{"row":13,"column":23},"end":{"row":13,"column":24},"action":"insert","lines":["r"]},{"start":{"row":13,"column":24},"end":{"row":13,"column":25},"action":"insert","lines":["e"]}],[{"start":{"row":13,"column":26},"end":{"row":13,"column":27},"action":"insert","lines":[" "],"id":10},{"start":{"row":13,"column":27},"end":{"row":13,"column":28},"action":"insert","lines":["/"]},{"start":{"row":13,"column":28},"end":{"row":13,"column":29},"action":"insert","lines":["/"]}],[{"start":{"row":13,"column":29},"end":{"row":13,"column":30},"action":"insert","lines":["a"],"id":11},{"start":{"row":13,"column":30},"end":{"row":13,"column":31},"action":"insert","lines":["c"]},{"start":{"row":13,"column":31},"end":{"row":13,"column":32},"action":"insert","lines":["a"]}],[{"start":{"row":13,"column":32},"end":{"row":13,"column":33},"action":"insert","lines":[" "],"id":12},{"start":{"row":13,"column":33},"end":{"row":13,"column":34},"action":"insert","lines":["e"]},{"start":{"row":13,"column":34},"end":{"row":13,"column":35},"action":"insert","lines":["k"]}],[{"start":{"row":13,"column":34},"end":{"row":13,"column":35},"action":"remove","lines":["k"],"id":13}],[{"start":{"row":13,"column":34},"end":{"row":13,"column":35},"action":"insert","lines":["l"],"id":14}],[{"start":{"row":13,"column":35},"end":{"row":13,"column":36},"action":"insert","lines":[" "],"id":15},{"start":{"row":13,"column":36},"end":{"row":13,"column":37},"action":"insert","lines":["N"]},{"start":{"row":13,"column":37},"end":{"row":13,"column":38},"action":"insert","lines":["o"]},{"start":{"row":13,"column":38},"end":{"row":13,"column":39},"action":"insert","lines":["m"]},{"start":{"row":13,"column":39},"end":{"row":13,"column":40},"action":"insert","lines":["b"]},{"start":{"row":13,"column":40},"end":{"row":13,"column":41},"action":"insert","lines":["r"]},{"start":{"row":13,"column":41},"end":{"row":13,"column":42},"action":"insert","lines":["e"]}],[{"start":{"row":13,"column":42},"end":{"row":13,"column":43},"action":"insert","lines":[" "],"id":16},{"start":{"row":13,"column":43},"end":{"row":13,"column":44},"action":"insert","lines":["s"]},{"start":{"row":13,"column":44},"end":{"row":13,"column":45},"action":"insert","lines":["e"]}],[{"start":{"row":13,"column":45},"end":{"row":13,"column":46},"action":"insert","lines":[" "],"id":17},{"start":{"row":13,"column":46},"end":{"row":13,"column":47},"action":"insert","lines":["r"]},{"start":{"row":13,"column":47},"end":{"row":13,"column":48},"action":"insert","lines":["e"]},{"start":{"row":13,"column":48},"end":{"row":13,"column":49},"action":"insert","lines":["t"]},{"start":{"row":13,"column":49},"end":{"row":13,"column":50},"action":"insert","lines":["o"]},{"start":{"row":13,"column":50},"end":{"row":13,"column":51},"action":"insert","lines":["r"]},{"start":{"row":13,"column":51},"end":{"row":13,"column":52},"action":"insert","lines":["n"]},{"start":{"row":13,"column":52},"end":{"row":13,"column":53},"action":"insert","lines":["a"]}],[{"start":{"row":13,"column":52},"end":{"row":13,"column":53},"action":"remove","lines":["a"],"id":18},{"start":{"row":13,"column":51},"end":{"row":13,"column":52},"action":"remove","lines":["n"]},{"start":{"row":13,"column":50},"end":{"row":13,"column":51},"action":"remove","lines":["r"]},{"start":{"row":13,"column":49},"end":{"row":13,"column":50},"action":"remove","lines":["o"]},{"start":{"row":13,"column":48},"end":{"row":13,"column":49},"action":"remove","lines":["t"]},{"start":{"row":13,"column":47},"end":{"row":13,"column":48},"action":"remove","lines":["e"]},{"start":{"row":13,"column":46},"end":{"row":13,"column":47},"action":"remove","lines":["r"]},{"start":{"row":13,"column":45},"end":{"row":13,"column":46},"action":"remove","lines":[" "]},{"start":{"row":13,"column":44},"end":{"row":13,"column":45},"action":"remove","lines":["e"]},{"start":{"row":13,"column":43},"end":{"row":13,"column":44},"action":"remove","lines":["s"]},{"start":{"row":13,"column":42},"end":{"row":13,"column":43},"action":"remove","lines":[" "]},{"start":{"row":13,"column":41},"end":{"row":13,"column":42},"action":"remove","lines":["e"]},{"start":{"row":13,"column":40},"end":{"row":13,"column":41},"action":"remove","lines":["r"]},{"start":{"row":13,"column":39},"end":{"row":13,"column":40},"action":"remove","lines":["b"]},{"start":{"row":13,"column":38},"end":{"row":13,"column":39},"action":"remove","lines":["m"]},{"start":{"row":13,"column":37},"end":{"row":13,"column":38},"action":"remove","lines":["o"]},{"start":{"row":13,"column":36},"end":{"row":13,"column":37},"action":"remove","lines":["N"]},{"start":{"row":13,"column":35},"end":{"row":13,"column":36},"action":"remove","lines":[" "]},{"start":{"row":13,"column":34},"end":{"row":13,"column":35},"action":"remove","lines":["l"]},{"start":{"row":13,"column":33},"end":{"row":13,"column":34},"action":"remove","lines":["e"]}],[{"start":{"row":13,"column":33},"end":{"row":13,"column":34},"action":"insert","lines":["s"],"id":19},{"start":{"row":13,"column":34},"end":{"row":13,"column":35},"action":"insert","lines":["e"]}],[{"start":{"row":13,"column":35},"end":{"row":13,"column":36},"action":"insert","lines":[" "],"id":20},{"start":{"row":13,"column":36},"end":{"row":13,"column":37},"action":"insert","lines":["r"]},{"start":{"row":13,"column":37},"end":{"row":13,"column":38},"action":"insert","lines":["e"]},{"start":{"row":13,"column":38},"end":{"row":13,"column":39},"action":"insert","lines":["t"]},{"start":{"row":13,"column":39},"end":{"row":13,"column":40},"action":"insert","lines":["o"]},{"start":{"row":13,"column":40},"end":{"row":13,"column":41},"action":"insert","lines":["r"]},{"start":{"row":13,"column":41},"end":{"row":13,"column":42},"action":"insert","lines":["n"]},{"start":{"row":13,"column":42},"end":{"row":13,"column":43},"action":"insert","lines":["a"]}],[{"start":{"row":13,"column":43},"end":{"row":13,"column":44},"action":"insert","lines":[" "],"id":21},{"start":{"row":13,"column":44},"end":{"row":13,"column":45},"action":"insert","lines":["e"]},{"start":{"row":13,"column":45},"end":{"row":13,"column":46},"action":"insert","lines":["l"]}],[{"start":{"row":13,"column":46},"end":{"row":13,"column":47},"action":"insert","lines":[" "],"id":22},{"start":{"row":13,"column":47},"end":{"row":13,"column":48},"action":"insert","lines":["c"]},{"start":{"row":13,"column":48},"end":{"row":13,"column":49},"action":"insert","lines":["o"]},{"start":{"row":13,"column":49},"end":{"row":13,"column":50},"action":"insert","lines":["n"]},{"start":{"row":13,"column":50},"end":{"row":13,"column":51},"action":"insert","lines":["t"]},{"start":{"row":13,"column":51},"end":{"row":13,"column":52},"action":"insert","lines":["e"]},{"start":{"row":13,"column":52},"end":{"row":13,"column":53},"action":"insert","lines":["n"]},{"start":{"row":13,"column":53},"end":{"row":13,"column":54},"action":"insert","lines":["i"]},{"start":{"row":13,"column":54},"end":{"row":13,"column":55},"action":"insert","lines":["d"]},{"start":{"row":13,"column":55},"end":{"row":13,"column":56},"action":"insert","lines":["o"]}],[{"start":{"row":13,"column":56},"end":{"row":13,"column":57},"action":"insert","lines":[" "],"id":23},{"start":{"row":13,"column":57},"end":{"row":13,"column":58},"action":"insert","lines":["d"]},{"start":{"row":13,"column":58},"end":{"row":13,"column":59},"action":"insert","lines":["e"]}],[{"start":{"row":13,"column":59},"end":{"row":13,"column":60},"action":"insert","lines":[" "],"id":24},{"start":{"row":13,"column":60},"end":{"row":13,"column":61},"action":"insert","lines":["l"]},{"start":{"row":13,"column":61},"end":{"row":13,"column":62},"action":"insert","lines":["a"]}],[{"start":{"row":13,"column":62},"end":{"row":13,"column":63},"action":"insert","lines":[" "],"id":25},{"start":{"row":13,"column":63},"end":{"row":13,"column":64},"action":"insert","lines":["v"]},{"start":{"row":13,"column":64},"end":{"row":13,"column":65},"action":"insert","lines":["a"]},{"start":{"row":13,"column":65},"end":{"row":13,"column":66},"action":"insert","lines":["r"]},{"start":{"row":13,"column":66},"end":{"row":13,"column":67},"action":"insert","lines":["i"]},{"start":{"row":13,"column":67},"end":{"row":13,"column":68},"action":"insert","lines":["a"]},{"start":{"row":13,"column":68},"end":{"row":13,"column":69},"action":"insert","lines":["b"]},{"start":{"row":13,"column":69},"end":{"row":13,"column":70},"action":"insert","lines":["l"]},{"start":{"row":13,"column":70},"end":{"row":13,"column":71},"action":"insert","lines":["e"]}],[{"start":{"row":13,"column":71},"end":{"row":13,"column":72},"action":"insert","lines":[" "],"id":26},{"start":{"row":13,"column":72},"end":{"row":13,"column":73},"action":"insert","lines":["N"]},{"start":{"row":13,"column":73},"end":{"row":13,"column":74},"action":"insert","lines":["o"]},{"start":{"row":13,"column":74},"end":{"row":13,"column":75},"action":"insert","lines":["m"]},{"start":{"row":13,"column":75},"end":{"row":13,"column":76},"action":"insert","lines":["b"]},{"start":{"row":13,"column":76},"end":{"row":13,"column":77},"action":"insert","lines":["r"]},{"start":{"row":13,"column":77},"end":{"row":13,"column":78},"action":"insert","lines":["e"]}],[{"start":{"row":13,"column":78},"end":{"row":13,"column":79},"action":"insert","lines":[" "],"id":27}],[{"start":{"row":13,"column":78},"end":{"row":13,"column":79},"action":"remove","lines":[" "],"id":28}],[{"start":{"row":13,"column":78},"end":{"row":13,"column":79},"action":"insert","lines":[","],"id":29}],[{"start":{"row":13,"column":79},"end":{"row":13,"column":80},"action":"insert","lines":[" "],"id":30},{"start":{"row":13,"column":80},"end":{"row":13,"column":81},"action":"insert","lines":["v"]},{"start":{"row":13,"column":81},"end":{"row":13,"column":82},"action":"insert","lines":["e"]},{"start":{"row":13,"column":82},"end":{"row":13,"column":83},"action":"insert","lines":["r"]}],[{"start":{"row":13,"column":83},"end":{"row":13,"column":84},"action":"insert","lines":[" "],"id":31}],[{"start":{"row":13,"column":84},"end":{"row":13,"column":85},"action":"insert","lines":["c"],"id":32},{"start":{"row":13,"column":85},"end":{"row":13,"column":86},"action":"insert","lines":["o"]},{"start":{"row":13,"column":86},"end":{"row":13,"column":87},"action":"insert","lines":["n"]},{"start":{"row":13,"column":87},"end":{"row":13,"column":88},"action":"insert","lines":["t"]},{"start":{"row":13,"column":88},"end":{"row":13,"column":89},"action":"insert","lines":["r"]},{"start":{"row":13,"column":89},"end":{"row":13,"column":90},"action":"insert","lines":["o"]},{"start":{"row":13,"column":90},"end":{"row":13,"column":91},"action":"insert","lines":["l"]},{"start":{"row":13,"column":91},"end":{"row":13,"column":92},"action":"insert","lines":["."]},{"start":{"row":13,"column":92},"end":{"row":13,"column":93},"action":"insert","lines":["p"]}],[{"start":{"row":13,"column":93},"end":{"row":13,"column":94},"action":"insert","lines":["y"],"id":33}],[{"start":{"row":13,"column":94},"end":{"row":13,"column":95},"action":"insert","lines":[" "],"id":34},{"start":{"row":13,"column":95},"end":{"row":13,"column":96},"action":"insert","lines":["l"]},{"start":{"row":13,"column":96},"end":{"row":13,"column":97},"action":"insert","lines":["i"]},{"start":{"row":13,"column":97},"end":{"row":13,"column":98},"action":"insert","lines":["n"]},{"start":{"row":13,"column":98},"end":{"row":13,"column":99},"action":"insert","lines":["e"]},{"start":{"row":13,"column":99},"end":{"row":13,"column":100},"action":"insert","lines":["a"]}],[{"start":{"row":13,"column":100},"end":{"row":13,"column":101},"action":"insert","lines":[" "],"id":35},{"start":{"row":13,"column":101},"end":{"row":13,"column":102},"action":"insert","lines":["3"]},{"start":{"row":13,"column":102},"end":{"row":13,"column":103},"action":"insert","lines":["7"]}],[{"start":{"row":13,"column":103},"end":{"row":13,"column":104},"action":"insert","lines":[" "],"id":36},{"start":{"row":13,"column":104},"end":{"row":13,"column":105},"action":"insert","lines":["o"]},{"start":{"row":13,"column":105},"end":{"row":13,"column":106},"action":"insert","lines":["b"]},{"start":{"row":13,"column":106},"end":{"row":13,"column":107},"action":"insert","lines":["j"]},{"start":{"row":13,"column":107},"end":{"row":13,"column":108},"action":"insert","lines":["e"]},{"start":{"row":13,"column":108},"end":{"row":13,"column":109},"action":"insert","lines":["t"]},{"start":{"row":13,"column":109},"end":{"row":13,"column":110},"action":"insert","lines":["o"]},{"start":{"row":13,"column":110},"end":{"row":13,"column":111},"action":"insert","lines":["."]},{"start":{"row":13,"column":111},"end":{"row":13,"column":112},"action":"insert","lines":["a"]},{"start":{"row":13,"column":112},"end":{"row":13,"column":113},"action":"insert","lines":["t"]},{"start":{"row":13,"column":113},"end":{"row":13,"column":114},"action":"insert","lines":["r"]}],[{"start":{"row":13,"column":114},"end":{"row":13,"column":115},"action":"insert","lines":["i"],"id":37},{"start":{"row":13,"column":115},"end":{"row":13,"column":116},"action":"insert","lines":["b"]},{"start":{"row":13,"column":116},"end":{"row":13,"column":117},"action":"insert","lines":["u"]},{"start":{"row":13,"column":117},"end":{"row":13,"column":118},"action":"insert","lines":["r"]},{"start":{"row":13,"column":118},"end":{"row":13,"column":119},"action":"insert","lines":["o"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":13,"column":119},"end":{"row":13,"column":119},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1719179057783,"hash":"4ac95cec1656f2123c5ee75b7f57dce8ea51ad07"}