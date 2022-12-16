const sidebar =  {
  // This sidebar gets displayed when user is
  // under `guide` directory.
  // 租用版说明文档左侧菜单
  '/guide/': [
    {
      text: '简介',
      collapsible: true,
      items:[
        { text: '软件介绍', link: '/guide/introduce' }         
      ]
    } ,
    {
      text: '快速上手',
      collapsible: true,
      items:[
        { text: '准备', link: '/guide/start' },
        { text: '软件登陆', link: '/guide/login' },
        { text: '添加人员信息', link: '/guide/addmember' },        
        { text: '批量导入人员信息', link: '/guide/importemp' },
        { text: '批量导入人员头像', link: '/guide/importphoto' },
        { text: '添加会议信息', link: '/guide/meeting' }, 
        { text: '添加参会人员', link: '/guide/addparticipants' }, 
        { text: '人脸签到', link: '/guide/signin' }, 
        { text: '短信群发', link: '/guide/smssend' },
        { text: '导出统计报表', link: '/guide/exportsignlog' }       
      ]
    },
    {
      text: '高级功能',
      collapsible: true,
      //collapsed: true,
      items:[
        { text: '胸卡打印设置', link: '/guide/printcard' }
      ]
    },
		{
      text: '常见问题',
      collapsible: true,
      items:[

      ]
    } 
  ]
}

module.exports = sidebar;
