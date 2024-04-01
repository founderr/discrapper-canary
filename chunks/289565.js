"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("735250");
n("470079");
var l = n("803997"),
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
    compact: E,
    popoutProps: f,
    hideTimestamp: _ = !1,
    withFooter: T = !1,
    ...I
  } = e, m = (0, i.default)(t);
  return (0, s.jsx)("div", {
    className: a()({
      [d.withFooter]: T
    }, d.embedCard, {
      [d.compact]: E
    }, c),
    children: (0, s.jsx)(r.default, {
      ...I,
      className: a()(d.messageContainer, {
        [d.compact]: E
      }),
      childrenMessageContent: (0, s.jsx)(o.default, {
        className: a()(d.__invalid_messageContent, {
          [d.compact]: E
        }),
        message: t,
        content: l
      }),
      childrenHeader: (0, s.jsx)(u.default, {
        message: t,
        channel: n,
        author: m,
        guildId: null == n ? void 0 : n.guild_id,
        compact: E,
        hideTimestamp: _,
        className: a()(d.header, {
          [d.compact]: E
        }),
        ...null != f ? f : {}
      }),
      compact: E
    })
  })
}