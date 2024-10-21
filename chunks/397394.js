n.d(t, {
    Jh: function () {
        return y;
    },
    Lk: function () {
        return M;
    },
    Xg: function () {
        return P;
    },
    ZP: function () {
        return L;
    },
    _Z: function () {
        return b;
    },
    c7: function () {
        return D;
    },
    j3: function () {
        return U;
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
    c = n(442837),
    d = n(922770),
    _ = n(993365),
    E = n(481060),
    f = n(424602),
    h = n(132871),
    p = n(252618),
    I = n(703656),
    m = n(769654),
    T = n(592125),
    S = n(496675),
    g = n(944486),
    A = n(626135),
    N = n(585483),
    R = n(787025),
    O = n(981631),
    v = n(689938),
    C = n(193310);
function L(e) {
    let { message: t, footer: n, headerClassName: i, showsCloseWindowText: a, spinner: o } = e;
    return (
        (0, p.Tt)({ location: v.Z.Messages.OAUTH2_TITLE }),
        (0, r.jsxs)('div', {
            className: C.wrapper,
            children: [
                o ? (0, r.jsx)(d.$, {}) : null,
                (0, r.jsx)('div', { className: s()(C.header, i) }),
                (0, r.jsx)(E.Heading, {
                    variant: 'heading-lg/bold',
                    className: C.text,
                    children: t
                }),
                null != n ? n : null,
                a
                    ? (0, r.jsx)(_.x, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: C.cta,
                          children: v.Z.Messages.OAUTH2_MESSAGE_CTA
                      })
                    : null
            ]
        })
    );
}
function D(e) {
    return (0, r.jsx)(L, {
        ...e,
        headerClassName: C.headerSuccess
    });
}
function y(e) {
    let { guild: t, application: n, ...a } = e,
        s = v.Z.Messages.AUTHORIZED_SUCCESS;
    i.useEffect(() => {
        A.default.track(O.rMx.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: null == n ? void 0 : n.id });
    }, [null == n ? void 0 : n.id]);
    let o = i.useMemo(() => {
            if (null != n)
                return null != t
                    ? v.Z.Messages.AUTHORIZED_APP_TO_SERVER.format({
                          installedApplicationName: null == n ? void 0 : n.name,
                          guildName: null == t ? void 0 : t.name
                      })
                    : v.Z.Messages.AUTHORIZED_APP.format({ installedApplicationName: null == n ? void 0 : n.name });
            return v.Z.Messages.AUTHORIZED_GENERIC;
        }, [n, t]),
        l = (0, r.jsx)(_.x, {
            variant: 'text-md/normal',
            className: C.authorizedSuccessSubtext,
            children: o
        });
    return (0, r.jsx)('div', {
        className: C.authorizedSuccessWrapper,
        children: (0, r.jsx)(D, {
            message: s,
            footer: l,
            ...a
        })
    });
}
function b(e) {
    let { guild: t, application: n, ...a } = e,
        { onClose: s } = a,
        o = i.useCallback(() => {
            if ((null == t ? void 0 : t.id) != null)
                (0, m.X)(null == t ? void 0 : t.id),
                    null == s || s(),
                    A.default.track(O.rMx.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                        application_id: null == n ? void 0 : n.id,
                        guild_id: null == t ? void 0 : t.id
                    });
        }, [s, null == n ? void 0 : n.id, null == t ? void 0 : t.id]),
        l = (0, h.useApplicationDirectoryHistory)((e) => e.entrypoint),
        u = i.useCallback(() => {
            null == s || s(), A.default.track(O.rMx.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: null == n ? void 0 : n.id });
        }, [s, null == n ? void 0 : n.id]),
        d = window.location.pathname.startsWith(O.Z5c.APPLICATION_DIRECTORY),
        _ = i.useCallback(() => {
            var e;
            if ((null == n ? void 0 : n.id) != null)
                null == s || s(),
                    null != l && (0, I.uL)(null !== (e = l.pathname) && void 0 !== e ? e : ''),
                    setImmediate(() => {
                        N.S.dispatchToLastSubscribed(O.CkL.OPEN_APP_LAUNCHER, { applicationId: n.id }), A.default.track(O.rMx.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, { application_id: n.id });
                    });
        }, [null == n ? void 0 : n.id, s, l]),
        p = f.zQ.useExperiment({ location: 'OAuth2AuthorizedSuccess' }, { autoTrackExposure: !1 }).enabled,
        R = (0, c.e7)([g.Z, T.Z], () => T.Z.getChannel(g.Z.getChannelId())),
        L = (0, c.e7)([S.Z], () => S.Z.can(O.Plq.SEND_MESSAGES, R)),
        D = null != t,
        y = null == t && L && p && (!d || null != l);
    return null != t || null != s
        ? (0, r.jsxs)('div', {
              className: C.buttonsContainer,
              children: [
                  null != s
                      ? D || y
                          ? (0, r.jsx)(E.Button, {
                                size: E.Button.Sizes.SMALL,
                                look: E.Button.Looks.LINK,
                                color: E.Button.Colors.PRIMARY,
                                onClick: u,
                                children: v.Z.Messages.CLOSE
                            })
                          : (0, r.jsx)(E.Button, {
                                fullWidth: !0,
                                color: E.Button.Colors.PRIMARY,
                                onClick: u,
                                children: v.Z.Messages.CLOSE
                            })
                      : void 0,
                  D &&
                      (0, r.jsx)(E.Button, {
                          color: E.Button.Colors.BRAND,
                          onClick: o,
                          children: (null == t ? void 0 : t.name.length) > 30 ? v.Z.Messages.OAUTH2_GO_TO_SERVER_DEFAULT_CTA : v.Z.Messages.OAUTH2_GO_TO_SERVER_NAME_CTA.format({ guildName: null == t ? void 0 : t.name })
                      }),
                  y &&
                      (0, r.jsx)(E.Button, {
                          color: E.Button.Colors.BRAND,
                          onClick: _,
                          children: v.Z.Messages.OAUTH2_OPEN_APP_CTA
                      })
              ]
          })
        : null;
}
function M(e) {
    return (0, r.jsx)(L, {
        ...e,
        headerClassName: C.headerFailure
    });
}
function P() {
    var e, t;
    let n = (0, l.TH)();
    return (0, r.jsx)(R.G, {
        children: (0, r.jsx)(y, {
            guild: null === (e = n.state) || void 0 === e ? void 0 : e.guild,
            application: null === (t = n.state) || void 0 === t ? void 0 : t.application,
            showsCloseWindowText: !0
        })
    });
}
function U(e) {
    var t, n;
    let { location: a } = e;
    i.useEffect(() => {
        if (null == a || '' === a.search) return;
        let e = null != document.referrer && '' !== document.referrer ? u.parse(document.referrer) : null;
        (null == e || e.host !== window.location.host || e.pathname !== O.Z5c.OAUTH2_AUTHORIZE) && (0, I.uL)(O.Z5c.INDEX);
    }, [a]);
    let s = null != a ? (0, o.parse)(a.search) : {},
        l = null !== (n = null !== (t = s.error_description) && void 0 !== t ? t : s.error) && void 0 !== n ? n : v.Z.Messages.OAUTH2_UNKNOWN_ERROR;
    return (0, r.jsx)(R.G, {
        children: (0, r.jsx)(M, {
            message: l,
            showsCloseWindowText: !0
        })
    });
}
