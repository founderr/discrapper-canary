n.d(t, {
    l: function () {
        return T;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(866442),
    u = n(596454),
    c = n(434650),
    d = n(446489),
    _ = n(56314),
    E = n(566006),
    f = n(287151),
    h = n(96042),
    p = n(968661);
let m = a.memo(function (e) {
    let t,
        n,
        { useChatFontScaling: r, hideEmoji: a, emoji: o, className: c, count: m, me: I, me_burst: T, burst_count: g, burst_colors: S, readOnly: A, isLurking: v, isGuest: N, isPendingMember: O, type: R } = e,
        C = R === E.O.BURST,
        y = (0, f.y4)(I, T, R),
        b = (0, _.v)(C && null != S ? S : []),
        L = r ? p : h,
        D = C ? g : m,
        M = (0, d.y)(D, f.aO),
        P = {};
    if (C && null != b) {
        var U;
        let { accentColor: e, backgroundColor: r, opacity: i } = b,
            a = null !== (U = (0, l.wK)(null != r ? r : '', i)) && void 0 !== U ? U : '';
        y && (P.borderColor = r), (P.background = a), (t = e), (n = e);
    }
    let w = {
        minWidth: M,
        color: t,
        borderColor: n
    };
    return (0, i.jsxs)('div', {
        className: s()(L.reaction, L.reactionInner, c, {
            [L.reactionMe]: y,
            [L.reactionReadOnly]: A && !v && !O && !N
        }),
        style: P,
        children: [
            (0, i.jsx)(u.Z, {
                className: s()({ [L.hideEmoji]: a }),
                emojiId: o.id,
                emojiName: o.name,
                size: 'reaction',
                animated: C && o.animated
            }),
            (0, i.jsx)('div', {
                className: L.reactionCount,
                style: w,
                children: D
            })
        ]
    });
});
function I(e) {
    var t;
    return ''
        .concat(e.type === E.O.BURST ? 'burst:' : '')
        .concat(null !== (t = e.emoji.id) && void 0 !== t ? t : 0, ':')
        .concat(e.emoji.name);
}
let T = a.memo(function (e) {
    let { showImmediate: t, reactions: n, ...r } = e,
        [o, s] = a.useState(!1),
        [l, u] = a.useTransition(),
        d = a.useCallback(
            (e) => {
                e &&
                    !o &&
                    !l &&
                    u(() => {
                        s(!0);
                    });
            },
            [o, l]
        ),
        _ = (0, c.O)(d),
        E = (o && !l) || t ? f.le : m;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { ref: _ }),
            n.map((e) =>
                (0, i.jsx)(
                    E,
                    {
                        ...r,
                        ...e
                    },
                    I(e)
                )
            )
        ]
    });
});
