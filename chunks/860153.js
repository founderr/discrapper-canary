t.d(n, {
    Z: function () {
        return f;
    }
});
var r = t(200651),
    i = t(192379),
    l = t(442837),
    a = t(481060),
    o = t(700582),
    s = t(372900),
    u = t(318713),
    c = t(123145),
    d = t(592125),
    m = t(182763);
let h = i.memo(function (e) {
    let { message: n } = e,
        t = (0, l.e7)([d.Z], () => d.Z.getChannel(n.channel_id));
    return null == t
        ? null
        : (0, r.jsx)('div', {
              className: m.messageContents,
              children: (0, r.jsxs)(s.Z.Provider, {
                  value: t.guild_id,
                  children: [
                      (0, r.jsx)(o.Z, { user: n.author }),
                      (0, r.jsx)('div', {
                          children: (0, r.jsx)(c.Z, {
                              message: n,
                              channel: t
                          })
                      }),
                      (0, r.jsx)(u.Z, {
                          timestamp: n.timestamp,
                          className: m.timestamp
                      })
                  ]
              })
          });
});
function f(e) {
    var n;
    let { item: t, onClose: i } = e,
        l = null === (n = t.sourceMetadata) || void 0 === n ? void 0 : n.message;
    return (0, r.jsxs)('div', {
        className: m.topBar,
        children: [
            (0, r.jsx)(a.Button, {
                look: a.ButtonLooks.BLANK,
                color: a.ButtonColors.CUSTOM,
                size: a.ButtonSizes.ICON,
                className: m.closeButton,
                onClick: i,
                children: (0, r.jsx)(a.XLargeIcon, {})
            }),
            null != l && (0, r.jsx)(h, { message: l })
        ]
    });
}
