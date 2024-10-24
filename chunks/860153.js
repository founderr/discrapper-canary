t.d(n, {
    Z: function () {
        return E;
    }
});
var r = t(200651),
    a = t(192379),
    i = t(120356),
    l = t.n(i),
    o = t(442837),
    s = t(481060),
    u = t(700582),
    c = t(372900),
    d = t(318713),
    m = t(123145),
    _ = t(592125),
    f = t(231338),
    h = t(182763);
let x = a.memo(function (e) {
    let { message: n } = e,
        t = (0, o.e7)([_.Z], () => _.Z.getChannel(n.channel_id));
    return null == t
        ? null
        : (0, r.jsx)('div', {
              className: h.messageContents,
              children: (0, r.jsxs)(c.Z.Provider, {
                  value: t.guild_id,
                  children: [
                      (0, r.jsx)(u.Z, { user: n.author }),
                      (0, r.jsx)('div', {
                          children: (0, r.jsx)(m.Z, {
                              message: n,
                              channel: t
                          })
                      }),
                      (0, r.jsx)(d.Z, {
                          timestamp: n.timestamp,
                          className: h.timestamp
                      })
                  ]
              })
          });
});
function E(e) {
    var n;
    let { item: t, onClose: a } = e,
        i = null === (n = t.sourceMetadata) || void 0 === n ? void 0 : n.message;
    return (0, r.jsx)(s.ThemeProvider, {
        theme: f.BR.DARK,
        children: (e) =>
            (0, r.jsxs)('div', {
                className: l()(h.topBar, e),
                children: [
                    (0, r.jsx)(s.Button, {
                        look: s.ButtonLooks.BLANK,
                        color: s.ButtonColors.CUSTOM,
                        size: s.ButtonSizes.ICON,
                        className: h.closeButton,
                        onClick: a,
                        children: (0, r.jsx)(s.XLargeIcon, {})
                    }),
                    null != i && (0, r.jsx)(x, { message: i })
                ]
            })
    });
}
