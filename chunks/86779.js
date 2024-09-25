n(47120), n(315314), n(610138), n(216116), n(78328), n(815648), n(773603);
var s,
    r,
    i = n(735250),
    a = n(470079),
    o = n(593473),
    l = n(756647),
    c = n(442837),
    u = n(544891),
    d = n(433517),
    _ = n(481060),
    h = n(570140),
    E = n(893776),
    p = n(375964),
    g = n(314897),
    m = n(626135),
    f = n(70956),
    I = n(970648),
    N = n(981631),
    T = n(715859);
let x = 'mweb_handoff_nonce',
    A = 'mweb_handoff_nonce_expiration',
    C = 1 * f.Z.Millis.MINUTE;
((r = s || (s = {})).NONCE_MISSING = 'nonce_missing'), (r.NONCE_EXPIRED = 'nonce_expired'), (r.NULL_HANDOFF_TOKEN = 'deep_link_failed'), (r.HANDOFF_EXCHANGE = 'handoff_exchange');
let Z = new Set(['nonce_missing', 'nonce_expired', 'handoff_exchange']),
    R = new Set(['deep_link_failed']),
    v = () => {
        d.K.remove(x), d.K.remove(A);
    };
t.Z = () => {
    let e = (0, c.e7)([g.default], () => g.default.getFingerprint()),
        { fingerprint: t, handoff_token: n } = (0, o.parse)(window.location.search),
        s = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
        r = null != s ? s : null !== e ? e : void 0;
    a.useEffect(() => {
        null !== s &&
            e !== s &&
            h.Z.dispatch({
                type: 'FINGERPRINT',
                fingerprint: s
            });
    }, [s, e]);
    let [f, S] = a.useState(null),
        O = a.useCallback(
            (e) => {
                S(e),
                    m.default.track(
                        N.rMx.MOBILE_WEB_HANDOFF_FAILURE,
                        {
                            reason: e,
                            fingerprint: (0, l.K)(r)
                        },
                        { fingerprint: r }
                    );
            },
            [S, r]
        ),
        b = d.K.get(x);
    if (
        ('null' === n && null === f && O('deep_link_failed'),
        null != n && 'null' !== n && null == b && null === f && O('nonce_missing'),
        a.useEffect(() => {
            if (null != b) {
                let e = d.K.get(A);
                (null == e || Date.now() >= e) && (O('nonce_expired'), v());
            }
        }, [b, O]),
        a.useEffect(() => {
            null != n &&
                'null' !== n &&
                null != b &&
                null == f &&
                u.tn
                    .post({
                        url: N.ANM.HANDOFF_EXCHANGE,
                        body: {
                            key: b,
                            handoff_token: n
                        }
                    })
                    .then((e) => E.Z.loginToken(e.body.token, !1))
                    .then(() => {
                        m.default.track(N.rMx.LOGIN_SUCCESSFUL, {
                            source: N.uRl.MOBILE_WEB_HANDOFF,
                            is_new_user: !1,
                            fingerprint: (0, l.K)(r)
                        });
                        let e = new URL(window.location.href),
                            t = new URLSearchParams(e.search);
                        t.delete('handoff_token'), t.delete('fingerprint'), (e.search = t.toString()), window.history.pushState(null, '', e);
                    })
                    .catch(() => {
                        O('handoff_exchange');
                    })
                    .finally(() => {
                        v();
                    });
        }, [n, b, f, r, O]),
        null == r)
    )
        return null;
    let P = (() => {
        if (null == f)
            return (0, i.jsxs)(i.Fragment, {
                children: [p.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_1, (0, i.jsx)('br', {}), p.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_2]
            });
        if (R.has(f)) return p.MOBILE_WEB_HANDOFF_ERROR_NO_TRY_AGAIN;
        if (Z.has(f)) return p.MOBILE_WEB_HANDOFF_ERROR_TRY_AGAIN;
    })();
    return null != f && R.has(f)
        ? (0, i.jsx)('div', {
              className: T.errorContainer,
              children: (0, i.jsx)(_.Text, {
                  color: 'interactive-normal',
                  variant: 'text-sm/semibold',
                  children: P
              })
          })
        : (0, i.jsxs)('div', {
              className: T.container,
              children: [
                  (0, i.jsx)(_.Text, {
                      variant: 'text-sm/semibold',
                      children: P
                  }),
                  (0, i.jsx)(_.Button, {
                      color: _.Button.Colors.BRAND_INVERTED,
                      onClick: () => {
                          let e = I.Z.generateNonce();
                          d.K.set(x, e), d.K.set(A, Date.now() + C);
                          let t = new URL(N.x0X),
                              n = new URLSearchParams(window.location.search);
                          n.delete('fingerprint'), n.delete('handoff_token');
                          let s = new URLSearchParams();
                          s.set('redirect', encodeURIComponent(window.location.pathname + n.toString())),
                              s.set('key', e),
                              s.set('fingerprint', r),
                              (t.search = s.toString()),
                              m.default.track(
                                  N.rMx.DEEP_LINK_CLICKED,
                                  {
                                      fingerprint: (0, l.K)(r),
                                      source: 'mobile_web_handoff',
                                      destination: N.x0X
                                  },
                                  {
                                      fingerprint: r,
                                      flush: !0
                                  }
                              ),
                              (window.location.href = t.toString());
                      },
                      children: (0, i.jsx)(_.Text, {
                          className: T.buttonText,
                          variant: 'text-sm/semibold',
                          children: p.MOBILE_WEB_HANDOFF_BUTTON_TEXT
                      })
                  })
              ]
          });
};
