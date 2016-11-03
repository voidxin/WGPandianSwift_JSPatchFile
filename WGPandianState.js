//修复1.4.0.1版本盘点状态设置出错的bug
require('WGPandianListModel');
require('WGNoPandianStoreListCellView');
require('NSMutableDictionary');
require('YingXiaoGuanJia');
require('UITableViewCell');
require('UILabel');
require('UIFont');
require('NSString');
defineClass('YingXiaoGuanJia.WGNoPandianStoreListCellView', {

  
  setModel:function(model){
	   self.ORIGsetModel(model);
	   var flag = model.checkFlag().integerValue();
	   console.log(flag);
	   self.storeName().setText(model.storeName());
	   self.state().setFont(UIFont.systemFontOfSize(14));
	   if (flag == 1) {
	       self.state().setText("未盘点");
	   } else if (flag == 2) {
	       self.state().setText("已盘点");
	   } else if (flag == 3) {
	       self.state().setText("生效");
	   } else {
	       console.log("test，不可盘点");
	       self.state().setText("不可盘点");

	   }
  }


    

}, {});












