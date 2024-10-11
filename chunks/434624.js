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
            { useChatFontScaling: a, hideEmoji: s, emoji: c, className: T, count: N, me: h, me_burst: C, burst_count: p, burst_colors: f, readOnly: g, isLurking: A, isGuest: S, isPendingMember: M, type: O, emojiSize: x } = e,
            R = O === _.O.BURST,
            v = (0, E.y4)(h, C, O),
            Z = (0, u.v)(R && null != f ? f : []),
            L = a ? m : I,
            P = R ? p : N,
            b = (0, d.y)(P, E.aO),
            D = {};
        if (R && null != Z) {
            var j;
            let { accentColor: e, backgroundColor: i, opacity: a } = Z,
                s = null !== (j = (0, r.wK)(null != i ? i : '', a)) && void 0 !== j ? j : '';
            v && (D.borderColor = i), (D.background = s), (t = e), (n = e);
        }
        let U = {
            minWidth: b,
            color: t,
            borderColor: n
        };
        return (0, i.jsxs)('div', {
            className: l()(L.reaction, L.reactionInner, T, {
                [L.reactionMe]: v,
                [L.reactionReadOnly]: g && !A && !M && !S
            }),
            style: D,
            children: [
                (0, i.jsx)(o.Z, {
                    className: l()({ [L.hideEmoji]: s }),
                    emojiId: c.id,
                    emojiName: c.name,
                    size: x,
                    animated: R && c.animated
                }),
                (0, i.jsx)('div', {
                    className: L.reactionCount,
                    style: U,
                    children: P
                })
            ]
        });
    }),
    N = a.memo(function (e) {
        let { showImmediate: t, reactions: n, emojiSize: s, ...l } = e,
            [r, o] = a.useState(!1),
            [d, u] = a.useTransition(),
            I = a.useCallback(
                (e) => {
                    e &&
                        !r &&
                        !d &&
                        u(() => {
                            o(!0);
                        });
                },
                [r, d]
            ),
            m = (0, c.O)(I),
            N = (r && !d) || t ? E.le : T;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', { ref: m }),
                n.map((e) => {
                    var t, n;
                    return (0, i.jsx)(
                        N,
                        {
                            ...l,
                            ...e,
                            emojiSize: s
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
