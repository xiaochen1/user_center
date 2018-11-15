<template>
  <div class="pagination-container">
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageIndex"
        :page-sizes="[20,50, 100, 200, 500]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>

</template>

<script>

  export default {
      data: function(){
          return {
              pageSize: 20
          }
      },
      methods: {
        handleSizeChange(size) {
            console.log(size);
            this.pageSize = size;
        },


        handleCurrentChange() {
            this.$emit("pageChange");
        }
      },
      props: ["pageIndex", "total"]
  }
</script>


<style lang="scss" scoped>
    @import "@/assets/sass/components/pagination.scss";
</style>
