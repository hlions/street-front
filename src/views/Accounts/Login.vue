<template>
<div >
    <Card class="login-group">
        <div style="text-align: center">
                <img src="../../assets/logo.png">
                <h3>A high quality UI Toolkit based on Vue.js</h3>
        </div>
        <Divider dashed />
        <Form style="width: 360px" ref="formInline" :model="formInline" :rules="ruleInline">
            <FormItem prop="username">
                <i-input type="text" v-model="formInline.username" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </i-input>
            </FormItem>
            <FormItem prop="password">
                <i-input type="password" v-model="formInline.password" placeholder="Password">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </i-input>
            </FormItem>
            <FormItem>
                <Button style="margin-left: 145px" type="primary" @click="handleSubmit('formInline')">Signin</Button>
            </FormItem>
        </Form>
    </Card>
</div>
</template>

<script>
    export default {
        data() {
            return {
                formInline: {
                    username: "",
                    password: ""
                },
                ruleInline: {
                    username: [
                        { required: true, message: "Please fill in the username", trigger: "blur" }
                    ],
                    password: [
                        { required: true, message: "Please fill in the password.", trigger: "blur" },
                        { type: "string", min: 6, message: "The password length cannot be less than 6 bits", trigger: "blur" }
                    ]
                }
            };
        },
        methods: {
            handleSubmit() {
                this.$requests({
                    url: "/accounts/token/",
                    method: "POST",
                    data: this.formInline
                }).then(response => {
                    this.$Message.success("登录成功");
                    const userToken = 'Bearer ' + response.data.data.token;
                    localStorage.setItem('token', userToken);
                    this.$router.push("/");
                }).catch(error => {
                    this.$Message.error("登录失败");
                    console.log(error);
                });
            }
        }
    };
</script>
<style scoped>
.login-group {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>
