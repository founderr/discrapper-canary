"use strict";
t.r(A), t.d(A, {
  createCloudUploader: function() {
    return n
  }
});
var a = t("681736");

function n(e) {
  let A = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "POST";
  return new a.default(e, A, {
    raiseEndpointErrors: !0
  })
}