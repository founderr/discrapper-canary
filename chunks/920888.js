var r = n(47120);
var i = n(653041);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(215569),
    c = n(481060),
    d = n(140710),
    _ = n(566006),
    E = n(60174),
    f = n(453687),
    h = n(434624),
    p = n(287151),
    m = n(689938),
    I = n(96042),
    T = n(968661);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let S = (e, t) => (null == e && null == t) || e === t,
    A = (e, t) => e.findIndex((e) => S(e.emoji.id, null == t ? void 0 : t.id) && S(e.emoji.name, null == t ? void 0 : t.name)),
    v = (e, t) => {
        if (null == t) return e;
        let n = A(e, t);
        return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)];
    };
class N extends o.PureComponent {
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
        let { message: e, disableReactionCreates: t, disableReactionUpdates: n, isLurking: r, isGuest: i, isPendingMember: o, isForumToolbar: s, channel: g, className: S, forceAddReactions: A, reactionClassName: v, useChatFontScaling: N, forceHideReactionCreates: O, remainingReactions: R, combinedReactions: C, visibleReactionsCount: y } = this.props,
            { disableTransitionAppear: b } = this.state,
            L = N ? T : I,
            D = y > 0;
        if (!D && !A) return null;
        let { enabled: M } = d.Z.getCurrentConfig({ location: 'message_reactions' }, { autoTrackExposure: !0 }),
            P = M && D,
            U = (A && !D) || P;
        return (0, a.jsxs)(u.W, {
            component: 'div',
            className: l()(L.reactions, S),
            transitionAppear: !b,
            role: 'group',
            transitionLeave: !1,
            id: (0, f.bY)(e),
            onMouseEnter: () => this.setState({ isHovered: !0 }),
            onMouseLeave: () => this.setState({ isHovered: !1 }),
            children: [
                (0, a.jsx)(h.l, {
                    reactions: C,
                    message: e,
                    readOnly: n,
                    isLurking: r,
                    isGuest: i,
                    isPendingMember: o,
                    isForumToolbar: s,
                    useChatFontScaling: N,
                    className: v
                }),
                R > 0 &&
                    (0, a.jsx)(c.Clickable, {
                        onClick: (t) => {
                            t.stopPropagation(), (0, p.op)(g, e);
                        },
                        className: l()(L.reaction, v, L.remainingReactions),
                        'aria-label': m.Z.Messages.ADD_REACTION,
                        children: (0, a.jsxs)(c.Text, {
                            className: L.reactionInner,
                            variant: 'text-sm/normal',
                            children: ['+', R]
                        })
                    }),
                !t &&
                    !O &&
                    (0, a.jsx)(E.X, {
                        tabIndex: U || this.state.isHovered ? 0 : -1,
                        type: _.O.NORMAL,
                        message: e,
                        channel: g,
                        useChatFontScaling: N,
                        isHovered: this.state.isHovered,
                        className: l()({
                            [L.forceShow]: U,
                            [L.forceShowLook]: A || P
                        })
                    })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'state', {
                disableTransitionAppear: !0,
                reactionsCount: this.props.message.reactions.length,
                isHovered: !1
            });
    }
}
let O = (e) => {
    let { message: t, maxReactions: n, hoistReaction: r } = e,
        {
            combinedReactions: i,
            remainingReactions: s,
            visibleReactionsCount: l
        } = o.useMemo(() => {
            let e = [],
                i = v(t.reactions, r),
                a = null != n && n < i.length ? i.slice(0, n) : i,
                o = i.length - a.length,
                s = i.length;
            return (
                a.forEach((t) => {
                    t.burst_count > 0 &&
                        e.push({
                            ...t,
                            type: _.O.BURST
                        }),
                        t.count > 0 &&
                            e.push({
                                ...t,
                                type: _.O.NORMAL
                            }),
                        null != t.me_vote && --s;
                }),
                {
                    combinedReactions: e,
                    visibleReactionsCount: s,
                    remainingReactions: o
                }
            );
        }, [r, n, t.reactions]);
    return (0, a.jsx)(N, {
        ...e,
        visibleReactionsCount: l,
        combinedReactions: i,
        remainingReactions: s
    });
};
t.Z = O;
