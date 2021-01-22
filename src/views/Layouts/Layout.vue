<style scoped>
.layout{
    border: 0px solid #2d8cf0;
    background: #2d8cf0;
    position: relative;
    border-radius: 0px;
    overflow: hidden;
    height: auto;
}
.layout-logo{
    width: 100px;
    height: 40px;
    background: #17233d;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 10px;
    left: 0px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 1px;
}
.layout-footer-center{
    text-align: center;
    bottom: 0px;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                        <h2 style="text-align: center">StreetOps</h2>
                    </div>
                    <div style="float: right">
                        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                    </div>
                </Menu>
            </Header>
            <Layout>
                <SideBar />
                <Layout :style="{padding: '0 20px 20px'}">
                    <Divider />
                    <Content :style="{padding: '20px', minHeight: '580px', background: '#fff'}">
                        <router-link />
                    </Content>
                    <Footer class="layout-footer-center">2021 &copy; Street Ops Platform</Footer>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    import sidebar from "./Sidebar.vue";
    export default {
        data(){
            return {

            }
        },
        components: {
            sidebar
        }
    }
</script>
