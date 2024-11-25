t.d(n, {
    Z: function () {
        return f;
    }
});
var r = t(200651),
    i = t(192379),
    a = t(442837),
    o = t(481060),
    l = t(700582),
    s = t(372900),
    u = t(318713),
    c = t(123145),
    d = t(592125),
    m = t(795938);
let h = i.memo(function (e) {
    let { message: n } = e,
        t = (0, a.e7)([d.Z], () => d.Z.getChannel(n.channel_id));
    return null == t
        ? null
        : (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)('div', {
                  className: m.messageContents,
                  onClick: (e) => e.stopPropagation(),
                  children: (0, r.jsxs)(s.Z.Provider, {
                      value: t.guild_id,
                      children: [
                          (0, r.jsx)(l.Z, { user: n.author }),
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
              })
          });
});
function f(e) {
    var n;
    let { item: t, onClose: i } = e,
        a = null === (n = t.sourceMetadata) || void 0 === n ? void 0 : n.message;
    return (0, r.jsxs)('div', {
        className: m.topBar,
        children: [
            (0, r.jsx)(o.Button, {
                look: o.ButtonLooks.BLANK,
                color: o.ButtonColors.CUSTOM,
                size: o.ButtonSizes.ICON,
                className: m.closeButton,
                innerClassName: m.closeButtonInner,
                onClick: i,
                children: (0, r.jsx)(o.XSmallIcon, {})
            }),
            null != a && (0, r.jsx)(h, { message: a })
        ]
    });
}
