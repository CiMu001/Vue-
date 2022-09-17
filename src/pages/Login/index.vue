<template>
  <div class="login-page">
    <div class="c-content">
      <div class="login-box">
        <div class="header">
          <h3 class="title">会员登录</h3>
        </div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-body">
          <el-form-item prop="phone">
            <el-input type="account" class="item" v-model="ruleForm.phone" autocomplete="off" placeholder="请输入手机号码">
              <el-button class="slot-icon" slot="prepend" icon="el-icon-mobile-phone"></el-button>
            </el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input class="item" type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码">
              <el-button class="slot-icon" slot="prepend" icon="el-icon-lock"></el-button>
            </el-input>
          </el-form-item>
          <el-form-item prop="checkAgr">
            <el-checkbox v-model="ruleForm.checkAgr">
              <div class="agr-text">
                我已阅读并接受以下条款：<a>《品会服务条款》</a><a>《品会隐私政策》</a><a>《品支付用户服务协议》</a>
              </div>
            </el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" 
            style="width: 100%; background-color: #f10180; border-color: #f10180;">登录</el-button>
          </el-form-item>
          <div class="reg-box">
            <span @click="()=> { $router.push('/register') }">立即注册</span>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const validatephone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号码'));
      } else if(value.length < 11) {
        callback(new Error('请输入正确的手机号码'));
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    }
    const validateCheckAgr = (rule, value, callback) => {
      if (!value) {
        callback(new Error('接受服务协议才能登录'));
      } else {
        callback();
      }
    }
    return {
      ruleForm: {
        phone: '',
        pass: '',
        checkAgr: false,
      },
      rules: {
        phone: [
          { validator: validatephone, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkAgr: [
          { validator: validateCheckAgr, trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    async submitForm(formName) {
      let isValid = false
      this.$refs[formName].validate((valid) => {
        if (valid) {
          isValid = true
        } else {
          console.log('error submit!!');
          return false;
        }
      });

      console.log(isValid)
      if (!isValid) return
      try {
        const { phone, pass } = this.ruleForm
        await this.$store.dispatch('login', { phone, password: pass })
        this.$notify({
          title: '成功',
          message: '登录成功',
          type: 'success'
        });
        this.$router.push('/home')
      } catch(error) {
        this.$notify({
          title: '错误',
          message: error.message,
          type: 'error'
        });
      }
    },
  }
}
</script>

<style>
  .login-page {
  background: url('@/assets/img/登录注册背景.jpg');
  height: 650px;
  width: 100%;
  min-width: 1170px;
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
}

.c-content {
  position: relative;
  margin-right: auto;
  margin-left: auto;
  padding: 50px 20px;
  min-height: 550px;
  width: 1000px;
}

.login-box {
  box-sizing: border-box;
  position: absolute;
  right: 0;
  width: 360px;
  border-radius: 2px;
  background-color: #fff;
}

.login-box .header {
  position: relative;
  padding-right: 30px;
  padding-left: 30px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #e0e0e0;
}

.login-box .header .title {
  font-size: 18px;
  color: #666;
  margin: 0;
}

.login-box .login-body {
  padding: 30px;
}

.slot-icon{
  width: 30px;
  padding: 12px;
}

.el-input__inner {
  height: 46px;
  line-height: 46px;
  padding: 6px 10px;
}

.agr-text {
  vertical-align: middle;
  font-size: 12px;
  display: inline-block;
  width: 276px;
  line-height: 1.5;
  white-space: pre-line;
  margin-top: 10px;
}

.agr-text a {
  color: #1d94d1;
}

.reg-box {
  display: flex;
  justify-content: end;
  font-size: 14px;
}

.reg-box span:hover {
  color: #e00078;
  cursor: pointer;
}

</style>