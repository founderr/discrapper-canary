"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  i = n("570140"),
  l = n("317770"),
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
  var t, i, l, m;
  let {
    userId: p,
    section: S,
    guildId: g = h.ME,
    channelId: I,
    friendToken: T,
    autoFocusNote: A,
    analyticsLocation: N
  } = e, v = c.default.getUser(p);
  if (null == v) return;
  let R = E.default.getUserProfile(p),
    O = u.default.getPrimaryActivity(p),
    L = u.default.getStatus(p),
    M = u.default.isMobileOnline(p),
    {
      party: y,
      assets: P,
      application_id: x
    } = null != O ? O : {},
    D = null != x ? o.default.getApplication(x) : null,
    b = M ? h.AnalyticsUserStatusTypes.ONLINE_MOBILE : h.AnalyticsUserStatusTypes.ONLINE_DESKTOP,
    U = L === h.StatusTypes.ONLINE ? b : L;
  C = await (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("824")]).then(n.bind(n, "304113"));
    return t => (0, a.jsx)(e, {
      ...t,
      location: "handleOpenUserProfileModal",
      user: v,
      autoFocusNote: A,
      guildId: g,
      friendToken: T,
      initialSection: S,
      channelId: I
    })
  }), f.default.track(h.AnalyticEvents.OPEN_MODAL, {
    type: "Profile Modal",
    guild_id: g !== h.ME ? g : null,
    channel_id: I,
    other_user_id: p,
    application_id: null !== (i = null == O ? void 0 : O.application_id) && void 0 !== i ? i : null,
    application_name: null == O ? void 0 : O.name,
    sku_id: null !== (l = null == D ? void 0 : D.primarySkuId) && void 0 !== l ? l : null,
    is_friend: d.default.isFriend(p),
    has_images: !!(null !== (m = null == P ? void 0 : P.large_image) && void 0 !== m ? m : null == P ? void 0 : P.small_image),
    party_max: null == y ? void 0 : null === (t = y.size) || void 0 === t ? void 0 : t[1],
    party_id: null == y ? void 0 : y.id,
    party_platform: (0, _.isSpotifyParty)(null == y ? void 0 : y.id) ? h.PlatformTypes.SPOTIFY : null,
    game_platform: (0, r.default)(O),
    profile_user_status: U,
    profile_has_nitro_customization: (null == R ? void 0 : R.banner) != null,
    profile_has_profile_effect: (null == R ? void 0 : R.profileEffectId) != null,
    ...null == N ? null : (0, f.expandLocation)(N)
  })
}

function p() {
  null != C && (0, s.closeModal)(C), C = null
}
class S extends l.default {
  _initialize() {
    i.default.subscribe("USER_PROFILE_MODAL_OPEN", m), i.default.subscribe("USER_PROFILE_MODAL_CLOSE", p)
  }
  _terminate() {
    i.default.unsubscribe("USER_PROFILE_MODAL_OPEN", m), i.default.unsubscribe("USER_PROFILE_MODAL_CLOSE", p)
  }
}
t.default = new S