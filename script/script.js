 browser = navigator.userAgent.split(" ");
  browser = browser[browser.length-1]
  if(browser.includes("Safari")){
    browser = "Safari";
  }
  if(browser.includes("OPR")){
    browser="Opera";
    document.getElementsByTagName('header')[0];
    document.getElementsByTagName('body')[0].hidden = true;
  }
  if(browser.includes("Edg")){
    browser="Edge";
  }
  if(browser.includes("Firefox")){
    browser="Firefox";
  }
  console.log(browser);
}
