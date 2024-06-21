n.d(t, {
  Z: function() {
    return d
  }
});
var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(739566),
  r = n(492593),
  o = n(930282),
  c = n(464891),
  u = n(39324);

function d(e) {
  let {
    message: t,
    channel: n,
    content: i,
    className: d,
    compact: E,
    popoutProps: _,
    hideTimestamp: I = !1,
    withFooter: T = !1,
    ...N
  } = e, m = (0, a.ZP)(t);
  return (0, s.jsx)("div", {
    className: l()({
      [u.withFooter]: T
    }, u.embedCard, {
      [u.compact]: E
    }, d),
    children: (0, s.jsx)(r.Z, {
      ...N,
      className: l()(u.messageContainer, {
        [u.compact]: E
      }),
      childrenMessageContent: (0, s.jsx)(o.ZP, {
        className: l()(u.__invalid_messageContent, {
          [u.compact]: E
        }),
        message: t,
        content: i
      }),
      childrenHeader: (0, s.jsx)(c.ZP, {
        message: t,
        channel: n,
        author: m,
        guildId: null == n ? void 0 : n.guild_id,
        compact: E,
        hideTimestamp: I,
        className: l()(u.header, {
          [u.compact]: E
        }),
        ...null != _ ? _ : {}
      }),
      compact: E
    })
  })
}