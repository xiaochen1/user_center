<template>
  <div class="access-container flexauto flex-column">
    <div class="access-main flexauto flex-column">
      <div class="data-list flexauto">
        <el-table :data="sheetList" border style="width: 100%" height="100%">
          <el-table-column fixed prop="client_id" label="应用ID" width="180">

          </el-table-column>
          <el-table-column prop="client_name" label="应用名称">
          </el-table-column>
          <el-table-column prop="listorder" label="排序">
          </el-table-column>
          <el-table-column prop="is_sso" label="是否单点登录">
          </el-table-column>

          <el-table-column prop="is_available" label="是否有效">
          </el-table-column>

          <el-table-column fixed="right" label="操作" width="120">
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

      <div class="page-box">
        <pagination @pageChange="handlePageChange" :pageIndex="mypagination.page_index" :total="mypagination.total"></pagination>

      </div>
    </div>
  </div>
</template>



<script>
  import pagination from "@/components/pagination"
  export default {
    data: function () {
      return {
        mypagination: {
          page_size: 20,
          page_index: 1,
          total: 0
        },
        sheetList: [{
          user_id: "1001",
          username: "supervisor"
        }, {
          user_id: "1001",
          username: "supervisor"
        }, {
          user_id: "1001",
          username: "supervisor"
        }, {
          user_id: "1001",
          username: "supervisor"
        }, {
          user_id: "1001",
          username: "supervisor"
        }, {
          user_id: "1001",
          username: "supervisor"
        }, {
          user_id: "1001",
          username: "supervisor"
        }, {
          user_id: "1001",
          username: "supervisor"
        }, {
          user_id: "1001",
          username: "supervisor"
        }, {
          user_id: "1001",
          username: "supervisor"
        }, {
          user_id: "1001",
          username: "supervisor"
        }, {
          user_id: "1001",
          username: "supervisor"
        }, {
          user_id: "1001",
          username: "supervisor"
        }, ],
        showSheetObj: {
          user_id: "1001",
          username: "admin",
          mobile: "12345678900",
          description: "描述啊",
          email: "123@qq.com",
          address: "美生创谷美生创谷美生创谷美生创谷美生创谷美生创谷美生创谷美生创谷美生创谷",
          created: "2018-11-15"
        },

        editSheetObj: {},
        addSheetObj: {}
      };
    },


    methods: {
      handleClickDelete(row) {
        console.log(row);
      },


      handlePageChange(val) {
        this.mypagination.page_index = val,
          this.mypagination.total = 8790;

        console.log("page----change");
      }
    },


    components: {
      "pagination": pagination
    },

    props: ["userId"],
  };
</script>




<style lang="scss" scoped>
  @import "@/assets/sass/user/detail/accessapp.scss";
  </style>