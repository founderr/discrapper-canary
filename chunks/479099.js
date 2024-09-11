t.d(n, {
    Z: function () {
        return C;
    },
    f: function () {
        return m;
    }
}),
    t(47120);
var r,
    i,
    o = t(735250),
    l = t(470079),
    u = t(120356),
    s = t.n(u),
    a = t(91192),
    c = t(442837),
    d = t(481060),
    _ = t(239091),
    f = t(596454),
    E = t(607070),
    I = t(339085),
    S = t(695346),
    T = t(572004),
    g = t(689938),
    p = t(813778);
function C(e) {
    let { tag: n, size: r = 1, disabled: i, className: u, onClick: C, onRemove: m, selected: N, ariaLabel: A } = e,
        { name: h, emojiId: L, emojiName: O } = n,
        R = null != m,
        [v, M] = l.useState(!1),
        b = (0, c.e7)([I.ZP], () => (null != L ? I.ZP.getUsableCustomEmojiById(L) : null)),
        D = R || null != C,
        U = (!R || !v) && (null != L || null != O),
        Z = 0 === r,
        P = l.useRef(null),
        y = (0, c.e7)([E.Z], () => E.Z.keyboardModeEnabled),
        G = (e) => {
            let r = S.Sb.getSetting();
            T.wS &&
                r &&
                (0, _.jW)(e, async () => {
                    let { default: e } = await t.e('29646').then(t.bind(t, 955116));
                    return (t) =>
                        (0, o.jsx)(e, {
                            ...t,
                            tag: n
                        });
                });
        },
        x = (0, o.jsxs)(o.Fragment, {
            children: [
                U
                    ? (0, o.jsx)(f.Z, {
                          className: s()(p.emoji, { [p.small]: Z }),
                          emojiId: L,
                          emojiName: O,
                          animated: !!(null == b ? void 0 : b.animated),
                          size: 'reaction'
                      })
                    : null,
                v &&
                    R &&
                    (0, o.jsx)('div', {
                        className: p.closeCircle,
                        children: (0, o.jsx)(d.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: p.close
                        })
                    }),
                (0, o.jsx)(d.Text, {
                    variant: Z ? 'text-xs/semibold' : 'text-sm/semibold',
                    lineClamp: 1,
                    children: h
                })
            ]
        }),
        F = {
            key: n.id,
            className: s()(
                p.pill,
                {
                    [p.disabled]: i,
                    [p.clickable]: D,
                    [p.small]: Z,
                    [p.selected]: N
                },
                u
            ),
            onClick: (e) => {
                null == C || C(e), null == m || m(n), !y && null != P.current && P.current.blur();
            },
            onContextMenu: (e) => G(e),
            onMouseEnter: () => R && M(!0),
            onMouseLeave: () => R && M(!1)
        },
        w = (0, a.JA)('forum-tag-'.concat(n.id));
    return D
        ? (0, o.jsx)(d.Clickable, {
              ...w,
              innerRef: P,
              focusProps: { ringTarget: P },
              'aria-label': null != A ? A : g.Z.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({ tagName: h }),
              role: 'button',
              'aria-pressed': N,
              ...F,
              children: x
          })
        : (0, o.jsx)('div', {
              ...F,
              children: x
          });
}
function m(e) {
    let { tags: n, count: t, size: r = 1 } = e,
        i = 0 === r;
    return (0, o.jsx)(d.Tooltip, {
        'aria-label': g.Z.Messages.FORUM_TAGS,
        text: (0, o.jsx)(o.Fragment, {
            children: n.map((e) =>
                (0, o.jsx)(
                    C,
                    {
                        tag: e,
                        className: p.tooltipPill,
                        size: C.Sizes.SMALL
                    },
                    e.id
                )
            )
        }),
        children: (e) =>
            (0, o.jsx)('div', {
                ...e,
                className: s()(p.pill, { [p.small]: i }),
                children: (0, o.jsxs)(d.Text, {
                    variant: i ? 'text-xs/semibold' : 'text-sm/semibold',
                    children: ['+', t]
                })
            })
    });
}
((i = r || (r = {}))[(i.SMALL = 0)] = 'SMALL'), (i[(i.MEDIUM = 1)] = 'MEDIUM'), (C.Sizes = r);
