"use strict";
E.r(_), E.d(_, {
  default: function() {
    return I
  }
}), E("222007");
var t = E("689988"),
  o = E("704341"),
  n = E("393414"),
  a = E("49111");

function r(e) {
  var _, E, t;
  let {
    guild: r
  } = e.invite;
  if (null != r && (null == r ? void 0 : null === (_ = r.features) || void 0 === _ ? void 0 : _.includes(a.GuildFeatures.HUB))) {
    o.default.onOpenHubInvite(e.invite);
    return
  }
  null != r && (null == r ? void 0 : null === (E = r.features) || void 0 === E ? void 0 : E.includes(a.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) && !(null == r ? void 0 : null === (t = r.features) || void 0 === t ? void 0 : t.includes(a.GuildFeatures.PREVIEW_ENABLED)) && (0, n.transitionTo)(a.Routes.GUILD_MEMBER_VERIFICATION(r.id, e.invite.code))
}
class i extends t.default {
  constructor(...e) {
    super(...e), this.actions = {
      INVITE_ACCEPT_SUCCESS: r
    }
  }
}
var I = new i