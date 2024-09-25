n.d(t, {
    Z: function () {
        return R;
    },
    h: function () {
        return M;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    r = n.n(a),
    l = n(525654),
    o = n.n(l),
    c = n(91192),
    u = n(442837),
    d = n(524437),
    _ = n(481060),
    E = n(570140),
    I = n(607070),
    m = n(724757),
    T = n(626135),
    h = n(585483),
    N = n(143316),
    f = n(240126),
    C = n(791914),
    p = n(147522),
    g = n(809780),
    A = n(981631),
    S = n(689938),
    x = n(129640);
function R(e) {
    let { setTab: t, onJump: n, showTutorial: a, setSeenTutorial: l, closePopout: R, badgeState: M } = e,
        v = s.useRef(null),
        [L, Z] = (0, g.ZP)(v),
        { loadState: P, channels: b } = L,
        { maybeLoadMore: D, markAllRead: j } = Z;
    (function (e, t, n) {
        s.useLayoutEffect(() => {
            var i;
            let { scrollToChannelIndex: s } = t;
            n.clearScrollToChannelIndex();
            let { current: a } = e;
            if (null == a || null == s) return;
            let r = null === (i = a.getScrollerNode()) || void 0 === i ? void 0 : i.children;
            if (null == r) return;
            let l = r[s];
            if (null == l) return;
            let { scrollTop: o, scrollHeight: c } = a.getScrollerState();
            (l.offsetTop < o || l.offsetTop > o + c) && a.scrollTo({ to: l.offsetTop });
        });
    })(v, L, Z),
        (function (e, t) {
            s.useEffect(() => {
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
        })(L, Z),
        s.useEffect(() => {
            T.default.track(A.rMx.OPEN_POPOUT, { type: 'Inbox' });
        }, []),
        s.useEffect(
            () => (
                E.Z.subscribe('CONNECTION_OPEN', R),
                () => {
                    E.Z.unsubscribe('CONNECTION_OPEN', R);
                }
            ),
            [R]
        );
    let U = (0, u.e7)([I.Z], () => I.Z.messageGroupSpacing),
        y = (0, m.Z)('unreads', v);
    if (0 === b.length) {
        var B;
        return (0, i.jsxs)('div', {
            className: x.container,
            children: [
                (0, i.jsx)(C.Z, {
                    tab: d.X.UNREADS,
                    setTab: t,
                    badgeState: M,
                    closePopout: R
                }),
                (0, i.jsx)(f.Z, {
                    Icon: _.InboxIcon,
                    header: S.Z.Messages.UNREADS_EMPTY_STATE_HEADER,
                    tip: (null === (B = o().os) || void 0 === B ? void 0 : B.family) === 'OS X' ? S.Z.Messages.UNREADS_EMPTY_STATE_TIP_MAC : S.Z.Messages.UNREADS_EMPTY_STATE_TIP
                })
            ]
        });
    }
    return (0, i.jsxs)('div', {
        className: r()(x.container, 'group-spacing-'.concat(U)),
        'aria-label': S.Z.Messages.UNREADS_TAB_LABEL,
        children: [
            (0, i.jsx)(C.Z, {
                tab: d.X.UNREADS,
                setTab: t,
                badgeState: M,
                closePopout: R,
                children: (0, i.jsx)(N.Z, {
                    type: 'top-header',
                    onClick: j
                })
            }),
            (0, i.jsx)(c.bG, {
                navigator: y,
                children: (0, i.jsx)(c.SJ, {
                    children: (e) => {
                        let { ref: t, ...s } = e;
                        return (0, i.jsxs)(_.AdvancedScrollerThin, {
                            ref: (e) => {
                                var n;
                                (v.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                            },
                            ...s,
                            onScroll: P === g.jd.Done ? void 0 : D,
                            className: x.scroller,
                            children: [a ? (0, i.jsx)(O, { setSeenTutorial: l }) : null, (0, p.Z)(b, Z, n), P === g.jd.Done ? null : (0, i.jsx)(_.Spinner, { className: x.spinner })]
                        });
                    }
                })
            })
        ]
    });
}
function O(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)('div', {
        className: x.tutorial,
        children: [
            (0, i.jsx)('div', {
                className: x.tutorialIcon,
                children: (0, i.jsx)(_.InboxIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(_.Heading, {
                        className: x.__invalid_tutorialHeader,
                        variant: 'heading-md/semibold',
                        children: S.Z.Messages.UNREADS_TUTORIAL_HEADER
                    }),
                    (0, i.jsx)(_.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: S.Z.Messages.UNREADS_TUTORIAL_BODY
                    }),
                    (0, i.jsx)(_.Button, {
                        className: x.tutorialButton,
                        onClick: t,
                        size: _.Button.Sizes.SMALL,
                        children: S.Z.Messages.TUTORIAL_CLOSE
                    })
                ]
            })
        ]
    });
}
function M(e) {
    let { setTab: t, badgeState: n, closePopout: s } = e;
    return (0, i.jsxs)('div', {
        className: x.container,
        children: [
            (0, i.jsx)(C.Z, {
                tab: d.X.UNREADS,
                setTab: t,
                badgeState: n,
                closePopout: s
            }),
            (0, i.jsx)(f.Z, {
                Icon: _.InboxIcon,
                disableStars: !0,
                header: S.Z.Messages.UNREADS_EMPTY_STATE_ERROR_HEADER,
                tip: S.Z.Messages.UNREADS_EMPTY_STATE_ERROR_SUBTITLE
            })
        ]
    });
}
