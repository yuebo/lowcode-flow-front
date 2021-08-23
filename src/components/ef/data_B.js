let dataB = {
  "id": "123456",
  "name": "新的流程",
  "path": "test",
  "nodeList": [
    {
      "id": "6o9ewk6lxl",
      "name": "变量声明",
      "type": "declare",
      "left": "52px",
      "top": "65px",
      "ico": "el-icon-tickets",
      "state": "",
      "variables": [
        "aaa",
        "bbb"
      ]
    },
    {
      "id": "22mt93pjkd",
      "name": "设置变量aaa",
      "type": "set",
      "left": "415px",
      "top": "53px",
      "ico": "el-icon-finished",
      "state": "",
      "var": "aaa",
      "value": "1"
    },
    {
      "id": "uon837b73",
      "name": "判断aaa",
      "type": "if",
      "left": "705px",
      "top": "50px",
      "ico": "el-icon-open",
      "state": "",
      "exp": "aaa<=10"
    },
    {
      "id": "ujkuhbhgxq",
      "name": "方法调用printf",
      "type": "exec",
      "left": "413px",
      "top": "293px",
      "ico": "el-icon-link",
      "state": "",
      "method": "printf",
      "args": [
        "\"重新生成=====>${aaa}\\n\""
      ]
    },
    {
      "id": "ls2r7zaner",
      "name": "aaa=bbb+1",
      "type": "set",
      "left": "412px",
      "top": "149px",
      "ico": "el-icon-finished",
      "state": "",
      "var": "aaa",
      "value": "random.nextInt(15)"
    },
    {
      "id": "thyy5gz1wo",
      "name": "设置变量bbb",
      "type": "set",
      "left": "49px",
      "top": "184px",
      "ico": "el-icon-finished",
      "state": "",
      "var": "bbb",
      "value": "2"
    },
    {
      "id": "izffc0oue",
      "name": "绑定返回值",
      "type": "exec",
      "left": "701px",
      "top": "289px",
      "ico": "el-icon-link",
      "state": "",
      "args": [
        "aaa"
      ],
      "method": "response.setData"
    }
  ],
  "lineList": [
    {
      "from": "22mt93pjkd",
      "to": "uon837b73"
    },
    {
      "from": "uon837b73",
      "to": "ls2r7zaner",
      "label": "true"
    },
    {
      "from": "ls2r7zaner",
      "to": "ujkuhbhgxq"
    },
    {
      "from": "6o9ewk6lxl",
      "to": "thyy5gz1wo"
    },
    {
      "from": "thyy5gz1wo",
      "to": "22mt93pjkd"
    },
    {
      "from": "ujkuhbhgxq",
      "to": "uon837b73"
    },
    {
      "from": "uon837b73",
      "to": "izffc0oue",
      "label": "false"
    }
  ],
  "start": "6o9ewk6lxl"
}

export function getDataB() {
  return dataB
}
