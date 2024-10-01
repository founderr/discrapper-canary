n.d(t, {
    Jh: function () {
        return C;
    },
    Lk: function () {
        return L;
    },
    Xg: function () {
        return b;
    },
    ZP: function () {
        return O;
    },
    _Z: function () {
        return y;
    },
    c7: function () {
        return R;
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
    d = n(922770),
    _ = n(993365),
    E = n(481060),
    f = n(424602),
    h = n(132871),
    p = n(252618),
    m = n(703656),
    I = n(769654),
    T = n(626135),
    g = n(585483),
    S = n(787025),
    A = n(981631),
    v = n(689938),
    N = n(193310);
function O(e) {
    let { message: t, footer: n, headerClassName: r, showsCloseWindowText: a, spinner: o } = e;
    return (
        (0, p.Tt)({ location: v.Z.Messages.OAUTH2_TITLE }),
        (0, i.jsxs)('div', {
            className: N.wrapper,
            children: [
                o ? (0, i.jsx)(d.$, {}) : null,
                (0, i.jsx)('div', { className: s()(N.header, r) }),
                (0, i.jsx)(E.Heading, {
                    variant: 'heading-lg/bold',
                    className: N.text,
                    children: t
                }),
                null != n ? n : null,
                a
                    ? (0, i.jsx)(_.x, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: N.cta,
                          children: v.Z.Messages.OAUTH2_MESSAGE_CTA
                      })
                    : null
            ]
        })
    );
}
function R(e) {
    return (0, i.jsx)(O, {
        ...e,
        headerClassName: N.headerSuccess
    });
}
function C(e) {
    let { guild: t, application: n, ...r } = e,
        o = v.Z.Messages.AUTHORIZED_SUCCESS;
    a.useEffect(() => {
        T.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: null == n ? void 0 : n.id });
    }, [null == n ? void 0 : n.id]);
    let s = a.useMemo(() => {
            if (null != n)
                return null != t
                    ? v.Z.Messages.AUTHORIZED_APP_TO_SERVER.format({
                          installedApplicationName: null == n ? void 0 : n.name,
                          guildName: null == t ? void 0 : t.name
                      })
                    : v.Z.Messages.AUTHORIZED_APP.format({ installedApplicationName: null == n ? void 0 : n.name });
            return v.Z.Messages.AUTHORIZED_GENERIC;
        }, [n, t]),
        l = (0, i.jsx)(_.x, {
            variant: 'text-md/normal',
            className: N.authorizedSuccessSubtext,
            children: s
        });
    return (0, i.jsx)('div', {
        className: N.authorizedSuccessWrapper,
        children: (0, i.jsx)(R, {
            message: o,
            footer: l,
            ...r
        })
    });
}
function y(e) {
    let { guild: t, application: n, ...r } = e,
        { onClose: o } = r,
        s = a.useCallback(() => {
            if ((null == t ? void 0 : t.id) != null)
                (0, I.X)(null == t ? void 0 : t.id),
                    null == o || o(),
                    T.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                        application_id: null == n ? void 0 : n.id,
                        guild_id: null == t ? void 0 : t.id
                    });
        }, [o, null == n ? void 0 : n.id, null == t ? void 0 : t.id]),
        l = (0, h.useApplicationDirectoryHistory)((e) => e.entrypoint),
        u = a.useCallback(() => {
            null == o || o(), T.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: null == n ? void 0 : n.id });
        }, [o, null == n ? void 0 : n.id]),
        c = window.location.pathname.startsWith(A.Z5c.APPLICATION_DIRECTORY),
        d = a.useCallback(() => {
            var e;
            if ((null == n ? void 0 : n.id) != null)
                null == o || o(),
                    null != l && (0, m.uL)(null !== (e = l.pathname) && void 0 !== e ? e : ''),
                    setImmediate(() => {
                        g.S.dispatchToLastSubscribed(A.CkL.OPEN_APP_LAUNCHER, { applicationId: n.id }), T.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, { application_id: n.id });
                    });
        }, [null == n ? void 0 : n.id, o, l]),
        _ = f.zQ.useExperiment({ location: 'OAuth2AuthorizedSuccess' }, { autoTrackExposure: !1 }).enabled,
        p = null != t,
        S = null == t && _ && (!c || null != l);
    return null != t || null != o
        ? (0, i.jsxs)('div', {
              className: N.buttonsContainer,
              children: [
                  null != o
                      ? p || S
                          ? (0, i.jsx)(E.Button, {
                                size: E.Button.Sizes.SMALL,
                                look: E.Button.Looks.LINK,
                                color: E.Button.Colors.PRIMARY,
                                onClick: u,
                                children: v.Z.Messages.CLOSE
                            })
                          : (0, i.jsx)(E.Button, {
                                fullWidth: !0,
                                color: E.Button.Colors.PRIMARY,
                                onClick: u,
                                children: v.Z.Messages.CLOSE
                            })
                      : void 0,
                  p &&
                      (0, i.jsx)(E.Button, {
                          color: E.Button.Colors.BRAND,
                          onClick: s,
                          children: (null == t ? void 0 : t.name.length) > 30 ? v.Z.Messages.OAUTH2_GO_TO_SERVER_DEFAULT_CTA : v.Z.Messages.OAUTH2_GO_TO_SERVER_NAME_CTA.format({ guildName: null == t ? void 0 : t.name })
                      }),
                  S &&
                      (0, i.jsx)(E.Button, {
                          color: E.Button.Colors.BRAND,
                          onClick: d,
                          children: v.Z.Messages.OAUTH2_OPEN_APP_CTA
                      })
              ]
          })
        : null;
}
function L(e) {
    return (0, i.jsx)(O, {
        ...e,
        headerClassName: N.headerFailure
    });
}
function b() {
    var e, t;
    let n = (0, u.TH)();
    return (0, i.jsx)(S.G, {
        children: (0, i.jsx)(C, {
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
        (null == e || e.host !== window.location.host || e.pathname !== A.Z5c.OAUTH2_AUTHORIZE) && (0, m.uL)(A.Z5c.INDEX);
    }, [r]);
    let o = null != r ? (0, l.parse)(r.search) : {},
        s = null !== (n = null !== (t = o.error_description) && void 0 !== t ? t : o.error) && void 0 !== n ? n : v.Z.Messages.OAUTH2_UNKNOWN_ERROR;
    return (0, i.jsx)(S.G, {
        children: (0, i.jsx)(L, {
            message: s,
            showsCloseWindowText: !0
        })
    });
}
