t.d(n, {
    Z: function () {
        return k;
    }
});
var i = t(735250),
    l = t(470079),
    r = t(120356),
    s = t.n(r),
    o = t(392711),
    a = t(772848),
    c = t(873546),
    C = t(481060),
    d = t(425493),
    u = t(612226),
    p = t(714338),
    h = t(782568),
    f = t(252618),
    m = t(434404),
    v = t(677726),
    g = t(703656),
    E = t(671533),
    x = t(626135),
    A = t(63063),
    Z = t(674588),
    M = t(463571),
    _ = t(887706),
    L = t(132871),
    j = t(147890),
    N = t(981631),
    I = t(420212),
    R = t(689938),
    y = t(433027);
let T = A.Z.getArticleURL(N.BhN.APP_DIRECTORY_HEADER_LEARN_MORE);
function D(e) {
    let { onClose: n } = e,
        t = l.useRef(null);
    return (0, i.jsx)('div', {
        ref: t,
        className: y.closeWrapper,
        children: (0, i.jsx)(C.FocusRingScope, {
            containerRef: t,
            children: (0, i.jsx)('div', {
                className: y.closeContent,
                children: (0, i.jsx)(d.Z, {
                    className: y.closeIcon,
                    closeAction: n,
                    keybind: 'ESC'
                })
            })
        })
    });
}
function P(e) {
    let { onTitleClick: n, showsLearnMoreCta: t, guildId: r, children: o } = e,
        a = (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsx)(v.Z, { title: R.Z.Messages.APP_DIRECTORY }),
                t &&
                    (0, i.jsx)(C.Anchor, {
                        onClick: function () {
                            x.default.track(N.rMx.APP_DIRECTORY_CTA_CLICKED, {
                                cta: 'directory-help-center',
                                current_page: L.ApplicationDirectoryViews.HOME,
                                guild_id: r
                            }),
                                (0, h.Z)(T);
                        },
                        children: R.Z.Messages.LEARN_MORE
                    })
            ]
        });
    return (0, i.jsxs)('div', {
        className: y.header,
        children: [
            null != n
                ? (0, i.jsx)(M.Z, {
                      href: N.Z5c.APPLICATION_DIRECTORY,
                      children: (0, i.jsx)(C.Clickable, {
                          onClick: n,
                          className: s()(y.titleContainer, y.clickable),
                          children: a
                      })
                  })
                : (0, i.jsx)('div', {
                      className: y.titleContainer,
                      children: a
                  }),
            o
        ]
    });
}
function O(e) {
    let n,
        { view: t, onClick: l } = e;
    if (null == t) return null;
    switch (t.type) {
        case L.ApplicationDirectoryViews.HOME:
            n = R.Z.Messages.HOME;
            break;
        case L.ApplicationDirectoryViews.SEARCH:
            n = R.Z.Messages.SEARCH;
            break;
        case L.ApplicationDirectoryViews.APPLICATION:
            var r;
            n = null !== (r = null == t ? void 0 : t.applicationName) && void 0 !== r ? r : R.Z.Messages.BACK;
            break;
        default:
            n = R.Z.Messages.BACK;
    }
    return (0, i.jsxs)(C.Clickable, {
        className: y.back,
        onClick: l,
        children: [
            (0, i.jsx)(E.Z, {
                direction: E.Z.Directions.LEFT,
                className: y.backIcon
            }),
            (0, i.jsx)(C.Heading, {
                className: y.backHeader,
                variant: 'heading-sm/semibold',
                children: n
            })
        ]
    });
}
let S = (0, o.debounce)((e) => {
    let { scrollTop: n, scrollOffset: t, scrollHeight: i, location: l, guildId: r, sessionId: s } = e;
    n > 0 &&
        x.default.track(N.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
            scroll_visible_percentile: (n + t) / i,
            guild_id: r,
            location: l,
            directory_session_id: s
        });
}, 200);
function k(e) {
    let { children: n } = e,
        t = l.useRef(null),
        r = (0, _.Z)(),
        o = (0, L.useApplicationDirectoryHistory)((e) => e.guildId),
        d = (0, L.useApplicationDirectoryHistory)((e) => e.entrypoint),
        h = (0, L.useApplicationDirectoryHistory)((e) => e.trackedOpenedFromExternalEntrypoint),
        v = (0, L.getCurrentView)(),
        E = (0, L.getPreviousView)(),
        A = l.useRef(),
        M = (null == v ? void 0 : v.type) !== L.ApplicationDirectoryViews.HOME,
        T = (null == v ? void 0 : v.type) === L.ApplicationDirectoryViews.APPLICATION ? (null == v ? void 0 : v.applicationId) : void 0;
    (0, f.Tt)({ location: R.Z.Messages.APP_DIRECTORY });
    let k = (null == v ? void 0 : v.type) !== L.ApplicationDirectoryViews.HOME && null != E;
    l.useEffect(() => {
        !h && null == d && (x.default.track(N.rMx.APP_DIRECTORY_OPENED, { source: L.ApplicationDirectoryEntrypointNames.EXTERNAL }), (0, L.setTrackedOpenedFromExternalEntrypoint)(!0));
    }, [d, h]),
        l.useEffect(() => {
            if (r) return p.Z.setLayout(u.ZP), p.Z.enable(), () => p.Z.disable();
        }, [r]),
        l.useEffect(() => {
            Z.CP();
        }, []),
        l.useEffect(() => {
            r && Z.g5();
        }, [r]),
        l.useEffect(() => {
            A.current = (0, a.Z)();
        }, [null == v ? void 0 : v.type, T]);
    let H = l.useCallback(() => {
        var e, n;
        (0, g.uL)(null !== (e = null == d ? void 0 : d.pathname) && void 0 !== e ? e : ''), null != d && d.name === L.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS && null != o && m.Z.open(o, null !== (n = d.guildSettingsSection) && void 0 !== n ? n : void 0);
    }, [d, o]);
    return (
        l.useEffect(() => {
            let e = (e) => {
                e.key === I.vn.ESCAPE && (e.stopPropagation(), H());
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
                className: s()(y.directoryContainer, {
                    [y.directoryContainerMobile]: c.tq,
                    [y.directoryContainerTablet]: c.Em
                }),
                ref: t,
                onScroll: () => {
                    var e, n, i;
                    return S({
                        scrollTop: null === (e = t.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop,
                        scrollOffset: null === (n = t.current) || void 0 === n ? void 0 : n.getScrollerState().offsetHeight,
                        scrollHeight: null === (i = t.current) || void 0 === i ? void 0 : i.getScrollerState().scrollHeight,
                        location: null == v ? void 0 : v.type,
                        guildId: o,
                        sessionId: A.current
                    });
                },
                children: (0, i.jsxs)('div', {
                    className: y.content,
                    children: [
                        (0, i.jsx)(P, {
                            onTitleClick: M ? j.goHome : void 0,
                            showsLearnMoreCta: (null == v ? void 0 : v.type) === L.ApplicationDirectoryViews.HOME,
                            guildId: o,
                            children: r ? (0, i.jsx)(D, { onClose: H }) : null
                        }),
                        k &&
                            (0, i.jsx)(O, {
                                view: E,
                                onClick: () => {
                                    (0, g.op)();
                                }
                            }),
                        n
                    ]
                })
            })
        })
    );
}
