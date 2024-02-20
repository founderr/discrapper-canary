"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var i = n("689988"),
  a = n("704341"),
  l = n("393414"),
  s = n("49111");

function r(e) {
  var t, n, i;
  let {
    guild: r
  } = e.invite;
  if (null != r && (null == r ? void 0 : null === (t = r.features) || void 0 === t ? void 0 : t.includes(s.GuildFeatures.HUB))) {
    a.default.onOpenHubInvite(e.invite);
    return
  }
  null != r && (null == r ? void 0 : null === (n = r.features) || void 0 === n ? void 0 : n.includes(s.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) && !(null == r ? void 0 : null === (i = r.features) || void 0 === i ? void 0 : i.includes(s.GuildFeatures.PREVIEW_ENABLED)) && (0, l.transitionTo)(s.Routes.GUILD_MEMBER_VERIFICATION(r.id, e.invite.code))
}
class o extends i.default {
  constructor(...e) {
    super(...e), this.actions = {
      INVITE_ACCEPT_SUCCESS: r
    }
  }
}
var u = new o