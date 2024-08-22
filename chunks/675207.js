t.r(n),
    t.d(n, {
        AccountConnectionResult: function () {
            return h;
        },
        default: function () {
            return v;
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
    l = t(120356),
    o = t.n(l),
    i = t(266067),
    a = t(873546),
    c = t(481060),
    u = t(457330),
    d = t(726542),
    f = t(536285),
    C = t(656649),
    p = t(981631),
    g = t(689938),
    N = t(934484);
let m = null != window.opener,
    E = 'https://dis.gd/Amazon-Music-Connection',
    _ = (e) => new URLSearchParams(e.search);
function v() {
    var e;
    let n = (0, i.k6)(),
        t = _((0, i.TH)()),
        l = t.get('code'),
        o = t.get('oauth_verifier'),
        a = null !== (e = t.get('state')) && void 0 !== e ? e : '',
        c = t.get('loading'),
        { type: g } = (0, i.UO)(),
        N = (0, C.vJ)(g),
        E = null == o ? (null != l ? l : '') : o,
        [v, A] = r.useState(!0);
    return (r.useEffect(() => {
        let e;
        if (null != c) return;
        for (let n of t.keys()) {
            if (!!n.startsWith('openid.')) null == e && (e = {}), (e[n] = t.get(n));
        }
        let s = (e) => {
                let { status: t, body: s } = e;
                if (null != o) {
                    if (null == s ? void 0 : s.redirect) return n.replace(s.redirect);
                    [200, 204].includes(t) && (n.replace(p.Z5c.CONNECTIONS_SUCCESS(o)), m && window.close()), A(!1);
                }
            },
            r = {
                code: E,
                openid_params: e,
                state: a
            },
            l = (e) => {
                null != o && d.Z.isSupported(o) && u.Z.callback(o, r, e).then(s, s);
            };
        if (m) {
            l(!1);
            return;
        }
        let o = (0, C.vJ)(g);
        f.default
            .request(p.Etm.CONNECTIONS_CALLBACK, {
                ...r,
                providerType: o
            })
            .then(s, (e) => l('RPCError' !== e.name))
            .then(() => f.default.disconnect());
    }, [E, n, c, g, t, a]),
    null != N && d.Z.isSupported(N))
        ? (0, s.jsx)(h, {
              platformType: N,
              verifying: v
          })
        : null;
}
function h(e) {
    let n,
        t,
        { verifying: l, platformType: i } = e,
        u = d.Z.get(i),
        f = r.useCallback(() => {
            window.close();
        }, []);
    return (
        (n = l
            ? (0, s.jsx)('div', {
                  className: N.message,
                  children: g.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({ name: u.name })
              })
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)('div', {
                          className: o()(N.message, N.error),
                          children: g.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE.format({ name: u.name })
                      }),
                      (0, s.jsx)('div', {
                          className: o()(N.message, N.details),
                          children: g.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE_DETAILS
                      }),
                      i !== p.ABu.AMAZON_MUSIC
                          ? null
                          : (0, s.jsx)('div', {
                                className: o()(N.message, N.details),
                                children: a.tq
                                    ? g.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE_MOBILE.format({
                                          link: () =>
                                              (0, s.jsx)(c.Anchor, {
                                                  href: E,
                                                  children: E
                                              })
                                      })
                                    : g.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE.format({
                                          link: () =>
                                              (0, s.jsx)(c.Anchor, {
                                                  href: E,
                                                  children: E
                                              })
                                      })
                            })
                  ]
              })),
        (m || l) &&
            (t = (0, s.jsx)(c.Button, {
                className: N.btn,
                disabled: l,
                onClick: f,
                children: l ? (0, s.jsx)(c.Spinner, { itemClassName: N.spinnerItem }) : g.Z.Messages.DONE
            })),
        (0, s.jsxs)(C.UV, {
            platformType: i,
            children: [n, t]
        })
    );
}
