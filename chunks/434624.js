n.d(t, {
    l: function () {
        return _;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(866442),
    s = n(596454),
    c = n(434650),
    u = n(446489),
    d = n(56314),
    m = n(566006),
    h = n(287151),
    f = n(96042),
    p = n(688236);
let g = r.memo(function (e) {
        let t,
            n,
            { useChatFontScaling: r, hideEmoji: l, emoji: c, className: g, count: _, me: E, me_burst: C, burst_count: I, burst_colors: x, readOnly: N, isLurking: v, isGuest: T, isPendingMember: S, type: A, emojiSize: b } = e,
            j = A === m.O.BURST,
            Z = (0, h.y4)(E, C, A),
            R = (0, d.v)(j && null != x ? x : []),
            L = r ? p : f,
            P = j ? I : _,
            y = (0, u.y)(P, h.aO),
            O = {};
        if (j && null != R) {
            var M;
            let { accentColor: e, backgroundColor: i, opacity: r } = R,
                l = null !== (M = (0, o.wK)(null != i ? i : '', r)) && void 0 !== M ? M : '';
            Z && (O.borderColor = i), (O.background = l), (t = e), (n = e);
        }
        let k = {
            minWidth: y,
            color: t,
            borderColor: n
        };
        return (0, i.jsxs)('div', {
            className: a()(L.reaction, L.reactionInner, g, {
                [L.reactionMe]: Z,
                [L.reactionReadOnly]: N && !v && !S && !T
            }),
            style: O,
            children: [
                (0, i.jsx)(s.Z, {
                    className: a()({ [L.hideEmoji]: l }),
                    emojiId: c.id,
                    emojiName: c.name,
                    size: b,
                    animated: j && c.animated
                }),
                (0, i.jsx)('div', {
                    className: L.reactionCount,
                    style: k,
                    children: P
                })
            ]
        });
    }),
    _ = r.memo(function (e) {
        let { showImmediate: t, reactions: n, emojiSize: l, ...a } = e,
            [o, s] = r.useState(!1),
            [u, d] = r.useTransition(),
            f = r.useCallback(
                (e) => {
                    e &&
                        !o &&
                        !u &&
                        d(() => {
                            s(!0);
                        });
                },
                [o, u]
            ),
            p = (0, c.O)(f),
            _ = (o && !u) || t ? h.le : g;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', { ref: p }),
                n.map((e) => {
                    var t, n;
                    return (0, i.jsx)(
                        _,
                        {
                            ...a,
                            ...e,
                            emojiSize: l
                        },
                        ((t = e),
                        ''
                            .concat(t.type === m.O.BURST ? 'burst:' : '')
                            .concat(null !== (n = t.emoji.id) && void 0 !== n ? n : 0, ':')
                            .concat(t.emoji.name))
                    );
                })
            ]
        });
    });
