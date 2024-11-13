l.d(t, {
    Z: function () {
        return E;
    },
    f: function () {
        return b;
    }
}),
    l(47120);
var n,
    i,
    a = l(200651),
    o = l(192379),
    r = l(120356),
    s = l.n(r),
    d = l(91192),
    u = l(442837),
    c = l(481060),
    m = l(239091),
    f = l(596454),
    h = l(607070),
    g = l(339085),
    p = l(695346),
    x = l(572004),
    _ = l(388032),
    v = l(813778);
function E(e) {
    let { tag: t, size: n = 1, disabled: i, className: r, onClick: E, onRemove: b, selected: I, ariaLabel: C } = e,
        { name: j, emojiId: M, emojiName: S } = t,
        P = null != b,
        [A, Z] = o.useState(!1),
        z = (0, u.e7)([g.ZP], () => (null != M ? g.ZP.getUsableCustomEmojiById(M) : null)),
        y = P || null != E,
        T = (!P || !A) && (null != M || null != S),
        N = 0 === n,
        R = o.useRef(null),
        w = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled),
        L = (e) => {
            let n = p.Sb.getSetting();
            x.wS &&
                n &&
                (0, m.jW)(e, async () => {
                    let { default: e } = await l.e('29646').then(l.bind(l, 955116));
                    return (l) =>
                        (0, a.jsx)(e, {
                            ...l,
                            tag: t
                        });
                });
        },
        k = (0, a.jsxs)(a.Fragment, {
            children: [
                T
                    ? (0, a.jsx)(f.Z, {
                          className: s()(v.emoji, { [v.small]: N }),
                          emojiId: M,
                          emojiName: S,
                          animated: !!(null == z ? void 0 : z.animated),
                          size: 'reaction'
                      })
                    : null,
                A &&
                    P &&
                    (0, a.jsx)('div', {
                        className: v.closeCircle,
                        children: (0, a.jsx)(c.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: v.close
                        })
                    }),
                (0, a.jsx)(c.Text, {
                    variant: N ? 'text-xs/semibold' : 'text-sm/semibold',
                    lineClamp: 1,
                    children: j
                })
            ]
        }),
        U = {
            key: t.id,
            className: s()(
                v.pill,
                {
                    [v.disabled]: i,
                    [v.clickable]: y,
                    [v.small]: N,
                    [v.selected]: I
                },
                r
            ),
            onClick: (e) => {
                null == E || E(e), null == b || b(t), !w && null != R.current && R.current.blur();
            },
            onContextMenu: (e) => L(e),
            onMouseEnter: () => P && Z(!0),
            onMouseLeave: () => P && Z(!1)
        },
        B = (0, d.JA)('forum-tag-'.concat(t.id));
    return y
        ? (0, a.jsx)(c.Clickable, {
              ...B,
              innerRef: R,
              focusProps: { ringTarget: R },
              'aria-label': null != C ? C : _.intl.formatToPlainString(_.t.iyRTLi, { tagName: j }),
              role: 'button',
              'aria-pressed': I,
              ...U,
              children: k
          })
        : (0, a.jsx)('div', {
              ...U,
              children: k
          });
}
function b(e) {
    let { tags: t, count: l, size: n = 1 } = e,
        i = 0 === n;
    return (0, a.jsx)(c.Tooltip, {
        'aria-label': _.intl.string(_.t['P/y+sr']),
        text: (0, a.jsx)(a.Fragment, {
            children: t.map((e) =>
                (0, a.jsx)(
                    E,
                    {
                        tag: e,
                        className: v.tooltipPill,
                        size: E.Sizes.SMALL
                    },
                    e.id
                )
            )
        }),
        children: (e) =>
            (0, a.jsx)('div', {
                ...e,
                className: s()(v.pill, { [v.small]: i }),
                children: (0, a.jsxs)(c.Text, {
                    variant: i ? 'text-xs/semibold' : 'text-sm/semibold',
                    children: ['+', l]
                })
            })
    });
}
((i = n || (n = {}))[(i.SMALL = 0)] = 'SMALL'), (i[(i.MEDIUM = 1)] = 'MEDIUM'), (E.Sizes = n);
