let RspyList = {
    /* 监控信息配置 kr m 船长*/
    SpyList: [
    {
    Name: 'M-幸运抽奖',
            Script: 'walle1798_WALL.E/m_jd_wx_luckDraw.js',
            ListenEnv: ['LUCK_DRAW_URL', 'M_WX_LUCK_DRAW_URL'],
            SetEnv: {
             LUCK_DRAW_URL: 'M_WX_LUCK_DRAW_URL',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
   Name: 'M-知识超人',
            Script: 'walle1798_WALL.E/m_jd_wx_knowledge.js',
            ListenEnv: ['jd_wxKnowledgeActivity_activityUrl', 'M_WX_KNOWLEDGE_URL'],
            SetEnv: {
             jd_wxKnowledgeActivity_activityUrl: 'M_WX_KNOWLEDGE_URL',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
   Name: 'M-分享有礼',
            Script: 'walle1798_WALL.E/m_jd_wx_share.js',
            ListenEnv: ['jd_wxShareActivity_activityId', 'M_WXM_WX_SHARE_URL'],
            SetEnv: {
             jd_wxShareActivity_activityId: 'M_WX_SHARE_URL',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },