<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <label style="font-weight: bolder;font-size: 40px;">
          SQL解密
        </label>
      </el-header>
      <el-main>
        <el-row :gutter="10">
          <el-col span="8">
            <el-row slot="label" style="font-weight: bold">
              密文：
            </el-row>
            <el-input v-model="form.ciphertext" type="textarea" rows="20" style="width: 450px;">
            </el-input>
          </el-col>
          <el-col span="8">
            <el-row>
              <el-button style="margin-top: 180px;" type="primary" @click="decryptSqlEvent">
                解密
                <el-icon>
                  <DArrowRight/>
                </el-icon>
              </el-button>
            </el-row>

            <el-button style="margin-top: 10px;" type="warning" @click="resetEvent">
              重置
              <el-icon>
                <RefreshRight/>
              </el-icon>
            </el-button>
          </el-col>
          <el-col span="8">
            <el-row slot="label" style="font-weight: bold">
              明文：
            </el-row>
            <el-input v-model="form.cleartext" type="textarea" rows="20" style="width: 450px;">
            </el-input>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      form: {
        ciphertext: "",
        cleartext: "",
      }
    }
  },
  methods: {
    isEmpty(data) {
      return data === undefined || data === null || data === '' || (typeof data === 'object' && Object.keys(data).length === 0);
    },
    resetEvent() {
      this.form.ciphertext = "";
      this.form.cleartext = "";
    },
    decryptSqlEvent() {
      const context = this;
      let param = {
        sql: context.form.ciphertext
      }
      if (context.isEmpty(context.form.ciphertext)){
        context.$message({
          type: "warning",
          message: "请输入密文"
        })
        return;
      }
      context.$ajax.post("/api-camoch/JMSql", param).then(response => {
        if (response.data.status == '1') {
          context.form.cleartext = response.data.data;
        } else {
          context.$message({
            type: "error",
            message: response.data.msg
          });
        }
      });
    }
  }
}
</script>

<style scoped>

</style>