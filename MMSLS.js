/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
   
    "https://www.maimemo.com/share/page?uid=31857330&pid=6f0080f787b9a917c991bba747faaeff&tid=81cafc908b986cd18dcd60de959dd503",
    "https://www.maimemo.com/share/page?uid=31857330&pid=820132de40e3ea244ff8c219d3917ef8&tid=a8cc48714a8f2cdac5080678456dd8f7",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
     "https://www.maimemo.com/share/page?uid=31857330&pid=0299371d0e981cff986b69646fda1e1b&tid=c6a5faf5eea9c6b5237d0c9958e14e11",
    "https://www.maimemo.com/share/page?uid=25998506&pid=0299371d0e981cff986b69646fda1e1b&tid=812b98dba8a33804fc8db856a84004a1",


  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
