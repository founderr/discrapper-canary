"use strict";
a.r(t);
var n = a("401430"),
  s = a("283595"),
  l = a("695103");
t.default = {
  init() {
    s.default.whenInitialized(() => {
      null != l.default.testModeApplicationId && (0, n.authorizeAndSetTestModeApplication)(l.default.testModeApplicationId, l.default.testModeOriginURL)
    })
  }
}