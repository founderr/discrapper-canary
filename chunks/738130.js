n.d(t, {
    Z: function () {
        return k;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    c = n.n(l),
    o = n(392711),
    s = n(772848),
    a = n(873546),
    u = n(481060),
    d = n(425493),
    C = n(612226),
    p = n(714338),
    h = n(782568),
    f = n(252618),
    m = n(434404),
    E = n(677726),
    A = n(703656),
    v = n(671533),
    g = n(626135),
    x = n(63063),
    L = n(674588),
    Z = n(463571),
    N = n(887706),
    S = n(132871),
    j = n(147890),
    T = n(981631),
    y = n(420212),
    _ = n(388032),
    I = n(433027);
let P = x.Z.getAppsSupportURL(T.BhN.APPS_LEARN_MORE);
function R(e) {
    let { onClose: t } = e,
        n = r.useRef(null);
    return (0, i.jsx)('div', {
        ref: n,
        className: I.closeWrapper,
        children: (0, i.jsx)(u.FocusRingScope, {
            containerRef: n,
            children: (0, i.jsx)('div', {
                className: I.closeContent,
                children: (0, i.jsx)(d.Z, {
                    className: I.closeIcon,
                    closeAction: t,
                    keybind: 'ESC'
                })
            })
        })
    });
}
function M(e) {
    let { onTitleClick: t, showsLearnMoreCta: n, guildId: l, children: o } = e,
        s = (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(E.Z, { title: _.intl.string(_.t.AKcFUl) }),
                n &&
                    (0, i.jsx)(u.Anchor, {
                        onClick: function () {
                            g.default.track(T.rMx.APP_DIRECTORY_CTA_CLICKED, {
                                cta: 'directory-help-center',
                                current_page: S.ApplicationDirectoryViews.HOME,
                                guild_id: l
                            }),
                                (0, h.Z)(P);
                        },
                        children: _.intl.string(_.t.hvVgAQ)
                    })
            ]
        });
    return (0, i.jsxs)('div', {
        className: I.header,
        children: [
            null != t
                ? (0, i.jsx)(Z.Z, {
                      href: T.Z5c.APPLICATION_DIRECTORY,
                      children: (0, i.jsx)(u.Clickable, {
                          onClick: t,
                          className: c()(I.titleContainer, I.clickable),
                          children: s
                      })
                  })
                : (0, i.jsx)('div', {
                      className: I.titleContainer,
                      children: s
                  }),
            o
        ]
    });
}
function O(e) {
    let t,
        { view: n, onClick: r } = e;
    if (null == n) return null;
    switch (n.type) {
        case S.ApplicationDirectoryViews.HOME:
            t = _.intl.string(_.t.Ym2Ri4);
            break;
        case S.ApplicationDirectoryViews.SEARCH:
            t = _.intl.string(_.t['5h0QOD']);
            break;
        case S.ApplicationDirectoryViews.APPLICATION:
            var l;
            t = null !== (l = null == n ? void 0 : n.applicationName) && void 0 !== l ? l : _.intl.string(_.t['13/7kZ']);
            break;
        default:
            t = _.intl.string(_.t['13/7kZ']);
    }
    return (0, i.jsxs)(u.Clickable, {
        className: I.back,
        onClick: r,
        children: [
            (0, i.jsx)(v.Z, {
                direction: v.Z.Directions.LEFT,
                className: I.backIcon
            }),
            (0, i.jsx)(u.Heading, {
                className: I.backHeader,
                variant: 'heading-sm/semibold',
                children: t
            })
        ]
    });
}
let D = (0, o.debounce)((e) => {
    let { scrollTop: t, scrollOffset: n, scrollHeight: i, location: r, guildId: l, sessionId: c } = e;
    t > 0 &&
        g.default.track(T.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
            scroll_visible_percentile: (t + n) / i,
            guild_id: l,
            location: r,
            directory_session_id: c
        });
}, 200);
function k(e) {
    let { children: t } = e,
        n = r.useRef(null),
        l = (0, N.Z)(),
        o = (0, S.useApplicationDirectoryHistory)((e) => e.guildId),
        d = (0, S.useApplicationDirectoryHistory)((e) => e.entrypoint),
        h = (0, S.useApplicationDirectoryHistory)((e) => e.trackedOpenedFromExternalEntrypoint),
        E = (0, S.getCurrentView)(),
        v = (0, S.getPreviousView)(),
        x = r.useRef(),
        Z = (null == E ? void 0 : E.type) !== S.ApplicationDirectoryViews.HOME,
        P = (null == E ? void 0 : E.type) === S.ApplicationDirectoryViews.APPLICATION ? (null == E ? void 0 : E.applicationId) : void 0;
    (0, f.Tt)({ location: _.intl.string(_.t.AKcFUl) });
    let k = (null == E ? void 0 : E.type) !== S.ApplicationDirectoryViews.HOME && null != v;
    r.useEffect(() => {
        !h && null == d && (g.default.track(T.rMx.APP_DIRECTORY_OPENED, { source: S.ApplicationDirectoryEntrypointNames.EXTERNAL }), (0, S.setTrackedOpenedFromExternalEntrypoint)(!0));
    }, [d, h]),
        r.useEffect(() => {
            if (l) return p.Z.setLayout(C.ZP), p.Z.enable(), () => p.Z.disable();
        }, [l]),
        r.useEffect(() => {
            L.CP();
        }, []),
        r.useEffect(() => {
            l && L.g5();
        }, [l]),
        r.useEffect(() => {
            x.current = (0, s.Z)();
        }, [null == E ? void 0 : E.type, P]);
    let w = r.useCallback(() => {
        var e, t;
        (0, A.uL)(null !== (e = null == d ? void 0 : d.pathname) && void 0 !== e ? e : ''), null != d && d.name === S.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS && null != o && m.Z.open(o, null !== (t = d.guildSettingsSection) && void 0 !== t ? t : void 0);
    }, [d, o]);
    return (
        r.useEffect(() => {
            let e = (e) => {
                e.key === y.vn.ESCAPE && (e.stopPropagation(), w());
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [w]),
        (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(u.AdvancedScroller, {
                className: c()(I.directoryContainer, {
                    [I.directoryContainerMobile]: a.tq,
                    [I.directoryContainerTablet]: a.Em
                }),
                ref: n,
                onScroll: () => {
                    var e, t, i;
                    return D({
                        scrollTop: null === (e = n.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop,
                        scrollOffset: null === (t = n.current) || void 0 === t ? void 0 : t.getScrollerState().offsetHeight,
                        scrollHeight: null === (i = n.current) || void 0 === i ? void 0 : i.getScrollerState().scrollHeight,
                        location: null == E ? void 0 : E.type,
                        guildId: o,
                        sessionId: x.current
                    });
                },
                children: (0, i.jsxs)('div', {
                    className: I.content,
                    children: [
                        (0, i.jsx)(M, {
                            onTitleClick: Z ? j.goHome : void 0,
                            showsLearnMoreCta: (null == E ? void 0 : E.type) === S.ApplicationDirectoryViews.HOME,
                            guildId: o,
                            children: l ? (0, i.jsx)(R, { onClose: w }) : null
                        }),
                        k &&
                            (0, i.jsx)(O, {
                                view: v,
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
