"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("570140"),
  i = a("317770"),
  r = a("603113"),
  o = a("812206"),
  u = a("158776"),
  d = a("699516"),
  c = a("594174"),
  f = a("626135"),
  E = a("621853"),
  h = a("981631"),
  _ = a("616922");
let C = null;
async function m(e) {
  var t, l, i, m;
  let {
    userId: S,
    section: p,
    guildId: I = h.ME,
    channelId: g,
    friendToken: T,
    autoFocusNote: A,
    analyticsLocation: N
  } = e, v = c.default.getUser(S);
  if (null == v) return;
  let L = E.default.getUserProfile(S),
    R = u.default.getPrimaryActivity(S),
    O = u.default.getStatus(S),
    M = u.default.isMobileOnline(S),
    {
      party: P,
      assets: x,
      application_id: y
    } = null != R ? R : {},
    D = null != y ? o.default.getApplication(y) : null,
    b = M ? h.AnalyticsUserStatusTypes.ONLINE_MOBILE : h.AnalyticsUserStatusTypes.ONLINE_DESKTOP,
    U = O === h.StatusTypes.ONLINE ? b : O;
  C = await (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([a.e("99387"), a.e("824")]).then(a.bind(a, "304113"));
    return t => (0, n.jsx)(e, {
      ...t,
      location: "handleOpenUserProfileModal",
      user: v,
      autoFocusNote: A,
      guildId: I,
      friendToken: T,
      initialSection: p,
      channelId: g
    })
  }), f.default.track(h.AnalyticEvents.OPEN_MODAL, {
    type: "Profile Modal",
    guild_id: I !== h.ME ? I : null,
    channel_id: g,
    other_user_id: S,
    application_id: null !== (l = null == R ? void 0 : R.application_id) && void 0 !== l ? l : null,
    application_name: null == R ? void 0 : R.name,
    sku_id: null !== (i = null == D ? void 0 : D.primarySkuId) && void 0 !== i ? i : null,
    is_friend: d.default.isFriend(S),
    has_images: !!(null !== (m = null == x ? void 0 : x.large_image) && void 0 !== m ? m : null == x ? void 0 : x.small_image),
    party_max: null == P ? void 0 : null === (t = P.size) || void 0 === t ? void 0 : t[1],
    party_id: null == P ? void 0 : P.id,
    party_platform: (0, _.isSpotifyParty)(null == P ? void 0 : P.id) ? h.PlatformTypes.SPOTIFY : null,
    game_platform: (0, r.default)(R),
    profile_user_status: U,
    profile_has_nitro_customization: (null == L ? void 0 : L.banner) != null,
    profile_has_profile_effect: (null == L ? void 0 : L.profileEffectId) != null,
    ...null == N ? null : (0, f.expandLocation)(N)
  })
}

function S() {
  null != C && (0, s.closeModal)(C), C = null
}
class p extends i.default {
  _initialize() {
    l.default.subscribe("USER_PROFILE_MODAL_OPEN", m), l.default.subscribe("USER_PROFILE_MODAL_CLOSE", S)
  }
  _terminate() {
    l.default.unsubscribe("USER_PROFILE_MODAL_OPEN", m), l.default.unsubscribe("USER_PROFILE_MODAL_CLOSE", S)
  }
}
t.default = new p