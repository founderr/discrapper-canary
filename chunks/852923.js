n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(592125),
    l = n(944486),
    u = n(471253),
    c = n(623633),
    d = n(930180),
    _ = n(689938),
    E = n(979661);
function f(e) {
    let t = l.Z.getVoiceChannelId();
    if (null == t) return;
    let n = s.Z.getChannel(t);
    if (null != n) (0, u.RK)(n, e);
}
function h() {
    var e;
    let t = (0, c.Z)(),
        n = null !== (e = (0, d._d)(null == t ? void 0 : t.id)) && void 0 !== e ? e : 0;
    return null == t
        ? null
        : (0, r.jsxs)(o.Notice, {
              className: E.container,
              color: o.NoticeColors.DEFAULT,
              children: [
                  (0, r.jsx)('div', { children: _.Z.Messages.STAGE_SPEAK_INVITE_HEADER }),
                  n > 0
                      ? (0, r.jsxs)('div', {
                            className: E.blocked,
                            children: [
                                (0, r.jsx)(o.DenyIcon, {
                                    size: 'xxs',
                                    color: 'currentColor',
                                    className: E.blockedIcon
                                }),
                                (0, r.jsx)('div', {
                                    className: E.blockedText,
                                    children: _.Z.Messages.STAGE_SPEAK_INVITE_HEADER_BLOCKED_USERS.format({ number: n })
                                })
                            ]
                        })
                      : null,
                  (0, r.jsx)(o.Button, {
                      className: a()(E.__invalid_button, E.acceptButton),
                      size: o.Button.Sizes.MIN,
                      color: o.Button.Colors.WHITE,
                      onClick: () => f(!1),
                      children: (0, r.jsx)(o.Text, {
                          className: E.acceptText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: _.Z.Messages.STAGE_SPEAK_INVITE_ACCEPT
                      })
                  }),
                  (0, r.jsx)(o.Button, {
                      className: a()(E.__invalid_button, E.declineButton),
                      look: o.Button.Looks.OUTLINED,
                      size: o.Button.Sizes.MIN,
                      color: o.Button.Colors.WHITE,
                      onClick: () => f(!0),
                      children: (0, r.jsx)(o.Text, {
                          className: E.declineText,
                          variant: 'text-xs/normal',
                          color: 'none',
                          children: _.Z.Messages.STAGE_SPEAK_INVITE_DECLINE
                      })
                  })
              ]
          });
}
