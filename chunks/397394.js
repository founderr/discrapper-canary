n.d(t, {
    Jh: function () {
        return O;
    },
    Lk: function () {
        return L;
    },
    Xg: function () {
        return x;
    },
    ZP: function () {
        return C;
    },
    _Z: function () {
        return D;
    },
    c7: function () {
        return R;
    },
    j3: function () {
        return w;
    }
}),
    n(177593);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(593473),
    l = n(512969),
    u = n(442837),
    c = n(922770),
    d = n(993365),
    f = n(481060),
    _ = n(132871),
    p = n(252618),
    h = n(703656),
    m = n(769654),
    g = n(592125),
    E = n(496675),
    v = n(944486),
    I = n(626135),
    T = n(585483),
    b = n(591759),
    S = n(787025),
    y = n(981631),
    A = n(388032),
    N = n(553410);
function C(e) {
    let { message: t, footer: n, headerClassName: i, showsCloseWindowText: a, spinner: o } = e;
    return (
        (0, p.Tt)({ location: A.intl.string(A.t['3S249/']) }),
        (0, r.jsxs)('div', {
            className: N.wrapper,
            children: [
                o ? (0, r.jsx)(c.$, {}) : null,
                (0, r.jsx)('div', { className: s()(N.header, i) }),
                (0, r.jsx)(f.Heading, {
                    variant: 'heading-lg/bold',
                    className: N.text,
                    children: t
                }),
                null != n ? n : null,
                a
                    ? (0, r.jsx)(d.x, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: N.cta,
                          children: A.intl.string(A.t['k7J/w8'])
                      })
                    : null
            ]
        })
    );
}
function R(e) {
    return (0, r.jsx)(C, {
        ...e,
        headerClassName: N.headerSuccess
    });
}
function O(e) {
    let { guild: t, application: n, ...a } = e,
        s = A.intl.string(A.t.se5gLi);
    i.useEffect(() => {
        I.default.track(y.rMx.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: null == n ? void 0 : n.id });
    }, [null == n ? void 0 : n.id]);
    let o = i.useMemo(() => {
            if (null != n)
                return null != t
                    ? A.intl.format(A.t.IlF6IS, {
                          installedApplicationName: null == n ? void 0 : n.name,
                          guildName: null == t ? void 0 : t.name
                      })
                    : A.intl.format(A.t.vTVC5e, { installedApplicationName: null == n ? void 0 : n.name });
            return A.intl.string(A.t['Dp+rgI']);
        }, [n, t]),
        l = (0, r.jsx)(d.x, {
            variant: 'text-md/normal',
            className: N.authorizedSuccessSubtext,
            children: o
        });
    return (0, r.jsx)('div', {
        className: N.authorizedSuccessWrapper,
        children: (0, r.jsx)(R, {
            message: s,
            footer: l,
            ...a
        })
    });
}
function D(e) {
    let { guild: t, application: n, ...a } = e,
        { onClose: s } = a,
        o = i.useCallback(() => {
            if ((null == t ? void 0 : t.id) != null)
                (0, m.X)(null == t ? void 0 : t.id),
                    null == s || s(),
                    I.default.track(y.rMx.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                        application_id: null == n ? void 0 : n.id,
                        guild_id: null == t ? void 0 : t.id
                    });
        }, [s, null == n ? void 0 : n.id, null == t ? void 0 : t.id]),
        l = (0, _.useApplicationDirectoryHistory)((e) => e.entrypoint),
        c = i.useCallback(() => {
            null == s || s(), I.default.track(y.rMx.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: null == n ? void 0 : n.id });
        }, [s, null == n ? void 0 : n.id]),
        d = window.location.pathname.startsWith(y.Z5c.APPLICATION_DIRECTORY),
        p = i.useCallback(() => {
            var e;
            if ((null == n ? void 0 : n.id) != null)
                null == s || s(),
                    null != l && (0, h.uL)(null !== (e = l.pathname) && void 0 !== e ? e : ''),
                    setImmediate(() => {
                        T.S.dispatchToLastSubscribed(y.CkL.OPEN_APP_LAUNCHER, { applicationId: n.id }), I.default.track(y.rMx.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, { application_id: n.id });
                    });
        }, [null == n ? void 0 : n.id, s, l]),
        b = (0, u.e7)([v.Z, g.Z], () => g.Z.getChannel(v.Z.getChannelId())),
        S = (0, u.e7)([E.Z], () => E.Z.can(y.Plq.SEND_MESSAGES, b)),
        C = null != t,
        R = null == t && S && (!d || null != l);
    return null != t || null != s
        ? (0, r.jsxs)('div', {
              className: N.buttonsContainer,
              children: [
                  null != s
                      ? C || R
                          ? (0, r.jsx)(f.Button, {
                                size: f.Button.Sizes.SMALL,
                                look: f.Button.Looks.LINK,
                                color: f.Button.Colors.PRIMARY,
                                onClick: c,
                                children: A.intl.string(A.t.cpT0Cg)
                            })
                          : (0, r.jsx)(f.Button, {
                                fullWidth: !0,
                                color: f.Button.Colors.PRIMARY,
                                onClick: c,
                                children: A.intl.string(A.t.cpT0Cg)
                            })
                      : void 0,
                  C &&
                      (0, r.jsx)(f.Button, {
                          color: f.Button.Colors.BRAND,
                          onClick: o,
                          children: (null == t ? void 0 : t.name.length) > 30 ? A.intl.string(A.t.M35zFB) : A.intl.format(A.t.UdYYPz, { guildName: null == t ? void 0 : t.name })
                      }),
                  R &&
                      (0, r.jsx)(f.Button, {
                          color: f.Button.Colors.BRAND,
                          onClick: p,
                          children: A.intl.string(A.t['0cCDKC'])
                      })
              ]
          })
        : null;
}
function L(e) {
    return (0, r.jsx)(C, {
        ...e,
        headerClassName: N.headerFailure
    });
}
function x() {
    var e, t;
    let n = (0, l.TH)();
    return (0, r.jsx)(S.G, {
        children: (0, r.jsx)(O, {
            guild: null === (e = n.state) || void 0 === e ? void 0 : e.guild,
            application: null === (t = n.state) || void 0 === t ? void 0 : t.application,
            showsCloseWindowText: !0
        })
    });
}
function w(e) {
    var t, n;
    let { location: a } = e;
    i.useEffect(() => {
        if (null == a || '' === a.search) return;
        let e = null != document.referrer && '' !== document.referrer ? b.Z.toURLSafe(document.referrer) : null;
        (null == e || e.host !== window.location.host || e.pathname !== y.Z5c.OAUTH2_AUTHORIZE) && (0, h.uL)(y.Z5c.INDEX);
    }, [a]);
    let s = null != a ? (0, o.parse)(a.search) : {},
        l = null !== (n = null !== (t = s.error_description) && void 0 !== t ? t : s.error) && void 0 !== n ? n : A.intl.string(A.t['mqn87+']);
    return (0, r.jsx)(S.G, {
        children: (0, r.jsx)(L, {
            message: l,
            showsCloseWindowText: !0
        })
    });
}
