n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(592125),
    s = n(944486),
    c = n(471253),
    u = n(623633),
    d = n(930180),
    m = n(388032),
    h = n(288826);
function f(e) {
    let t = s.Z.getVoiceChannelId();
    if (null == t) return;
    let n = o.Z.getChannel(t);
    if (null != n) (0, c.RK)(n, e);
}
function p() {
    var e;
    let t = (0, u.Z)(),
        n = null !== (e = (0, d._d)(null == t ? void 0 : t.id)) && void 0 !== e ? e : 0;
    return null == t
        ? null
        : (0, i.jsxs)(a.Notice, {
              className: h.container,
              color: a.NoticeColors.DEFAULT,
              children: [
                  (0, i.jsx)('div', { children: m.intl.string(m.t.Ul1RJS) }),
                  n > 0
                      ? (0, i.jsxs)('div', {
                            className: h.blocked,
                            children: [
                                (0, i.jsx)(a.DenyIcon, {
                                    size: 'xxs',
                                    color: 'currentColor',
                                    className: h.blockedIcon
                                }),
                                (0, i.jsx)('div', {
                                    className: h.blockedText,
                                    children: m.intl.format(m.t.ATpigY, { number: n })
                                })
                            ]
                        })
                      : null,
                  (0, i.jsx)(a.Button, {
                      className: l()(h.__invalid_button, h.acceptButton),
                      size: a.Button.Sizes.MIN,
                      color: a.Button.Colors.WHITE,
                      onClick: () => f(!1),
                      children: (0, i.jsx)(a.Text, {
                          className: h.acceptText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: m.intl.string(m.t.MpO0p6)
                      })
                  }),
                  (0, i.jsx)(a.Button, {
                      className: l()(h.__invalid_button, h.declineButton),
                      look: a.Button.Looks.OUTLINED,
                      size: a.Button.Sizes.MIN,
                      color: a.Button.Colors.WHITE,
                      onClick: () => f(!0),
                      children: (0, i.jsx)(a.Text, {
                          className: h.declineText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: m.intl.string(m.t['1YDv7e'])
                      })
                  })
              ]
          });
}
