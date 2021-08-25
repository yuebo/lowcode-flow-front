var dataD = {
  "name": "新建流程",
  "id": "111",
  "nodeList": [
    {
      "id": "3th31fp8wc",
      "name": "变量声明",
      "type": "declare",
      "left": "126px",
      "top": "37px",
      "ico": "el-icon-tickets",
      "state": "",
      "variables": [
        "model",
        "body",
        "count"
      ]
    },
    {
      "id": "4dpondadc",
      "name": "解析请求数据",
      "type": "set",
      "left": "443px",
      "top": "35px",
      "ico": "el-icon-finished",
      "state": "",
      "var": "body",
      "value": "json.parse(request.body)"
    },
    {
      "id": "2haiqd5f3m",
      "name": "加载模型",
      "type": "set",
      "left": "783px",
      "top": "31px",
      "ico": "el-icon-finished",
      "state": "",
      "var": "model",
      "value": "models.load(\"tbl_message\")"
    },
    {
      "id": "5872etw0p",
      "name": "保存数据",
      "type": "set",
      "left": "488px",
      "top": "155px",
      "ico": "el-icon-finished",
      "state": "",
      "var": "count",
      "value": "model.save(body)"
    },
    {
      "id": "49wmerteo",
      "name": "判断是否执行成功",
      "type": "if",
      "left": "268px",
      "top": "153px",
      "ico": "el-icon-open",
      "state": "",
      "exp": "count>0"
    },
    {
      "id": "yqrfhhroag",
      "name": "成功返回",
      "type": "exec",
      "left": "266px",
      "top": "334px",
      "ico": "el-icon-link",
      "state": "",
      "args": [
        "[\"error\":0,\"id\":body[\"id\"]]"
      ],
      "method": "response.setData"
    },
    {
      "id": "5bxxhmdhs",
      "name": "错误返回",
      "type": "exec",
      "left": "4px",
      "top": "152px",
      "ico": "el-icon-link",
      "state": "",
      "args": [
        "[\"error\":1]"
      ],
      "method": "response.setData"
    },
    {
      "id": "340jy9968p",
      "name": "数据验证",
      "type": "if",
      "left": "772px",
      "top": "162px",
      "ico": "el-icon-open",
      "state": "",
      "exp": "body[\"key\"].length()<=5"
    },
    {
      "id": "zsihisvppe",
      "name": "验证错误返回",
      "type": "exec",
      "left": "772px",
      "top": "315px",
      "ico": "el-icon-link",
      "state": "",
      "args": [
        "[\"error\":1,\"errors\": [\"key\":\"key数据超过长度\"]]"
      ],
      "method": "response.setData"
    }
  ],
  "lineList": [
    {
      "from": "3th31fp8wc",
      "to": "4dpondadc"
    },
    {
      "from": "4dpondadc",
      "to": "2haiqd5f3m"
    },
    {
      "from": "5872etw0p",
      "to": "49wmerteo"
    },
    {
      "from": "49wmerteo",
      "to": "yqrfhhroag",
      "label": "true"
    },
    {
      "from": "49wmerteo",
      "to": "5bxxhmdhs",
      "label": "false"
    },
    {
      "from": "340jy9968p",
      "to": "5872etw0p",
      "label": "true"
    },
    {
      "from": "2haiqd5f3m",
      "to": "340jy9968p"
    },
    {
      "from": "340jy9968p",
      "to": "zsihisvppe",
      "label": "false"
    }
  ],
  "start": "3th31fp8wc",
  "path": "messages/save"
}

export function getDataD() {
    return dataD
}
