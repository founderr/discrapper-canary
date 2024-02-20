"use strict";
n.r(t), n("190709"), n("996763");
var i = n("286235");
n("792736"), n("279295"), n("455209"), n("619106"), n("271938"), n("760190"), n("407117"), n("668528"), n("322876");
var a = n("171718"),
  l = n("404073"),
  s = n("503586"),
  r = n("446674"),
  o = n("429030"),
  u = n("688817"),
  d = n("767251"),
  c = n("49671"),
  f = n("951212"),
  E = n("424948");
n("762017");
var h = n("787006"),
  _ = n("605250"),
  C = n("648387"),
  S = n("49111"),
  g = n("782340");
(0, o.setUpdateRules)(d.default), (0, l.default)(g.default, a.default, c.default), r.default.Emitter.injectBatchEmitChanges(s.batchUpdates), r.default.PersistedStore.disableWrites = __OVERLAY__, r.default.initialize();
let T = window.GLOBAL_ENV.RELEASE_CHANNEL;
new(0, _.default)().log("[BUILD INFO] Release Channel: ".concat(T, ", Build Number: ").concat("267500", ", Version Hash: ").concat("22466b27756df28e5097c44b192df678d7b9d656")), i.default.setTags({
  appContext: S.CURRENT_APP_CONTEXT
}), f.default.initBasic(), E.default.init(), u.FocusRingManager.init(), h.init(), (0, C.cleanupTempFiles)()