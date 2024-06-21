var i = n(735250);
n(470079);
var s = n(481060),
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
async function g(e) {
  var t, l, a, g;
  let {
    userId: p,
    section: N,
    subsection: T,
    guildId: C = _.ME,
    channelId: S,
    friendToken: A,
    analyticsLocation: f,
    ...Z
  } = e, v = d.default.getUser(p);
  if (null == v) return;
  let L = h.Z.getUserProfile(p),
    O = c.Z.getPrimaryActivity(p),
    R = c.Z.getStatus(p),
    x = c.Z.isMobileOnline(p),
    {
      party: M,
      assets: P,
      application_id: D
    } = null != O ? O : {},
    b = null != D ? o.Z.getApplication(D) : null,
    y = x ? _.j28.ONLINE_MOBILE : _.j28.ONLINE_DESKTOP,
    j = R === _.Skl.ONLINE ? y : R;
  m = await (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("824")]).then(n.bind(n, 304113));
    return t => (0, i.jsx)(e, {
      location: "handleOpenUserProfileModal",
      user: v,
      guildId: C,
      friendToken: A,
      initialSection: N,
      initialSubsection: T,
      channelId: S,
      ...t,
      ...Z
    })
  }), E.default.track(_.rMx.OPEN_MODAL, {
    type: "Profile Modal",
    guild_id: C !== _.ME ? C : null,
    channel_id: S,
    other_user_id: p,
    application_id: null !== (l = null == O ? void 0 : O.application_id) && void 0 !== l ? l : null,
    application_name: null == O ? void 0 : O.name,
    sku_id: null !== (a = null == b ? void 0 : b.primarySkuId) && void 0 !== a ? a : null,
    is_friend: u.Z.isFriend(p),
    has_images: !!(null !== (g = null == P ? void 0 : P.large_image) && void 0 !== g ? g : null == P ? void 0 : P.small_image),
    party_max: null == M ? void 0 : null === (t = M.size) || void 0 === t ? void 0 : t[1],
    party_id: null == M ? void 0 : M.id,
    party_platform: (0, I.Ps)(null == M ? void 0 : M.id) ? _.ABu.SPOTIFY : null,
    game_platform: (0, r.Z)(O),
    profile_user_status: j,
    profile_has_nitro_customization: (null == L ? void 0 : L.banner) != null,
    profile_has_profile_effect: (null == L ? void 0 : L.profileEffectId) != null,
    ...null == f ? null : (0, E.expandLocation)(f)
  })
}

function p() {
  null != m && (0, s.closeModal)(m), m = null
}
class N extends a.Z {
  _initialize() {
    l.Z.subscribe("USER_PROFILE_MODAL_OPEN", g), l.Z.subscribe("USER_PROFILE_MODAL_CLOSE", p)
  }
  _terminate() {
    l.Z.unsubscribe("USER_PROFILE_MODAL_OPEN", g), l.Z.unsubscribe("USER_PROFILE_MODAL_CLOSE", p)
  }
}
t.Z = new N