let dataA = {
  "name": "新建流程",
  "id": "12",
  "nodeList": [
    {
      "id": "tdsj9whp1c",
      "name": "变量声明",
      "type": "declare",
      "left": "96px",
      "top": "47px",
      "ico": "el-icon-tickets",
      "state": "",
      "variables": [
        "model",
        "builder"
      ]
    },
    {
      "id": "gfifzi2mg2",
      "name": "绑定参数",
      "type": "set",
      "left": "95px",
      "top": "176px",
      "ico": "el-icon-finished",
      "state": "",
      "var": "model",
      "value": "json.parse(request.body)"
    },
    {
      "id": "z2sainy9cg",
      "name": "绑定builder",
      "type": "set",
      "left": "94px",
      "top": "308px",
      "ico": "el-icon-finished",
      "state": "",
      "var": "builder",
      "value": "models.load(\"tbl_message\")"
    },
    {
      "id": "0xhrw1qxh",
      "name": "方法调用",
      "type": "exec",
      "left": "498px",
      "top": "305px",
      "ico": "el-icon-link",
      "state": "",
      "args": [
        "builder.findAll([])"
      ],
      "method": "response.setData"
    }
  ],
  "lineList": [
    {
      "from": "tdsj9whp1c",
      "to": "gfifzi2mg2"
    },
    {
      "from": "gfifzi2mg2",
      "to": "z2sainy9cg"
    },
    {
      "from": "z2sainy9cg",
      "to": "0xhrw1qxh"
    }
  ],
  "start": "tdsj9whp1c",
  "path": "messages"
}

export function getDataA () {
    return dataA
}
