l.d(n, {
    Z: function () {
        return T;
    }
});
var t = l(735250);
l(470079);
var r = l(120356),
    a = l.n(r),
    i = l(392711),
    s = l(481060),
    u = l(239091),
    o = l(596454),
    c = l(911969),
    d = l(574399),
    m = l(572004),
    E = l(49012),
    p = l(970184),
    N = l(280501),
    f = l(689938),
    _ = l(880609);
function C(e) {
    let { url: n, onSelect: l } = e;
    return m.wS && null != n
        ? (0, t.jsx)(s.Menu, {
              navId: 'component-button',
              onClose: u.Zy,
              'aria-label': f.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
              onSelect: l,
              children: (0, t.jsx)(s.MenuGroup, {
                  children: (0, t.jsx)(s.MenuItem, {
                      id: 'copy',
                      label: f.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
                      action: () => (0, m.JG)(n)
                  })
              })
          })
        : null;
}
function T(e) {
    let n;
    let { label: l, style: r, disabled: m, emoji: f, url: T, skuId: v } = e,
        { executeStateUpdate: h, visualState: x, isDisabled: I } = (0, p.Ee)(e),
        S = (0, d.I)(v),
        O = null != v && r === c.ZJ.PREMIUM,
        g = O && (null == S ? void 0 : S.disabled),
        j = O ? (null == S ? void 0 : S.label) : l,
        Z = null != f,
        R = null != j && j.length > 0,
        M = r === c.ZJ.LINK && null != T && T.length > 0,
        b = x === N.gH.LOADING || (O && null == S);
    return (
        (n = M
            ? () => {
                  (0, E.q)({
                      href: null != T ? T : '',
                      shouldConfirm: !0
                  });
              }
            : O
              ? null != S && !1 === S.disabled
                  ? S.onClick
                  : i.noop
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
            disabled: m || x === N.gH.DISABLED || I || g,
            onClick: n,
            onContextMenu: (e) => {
                M &&
                    (0, u.vq)(e, (e) =>
                        (0, t.jsx)(C, {
                            ...e,
                            url: T
                        })
                    );
            },
            role: M ? 'link' : 'button',
            children: [
                (0, t.jsxs)('div', {
                    className: a()(_.content, {
                        [_.hidden]: b,
                        [_.premium]: O
                    }),
                    'aria-hidden': b,
                    children: [
                        O
                            ? (0, t.jsx)('div', {
                                  className: _.shopIcon,
                                  children: (0, t.jsx)(s.ShopIcon, {
                                      size: 'xs',
                                      color: 'white'
                                  })
                              })
                            : null,
                        Z
                            ? (0, t.jsx)(o.Z, {
                                  className: a()({ [_.textEmoji]: R }),
                                  src: f.src,
                                  emojiId: f.id,
                                  emojiName: f.name,
                                  animated: f.animated
                              })
                            : null,
                        R
                            ? (0, t.jsx)('div', {
                                  className: _.label,
                                  children: j
                              })
                            : null,
                        M
                            ? (0, t.jsx)(s.WindowLaunchIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: _.launchIcon
                              })
                            : null
                    ]
                }),
                b
                    ? (0, t.jsx)('div', {
                          className: _.loading,
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
