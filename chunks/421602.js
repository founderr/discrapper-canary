"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var u = n("37983");
n("884691");
var i = n("77078"),
  a = n("450911"),
  l = n("54239"),
  r = n("271938"),
  d = n("49111"),
  o = n("782340");

function s(e, t) {
  let n = r.default.getId(),
    s = t === d.AppContext.POPOUT;
  return n === e || s ? null : (0, u.jsx)(i.MenuItem, {
    id: "message-user",
    label: o.default.Messages.USER_POPOUT_MESSAGE,
    action: () => {
      a.default.openPrivateChannel(e), (0, l.popLayer)()
    }
  })
}