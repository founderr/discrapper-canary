"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("77078"),
  o = n("255397"),
  d = n("103723"),
  c = n("191145"),
  f = n("161306"),
  h = n("292687"),
  m = n("106435"),
  p = n("271938"),
  E = n("26989"),
  g = n("42887"),
  C = n("471671"),
  S = n("754775"),
  _ = n("512264"),
  I = n("387111"),
  T = n("830251"),
  v = n("49111"),
  x = n("353927"),
  N = n("782340"),
  A = n("532351");
let M = u.AvatarSizes.SIZE_80,
  R = u.AvatarSizes.SIZE_40;

function j(e) {
  let {
    participant: t,
    channel: n,
    inCall: s,
    width: u,
    paused: j,
    selected: L,
    fit: O,
    onVideoResize: y,
    blocked: P,
    noVideoRender: b = !1,
    pulseSpeakingIndicator: D = !1
  } = e, U = g.default.getVideoComponent(), w = (0, r.useStateFromStores)([p.default], () => p.default.getId()), {
    user: F,
    streamId: k,
    speaking: B
  } = t, V = F.id === w, H = (0, T.default)(t), G = (0, r.useStateFromStores)([C.default], () => C.default.isFocused()), W = (0, r.useStateFromStores)([h.default], () => h.default.getWindowFocused(v.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), Y = (0, r.useStateFromStores)([g.default], () => null != F.id && g.default.isLocalVideoDisabled(F.id, (0, f.default)(t.type)), [F.id, t.type]), z = (0, r.useStateFromStores)([E.default], () => E.default.isGuestOrLurker(n.guild_id, F.id)), K = I.default.getName(n.getGuildId(), n.id, F) + (z ? " ".concat(N.default.Messages.GUEST_NAME_SUFFIX) : ""), Z = B && (W || G), X = u < 124 ? R : M, {
    avatarSrc: Q,
    avatarDecorationSrc: q
  } = (0, m.default)({
    user: F,
    guildId: n.guild_id,
    size: X,
    animateOnHover: !Z
  }), J = (0, r.useStateFromStores)([c.default], () => c.default.getSelectedParticipant(n.id));
  return (a.useEffect(() => {
    n.isGuildStageVoice() && !H && (null == J ? void 0 : J.id) === F.id && o.default.selectParticipant(n.id, null)
  }, [H]), s && !Y && !b && H && !L && null != U && g.default.supports(x.Features.VIDEO)) ? (0, l.jsx)(_.default, {
    onResize: y,
    wrapperClassName: A.videoWrapper,
    className: A.content,
    mirror: V,
    streamId: k,
    videoComponent: U,
    fit: O,
    paused: j,
    videoSpinnerContext: F.id === w ? d.VideoSpinnerContext.SELF_VIDEO : d.VideoSpinnerContext.REMOTE_VIDEO,
    userId: F.id
  }, k) : (0, l.jsx)("div", {
    className: i(A.content, {
      [A.blockedAvatar]: P
    }),
    children: (0, l.jsx)(S.default, {
      "aria-label": K,
      src: Q,
      avatarDecoration: q,
      backgroundSrc: F.getAvatarURL(n.guild_id, 80),
      size: X,
      pulseSpeakingIndicator: D,
      speaking: B,
      userId: F.id
    })
  })
}