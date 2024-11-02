e.d(n, {
    Z: function () {
        return S;
    },
    f: function () {
        return v;
    }
}),
    e(47120);
var i,
    r,
    l = e(200651),
    o = e(192379),
    u = e(120356),
    a = e.n(u),
    s = e(91192),
    c = e(442837),
    d = e(481060),
    f = e(239091),
    _ = e(596454),
    p = e(607070),
    E = e(339085),
    g = e(695346),
    m = e(572004),
    h = e(388032),
    I = e(813778);
function S(t) {
    let { tag: n, size: i = 1, disabled: r, className: u, onClick: S, onRemove: v, selected: C, ariaLabel: T } = t,
        { name: N, emojiId: b, emojiName: A } = n,
        O = null != v,
        [P, L] = o.useState(!1),
        R = (0, c.e7)([E.ZP], () => (null != b ? E.ZP.getUsableCustomEmojiById(b) : null)),
        y = O || null != S,
        M = (!O || !P) && (null != b || null != A),
        x = 0 === i,
        Z = o.useRef(null),
        U = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        D = (t) => {
            let i = g.Sb.getSetting();
            m.wS &&
                i &&
                (0, f.jW)(t, async () => {
                    let { default: t } = await e.e('29646').then(e.bind(e, 955116));
                    return (e) =>
                        (0, l.jsx)(t, {
                            ...e,
                            tag: n
                        });
                });
        },
        j = (0, l.jsxs)(l.Fragment, {
            children: [
                M
                    ? (0, l.jsx)(_.Z, {
                          className: a()(I.emoji, { [I.small]: x }),
                          emojiId: b,
                          emojiName: A,
                          animated: !!(null == R ? void 0 : R.animated),
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
                    variant: x ? 'text-xs/semibold' : 'text-sm/semibold',
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
                    [I.clickable]: y,
                    [I.small]: x,
                    [I.selected]: C
                },
                u
            ),
            onClick: (t) => {
                null == S || S(t), null == v || v(n), !U && null != Z.current && Z.current.blur();
            },
            onContextMenu: (t) => D(t),
            onMouseEnter: () => O && L(!0),
            onMouseLeave: () => O && L(!1)
        },
        F = (0, s.JA)('forum-tag-'.concat(n.id));
    return y
        ? (0, l.jsx)(d.Clickable, {
              ...F,
              innerRef: Z,
              focusProps: { ringTarget: Z },
              'aria-label': null != T ? T : h.intl.formatToPlainString(h.t.iyRTLi, { tagName: N }),
              role: 'button',
              'aria-pressed': C,
              ...w,
              children: j
          })
        : (0, l.jsx)('div', {
              ...w,
              children: j
          });
}
function v(t) {
    let { tags: n, count: e, size: i = 1 } = t,
        r = 0 === i;
    return (0, l.jsx)(d.Tooltip, {
        'aria-label': h.intl.string(h.t['P/y+sr']),
        text: (0, l.jsx)(l.Fragment, {
            children: n.map((t) =>
                (0, l.jsx)(
                    S,
                    {
                        tag: t,
                        className: I.tooltipPill,
                        size: S.Sizes.SMALL
                    },
                    t.id
                )
            )
        }),
        children: (t) =>
            (0, l.jsx)('div', {
                ...t,
                className: a()(I.pill, { [I.small]: r }),
                children: (0, l.jsxs)(d.Text, {
                    variant: r ? 'text-xs/semibold' : 'text-sm/semibold',
                    children: ['+', e]
                })
            })
    });
}
((r = i || (i = {}))[(r.SMALL = 0)] = 'SMALL'), (r[(r.MEDIUM = 1)] = 'MEDIUM'), (S.Sizes = i);
