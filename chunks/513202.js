"use strict";
n(47120);
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(570140),
  o = n(468026),
  a = n(626135),
  l = n(358085),
  u = n(998502),
  _ = n(566620),
  c = n(287545),
  d = n(318891),
  E = n(719296),
  I = n(981631),
  T = n(689938);
class h extends c.Z {
  _initialize() {
    super._initialize(), l.isPlatformEmbedded && u.ZP.on("APP_PUSH_ANALYTICS", (e, t) => {
      t.forEach(e => {
        "activities" === e.type && e.name === I.rMx.ACTIVITIES_RESTRICTRED_CSP_VIOLATION && a.default.track(e.name, e.data)
      })
    })
  }
  showErrorModal(e) {
    let {
      code: t,
      message: n
    } = e;
    (0, r.openModalLazy)(async () => e => (0, i.jsx)(o.default, {
      title: T.Z.Messages.EMBEDDED_ACTIVITIES_ERROR_TITLE.format({
        code: t
      }),
      body: n,
      ...e
    }))
  }
  showLaunchErrorModal(e) {
    (0, r.openModalLazy)(async () => t => (0, i.jsx)(o.default, {
      title: T.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
      body: e,
      ...t
    }))
  }
  leaveActivity(e) {
    let {
      channelId: t,
      applicationId: n
    } = e;
    s.Z.wait(() => {
      (0, _.mW)({
        channelId: t,
        applicationId: n
      })
    })
  }
  hidePIPEmbed(e) {
    let {
      channelId: t,
      applicationId: n
    } = e, i = (0, E.Z)(t, n);
    (0, d.RI)(i)
  }
  releaseWebView() {}
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "handleRPCDisconnect", i = e => {
      let {
        reason: t,
        application: n
      } = e;
      this.superHandleRPCDisconnect({
        reason: t,
        application: n
      })
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new h