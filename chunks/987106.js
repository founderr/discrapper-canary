l.d(n, {
    Z: function () {
        return g;
    }
});
var t = l(200651);
l(192379);
var i = l(120356),
    r = l.n(i),
    a = l(392711),
    s = l(481060),
    o = l(239091),
    u = l(596454),
    c = l(911969),
    d = l(744969),
    m = l(572004),
    p = l(49012),
    f = l(970184),
    x = l(280501),
    v = l(388032),
    h = l(912817);
function C(e) {
    let { url: n, onSelect: l } = e;
    return m.wS && null != n
        ? (0, t.jsx)(s.Menu, {
              navId: 'component-button',
              onClose: o.Zy,
              'aria-label': v.intl.string(v.t.tvTXy8),
              onSelect: l,
              children: (0, t.jsx)(s.MenuGroup, {
                  children: (0, t.jsx)(s.MenuItem, {
                      id: 'copy',
                      label: v.intl.string(v.t.uHhnfX),
                      action: () => (0, m.JG)(n)
                  })
              })
          })
        : null;
}
function g(e) {
    let n;
    let { label: l, style: i, disabled: m, emoji: v, url: g, skuId: j } = e,
        { executeStateUpdate: S, visualState: I, isDisabled: N } = (0, f.Ee)(e),
        E = (0, d.s)(j),
        b = null != j && i === c.ZJ.PREMIUM,
        Z = b && (null == E ? void 0 : E.disabled),
        T = b ? (null == E ? void 0 : E.label) : l,
        _ = null != v,
        y = null != T && T.length > 0,
        k = i === c.ZJ.LINK && null != g && g.length > 0,
        R = I === x.gH.LOADING || (b && null == E);
    return (
        (n = k
            ? () => {
                  (0, p.q)({
                      href: null != g ? g : '',
                      shouldConfirm: !0
                  });
              }
            : b
              ? null != E && !1 === E.disabled
                  ? E.onClick
                  : a.noop
              : () => S()),
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
            })(i),
            size: s.Button.Sizes.SMALL,
            disabled: m || I === x.gH.DISABLED || N || Z,
            onClick: n,
            onContextMenu: (e) => {
                k &&
                    (0, o.vq)(e, (e) =>
                        (0, t.jsx)(C, {
                            ...e,
                            url: g
                        })
                    );
            },
            role: k ? 'link' : 'button',
            children: [
                (0, t.jsxs)('div', {
                    className: r()(h.content, {
                        [h.hidden]: R,
                        [h.premium]: b
                    }),
                    'aria-hidden': R,
                    children: [
                        b
                            ? (0, t.jsx)('div', {
                                  className: h.shopIcon,
                                  children: (0, t.jsx)(s.ShopIcon, {
                                      size: 'xs',
                                      color: 'white'
                                  })
                              })
                            : null,
                        _
                            ? (0, t.jsx)(u.Z, {
                                  className: r()({ [h.textEmoji]: y }),
                                  src: v.src,
                                  emojiId: v.id,
                                  emojiName: v.name,
                                  animated: v.animated
                              })
                            : null,
                        y
                            ? (0, t.jsx)('div', {
                                  className: h.label,
                                  children: T
                              })
                            : null,
                        k
                            ? (0, t.jsx)(s.WindowLaunchIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: h.launchIcon
                              })
                            : null
                    ]
                }),
                R
                    ? (0, t.jsx)('div', {
                          className: h.loading,
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
