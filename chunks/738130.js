n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    c = n.n(l),
    o = n(392711),
    C = n(772848),
    s = n(873546),
    a = n(481060),
    d = n(425493),
    u = n(612226),
    p = n(714338),
    h = n(782568),
    f = n(252618),
    v = n(434404),
    E = n(677726),
    A = n(703656),
    y = n(671533),
    x = n(626135),
    Z = n(63063),
    g = n(674588),
    j = n(463571),
    m = n(887706),
    k = n(132871),
    D = n(147890),
    N = n(981631),
    _ = n(420212),
    L = n(388032),
    H = n(433027);
let R = Z.Z.getAppsSupportURL(N.BhN.APP_DIRECTORY_HEADER_LEARN_MORE);
function O(e) {
    let { onClose: t } = e,
        n = r.useRef(null);
    return (0, i.jsx)('div', {
        ref: n,
        className: H.closeWrapper,
        children: (0, i.jsx)(a.FocusRingScope, {
            containerRef: n,
            children: (0, i.jsx)('div', {
                className: H.closeContent,
                children: (0, i.jsx)(d.Z, {
                    className: H.closeIcon,
                    closeAction: t,
                    keybind: 'ESC'
                })
            })
        })
    });
}
function V(e) {
    let { onTitleClick: t, showsLearnMoreCta: n, guildId: l, children: o } = e,
        C = (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(E.Z, { title: L.intl.string(L.t.AKcFUl) }),
                n &&
                    (0, i.jsx)(a.Anchor, {
                        onClick: function () {
                            x.default.track(N.rMx.APP_DIRECTORY_CTA_CLICKED, {
                                cta: 'directory-help-center',
                                current_page: k.ApplicationDirectoryViews.HOME,
                                guild_id: l
                            }),
                                (0, h.Z)(R);
                        },
                        children: L.intl.string(L.t.hvVgAQ)
                    })
            ]
        });
    return (0, i.jsxs)('div', {
        className: H.header,
        children: [
            null != t
                ? (0, i.jsx)(j.Z, {
                      href: N.Z5c.APPLICATION_DIRECTORY,
                      children: (0, i.jsx)(a.Clickable, {
                          onClick: t,
                          className: c()(H.titleContainer, H.clickable),
                          children: C
                      })
                  })
                : (0, i.jsx)('div', {
                      className: H.titleContainer,
                      children: C
                  }),
            o
        ]
    });
}
function M(e) {
    let t,
        { view: n, onClick: r } = e;
    if (null == n) return null;
    switch (n.type) {
        case k.ApplicationDirectoryViews.HOME:
            t = L.intl.string(L.t.Ym2Ri4);
            break;
        case k.ApplicationDirectoryViews.SEARCH:
            t = L.intl.string(L.t['5h0QOD']);
            break;
        case k.ApplicationDirectoryViews.APPLICATION:
            var l;
            t = null !== (l = null == n ? void 0 : n.applicationName) && void 0 !== l ? l : L.intl.string(L.t['13/7kZ']);
            break;
        default:
            t = L.intl.string(L.t['13/7kZ']);
    }
    return (0, i.jsxs)(a.Clickable, {
        className: H.back,
        onClick: r,
        children: [
            (0, i.jsx)(y.Z, {
                direction: y.Z.Directions.LEFT,
                className: H.backIcon
            }),
            (0, i.jsx)(a.Heading, {
                className: H.backHeader,
                variant: 'heading-sm/semibold',
                children: t
            })
        ]
    });
}
let P = (0, o.debounce)((e) => {
    let { scrollTop: t, scrollOffset: n, scrollHeight: i, location: r, guildId: l, sessionId: c } = e;
    t > 0 &&
        x.default.track(N.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
            scroll_visible_percentile: (t + n) / i,
            guild_id: l,
            location: r,
            directory_session_id: c
        });
}, 200);
function T(e) {
    let { children: t } = e,
        n = r.useRef(null),
        l = (0, m.Z)(),
        o = (0, k.useApplicationDirectoryHistory)((e) => e.guildId),
        d = (0, k.useApplicationDirectoryHistory)((e) => e.entrypoint),
        h = (0, k.useApplicationDirectoryHistory)((e) => e.trackedOpenedFromExternalEntrypoint),
        E = (0, k.getCurrentView)(),
        y = (0, k.getPreviousView)(),
        Z = r.useRef(),
        j = (null == E ? void 0 : E.type) !== k.ApplicationDirectoryViews.HOME,
        R = (null == E ? void 0 : E.type) === k.ApplicationDirectoryViews.APPLICATION ? (null == E ? void 0 : E.applicationId) : void 0;
    (0, f.Tt)({ location: L.intl.string(L.t.AKcFUl) });
    let T = (null == E ? void 0 : E.type) !== k.ApplicationDirectoryViews.HOME && null != y;
    r.useEffect(() => {
        !h && null == d && (x.default.track(N.rMx.APP_DIRECTORY_OPENED, { source: k.ApplicationDirectoryEntrypointNames.EXTERNAL }), (0, k.setTrackedOpenedFromExternalEntrypoint)(!0));
    }, [d, h]),
        r.useEffect(() => {
            if (l) return p.Z.setLayout(u.ZP), p.Z.enable(), () => p.Z.disable();
        }, [l]),
        r.useEffect(() => {
            g.CP();
        }, []),
        r.useEffect(() => {
            l && g.g5();
        }, [l]),
        r.useEffect(() => {
            Z.current = (0, C.Z)();
        }, [null == E ? void 0 : E.type, R]);
    let b = r.useCallback(() => {
        var e, t;
        (0, A.uL)(null !== (e = null == d ? void 0 : d.pathname) && void 0 !== e ? e : ''), null != d && d.name === k.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS && null != o && v.Z.open(o, null !== (t = d.guildSettingsSection) && void 0 !== t ? t : void 0);
    }, [d, o]);
    return (
        r.useEffect(() => {
            let e = (e) => {
                e.key === _.vn.ESCAPE && (e.stopPropagation(), b());
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [b]),
        (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(a.AdvancedScroller, {
                className: c()(H.directoryContainer, {
                    [H.directoryContainerMobile]: s.tq,
                    [H.directoryContainerTablet]: s.Em
                }),
                ref: n,
                onScroll: () => {
                    var e, t, i;
                    return P({
                        scrollTop: null === (e = n.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop,
                        scrollOffset: null === (t = n.current) || void 0 === t ? void 0 : t.getScrollerState().offsetHeight,
                        scrollHeight: null === (i = n.current) || void 0 === i ? void 0 : i.getScrollerState().scrollHeight,
                        location: null == E ? void 0 : E.type,
                        guildId: o,
                        sessionId: Z.current
                    });
                },
                children: (0, i.jsxs)('div', {
                    className: H.content,
                    children: [
                        (0, i.jsx)(V, {
                            onTitleClick: j ? D.goHome : void 0,
                            showsLearnMoreCta: (null == E ? void 0 : E.type) === k.ApplicationDirectoryViews.HOME,
                            guildId: o,
                            children: l ? (0, i.jsx)(O, { onClose: b }) : null
                        }),
                        T &&
                            (0, i.jsx)(M, {
                                view: y,
                                onClick: () => {
                                    (0, A.op)();
                                }
                            }),
                        t
                    ]
                })
            })
        })
    );
}
