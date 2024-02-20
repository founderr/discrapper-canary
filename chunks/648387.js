"use strict";
n.r(t), n.d(t, {
  cleanupTempFiles: function() {
    return r
  }
});
var i = n("811022"),
  a = n("49671"),
  l = n("697218"),
  s = n("147746");

function r() {
  var e;
  (null === a.default || void 0 === a.default ? void 0 : null === (e = a.default.fileManager) || void 0 === e ? void 0 : e.cleanupTempFiles) != null && setTimeout(() => void u(), 1e4)
}
let o = new i.default("tempFiles");
async function u() {
  var e;
  if ((null === a.default || void 0 === a.default ? void 0 : null === (e = a.default.fileManager) || void 0 === e ? void 0 : e.cleanupTempFiles) != null) try {
    let e = await a.default.fileManager.cleanupTempFiles();
    if ((null == e ? void 0 : e.callscopeLogFiles) != null && e.callscopeLogFiles.length > 0) {
      let t = Math.floor(1e3 * Math.random()).toString(),
        n = l.default.getCurrentUser();
      (null == n ? void 0 : n.isStaff()) && (t = n.id), o.log("Uploading ".concat(e.callscopeLogFiles.length, " callscope logs as user ").concat(t)), await (0, s.uploadCallscopeLogFiles)(t, e.callscopeLogFiles)
    }
  } catch (e) {
    o.error("Exception ".concat(null == e ? void 0 : e.message), e)
  }
}