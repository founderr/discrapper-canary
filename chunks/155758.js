n.d(t, {
    p: function () {
        return g;
    },
    s: function () {
        return h;
    }
});
var s = n(200651),
    a = n(192379),
    i = n(120356),
    r = n.n(i),
    l = n(676062),
    o = n(481060),
    c = n(313201),
    d = n(817460),
    u = n(723047),
    _ = n(528027),
    I = n(686807),
    E = n(157018),
    T = n(828656),
    m = n(689938),
    N = n(178959);
function S(e) {
    let { guildId: t, emojiId: n, emojiName: i, title: l, description: c, targetType: d, index: u, dndName: I, onEdit: E, onMove: S, disabled: g = !1 } = e,
        h = a.useRef(null),
        C = a.useRef(null),
        { drag: x, dragPreview: p, drop: R, isDragging: L } = (0, T.Z)(h, d, u, S);
    return (
        x(C),
        p(R(h)),
        (0, s.jsxs)('div', {
            ref: h,
            className: r()(N.card, {
                [N.cardDragging]: L,
                [N.disabled]: g
            }),
            children: [
                (0, s.jsxs)('div', {
                    className: N.emojiWrapper,
                    children: [
                        (0, s.jsx)(_.Z, {
                            guildId: t,
                            emojiId: n,
                            emojiName: i,
                            className: N.emoji
                        }),
                        !g &&
                            (0, s.jsx)('div', {
                                ref: C,
                                className: N.dragIconWrapper,
                                'data-dnd-name': I,
                                children: (0, s.jsx)(o.DragIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: N.dragIcon
                                })
                            })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: N.cardText,
                    children: [
                        (0, s.jsx)(o.Text, {
                            color: 'header-primary',
                            variant: 'text-md/semibold',
                            children: l
                        }),
                        (0, s.jsx)(o.Text, {
                            color: 'interactive-normal',
                            variant: 'text-sm/normal',
                            children: c
                        })
                    ]
                }),
                (0, s.jsx)('div', {
                    className: N.cardActions,
                    children:
                        !g &&
                        (0, s.jsx)(o.Clickable, {
                            className: N.cardActionButton,
                            onClick: g ? void 0 : E,
                            'aria-label': m.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_EDIT_ARIA_LABEL,
                            'aria-disabled': g,
                            children: (0, s.jsx)(o.PencilIcon, {
                                size: 'xs',
                                color: 'currentColor',
                                className: N.cardActionButtonIcon
                            })
                        })
                })
            ]
        })
    );
}
function g(e) {
    let { benefits: t, onEdit: n, onMove: i, guildId: o } = e,
        _ = (0, c.Dt)(),
        { isDragging: T } = (0, l.f)((e) => ({ isDragging: e.getItemType() === _ })),
        m = (0, u.mY)();
    return 0 === t.length
        ? null
        : (0, s.jsx)('div', {
              className: r()(N.container, { [N.isDragging]: T }),
              children: t.map((e, t) =>
                  (0, s.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              t > 0 ? (0, s.jsx)('div', { className: N.divider }) : null,
                              (0, s.jsx)(S, {
                                  guildId: o,
                                  emojiId: e.emoji_id,
                                  emojiName: e.emoji_name,
                                  title: (0, I.Z)(e),
                                  description: e.description,
                                  targetType: _,
                                  index: t,
                                  dndName: (0, E.Z)(e),
                                  onEdit: () => n(t),
                                  onMove: i,
                                  disabled: m
                              })
                          ]
                      },
                      (0, d.ab)(e)
                  )
              )
          });
}
function h(e) {
    let { onClick: t, children: n, disabled: a = !1 } = e;
    return (0, s.jsx)(o.Clickable, {
        className: N.container,
        onClick: a ? void 0 : t,
        'aria-disabled': a,
        children: (0, s.jsxs)('div', {
            className: r()(N.card, N.addBenefit, { [N.disabled]: a }),
            children: [
                (0, s.jsx)('div', {
                    className: N.emojiWrapper,
                    children: (0, s.jsx)(o.CirclePlusIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: N.addBenefitIcon
                    })
                }),
                (0, s.jsx)('div', {
                    className: N.cardText,
                    children: (0, s.jsx)(o.Text, {
                        color: 'header-primary',
                        variant: 'text-md/normal',
                        children: n
                    })
                })
            ]
        })
    });
}
