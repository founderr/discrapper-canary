"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  i = n("913144"),
  l = n("316272"),
  r = n("575365"),
  o = n("299285"),
  u = n("824563"),
  d = n("27618"),
  c = n("697218"),
  f = n("599110"),
  E = n("713135"),
  _ = n("49111"),
  h = n("450484");
let C = null;
async function I(e) {
  var t, i, l, I;
  let T, S, p, {
      userId: m,
      section: A,
      guildId: g = _.ME,
      channelId: N,
      friendToken: R,
      autoFocusNote: O,
      analyticsLocation: L
    } = e,
    v = c.default.getUser(m),
    M = E.default.getUserProfile(m);
  if (null == v) return;
  let P = u.default.getPrimaryActivity(m);
  null != P && (T = P.party, S = P.assets, p = null != P.application_id ? o.default.getApplication(P.application_id) : null);
  let D = u.default.getStatus(m),
    y = u.default.isMobileOnline(m),
    x = D;
  D === _.StatusTypes.ONLINE && (x = y ? _.AnalyticsUserStatusTypes.ONLINE_MOBILE : _.AnalyticsUserStatusTypes.ONLINE_DESKTOP), C = await (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await n.el("279286").then(n.bind(n, "279286"));
    return t => (0, a.jsx)(e, {
      ...t,
      user: v,
      autoFocusNote: O,
      guildId: g,
      friendToken: R,
      initialSection: A,
      channelId: N
    })
  }), f.default.track(_.AnalyticEvents.OPEN_MODAL, {
    type: "Profile Modal",
    guild_id: g !== _.ME ? g : null,
    channel_id: N,
    other_user_id: m,
    application_id: null !== (i = null == P ? void 0 : P.application_id) && void 0 !== i ? i : null,
    application_name: null == P ? void 0 : P.name,
    sku_id: null !== (l = null == p ? void 0 : p.primarySkuId) && void 0 !== l ? l : null,
    is_friend: d.default.isFriend(m),
    has_images: !!(null !== (I = null == S ? void 0 : S.large_image) && void 0 !== I ? I : null == S ? void 0 : S.small_image),
    party_max: null == T ? void 0 : null === (t = T.size) || void 0 === t ? void 0 : t[1],
    party_id: null == T ? void 0 : T.id,
    party_platform: (0, h.isSpotifyParty)(null == T ? void 0 : T.id) ? _.PlatformTypes.SPOTIFY : null,
    game_platform: (0, r.default)(P),
    profile_user_status: x,
    profile_has_nitro_customization: (null == M ? void 0 : M.banner) != null,
    profile_has_profile_effect: (null == M ? void 0 : M.profileEffectId) != null,
    ...null == L ? null : (0, f.expandLocation)(L)
  })
}

function T() {
  null != C && (0, s.closeModal)(C), C = null
}
class S extends l.default {
  _initialize() {
    i.default.subscribe("USER_PROFILE_MODAL_OPEN", I), i.default.subscribe("USER_PROFILE_MODAL_CLOSE", T)
  }
  _terminate() {
    i.default.unsubscribe("USER_PROFILE_MODAL_OPEN", I), i.default.unsubscribe("USER_PROFILE_MODAL_CLOSE", T)
  }
}
var p = new S