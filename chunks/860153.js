t.d(e, {
    Z: function () {
        return p;
    }
});
var r = t(200651),
    i = t(192379),
    l = t(120356),
    o = t.n(l),
    a = t(442837),
    s = t(481060),
    u = t(700582),
    c = t(372900),
    d = t(318713),
    m = t(123145),
    f = t(592125),
    h = t(231338),
    _ = t(182763);
let x = i.memo(function (n) {
    let { message: e } = n,
        t = (0, a.e7)([f.Z], () => f.Z.getChannel(e.channel_id));
    return null == t
        ? null
        : (0, r.jsx)('div', {
              className: _.messageContents,
              children: (0, r.jsxs)(c.Z.Provider, {
                  value: t.guild_id,
                  children: [
                      (0, r.jsx)(u.Z, { user: e.author }),
                      (0, r.jsx)('div', {
                          children: (0, r.jsx)(m.Z, {
                              message: e,
                              channel: t
                          })
                      }),
                      (0, r.jsx)(d.Z, {
                          timestamp: e.timestamp,
                          className: _.timestamp
                      })
                  ]
              })
          });
});
function p(n) {
    var e;
    let { item: t, onClose: i } = n,
        l = null === (e = t.sourceMetadata) || void 0 === e ? void 0 : e.message;
    return (0, r.jsx)(s.ThemeProvider, {
        theme: h.BR.DARK,
        children: (n) =>
            (0, r.jsxs)('div', {
                className: o()(_.topBar, n),
                children: [
                    (0, r.jsx)(s.Button, {
                        look: s.ButtonLooks.BLANK,
                        color: s.ButtonColors.CUSTOM,
                        size: s.ButtonSizes.ICON,
                        className: _.closeButton,
                        onClick: i,
                        children: (0, r.jsx)(s.XLargeIcon, {})
                    }),
                    null != l && (0, r.jsx)(x, { message: l })
                ]
            })
    });
}
