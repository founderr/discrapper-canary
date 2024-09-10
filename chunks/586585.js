t.d(n, {
    g: function () {
        return r;
    }
});
var o,
    r,
    a = t(735250);
t(470079);
var i = t(481060),
    c = t(600164),
    l = t(612853),
    s = t(689938),
    u = t(297908);
((o = r || (r = {}))[(o.CONTINUE = 0)] = 'CONTINUE'), (o[(o.UPGRADE = 1)] = 'UPGRADE'), (o[(o.PURCHASE = 2)] = 'PURCHASE');
let d = (e) => {
    let { onBack: n, backText: t, primaryIcon: o, primaryCTA: r, primaryType: d, primaryText: p, primaryTooltip: _, primaryDisabled: f, primarySubmitting: m, onPrimary: h, secondaryText: g, onSecondary: S } = e;
    return (0, a.jsxs)(i.ModalFooter, {
        justify: c.Z.Justify.BETWEEN,
        align: c.Z.Align.CENTER,
        children: [
            (() => {
                if (null == r || null == p) return null;
                let e = 2 === r ? i.ShinyButton : i.Button,
                    n = {
                        innerClassName: u.button,
                        type: d,
                        disabled: f,
                        submitting: m,
                        color: 0 === r ? i.Button.Colors.BRAND : i.Button.Colors.GREEN,
                        onClick: h
                    };
                return null != _
                    ? (0, a.jsx)(i.Tooltip, {
                          text: _,
                          children: (t) =>
                              (0, a.jsxs)(e, {
                                  ...t,
                                  ...n,
                                  children: [
                                      null == o
                                          ? null
                                          : (0, a.jsx)(o, {
                                                color: 'currentColor',
                                                className: u.primaryIcon
                                            }),
                                      p
                                  ]
                              })
                      })
                    : (0, a.jsxs)(e, {
                          ...n,
                          children: [
                              null == o
                                  ? null
                                  : (0, a.jsx)(o, {
                                        color: 'currentColor',
                                        className: u.primaryIcon
                                    }),
                              p
                          ]
                      });
            })(),
            null == g
                ? null
                : (0, a.jsx)(i.Button, {
                      color: i.Button.Colors.PRIMARY,
                      look: i.Button.Looks.LINK,
                      onClick: S,
                      children: g
                  }),
            (0, a.jsx)(l.Z, {}),
            null == n
                ? null
                : (0, a.jsx)(i.Button, {
                      className: u.back,
                      color: i.Button.Colors.PRIMARY,
                      look: i.Button.Looks.LINK,
                      onClick: n,
                      children: null != t ? t : s.Z.Messages.BACK
                  })
        ]
    });
};
(d.CTAType = r), (n.Z = d);
