<template>
    <div class="footer-box">
        <div class="main">
            <div class="vip">
                <img src="@/assets/img/vip权力.png"/>
            </div>
            <div class="list">
                <div class="link-anim" v-for="item in listInfo">
                    <div class="link-title">{{item.title}}</div>
                    <ul>
                        <li v-for="v in item.infoList">{{v}}</li>
                    </ul>
                </div>
                <div class="erweima link-anim">
                    <span>唯品会APP二维码</span>
                    <img src="@/assets/img/二维码.jpg" />
                    <span>下载唯品会移动APP</span>
                </div>
            </div>
            <div class="about">
                <p>
                    <span v-for="(item, index) in aboutList" class="about-item">{{item}} <span v-if="index !== 11" style="margin-left: 3px">|</span></span>
                </p>
            </div>
            <div class="info">
                <p>Copyright © 2008-现在 vip.com，All Rights Reserved  使用本网站即表示接受 唯品会用户协议。版权所有 广州唯品会电子商务有限公司</p>
                <p>粤公网安备 44010302111111号    粤ICP备08114786号 增值业务经营许可证：粤B2-20170777 网络文化经营许可证：粤网文〔2021〕2056-282号</p>
                <p>经营主体证照   风险监测信息   互联网药品信息服务资格证书：（粤）-经营性-2018-0271 网络食品交易第三方平台备案凭证：粤B2-20170777 医疗器械网络交易服务第三方平台备案</p>
                <p>凭证：（粤）网械平台备字[2019]第00001号 出版物网络交易平台服务经营备案证：粤新出网备（2021）1号  未成年人关怀专区</p>
                <p>违法和不良信息举报电话：4006789888 算法推荐违规举报电话：4006789888</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            listInfo: [
                {
                    title: '服务保障',
                    infoList: ['正品保证', '7天无理由放心退','7x15小时客户服务','7天无理由随心换']
                },{
                    title: '购物指南',
                    infoList: ['导购演示', '订单操作','会员注册','账户管理', '收货样品', '会员等级']
                },{
                    title: '支付方式',
                    infoList: ['23家主流网银支付', '支付宝、银联等支付','信用卡支付','零钱支付']
                },{
                    title: '配送方式',
                    infoList: ['配送范围及运费', '验货与签收']
                },{
                    title: '售后服务',
                    infoList: ['退货政策', '退货流程','退款方式和时效','换货服务']
                }
            ],
            aboutList: ['关于我们', 'About us', 'Investor Relations', '媒体报道', '品牌招商', '平台规则',
                        '隐私条款', '服务条款', '唯品诚聘', '唯品卡', '联系我们', '廉正举报'
            ],
        }
    }
}
</script>

<style scoped>
p {
    margin: 0;
    padding: 0;
}
.footer-box {
    width: 100%;
    box-shadow: 0 1px 3px rgb(167 167 167 / 40%);
    background-color: #fcfcfc;
}

.vip {
    width: 100%;
    padding-top: 35px;
    display: flex;
    justify-content: center;
}

.link-anim {
    width: 162px;
    height: 146px;
    padding-left: 15px;
    border-right: 1px solid #e0e0e0;
}

.list {
    padding: 50px 40px;
    display: flex;
}

.link-title {
    font-size: 13px;
    color: #4d4d4d;
}

.list ul {
    margin: 0;
    margin-top: 5px;
    padding-left: 17px;
    font-size: 12px;
    color: #808080;
}

.list ul li {
    padding: 2px 0px;
    transition: transform 500ms ease;
    cursor: pointer;
}

.list ul li:hover {
    color: #f10180;
    transform: translateX(4px);
}

.erweima {
    border: 0;
    position: relative;
    margin: 0 auto;
    padding: 0;
}

.erweima span {
    width: 136px;
    display: inline-block;
    font-size: 12px;
    margin: 2px 0;
    text-align: center;
}

.erweima img {
    width: 100px;
    margin-left: 17px;
}

.about {
    display: flex;
    justify-content: center;
    height: 30px;
    background-color: #d7237e;
}
p {
    margin: 0;
    padding: 0;

}
.about .about-item {
    color: #ffff;
    font-size: 12px;
    line-height: 30px;
    text-align: center;
    padding: 0 4px;
    cursor: pointer;
}

.about span:hover {
    color: gainsboro;
}

.info {
    padding: 10px;
    display: flex;
    flex-direction: column;
}

.info p {
    font-size: 12px;
    text-align: center;
    margin-top: 2px;
    color: #999;
    line-height: 19px;
}

</style>