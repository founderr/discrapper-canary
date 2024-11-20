n.d(t, {
    Z: function () {
        return H;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    c = n.n(l),
    s = n(392711),
    o = n(772848),
    a = n(873546),
    C = n(481060),
    d = n(425493),
    u = n(612226),
    p = n(714338),
    h = n(782568),
    A = n(252618),
    f = n(434404),
    E = n(677726),
    v = n(703656),
    y = n(671533),
    g = n(626135),
    Z = n(63063),
    x = n(674588),
    m = n(463571),
    S = n(887706),
    j = n(132871),
    P = n(147890),
    T = n(981631),
    _ = n(420212),
    L = n(388032),
    N = n(433027);
let k = Z.Z.getAppsSupportURL(T.BhN.APPS_LEARN_MORE);
function O(e) {
    let { onClose: t } = e,
        n = r.useRef(null);
    return (0, i.jsx)('div', {
        ref: n,
        className: N.closeWrapper,
        children: (0, i.jsx)(C.FocusRingScope, {
            containerRef: n,
            children: (0, i.jsx)('div', {
                className: N.closeContent,
                children: (0, i.jsx)(d.Z, {
                    className: N.closeIcon,
                    closeAction: t,
                    keybind: 'ESC'
                })
            })
        })
    });
}
function I(e) {
    let { onTitleClick: t, showsLearnMoreCta: n, guildId: l, children: s } = e,
        o = (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(E.Z, { title: L.intl.string(L.t.AKcFUl) }),
                n &&
                    (0, i.jsx)(C.Anchor, {
                        onClick: function () {
                            g.default.track(T.rMx.APP_DIRECTORY_CTA_CLICKED, {
                                cta: 'directory-help-center',
                                current_page: j.ApplicationDirectoryViews.HOME,
                                guild_id: l
                            }),
                                (0, h.Z)(k);
                        },
                        children: L.intl.string(L.t.hvVgAQ)
                    })
            ]
        });
    return (0, i.jsxs)('div', {
        className: N.header,
        children: [
            null != t
                ? (0, i.jsx)(m.Z, {
                      href: T.Z5c.APPLICATION_DIRECTORY,
                      children: (0, i.jsx)(C.Clickable, {
                          onClick: t,
                          className: c()(N.titleContainer, N.clickable),
                          children: o
                      })
                  })
                : (0, i.jsx)('div', {
                      className: N.titleContainer,
                      children: o
                  }),
            s
        ]
    });
}
function R(e) {
    let t,
        { view: n, onClick: r } = e;
    if (null == n) return null;
    switch (n.type) {
        case j.ApplicationDirectoryViews.HOME:
            t = L.intl.string(L.t.Ym2Ri4);
            break;
        case j.ApplicationDirectoryViews.SEARCH:
            t = L.intl.string(L.t['5h0QOD']);
            break;
        case j.ApplicationDirectoryViews.APPLICATION:
            var l;
            t = null !== (l = null == n ? void 0 : n.applicationName) && void 0 !== l ? l : L.intl.string(L.t['13/7kZ']);
            break;
        default:
            t = L.intl.string(L.t['13/7kZ']);
    }
    return (0, i.jsxs)(C.Clickable, {
        className: N.back,
        onClick: r,
        children: [
            (0, i.jsx)(y.Z, {
                direction: y.Z.Directions.LEFT,
                className: N.backIcon
            }),
            (0, i.jsx)(C.Heading, {
                className: N.backHeader,
                variant: 'heading-sm/semibold',
                children: t
            })
        ]
    });
}
let D = (0, s.debounce)((e) => {
    let { scrollTop: t, scrollOffset: n, scrollHeight: i, location: r, guildId: l, sessionId: c } = e;
    t > 0 &&
        g.default.track(T.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
            scroll_visible_percentile: (t + n) / i,
            guild_id: l,
            location: r,
            directory_session_id: c
        });
}, 200);
function H(e) {
    let { children: t } = e,
        n = r.useRef(null),
        l = (0, S.Z)(),
        s = (0, j.useApplicationDirectoryHistory)((e) => e.guildId),
        d = (0, j.useApplicationDirectoryHistory)((e) => e.entrypoint),
        h = (0, j.useApplicationDirectoryHistory)((e) => e.trackedOpenedFromExternalEntrypoint),
        E = (0, j.getCurrentView)(),
        y = (0, j.getPreviousView)(),
        Z = r.useRef(),
        m = (null == E ? void 0 : E.type) !== j.ApplicationDirectoryViews.HOME,
        k = (null == E ? void 0 : E.type) === j.ApplicationDirectoryViews.APPLICATION ? (null == E ? void 0 : E.applicationId) : void 0;
    (0, A.Tt)({ location: L.intl.string(L.t.AKcFUl) });
    let H = (null == E ? void 0 : E.type) !== j.ApplicationDirectoryViews.HOME && null != y;
    r.useEffect(() => {
        !h && null == d && (g.default.track(T.rMx.APP_DIRECTORY_OPENED, { source: j.ApplicationDirectoryEntrypointNames.EXTERNAL }), (0, j.setTrackedOpenedFromExternalEntrypoint)(!0));
    }, [d, h]),
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
            Z.current = (0, o.Z)();
        }, [null == E ? void 0 : E.type, k]);
    let M = r.useCallback(() => {
        var e, t;
        (0, v.uL)(null !== (e = null == d ? void 0 : d.pathname) && void 0 !== e ? e : ''), null != d && d.name === j.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS && null != s && f.Z.open(s, null !== (t = d.guildSettingsSection) && void 0 !== t ? t : void 0);
    }, [d, s]);
    return (
        r.useEffect(() => {
            let e = (e) => {
                e.key === _.vn.ESCAPE && (e.stopPropagation(), M());
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [M]),
        (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(C.AdvancedScroller, {
                className: c()(N.directoryContainer, {
                    [N.directoryContainerMobile]: a.tq,
                    [N.directoryContainerTablet]: a.Em
                }),
                ref: n,
                onScroll: () => {
                    var e, t, i;
                    return D({
                        scrollTop: null === (e = n.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop,
                        scrollOffset: null === (t = n.current) || void 0 === t ? void 0 : t.getScrollerState().offsetHeight,
                        scrollHeight: null === (i = n.current) || void 0 === i ? void 0 : i.getScrollerState().scrollHeight,
                        location: null == E ? void 0 : E.type,
                        guildId: s,
                        sessionId: Z.current
                    });
                },
                children: (0, i.jsxs)('div', {
                    className: N.content,
                    children: [
                        (0, i.jsx)(I, {
                            onTitleClick: m ? P.goHome : void 0,
                            showsLearnMoreCta: (null == E ? void 0 : E.type) === j.ApplicationDirectoryViews.HOME,
                            guildId: s,
                            children: l ? (0, i.jsx)(O, { onClose: M }) : null
                        }),
                        H &&
                            (0, i.jsx)(R, {
                                view: y,
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
