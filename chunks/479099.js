t.d(n, {
    Z: function () {
        return N;
    },
    f: function () {
        return A;
    }
}),
    t(47120);
var i,
    r,
    l = t(735250),
    o = t(470079),
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
    T = t(572004),
    C = t(689938),
    p = t(813778);
function N(e) {
    let { tag: n, size: i = 1, disabled: r, className: u, onClick: N, onRemove: A, selected: g, ariaLabel: m } = e,
        { name: L, emojiId: O, emojiName: R } = n,
        h = null != A,
        [v, M] = o.useState(!1),
        D = (0, c.e7)([I.ZP], () => (null != O ? I.ZP.getUsableCustomEmojiById(O) : null)),
        U = h || null != N,
        Z = (!h || !v) && (null != O || null != R),
        P = 0 === i,
        b = o.useRef(null),
        G = (0, c.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        y = (e) => {
            let i = S.Sb.getSetting();
            T.wS &&
                i &&
                (0, _.jW)(e, async () => {
                    let { default: e } = await t.e('29646').then(t.bind(t, 955116));
                    return (t) =>
                        (0, l.jsx)(e, {
                            ...t,
                            tag: n
                        });
                });
        },
        x = (0, l.jsxs)(l.Fragment, {
            children: [
                Z
                    ? (0, l.jsx)(E.Z, {
                          className: s()(p.emoji, { [p.small]: P }),
                          emojiId: O,
                          emojiName: R,
                          animated: !!(null == D ? void 0 : D.animated),
                          size: 'reaction'
                      })
                    : null,
                v &&
                    h &&
                    (0, l.jsx)('div', {
                        className: p.closeCircle,
                        children: (0, l.jsx)(d.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: p.close
                        })
                    }),
                (0, l.jsx)(d.Text, {
                    variant: P ? 'text-xs/semibold' : 'text-sm/semibold',
                    lineClamp: 1,
                    children: L
                })
            ]
        }),
        F = {
            key: n.id,
            className: s()(
                p.pill,
                {
                    [p.disabled]: r,
                    [p.clickable]: U,
                    [p.small]: P,
                    [p.selected]: g
                },
                u
            ),
            onClick: (e) => {
                null == N || N(e), null == A || A(n), !G && null != b.current && b.current.blur();
            },
            onContextMenu: (e) => y(e),
            onMouseEnter: () => h && M(!0),
            onMouseLeave: () => h && M(!1)
        },
        j = (0, a.JA)('forum-tag-'.concat(n.id));
    return U
        ? (0, l.jsx)(d.Clickable, {
              ...j,
              innerRef: b,
              focusProps: { ringTarget: b },
              'aria-label': null != m ? m : C.Z.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({ tagName: L }),
              role: 'button',
              'aria-pressed': g,
              ...F,
              children: x
          })
        : (0, l.jsx)('div', {
              ...F,
              children: x
          });
}
function A(e) {
    let { tags: n, count: t, size: i = 1 } = e,
        r = 0 === i;
    return (0, l.jsx)(d.Tooltip, {
        'aria-label': C.Z.Messages.FORUM_TAGS,
        text: (0, l.jsx)(l.Fragment, {
            children: n.map((e) =>
                (0, l.jsx)(
                    N,
                    {
                        tag: e,
                        className: p.tooltipPill,
                        size: N.Sizes.SMALL
                    },
                    e.id
                )
            )
        }),
        children: (e) =>
            (0, l.jsx)('div', {
                ...e,
                className: s()(p.pill, { [p.small]: r }),
                children: (0, l.jsxs)(d.Text, {
                    variant: r ? 'text-xs/semibold' : 'text-sm/semibold',
                    children: ['+', t]
                })
            })
    });
}
((r = i || (i = {}))[(r.SMALL = 0)] = 'SMALL'), (r[(r.MEDIUM = 1)] = 'MEDIUM'), (N.Sizes = i);
