"use strict";
i.r(e), i.d(e, {
  confirmActivityLaunchChecks: function() {
    return s
  }
});
var n = i("651057"),
  l = i("653047"),
  a = i("213765"),
  u = i("370507");
async function r(t) {
  let {
    channel: e,
    currentEmbeddedApplication: i,
    embeddedActivitiesManager: n
  } = t;
  if (null != i) {
    let t = await new Promise(t => {
      (0, u.default)(i, e, () => {
        n.leaveActivity({
          channelId: e.id,
          applicationId: i.id
        }), t(!0)
      }, () => t(!1))
    });
    if (!t) return !1
  }
  return !0
}
async function d(t) {
  let {
    application: e,
    applicationId: i,
    user: u
  } = t;
  if (null == u.nsfwAllowed) {
    var r, d;
    let t = null != e ? e : l.default.createFromServer(await n.default.fetchApplication(i)),
      u = null !== (d = null === (r = t.embeddedActivityConfig) || void 0 === r ? void 0 : r.requires_age_gate) && void 0 !== d && d;
    if (u) {
      let e = await new Promise(e => {
        (0, a.confirmActivityAgeGateAlert)({
          application: t,
          onAgree: () => e(!0),
          onDisagree: () => e(!1)
        })
      });
      if (!e) return !1
    }
  }
  return !0
}
async function s(t) {
  let e = await r(t);
  if (!e) return !1;
  let i = await d(t);
  return !!i || !1
}