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