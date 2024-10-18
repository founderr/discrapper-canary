n.d(t, {
    Z: function () {
        return k;
    }
});
var i = n(735250),
    r = n(470079),
    l = n(120356),
    c = n.n(l),
    s = n(392711),
    o = n(772848),
    a = n(873546),
    C = n(481060),
    d = n(425493),
    u = n(612226),
    p = n(714338),
    A = n(782568),
    h = n(252618),
    E = n(434404),
    f = n(677726),
    v = n(703656),
    Z = n(671533),
    y = n(626135),
    g = n(63063),
    x = n(674588),
    m = n(463571),
    _ = n(887706),
    P = n(132871),
    S = n(147890),
    j = n(981631),
    R = n(420212),
    T = n(689938),
    M = n(433027);
let O = g.Z.getAppsSupportURL(j.BhN.APP_DIRECTORY_HEADER_LEARN_MORE);
function L(e) {
    let { onClose: t } = e,
        n = r.useRef(null);
    return (0, i.jsx)('div', {
        ref: n,
        className: M.closeWrapper,
        children: (0, i.jsx)(C.FocusRingScope, {
            containerRef: n,
            children: (0, i.jsx)('div', {
                className: M.closeContent,
                children: (0, i.jsx)(d.Z, {
                    className: M.closeIcon,
                    closeAction: t,
                    keybind: 'ESC'
                })
            })
        })
    });
}
function N(e) {
    let { onTitleClick: t, showsLearnMoreCta: n, guildId: l, children: s } = e,
        o = (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(f.Z, { title: T.Z.Messages.APP_DIRECTORY }),
                n &&
                    (0, i.jsx)(C.Anchor, {
                        onClick: function () {
                            y.default.track(j.rMx.APP_DIRECTORY_CTA_CLICKED, {
                                cta: 'directory-help-center',
                                current_page: P.ApplicationDirectoryViews.HOME,
                                guild_id: l
                            }),
                                (0, A.Z)(O);
                        },
                        children: T.Z.Messages.LEARN_MORE
                    })
            ]
        });
    return (0, i.jsxs)('div', {
        className: M.header,
        children: [
            null != t
                ? (0, i.jsx)(m.Z, {
                      href: j.Z5c.APPLICATION_DIRECTORY,
                      children: (0, i.jsx)(C.Clickable, {
                          onClick: t,
                          className: c()(M.titleContainer, M.clickable),
                          children: o
                      })
                  })
                : (0, i.jsx)('div', {
                      className: M.titleContainer,
                      children: o
                  }),
            s
        ]
    });
}
function I(e) {
    let t,
        { view: n, onClick: r } = e;
    if (null == n) return null;
    switch (n.type) {
        case P.ApplicationDirectoryViews.HOME:
            t = T.Z.Messages.HOME;
            break;
        case P.ApplicationDirectoryViews.SEARCH:
            t = T.Z.Messages.SEARCH;
            break;
        case P.ApplicationDirectoryViews.APPLICATION:
            var l;
            t = null !== (l = null == n ? void 0 : n.applicationName) && void 0 !== l ? l : T.Z.Messages.BACK;
            break;
        default:
            t = T.Z.Messages.BACK;
    }
    return (0, i.jsxs)(C.Clickable, {
        className: M.back,
        onClick: r,
        children: [
            (0, i.jsx)(Z.Z, {
                direction: Z.Z.Directions.LEFT,
                className: M.backIcon
            }),
            (0, i.jsx)(C.Heading, {
                className: M.backHeader,
                variant: 'heading-sm/semibold',
                children: t
            })
        ]
    });
}
let D = (0, s.debounce)((e) => {
    let { scrollTop: t, scrollOffset: n, scrollHeight: i, location: r, guildId: l, sessionId: c } = e;
    t > 0 &&
        y.default.track(j.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
            scroll_visible_percentile: (t + n) / i,
            guild_id: l,
            location: r,
            directory_session_id: c
        });
}, 200);
function k(e) {
    let { children: t } = e,
        n = r.useRef(null),
        l = (0, _.Z)(),
        s = (0, P.useApplicationDirectoryHistory)((e) => e.guildId),
        d = (0, P.useApplicationDirectoryHistory)((e) => e.entrypoint),
        A = (0, P.useApplicationDirectoryHistory)((e) => e.trackedOpenedFromExternalEntrypoint),
        f = (0, P.getCurrentView)(),
        Z = (0, P.getPreviousView)(),
        g = r.useRef(),
        m = (null == f ? void 0 : f.type) !== P.ApplicationDirectoryViews.HOME,
        O = (null == f ? void 0 : f.type) === P.ApplicationDirectoryViews.APPLICATION ? (null == f ? void 0 : f.applicationId) : void 0;
    (0, h.Tt)({ location: T.Z.Messages.APP_DIRECTORY });
    let k = (null == f ? void 0 : f.type) !== P.ApplicationDirectoryViews.HOME && null != Z;
    r.useEffect(() => {
        !A && null == d && (y.default.track(j.rMx.APP_DIRECTORY_OPENED, { source: P.ApplicationDirectoryEntrypointNames.EXTERNAL }), (0, P.setTrackedOpenedFromExternalEntrypoint)(!0));
    }, [d, A]),
        r.useEffect(() => {
            if (l) return p.Z.setLayout(u.ZP), p.Z.enable(), () => p.Z.disable();
        }, [l]),
        r.useEffect(() => {
            x.CP();
        }, []),
        r.useEffect(() => {
            l && x.g5();
        }, [l]),
        r.useEffect(() => {
            g.current = (0, o.Z)();
        }, [null == f ? void 0 : f.type, O]);
    let H = r.useCallback(() => {
        var e, t;
        (0, v.uL)(null !== (e = null == d ? void 0 : d.pathname) && void 0 !== e ? e : ''), null != d && d.name === P.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS && null != s && E.Z.open(s, null !== (t = d.guildSettingsSection) && void 0 !== t ? t : void 0);
    }, [d, s]);
    return (
        r.useEffect(() => {
            let e = (e) => {
                e.key === R.vn.ESCAPE && (e.stopPropagation(), H());
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [H]),
        (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(C.AdvancedScroller, {
                className: c()(M.directoryContainer, {
                    [M.directoryContainerMobile]: a.tq,
                    [M.directoryContainerTablet]: a.Em
                }),
                ref: n,
                onScroll: () => {
                    var e, t, i;
                    return D({
                        scrollTop: null === (e = n.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop,
                        scrollOffset: null === (t = n.current) || void 0 === t ? void 0 : t.getScrollerState().offsetHeight,
                        scrollHeight: null === (i = n.current) || void 0 === i ? void 0 : i.getScrollerState().scrollHeight,
                        location: null == f ? void 0 : f.type,
                        guildId: s,
                        sessionId: g.current
                    });
                },
                children: (0, i.jsxs)('div', {
                    className: M.content,
                    children: [
                        (0, i.jsx)(N, {
                            onTitleClick: m ? S.goHome : void 0,
                            showsLearnMoreCta: (null == f ? void 0 : f.type) === P.ApplicationDirectoryViews.HOME,
                            guildId: s,
                            children: l ? (0, i.jsx)(L, { onClose: H }) : null
                        }),
                        k &&
                            (0, i.jsx)(I, {
                                view: Z,
                                onClick: () => {
                                    (0, v.op)();
                                }
                            }),
                        t
                    ]
                })
            })
        })
    );
}
