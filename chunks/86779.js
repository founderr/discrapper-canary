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
    p = n(570140),
    g = n(893776),
    m = n(314897),
    f = n(626135),
    x = n(70956),
    _ = n(970648),
    E = n(981631),
    v = n(388032),
    I = n(924469);
let b = 'mweb_handoff_nonce',
    N = 'mweb_handoff_nonce_expiration',
    C = 1 * x.Z.Millis.MINUTE;
((r = i || (i = {})).NONCE_MISSING = 'nonce_missing'), (r.NONCE_EXPIRED = 'nonce_expired'), (r.NULL_HANDOFF_TOKEN = 'deep_link_failed'), (r.HANDOFF_EXCHANGE = 'handoff_exchange');
let S = new Set(['nonce_missing', 'nonce_expired', 'handoff_exchange']),
    A = new Set(['deep_link_failed']),
    T = () => {
        d.K.remove(b), d.K.remove(N);
    };
t.Z = () => {
    let e = (0, c.e7)([m.default], () => m.default.getFingerprint()),
        { fingerprint: t, handoff_token: n } = (0, a.parse)(window.location.search),
        i = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
        r = null != i ? i : null !== e ? e : void 0;
    l.useEffect(() => {
        null !== i &&
            e !== i &&
            p.Z.dispatch({
                type: 'FINGERPRINT',
                fingerprint: i
            });
    }, [i, e]);
    let [x, j] = l.useState(null),
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
        R = d.K.get(b);
    if (
        ('null' === n && null === x && Z('deep_link_failed'),
        null != n && 'null' !== n && null == R && null === x && Z('nonce_missing'),
        l.useEffect(() => {
            if (null != R) {
                let e = d.K.get(N);
                (null == e || Date.now() >= e) && (Z('nonce_expired'), T());
            }
        }, [R, Z]),
        l.useEffect(() => {
            null != n &&
                'null' !== n &&
                null != R &&
                null == x &&
                u.tn
                    .post({
                        url: E.ANM.HANDOFF_EXCHANGE,
                        body: {
                            key: R,
                            handoff_token: n
                        },
                        rejectWithError: !0
                    })
                    .then((e) => g.Z.loginToken(e.body.token, !1))
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
        }, [n, R, x, r, Z]),
        null == r)
    )
        return null;
    let L = (() => {
        if (null == x)
            return (0, s.jsxs)(s.Fragment, {
                children: [v.intl.string(v.t.uJ1Jsb), (0, s.jsx)('br', {}), v.intl.string(v.t.GHVWAg)]
            });
        if (A.has(x)) return v.intl.string(v.t.EPt55u);
        if (S.has(x)) return v.intl.string(v.t.g87kTk);
    })();
    return null != x && A.has(x)
        ? (0, s.jsx)('div', {
              className: I.errorContainer,
              children: (0, s.jsx)(h.Text, {
                  color: 'interactive-normal',
                  variant: 'text-sm/semibold',
                  children: L
              })
          })
        : (0, s.jsxs)('div', {
              className: I.container,
              children: [
                  (0, s.jsx)(h.Text, {
                      variant: 'text-sm/semibold',
                      children: L
                  }),
                  (0, s.jsx)(h.Button, {
                      color: h.Button.Colors.BRAND_INVERTED,
                      onClick: () => {
                          let e = _.Z.generateNonce();
                          d.K.set(b, e), d.K.set(N, Date.now() + C);
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
                          className: I.buttonText,
                          variant: 'text-sm/semibold',
                          children: v.intl.string(v.t['NcC75+'])
                      })
                  })
              ]
          });
};
