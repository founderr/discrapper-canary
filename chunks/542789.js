"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("913144"),
  i = n("316272"),
  r = n("575365"),
  o = n("299285"),
  u = n("824563"),
  d = n("27618"),
  c = n("697218"),
  f = n("599110"),
  E = n("713135"),
  h = n("49111"),
  _ = n("450484");
let C = null;
async function I(e) {
  var t, l, i, I;
  let S, p, m, {
      userId: T,
      section: g,
      guildId: A = h.ME,
      channelId: N,
      friendToken: R,
      autoFocusNote: v,
      analyticsLocation: O
    } = e,
    L = c.default.getUser(T),
    M = E.default.getUserProfile(T);
  if (null == L) return;
  let P = u.default.getPrimaryActivity(T);
  null != P && (S = P.party, p = P.assets, m = null != P.application_id ? o.default.getApplication(P.application_id) : null);
  let D = u.default.getStatus(T),
    y = u.default.isMobileOnline(T),
    x = D;
  D === h.StatusTypes.ONLINE && (x = y ? h.AnalyticsUserStatusTypes.ONLINE_MOBILE : h.AnalyticsUserStatusTypes.ONLINE_DESKTOP), C = await (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await n.el("279286").then(n.bind(n, "279286"));
    return t => (0, a.jsx)(e, {
      ...t,
      user: L,
      autoFocusNote: v,
      guildId: A,
      friendToken: R,
      initialSection: g,
      channelId: N
    })
  }), f.default.track(h.AnalyticEvents.OPEN_MODAL, {
    type: "Profile Modal",
    guild_id: A !== h.ME ? A : null,
    channel_id: N,
    other_user_id: T,
    application_id: null !== (l = null == P ? void 0 : P.application_id) && void 0 !== l ? l : null,
    application_name: null == P ? void 0 : P.name,
    sku_id: null !== (i = null == m ? void 0 : m.primarySkuId) && void 0 !== i ? i : null,
    is_friend: d.default.isFriend(T),
    has_images: !!(null !== (I = null == p ? void 0 : p.large_image) && void 0 !== I ? I : null == p ? void 0 : p.small_image),
    party_max: null == S ? void 0 : null === (t = S.size) || void 0 === t ? void 0 : t[1],
    party_id: null == S ? void 0 : S.id,
    party_platform: (0, _.isSpotifyParty)(null == S ? void 0 : S.id) ? h.PlatformTypes.SPOTIFY : null,
    game_platform: (0, r.default)(P),
    profile_user_status: x,
    profile_has_nitro_customization: (null == M ? void 0 : M.banner) != null,
    profile_has_profile_effect: (null == M ? void 0 : M.profileEffectId) != null,
    ...null == O ? null : (0, f.expandLocation)(O)
  })
}

function S() {
  null != C && (0, s.closeModal)(C), C = null
}
class p extends i.default {
  _initialize() {
    l.default.subscribe("USER_PROFILE_MODAL_OPEN", I), l.default.subscribe("USER_PROFILE_MODAL_CLOSE", S)
  }
  _terminate() {
    l.default.unsubscribe("USER_PROFILE_MODAL_OPEN", I), l.default.unsubscribe("USER_PROFILE_MODAL_CLOSE", S)
  }
}
var m = new p