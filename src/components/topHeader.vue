<template>
  <div class="top-header">
    <div class="top-container">
      <div class="top-main">
        <div class="top-content">
          <div class="top-box fl">
            <div class="home"  @click="goHome">
              <span class="icon-home"></span>
            </div>
          </div>

          <div class="tool-box fr">
            <div class="user-box clearfix">
              <div class="info user-avatar">
                <span class=" avatar icon-userAvatar"></span>
              </div>
              <div class="info username">
                <span>Admin</span>
                <span class="tog icon-toggle"></span>
              </div>

              <div class="relative">
                <div class="rel-box">
                  <div class="item">
                    <div class="account-info" @click="toShowAccountInfoView">
                      <span class="rel-icon icon-account"></span>
                      <span>账户信息</span>
                    </div>
                  </div>
                  <div class="item">
                    <div class="version-info" @click="toShowVersionInfoView">
                      <span class="rel-icon icon-version"></span>
                      <span>版本信息</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <el-dialog :visible.sync="isShowAccuntInfoView" width="50%">
      <div class="dialog-top" slot="title">账户信息</div>
      <div class="account-main">
        <div class="main-body">
          <div class="body-head">
            <div class="account-avatar">
              <span class="icon-user-avatar-lg"></span>
            </div>
            <div class="base-info">
              <div class="info-item">
                <div class="item">
                  <div class="label">登录账号：</div>
                  <div class="value">admin</div>
                </div>
                <div class="item">
                  <div class="label">手机号码：</div>
                  <div class="value">12345678900</div>
                </div>
              </div>

              <div class="info-item">
                <div class="item">
                  <div class="label">登录角色：</div>
                  <div class="value">超级管理员</div>
                </div>
                <div class="item">
                  <div class="label">邮箱：</div>
                  <div class="value">admin</div>
                </div>
              </div>

              <div class="info-item">
                <div class="item">
                  <div class="label">注册时间：</div>
                  <div class="value">2018-11-14 09:00:00</div>
                </div>
              </div>
            </div>
          </div>

          <div class="split"></div>
          <div class="body-box">

            <div class="info-item">
              <div class="item">
                <div class="label">地址</div>
                <div class="value">
                  <el-input placeholder="请输入用户地址"></el-input>
                </div>
              </div>


            </div>


            <div class="info-item">
              <div class="item">
                <div class="label">描述</div>
                <div class="value">
                  <el-input type="textarea" placeholder="请输入描述内容" :autosize="{ minRows: 4, maxRows: 8}"></el-input>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      <div slot="footer" class="dialog-footer">
          <div class="operate">
              <el-button type="success">确定</el-button>
              <el-button type="danger">取消</el-button>
          </div>
      </div>
    </el-dialog>

    <el-dialog :visible.sync="isShowVersionInfoView" width="50%">
      <div class="dialog-top" slot="title">版本信息</div>
      <div class="version-box">
        <div class="box-item">
          <div class="current-version">
            当前版本信息： <span class="version">V0.2.4</span>
          </div>
        </div>

        <div class="split"></div>

        <div class="box-item">
          <div class="rel-icon">
            <span class="icon-warning"></span>
          </div>
          <div class="text protect">
            本计算机程序受版权法及国际公约的保护， 未经授权擅自赋值或者散布本程序的部分或者全部，将承受严厉的民事和刑事处罚， 对已知的违反者将给予法律范围内的全面制裁
          </div>
        </div>
        <div class="box-item">
          <div class="rel-icon">
            <span class="icon-copyright"></span>
          </div>
          <div class="text copyright">
            CopyRight 2018-2021 深圳市智物联网络有限公司
          </div>
        </div>
      </div>
    </el-dialog>

  </div>
</template>


<script>
  export default {
    data: function () {
      return {
        isShowAccuntInfoView: false,
        isShowVersionInfoView: false,
      }
    },


    methods: {
      goHome(){
        console.log(this.$route);
        this.$router.push({path: "/"});
      },
      toShowAccountInfoView() {
        this.isShowAccuntInfoView = true;
      },
      toShowVersionInfoView() {
        this.isShowVersionInfoView = true;
      },
    },
  }

</script>

<style lang="scss" scoped>
  @import "@/assets/sass/components/topHeader.scss";
  @import "@/assets/sass/icon.scss";

</style>
