t.d(n, {
    Z: function () {
        return E;
    }
});
var l = t(200651);
t(192379);
var i = t(120356),
    a = t.n(i),
    r = t(392711),
    o = t(481060),
    s = t(239091),
    c = t(596454),
    u = t(911969),
    d = t(744969),
    m = t(572004),
    _ = t(49012),
    f = t(970184),
    p = t(280501),
    C = t(689938),
    h = t(948489);
function I(e) {
    let { url: n, onSelect: t } = e;
    return m.wS && null != n
        ? (0, l.jsx)(o.Menu, {
              navId: 'component-button',
              onClose: s.Zy,
              'aria-label': C.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
              onSelect: t,
              children: (0, l.jsx)(o.MenuGroup, {
                  children: (0, l.jsx)(o.MenuItem, {
                      id: 'copy',
                      label: C.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
                      action: () => (0, m.JG)(n)
                  })
              })
          })
        : null;
}
function E(e) {
    let n;
    let { label: t, style: i, disabled: m, emoji: C, url: E, skuId: x } = e,
        { executeStateUpdate: v, visualState: T, isDisabled: N } = (0, f.Ee)(e),
        b = (0, d.s)(x),
        g = null != x && i === u.ZJ.PREMIUM,
        S = g && (null == b ? void 0 : b.disabled),
        O = g ? (null == b ? void 0 : b.label) : t,
        j = null != C,
        M = null != O && O.length > 0,
        Z = i === u.ZJ.LINK && null != E && E.length > 0,
        y = T === p.gH.LOADING || (g && null == b);
    return (
        (n = Z
            ? () => {
                  (0, _.q)({
                      href: null != E ? E : '',
                      shouldConfirm: !0
                  });
              }
            : g
              ? null != b && !1 === b.disabled
                  ? b.onClick
                  : r.noop
              : () => v()),
        (0, l.jsxs)(o.Button, {
            color: (function (e) {
                switch (e) {
                    case u.ZJ.PRIMARY:
                    case u.ZJ.PREMIUM:
                        return o.Button.Colors.BRAND;
                    case u.ZJ.SUCCESS:
                        return o.Button.Colors.GREEN;
                    case u.ZJ.DESTRUCTIVE:
                        return o.Button.Colors.RED;
                    default:
                        return o.Button.Colors.PRIMARY;
                }
            })(i),
            size: o.Button.Sizes.SMALL,
            disabled: m || T === p.gH.DISABLED || N || S,
            onClick: n,
            onContextMenu: (e) => {
                Z &&
                    (0, s.vq)(e, (e) =>
                        (0, l.jsx)(I, {
                            ...e,
                            url: E
                        })
                    );
            },
            role: Z ? 'link' : 'button',
            children: [
                (0, l.jsxs)('div', {
                    className: a()(h.content, {
                        [h.hidden]: y,
                        [h.premium]: g
                    }),
                    'aria-hidden': y,
                    children: [
                        g
                            ? (0, l.jsx)('div', {
                                  className: h.shopIcon,
                                  children: (0, l.jsx)(o.ShopIcon, {
                                      size: 'xs',
                                      color: 'white'
                                  })
                              })
                            : null,
                        j
                            ? (0, l.jsx)(c.Z, {
                                  className: a()({ [h.textEmoji]: M }),
                                  src: C.src,
                                  emojiId: C.id,
                                  emojiName: C.name,
                                  animated: C.animated
                              })
                            : null,
                        M
                            ? (0, l.jsx)('div', {
                                  className: h.label,
                                  children: O
                              })
                            : null,
                        Z
                            ? (0, l.jsx)(o.WindowLaunchIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: h.launchIcon
                              })
                            : null
                    ]
                }),
                y
                    ? (0, l.jsx)('div', {
                          className: h.loading,
                          children: (0, l.jsx)(o.Dots, {
                              dotRadius: 3.5,
                              themed: !0
                          })
                      })
                    : null
            ]
        })
    );
}
