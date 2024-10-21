t.d(n, {
    Z: function () {
        return g;
    },
    f: function () {
        return N;
    }
}),
    t(47120);
var r,
    i,
    l = t(200651),
    o = t(192379),
    u = t(120356),
    s = t.n(u),
    a = t(91192),
    c = t(442837),
    d = t(481060),
    _ = t(239091),
    E = t(596454),
    f = t(607070),
    I = t(339085),
    S = t(695346),
    p = t(572004),
    T = t(689938),
    C = t(813778);
function g(e) {
    let { tag: n, size: r = 1, disabled: i, className: u, onClick: g, onRemove: N, selected: m, ariaLabel: A } = e,
        { name: h, emojiId: v, emojiName: L } = n,
        O = null != N,
        [R, M] = o.useState(!1),
        D = (0, c.e7)([I.ZP], () => (null != v ? I.ZP.getUsableCustomEmojiById(v) : null)),
        U = O || null != g,
        Z = (!O || !R) && (null != v || null != L),
        b = 0 === r,
        P = o.useRef(null),
        y = (0, c.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        x = (e) => {
            let r = S.Sb.getSetting();
            p.wS &&
                r &&
                (0, _.jW)(e, async () => {
                    let { default: e } = await t.e('29646').then(t.bind(t, 955116));
                    return (t) =>
                        (0, l.jsx)(e, {
                            ...t,
                            tag: n
                        });
                });
        },
        G = (0, l.jsxs)(l.Fragment, {
            children: [
                Z
                    ? (0, l.jsx)(E.Z, {
                          className: s()(C.emoji, { [C.small]: b }),
                          emojiId: v,
                          emojiName: L,
                          animated: !!(null == D ? void 0 : D.animated),
                          size: 'reaction'
                      })
                    : null,
                R &&
                    O &&
                    (0, l.jsx)('div', {
                        className: C.closeCircle,
                        children: (0, l.jsx)(d.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: C.close
                        })
                    }),
                (0, l.jsx)(d.Text, {
                    variant: b ? 'text-xs/semibold' : 'text-sm/semibold',
                    lineClamp: 1,
                    children: h
                })
            ]
        }),
        F = {
            key: n.id,
            className: s()(
                C.pill,
                {
                    [C.disabled]: i,
                    [C.clickable]: U,
                    [C.small]: b,
                    [C.selected]: m
                },
                u
            ),
            onClick: (e) => {
                null == g || g(e), null == N || N(n), !y && null != P.current && P.current.blur();
            },
            onContextMenu: (e) => x(e),
            onMouseEnter: () => O && M(!0),
            onMouseLeave: () => O && M(!1)
        },
        j = (0, a.JA)('forum-tag-'.concat(n.id));
    return U
        ? (0, l.jsx)(d.Clickable, {
              ...j,
              innerRef: P,
              focusProps: { ringTarget: P },
              'aria-label': null != A ? A : T.Z.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({ tagName: h }),
              role: 'button',
              'aria-pressed': m,
              ...F,
              children: G
          })
        : (0, l.jsx)('div', {
              ...F,
              children: G
          });
}
function N(e) {
    let { tags: n, count: t, size: r = 1 } = e,
        i = 0 === r;
    return (0, l.jsx)(d.Tooltip, {
        'aria-label': T.Z.Messages.FORUM_TAGS,
        text: (0, l.jsx)(l.Fragment, {
            children: n.map((e) =>
                (0, l.jsx)(
                    g,
                    {
                        tag: e,
                        className: C.tooltipPill,
                        size: g.Sizes.SMALL
                    },
                    e.id
                )
            )
        }),
        children: (e) =>
            (0, l.jsx)('div', {
                ...e,
                className: s()(C.pill, { [C.small]: i }),
                children: (0, l.jsxs)(d.Text, {
                    variant: i ? 'text-xs/semibold' : 'text-sm/semibold',
                    children: ['+', t]
                })
            })
    });
}
((i = r || (r = {}))[(i.SMALL = 0)] = 'SMALL'), (i[(i.MEDIUM = 1)] = 'MEDIUM'), (g.Sizes = r);
