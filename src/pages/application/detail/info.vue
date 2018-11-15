<template>
    <div class="info-container">
        <div class="info-main">
            <div class="info-item">
                <div class="item-title">用户ID</div>
                <div class="item-content">{{showSheetObj.user_id}}</div>
            </div>
            <div class="info-item">
                <div class="item-title">用户名称</div>
                <div class="item-content">{{showSheetObj.username}}</div>
            </div>
            <div class="info-item">
                <div class="item-title">所属部门</div>
                <div class="item-content">{{showSheetObj.user_id}}</div>
            </div>
            <div class="info-item">
                <div class="item-title">手机号码</div>
                <div class="item-content">{{showSheetObj.mobile}}</div>
            </div>
            <div class="info-item">
                <div class="item-title">联系号码</div>
                <div class="item-content">{{showSheetObj.phone }}</div>
            </div>
            <div class="info-item">
                <div class="item-title">性别</div>
                <div class="item-content">{{showSheetObj.sex}}</div>
            </div>
            <div class="info-item">
                <div class="item-title">职务</div>
                <div class="item-content">{{showSheetObj.user_id}}</div>
            </div>
            <div class="info-item item-row">
                <div class="item-title">地址</div>
                <div class="item-content">{{showSheetObj.address}}</div>
            </div>
            <div class="info-item">
                <div class="item-title">创建时间</div>
                <div class="item-content">{{showSheetObj.created}}</div>
            </div>

        </div>
    </div>
</template>


<script>
export default {
    data: function(){
        return {
            sheetList: [],
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
            addSheetObj: {},


        }
    }
}
</script>


<style lang="scss" scoped>
    @import "@/assets/sass/application/detail/info.scss";
</style>


