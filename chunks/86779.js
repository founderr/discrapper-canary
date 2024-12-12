n(47120), n(315314), n(610138), n(216116), n(78328), n(815648), n(773603);
var i,
    r,
    s = n(200651),
    l = n(192379),
    a = n(593473),
    o = n(756647),
    c = n(442837),
    u = n(544891),
    d = n(433517),
    h = n(481060),
    g = n(570140),
    m = n(893776),
    p = n(314897),
    f = n(626135),
    _ = n(70956),
    x = n(970648),
    E = n(981631),
    I = n(388032),
    v = n(924469);
let N = 'mweb_handoff_nonce',
    b = 'mweb_handoff_nonce_expiration',
    C = 1 * _.Z.Millis.MINUTE;
((r = i || (i = {})).NONCE_MISSING = 'nonce_missing'), (r.NONCE_EXPIRED = 'nonce_expired'), (r.NULL_HANDOFF_TOKEN = 'deep_link_failed'), (r.HANDOFF_EXCHANGE = 'handoff_exchange');
let S = new Set(['nonce_missing', 'nonce_expired', 'handoff_exchange']),
    A = new Set(['deep_link_failed']),
    T = () => {
        d.K.remove(N), d.K.remove(b);
    };
t.Z = () => {
    let e = (0, c.e7)([p.default], () => p.default.getFingerprint()),
        { fingerprint: t, handoff_token: n } = (0, a.parse)(window.location.search),
        i = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
        r = null != i ? i : null !== e ? e : void 0;
    l.useEffect(() => {
        null !== i &&
            e !== i &&
            g.Z.dispatch({
                type: 'FINGERPRINT',
                fingerprint: i
            });
    }, [i, e]);
    let [_, j] = l.useState(null),
        Z = l.useCallback(
            (e) => {
                j(e),
                    f.default.track(
                        E.rMx.MOBILE_WEB_HANDOFF_FAILURE,
                        {
                            reason: e,
                            fingerprint: (0, o.K)(r)
                        },
                        { fingerprint: r }
                    );
            },
            [j, r]
        ),
        R = d.K.get(N);
    if (
        ('null' === n && null === _ && Z('deep_link_failed'),
        null != n && 'null' !== n && null == R && null === _ && Z('nonce_missing'),
        l.useEffect(() => {
            if (null != R) {
                let e = d.K.get(b);
                (null == e || Date.now() >= e) && (Z('nonce_expired'), T());
            }
        }, [R, Z]),
        l.useEffect(() => {
            null != n &&
                'null' !== n &&
                null != R &&
                null == _ &&
                u.tn
                    .post({
                        url: E.ANM.HANDOFF_EXCHANGE,
                        body: {
                            key: R,
                            handoff_token: n
                        },
                        rejectWithError: !0
                    })
                    .then((e) => m.Z.loginToken(e.body.token, !1))
                    .then(() => {
                        f.default.track(E.rMx.LOGIN_SUCCESSFUL, {
                            source: E.uRl.MOBILE_WEB_HANDOFF,
                            is_new_user: !1,
                            fingerprint: (0, o.K)(r)
                        });
                        let e = new URL(window.location.href),
                            t = new URLSearchParams(e.search);
                        t.delete('handoff_token'), t.delete('fingerprint'), (e.search = t.toString()), window.history.pushState(null, '', e);
                    })
                    .catch(() => {
                        Z('handoff_exchange');
                    })
                    .finally(() => {
                        T();
                    });
        }, [n, R, _, r, Z]),
        null == r)
    )
        return null;
    let L = (() => {
        if (null == _)
            return (0, s.jsxs)(s.Fragment, {
                children: [I.intl.string(I.t.uJ1Jsb), (0, s.jsx)('br', {}), I.intl.string(I.t.GHVWAg)]
            });
        if (A.has(_)) return I.intl.string(I.t.EPt55u);
        if (S.has(_)) return I.intl.string(I.t.g87kTk);
    })();
    return null != _ && A.has(_)
        ? (0, s.jsx)('div', {
              className: v.errorContainer,
              children: (0, s.jsx)(h.Text, {
                  color: 'interactive-normal',
                  variant: 'text-sm/semibold',
                  children: L
              })
          })
        : (0, s.jsxs)('div', {
              className: v.container,
              children: [
                  (0, s.jsx)(h.Text, {
                      variant: 'text-sm/semibold',
                      children: L
                  }),
                  (0, s.jsx)(h.Button, {
                      color: h.Button.Colors.BRAND_INVERTED,
                      onClick: () => {
                          let e = x.Z.generateNonce();
                          d.K.set(N, e), d.K.set(b, Date.now() + C);
                          let t = new URL(E.x0X),
                              n = new URLSearchParams(window.location.search);
                          n.delete('fingerprint'), n.delete('handoff_token');
                          let i = new URLSearchParams();
                          i.set('redirect', encodeURIComponent(window.location.pathname + n.toString())),
                              i.set('key', e),
                              i.set('fingerprint', r),
                              (t.search = i.toString()),
                              f.default.track(
                                  E.rMx.DEEP_LINK_CLICKED,
                                  {
                                      fingerprint: (0, o.K)(r),
                                      source: 'mobile_web_handoff',
                                      destination: E.x0X
                                  },
                                  {
                                      fingerprint: r,
                                      flush: !0
                                  }
                              ),
                              (window.location.href = t.toString());
                      },
                      children: (0, s.jsx)(h.Text, {
                          className: v.buttonText,
                          variant: 'text-sm/semibold',
                          children: I.intl.string(I.t['NcC75+'])
                      })
                  })
              ]
          });
};
