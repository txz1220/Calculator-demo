(function Calculator() {
    'use strict';
 
    
    var input = document.getElementById('input'), //views
      number = document.querySelectorAll('.numbers div'), //nums
      ops = document.querySelectorAll('.operators div'), //ops
      result = document.getElementById('result'), //equals
      clear = document.getElementById('clear'), //clear
      theNum = '', // Current number
      oldNum = '', // First number
      resultNum, // Result
      operator; 
  
  
    //点击数字函数
  
      var setNum = function() {
          if (resultNum) {
            theNum = this.getAttribute("data-num");
            resultNum = "";
          } else { 
            theNum += this.getAttribute("data-num");
          }
          input.innerHTML = theNum; // 显示当前的数字
      
        };
  
  
      // 操作符函数
      var moveNum = function() {
          oldNum = theNum;
          theNum = "";
          operator = this.getAttribute("data-ops");
          result.setAttribute("data-result", ""); // 重置結果
        };
  
      // 等号函数
  
      var displayNum = function() {
    
          // 把字符串转换成数字
          oldNum = parseFloat(oldNum);
          theNum = parseFloat(theNum);
      
          // 操作加减乘除
          switch (operator) {
            case "plus":
              resultNum = oldNum + theNum;
              break;
      
            case "minus":
              resultNum = oldNum - theNum;
              break;
      
            case "times":
              resultNum = oldNum * theNum;
              break;
      
            case "divided by":
              resultNum = oldNum / theNum;
              break;
      
              // 没有操作符，按等于号，让输出保持继续
            default:
              resultNum = theNum;
          }
      
  
  
      // 检查结果，判断是不是非数字或者无穷大
      if (!isFinite(resultNum)) {
          if (isNaN(resultNum)) { 
            resultNum = "You broke it!";
          } else { 
            resultNum = "额，你做错了！";
          }
        }
    
        // 把最终的结果显示出来
        input.innerHTML = resultNum;
        result.setAttribute("data-result", resultNum);
    
        // 重置oldNum  保存结果
        oldNum = 0;
        theNum = resultNum;
    
      };
    
      // 清除函数
      var clearAll = function() {
        oldNum = "";
        theNum = "";
        input.innerHTML = "0";
        result.setAttribute("data-result", resultNum);
      };
    
      /* 点击事件 */
    
      // 数字点击事件
      for (var i = 0, l = number.length; i < l; i++) {
        number[i].onclick = setNum;
      }
    
      // 操作符点击事件
      for (var i = 0, l = ops.length; i < l; i++) {
        ops[i].onclick = moveNum;
      }
    
      // 等于号点击事件
      result.onclick = displayNum;
    
      // 清除按钮点击事件
      clear.onclick = clearAll;
    
  
  })();
  