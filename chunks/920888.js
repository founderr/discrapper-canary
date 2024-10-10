n(47120), n(653041);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(215569),
    o = n(481060),
    c = n(140710),
    d = n(833803),
    u = n(566006),
    _ = n(60174),
    E = n(453687),
    I = n(434624),
    m = n(287151),
    T = n(689938),
    N = n(96042),
    h = n(968661);
let C = (e, t) => (null == e && null == t) || e === t,
    f = (e, t) => e.findIndex((e) => C(e.emoji.id, null == t ? void 0 : t.id) && C(e.emoji.name, null == t ? void 0 : t.name)),
    p = (e, t) => {
        if (null == t) return e;
        let n = f(e, t);
        return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)];
    };
class g extends a.PureComponent {
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
        let { message: e, disableReactionCreates: t, disableReactionUpdates: n, isLurking: a, isGuest: s, isPendingMember: C, isForumToolbar: f, channel: p, className: g, forceAddReactions: A, reactionClassName: S, useChatFontScaling: M, forceHideReactionCreates: O, remainingReactions: x, combinedReactions: R, visibleReactionsCount: v } = this.props,
            { disableTransitionAppear: L } = this.state,
            Z = M ? h : N,
            P = v > 0;
        if (!P && !A) return null;
        let { enabled: b } = c.Z.getCurrentConfig({ location: 'message_reactions' }, { autoTrackExposure: !0 }),
            { canShowImprovedReactionButton: D } = d.Z.getCurrentConfig({ location: 'message_reactions' }, { autoTrackExposure: !0 }),
            j = b && P,
            U = (A && !P) || j,
            y = D && !f;
        return (0, i.jsxs)(r.W, {
            component: 'div',
            className: l()(Z.reactions, g, { [Z.largeReactions]: y }),
            transitionAppear: !L,
            role: 'group',
            transitionLeave: !1,
            id: (0, E.bY)(e),
            onMouseEnter: () => this.setState({ isHovered: !0 }),
            onMouseLeave: () => this.setState({ isHovered: !1 }),
            children: [
                (0, i.jsx)(I.l, {
                    reactions: R,
                    message: e,
                    readOnly: n,
                    isLurking: a,
                    isGuest: s,
                    isPendingMember: C,
                    isForumToolbar: f,
                    useChatFontScaling: M,
                    className: S,
                    emojiSize: y ? 'reactionLarge' : 'reaction'
                }),
                x > 0 &&
                    (0, i.jsx)(o.Clickable, {
                        onClick: (t) => {
                            t.stopPropagation(), (0, m.op)(p, e);
                        },
                        className: l()(Z.reaction, S, Z.remainingReactions),
                        'aria-label': T.Z.Messages.ADD_REACTION,
                        children: (0, i.jsxs)(o.Text, {
                            className: Z.reactionInner,
                            variant: 'text-sm/normal',
                            children: ['+', x]
                        })
                    }),
                !t &&
                    !O &&
                    (0, i.jsx)(_.X, {
                        tabIndex: U || this.state.isHovered ? 0 : -1,
                        type: u.O.NORMAL,
                        message: e,
                        channel: p,
                        useChatFontScaling: M,
                        isHovered: this.state.isHovered,
                        className: l()({
                            [Z.forceShow]: U,
                            [Z.forceShowLook]: A || j
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
                            type: u.O.BURST
                        }),
                        t.count > 0 &&
                            e.push({
                                ...t,
                                type: u.O.NORMAL
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
    return (0, i.jsx)(g, {
        ...e,
        visibleReactionsCount: o,
        combinedReactions: l,
        remainingReactions: r
    });
};
