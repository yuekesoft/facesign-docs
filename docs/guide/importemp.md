# 批量导入人员信息

#### 打开批量导入模板Excel文件

* 依次输入人员编号、分类编号、姓名、手机号，其他字段可以留空。
* 人员编号可以采用多位数字(比如：10001或者20001开始)，按序生成，分类编号对应签到软件的人员分类编号（比如：10是对应嘉宾；11是对应工作人员）。
* 模板格式文件不能进行删除修改；没有的信息可以留空，但是不能删除该列字段；

![image-20221216104936146](https://vuepressdocs.oss-cn-hangzhou.aliyuncs.com/docsimages/202212161049193.png)

#### 批量导入操作

1. 点击`系统设置`，打开`批量导入`，`打开批量导入Excel模板文件`，点击`确定导入`按钮。

![image-20221216105203411](https://vuepressdocs.oss-cn-hangzhou.aliyuncs.com/docsimages/202212161052457.png)

2. 显示导入成功。

![image-20221216105459574](https://vuepressdocs.oss-cn-hangzhou.aliyuncs.com/docsimages/202212161054625.png)

3. 点击`人员信息`按钮，点击分类`嘉宾`，显示导入成功人员信息列表；

![image-20221216105533055](https://vuepressdocs.oss-cn-hangzhou.aliyuncs.com/docsimages/202212161055105.png)

::: danger 注意

导入是根据人员编号是否重复来判断，如果相同的人员编号，只能导入一次，不能再导入，需要修改为不同的人员编号进行导入。如：第二批，第三批分批导入就需要注意导入的人员编号和excel模板里面的需要导入的人员编号是否重复，不同的人员编号才能被导入。

:::
