n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(215569),
    s = n(481060),
    c = n(140710),
    u = n(833803),
    d = n(566006),
    m = n(60174),
    h = n(453687),
    f = n(434624),
    p = n(287151),
    g = n(388032),
    _ = n(636804),
    E = n(952714);
let C = (e, t) => (null == e && null == t) || e === t,
    I = (e, t) => e.findIndex((e) => C(e.emoji.id, null == t ? void 0 : t.id) && C(e.emoji.name, null == t ? void 0 : t.name)),
    x = (e, t) => {
        if (null == t) return e;
        let n = I(e, t);
        return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)];
    };
class N extends r.PureComponent {
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
        let { message: e, disableReactionCreates: t, disableReactionUpdates: n, isLurking: r, isGuest: l, isPendingMember: C, isForumToolbar: I, channel: x, className: N, forceAddReactions: v, reactionClassName: T, useChatFontScaling: S, forceHideReactionCreates: A, remainingReactions: b, combinedReactions: j, visibleReactionsCount: Z } = this.props,
            { disableTransitionAppear: R } = this.state,
            P = S ? E : _,
            L = Z > 0;
        if (!L && !v) return null;
        let { enabled: y } = c.Z.getCurrentConfig({ location: 'message_reactions' }, { autoTrackExposure: !0 }),
            { canShowImprovedReactionButton: O } = u.Z.getCurrentConfig({ location: 'message_reactions' }, { autoTrackExposure: !0 }),
            M = y && L,
            k = (v && !L) || M,
            D = O && !I;
        return (0, i.jsxs)(o.W, {
            component: 'div',
            className: a()(P.reactions, N, { [P.largeReactions]: D }),
            transitionAppear: !R,
            role: 'group',
            transitionLeave: !1,
            id: (0, h.bY)(e),
            onMouseEnter: () => this.setState({ isHovered: !0 }),
            onMouseLeave: () => this.setState({ isHovered: !1 }),
            children: [
                (0, i.jsx)(f.l, {
                    reactions: j,
                    message: e,
                    readOnly: n,
                    isLurking: r,
                    isGuest: l,
                    isPendingMember: C,
                    isForumToolbar: I,
                    useChatFontScaling: S,
                    className: T,
                    emojiSize: D ? 'reactionLarge' : 'reaction'
                }),
                b > 0 &&
                    (0, i.jsx)(s.Clickable, {
                        onClick: (t) => {
                            t.stopPropagation(), (0, p.op)(x, e);
                        },
                        className: a()(P.reaction, T, P.remainingReactions),
                        'aria-label': g.intl.string(g.t.lfIHs7),
                        children: (0, i.jsxs)(s.Text, {
                            className: P.reactionInner,
                            variant: 'text-sm/normal',
                            children: ['+', b]
                        })
                    }),
                !t &&
                    !A &&
                    (0, i.jsx)(m.X, {
                        tabIndex: k || this.state.isHovered ? 0 : -1,
                        type: d.O.NORMAL,
                        message: e,
                        channel: x,
                        useChatFontScaling: S,
                        isHovered: this.state.isHovered,
                        className: a()({
                            [P.forceShow]: k,
                            [P.forceShowLook]: v || M
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
    let { message: t, maxReactions: n, hoistReaction: l } = e,
        {
            combinedReactions: a,
            remainingReactions: o,
            visibleReactionsCount: s
        } = r.useMemo(() => {
            let e = [],
                i = x(t.reactions, l),
                r = null != n && n < i.length ? i.slice(0, n) : i,
                a = i.length - r.length,
                o = i.length;
            return (
                r.forEach((t) => {
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
                        null != t.me_vote && --o;
                }),
                {
                    combinedReactions: e,
                    visibleReactionsCount: o,
                    remainingReactions: a
                }
            );
        }, [l, n, t.reactions]);
    return (0, i.jsx)(N, {
        ...e,
        visibleReactionsCount: s,
        combinedReactions: a,
        remainingReactions: o
    });
};
