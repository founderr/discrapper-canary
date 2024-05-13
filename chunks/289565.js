"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("735250");
n("470079");
var a = n("120356"),
  l = n.n(a),
  i = n("739566"),
  r = n("998951"),
  o = n("113039"),
  u = n("778947"),
  d = n("933921");

function c(e) {
  let {
    message: t,
    channel: n,
    content: a,
    className: c,
    compact: E,
    popoutProps: f,
    hideTimestamp: _ = !1,
    withFooter: T = !1,
    ...I
  } = e, m = (0, i.default)(t);
  return (0, s.jsx)("div", {
    className: l()({
      [d.withFooter]: T
    }, d.embedCard, {
      [d.compact]: E
    }, c),
    children: (0, s.jsx)(r.default, {
      ...I,
      className: l()(d.messageContainer, {
        [d.compact]: E
      }),
      childrenMessageContent: (0, s.jsx)(o.default, {
        className: l()(d.__invalid_messageContent, {
          [d.compact]: E
        }),
        message: t,
        content: a
      }),
      childrenHeader: (0, s.jsx)(u.default, {
        message: t,
        channel: n,
        author: m,
        guildId: null == n ? void 0 : n.guild_id,
        compact: E,
        hideTimestamp: _,
        className: l()(d.header, {
          [d.compact]: E
        }),
        ...null != f ? f : {}
      }),
      compact: E
    })
  })
}