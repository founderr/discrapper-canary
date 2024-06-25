var s = n(735250);
n(470079);
var i = n(481060),
  l = n(570140),
  a = n(317770),
  r = n(603113),
  o = n(812206),
  c = n(158776),
  u = n(699516),
  d = n(594174),
  E = n(626135),
  h = n(621853),
  _ = n(981631),
  I = n(616922);
let m = null;
async function T(e) {
  var t, l, a, T;
  let {
    userId: g,
    section: p,
    subsection: N,
    guildId: S = _.ME,
    channelId: C,
    friendToken: A,
    analyticsLocation: f,
    ...Z
  } = e, L = d.default.getUser(g);
  if (null == L) return;
  let O = h.Z.getUserProfile(g),
    v = c.Z.getPrimaryActivity(g),
    R = c.Z.getStatus(g),
    P = c.Z.isMobileOnline(g),
    {
      party: x,
      assets: M,
      application_id: D
    } = null != v ? v : {},
    b = null != D ? o.Z.getApplication(D) : null,
    y = P ? _.j28.ONLINE_MOBILE : _.j28.ONLINE_DESKTOP,
    j = R === _.Skl.ONLINE ? y : R;
  m = await (0, i.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("824")]).then(n.bind(n, 304113));
    return t => (0, s.jsx)(e, {
      location: "handleOpenUserProfileModal",
      user: L,
      guildId: S,
      friendToken: A,
      initialSection: p,
      initialSubsection: N,
      channelId: C,
      ...t,
      ...Z
    })
  }), E.default.track(_.rMx.OPEN_MODAL, {
    type: "Profile Modal",
    guild_id: S !== _.ME ? S : null,
    channel_id: C,
    other_user_id: g,
    application_id: null !== (l = null == v ? void 0 : v.application_id) && void 0 !== l ? l : null,
    application_name: null == v ? void 0 : v.name,
    sku_id: null !== (a = null == b ? void 0 : b.primarySkuId) && void 0 !== a ? a : null,
    is_friend: u.Z.isFriend(g),
    has_images: !!(null !== (T = null == M ? void 0 : M.large_image) && void 0 !== T ? T : null == M ? void 0 : M.small_image),
    party_max: null == x ? void 0 : null === (t = x.size) || void 0 === t ? void 0 : t[1],
    party_id: null == x ? void 0 : x.id,
    party_platform: (0, I.Ps)(null == x ? void 0 : x.id) ? _.ABu.SPOTIFY : null,
    game_platform: (0, r.Z)(v),
    profile_user_status: j,
    profile_has_nitro_customization: (null == O ? void 0 : O.banner) != null,
    profile_has_profile_effect: (null == O ? void 0 : O.profileEffectId) != null,
    ...null == f ? null : (0, E.expandLocation)(f)
  })
}

function g() {
  null != m && (0, i.closeModal)(m), m = null
}
class p extends a.Z {
  _initialize() {
    l.Z.subscribe("USER_PROFILE_MODAL_OPEN", T), l.Z.subscribe("USER_PROFILE_MODAL_CLOSE", g)
  }
  _terminate() {
    l.Z.unsubscribe("USER_PROFILE_MODAL_OPEN", T), l.Z.unsubscribe("USER_PROFILE_MODAL_CLOSE", g)
  }
}
t.Z = new p