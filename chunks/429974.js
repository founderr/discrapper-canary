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
async function S(e) {
  var t, l, i, S;
  let {
    userId: m,
    section: I,
    guildId: p = h.ME,
    channelId: T,
    friendToken: g,
    autoFocusNote: A,
    analyticsLocation: N
  } = e, R = c.default.getUser(m);
  if (null == R) return;
  let O = E.default.getUserProfile(m),
    v = u.default.getPrimaryActivity(m),
    L = u.default.getStatus(m),
    M = u.default.isMobileOnline(m),
    {
      party: P,
      assets: y,
      application_id: D
    } = null != v ? v : {},
    x = null != D ? o.default.getApplication(D) : null,
    b = M ? h.AnalyticsUserStatusTypes.ONLINE_MOBILE : h.AnalyticsUserStatusTypes.ONLINE_DESKTOP,
    U = L === h.StatusTypes.ONLINE ? b : L;
  C = await (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("824")]).then(n.bind(n, "304113"));
    return t => (0, a.jsx)(e, {
      ...t,
      location: "handleOpenUserProfileModal",
      user: R,
      autoFocusNote: A,
      guildId: p,
      friendToken: g,
      initialSection: I,
      channelId: T
    })
  }), f.default.track(h.AnalyticEvents.OPEN_MODAL, {
    type: "Profile Modal",
    guild_id: p !== h.ME ? p : null,
    channel_id: T,
    other_user_id: m,
    application_id: null !== (l = null == v ? void 0 : v.application_id) && void 0 !== l ? l : null,
    application_name: null == v ? void 0 : v.name,
    sku_id: null !== (i = null == x ? void 0 : x.primarySkuId) && void 0 !== i ? i : null,
    is_friend: d.default.isFriend(m),
    has_images: !!(null !== (S = null == y ? void 0 : y.large_image) && void 0 !== S ? S : null == y ? void 0 : y.small_image),
    party_max: null == P ? void 0 : null === (t = P.size) || void 0 === t ? void 0 : t[1],
    party_id: null == P ? void 0 : P.id,
    party_platform: (0, _.isSpotifyParty)(null == P ? void 0 : P.id) ? h.PlatformTypes.SPOTIFY : null,
    game_platform: (0, r.default)(v),
    profile_user_status: U,
    profile_has_nitro_customization: (null == O ? void 0 : O.banner) != null,
    profile_has_profile_effect: (null == O ? void 0 : O.profileEffectId) != null,
    ...null == N ? null : (0, f.expandLocation)(N)
  })
}

function m() {
  null != C && (0, s.closeModal)(C), C = null
}
class I extends i.default {
  _initialize() {
    l.default.subscribe("USER_PROFILE_MODAL_OPEN", S), l.default.subscribe("USER_PROFILE_MODAL_CLOSE", m)
  }
  _terminate() {
    l.default.unsubscribe("USER_PROFILE_MODAL_OPEN", S), l.default.unsubscribe("USER_PROFILE_MODAL_CLOSE", m)
  }
}
t.default = new I