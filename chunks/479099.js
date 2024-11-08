t.d(n, {
    Z: function () {
        return S;
    },
    f: function () {
        return v;
    }
}),
    t(47120);
var i,
    r,
    l = t(200651),
    o = t(192379),
    u = t(120356),
    a = t.n(u),
    s = t(91192),
    c = t(442837),
    d = t(481060),
    f = t(239091),
    p = t(596454),
    _ = t(607070),
    m = t(339085),
    g = t(695346),
    E = t(572004),
    h = t(388032),
    I = t(889160);
function S(e) {
    let { tag: n, size: i = 1, disabled: r, className: u, onClick: S, onRemove: v, selected: C, ariaLabel: T } = e,
        { name: N, emojiId: b, emojiName: A } = n,
        O = null != v,
        [P, R] = o.useState(!1),
        x = (0, c.e7)([m.ZP], () => (null != b ? m.ZP.getUsableCustomEmojiById(b) : null)),
        L = O || null != S,
        y = (!O || !P) && (null != b || null != A),
        M = 0 === i,
        Z = o.useRef(null),
        j = (0, c.e7)([_.Z], () => _.Z.keyboardModeEnabled),
        D = (e) => {
            let i = g.Sb.getSetting();
            E.wS &&
                i &&
                (0, f.jW)(e, async () => {
                    let { default: e } = await t.e('29646').then(t.bind(t, 955116));
                    return (t) =>
                        (0, l.jsx)(e, {
                            ...t,
                            tag: n
                        });
                });
        },
        U = (0, l.jsxs)(l.Fragment, {
            children: [
                y
                    ? (0, l.jsx)(p.Z, {
                          className: a()(I.emoji, { [I.small]: M }),
                          emojiId: b,
                          emojiName: A,
                          animated: !!(null == x ? void 0 : x.animated),
                          size: 'reaction'
                      })
                    : null,
                P &&
                    O &&
                    (0, l.jsx)('div', {
                        className: I.closeCircle,
                        children: (0, l.jsx)(d.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: I.close
                        })
                    }),
                (0, l.jsx)(d.Text, {
                    variant: M ? 'text-xs/semibold' : 'text-sm/semibold',
                    lineClamp: 1,
                    children: N
                })
            ]
        }),
        w = {
            key: n.id,
            className: a()(
                I.pill,
                {
                    [I.disabled]: r,
                    [I.clickable]: L,
                    [I.small]: M,
                    [I.selected]: C
                },
                u
            ),
            onClick: (e) => {
                null == S || S(e), null == v || v(n), !j && null != Z.current && Z.current.blur();
            },
            onContextMenu: (e) => D(e),
            onMouseEnter: () => O && R(!0),
            onMouseLeave: () => O && R(!1)
        },
        F = (0, s.JA)('forum-tag-'.concat(n.id));
    return L
        ? (0, l.jsx)(d.Clickable, {
              ...F,
              innerRef: Z,
              focusProps: { ringTarget: Z },
              'aria-label': null != T ? T : h.intl.formatToPlainString(h.t.iyRTLi, { tagName: N }),
              role: 'button',
              'aria-pressed': C,
              ...w,
              children: U
          })
        : (0, l.jsx)('div', {
              ...w,
              children: U
          });
}
function v(e) {
    let { tags: n, count: t, size: i = 1 } = e,
        r = 0 === i;
    return (0, l.jsx)(d.Tooltip, {
        'aria-label': h.intl.string(h.t['P/y+sr']),
        text: (0, l.jsx)(l.Fragment, {
            children: n.map((e) =>
                (0, l.jsx)(
                    S,
                    {
                        tag: e,
                        className: I.tooltipPill,
                        size: S.Sizes.SMALL
                    },
                    e.id
                )
            )
        }),
        children: (e) =>
            (0, l.jsx)('div', {
                ...e,
                className: a()(I.pill, { [I.small]: r }),
                children: (0, l.jsxs)(d.Text, {
                    variant: r ? 'text-xs/semibold' : 'text-sm/semibold',
                    children: ['+', t]
                })
            })
    });
}
((r = i || (i = {}))[(r.SMALL = 0)] = 'SMALL'), (r[(r.MEDIUM = 1)] = 'MEDIUM'), (S.Sizes = i);
