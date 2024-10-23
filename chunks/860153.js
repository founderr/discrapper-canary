t.d(n, {
    Z: function () {
        return x;
    }
});
var r = t(200651),
    a = t(192379),
    i = t(120356),
    o = t.n(i),
    l = t(442837),
    s = t(481060),
    u = t(700582),
    c = t(372900),
    d = t(318713),
    _ = t(123145),
    m = t(592125),
    h = t(231338),
    f = t(182763);
let E = a.memo(function (e) {
    let { message: n } = e,
        t = (0, l.e7)([m.Z], () => m.Z.getChannel(n.channel_id));
    return null == t
        ? null
        : (0, r.jsx)('div', {
              className: f.messageContents,
              children: (0, r.jsxs)(c.Z.Provider, {
                  value: t.guild_id,
                  children: [
                      (0, r.jsx)(u.Z, { user: n.author }),
                      (0, r.jsx)('div', {
                          children: (0, r.jsx)(_.Z, {
                              message: n,
                              channel: t
                          })
                      }),
                      (0, r.jsx)(d.Z, {
                          timestamp: n.timestamp,
                          className: f.timestamp
                      })
                  ]
              })
          });
});
function x(e) {
    var n;
    let { item: t, onClose: a } = e,
        i = null === (n = t.sourceMetadata) || void 0 === n ? void 0 : n.message;
    return (0, r.jsx)(s.ThemeProvider, {
        theme: h.BR.DARK,
        children: (e) =>
            (0, r.jsxs)('div', {
                className: o()(f.topBar, e),
                children: [
                    (0, r.jsx)(s.Button, {
                        look: s.ButtonLooks.BLANK,
                        color: s.ButtonColors.CUSTOM,
                        size: s.ButtonSizes.ICON,
                        className: f.closeButton,
                        onClick: a,
                        children: (0, r.jsx)(s.XLargeIcon, {})
                    }),
                    null != i && (0, r.jsx)(E, { message: i })
                ]
            })
    });
}
