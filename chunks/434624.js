n.d(t, {
    l: function () {
        return f;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(866442),
    o = n(596454),
    c = n(434650),
    u = n(446489),
    d = n(56314),
    _ = n(566006),
    E = n(287151),
    I = n(96042),
    m = n(968661);
let T = a.memo(function (e) {
        let t,
            n,
            { useChatFontScaling: a, hideEmoji: s, emoji: c, className: T, count: f, me: h, me_burst: N, burst_count: p, burst_colors: C, readOnly: g, isLurking: S, isGuest: A, isPendingMember: x, type: R, emojiSize: O } = e,
            v = R === _.O.BURST,
            M = (0, E.y4)(h, N, R),
            L = (0, d.v)(v && null != C ? C : []),
            Z = a ? m : I,
            P = v ? p : f,
            b = (0, u.y)(P, E.aO),
            D = {};
        if (v && null != L) {
            var j;
            let { accentColor: e, backgroundColor: i, opacity: a } = L,
                s = null !== (j = (0, l.wK)(null != i ? i : '', a)) && void 0 !== j ? j : '';
            M && (D.borderColor = i), (D.background = s), (t = e), (n = e);
        }
        let U = {
            minWidth: b,
            color: t,
            borderColor: n
        };
        return (0, i.jsxs)('div', {
            className: r()(Z.reaction, Z.reactionInner, T, {
                [Z.reactionMe]: M,
                [Z.reactionReadOnly]: g && !S && !x && !A
            }),
            style: D,
            children: [
                (0, i.jsx)(o.Z, {
                    className: r()({ [Z.hideEmoji]: s }),
                    emojiId: c.id,
                    emojiName: c.name,
                    size: O,
                    animated: v && c.animated
                }),
                (0, i.jsx)('div', {
                    className: Z.reactionCount,
                    style: U,
                    children: P
                })
            ]
        });
    }),
    f = a.memo(function (e) {
        let { showImmediate: t, reactions: n, emojiSize: s, ...r } = e,
            [l, o] = a.useState(!1),
            [u, d] = a.useTransition(),
            I = a.useCallback(
                (e) => {
                    e &&
                        !l &&
                        !u &&
                        d(() => {
                            o(!0);
                        });
                },
                [l, u]
            ),
            m = (0, c.O)(I),
            f = (l && !u) || t ? E.le : T;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', { ref: m }),
                n.map((e) => {
                    var t, n;
                    return (0, i.jsx)(
                        f,
                        {
                            ...r,
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
