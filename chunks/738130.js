n.d(t, {
    Z: function () {
        return j;
    }
});
var r = n(735250),
    i = n(470079),
    o = n(120356),
    l = n.n(o),
    c = n(392711),
    s = n(772848),
    a = n(873546),
    u = n(481060),
    d = n(425493),
    C = n(612226),
    p = n(714338),
    A = n(782568),
    h = n(252618),
    f = n(434404),
    E = n(677726),
    I = n(703656),
    _ = n(671533),
    T = n(626135),
    g = n(63063),
    L = n(674588),
    m = n(463571),
    R = n(887706),
    v = n(132871),
    O = n(147890),
    P = n(981631),
    N = n(420212),
    Z = n(689938),
    S = n(433027);
let y = g.Z.getAppsSupportURL(P.BhN.APP_DIRECTORY_HEADER_LEARN_MORE);
function x(e) {
    let { onClose: t } = e,
        n = i.useRef(null);
    return (0, r.jsx)('div', {
        ref: n,
        className: S.closeWrapper,
        children: (0, r.jsx)(u.FocusRingScope, {
            containerRef: n,
            children: (0, r.jsx)('div', {
                className: S.closeContent,
                children: (0, r.jsx)(d.Z, {
                    className: S.closeIcon,
                    closeAction: t,
                    keybind: 'ESC'
                })
            })
        })
    });
}
function M(e) {
    let { onTitleClick: t, showsLearnMoreCta: n, guildId: o, children: c } = e,
        s = (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(E.Z, { title: Z.Z.Messages.APP_DIRECTORY }),
                n &&
                    (0, r.jsx)(u.Anchor, {
                        onClick: function () {
                            T.default.track(P.rMx.APP_DIRECTORY_CTA_CLICKED, {
                                cta: 'directory-help-center',
                                current_page: v.ApplicationDirectoryViews.HOME,
                                guild_id: o
                            }),
                                (0, A.Z)(y);
                        },
                        children: Z.Z.Messages.LEARN_MORE
                    })
            ]
        });
    return (0, r.jsxs)('div', {
        className: S.header,
        children: [
            null != t
                ? (0, r.jsx)(m.Z, {
                      href: P.Z5c.APPLICATION_DIRECTORY,
                      children: (0, r.jsx)(u.Clickable, {
                          onClick: t,
                          className: l()(S.titleContainer, S.clickable),
                          children: s
                      })
                  })
                : (0, r.jsx)('div', {
                      className: S.titleContainer,
                      children: s
                  }),
            c
        ]
    });
}
function D(e) {
    let t,
        { view: n, onClick: i } = e;
    if (null == n) return null;
    switch (n.type) {
        case v.ApplicationDirectoryViews.HOME:
            t = Z.Z.Messages.HOME;
            break;
        case v.ApplicationDirectoryViews.SEARCH:
            t = Z.Z.Messages.SEARCH;
            break;
        case v.ApplicationDirectoryViews.APPLICATION:
            var o;
            t = null !== (o = null == n ? void 0 : n.applicationName) && void 0 !== o ? o : Z.Z.Messages.BACK;
            break;
        default:
            t = Z.Z.Messages.BACK;
    }
    return (0, r.jsxs)(u.Clickable, {
        className: S.back,
        onClick: i,
        children: [
            (0, r.jsx)(_.Z, {
                direction: _.Z.Directions.LEFT,
                className: S.backIcon
            }),
            (0, r.jsx)(u.Heading, {
                className: S.backHeader,
                variant: 'heading-sm/semibold',
                children: t
            })
        ]
    });
}
let w = (0, c.debounce)((e) => {
    let { scrollTop: t, scrollOffset: n, scrollHeight: r, location: i, guildId: o, sessionId: l } = e;
    t > 0 &&
        T.default.track(P.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
            scroll_visible_percentile: (t + n) / r,
            guild_id: o,
            location: i,
            directory_session_id: l
        });
}, 200);
function j(e) {
    let { children: t } = e,
        n = i.useRef(null),
        o = (0, R.Z)(),
        c = (0, v.useApplicationDirectoryHistory)((e) => e.guildId),
        d = (0, v.useApplicationDirectoryHistory)((e) => e.entrypoint),
        A = (0, v.useApplicationDirectoryHistory)((e) => e.trackedOpenedFromExternalEntrypoint),
        E = (0, v.getCurrentView)(),
        _ = (0, v.getPreviousView)(),
        g = i.useRef(),
        m = (null == E ? void 0 : E.type) !== v.ApplicationDirectoryViews.HOME,
        y = (null == E ? void 0 : E.type) === v.ApplicationDirectoryViews.APPLICATION ? (null == E ? void 0 : E.applicationId) : void 0;
    (0, h.Tt)({ location: Z.Z.Messages.APP_DIRECTORY });
    let j = (null == E ? void 0 : E.type) !== v.ApplicationDirectoryViews.HOME && null != _;
    i.useEffect(() => {
        !A && null == d && (T.default.track(P.rMx.APP_DIRECTORY_OPENED, { source: v.ApplicationDirectoryEntrypointNames.EXTERNAL }), (0, v.setTrackedOpenedFromExternalEntrypoint)(!0));
    }, [d, A]),
        i.useEffect(() => {
            if (o) return p.Z.setLayout(C.ZP), p.Z.enable(), () => p.Z.disable();
        }, [o]),
        i.useEffect(() => {
            L.CP();
        }, []),
        i.useEffect(() => {
            o && L.g5();
        }, [o]),
        i.useEffect(() => {
            g.current = (0, s.Z)();
        }, [null == E ? void 0 : E.type, y]);
    let U = i.useCallback(() => {
        var e, t;
        (0, I.uL)(null !== (e = null == d ? void 0 : d.pathname) && void 0 !== e ? e : ''), null != d && d.name === v.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS && null != c && f.Z.open(c, null !== (t = d.guildSettingsSection) && void 0 !== t ? t : void 0);
    }, [d, c]);
    return (
        i.useEffect(() => {
            let e = (e) => {
                e.key === N.vn.ESCAPE && (e.stopPropagation(), U());
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [U]),
        (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(u.AdvancedScroller, {
                className: l()(S.directoryContainer, {
                    [S.directoryContainerMobile]: a.tq,
                    [S.directoryContainerTablet]: a.Em
                }),
                ref: n,
                onScroll: () => {
                    var e, t, r;
                    return w({
                        scrollTop: null === (e = n.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop,
                        scrollOffset: null === (t = n.current) || void 0 === t ? void 0 : t.getScrollerState().offsetHeight,
                        scrollHeight: null === (r = n.current) || void 0 === r ? void 0 : r.getScrollerState().scrollHeight,
                        location: null == E ? void 0 : E.type,
                        guildId: c,
                        sessionId: g.current
                    });
                },
                children: (0, r.jsxs)('div', {
                    className: S.content,
                    children: [
                        (0, r.jsx)(M, {
                            onTitleClick: m ? O.goHome : void 0,
                            showsLearnMoreCta: (null == E ? void 0 : E.type) === v.ApplicationDirectoryViews.HOME,
                            guildId: c,
                            children: o ? (0, r.jsx)(x, { onClose: U }) : null
                        }),
                        j &&
                            (0, r.jsx)(D, {
                                view: _,
                                onClick: () => {
                                    (0, I.op)();
                                }
                            }),
                        t
                    ]
                })
            })
        })
    );
}
