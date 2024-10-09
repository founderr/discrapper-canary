n.d(t, {
    Z: function () {
        return O;
    },
    h: function () {
        return R;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(525654),
    o = n.n(r),
    c = n(91192),
    d = n(442837),
    u = n(524437),
    _ = n(481060),
    E = n(570140),
    I = n(607070),
    m = n(724757),
    T = n(626135),
    N = n(585483),
    h = n(143316),
    C = n(240126),
    p = n(791914),
    f = n(147522),
    g = n(809780),
    A = n(981631),
    S = n(689938),
    M = n(129640);
function O(e) {
    let { setTab: t, onJump: n, showTutorial: s, setSeenTutorial: r, closePopout: O, badgeState: R } = e,
        v = a.useRef(null),
        [L, Z] = (0, g.ZP)(v),
        { loadState: P, channels: b } = L,
        { maybeLoadMore: D, markAllRead: j } = Z;
    (function (e, t, n) {
        a.useLayoutEffect(() => {
            var i;
            let { scrollToChannelIndex: a } = t;
            n.clearScrollToChannelIndex();
            let { current: s } = e;
            if (null == s || null == a) return;
            let l = null === (i = s.getScrollerNode()) || void 0 === i ? void 0 : i.children;
            if (null == l) return;
            let r = l[a];
            if (null == r) return;
            let { scrollTop: o, scrollHeight: c } = s.getScrollerState();
            (r.offsetTop < o || r.offsetTop > o + c) && s.scrollTo({ to: r.offsetTop });
        });
    })(v, L, Z),
        (function (e, t) {
            a.useEffect(() => {
                let n = () => {
                    let n = e.channels.find((e) => !e.collapsed);
                    null != n && t.markChannelRead(n);
                };
                return (
                    N.S.subscribe(A.CkL.MARK_TOP_INBOX_CHANNEL_READ, n),
                    () => {
                        N.S.unsubscribe(A.CkL.MARK_TOP_INBOX_CHANNEL_READ, n);
                    }
                );
            }, [t, e.channels]);
        })(L, Z),
        a.useEffect(() => {
            T.default.track(A.rMx.OPEN_POPOUT, { type: 'Inbox' });
        }, []),
        a.useEffect(
            () => (
                E.Z.subscribe('CONNECTION_OPEN', O),
                () => {
                    E.Z.unsubscribe('CONNECTION_OPEN', O);
                }
            ),
            [O]
        );
    let U = (0, d.e7)([I.Z], () => I.Z.messageGroupSpacing),
        y = (0, m.Z)('unreads', v);
    if (0 === b.length) {
        var B;
        return (0, i.jsxs)('div', {
            className: M.container,
            children: [
                (0, i.jsx)(p.Z, {
                    tab: u.X.UNREADS,
                    setTab: t,
                    badgeState: R,
                    closePopout: O
                }),
                (0, i.jsx)(C.Z, {
                    Icon: _.InboxIcon,
                    header: S.Z.Messages.UNREADS_EMPTY_STATE_HEADER,
                    tip: (null === (B = o().os) || void 0 === B ? void 0 : B.family) === 'OS X' ? S.Z.Messages.UNREADS_EMPTY_STATE_TIP_MAC : S.Z.Messages.UNREADS_EMPTY_STATE_TIP
                })
            ]
        });
    }
    return (0, i.jsxs)('div', {
        className: l()(M.container, 'group-spacing-'.concat(U)),
        'aria-label': S.Z.Messages.UNREADS_TAB_LABEL,
        children: [
            (0, i.jsx)(p.Z, {
                tab: u.X.UNREADS,
                setTab: t,
                badgeState: R,
                closePopout: O,
                children: (0, i.jsx)(h.Z, {
                    type: 'top-header',
                    onClick: j
                })
            }),
            (0, i.jsx)(c.bG, {
                navigator: y,
                children: (0, i.jsx)(c.SJ, {
                    children: (e) => {
                        let { ref: t, ...a } = e;
                        return (0, i.jsxs)(_.AdvancedScrollerThin, {
                            ref: (e) => {
                                var n;
                                (v.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                            },
                            ...a,
                            onScroll: P === g.jd.Done ? void 0 : D,
                            className: M.scroller,
                            children: [s ? (0, i.jsx)(x, { setSeenTutorial: r }) : null, (0, f.Z)(b, Z, n), P === g.jd.Done ? null : (0, i.jsx)(_.Spinner, { className: M.spinner })]
                        });
                    }
                })
            })
        ]
    });
}
function x(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)('div', {
        className: M.tutorial,
        children: [
            (0, i.jsx)('div', {
                className: M.tutorialIcon,
                children: (0, i.jsx)(_.InboxIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(_.Heading, {
                        className: M.__invalid_tutorialHeader,
                        variant: 'heading-md/semibold',
                        children: S.Z.Messages.UNREADS_TUTORIAL_HEADER
                    }),
                    (0, i.jsx)(_.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: S.Z.Messages.UNREADS_TUTORIAL_BODY
                    }),
                    (0, i.jsx)(_.Button, {
                        className: M.tutorialButton,
                        onClick: t,
                        size: _.Button.Sizes.SMALL,
                        children: S.Z.Messages.TUTORIAL_CLOSE
                    })
                ]
            })
        ]
    });
}
function R(e) {
    let { setTab: t, badgeState: n, closePopout: a } = e;
    return (0, i.jsxs)('div', {
        className: M.container,
        children: [
            (0, i.jsx)(p.Z, {
                tab: u.X.UNREADS,
                setTab: t,
                badgeState: n,
                closePopout: a
            }),
            (0, i.jsx)(C.Z, {
                Icon: _.InboxIcon,
                disableStars: !0,
                header: S.Z.Messages.UNREADS_EMPTY_STATE_ERROR_HEADER,
                tip: S.Z.Messages.UNREADS_EMPTY_STATE_ERROR_SUBTITLE
            })
        ]
    });
}
