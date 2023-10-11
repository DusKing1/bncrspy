const RspyList = {
    /* 监控信息配置 */
    SpyList: [
        {
            /* 任务名 确保任务名唯一性,因为id根据任务名计算生成*/ 
			Name: 'Spy测试1',
            /* 执行的脚本名 */
            Script: 'spy/test.js',
            /* 监听变量 */
            ListenEnv: ['jdzz', 'jdhb', 'mtgh'],
            /* 转换变量 */
            SetEnv: {
                jdzz: 'zhuanzhuan',
                jdhb: 'hongbao',
            },
            /* 超时退出 (秒)*/
            TimeOut: 0,
            /* 间隔时间(秒) */
            Interval: 30,
            /* 运行面板 0 代表 面板管理中的第一个容器 以此类推 */
            RunPanel: [0, 1, 2],
            /* 禁用任务 */
            Disable: false,
        },