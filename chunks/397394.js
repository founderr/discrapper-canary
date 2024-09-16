n.d(t, {
    Jh: function () {
        return C;
    },
    Lk: function () {
        return y;
    },
    Xg: function () {
        return L;
    },
    ZP: function () {
        return R;
    },
    c7: function () {
        return v;
    },
    j3: function () {
        return D;
    }
}),
    n(177593);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(593473),
    l = n(266067),
    u = n(729594),
    c = n(466377),
    d = n(922770),
    _ = n(993365),
    E = n(481060),
    f = n(424602),
    h = n(132871),
    p = n(252618),
    I = n(703656),
    m = n(769654),
    T = n(626135),
    S = n(585483),
    g = n(787025),
    A = n(981631),
    N = n(689938),
    O = n(193310);
function R(e) {
    let { message: t, footer: n, headerClassName: i, showsCloseWindowText: a, spinner: o, onClose: l } = e;
    return (
        (0, p.Tt)({ location: N.Z.Messages.OAUTH2_TITLE }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != l
                    ? (0, r.jsx)(c.ol, {
                          onClick: l,
                          className: O.closeButton
                      })
                    : null,
                (0, r.jsxs)('div', {
                    className: O.wrapper,
                    children: [
                        o ? (0, r.jsx)(d.$, {}) : null,
                        (0, r.jsx)('div', { className: s()(O.header, i) }),
                        (0, r.jsx)(_.x, {
                            variant: 'text-md/normal',
                            className: O.text,
                            children: t
                        }),
                        null != n ? n : null,
                        a
                            ? (0, r.jsx)(_.x, {
                                  variant: 'text-xs/normal',
                                  color: 'text-muted',
                                  className: O.cta,
                                  children: N.Z.Messages.OAUTH2_MESSAGE_CTA
                              })
                            : null
                    ]
                })
            ]
        })
    );
}
function v(e) {
    return (0, r.jsx)(R, {
        ...e,
        headerClassName: O.headerSuccess
    });
}
function C(e) {
    let { guild: t, application: n, ...a } = e,
        { onClose: s } = a,
        o = N.Z.Messages.AUTHORIZED_SUCCESS,
        l = i.useCallback(() => {
            if ((null == t ? void 0 : t.id) != null)
                (0, m.X)(null == t ? void 0 : t.id),
                    null == s || s(),
                    T.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                        application_id: null == n ? void 0 : n.id,
                        guild_id: null == t ? void 0 : t.id
                    });
        }, [s, null == n ? void 0 : n.id, null == t ? void 0 : t.id]),
        u = (0, h.useApplicationDirectoryHistory)((e) => e.entrypoint),
        c = window.location.pathname.startsWith(A.Z5c.APPLICATION_DIRECTORY),
        d = i.useCallback(() => {
            var e;
            if ((null == n ? void 0 : n.id) != null)
                null == s || s(),
                    null != u && (0, I.uL)(null !== (e = u.pathname) && void 0 !== e ? e : ''),
                    setImmediate(() => {
                        S.S.dispatchToLastSubscribed(A.CkL.OPEN_APP_LAUNCHER, { applicationId: n.id }), T.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, { application_id: n.id });
                    });
        }, [null == n ? void 0 : n.id, s, u]),
        p = i.useCallback(() => {
            null == s || s(), T.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: null == n ? void 0 : n.id });
        }, [s, null == n ? void 0 : n.id]),
        g = i.useMemo(() => {
            if (null != n)
                return null != t
                    ? N.Z.Messages.AUTHORIZED_APP_TO_SERVER.format({
                          installedApplicationName: null == n ? void 0 : n.name,
                          guildName: null == t ? void 0 : t.name
                      })
                    : N.Z.Messages.AUTHORIZED_APP.format({ installedApplicationName: null == n ? void 0 : n.name });
            return N.Z.Messages.AUTHORIZED_GENERIC;
        }, [n, t]),
        R = f.zQ.useExperiment({ location: 'OAuth2AuthorizedSuccess' }, { autoTrackExposure: !1 }).enabled,
        C = null != t,
        y = null == t && R && (!c || null != u),
        L = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(_.x, {
                    variant: 'text-sm/normal',
                    className: O.authorizedSuccessSubtext,
                    children: g
                }),
                (null != t || null != s) &&
                    (0, r.jsxs)('div', {
                        className: O.buttonsContainer,
                        children: [
                            C &&
                                (0, r.jsx)(E.Button, {
                                    fullWidth: !0,
                                    color: E.Button.Colors.BRAND,
                                    onClick: l,
                                    className: O.button,
                                    children: (null == t ? void 0 : t.name.length) > 30 ? N.Z.Messages.OAUTH2_GO_TO_SERVER_DEFAULT_CTA : N.Z.Messages.OAUTH2_GO_TO_SERVER_NAME_CTA.format({ guildName: null == t ? void 0 : t.name })
                                }),
                            y &&
                                (0, r.jsx)(E.Button, {
                                    fullWidth: !0,
                                    color: E.Button.Colors.BRAND,
                                    onClick: d,
                                    className: O.button,
                                    children: N.Z.Messages.OAUTH2_OPEN_APP_CTA
                                }),
                            null != s &&
                                (0, r.jsx)(E.Button, {
                                    fullWidth: !0,
                                    color: E.Button.Colors.PRIMARY,
                                    onClick: p,
                                    className: O.button,
                                    children: N.Z.Messages.CLOSE
                                })
                        ]
                    })
            ]
        });
    return (
        i.useEffect(() => {
            T.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: null == n ? void 0 : n.id });
        }, [null == n ? void 0 : n.id]),
        (0, r.jsx)('div', {
            className: O.authorizedSuccessWrapper,
            children: (0, r.jsx)(v, {
                message: o,
                footer: L,
                ...a
            })
        })
    );
}
function y(e) {
    return (0, r.jsx)(R, {
        ...e,
        headerClassName: O.headerFailure
    });
}
function L() {
    var e, t;
    let n = (0, l.TH)();
    return (0, r.jsx)(g.G, {
        children: (0, r.jsx)(C, {
            guild: null === (e = n.state) || void 0 === e ? void 0 : e.guild,
            application: null === (t = n.state) || void 0 === t ? void 0 : t.application,
            showsCloseWindowText: !0
        })
    });
}
function D(e) {
    var t, n;
    let { location: a } = e;
    i.useEffect(() => {
        if (null == a || '' === a.search) return;
        let e = null != document.referrer && '' !== document.referrer ? u.parse(document.referrer) : null;
        (null == e || e.host !== window.location.host || e.pathname !== A.Z5c.OAUTH2_AUTHORIZE) && (0, I.uL)(A.Z5c.INDEX);
    }, [a]);
    let s = null != a ? (0, o.parse)(a.search) : {},
        l = null !== (n = null !== (t = s.error_description) && void 0 !== t ? t : s.error) && void 0 !== n ? n : N.Z.Messages.OAUTH2_UNKNOWN_ERROR;
    return (0, r.jsx)(g.G, {
        children: (0, r.jsx)(y, {
            message: l,
            showsCloseWindowText: !0
        })
    });
}
