let types = {
    'declare': {
        'variables': {
            'label': '变量名称',
            'type': 'array',
            'default': ['']
        }
    },
    'set': {
        'var': {
            'label': '变量名称',
            'type': 'string',
            'default': ''
        },
        'value': {
            'label': '变量值',
            'type': 'string',
            'default': ''
        }
    },
    'if': {
        'exp': {
            'label': '表达式',
            'type': 'string',
            'default': ''
        }
    },
    'exec': {
        'method': {
            'label': '方法',
            'type': 'string',
            'default': ''
        },
        'args': {
            'label': '参数列表',
            'type': 'array',
            'default': []
        }
    },
    'invoke': {
        'script': {
            'label': '脚本',
            'type': 'string',
            'default': ''
        },
        'args': {
            'label': '参数列表',
            'type': 'array',
            'default': []
        }
    },
    'loop': {
        'exp': {
            'label': '表达式',
            'type': 'string',
            'default': ''
        },
        'var': {
            'label': '循环变量名称',
            'type': 'string',
            'default': '$item'
        }
    }
}
export function getFlowTypes() {
    return types
}
