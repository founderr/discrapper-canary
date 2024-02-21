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
  h = n("49111"),
  _ = n("450484");
let C = null;
async function I(e) {
  var t, i, l, I;
  let S, m, p, {
      userId: T,
      section: g,
      guildId: A = h.ME,
      channelId: N,
      friendToken: R,
      autoFocusNote: O,
      analyticsLocation: v
    } = e,
    L = c.default.getUser(T),
    M = E.default.getUserProfile(T);
  if (null == L) return;
  let P = u.default.getPrimaryActivity(T);
  null != P && (S = P.party, m = P.assets, p = null != P.application_id ? o.default.getApplication(P.application_id) : null);
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
      autoFocusNote: O,
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
    application_id: null !== (i = null == P ? void 0 : P.application_id) && void 0 !== i ? i : null,
    application_name: null == P ? void 0 : P.name,
    sku_id: null !== (l = null == p ? void 0 : p.primarySkuId) && void 0 !== l ? l : null,
    is_friend: d.default.isFriend(T),
    has_images: !!(null !== (I = null == m ? void 0 : m.large_image) && void 0 !== I ? I : null == m ? void 0 : m.small_image),
    party_max: null == S ? void 0 : null === (t = S.size) || void 0 === t ? void 0 : t[1],
    party_id: null == S ? void 0 : S.id,
    party_platform: (0, _.isSpotifyParty)(null == S ? void 0 : S.id) ? h.PlatformTypes.SPOTIFY : null,
    game_platform: (0, r.default)(P),
    profile_user_status: x,
    profile_has_nitro_customization: (null == M ? void 0 : M.banner) != null,
    profile_has_profile_effect: (null == M ? void 0 : M.profileEffectId) != null,
    ...null == v ? null : (0, f.expandLocation)(v)
  })
}

function S() {
  null != C && (0, s.closeModal)(C), C = null
}
class m extends l.default {
  _initialize() {
    i.default.subscribe("USER_PROFILE_MODAL_OPEN", I), i.default.subscribe("USER_PROFILE_MODAL_CLOSE", S)
  }
  _terminate() {
    i.default.unsubscribe("USER_PROFILE_MODAL_OPEN", I), i.default.unsubscribe("USER_PROFILE_MODAL_CLOSE", S)
  }
}
var p = new m