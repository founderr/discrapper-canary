t.d(n, {
    Z: function () {
        return C;
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
    x = t(388032),
    v = t(948489);
function _(e) {
    let { url: n, onSelect: t } = e;
    return m.wS && null != n
        ? (0, l.jsx)(o.Menu, {
              navId: 'component-button',
              onClose: s.Zy,
              'aria-label': x.intl.string(x.t.tvTXy8),
              onSelect: t,
              children: (0, l.jsx)(o.MenuGroup, {
                  children: (0, l.jsx)(o.MenuItem, {
                      id: 'copy',
                      label: x.intl.string(x.t.uHhnfX),
                      action: () => (0, m.JG)(n)
                  })
              })
          })
        : null;
}
function C(e) {
    let n;
    let { label: t, style: i, disabled: m, emoji: x, url: C, skuId: g } = e,
        { executeStateUpdate: I, visualState: b, isDisabled: j } = (0, p.Ee)(e),
        S = (0, d.s)(g),
        N = null != g && i === u.ZJ.PREMIUM,
        E = N && (null == S ? void 0 : S.disabled),
        T = N ? (null == S ? void 0 : S.label) : t,
        y = null != x,
        Z = null != T && T.length > 0,
        k = i === u.ZJ.LINK && null != C && C.length > 0,
        L = b === h.gH.LOADING || (N && null == S);
    return (
        (n = k
            ? () => {
                  (0, f.q)({
                      href: null != C ? C : '',
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
            disabled: m || b === h.gH.DISABLED || j || E,
            onClick: n,
            onContextMenu: (e) => {
                k &&
                    (0, s.vq)(e, (e) =>
                        (0, l.jsx)(_, {
                            ...e,
                            url: C
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
                                  src: x.src,
                                  emojiId: x.id,
                                  emojiName: x.name,
                                  animated: x.animated
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
