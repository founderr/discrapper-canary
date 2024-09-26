n.d(t, {
    Jh: function () {
        return y;
    },
    Lk: function () {
        return L;
    },
    Xg: function () {
        return b;
    },
    ZP: function () {
        return R;
    },
    c7: function () {
        return C;
    },
    j3: function () {
        return D;
    }
});
var r = n(177593);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(593473),
    u = n(266067),
    c = n(729594),
    d = n(466377),
    _ = n(922770),
    E = n(993365),
    f = n(481060),
    h = n(424602),
    p = n(132871),
    m = n(252618),
    I = n(703656),
    T = n(769654),
    g = n(626135),
    S = n(585483),
    A = n(787025),
    v = n(981631),
    N = n(689938),
    O = n(193310);
function R(e) {
    let { message: t, footer: n, headerClassName: r, showsCloseWindowText: a, spinner: o, onClose: l } = e;
    return (
        (0, m.Tt)({ location: N.Z.Messages.OAUTH2_TITLE }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != l
                    ? (0, i.jsx)(d.ol, {
                          onClick: l,
                          className: O.closeButton
                      })
                    : null,
                (0, i.jsxs)('div', {
                    className: O.wrapper,
                    children: [
                        o ? (0, i.jsx)(_.$, {}) : null,
                        (0, i.jsx)('div', { className: s()(O.header, r) }),
                        (0, i.jsx)(E.x, {
                            variant: 'text-md/normal',
                            className: O.text,
                            children: t
                        }),
                        null != n ? n : null,
                        a
                            ? (0, i.jsx)(E.x, {
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
function C(e) {
    return (0, i.jsx)(R, {
        ...e,
        headerClassName: O.headerSuccess
    });
}
function y(e) {
    let { guild: t, application: n, ...r } = e,
        { onClose: o } = r,
        s = N.Z.Messages.AUTHORIZED_SUCCESS,
        l = a.useCallback(() => {
            if ((null == t ? void 0 : t.id) != null)
                (0, T.X)(null == t ? void 0 : t.id),
                    null == o || o(),
                    g.default.track(v.rMx.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                        application_id: null == n ? void 0 : n.id,
                        guild_id: null == t ? void 0 : t.id
                    });
        }, [o, null == n ? void 0 : n.id, null == t ? void 0 : t.id]),
        u = (0, p.useApplicationDirectoryHistory)((e) => e.entrypoint),
        c = window.location.pathname.startsWith(v.Z5c.APPLICATION_DIRECTORY),
        d = a.useCallback(() => {
            var e;
            if ((null == n ? void 0 : n.id) != null)
                null == o || o(),
                    null != u && (0, I.uL)(null !== (e = u.pathname) && void 0 !== e ? e : ''),
                    setImmediate(() => {
                        S.S.dispatchToLastSubscribed(v.CkL.OPEN_APP_LAUNCHER, { applicationId: n.id }), g.default.track(v.rMx.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, { application_id: n.id });
                    });
        }, [null == n ? void 0 : n.id, o, u]),
        _ = a.useCallback(() => {
            null == o || o(), g.default.track(v.rMx.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: null == n ? void 0 : n.id });
        }, [o, null == n ? void 0 : n.id]),
        m = a.useMemo(() => {
            if (null != n)
                return null != t
                    ? N.Z.Messages.AUTHORIZED_APP_TO_SERVER.format({
                          installedApplicationName: null == n ? void 0 : n.name,
                          guildName: null == t ? void 0 : t.name
                      })
                    : N.Z.Messages.AUTHORIZED_APP.format({ installedApplicationName: null == n ? void 0 : n.name });
            return N.Z.Messages.AUTHORIZED_GENERIC;
        }, [n, t]),
        A = h.zQ.useExperiment({ location: 'OAuth2AuthorizedSuccess' }, { autoTrackExposure: !1 }).enabled,
        R = null != t,
        y = null == t && A && (!c || null != u),
        L = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(E.x, {
                    variant: 'text-sm/normal',
                    className: O.authorizedSuccessSubtext,
                    children: m
                }),
                (null != t || null != o) &&
                    (0, i.jsxs)('div', {
                        className: O.buttonsContainer,
                        children: [
                            R &&
                                (0, i.jsx)(f.Button, {
                                    fullWidth: !0,
                                    color: f.Button.Colors.BRAND,
                                    onClick: l,
                                    className: O.button,
                                    children: (null == t ? void 0 : t.name.length) > 30 ? N.Z.Messages.OAUTH2_GO_TO_SERVER_DEFAULT_CTA : N.Z.Messages.OAUTH2_GO_TO_SERVER_NAME_CTA.format({ guildName: null == t ? void 0 : t.name })
                                }),
                            y &&
                                (0, i.jsx)(f.Button, {
                                    fullWidth: !0,
                                    color: f.Button.Colors.BRAND,
                                    onClick: d,
                                    className: O.button,
                                    children: N.Z.Messages.OAUTH2_OPEN_APP_CTA
                                }),
                            null != o &&
                                (0, i.jsx)(f.Button, {
                                    fullWidth: !0,
                                    color: f.Button.Colors.PRIMARY,
                                    onClick: _,
                                    className: O.button,
                                    children: N.Z.Messages.CLOSE
                                })
                        ]
                    })
            ]
        });
    return (
        a.useEffect(() => {
            g.default.track(v.rMx.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: null == n ? void 0 : n.id });
        }, [null == n ? void 0 : n.id]),
        (0, i.jsx)('div', {
            className: O.authorizedSuccessWrapper,
            children: (0, i.jsx)(C, {
                message: s,
                footer: L,
                ...r
            })
        })
    );
}
function L(e) {
    return (0, i.jsx)(R, {
        ...e,
        headerClassName: O.headerFailure
    });
}
function b() {
    var e, t;
    let n = (0, u.TH)();
    return (0, i.jsx)(A.G, {
        children: (0, i.jsx)(y, {
            guild: null === (e = n.state) || void 0 === e ? void 0 : e.guild,
            application: null === (t = n.state) || void 0 === t ? void 0 : t.application,
            showsCloseWindowText: !0
        })
    });
}
function D(e) {
    var t, n;
    let { location: r } = e;
    a.useEffect(() => {
        if (null == r || '' === r.search) return;
        let e = null != document.referrer && '' !== document.referrer ? c.parse(document.referrer) : null;
        (null == e || e.host !== window.location.host || e.pathname !== v.Z5c.OAUTH2_AUTHORIZE) && (0, I.uL)(v.Z5c.INDEX);
    }, [r]);
    let o = null != r ? (0, l.parse)(r.search) : {},
        s = null !== (n = null !== (t = o.error_description) && void 0 !== t ? t : o.error) && void 0 !== n ? n : N.Z.Messages.OAUTH2_UNKNOWN_ERROR;
    return (0, i.jsx)(A.G, {
        children: (0, i.jsx)(L, {
            message: s,
            showsCloseWindowText: !0
        })
    });
}
