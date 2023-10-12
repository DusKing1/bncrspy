// By柒月编辑适配M-EVE库 //
const RspyList = {
    /* 监控信息配置 */
    SpyList: [
        {
            Name: 'M佬关注有礼',
            Script: 'walle1798_EVE/m_jd_follow_shop.js',
            ListenEnv: [
                'M_FOLLOW_SHOP_ARGV',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M佬签到有礼',
            Script: 'walle1798_EVE/m_jd_wx_shopSign.js',
            ListenEnv: [
                'M_WX_SHOP_SIGN_URL',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M佬分享福袋',
            Script: 'walle1798_EVE/m_jd_wx_unPackDraw.js',
            ListenEnv: [
                'M_WX_UNPACK_DRAW_URL',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M佬投票抽奖',
            Script: 'walle1798_EVE/m_jd_wx_voteDraw.js',
            ListenEnv: [
                'M_WX_VOTE_DRAW_URL',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M佬组队瓜分',
            Script: 'walle1798_EVE/m_jd_wx_team.js',
            ListenEnv: [
                'M_WX_TEAM_URL',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M佬邀请有礼JINGGENG',
            Script: 'walle1798_EVE/m_jd_wx_showInviteJoin.js',
            ListenEnv: [
                'M_JINGGENG_INVITE_URL',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M佬邀请有礼INTERACT',
            Script: 'walle1798_EVE/m_jd_interact_invite.js',
            ListenEnv: [
                'M_INTERACT_INVITE_URL',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            D
        {
            Name: 'M佬无线关注',
            Script: 'walle1798_EVE/m_jd_wx_shopGift.js',
            ListenEnv: [
                'M_WX_SHOP_GIFT_URL',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M佬分享有礼',
            Script: 'walle1798_EVE/m_jd_wx_share.js',
            ListenEnv: [
                'M_WX_SHARE_URL',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M佬读秒手速',
            Script: 'walle1798_EVE/m_jd_wx_secondDraw.js',
            ListenEnv: [
                'M_WX_SECOND_DRAW_URL',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M佬积分兑换',
            Script: 'walle1798_EVE/m_jd_wx_pointDraw.js',
            ListenEnv: [
                'M_WX_POINT_DRAW_URL',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M佬通用开卡',
            Script: 'walle1798_EVE/m_jdm_jd_wx_opencard_m.js',
            ListenEnv: [
                'M_WX_OPENCARD_M_URL',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M佬幸运抽奖',
            Script: 'walle1798_EVE/m_jd_wx_luckDraw.js',
            ListenEnv: [
                'M_WX_LUCK_DRAW_URL',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M佬等级/生日礼包',
            Script: 'walle1798_EVE/m_jd_wx_levelBirth.js',
            ListenEnv: [
                'M_WX_LEVEL_BIRTH_URL',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M佬知识超人',
            Script: 'walle1798_EVE/m_jd_wx_knowledge.js',
            ListenEnv: [
                'M_WX_KNOWLEDGE_URL',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M佬无线游戏',
            Script: 'walle1798_EVE/m_jd_wx_game.js',
            ListenEnv: [
                'M_WX_GAME_URL',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M佬关注抽奖',
            Script: 'walle1798_EVE/m_jd_wx_followDraw.js',
            ListenEnv: [
                'M_WX_FOLLOW_DRAW_URL',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M佬粉丝互动',
            Script: 'walle1798_EVE/m_jd_wx_fansDraw.js',
            ListenEnv: [
                'M_WX_FANS_DRAW_URL',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M佬打豆豆',
            Script: 'walle1798_EVE/m_jd_wx_dadoudou.js',
            ListenEnv: [
                'M_WX_DADOUDOU_URL',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M佬完善有礼',
            Script: 'walle1798_EVE/m_jd_wx_completeDraw.js',
            ListenEnv: [
                'M_WX_COMPLETE_DRAW_URL',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M佬老虎机抽奖',
            Script: 'walle1798_EVE/m_jd_wx_centerDraw.js',
            ListenEnv: [
                'M_WX_CENTER_DRAW_URL',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M佬购物车锦鲤',
            Script: 'walle1798_EVE/m_jd_wx_cartKoi.js',
            ListenEnv: [
                'M_WX_CARTKOI_URL',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M佬加购有礼',
            Script: 'walle1798_EVE/m_jd_wx_addCart.js',
            ListenEnv: [
                'M_WX_ADD_CART_URL',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M佬店铺刮奖',
            Script: 'walle1798_EVE/m_jd_shop_gyg.js',
            ListenEnv: [
                'M_GYG_SHOP_ARGV',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M佬入会有礼',
            Script: 'walle1798_EVE/m_jd_open_card.js',
            ListenEnv: [
                'M_OPEN_CARD_ARGV',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M佬收藏有礼',
            Script: 'walle1798_EVE/m_jd_fav_shop_gift.js',
            ListenEnv: [
                'M_FAV_SHOP_ARGV',
            ],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        ],
    /* 监控列表 */
    ListenList: [
        {
            Name: '备注1',
            Id: '-1001744932665',
        },
        {
            Name: '备注2',
            Id: '-1001776658413',
        }
    ],
    /* 设置 管理员发送https的Url解析模式,  ''或者直接删除这一行为自动解析，spyjx:'j', 则发url链接时需要以j开头才会解析*/
    spyjx:'',
    //非静默触发消息多少秒撤回 0不撤回
    delMsgWaitTime: 10,
    //静默功能  默认false,会在监听到消息的地方回复监听结果 true则推送到静默推送设置的地方
    Taboo: true,
    TabooOriginalMsg: false /* 静默后推送的消息是否显示触发消息 */,
    //1 禁用任何日志输出 改为true后,不会向社交平台推送任何消息,且2 3开关失效 控制台除外
    DisableAllLogs: false,
    //2 禁用错误日志输出 改为true后,不会向社交平台推送任何错误消息 控制台除外
    DisableErrLogs: false,
    //3 禁用正常运行日志输出 改为true后,不会向社交平台推送任何任务运行成功的消息 控制台除外
    DisableRunLogs: false,
    //4 禁用控制台日志 改为true后,控制台不会显示任何消息
    DisableConsoleLog: false,
    //队列模式 1先进先出  2先进后出  其他值均视为 先进先出
    ListMode: 2,
    /* 运行日志输出位置,例如错误运行日志/任务运行成功等日志,只能设置1个 */
    runLogsInfo: {
        platform: 'tgBot', //发送平台
        toGroupOrUser: 'groupId', //通知类型,个人userId //群groupId
        Id: '-1001744932665', //个人id 或群id
    },
    /* 静默后监控结果输出位置  可填多个*/
    TabooLogsInfo: [
        // 	{
        // 	platform: "HumanTG",
        // 	toGroupOrUser: "groupId",   //通知类型,个人userId //群groupId
        // 	Id: "-1001744932665"
        // },
         {
             platform: 'tgBot', //发送平台
             toGroupOrUser: 'groupId', //通知类型,个人userId //群groupId
             Id: '-1001704263871', //个人id 或群id
         },
    ],
};


module.exports = {
    RspyList,
};