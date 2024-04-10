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
  h = n("981631"),
  _ = n("616922");
let C = null;
async function m(e) {
  var t, l, i, m;
  let {
    userId: S,
    section: I,
    guildId: p = h.ME,
    channelId: T,
    friendToken: g,
    autoFocusNote: N,
    analyticsLocation: A
  } = e, v = c.default.getUser(S);
  if (null == v) return;
  let R = E.default.getUserProfile(S),
    O = u.default.getPrimaryActivity(S),
    L = u.default.getStatus(S),
    P = u.default.isMobileOnline(S),
    {
      party: M,
      assets: y,
      application_id: x
    } = null != O ? O : {},
    D = null != x ? o.default.getApplication(x) : null,
    b = P ? h.AnalyticsUserStatusTypes.ONLINE_MOBILE : h.AnalyticsUserStatusTypes.ONLINE_DESKTOP,
    U = L === h.StatusTypes.ONLINE ? b : L;
  C = await (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("824")]).then(n.bind(n, "304113"));
    return t => (0, a.jsx)(e, {
      ...t,
      location: "handleOpenUserProfileModal",
      user: v,
      autoFocusNote: N,
      guildId: p,
      friendToken: g,
      initialSection: I,
      channelId: T
    })
  }), f.default.track(h.AnalyticEvents.OPEN_MODAL, {
    type: "Profile Modal",
    guild_id: p !== h.ME ? p : null,
    channel_id: T,
    other_user_id: S,
    application_id: null !== (l = null == O ? void 0 : O.application_id) && void 0 !== l ? l : null,
    application_name: null == O ? void 0 : O.name,
    sku_id: null !== (i = null == D ? void 0 : D.primarySkuId) && void 0 !== i ? i : null,
    is_friend: d.default.isFriend(S),
    has_images: !!(null !== (m = null == y ? void 0 : y.large_image) && void 0 !== m ? m : null == y ? void 0 : y.small_image),
    party_max: null == M ? void 0 : null === (t = M.size) || void 0 === t ? void 0 : t[1],
    party_id: null == M ? void 0 : M.id,
    party_platform: (0, _.isSpotifyParty)(null == M ? void 0 : M.id) ? h.PlatformTypes.SPOTIFY : null,
    game_platform: (0, r.default)(O),
    profile_user_status: U,
    profile_has_nitro_customization: (null == R ? void 0 : R.banner) != null,
    profile_has_profile_effect: (null == R ? void 0 : R.profileEffectId) != null,
    ...null == A ? null : (0, f.expandLocation)(A)
  })
}

function S() {
  null != C && (0, s.closeModal)(C), C = null
}
class I extends i.default {
  _initialize() {
    l.default.subscribe("USER_PROFILE_MODAL_OPEN", m), l.default.subscribe("USER_PROFILE_MODAL_CLOSE", S)
  }
  _terminate() {
    l.default.unsubscribe("USER_PROFILE_MODAL_OPEN", m), l.default.unsubscribe("USER_PROFILE_MODAL_CLOSE", S)
  }
}
t.default = new I