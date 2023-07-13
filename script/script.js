function onload(){
  browser = navigator.userAgent.split(" ");
  mobile = browser[browser.length-2];
  browser = browser[browser.length-1];
  if(mobile.includes("Mobile")){
    mobile = true;
  }
  if(browser.includes("Safari")){
    browser = "Safari";
  }
  if(browser.includes("OPR")){
    browser="Opera";
    document.getElementsByTagName('head')[0].hidden = true;
    document.getElementsByTagName('body')[0].hidden = true;
  }
  if(browser.includes("Edg")){
    browser="Edge";
  }
  if(browser.includes("Firefox")){
    browser="Firefox";
  }
  console.log(browser);
  console.log(mobile);
}
