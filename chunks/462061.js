n.d(t, {
  T: function() {
    return j
  },
  Z: function() {
    return L
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
  E = n(470956),
  g = n(314897),
  f = n(271383),
  C = n(131951),
  _ = n(451478),
  I = n(783259),
  x = n(40300),
  T = n(5192),
  N = n(44136),
  Z = n(981631),
  S = n(65154),
  v = n(689938),
  A = n(372453);
let M = o.AvatarSizes.SIZE_80,
  R = o.AvatarSizes.SIZE_40;

function j(e) {
  let {
    channelId: t,
    userId: n
  } = e;
  return (0, E.Eu)(t, n) ? (0, l.jsx)(o.Tooltip, {
    text: v.Z.Messages.NOTICE_USER_DISCONNECTED,
    position: "bottom",
    color: o.TooltipColors.GREY,
    children: e => (0, l.jsx)("div", {
      ...e,
      className: A.interactive,
      children: (0, l.jsx)(o.CircleExclamationPointIcon, {
        color: o.tokens.colors.STATUS_WARNING_BACKGROUND
      })
    })
  }) : null
}

function L(e) {
  let {
    participant: t,
    channel: n,
    inCall: s,
    width: o,
    paused: E,
    selected: j,
    fit: L,
    onVideoResize: O,
    blocked: P,
    noVideoRender: b = !1,
    pulseSpeakingIndicator: y = !1
  } = e, D = C.Z.getVideoComponent(), U = (0, r.e7)([g.default], () => g.default.getId()), {
    user: k,
    streamId: w,
    speaking: H
  } = t, B = k.id === U, G = (0, N.ZP)(t), V = (0, r.e7)([_.Z], () => _.Z.isFocused()), F = (0, r.e7)([m.Z], () => m.Z.getWindowFocused(Z.KJ3.CHANNEL_CALL_POPOUT)), z = (0, r.e7)([C.Z], () => null != k.id && C.Z.isLocalVideoDisabled(k.id, (0, h.Z)(t.type)), [k.id, t.type]), W = (0, r.e7)([f.ZP], () => f.ZP.isGuestOrLurker(n.guild_id, k.id)), Y = T.ZP.getName(n.getGuildId(), n.id, k) + (W ? " ".concat(v.Z.Messages.GUEST_NAME_SUFFIX) : ""), K = H && (F || V), q = o < 124 ? R : M, {
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
  }, [G]), s && !z && !b && G && !j && null != D && C.Z.supports(S.AN.VIDEO)) ? (0, l.jsx)(x.Z, {
    onResize: O,
    wrapperClassName: A.videoWrapper,
    className: A.content,
    mirror: B,
    streamId: w,
    videoComponent: D,
    fit: L,
    paused: E,
    videoSpinnerContext: k.id === U ? u.m.SELF_VIDEO : u.m.REMOTE_VIDEO,
    userId: k.id
  }, w) : (0, l.jsx)("div", {
    className: a()(A.content, {
      [A.blockedAvatar]: P
    }),
    children: (0, l.jsx)(I.Z, {
      "aria-label": Y,
      src: X,
      avatarDecoration: Q,
      backgroundSrc: k.getAvatarURL(n.guild_id, 80),
      size: q,
      pulseSpeakingIndicator: y,
      speaking: H,
      userId: k.id
    })
  })
}