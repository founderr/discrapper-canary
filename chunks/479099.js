n.d(t, {
    Z: function () {
        return C;
    },
    f: function () {
        return S;
    }
}),
    n(47120);
var i,
    r,
    o = n(200651),
    l = n(192379),
    u = n(120356),
    a = n.n(u),
    s = n(91192),
    c = n(442837),
    d = n(481060),
    f = n(239091),
    _ = n(596454),
    p = n(607070),
    g = n(339085),
    E = n(695346),
    m = n(572004),
    I = n(388032),
    h = n(680475);
function C(e) {
    let { tag: t, size: i = 1, disabled: r, className: u, onClick: C, onRemove: S, selected: T, ariaLabel: v } = e,
        { name: b, emojiId: N, emojiName: A } = t,
        O = null != S,
        [L, P] = l.useState(!1),
        R = (0, c.e7)([g.ZP], () => (null != N ? g.ZP.getUsableCustomEmojiById(N) : null)),
        M = O || null != C,
        y = (!O || !L) && (null != N || null != A),
        x = 0 === i,
        Z = l.useRef(null),
        j = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        U = (e) => {
            let i = E.Sb.getSetting();
            m.wS &&
                i &&
                (0, f.jW)(e, async () => {
                    let { default: e } = await n.e('29646').then(n.bind(n, 955116));
                    return (n) =>
                        (0, o.jsx)(e, {
                            ...n,
                            tag: t
                        });
                });
        },
        D = (0, o.jsxs)(o.Fragment, {
            children: [
                y
                    ? (0, o.jsx)(_.Z, {
                          className: a()(h.emoji, { [h.small]: x }),
                          emojiId: N,
                          emojiName: A,
                          animated: !!(null == R ? void 0 : R.animated),
                          size: 'reaction'
                      })
                    : null,
                L &&
                    O &&
                    (0, o.jsx)('div', {
                        className: h.closeCircle,
                        children: (0, o.jsx)(d.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: h.close
                        })
                    }),
                (0, o.jsx)(d.Text, {
                    variant: x ? 'text-xs/semibold' : 'text-sm/semibold',
                    lineClamp: 1,
                    children: b
                })
            ]
        }),
        F = {
            key: t.id,
            className: a()(
                h.pill,
                {
                    [h.disabled]: r,
                    [h.clickable]: M,
                    [h.small]: x,
                    [h.selected]: T
                },
                u
            ),
            onClick: (e) => {
                null == C || C(e), null == S || S(t), !j && null != Z.current && Z.current.blur();
            },
            onContextMenu: (e) => U(e),
            onMouseEnter: () => O && P(!0),
            onMouseLeave: () => O && P(!1)
        },
        w = (0, s.JA)('forum-tag-'.concat(t.id));
    return M
        ? (0, o.jsx)(d.Clickable, {
              ...w,
              innerRef: Z,
              focusProps: { ringTarget: Z },
              'aria-label': null != v ? v : I.intl.formatToPlainString(I.t.iyRTLi, { tagName: b }),
              role: 'button',
              'aria-pressed': T,
              ...F,
              children: D
          })
        : (0, o.jsx)('div', {
              ...F,
              children: D
          });
}
function S(e) {
    let { tags: t, count: n, size: i = 1 } = e,
        r = 0 === i;
    return (0, o.jsx)(d.Tooltip, {
        'aria-label': I.intl.string(I.t['P/y+sr']),
        text: (0, o.jsx)(o.Fragment, {
            children: t.map((e) =>
                (0, o.jsx)(
                    C,
                    {
                        tag: e,
                        className: h.tooltipPill,
                        size: C.Sizes.SMALL
                    },
                    e.id
                )
            )
        }),
        children: (e) =>
            (0, o.jsx)('div', {
                ...e,
                className: a()(h.pill, { [h.small]: r }),
                children: (0, o.jsxs)(d.Text, {
                    variant: r ? 'text-xs/semibold' : 'text-sm/semibold',
                    children: ['+', n]
                })
            })
    });
}
((r = i || (i = {}))[(r.SMALL = 0)] = 'SMALL'), (r[(r.MEDIUM = 1)] = 'MEDIUM'), (C.Sizes = i);
