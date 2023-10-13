/**
 * @name SpyHandleMsg
 * @version v1.0.0
 * @author Aming
 * @origin 红灯区
 * @create_at 2033-10-27 11:12:09
 * @description 当触发的消息中没有 export线报时,触发的消息会经过此模块解析
 * @module true
 * @public false
 */


const request = require('util').promisify(require('request'));

module.exports = async msg => {
    /*
     当触发的消息中没有 export格式变量时,触发的消息会经过此模块解析
     因此,你可以在此模块中添加你对export以外的消息进行解析,返回一个export线报
    */
    const urlReg = /https:\/\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\*\+,%;\=]*/g;
    const codeReg = /[(|)|#|@|$|%|¥|￥|!|！][0-9a-zA-Z]{10,14}[(|)|#|@|$|%|¥|￥|!|！]/g;
    const urlArr = msg.match(urlReg)?.map(url => decodeURIComponent(url)) ?? [];
    const codeArr = msg.match(codeReg) ?? [];
    for (const [i, code] of codeArr.entries()) {
        const res = await nolanDecode(code);
        res ? (codeArr[i] = res) : codeArr.slice(i, 1);
    }
    let result = '';
    for (const link of [...urlArr, ...codeArr])
        urlToExport(link)?.forEach(e => (result += `export ${e.name}="${e.value}"\n`));
    /*
    如果该导出的函数返回值不是一个string或不是一个 export格式的线报时,该msg会被放弃
    如果该模块中的代码报错 将强制返回空字符串
    */
    return result ? `外部模块解析结果:\n${result}` : '';
};

/**
 * @Description 解析列表 取于白眼
 * 修改记录
 *   版本号[1.0.1] 修订日期[2023/4/13 9:57 AM]  修改内容 [增加多变量解析参数注释]
 *     {
 * 			keyword:"https://lzkj-isv.isvjcloud.com/app?a=xxxxx&b=xxxxxx",
 * 			trans:[
 * 				{
 * 					ori: "a b", // 当多变量的时候按顺序填写需要在链接中提取的参数
 * 					redi: "key",
 * 					sep:"&" // 连接符  结果  export key="a&b"
 * 				}
 * 		},
 *
 */
function ListS() {
    return [
        /******************M佬库********************** */
        {
            keyword: /(showTaskDraw|showDrawOne|/lzclient/|/wxDrawActivity/|^(?=.*gzsl-isv)(?=.*game).*$)/,
            name: 'M幸运抽奖',
            trans: [
                {
                    ori: '-1',
                    redi: 'M_WX_LUCK_DRAW_URL',
                },
            ],
        },
        {
            keyword: /(activityType=(10020|10021|10026|10031|10042|10046|10063|10073|10080))/,
            name: 'M幸运抽奖',
            trans: [
                {
                    ori: '-1',
                    redi: 'M_WX_LUCK_DRAW_URL',
                },
            ],
        },
        {
            keyword: /(pointDraw|luckyGrid|turntable)/,
            name: 'M幸运抽奖',
            trans: [
                {
                    ori: '-1',
                    redi: 'M_WX_LUCK_DRAW_URL',
                },
            ],
        },
        {
            keyword: /(/wxCollectionActivity/|activityType=(10024))/,
            name: 'M佬加购有礼',
            trans: [
                {
                    ori: '-1',
                    redi: 'M_WX_ADD_CART_URL=\"%s\',
                },
            ],
        },
        {
            keyword: /(plusGift|extraGift)/,
            name: 'M佬加购有礼',
            trans: [
                {
                    ori: '-1',
                    redi: 'M_WX_ADD_CART_URL=\"%s\',
                },
            ],
        },
        {
            keyword: /(showCart)/,
            name: 'M佬加购有礼',
            trans: [
                {
                    ori: '-1',
                    redi: 'M_WX_ADD_CART_URL=\"%s\',
                },
            ],
        },
        {
            keyword: /(/wxTeam/|activityType=(10033)|showPartition|partitionTeam)/,
            name: 'M佬组队瓜分',
            trans: [
                {
                    ori: '-1',
                    redi: 'M_WX_LUCK_DRAW_URL',
                },
            ],
        },
        {
            keyword: /(/wxShareActivity/|/shareGift/|activityType=(10043|10068))/,
            name: 'M佬分享有礼',
            trans: [
                {
                    ori: '-1',
                    redi: 'M_WX_LUCK_DRAW_URL',
                },
            ],
        },
        {
            keyword: /(activityType=(10068))/,
            name: 'M佬分享有礼',
            trans: [
                {
                    ori: '-1',
                    redi: 'M_WX_LUCK_DRAW_URL',
                },
            ],
        },
        {
            keyword: /(/completeInfoActivity/|activityType=(10049))/,
            name: 'M佬完善信息',
            trans: [
                {
                    ori: '-1',
                    redi: 'M_WX_LUCK_DRAW_URL',
                },
            ],
        },
        {
            keyword: /(showPerfectInformation)/,
            name: 'M佬完善信息',
            trans: [
                {
                    ori: '-1',
                    redi: 'M_WX_LUCK_DRAW_URL',
                },
            ],
        },
        {
            keyword: /wxFansInterActionActivity/,
            name: 'M佬粉丝互动',
            trans: [
                {
                    ori: '-1',
                    redi: 'M_WX_FANS_DRAW_URL=\"%s\',
                },
            ],
        },
        ];
}

/* 诺兰口令解析接口 */
async function nolanDecode(code) {
    try {
        const dbUrl = await new BncrDB('AmingScript').get('deCodeHost', 'https://api.nolanstore.cc');
        return (
            await request({
                url: `${dbUrl}/JComExchange`,
                method: 'post',
                body: {
                    code,
                },
                json: true,
            })
        )?.body?.data?.jumpUrl;
    } catch (e) {
        console.log('nolanDecode ' + e);
        return void 0;
    }
}
/* 解析函数 ,改于白眼 */
function urlToExport(url) {
    // console.log('urlToExport', url);
    let ResArr = [];
    const listS = ListS();
    for (const oneList of listS) {
        if (!url.match(oneList.keyword)) continue;
        for (const r of oneList.trans) {
            let temp = {
                act: oneList.name,
                name: r.redi,
            };
            if (+r.ori === -1) {
                temp['value'] = encodeURI(url);
            } else if (r.ori.indexOf(' ') !== -1) {
                //提取多参数作为变量值
                let pn = r.ori.split(' ');
                let pv = [];
                pn.forEach(ele => {
                    console.log(ele);
                    if (!ele) return;
                    let reg = new RegExp('(?<=' + ele + '(=|%3D))[^&%]+'),
                        actid = url.match(reg);
                    if (actid) pv.push(actid[0]);
                    else console.log(url + '\n中未找到活动参数:' + ele);
                });
                if (!pv.length) break;
                if (r.sep) temp['value'] = pv.join(r.sep);
                else console.log('内置解析规则' + JSON.stringify(oneList) + '缺少分割符');
            } else {
                // 提取参数作为变量
                let reg = new RegExp(`(?<=${r.ori}(=|%3D))[^&%]+`),
                    actid = url.match(reg);
                if (!actid) break;
                temp['value'] = actid[0];
            }
            temp['value'] && ResArr.push(temp);
        }
    }
    return ResArr;
}