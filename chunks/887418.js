"use strict";
E.r(_), E.d(_, {
  default: function() {
    return I
  }
}), E("222007");
var t = E("77078"),
  o = E("689988"),
  n = E("42203"),
  r = E("377253");

function a(e) {
  let {
    channelId: _,
    messageId: o
  } = e, a = n.default.getChannel(_), i = r.default.getMessage(_, o);
  null != a && null != i && (0, t.openModalLazy)(async () => {
    let {
      default: e
    } = await E.el("942055").then(E.bind(E, "942055"));
    return _ => e({
      channel: a,
      message: i,
      ..._
    })
  })
}
class i extends o.default {
  constructor(...e) {
    super(...e), this.actions = {
      MESSAGE_FAILED_CLYDE_CONSENT: a
    }
  }
}
var I = new i