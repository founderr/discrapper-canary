n.d(t, {
    Z: function () {
        return C;
    },
    h: function () {
        return D;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(525654),
    u = n.n(l),
    c = n(91192),
    d = n(442837),
    _ = n(524437),
    E = n(481060),
    f = n(570140),
    h = n(607070),
    p = n(724757),
    m = n(626135),
    I = n(585483),
    T = n(143316),
    g = n(240126),
    S = n(791914),
    A = n(147522),
    v = n(809780),
    N = n(981631),
    O = n(689938),
    R = n(129640);
function C(e) {
    let { setTab: t, onJump: n, showTutorial: r, setSeenTutorial: o, closePopout: l, badgeState: I } = e,
        C = a.useRef(null),
        [D, M] = (0, v.ZP)(C),
        { loadState: P, channels: U } = D,
        { maybeLoadMore: w, markAllRead: x } = M;
    L(C, D, M),
        b(D, M),
        a.useEffect(() => {
            m.default.track(N.rMx.OPEN_POPOUT, { type: 'Inbox' });
        }, []),
        a.useEffect(
            () => (
                f.Z.subscribe('CONNECTION_OPEN', l),
                () => {
                    f.Z.unsubscribe('CONNECTION_OPEN', l);
                }
            ),
            [l]
        );
    let G = (0, d.e7)([h.Z], () => h.Z.messageGroupSpacing),
        k = (0, p.Z)('unreads', C);
    if (0 === U.length) {
        var B;
        return (0, i.jsxs)('div', {
            className: R.container,
            children: [
                (0, i.jsx)(S.Z, {
                    tab: _.X.UNREADS,
                    setTab: t,
                    badgeState: I,
                    closePopout: l
                }),
                (0, i.jsx)(g.Z, {
                    Icon: E.InboxIcon,
                    header: O.Z.Messages.UNREADS_EMPTY_STATE_HEADER,
                    tip: (null === (B = u().os) || void 0 === B ? void 0 : B.family) === 'OS X' ? O.Z.Messages.UNREADS_EMPTY_STATE_TIP_MAC : O.Z.Messages.UNREADS_EMPTY_STATE_TIP
                })
            ]
        });
    }
    return (0, i.jsxs)('div', {
        className: s()(R.container, 'group-spacing-'.concat(G)),
        'aria-label': O.Z.Messages.UNREADS_TAB_LABEL,
        children: [
            (0, i.jsx)(S.Z, {
                tab: _.X.UNREADS,
                setTab: t,
                badgeState: I,
                closePopout: l,
                children: (0, i.jsx)(T.Z, {
                    type: 'top-header',
                    onClick: x
                })
            }),
            (0, i.jsx)(c.bG, {
                navigator: k,
                children: (0, i.jsx)(c.SJ, {
                    children: (e) => {
                        let { ref: t, ...a } = e;
                        return (0, i.jsxs)(E.AdvancedScrollerThin, {
                            ref: (e) => {
                                var n;
                                (C.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                            },
                            ...a,
                            onScroll: P === v.jd.Done ? void 0 : w,
                            className: R.scroller,
                            children: [r ? (0, i.jsx)(y, { setSeenTutorial: o }) : null, (0, A.Z)(U, M, n), P === v.jd.Done ? null : (0, i.jsx)(E.Spinner, { className: R.spinner })]
                        });
                    }
                })
            })
        ]
    });
}
function y(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)('div', {
        className: R.tutorial,
        children: [
            (0, i.jsx)('div', {
                className: R.tutorialIcon,
                children: (0, i.jsx)(E.InboxIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(E.Heading, {
                        className: R.__invalid_tutorialHeader,
                        variant: 'heading-md/semibold',
                        children: O.Z.Messages.UNREADS_TUTORIAL_HEADER
                    }),
                    (0, i.jsx)(E.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: O.Z.Messages.UNREADS_TUTORIAL_BODY
                    }),
                    (0, i.jsx)(E.Button, {
                        className: R.tutorialButton,
                        onClick: t,
                        size: E.Button.Sizes.SMALL,
                        children: O.Z.Messages.TUTORIAL_CLOSE
                    })
                ]
            })
        ]
    });
}
function L(e, t, n) {
    a.useLayoutEffect(() => {
        var r;
        let { scrollToChannelIndex: i } = t;
        n.clearScrollToChannelIndex();
        let { current: a } = e;
        if (null == a || null == i) return;
        let o = null === (r = a.getScrollerNode()) || void 0 === r ? void 0 : r.children;
        if (null == o) return;
        let s = o[i];
        if (null == s) return;
        let { scrollTop: l, scrollHeight: u } = a.getScrollerState(),
            c = l + u;
        (s.offsetTop < l || s.offsetTop > c) && a.scrollTo({ to: s.offsetTop });
    });
}
function b(e, t) {
    a.useEffect(() => {
        let n = () => {
            let n = e.channels.find((e) => !e.collapsed);
            null != n && t.markChannelRead(n);
        };
        return (
            I.S.subscribe(N.CkL.MARK_TOP_INBOX_CHANNEL_READ, n),
            () => {
                I.S.unsubscribe(N.CkL.MARK_TOP_INBOX_CHANNEL_READ, n);
            }
        );
    }, [t, e.channels]);
}
function D(e) {
    let { setTab: t, badgeState: n, closePopout: r } = e;
    return (0, i.jsxs)('div', {
        className: R.container,
        children: [
            (0, i.jsx)(S.Z, {
                tab: _.X.UNREADS,
                setTab: t,
                badgeState: n,
                closePopout: r
            }),
            (0, i.jsx)(g.Z, {
                Icon: E.InboxIcon,
                disableStars: !0,
                header: O.Z.Messages.UNREADS_EMPTY_STATE_ERROR_HEADER,
                tip: O.Z.Messages.UNREADS_EMPTY_STATE_ERROR_SUBTITLE
            })
        ]
    });
}
