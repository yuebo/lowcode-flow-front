<template>
    <div>
        <div class="ef-node-form">
            <div class="ef-node-form-header">
                编辑
            </div>
            <div class="ef-node-form-body">
                <el-form :model="node" ref="dataForm" label-width="80px" v-show="type === 'node'">
                    <el-form-item label="类型">
                        <el-input v-model="node.type" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="名称">
                        <el-input v-model="node.name"></el-input>
                    </el-form-item>
                    <!--<el-form-item label="left坐标">-->
                        <!--<el-input v-model="node.left" :disabled="true"></el-input>-->
                    <!--</el-form-item>-->
                    <!--<el-form-item label="top坐标">-->
                        <!--<el-input v-model="node.top" :disabled="true"></el-input>-->
                    <!--</el-form-item>-->
                    <template v-for="(item,i) in typesDefs[node.type]">
                      <el-form-item :label="item.label">
                        <template v-if="item.type === 'string'">
                          <el-input v-model="node[i]" :placeholder="item.placeholder"></el-input>
                        </template>
                        <template v-else-if="item.type === 'array'">
                          <div v-for="(row,j) in node[i]">
                            <el-input v-model="node[i][j]" :placeholder="item.placeholder"></el-input>
                            <i class="el-icon-remove-outline el-node-state-running" @click="removeChild(node[i],j)"></i>
                          </div>
                          <div>
                            <i class="el-icon-circle-plus-outline el-node-state-running" @click="addChild(node[i],j)"></i>
                          </div>
                        </template>
                      </el-form-item>
                    </template>
                    <!--<el-form-item label="ico图标">-->
                        <!--<el-input v-model="node.ico"></el-input>-->
                    <!--</el-form-item>-->
                    <!--<el-form-item label="状态">-->
                        <!--<el-select v-model="node.state" placeholder="请选择">-->
                            <!--<el-option-->
                                    <!--v-for="item in stateList"-->
                                    <!--:key="item.state"-->
                                    <!--:label="item.label"-->
                                    <!--:value="item.state">-->
                            <!--</el-option>-->
                        <!--</el-select>-->
                    <!--</el-form-item>-->
                    <el-form-item>
                        <el-button icon="el-icon-close">重置</el-button>
                        <el-button type="primary" icon="el-icon-check" @click="save">保存</el-button>
                    </el-form-item>
                </el-form>

                <el-form :model="line" ref="dataForm" label-width="80px" v-show="type === 'line'">
                    <el-form-item label="条件">
                        <el-input v-model="line.label"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button icon="el-icon-close">重置</el-button>
                        <el-button type="primary" icon="el-icon-check" @click="saveLine">保存</el-button>
                    </el-form-item>
                </el-form>

              <el-form :model="line" ref="dataForm" label-width="80px" v-show="type === 'container'">
                <el-form-item label="Id">
                  <el-input v-model="container.id" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="流程名称">
                  <el-input v-model="container.name"></el-input>
                </el-form-item>
                <el-form-item label="请求路径">
                  <el-input v-model="container.path"></el-input>
                </el-form-item>
                <el-form-item label="起始节点">
                  <el-select v-model="container.start" placeholder="请选择">
                      <el-option
                      v-for="item in containerNodes"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id">
                      </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button icon="el-icon-close">重置</el-button>
                  <el-button type="primary" icon="el-icon-check" @click="saveContainer">保存</el-button>
                </el-form-item>
              </el-form>
            </div>
            <!--            <div class="el-node-form-tag"></div>-->
        </div>
    </div>

</template>

<script>
    import { cloneDeep } from 'lodash'
    import { getFlowTypes } from './types'

    export default {
        data() {
            return {
                visible: true,
                // node 或 line
                type: 'none',
                typesDefs: getFlowTypes(),
                node: {},
                line: {},
                data: {},
                container: {
                    'name': '',
                    'start': '',
                    'path': ''
                },
                stateList: [{
                    state: 'success',
                    label: '成功'
                }, {
                    state: 'warning',
                    label: '警告'
                }, {
                    state: 'error',
                    label: '错误'
                }, {
                    state: 'running',
                    label: '运行中'
                }]
            }
        },
        computed: {
            containerNodes (){
                return this.container.nodeList
            }
        },
        methods: {
            /**
             * 表单修改，这里可以根据传入的ID进行业务信息获取
             * @param data
             * @param id
             */
            nodeInit(data, id) {
                this.type = 'node'
                this.data = data
                data.nodeList.filter((node) => {
                    if (node.id === id) {
                        this.node = cloneDeep(node)
                    }
                })
            },
            lineInit(line) {
                this.type = 'line'
                this.line = line
            },
            containerInit(container) {
                this.type = 'container'
                this.container = cloneDeep(container)
            },
            // 修改连线
            saveLine() {
                this.$emit('setLineLabel', this.line.from, this.line.to, this.line.label)
            },
            // 修改连线
            saveContainer() {
                this.$emit('setContainerValues', this.container, ['name','start', 'path'])
            },
            save() {
                this.data.nodeList.filter((node) => {
                    if (node.id === this.node.id) {
                        for (var i in this.node){
                            node[i] = this.node[i]
                        }
                        this.$emit('repaintEverything')
                    }
                })
            },
            removeChild(array,index) {
                array.splice(index, 1)
            },
            addChild(array,index) {
                array.push('')
            }
        }
    }
</script>

<style>
    .el-node-form-tag {
        position: absolute;
        top: 50%;
        margin-left: -15px;
        height: 40px;
        width: 15px;
        background-color: #fbfbfb;
        border: 1px solid rgb(220, 227, 232);
        border-right: none;
        z-index: 0;
    }
</style>
