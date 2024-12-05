t.d(n, {
    Z: function () {
        return x;
    }
});
var i = t(200651),
    r = t(192379),
    a = t(120356),
    l = t.n(a),
    o = t(442837),
    s = t(481060),
    u = t(700582),
    c = t(372900),
    d = t(318713),
    h = t(123145),
    m = t(592125),
    p = t(212459),
    f = t(795938);
let g = r.memo(function (e) {
    let { message: n } = e,
        t = (0, o.e7)([m.Z], () => m.Z.getChannel(n.channel_id));
    return null == t
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)('div', {
                  className: f.messageContents,
                  onClick: (e) => e.stopPropagation(),
                  children: (0, i.jsxs)(c.Z.Provider, {
                      value: t.guild_id,
                      children: [
                          (0, i.jsx)(u.Z, { user: n.author }),
                          (0, i.jsx)('div', {
                              children: (0, i.jsx)(h.Z, {
                                  message: n,
                                  channel: t
                              })
                          }),
                          (0, i.jsx)(d.Z, {
                              timestamp: n.timestamp,
                              className: f.timestamp
                          })
                      ]
                  })
              })
          });
});
function x(e) {
    var n;
    let { item: t, onClose: r } = e,
        { zoomed: a, topBarVisible: o } = (0, p.Y)(),
        u = null === (n = t.sourceMetadata) || void 0 === n ? void 0 : n.message;
    return (0, i.jsx)('div', {
        className: 'fadeInWrapper',
        children: (0, i.jsxs)('div', {
            className: l()(f.topBar, { [f.hidden]: a && !o }),
            children: [
                (0, i.jsx)(s.Button, {
                    look: s.ButtonLooks.BLANK,
                    color: s.ButtonColors.CUSTOM,
                    size: s.ButtonSizes.ICON,
                    className: f.closeButton,
                    innerClassName: f.closeButtonInner,
                    onClick: r,
                    children: (0, i.jsx)(s.XSmallIcon, {})
                }),
                null != u && (0, i.jsx)(g, { message: u })
            ]
        })
    });
}
