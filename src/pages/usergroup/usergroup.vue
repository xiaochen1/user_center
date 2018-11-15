<template>
  <div class="usergroup-container flex-column">
    <div class="usergroup-main flexauto flex-column">
      <div class="main-body flexauto flex-column">
        <div class="body-top">
          <div class="top-box flex-wrap flex-hcenter-lr">
            <div class="search-box ">
              <div class="search-input">
                <el-input v-model="searchInput" placeholder="关键词搜索(usergroup)"></el-input>
                <div class="searchbtn" @click="toSearch">
                  <span class="icon-search"></span>
                </div>
              </div>



            </div>
            <div class="operate">
              <el-button type="primary">添加</el-button>
            </div>
          </div>
        </div>

        <div class="body-container flexauto flex-column">
          <div class="body-content">
            <div class="body-list">
              <el-table :data="tableListArr" style="width: 100%" height="100%" @row-click="handleUserRowClick">

                <el-table-column prop="ID" label="用户ID">

                </el-table-column>
                <el-table-column prop="username" label="用户名称">

                </el-table-column>
                <el-table-column prop="ID" label="所属组">

                </el-table-column>
                <el-table-column prop="mobile" label="手机号码">

                </el-table-column>
                <el-table-column prop="address" label="地址">

                </el-table-column>
                <el-table-column prop="created" label="创建时间">

                </el-table-column>
                <el-table-column prop="ID" label="操作">
                  <template slot-scope="scope">
                    <div class="opbox">
                      <div class="op-item">
                        <span class="icon-delete"></span>
                      </div>
                    </div>
                  </template>
                </el-table-column>



              </el-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
  export default {
    data: function () {
      return {
        searchInput: "",

        tableListArr: [{
          ID: 1,
          username: "he",
          mobile: 12345678900,
          address: "美生创谷",
          created: "2018-11-15",



        }]
      }
    },


    methods: {
      toSearch() {
        console.log("search");
        console.log(this.searchInput);
      },

      handleUserRowClick(row) {
        console.log("row click");
        console.log(row);

        this.$router.push({
          path: "/usergroup/detail"
        });
      }
    },
  }
</script>



<style lang="scss" scoped>
  @import "@/assets/sass/usergroup/usergroup.scss";
</style>