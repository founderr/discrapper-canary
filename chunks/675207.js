t.r(n),
    t.d(n, {
        AccountConnectionResult: function () {
            return b;
        },
        default: function () {
            return A;
        }
    }),
    t(610138),
    t(216116),
    t(78328),
    t(815648),
    t(47120),
    t(757143);
var s = t(735250),
    r = t(470079),
    i = t(120356),
    o = t.n(i),
    l = t(266067),
    a = t(873546),
    c = t(442837),
    u = t(481060),
    d = t(457330),
    f = t(726542),
    C = t(536285),
    p = t(553795),
    g = t(656649),
    N = t(981631),
    m = t(689938),
    E = t(934484);
let _ = null != window.opener,
    h = 'https://dis.gd/Amazon-Music-Connection',
    v = (e) => new URLSearchParams(e.search);
function A() {
    var e;
    let n = (0, l.k6)(),
        t = v((0, l.TH)()),
        i = t.get('code'),
        o = t.get('oauth_verifier'),
        a = null !== (e = t.get('state')) && void 0 !== e ? e : '',
        u = t.get('loading'),
        { type: m } = (0, l.UO)(),
        E = (0, g.vJ)(m),
        h = null == o ? (null != i ? i : '') : o,
        A = (0, c.e7)([p.Z], () => p.Z.hasPendingAuthorizedState(a), [a]),
        [T, O] = r.useState(!0);
    return (r.useEffect(() => {
        let e;
        if (null != u || !A) return;
        for (let n of t.keys()) {
            if (!!n.startsWith('openid.')) null == e && (e = {}), (e[n] = t.get(n));
        }
        let s = (e) => {
                let { status: t, body: s } = e;
                if (null != o) {
                    if (null == s ? void 0 : s.redirect) return n.replace(s.redirect);
                    [200, 204].includes(t) && (n.replace(N.Z5c.CONNECTIONS_SUCCESS(o)), _ && window.close()), O(!1);
                }
            },
            r = {
                code: h,
                openid_params: e,
                state: a
            },
            i = (e) => {
                null != o && f.Z.isSupported(o) && d.Z.callback(o, r, e).then(s, s);
            };
        if (_) {
            i(!1);
            return;
        }
        let o = (0, g.vJ)(m);
        C.default
            .request(N.Etm.CONNECTIONS_CALLBACK, {
                ...r,
                providerType: o
            })
            .then(s, (e) => i('RPCError' !== e.name))
            .then(() => C.default.disconnect());
    }, [h, A, n, u, m, t, a]),
    null != E && f.Z.isSupported(E))
        ? (0, s.jsx)(b, {
              platformType: E,
              verifying: T
          })
        : null;
}
function b(e) {
    let n,
        t,
        { verifying: i, platformType: l } = e,
        c = f.Z.get(l),
        d = r.useCallback(() => {
            window.close();
        }, []);
    return (
        (n = i
            ? (0, s.jsx)('div', {
                  className: E.message,
                  children: m.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({ name: c.name })
              })
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)('div', {
                          className: o()(E.message, E.error),
                          children: m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE.format({ name: c.name })
                      }),
                      (0, s.jsx)('div', {
                          className: o()(E.message, E.details),
                          children: m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE_DETAILS
                      }),
                      l !== N.ABu.AMAZON_MUSIC
                          ? null
                          : (0, s.jsx)('div', {
                                className: o()(E.message, E.details),
                                children: a.tq
                                    ? m.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE_MOBILE.format({
                                          link: () =>
                                              (0, s.jsx)(u.Anchor, {
                                                  href: h,
                                                  children: h
                                              })
                                      })
                                    : m.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE.format({
                                          link: () =>
                                              (0, s.jsx)(u.Anchor, {
                                                  href: h,
                                                  children: h
                                              })
                                      })
                            })
                  ]
              })),
        (_ || i) &&
            (t = (0, s.jsx)(u.Button, {
                className: E.btn,
                disabled: i,
                onClick: d,
                children: i ? (0, s.jsx)(u.Spinner, { itemClassName: E.spinnerItem }) : m.Z.Messages.DONE
            })),
        (0, s.jsxs)(g.UV, {
            platformType: l,
            children: [n, t]
        })
    );
}
