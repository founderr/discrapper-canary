n(47120), n(315314), n(610138), n(216116), n(78328), n(815648), n(773603);
var s,
    r,
    i = n(735250),
    a = n(470079),
    l = n(593473),
    o = n(756647),
    c = n(442837),
    u = n(544891),
    d = n(433517),
    h = n(481060),
    _ = n(570140),
    E = n(893776),
    g = n(314897),
    p = n(626135),
    f = n(70956),
    m = n(970648),
    I = n(981631),
    N = n(689938),
    T = n(715859);
let A = 'mweb_handoff_nonce',
    x = 'mweb_handoff_nonce_expiration',
    C = 1 * f.Z.Millis.MINUTE;
((r = s || (s = {})).NONCE_MISSING = 'nonce_missing'), (r.NONCE_EXPIRED = 'nonce_expired'), (r.NULL_HANDOFF_TOKEN = 'deep_link_failed'), (r.HANDOFF_EXCHANGE = 'handoff_exchange');
let S = new Set(['nonce_missing', 'nonce_expired', 'handoff_exchange']),
    O = new Set(['deep_link_failed']),
    R = () => {
        d.K.remove(A), d.K.remove(x);
    };
t.Z = () => {
    let e = (0, c.e7)([g.default], () => g.default.getFingerprint()),
        { fingerprint: t, handoff_token: n } = (0, l.parse)(window.location.search),
        s = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
        r = null != s ? s : null !== e ? e : void 0;
    a.useEffect(() => {
        null !== s &&
            e !== s &&
            _.Z.dispatch({
                type: 'FINGERPRINT',
                fingerprint: s
            });
    }, [s, e]);
    let [f, v] = a.useState(null),
        Z = a.useCallback(
            (e) => {
                v(e),
                    p.default.track(
                        I.rMx.MOBILE_WEB_HANDOFF_FAILURE,
                        {
                            reason: e,
                            fingerprint: (0, o.K)(r)
                        },
                        { fingerprint: r }
                    );
            },
            [v, r]
        ),
        b = d.K.get(A);
    if (
        ('null' === n && null === f && Z('deep_link_failed'),
        null != n && 'null' !== n && null == b && null === f && Z('nonce_missing'),
        a.useEffect(() => {
            if (null != b) {
                let e = d.K.get(x);
                (null == e || Date.now() >= e) && (Z('nonce_expired'), R());
            }
        }, [b, Z]),
        a.useEffect(() => {
            null != n &&
                'null' !== n &&
                null != b &&
                null == f &&
                u.tn
                    .post({
                        url: I.ANM.HANDOFF_EXCHANGE,
                        body: {
                            key: b,
                            handoff_token: n
                        }
                    })
                    .then((e) => E.Z.loginToken(e.body.token, !1))
                    .then(() => {
                        p.default.track(I.rMx.LOGIN_SUCCESSFUL, {
                            source: I.uRl.MOBILE_WEB_HANDOFF,
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
                        R();
                    });
        }, [n, b, f, r, Z]),
        null == r)
    )
        return null;
    let D = (() => {
        if (null == f)
            return (0, i.jsxs)(i.Fragment, {
                children: [N.Z.Messages.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_1, (0, i.jsx)('br', {}), N.Z.Messages.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_2]
            });
        if (O.has(f)) return N.Z.Messages.MOBILE_WEB_HANDOFF_ERROR_NO_TRY_AGAIN;
        if (S.has(f)) return N.Z.Messages.MOBILE_WEB_HANDOFF_ERROR_TRY_AGAIN;
    })();
    return null != f && O.has(f)
        ? (0, i.jsx)('div', {
              className: T.errorContainer,
              children: (0, i.jsx)(h.Text, {
                  color: 'interactive-normal',
                  variant: 'text-sm/semibold',
                  children: D
              })
          })
        : (0, i.jsxs)('div', {
              className: T.container,
              children: [
                  (0, i.jsx)(h.Text, {
                      variant: 'text-sm/semibold',
                      children: D
                  }),
                  (0, i.jsx)(h.Button, {
                      color: h.Button.Colors.BRAND_INVERTED,
                      onClick: () => {
                          let e = m.Z.generateNonce();
                          d.K.set(A, e), d.K.set(x, Date.now() + C);
                          let t = new URL(I.x0X),
                              n = new URLSearchParams(window.location.search);
                          n.delete('fingerprint'), n.delete('handoff_token');
                          let s = new URLSearchParams();
                          s.set('redirect', encodeURIComponent(window.location.pathname + n.toString())),
                              s.set('key', e),
                              s.set('fingerprint', r),
                              (t.search = s.toString()),
                              p.default.track(
                                  I.rMx.DEEP_LINK_CLICKED,
                                  {
                                      fingerprint: (0, o.K)(r),
                                      source: 'mobile_web_handoff',
                                      destination: I.x0X
                                  },
                                  {
                                      fingerprint: r,
                                      flush: !0
                                  }
                              ),
                              (window.location.href = t.toString());
                      },
                      children: (0, i.jsx)(h.Text, {
                          className: T.buttonText,
                          variant: 'text-sm/semibold',
                          children: N.Z.Messages.MOBILE_WEB_HANDOFF_BUTTON_TEXT
                      })
                  })
              ]
          });
};
