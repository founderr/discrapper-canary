n(47120), n(653041);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(215569),
    o = n(481060),
    c = n(140710),
    d = n(566006),
    u = n(60174),
    _ = n(453687),
    E = n(434624),
    I = n(287151),
    m = n(689938),
    T = n(96042),
    N = n(968661);
let h = (e, t) => (null == e && null == t) || e === t,
    C = (e, t) => e.findIndex((e) => h(e.emoji.id, null == t ? void 0 : t.id) && h(e.emoji.name, null == t ? void 0 : t.name)),
    p = (e, t) => {
        if (null == t) return e;
        let n = C(e, t);
        return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)];
    };
class f extends a.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let n = e.message.reactions.length;
        return 0 === t.reactionsCount && n > 0
            ? {
                  disableTransitionAppear: !1,
                  reactionsCount: n
              }
            : t.reactionsCount !== n
              ? { reactionsCount: n }
              : null;
    }
    render() {
        let { message: e, disableReactionCreates: t, disableReactionUpdates: n, isLurking: a, isGuest: s, isPendingMember: h, isForumToolbar: C, channel: p, className: f, forceAddReactions: g, reactionClassName: A, useChatFontScaling: S, forceHideReactionCreates: M, remainingReactions: x, combinedReactions: O, visibleReactionsCount: R } = this.props,
            { disableTransitionAppear: v } = this.state,
            L = S ? N : T,
            Z = R > 0;
        if (!Z && !g) return null;
        let { enabled: P } = c.Z.getCurrentConfig({ location: 'message_reactions' }, { autoTrackExposure: !0 }),
            D = P && Z,
            b = (g && !Z) || D;
        return (0, i.jsxs)(r.W, {
            component: 'div',
            className: l()(L.reactions, f),
            transitionAppear: !v,
            role: 'group',
            transitionLeave: !1,
            id: (0, _.bY)(e),
            onMouseEnter: () => this.setState({ isHovered: !0 }),
            onMouseLeave: () => this.setState({ isHovered: !1 }),
            children: [
                (0, i.jsx)(E.l, {
                    reactions: O,
                    message: e,
                    readOnly: n,
                    isLurking: a,
                    isGuest: s,
                    isPendingMember: h,
                    isForumToolbar: C,
                    useChatFontScaling: S,
                    className: A
                }),
                x > 0 &&
                    (0, i.jsx)(o.Clickable, {
                        onClick: (t) => {
                            t.stopPropagation(), (0, I.op)(p, e);
                        },
                        className: l()(L.reaction, A, L.remainingReactions),
                        'aria-label': m.Z.Messages.ADD_REACTION,
                        children: (0, i.jsxs)(o.Text, {
                            className: L.reactionInner,
                            variant: 'text-sm/normal',
                            children: ['+', x]
                        })
                    }),
                !t &&
                    !M &&
                    (0, i.jsx)(u.X, {
                        tabIndex: b || this.state.isHovered ? 0 : -1,
                        type: d.O.NORMAL,
                        message: e,
                        channel: p,
                        useChatFontScaling: S,
                        isHovered: this.state.isHovered,
                        className: l()({
                            [L.forceShow]: b,
                            [L.forceShowLook]: g || D
                        })
                    })
            ]
        });
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (n = 'state'),
            (i = {
                disableTransitionAppear: !0,
                reactionsCount: this.props.message.reactions.length,
                isHovered: !1
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
t.Z = (e) => {
    let { message: t, maxReactions: n, hoistReaction: s } = e,
        {
            combinedReactions: l,
            remainingReactions: r,
            visibleReactionsCount: o
        } = a.useMemo(() => {
            let e = [],
                i = p(t.reactions, s),
                a = null != n && n < i.length ? i.slice(0, n) : i,
                l = i.length - a.length,
                r = i.length;
            return (
                a.forEach((t) => {
                    t.burst_count > 0 &&
                        e.push({
                            ...t,
                            type: d.O.BURST
                        }),
                        t.count > 0 &&
                            e.push({
                                ...t,
                                type: d.O.NORMAL
                            }),
                        null != t.me_vote && --r;
                }),
                {
                    combinedReactions: e,
                    visibleReactionsCount: r,
                    remainingReactions: l
                }
            );
        }, [s, n, t.reactions]);
    return (0, i.jsx)(f, {
        ...e,
        visibleReactionsCount: o,
        combinedReactions: l,
        remainingReactions: r
    });
};
