"use strict";
t.r(A), t.d(A, {
  createCloudUploader: function() {
    return l
  }
});
var a = t("680287");

function l(e) {
  let A = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "POST";
  return new a.default(e, A, {
    raiseEndpointErrors: !0
  })
}