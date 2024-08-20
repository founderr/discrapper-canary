l.d(n, {
    Z: function () {
        return _;
    }
});
var t = l(735250);
l(470079);
var r = l(120356),
    i = l.n(r),
    a = l(392711),
    s = l(481060),
    u = l(239091),
    o = l(596454),
    c = l(911969),
    d = l(574399),
    m = l(572004),
    f = l(49012),
    E = l(970184),
    p = l(280501),
    C = l(689938),
    N = l(880609);
function v(e) {
    let { url: n, onSelect: l } = e;
    return m.wS && null != n
        ? (0, t.jsx)(s.Menu, {
              navId: 'component-button',
              onClose: u.Zy,
              'aria-label': C.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
              onSelect: l,
              children: (0, t.jsx)(s.MenuGroup, {
                  children: (0, t.jsx)(s.MenuItem, {
                      id: 'copy',
                      label: C.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
                      action: () => (0, m.JG)(n)
                  })
              })
          })
        : null;
}
function _(e) {
    let n;
    let { label: l, style: r, disabled: m, emoji: C, url: _, skuId: T } = e,
        { executeStateUpdate: h, visualState: I, isDisabled: x } = (0, E.Ee)(e),
        O = (0, d.I)(T),
        S = null != T && r === c.ZJ.PREMIUM,
        g = S && (null == O ? void 0 : O.disabled),
        Z = S ? (null == O ? void 0 : O.label) : l,
        A = null != C,
        R = null != Z && Z.length > 0,
        j = r === c.ZJ.LINK && null != _ && _.length > 0,
        L = I === p.gH.LOADING || (S && null == O);
    return (
        (n = j
            ? () => {
                  (0, f.q)({
                      href: null != _ ? _ : '',
                      shouldConfirm: !0
                  });
              }
            : S
              ? null != O && !1 === O.disabled
                  ? O.onClick
                  : a.noop
              : () => h()),
        (0, t.jsxs)(s.Button, {
            color: (function (e) {
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
            })(r),
            size: s.Button.Sizes.SMALL,
            disabled: m || I === p.gH.DISABLED || x || g,
            onClick: n,
            onContextMenu: (e) => {
                j &&
                    (0, u.vq)(e, (e) =>
                        (0, t.jsx)(v, {
                            ...e,
                            url: _
                        })
                    );
            },
            role: j ? 'link' : 'button',
            children: [
                (0, t.jsxs)('div', {
                    className: i()(N.content, {
                        [N.hidden]: L,
                        [N.premium]: S
                    }),
                    'aria-hidden': L,
                    children: [
                        S
                            ? (0, t.jsx)('div', {
                                  className: N.shopIcon,
                                  children: (0, t.jsx)(s.ShopIcon, {
                                      size: 'xs',
                                      color: 'white'
                                  })
                              })
                            : null,
                        A
                            ? (0, t.jsx)(o.Z, {
                                  className: i()({ [N.textEmoji]: R }),
                                  src: C.src,
                                  emojiId: C.id,
                                  emojiName: C.name,
                                  animated: C.animated
                              })
                            : null,
                        R
                            ? (0, t.jsx)('div', {
                                  className: N.label,
                                  children: Z
                              })
                            : null,
                        j
                            ? (0, t.jsx)(s.WindowLaunchIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: N.launchIcon
                              })
                            : null
                    ]
                }),
                L
                    ? (0, t.jsx)('div', {
                          className: N.loading,
                          children: (0, t.jsx)(s.Dots, {
                              dotRadius: 3.5,
                              themed: !0
                          })
                      })
                    : null
            ]
        })
    );
}
