"use strict";
n.r(t);
var a = n("401430"),
  s = n("283595"),
  i = n("695103");
t.default = {
  init() {
    s.default.whenInitialized(() => {
      null != i.default.testModeApplicationId && (0, a.authorizeAndSetTestModeApplication)(i.default.testModeApplicationId, i.default.testModeOriginURL)
    })
  }
}