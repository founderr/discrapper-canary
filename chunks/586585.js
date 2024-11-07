t.d(n, {
    g: function () {
        return r;
    }
});
var o,
    r,
    i = t(200651);
t(192379);
var l = t(481060),
    a = t(600164),
    s = t(612853),
    c = t(388032),
    u = t(652045);
((o = r || (r = {}))[(o.CONTINUE = 0)] = 'CONTINUE'), (o[(o.UPGRADE = 1)] = 'UPGRADE'), (o[(o.PURCHASE = 2)] = 'PURCHASE');
let d = (e) => {
    let { onBack: n, backText: t, primaryIcon: o, primaryCTA: r, primaryType: d, primaryText: p, primaryTooltip: f, primaryDisabled: m, primarySubmitting: h, onPrimary: _, secondaryText: g, onSecondary: S } = e;
    return (0, i.jsxs)(l.ModalFooter, {
        justify: a.Z.Justify.BETWEEN,
        align: a.Z.Align.CENTER,
        children: [
            (() => {
                if (null == r || null == p) return null;
                let e = 2 === r ? l.ShinyButton : l.Button,
                    n = {
                        innerClassName: u.button,
                        type: d,
                        disabled: m,
                        submitting: h,
                        color: 0 === r ? l.Button.Colors.BRAND : l.Button.Colors.GREEN,
                        onClick: _
                    };
                return null != f
                    ? (0, i.jsx)(l.Tooltip, {
                          text: f,
                          children: (t) =>
                              (0, i.jsxs)(e, {
                                  ...t,
                                  ...n,
                                  children: [
                                      null == o
                                          ? null
                                          : (0, i.jsx)(o, {
                                                color: 'currentColor',
                                                className: u.primaryIcon
                                            }),
                                      p
                                  ]
                              })
                      })
                    : (0, i.jsxs)(e, {
                          ...n,
                          children: [
                              null == o
                                  ? null
                                  : (0, i.jsx)(o, {
                                        color: 'currentColor',
                                        className: u.primaryIcon
                                    }),
                              p
                          ]
                      });
            })(),
            null == g
                ? null
                : (0, i.jsx)(l.Button, {
                      color: l.Button.Colors.PRIMARY,
                      look: l.Button.Looks.LINK,
                      onClick: S,
                      children: g
                  }),
            (0, i.jsx)(s.Z, {}),
            null == n
                ? null
                : (0, i.jsx)(l.Button, {
                      className: u.back,
                      color: l.Button.Colors.PRIMARY,
                      look: l.Button.Looks.LINK,
                      onClick: n,
                      children: null != t ? t : c.intl.string(c.t['13/7kZ'])
                  })
        ]
    });
};
(d.CTAType = r), (n.Z = d);
