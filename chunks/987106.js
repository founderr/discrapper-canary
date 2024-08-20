t.d(n, {
    Z: function () {
        return x;
    }
});
var l = t(735250);
t(470079);
var i = t(120356),
    r = t.n(i),
    a = t(392711),
    o = t(481060),
    s = t(239091),
    c = t(596454),
    u = t(911969),
    d = t(574399),
    m = t(572004),
    f = t(49012),
    _ = t(970184),
    p = t(280501),
    h = t(689938),
    C = t(880609);
function v(e) {
    let { url: n, onSelect: t } = e;
    return m.wS && null != n
        ? (0, l.jsx)(o.Menu, {
              navId: 'component-button',
              onClose: s.Zy,
              'aria-label': h.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
              onSelect: t,
              children: (0, l.jsx)(o.MenuGroup, {
                  children: (0, l.jsx)(o.MenuItem, {
                      id: 'copy',
                      label: h.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
                      action: () => (0, m.JG)(n)
                  })
              })
          })
        : null;
}
function x(e) {
    let n;
    let { label: t, style: i, disabled: m, emoji: h, url: x, skuId: E } = e,
        { executeStateUpdate: I, visualState: T, isDisabled: g } = (0, _.Ee)(e),
        N = (0, d.I)(E),
        b = null != E && i === u.ZJ.PREMIUM,
        S = b && (null == N ? void 0 : N.disabled),
        O = b ? (null == N ? void 0 : N.label) : t,
        j = null != h,
        Z = null != O && O.length > 0,
        L = i === u.ZJ.LINK && null != x && x.length > 0,
        M = T === p.gH.LOADING || (b && null == N);
    return (
        (n = L
            ? () => {
                  (0, f.q)({
                      href: null != x ? x : '',
                      shouldConfirm: !0
                  });
              }
            : b
              ? null != N && !1 === N.disabled
                  ? N.onClick
                  : a.noop
              : () => I()),
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
            disabled: m || T === p.gH.DISABLED || g || S,
            onClick: n,
            onContextMenu: (e) => {
                L &&
                    (0, s.vq)(e, (e) =>
                        (0, l.jsx)(v, {
                            ...e,
                            url: x
                        })
                    );
            },
            role: L ? 'link' : 'button',
            children: [
                (0, l.jsxs)('div', {
                    className: r()(C.content, {
                        [C.hidden]: M,
                        [C.premium]: b
                    }),
                    'aria-hidden': M,
                    children: [
                        b
                            ? (0, l.jsx)('div', {
                                  className: C.shopIcon,
                                  children: (0, l.jsx)(o.ShopIcon, {
                                      size: 'xs',
                                      color: 'white'
                                  })
                              })
                            : null,
                        j
                            ? (0, l.jsx)(c.Z, {
                                  className: r()({ [C.textEmoji]: Z }),
                                  src: h.src,
                                  emojiId: h.id,
                                  emojiName: h.name,
                                  animated: h.animated
                              })
                            : null,
                        Z
                            ? (0, l.jsx)('div', {
                                  className: C.label,
                                  children: O
                              })
                            : null,
                        L
                            ? (0, l.jsx)(o.WindowLaunchIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: C.launchIcon
                              })
                            : null
                    ]
                }),
                M
                    ? (0, l.jsx)('div', {
                          className: C.loading,
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
