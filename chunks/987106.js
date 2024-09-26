n.d(t, {
    Z: function () {
        return g;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(392711);
var s = n(481060),
    l = n(239091),
    u = n(596454),
    c = n(911969),
    d = n(744969),
    _ = n(572004),
    E = n(49012),
    f = n(970184),
    h = n(280501),
    p = n(689938),
    m = n(948489);
function I(e) {
    switch (e) {
        case c.ZJ.PRIMARY:
        case c.ZJ.PREMIUM:
            return s.Button.Colors.BRAND;
        case c.ZJ.SUCCESS:
            return s.Button.Colors.GREEN;
        case c.ZJ.DESTRUCTIVE:
            return s.Button.Colors.RED;
        default:
            return s.Button.Colors.PRIMARY;
    }
}
function T(e) {
    let { url: t, onSelect: n } = e;
    return _.wS && null != t
        ? (0, r.jsx)(s.Menu, {
              navId: 'component-button',
              onClose: l.Zy,
              'aria-label': p.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
              onSelect: n,
              children: (0, r.jsx)(s.MenuGroup, {
                  children: (0, r.jsx)(s.MenuItem, {
                      id: 'copy',
                      label: p.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
                      action: () => (0, _.JG)(t)
                  })
              })
          })
        : null;
}
function g(e) {
    let t;
    let { label: n, style: i, disabled: _, emoji: p, url: g, skuId: S } = e,
        { executeStateUpdate: A, visualState: v, isDisabled: N } = (0, f.Ee)(e),
        O = (0, d.s)(S),
        R = null != S && i === c.ZJ.PREMIUM,
        C = R && (null == O ? void 0 : O.disabled),
        y = R ? (null == O ? void 0 : O.label) : n,
        L = null != p,
        b = null != y && y.length > 0,
        D = i === c.ZJ.LINK && null != g && g.length > 0,
        M = v === h.gH.LOADING || (R && null == O);
    return (
        (t = D
            ? () => {
                  (0, E.q)({
                      href: null != g ? g : '',
                      shouldConfirm: !0
                  });
              }
            : R
              ? null != O && !1 === O.disabled
                  ? O.onClick
                  : o.noop
              : () => A()),
        (0, r.jsxs)(s.Button, {
            color: I(i),
            size: s.Button.Sizes.SMALL,
            disabled: _ || v === h.gH.DISABLED || N || C,
            onClick: t,
            onContextMenu: (e) => {
                D &&
                    (0, l.vq)(e, (e) =>
                        (0, r.jsx)(T, {
                            ...e,
                            url: g
                        })
                    );
            },
            role: D ? 'link' : 'button',
            children: [
                (0, r.jsxs)('div', {
                    className: a()(m.content, {
                        [m.hidden]: M,
                        [m.premium]: R
                    }),
                    'aria-hidden': M,
                    children: [
                        R
                            ? (0, r.jsx)('div', {
                                  className: m.shopIcon,
                                  children: (0, r.jsx)(s.ShopIcon, {
                                      size: 'xs',
                                      color: 'white'
                                  })
                              })
                            : null,
                        L
                            ? (0, r.jsx)(u.Z, {
                                  className: a()({ [m.textEmoji]: b }),
                                  src: p.src,
                                  emojiId: p.id,
                                  emojiName: p.name,
                                  animated: p.animated
                              })
                            : null,
                        b
                            ? (0, r.jsx)('div', {
                                  className: m.label,
                                  children: y
                              })
                            : null,
                        D
                            ? (0, r.jsx)(s.WindowLaunchIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: m.launchIcon
                              })
                            : null
                    ]
                }),
                M
                    ? (0, r.jsx)('div', {
                          className: m.loading,
                          children: (0, r.jsx)(s.Dots, {
                              dotRadius: 3.5,
                              themed: !0
                          })
                      })
                    : null
            ]
        })
    );
}
