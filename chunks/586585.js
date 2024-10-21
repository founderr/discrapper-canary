t.d(n, {
    g: function () {
        return r;
    }
});
var o,
    r,
    l = t(200651);
t(192379);
var i = t(481060),
    a = t(600164),
    s = t(612853),
    c = t(689938),
    u = t(297908);
((o = r || (r = {}))[(o.CONTINUE = 0)] = 'CONTINUE'), (o[(o.UPGRADE = 1)] = 'UPGRADE'), (o[(o.PURCHASE = 2)] = 'PURCHASE');
let d = (e) => {
    let { onBack: n, backText: t, primaryIcon: o, primaryCTA: r, primaryType: d, primaryText: p, primaryTooltip: f, primaryDisabled: _, primarySubmitting: m, onPrimary: S, secondaryText: E, onSecondary: h } = e;
    return (0, l.jsxs)(i.ModalFooter, {
        justify: a.Z.Justify.BETWEEN,
        align: a.Z.Align.CENTER,
        children: [
            (() => {
                if (null == r || null == p) return null;
                let e = 2 === r ? i.ShinyButton : i.Button,
                    n = {
                        innerClassName: u.button,
                        type: d,
                        disabled: _,
                        submitting: m,
                        color: 0 === r ? i.Button.Colors.BRAND : i.Button.Colors.GREEN,
                        onClick: S
                    };
                return null != f
                    ? (0, l.jsx)(i.Tooltip, {
                          text: f,
                          children: (t) =>
                              (0, l.jsxs)(e, {
                                  ...t,
                                  ...n,
                                  children: [
                                      null == o
                                          ? null
                                          : (0, l.jsx)(o, {
                                                color: 'currentColor',
                                                className: u.primaryIcon
                                            }),
                                      p
                                  ]
                              })
                      })
                    : (0, l.jsxs)(e, {
                          ...n,
                          children: [
                              null == o
                                  ? null
                                  : (0, l.jsx)(o, {
                                        color: 'currentColor',
                                        className: u.primaryIcon
                                    }),
                              p
                          ]
                      });
            })(),
            null == E
                ? null
                : (0, l.jsx)(i.Button, {
                      color: i.Button.Colors.PRIMARY,
                      look: i.Button.Looks.LINK,
                      onClick: h,
                      children: E
                  }),
            (0, l.jsx)(s.Z, {}),
            null == n
                ? null
                : (0, l.jsx)(i.Button, {
                      className: u.back,
                      color: i.Button.Colors.PRIMARY,
                      look: i.Button.Looks.LINK,
                      onClick: n,
                      children: null != t ? t : c.Z.Messages.BACK
                  })
        ]
    });
};
(d.CTAType = r), (n.Z = d);
