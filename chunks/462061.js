n.d(t, {
  Z: function() {
    return R
  }
});
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(475179),
  u = n(763520),
  d = n(358221),
  h = n(414910),
  m = n(928518),
  p = n(204197),
  E = n(314897),
  g = n(271383),
  f = n(131951),
  C = n(451478),
  _ = n(783259),
  I = n(40300),
  x = n(5192),
  T = n(44136),
  N = n(981631),
  Z = n(65154),
  S = n(689938),
  v = n(372453);
let A = o.AvatarSizes.SIZE_80,
  M = o.AvatarSizes.SIZE_40;

function R(e) {
  let {
    participant: t,
    channel: n,
    inCall: s,
    width: o,
    paused: R,
    selected: j,
    fit: L,
    onVideoResize: O,
    blocked: P,
    noVideoRender: y = !1,
    pulseSpeakingIndicator: b = !1
  } = e, D = f.Z.getVideoComponent(), U = (0, r.e7)([E.default], () => E.default.getId()), {
    user: k,
    streamId: w,
    speaking: H
  } = t, B = k.id === U, G = (0, T.ZP)(t), V = (0, r.e7)([C.Z], () => C.Z.isFocused()), F = (0, r.e7)([m.Z], () => m.Z.getWindowFocused(N.KJ3.CHANNEL_CALL_POPOUT)), z = (0, r.e7)([f.Z], () => null != k.id && f.Z.isLocalVideoDisabled(k.id, (0, h.Z)(t.type)), [k.id, t.type]), W = (0, r.e7)([g.ZP], () => g.ZP.isGuestOrLurker(n.guild_id, k.id)), Y = x.ZP.getName(n.getGuildId(), n.id, k) + (W ? " ".concat(S.Z.Messages.GUEST_NAME_SUFFIX) : ""), K = H && (F || V), q = o < 124 ? M : A, {
    avatarSrc: X,
    avatarDecorationSrc: Q
  } = (0, p.Z)({
    user: k,
    guildId: n.guild_id,
    size: q,
    animateOnHover: !K
  }), J = (0, r.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id));
  return (i.useEffect(() => {
    n.isGuildStageVoice() && !G && (null == J ? void 0 : J.id) === k.id && c.Z.selectParticipant(n.id, null)
  }, [G]), s && !z && !y && G && !j && null != D && f.Z.supports(Z.AN.VIDEO)) ? (0, l.jsx)(I.Z, {
    onResize: O,
    wrapperClassName: v.videoWrapper,
    className: v.content,
    mirror: B,
    streamId: w,
    videoComponent: D,
    fit: L,
    paused: R,
    videoSpinnerContext: k.id === U ? u.m.SELF_VIDEO : u.m.REMOTE_VIDEO,
    userId: k.id
  }, w) : (0, l.jsx)("div", {
    className: a()(v.content, {
      [v.blockedAvatar]: P
    }),
    children: (0, l.jsx)(_.Z, {
      "aria-label": Y,
      src: X,
      avatarDecoration: Q,
      backgroundSrc: k.getAvatarURL(n.guild_id, 80),
      size: q,
      pulseSpeakingIndicator: b,
      speaking: H,
      userId: k.id
    })
  })
}