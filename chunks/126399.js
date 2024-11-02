n(47120);
var i = n(544891),
    r = n(570140),
    s = n(893776),
    a = n(899742),
    l = n(743142),
    o = n(117240),
    c = n(626135),
    u = n(317770),
    d = n(981631);
function h(e, t) {
    c.default.track(d.rMx.BROWSER_HANDOFF_SUCCEEDED, {
        authenticated: e,
        handoff_source: t
    });
}
class g extends u.Z {
    _initialize() {
        r.Z.subscribe('BROWSER_HANDOFF_END', this.handleEnd), r.Z.subscribe('BROWSER_HANDOFF_FROM_APP', this.handleHandoff);
    }
    _terminate() {
        r.Z.unsubscribe('BROWSER_HANDOFF_END', this.handleEnd), r.Z.unsubscribe('BROWSER_HANDOFF_FROM_APP', this.handleHandoff);
    }
    handleHandoff(e) {
        let { handoffKey: t, handoffToken: n, fingerprint: r, handoffSource: o } = e;
        null != n
            ? i.tn
                  .post({
                      url: d.ANM.HANDOFF_EXCHANGE,
                      body: {
                          key: t,
                          handoff_token: n
                      }
                  })
                  .then(
                      (e) => {
                          let { body: t } = e;
                          (0, a.Vb)(t.user), s.Z.loginToken(t.token, !1), h(!0, o);
                      },
                      (e) => {
                          if ((null != r && h(!1, o), s.Z.setFingerprint(r), (0, a.lx)(), o === l.F.ROLE_SUBSCRIPTION)) {
                              var t;
                              c.default.track(d.rMx.MOBILE_WEB_HANDOFF_FAILURE, {
                                  reason: null !== (t = e.message) && void 0 !== t ? t : e.text,
                                  handoff_source: o
                              });
                          }
                      }
                  )
            : null != r
              ? (s.Z.setFingerprint(r), h(!1, o), (0, a.lx)())
              : (s.Z.setFingerprint(r), (0, a.by)());
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (n = 'handleEnd'),
            (i = (e) => {
                let { handoffToken: t, fingerprint: n } = e,
                    i = o.Z.key;
                null != i && o.Z.isHandoffAvailable()
                    ? this.handleHandoff({
                          handoffKey: i,
                          handoffToken: t,
                          fingerprint: n,
                          handoffSource: void 0
                      })
                    : (s.Z.setFingerprint(null), (0, a.by)());
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
t.Z = new g();
