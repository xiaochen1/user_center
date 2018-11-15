<template>
  <div class="left-menu">
    <div class="menu-container flex-column">
      <div class="system">
        <span>MIXPASSPORT</span> {{menuActiveIndex}}
      </div>
      <div class="menu-main flex-1 flex-column">

        <div class="main-body">
          <el-menu 
            background-color="#324157" 
            text-color="#999999" 
            active-text-color="#fff" 
            :default-active="menuActiveIndex" 
           >
            <!--             
            <el-submenu index="1" :class="{active: activeIndex == '1'}">
              <template slot="title">
                <i class="user-icon"></i>
                <span>用户</span>
              </template>

              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>

              </el-menu-item-group>
            </el-submenu> -->



            <el-menu-item index="/user" @click="goto('user')">
              <i class="icon-user"></i>
              <span slot="title">用户</span>
            </el-menu-item>


            <el-menu-item index="/usergroup" @click="goto('usergroup')">
              <i class="icon-usergroup"></i>
              <span slot="title">用户组</span>
            </el-menu-item>

            <el-menu-item index="/application" @click="goto('application')">
              <i class="icon-application"></i>
              <span slot="title">应用</span>
            </el-menu-item>

          </el-menu>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
  export default {

    data: function () {
      return {
        activeIndex: 1,
      }
    },

    created: function(){
      console.log(this.$route);
    },


    methods: {
      goto(name) {
        if(name == "user"){
          this.$router.push({path: "/user"});
          return ;
        }
        if(name == "usergroup"){
          this.$router.push({path: "/usergroup"});
          return ;

        } 

        if(name == "application"){
          this.$router.push({path: "/application"});

          return ;

        }
      }
    },

    computed: {
      menuActiveIndex: function(){
        if(this.$route.path == "/" || this.$route.path == "/user"){
          return "/user";
        }
        if(this.$route.path == "/usergroup"){
          return "/usergroup";
        }
        if(this.$route.path == "/application"){
          return "/application";
        }

        return "/"
      }
    },
  }

</script>

<style lang="scss" scoped>
  @import "@/assets/sass/components/leftMenu.scss";

</style>
