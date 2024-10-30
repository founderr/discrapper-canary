n.d(t, {
    Z: function () {
        return v;
    },
    h: function () {
        return O;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(525654),
    o = n.n(l),
    c = n(91192),
    u = n(442837),
    d = n(524437),
    _ = n(481060),
    E = n(570140),
    I = n(607070),
    m = n(724757),
    f = n(626135),
    h = n(585483),
    T = n(358085),
    N = n(143316),
    p = n(240126),
    C = n(791914),
    g = n(147522),
    S = n(809780),
    A = n(981631),
    x = n(689938),
    R = n(129640);
function v(e) {
    let { setTab: t, onJump: n, showTutorial: s, setSeenTutorial: l, closePopout: v, badgeState: O } = e,
        L = a.useRef(null),
        [Z, b] = (0, S.ZP)(L),
        { loadState: P, channels: D } = Z,
        { maybeLoadMore: j, markAllRead: U } = b;
    (function (e, t, n) {
        a.useLayoutEffect(() => {
            var i;
            let { scrollToChannelIndex: a } = t;
            n.clearScrollToChannelIndex();
            let { current: s } = e;
            if (null == s || null == a) return;
            let r = null === (i = s.getScrollerNode()) || void 0 === i ? void 0 : i.children;
            if (null == r) return;
            let l = r[a];
            if (null == l) return;
            let { scrollTop: o, offsetHeight: c } = s.getScrollerState();
            (l.offsetTop < o || l.offsetTop > o + c) && s.scrollTo({ to: l.offsetTop });
        });
    })(L, Z, b),
        (function (e, t) {
            a.useEffect(() => {
                let n = () => {
                    let n = e.channels.find((e) => !e.collapsed);
                    null != n && t.markChannelRead(n);
                };
                return (
                    h.S.subscribe(A.CkL.MARK_TOP_INBOX_CHANNEL_READ, n),
                    () => {
                        h.S.unsubscribe(A.CkL.MARK_TOP_INBOX_CHANNEL_READ, n);
                    }
                );
            }, [t, e.channels]);
        })(Z, b),
        (function (e) {
            a.useEffect(() => {
                let t = (t) => {
                    ((0, T.isMac)() || (0, T.isMacWeb)() ? t.metaKey : t.ctrlKey) && !t.shiftKey && !t.altKey && 'z' === t.key && e.undoMarkChannelRead();
                };
                return (
                    document.addEventListener('keydown', t),
                    () => {
                        document.removeEventListener('keydown', t);
                    }
                );
            }, [e]);
        })(b),
        a.useEffect(() => {
            f.default.track(A.rMx.OPEN_POPOUT, { type: 'Inbox' });
        }, []),
        a.useEffect(
            () => (
                E.Z.subscribe('CONNECTION_OPEN', v),
                () => {
                    E.Z.unsubscribe('CONNECTION_OPEN', v);
                }
            ),
            [v]
        );
    let y = (0, u.e7)([I.Z], () => I.Z.messageGroupSpacing),
        B = (0, m.Z)('unreads', L);
    if (0 === D.length) {
        var k;
        return (0, i.jsxs)('div', {
            className: R.container,
            children: [
                (0, i.jsx)(C.Z, {
                    tab: d.X.UNREADS,
                    setTab: t,
                    badgeState: O,
                    closePopout: v
                }),
                (0, i.jsx)(p.Z, {
                    Icon: _.InboxIcon,
                    header: x.Z.Messages.UNREADS_EMPTY_STATE_HEADER,
                    tip: (null === (k = o().os) || void 0 === k ? void 0 : k.family) === 'OS X' ? x.Z.Messages.UNREADS_EMPTY_STATE_TIP_MAC : x.Z.Messages.UNREADS_EMPTY_STATE_TIP
                })
            ]
        });
    }
    return (0, i.jsxs)('div', {
        className: r()(R.container, 'group-spacing-'.concat(y)),
        'aria-label': x.Z.Messages.UNREADS_TAB_LABEL,
        children: [
            (0, i.jsx)(C.Z, {
                tab: d.X.UNREADS,
                setTab: t,
                badgeState: O,
                closePopout: v,
                children: (0, i.jsx)(N.Z, {
                    type: 'top-header',
                    onClick: U
                })
            }),
            (0, i.jsx)(c.bG, {
                navigator: B,
                children: (0, i.jsx)(c.SJ, {
                    children: (e) => {
                        let { ref: t, ...a } = e;
                        return (0, i.jsxs)(_.AdvancedScrollerThin, {
                            ref: (e) => {
                                var n;
                                (L.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                            },
                            ...a,
                            onScroll: P === S.jd.Done ? void 0 : j,
                            className: R.scroller,
                            children: [s ? (0, i.jsx)(M, { setSeenTutorial: l }) : null, (0, g.Z)(D, b, n), P === S.jd.Done ? null : (0, i.jsx)(_.Spinner, { className: R.spinner })]
                        });
                    }
                })
            })
        ]
    });
}
function M(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)('div', {
        className: R.tutorial,
        children: [
            (0, i.jsx)('div', {
                className: R.tutorialIcon,
                children: (0, i.jsx)(_.InboxIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(_.Heading, {
                        className: R.__invalid_tutorialHeader,
                        variant: 'heading-md/semibold',
                        children: x.Z.Messages.UNREADS_TUTORIAL_HEADER
                    }),
                    (0, i.jsx)(_.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: x.Z.Messages.UNREADS_TUTORIAL_BODY
                    }),
                    (0, i.jsx)(_.Button, {
                        className: R.tutorialButton,
                        onClick: t,
                        size: _.Button.Sizes.SMALL,
                        children: x.Z.Messages.TUTORIAL_CLOSE
                    })
                ]
            })
        ]
    });
}
function O(e) {
    let { setTab: t, badgeState: n, closePopout: a } = e;
    return (0, i.jsxs)('div', {
        className: R.container,
        children: [
            (0, i.jsx)(C.Z, {
                tab: d.X.UNREADS,
                setTab: t,
                badgeState: n,
                closePopout: a
            }),
            (0, i.jsx)(p.Z, {
                Icon: _.InboxIcon,
                disableStars: !0,
                header: x.Z.Messages.UNREADS_EMPTY_STATE_ERROR_HEADER,
                tip: x.Z.Messages.UNREADS_EMPTY_STATE_ERROR_SUBTITLE
            })
        ]
    });
}
