<template>
    <div class="detail-container flexauto flex-column">
        <div class="detail-main flexauto flex-column">
            <div class="main-body flexauto flex-column">
                <div class="body-top">
                    <div class="top-box fl">
                        <div class="tabs-nav clearfix">
                            <div class="nav-item" :class="{active: acindex == index}" v-for="(item, index) in tabArr" @click="toggleTab(index, item.comp)" >
                                <div class="nav-title">{{item.name}}</div>
                                <div class="navhidden"></div>
                            </div>
                           
                        </div>
                    </div>

                    <div class="top-box fr">


                        <div class="operate" v-show="currentcomp == 'info'">
                            <div class="ope-item">
                                <el-button  type="warning">重置密码</el-button>
                            </div>

                            <div class="ope-item">
                                <el-button  type="success">编辑</el-button>
                            </div>

                            <div class="ope-item">
                                <el-button  type="danger">删除</el-button>
                            </div>
                        </div>

                        <div class="operate"  v-show="currentcomp == 'belonggroup'">
                            <div class="ope-item">
                                <el-button  type="success">添加</el-button>
                            </div>

                        </div>

                        <div class="operate"  v-show="currentcomp == 'accessapp'">
                            <div class="ope-item">
                                <el-button  type="success">添加</el-button>
                            </div>

                        </div>


                        <div class="operate"  v-show="currentcomp == 'devicelist'">
                            <div class="ope-item">
                                <el-button  type="success">添加</el-button>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="body-container flexauto flex-column">
                    <div class="body-content flexauto flex-column">
                        <component :is="currentcomp" :userId="userId"></component>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
</template>

<script>

import info from "./detail/info";
import belonggroup from "./detail/belonggroup";
import devicelist from "./detail/devicelist";
import accessapp from "./detail/accessapp";
export default {


    data: function(){
        return {
            userId: "",
            currentcomp: "info",
            tabArr: [{
                name: "信息",
                comp: "info"
            },{
                name: "所属组",
                comp: "belonggroup"
            },{
                name: "可访问应用",
                comp: "accessapp"
            },{
                name: "设备列表",
                comp: "devicelist"
            }],

            acindex: 0,
        }
    },
    mounted: function(){
        console.log(this.$route.params);
        this.userId = this.$route.query ? this.$route.query.id : "";
    },

    methods: {
        toggleTab(index, name) {
            this.acindex = index;
            this.currentcomp = name;
        }
    },

    components: {
        "info": info,
        "belonggroup": belonggroup,
        "devicelist": devicelist,
        "accessapp": accessapp,
    },



}
</script>


<style lang="scss" scoped>
    @import "@/assets/sass/user/detail.scss"
</style>



