<template>
  <div class="login-page">
    <div class="c-content">
      <div class="login-box">
        <div class="header">
          <div class="switch-login">
            已注册可<span style="color:#f10180;cursor: pointer;" @click="() => { $router.push('/login') }">直接登录</span>
          </div>
          <h3 class="title">会员注册</h3>
        </div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-body">
          <el-form-item prop="phone">
            <el-input type="account" v-model="ruleForm.phone" autocomplete="off" placeholder="请输入手机号码">
              <el-button class="slot-icon" slot="prepend" icon="el-icon-mobile-phone"></el-button>
            </el-input>
          </el-form-item>
          <el-form-item prop="authCode">
            <el-input style="width: 63%;" v-model="ruleForm.authCode" autocomplete="off" placeholder="请输入验证码">
              <el-button class="slot-icon" slot="prepend" icon="el-icon-message"></el-button>
            </el-input>
            <el-button type="primary" @click="sendRes" class="codeBtn" >获取验证码</el-button>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="密码由8-20位字母，数字和符号组合">
              <el-button class="slot-icon" slot="prepend" icon="el-icon-lock"></el-button>
            </el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请再次输入上面的密码">
              <el-button class="slot-icon" slot="prepend" icon="el-icon-unlock"></el-button>
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
            style="width: 48%; background-color: #f10180; border-color: #f10180;">创建</el-button>
            <el-button @click="resetForm('ruleForm')" style="width: 48%;">重置</el-button>
          </el-form-item>
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
      } else if(value.length !== 11) {
        callback(new Error('请输入正确的手机号码'));
      } else {
        callback()
      }
    }
    const validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'));
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    }
    const validateCheckAgr = (rule, value, callback) => {
      if (!value) {
        callback(new Error('接受服务协议才能注册'));
      } else {
        callback();
      }
    }
    return {
      ruleForm: {
        phone: '',
        authCode: '',
        pass: '',
        checkPass: '',
        checkAgr: false,
      },
      rules: {
        phone: [
          { validator: validatephone, trigger: 'blur' }
        ],
        authCode: [
          { validator: validateCode, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        checkAgr: [
          { validator: validateCheckAgr, trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    async submitForm(formName) {
      let goSubmit = false
      this.$refs[formName].validate((valid) => {
        if (valid) {
          goSubmit = true;
        } else {
          this.$notify({
              title: '错误',
              message: '请正确完善表单中的每一项！',
              type: 'error'
          });
          return false;
        }
      })

      if (!goSubmit) return;

      try {
        const { phone, authCode, pass } = this.ruleForm
        await this.$store.dispatch('register', { phone, code: authCode, password: pass })
        this.$notify({
          title: '成功',
          message: '会员注册成功',
          type: 'success'
        });
        this.$router.push('/login')

      } catch(error) {
        this.$notify({
          title: '错误',
          message: error.message,
          type: 'error'
        });
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    async sendRes() {
      try {
        const { phone } = this.ruleForm
        if (phone === '' || phone.length !== 11) return
        await this.$store.dispatch('getCode', phone)
        this.ruleForm.authCode = this.$store.getters.authCode
      } catch(error) {
        this.$notify({
              title: '警告',
              message: error,
              type: 'warning'
          });
      }
    }
  },
  computed: {
  },
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

.switch-login {
  position: absolute;
  right: 30px;
  font-size: 14px;
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

.codeBtn {
  width: 35%;
  height: 46px;
  margin-left: 2%;
  padding: 6px 10px;
  font-size: 14px;
  color: #e00078 !important;
  background-color: #fcedf2 !important;
  border: 1px solid #ffbee0 !important;
  text-align: center;
  cursor: pointer;
  border-radius: 3px;
}

</style>