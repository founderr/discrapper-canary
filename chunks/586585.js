n.d(t, {
    g: function () {
        return r;
    }
});
var r,
    i = n(735250);
n(470079);
var a = n(481060),
    o = n(600164),
    s = n(612853),
    l = n(689938),
    u = n(297908);
!(function (e) {
    (e[(e.CONTINUE = 0)] = 'CONTINUE'), (e[(e.UPGRADE = 1)] = 'UPGRADE'), (e[(e.PURCHASE = 2)] = 'PURCHASE');
})(r || (r = {}));
let c = (e) => {
    let { onBack: t, backText: n, primaryIcon: r, primaryCTA: c, primaryType: d, primaryText: _, primaryTooltip: E, primaryDisabled: f, primarySubmitting: h, onPrimary: p, secondaryText: m, onSecondary: I } = e,
        T = () => {
            if (null == c || null == _) return null;
            let e = 2 === c ? a.ShinyButton : a.Button,
                t = {
                    innerClassName: u.button,
                    type: d,
                    disabled: f,
                    submitting: h,
                    color: 0 === c ? a.Button.Colors.BRAND : a.Button.Colors.GREEN,
                    onClick: p
                };
            return null != E
                ? (0, i.jsx)(a.Tooltip, {
                      text: E,
                      children: (n) =>
                          (0, i.jsxs)(e, {
                              ...n,
                              ...t,
                              children: [
                                  null == r
                                      ? null
                                      : (0, i.jsx)(r, {
                                            color: 'currentColor',
                                            className: u.primaryIcon
                                        }),
                                  _
                              ]
                          })
                  })
                : (0, i.jsxs)(e, {
                      ...t,
                      children: [
                          null == r
                              ? null
                              : (0, i.jsx)(r, {
                                    color: 'currentColor',
                                    className: u.primaryIcon
                                }),
                          _
                      ]
                  });
        },
        g = () =>
            null == m
                ? null
                : (0, i.jsx)(a.Button, {
                      color: a.Button.Colors.PRIMARY,
                      look: a.Button.Looks.LINK,
                      onClick: I,
                      children: m
                  }),
        S = () =>
            null == t
                ? null
                : (0, i.jsx)(a.Button, {
                      className: u.back,
                      color: a.Button.Colors.PRIMARY,
                      look: a.Button.Looks.LINK,
                      onClick: t,
                      children: null != n ? n : l.Z.Messages.BACK
                  });
    return (0, i.jsxs)(a.ModalFooter, {
        justify: o.Z.Justify.BETWEEN,
        align: o.Z.Align.CENTER,
        children: [T(), g(), (0, i.jsx)(s.Z, {}), S()]
    });
};
(c.CTAType = r), (t.Z = c);
