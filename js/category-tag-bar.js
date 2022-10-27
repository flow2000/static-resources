categoriesBarActive()
topCategoriesBarScroll()

//分类条
function categoriesBarActive() {
  var urlinfo = window.location.pathname;
  urlinfo = decodeURIComponent(urlinfo)
  // 验证是否是分类链接
  var pattern = /\/categories\/.*?\//;
  var categories_patbool = pattern.test(urlinfo);
  // 验证是否是标签链接
  pattern = /\/tags\/.*?\//;
  var tags_patbool = pattern.test(urlinfo);
  //判断是否是首页
  if (urlinfo == '/') {
    if (document.querySelector('#category-bar')) {
      document.getElementById('首页').classList.add("select")
    }
  } else if(categories_patbool || tags_patbool){
    console.log(patbool);
    // 获取当前的分类
    if (patbool) {
      var valuegroup = urlinfo.split("/");
      console.log(valuegroup[2]);
      // 获取当前分类
      var nowCategorie = valuegroup[2];
      if (document.querySelector('#category-bar')) {
        document.getElementById(nowCategorie).classList.add("select");
      }
    }
  }
}

//鼠标控制横向滚动
function topCategoriesBarScroll() {
  if (document.getElementById("category-bar-items")) {
    let xscroll = document.getElementById("category-bar-items");
    xscroll.addEventListener("mousewheel", function (e) {
      //计算鼠标滚轮滚动的距离
      let v = -e.wheelDelta / 2;
      xscroll.scrollLeft += v;
      //阻止浏览器默认方法
      e.preventDefault();
    }, false);
  }
}