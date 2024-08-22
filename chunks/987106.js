t.d(n, {
    Z: function () {
        return h;
    }
});
var l = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    r = t(392711),
    o = t(481060),
    s = t(239091),
    c = t(596454),
    u = t(911969),
    d = t(574399),
    m = t(572004),
    _ = t(49012),
    f = t(970184),
    p = t(280501),
    E = t(689938),
    I = t(880609);
function C(e) {
    let { url: n, onSelect: t } = e;
    return m.wS && null != n
        ? (0, l.jsx)(o.Menu, {
              navId: 'component-button',
              onClose: s.Zy,
              'aria-label': E.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
              onSelect: t,
              children: (0, l.jsx)(o.MenuGroup, {
                  children: (0, l.jsx)(o.MenuItem, {
                      id: 'copy',
                      label: E.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
                      action: () => (0, m.JG)(n)
                  })
              })
          })
        : null;
}
function h(e) {
    let n;
    let { label: t, style: a, disabled: m, emoji: E, url: h, skuId: N } = e,
        { executeStateUpdate: T, visualState: x, isDisabled: v } = (0, f.Ee)(e),
        g = (0, d.I)(N),
        b = null != N && a === u.ZJ.PREMIUM,
        S = b && (null == g ? void 0 : g.disabled),
        O = b ? (null == g ? void 0 : g.label) : t,
        j = null != E,
        M = null != O && O.length > 0,
        Z = a === u.ZJ.LINK && null != h && h.length > 0,
        y = x === p.gH.LOADING || (b && null == g);
    return (
        (n = Z
            ? () => {
                  (0, _.q)({
                      href: null != h ? h : '',
                      shouldConfirm: !0
                  });
              }
            : b
              ? null != g && !1 === g.disabled
                  ? g.onClick
                  : r.noop
              : () => T()),
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
            })(a),
            size: o.Button.Sizes.SMALL,
            disabled: m || x === p.gH.DISABLED || v || S,
            onClick: n,
            onContextMenu: (e) => {
                Z &&
                    (0, s.vq)(e, (e) =>
                        (0, l.jsx)(C, {
                            ...e,
                            url: h
                        })
                    );
            },
            role: Z ? 'link' : 'button',
            children: [
                (0, l.jsxs)('div', {
                    className: i()(I.content, {
                        [I.hidden]: y,
                        [I.premium]: b
                    }),
                    'aria-hidden': y,
                    children: [
                        b
                            ? (0, l.jsx)('div', {
                                  className: I.shopIcon,
                                  children: (0, l.jsx)(o.ShopIcon, {
                                      size: 'xs',
                                      color: 'white'
                                  })
                              })
                            : null,
                        j
                            ? (0, l.jsx)(c.Z, {
                                  className: i()({ [I.textEmoji]: M }),
                                  src: E.src,
                                  emojiId: E.id,
                                  emojiName: E.name,
                                  animated: E.animated
                              })
                            : null,
                        M
                            ? (0, l.jsx)('div', {
                                  className: I.label,
                                  children: O
                              })
                            : null,
                        Z
                            ? (0, l.jsx)(o.WindowLaunchIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: I.launchIcon
                              })
                            : null
                    ]
                }),
                y
                    ? (0, l.jsx)('div', {
                          className: I.loading,
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
