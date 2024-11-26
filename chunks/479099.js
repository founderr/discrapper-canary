n.d(t, {
    Z: function () {
        return S;
    },
    f: function () {
        return C;
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
    _ = n(596454),
    E = n(607070),
    p = n(339085),
    m = n(695346),
    g = n(572004),
    h = n(388032),
    I = n(680475);
function S(e) {
    let { tag: t, size: i = 1, disabled: r, className: u, onClick: S, onRemove: C, selected: T, ariaLabel: v } = e,
        { name: N, emojiId: A, emojiName: b } = t,
        L = null != C,
        [O, R] = o.useState(!1),
        P = (0, c.e7)([p.ZP], () => (null != A ? p.ZP.getUsableCustomEmojiById(A) : null)),
        y = L || null != S,
        Z = (!L || !O) && (null != A || null != b),
        M = 0 === i,
        x = o.useRef(null),
        j = (0, c.e7)([E.Z], () => E.Z.keyboardModeEnabled),
        U = (e) => {
            let i = m.Sb.getSetting();
            g.wS &&
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
        D = (0, l.jsxs)(l.Fragment, {
            children: [
                Z
                    ? (0, l.jsx)(_.Z, {
                          className: a()(I.emoji, { [I.small]: M }),
                          emojiId: A,
                          emojiName: b,
                          animated: !!(null == P ? void 0 : P.animated),
                          size: 'reaction'
                      })
                    : null,
                O &&
                    L &&
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
        F = {
            key: t.id,
            className: a()(
                I.pill,
                {
                    [I.disabled]: r,
                    [I.clickable]: y,
                    [I.small]: M,
                    [I.selected]: T
                },
                u
            ),
            onClick: (e) => {
                null == S || S(e), null == C || C(t), !j && null != x.current && x.current.blur();
            },
            onContextMenu: (e) => U(e),
            onMouseEnter: () => L && R(!0),
            onMouseLeave: () => L && R(!1)
        },
        w = (0, s.JA)('forum-tag-'.concat(t.id));
    return y
        ? (0, l.jsx)(d.Clickable, {
              ...w,
              innerRef: x,
              focusProps: { ringTarget: x },
              'aria-label': null != v ? v : h.intl.formatToPlainString(h.t.iyRTLi, { tagName: N }),
              role: 'button',
              'aria-pressed': T,
              ...F,
              children: D
          })
        : (0, l.jsx)('div', {
              ...F,
              children: D
          });
}
function C(e) {
    let { tags: t, count: n, size: i = 1 } = e,
        r = 0 === i;
    return (0, l.jsx)(d.Tooltip, {
        'aria-label': h.intl.string(h.t['P/y+sr']),
        text: (0, l.jsx)(l.Fragment, {
            children: t.map((e) =>
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
                    children: ['+', n]
                })
            })
    });
}
((r = i || (i = {}))[(r.SMALL = 0)] = 'SMALL'), (r[(r.MEDIUM = 1)] = 'MEDIUM'), (S.Sizes = i);
