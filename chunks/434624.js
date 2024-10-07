n.d(t, {
    l: function () {
        return N;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(866442),
    o = n(596454),
    c = n(434650),
    d = n(446489),
    u = n(56314),
    _ = n(566006),
    E = n(287151),
    I = n(96042),
    m = n(968661);
let T = a.memo(function (e) {
        let t,
            n,
            { useChatFontScaling: a, hideEmoji: s, emoji: c, className: T, count: N, me: h, me_burst: C, burst_count: p, burst_colors: f, readOnly: g, isLurking: A, isGuest: S, isPendingMember: M, type: O } = e,
            x = O === _.O.BURST,
            R = (0, E.y4)(h, C, O),
            v = (0, u.v)(x && null != f ? f : []),
            L = a ? m : I,
            Z = x ? p : N,
            P = (0, d.y)(Z, E.aO),
            D = {};
        if (x && null != v) {
            var b;
            let { accentColor: e, backgroundColor: i, opacity: a } = v,
                s = null !== (b = (0, r.wK)(null != i ? i : '', a)) && void 0 !== b ? b : '';
            R && (D.borderColor = i), (D.background = s), (t = e), (n = e);
        }
        let j = {
            minWidth: P,
            color: t,
            borderColor: n
        };
        return (0, i.jsxs)('div', {
            className: l()(L.reaction, L.reactionInner, T, {
                [L.reactionMe]: R,
                [L.reactionReadOnly]: g && !A && !M && !S
            }),
            style: D,
            children: [
                (0, i.jsx)(o.Z, {
                    className: l()({ [L.hideEmoji]: s }),
                    emojiId: c.id,
                    emojiName: c.name,
                    size: 'reaction',
                    animated: x && c.animated
                }),
                (0, i.jsx)('div', {
                    className: L.reactionCount,
                    style: j,
                    children: Z
                })
            ]
        });
    }),
    N = a.memo(function (e) {
        let { showImmediate: t, reactions: n, ...s } = e,
            [l, r] = a.useState(!1),
            [o, d] = a.useTransition(),
            u = a.useCallback(
                (e) => {
                    e &&
                        !l &&
                        !o &&
                        d(() => {
                            r(!0);
                        });
                },
                [l, o]
            ),
            I = (0, c.O)(u),
            m = (l && !o) || t ? E.le : T;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', { ref: I }),
                n.map((e) => {
                    var t, n;
                    return (0, i.jsx)(
                        m,
                        {
                            ...s,
                            ...e
                        },
                        ((t = e),
                        ''
                            .concat(t.type === _.O.BURST ? 'burst:' : '')
                            .concat(null !== (n = t.emoji.id) && void 0 !== n ? n : 0, ':')
                            .concat(t.emoji.name))
                    );
                })
            ]
        });
    });
