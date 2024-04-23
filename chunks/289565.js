"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("735250");
n("470079");
var l = n("120356"),
  a = n.n(l),
  i = n("739566"),
  r = n("998951"),
  o = n("113039"),
  u = n("778947"),
  d = n("655155");

function c(e) {
  let {
    message: t,
    channel: n,
    content: l,
    className: c,
    compact: f,
    popoutProps: E,
    hideTimestamp: _ = !1,
    withFooter: m = !1,
    ...T
  } = e, I = (0, i.default)(t);
  return (0, s.jsx)("div", {
    className: a()({
      [d.withFooter]: m
    }, d.embedCard, {
      [d.compact]: f
    }, c),
    children: (0, s.jsx)(r.default, {
      ...T,
      className: a()(d.messageContainer, {
        [d.compact]: f
      }),
      childrenMessageContent: (0, s.jsx)(o.default, {
        className: a()(d.__invalid_messageContent, {
          [d.compact]: f
        }),
        message: t,
        content: l
      }),
      childrenHeader: (0, s.jsx)(u.default, {
        message: t,
        channel: n,
        author: I,
        guildId: null == n ? void 0 : n.guild_id,
        compact: f,
        hideTimestamp: _,
        className: a()(d.header, {
          [d.compact]: f
        }),
        ...null != E ? E : {}
      }),
      compact: f
    })
  })
}