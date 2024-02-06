"use strict";
n.r(t), n.d(t, {
  InvitePropertiesType: function() {
    return s
  },
  default: function() {
    return h
  }
});
var l, s, a = n("450911"),
  i = n("819689"),
  r = n("605250"),
  u = n("42203"),
  o = n("718517"),
  d = n("231987");
let c = 1 * o.default.Millis.SECOND + 10;
(l = s || (s = {}))[l.GROUP_DM = 0] = "GROUP_DM", l[l.USER = 1] = "USER", l[l.CHANNEL = 2] = "CHANNEL";
class f extends d.default {
  _sendInvite(e, t, n, l, s) {
    i.default.sendInvite(e.id, t, n, l).then(() => s(null, !0), () => s(null, !1))
  }
  drain(e, t) {
    let {
      location: n,
      suggested: l
    } = e;
    switch (e.type) {
      case 0:
      case 2:
        this._sendInvite(e.channel, e.inviteKey, n, l, t);
        break;
      case 1:
        a.default.ensurePrivateChannel(e.user.id).then(s => {
          let a = u.default.getChannel(s);
          null != a && this._sendInvite(a, e.inviteKey, n, l, t)
        }, () => t(null, !1))
    }
  }
  constructor() {
    super(new r.default("InviteQueue"), c)
  }
}
var h = new f