n.d(t, {
    Z: function () {
        return I;
    },
    f: function () {
        return v;
    }
}),
    n(47120);
var i,
    r,
    l = n(200651),
    o = n(192379),
    u = n(120356),
    a = n.n(u),
    s = n(91192),
    c = n(442837),
    d = n(481060),
    f = n(239091),
    p = n(596454),
    _ = n(607070),
    E = n(339085),
    g = n(695346),
    m = n(572004),
    h = n(388032),
    S = n(889160);
function I(e) {
    let { tag: t, size: i = 1, disabled: r, className: u, onClick: I, onRemove: v, selected: C, ariaLabel: T } = e,
        { name: N, emojiId: b, emojiName: A } = t,
        O = null != v,
        [L, R] = o.useState(!1),
        P = (0, c.e7)([E.ZP], () => (null != b ? E.ZP.getUsableCustomEmojiById(b) : null)),
        y = O || null != I,
        M = (!O || !L) && (null != b || null != A),
        x = 0 === i,
        Z = o.useRef(null),
        U = (0, c.e7)([_.Z], () => _.Z.keyboardModeEnabled),
        D = (e) => {
            let i = g.Sb.getSetting();
            m.wS &&
                i &&
                (0, f.jW)(e, async () => {
                    let { default: e } = await n.e('29646').then(n.bind(n, 955116));
                    return (n) =>
                        (0, l.jsx)(e, {
                            ...n,
                            tag: t
                        });
                });
        },
        j = (0, l.jsxs)(l.Fragment, {
            children: [
                M
                    ? (0, l.jsx)(p.Z, {
                          className: a()(S.emoji, { [S.small]: x }),
                          emojiId: b,
                          emojiName: A,
                          animated: !!(null == P ? void 0 : P.animated),
                          size: 'reaction'
                      })
                    : null,
                L &&
                    O &&
                    (0, l.jsx)('div', {
                        className: S.closeCircle,
                        children: (0, l.jsx)(d.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: S.close
                        })
                    }),
                (0, l.jsx)(d.Text, {
                    variant: x ? 'text-xs/semibold' : 'text-sm/semibold',
                    lineClamp: 1,
                    children: N
                })
            ]
        }),
        F = {
            key: t.id,
            className: a()(
                S.pill,
                {
                    [S.disabled]: r,
                    [S.clickable]: y,
                    [S.small]: x,
                    [S.selected]: C
                },
                u
            ),
            onClick: (e) => {
                null == I || I(e), null == v || v(t), !U && null != Z.current && Z.current.blur();
            },
            onContextMenu: (e) => D(e),
            onMouseEnter: () => O && R(!0),
            onMouseLeave: () => O && R(!1)
        },
        w = (0, s.JA)('forum-tag-'.concat(t.id));
    return y
        ? (0, l.jsx)(d.Clickable, {
              ...w,
              innerRef: Z,
              focusProps: { ringTarget: Z },
              'aria-label': null != T ? T : h.intl.formatToPlainString(h.t.iyRTLi, { tagName: N }),
              role: 'button',
              'aria-pressed': C,
              ...F,
              children: j
          })
        : (0, l.jsx)('div', {
              ...F,
              children: j
          });
}
function v(e) {
    let { tags: t, count: n, size: i = 1 } = e,
        r = 0 === i;
    return (0, l.jsx)(d.Tooltip, {
        'aria-label': h.intl.string(h.t['P/y+sr']),
        text: (0, l.jsx)(l.Fragment, {
            children: t.map((e) =>
                (0, l.jsx)(
                    I,
                    {
                        tag: e,
                        className: S.tooltipPill,
                        size: I.Sizes.SMALL
                    },
                    e.id
                )
            )
        }),
        children: (e) =>
            (0, l.jsx)('div', {
                ...e,
                className: a()(S.pill, { [S.small]: r }),
                children: (0, l.jsxs)(d.Text, {
                    variant: r ? 'text-xs/semibold' : 'text-sm/semibold',
                    children: ['+', n]
                })
            })
    });
}
((r = i || (i = {}))[(r.SMALL = 0)] = 'SMALL'), (r[(r.MEDIUM = 1)] = 'MEDIUM'), (I.Sizes = i);
