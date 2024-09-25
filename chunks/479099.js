n.d(t, {
    Z: function () {
        return g;
    },
    f: function () {
        return S;
    }
});
var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(91192),
    c = n(442837),
    d = n(481060),
    _ = n(239091),
    E = n(596454),
    f = n(607070),
    h = n(339085),
    p = n(695346),
    m = n(572004),
    I = n(689938),
    T = n(813778);
function g(e) {
    let { tag: t, size: r = 1, disabled: i, className: s, onClick: g, onRemove: S, selected: A, ariaLabel: v } = e,
        { name: N, emojiId: O, emojiName: R } = t,
        C = null != S,
        [y, b] = o.useState(!1),
        L = (0, c.e7)([h.ZP], () => (null != O ? h.ZP.getUsableCustomEmojiById(O) : null)),
        D = C || null != g,
        M = (!C || !y) && (null != O || null != R),
        P = 0 === r,
        U = o.useRef(null),
        w = (0, c.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        x = (e) => {
            null == g || g(e), null == S || S(t), !w && null != U.current && U.current.blur();
        },
        G = (e) => {
            let r = p.Sb.getSetting();
            m.wS &&
                r &&
                (0, _.jW)(e, async () => {
                    let { default: e } = await n.e('29646').then(n.bind(n, 955116));
                    return (n) =>
                        (0, a.jsx)(e, {
                            ...n,
                            tag: t
                        });
                });
        },
        k = (0, a.jsxs)(a.Fragment, {
            children: [
                M
                    ? (0, a.jsx)(E.Z, {
                          className: l()(T.emoji, { [T.small]: P }),
                          emojiId: O,
                          emojiName: R,
                          animated: !!(null == L ? void 0 : L.animated),
                          size: 'reaction'
                      })
                    : null,
                y &&
                    C &&
                    (0, a.jsx)('div', {
                        className: T.closeCircle,
                        children: (0, a.jsx)(d.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: T.close
                        })
                    }),
                (0, a.jsx)(d.Text, {
                    variant: P ? 'text-xs/semibold' : 'text-sm/semibold',
                    lineClamp: 1,
                    children: N
                })
            ]
        }),
        B = {
            key: t.id,
            className: l()(
                T.pill,
                {
                    [T.disabled]: i,
                    [T.clickable]: D,
                    [T.small]: P,
                    [T.selected]: A
                },
                s
            ),
            onClick: x,
            onContextMenu: (e) => G(e),
            onMouseEnter: () => C && b(!0),
            onMouseLeave: () => C && b(!1)
        },
        F = (0, u.JA)('forum-tag-'.concat(t.id));
    return D
        ? (0, a.jsx)(d.Clickable, {
              ...F,
              innerRef: U,
              focusProps: { ringTarget: U },
              'aria-label': null != v ? v : I.Z.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({ tagName: N }),
              role: 'button',
              'aria-pressed': A,
              ...B,
              children: k
          })
        : (0, a.jsx)('div', {
              ...B,
              children: k
          });
}
function S(e) {
    let { tags: t, count: n, size: r = 1 } = e,
        i = 0 === r;
    return (0, a.jsx)(d.Tooltip, {
        'aria-label': I.Z.Messages.FORUM_TAGS,
        text: (0, a.jsx)(a.Fragment, {
            children: t.map((e) =>
                (0, a.jsx)(
                    g,
                    {
                        tag: e,
                        className: T.tooltipPill,
                        size: g.Sizes.SMALL
                    },
                    e.id
                )
            )
        }),
        children: (e) =>
            (0, a.jsx)('div', {
                ...e,
                className: l()(T.pill, { [T.small]: i }),
                children: (0, a.jsxs)(d.Text, {
                    variant: i ? 'text-xs/semibold' : 'text-sm/semibold',
                    children: ['+', n]
                })
            })
    });
}
!(function (e) {
    (e[(e.SMALL = 0)] = 'SMALL'), (e[(e.MEDIUM = 1)] = 'MEDIUM');
})(r || (r = {})),
    (g.Sizes = r);
