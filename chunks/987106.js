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
    p = l(49012),
    E = l(970184),
    f = l(280501),
    N = l(689938),
    C = l(880609);
function v(e) {
    let { url: n, onSelect: l } = e;
    return m.wS && null != n
        ? (0, t.jsx)(s.Menu, {
              navId: 'component-button',
              onClose: u.Zy,
              'aria-label': N.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
              onSelect: l,
              children: (0, t.jsx)(s.MenuGroup, {
                  children: (0, t.jsx)(s.MenuItem, {
                      id: 'copy',
                      label: N.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
                      action: () => (0, m.JG)(n)
                  })
              })
          })
        : null;
}
function _(e) {
    let n;
    let { label: l, style: r, disabled: m, emoji: N, url: _, skuId: h } = e,
        { executeStateUpdate: x, visualState: T, isDisabled: I } = (0, E.Ee)(e),
        g = (0, d.I)(h),
        S = null != h && r === c.ZJ.PREMIUM,
        O = S && (null == g ? void 0 : g.disabled),
        j = S ? (null == g ? void 0 : g.label) : l,
        Z = null != N,
        R = null != j && j.length > 0,
        M = r === c.ZJ.LINK && null != _ && _.length > 0,
        b = T === f.gH.LOADING || (S && null == g);
    return (
        (n = M
            ? () => {
                  (0, p.q)({
                      href: null != _ ? _ : '',
                      shouldConfirm: !0
                  });
              }
            : S
              ? null != g && !1 === g.disabled
                  ? g.onClick
                  : a.noop
              : () => x()),
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
            disabled: m || T === f.gH.DISABLED || I || O,
            onClick: n,
            onContextMenu: (e) => {
                M &&
                    (0, u.vq)(e, (e) =>
                        (0, t.jsx)(v, {
                            ...e,
                            url: _
                        })
                    );
            },
            role: M ? 'link' : 'button',
            children: [
                (0, t.jsxs)('div', {
                    className: i()(C.content, {
                        [C.hidden]: b,
                        [C.premium]: S
                    }),
                    'aria-hidden': b,
                    children: [
                        S
                            ? (0, t.jsx)('div', {
                                  className: C.shopIcon,
                                  children: (0, t.jsx)(s.ShopIcon, {
                                      size: 'xs',
                                      color: 'white'
                                  })
                              })
                            : null,
                        Z
                            ? (0, t.jsx)(o.Z, {
                                  className: i()({ [C.textEmoji]: R }),
                                  src: N.src,
                                  emojiId: N.id,
                                  emojiName: N.name,
                                  animated: N.animated
                              })
                            : null,
                        R
                            ? (0, t.jsx)('div', {
                                  className: C.label,
                                  children: j
                              })
                            : null,
                        M
                            ? (0, t.jsx)(s.WindowLaunchIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: C.launchIcon
                              })
                            : null
                    ]
                }),
                b
                    ? (0, t.jsx)('div', {
                          className: C.loading,
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
