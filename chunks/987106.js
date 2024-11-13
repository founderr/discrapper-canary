t.d(n, {
    Z: function () {
        return _;
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
    x = t(280501),
    h = t(388032),
    v = t(948489);
function C(e) {
    let { url: n, onSelect: t } = e;
    return m.wS && null != n
        ? (0, l.jsx)(o.Menu, {
              navId: 'component-button',
              onClose: s.Zy,
              'aria-label': h.intl.string(h.t.tvTXy8),
              onSelect: t,
              children: (0, l.jsx)(o.MenuGroup, {
                  children: (0, l.jsx)(o.MenuItem, {
                      id: 'copy',
                      label: h.intl.string(h.t.uHhnfX),
                      action: () => (0, m.JG)(n)
                  })
              })
          })
        : null;
}
function _(e) {
    let n;
    let { label: t, style: i, disabled: m, emoji: h, url: _, skuId: g } = e,
        { executeStateUpdate: I, visualState: b, isDisabled: j } = (0, p.Ee)(e),
        S = (0, d.s)(g),
        N = null != g && i === u.ZJ.PREMIUM,
        E = N && (null == S ? void 0 : S.disabled),
        T = N ? (null == S ? void 0 : S.label) : t,
        y = null != h,
        Z = null != T && T.length > 0,
        k = i === u.ZJ.LINK && null != _ && _.length > 0,
        L = b === x.gH.LOADING || (N && null == S);
    return (
        (n = k
            ? () => {
                  (0, f.q)({
                      href: null != _ ? _ : '',
                      shouldConfirm: !0
                  });
              }
            : N
              ? null != S && !1 === S.disabled
                  ? S.onClick
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
            disabled: m || b === x.gH.DISABLED || j || E,
            onClick: n,
            onContextMenu: (e) => {
                k &&
                    (0, s.vq)(e, (e) =>
                        (0, l.jsx)(C, {
                            ...e,
                            url: _
                        })
                    );
            },
            role: k ? 'link' : 'button',
            children: [
                (0, l.jsxs)('div', {
                    className: r()(v.content, {
                        [v.hidden]: L,
                        [v.premium]: N
                    }),
                    'aria-hidden': L,
                    children: [
                        N
                            ? (0, l.jsx)('div', {
                                  className: v.shopIcon,
                                  children: (0, l.jsx)(o.ShopIcon, {
                                      size: 'xs',
                                      color: 'white'
                                  })
                              })
                            : null,
                        y
                            ? (0, l.jsx)(c.Z, {
                                  className: r()({ [v.textEmoji]: Z }),
                                  src: h.src,
                                  emojiId: h.id,
                                  emojiName: h.name,
                                  animated: h.animated
                              })
                            : null,
                        Z
                            ? (0, l.jsx)('div', {
                                  className: v.label,
                                  children: T
                              })
                            : null,
                        k
                            ? (0, l.jsx)(o.WindowLaunchIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: v.launchIcon
                              })
                            : null
                    ]
                }),
                L
                    ? (0, l.jsx)('div', {
                          className: v.loading,
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
