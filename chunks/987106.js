t.d(n, {
    Z: function () {
        return v;
    }
});
var l = t(200651);
t(192379);
var i = t(120356),
    r = t.n(i),
    a = t(392711),
    o = t(481060),
    s = t(239091),
    c = t(596454),
    u = t(911969),
    d = t(744969),
    m = t(572004),
    f = t(49012),
    p = t(970184),
    h = t(280501),
    _ = t(388032),
    x = t(948489);
function C(e) {
    let { url: n, onSelect: t } = e;
    return m.wS && null != n
        ? (0, l.jsx)(o.Menu, {
              navId: 'component-button',
              onClose: s.Zy,
              'aria-label': _.intl.string(_.t.tvTXy8),
              onSelect: t,
              children: (0, l.jsx)(o.MenuGroup, {
                  children: (0, l.jsx)(o.MenuItem, {
                      id: 'copy',
                      label: _.intl.string(_.t.uHhnfX),
                      action: () => (0, m.JG)(n)
                  })
              })
          })
        : null;
}
function v(e) {
    let n;
    let { label: t, style: i, disabled: m, emoji: _, url: v, skuId: b } = e,
        { executeStateUpdate: g, visualState: I, isDisabled: S } = (0, p.Ee)(e),
        j = (0, d.s)(b),
        y = null != b && i === u.ZJ.PREMIUM,
        E = y && (null == j ? void 0 : j.disabled),
        T = y ? (null == j ? void 0 : j.label) : t,
        N = null != _,
        Z = null != T && T.length > 0,
        k = i === u.ZJ.LINK && null != v && v.length > 0,
        L = I === h.gH.LOADING || (y && null == j);
    return (
        (n = k
            ? () => {
                  (0, f.q)({
                      href: null != v ? v : '',
                      shouldConfirm: !0
                  });
              }
            : y
              ? null != j && !1 === j.disabled
                  ? j.onClick
                  : a.noop
              : () => g()),
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
            disabled: m || I === h.gH.DISABLED || S || E,
            onClick: n,
            onContextMenu: (e) => {
                k &&
                    (0, s.vq)(e, (e) =>
                        (0, l.jsx)(C, {
                            ...e,
                            url: v
                        })
                    );
            },
            role: k ? 'link' : 'button',
            children: [
                (0, l.jsxs)('div', {
                    className: r()(x.content, {
                        [x.hidden]: L,
                        [x.premium]: y
                    }),
                    'aria-hidden': L,
                    children: [
                        y
                            ? (0, l.jsx)('div', {
                                  className: x.shopIcon,
                                  children: (0, l.jsx)(o.ShopIcon, {
                                      size: 'xs',
                                      color: 'white'
                                  })
                              })
                            : null,
                        N
                            ? (0, l.jsx)(c.Z, {
                                  className: r()({ [x.textEmoji]: Z }),
                                  src: _.src,
                                  emojiId: _.id,
                                  emojiName: _.name,
                                  animated: _.animated
                              })
                            : null,
                        Z
                            ? (0, l.jsx)('div', {
                                  className: x.label,
                                  children: T
                              })
                            : null,
                        k
                            ? (0, l.jsx)(o.WindowLaunchIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: x.launchIcon
                              })
                            : null
                    ]
                }),
                L
                    ? (0, l.jsx)('div', {
                          className: x.loading,
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
