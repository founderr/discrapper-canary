"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("570140"),
  i = n("317770"),
  r = n("603113"),
  o = n("812206"),
  u = n("158776"),
  d = n("699516"),
  c = n("594174"),
  f = n("626135"),
  E = n("621853"),
  C = n("981631"),
  h = n("616922");
let _ = null;
async function S(e) {
  var t, l, i, S;
  let {
    userId: m,
    section: p,
    guildId: I = C.ME,
    channelId: g,
    friendToken: T,
    autoFocusNote: A,
    analyticsLocation: N
  } = e, v = c.default.getUser(m);
  if (null == v) return;
  let R = E.default.getUserProfile(m),
    O = u.default.getPrimaryActivity(m),
    L = u.default.getStatus(m),
    P = u.default.isMobileOnline(m),
    {
      party: y,
      assets: M,
      application_id: D
    } = null != O ? O : {},
    x = null != D ? o.default.getApplication(D) : null,
    b = P ? C.AnalyticsUserStatusTypes.ONLINE_MOBILE : C.AnalyticsUserStatusTypes.ONLINE_DESKTOP,
    U = L === C.StatusTypes.ONLINE ? b : L;
  _ = await (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("824")]).then(n.bind(n, "304113"));
    return t => (0, a.jsx)(e, {
      ...t,
      location: "handleOpenUserProfileModal",
      user: v,
      autoFocusNote: A,
      guildId: I,
      friendToken: T,
      initialSection: p,
      channelId: g
    })
  }), f.default.track(C.AnalyticEvents.OPEN_MODAL, {
    type: "Profile Modal",
    guild_id: I !== C.ME ? I : null,
    channel_id: g,
    other_user_id: m,
    application_id: null !== (l = null == O ? void 0 : O.application_id) && void 0 !== l ? l : null,
    application_name: null == O ? void 0 : O.name,
    sku_id: null !== (i = null == x ? void 0 : x.primarySkuId) && void 0 !== i ? i : null,
    is_friend: d.default.isFriend(m),
    has_images: !!(null !== (S = null == M ? void 0 : M.large_image) && void 0 !== S ? S : null == M ? void 0 : M.small_image),
    party_max: null == y ? void 0 : null === (t = y.size) || void 0 === t ? void 0 : t[1],
    party_id: null == y ? void 0 : y.id,
    party_platform: (0, h.isSpotifyParty)(null == y ? void 0 : y.id) ? C.PlatformTypes.SPOTIFY : null,
    game_platform: (0, r.default)(O),
    profile_user_status: U,
    profile_has_nitro_customization: (null == R ? void 0 : R.banner) != null,
    profile_has_profile_effect: (null == R ? void 0 : R.profileEffectId) != null,
    ...null == N ? null : (0, f.expandLocation)(N)
  })
}

function m() {
  null != _ && (0, s.closeModal)(_), _ = null
}
class p extends i.default {
  _initialize() {
    l.default.subscribe("USER_PROFILE_MODAL_OPEN", S), l.default.subscribe("USER_PROFILE_MODAL_CLOSE", m)
  }
  _terminate() {
    l.default.unsubscribe("USER_PROFILE_MODAL_OPEN", S), l.default.unsubscribe("USER_PROFILE_MODAL_CLOSE", m)
  }
}
t.default = new p