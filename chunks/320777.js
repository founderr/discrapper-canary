"use strict";
E.r(_), E("190709"), E("996763");
var t = E("286235");
E("792736"), E("279295"), E("455209"), E("619106"), E("271938"), E("760190"), E("407117"), E("668528"), E("322876");
var o = E("171718"),
  n = E("404073"),
  a = E("503586"),
  i = E("446674"),
  r = E("429030"),
  I = E("688817"),
  T = E("767251"),
  s = E("49671"),
  S = E("951212"),
  N = E("424948");
E("762017");
var O = E("787006"),
  A = E("605250"),
  R = E("648387"),
  l = E("49111"),
  L = E("782340");
(0, r.setUpdateRules)(T.default), (0, n.default)(L.default, o.default, s.default), i.default.Emitter.injectBatchEmitChanges(a.batchUpdates), i.default.PersistedStore.disableWrites = __OVERLAY__, i.default.initialize();
let u = window.GLOBAL_ENV.RELEASE_CHANNEL;
new(0, A.default)().log("[BUILD INFO] Release Channel: ".concat(u, ", Build Number: ").concat("266383", ", Version Hash: ").concat("952288ccbd9fe52d33575d828fc66ffd46aa1dc7")), t.default.setTags({
  appContext: l.CURRENT_APP_CONTEXT
}), S.default.initBasic(), N.default.init(), I.FocusRingManager.init(), O.init(), (0, R.cleanupTempFiles)()