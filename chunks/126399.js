n(47120);
var r = n(544891),
  s = n(570140),
  i = n(893776),
  a = n(899742),
  o = n(743142),
  l = n(117240),
  c = n(626135),
  u = n(317770),
  d = n(981631);

function h(e, t) {
  c.default.track(d.rMx.BROWSER_HANDOFF_SUCCEEDED, {
    authenticated: e,
    handoff_source: t
  })
}
class _ extends u.Z {
  _initialize() {
    s.Z.subscribe("BROWSER_HANDOFF_END", this.handleEnd), s.Z.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff)
  }
  _terminate() {
    s.Z.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd), s.Z.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff)
  }
  handleHandoff(e) {
    let {
      handoffKey: t,
      handoffToken: n,
      fingerprint: s,
      handoffSource: l
    } = e;
    null != n ? r.tn.post({
      url: d.ANM.HANDOFF_EXCHANGE,
      body: {
        key: t,
        handoff_token: n
      }
    }).then(e => {
      let {
        body: t
      } = e;
      (0, a.Vb)(t.user), i.Z.loginToken(t.token, !1), h(!0, l)
    }, e => {
      if (null != s && h(!1, l), i.Z.setFingerprint(s), (0, a.lx)(), l === o.F.ROLE_SUBSCRIPTION) {
        var t;
        c.default.track(d.rMx.MOBILE_WEB_HANDOFF_FAILURE, {
          reason: null !== (t = e.message) && void 0 !== t ? t : e.text,
          handoff_source: l
        })
      }
    }) : null != s ? (i.Z.setFingerprint(s), h(!1, l), (0, a.lx)()) : (i.Z.setFingerprint(s), (0, a.by)())
  }
  constructor(...e) {
    var t, n, r;
    super(...e), t = this, n = "handleEnd", r = e => {
      let {
        handoffToken: t,
        fingerprint: n
      } = e, r = l.Z.key;
      null != r && l.Z.isHandoffAvailable() ? this.handleHandoff({
        handoffKey: r,
        handoffToken: t,
        fingerprint: n,
        handoffSource: void 0
      }) : (i.Z.setFingerprint(null), (0, a.by)())
    }, n in t ? Object.defineProperty(t, n, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = r
  }
}
t.Z = new _