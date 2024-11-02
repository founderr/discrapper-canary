n.d(t, {
    T: function () {
        return y;
    },
    Z: function () {
        return P;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(475179),
    u = n(763520),
    d = n(358221),
    h = n(414910),
    m = n(266910),
    p = n(352978),
    f = n(928518),
    g = n(518950),
    C = n(470956),
    x = n(314897),
    v = n(271383),
    _ = n(131951),
    I = n(451478),
    E = n(5192),
    b = n(44136),
    S = n(981631),
    Z = n(65154),
    T = n(388032),
    N = n(810190);
let j = o.AvatarSizes.SIZE_80,
    A = o.AvatarSizes.SIZE_40;
function y(e) {
    let { channelId: t, userId: n } = e;
    return (0, C.Eu)(t, n)
        ? (0, i.jsx)(o.Tooltip, {
              text: T.intl.string(T.t.HFwRpq),
              position: 'bottom',
              color: o.TooltipColors.GREY,
              children: (e) =>
                  (0, i.jsx)('div', {
                      ...e,
                      className: N.interactive,
                      children: (0, i.jsx)(o.CircleWarningIcon, { color: o.tokens.colors.STATUS_WARNING_BACKGROUND })
                  })
          })
        : null;
}
function P(e) {
    let { participant: t, channel: n, inCall: r, width: o, paused: C, selected: y, fit: P, onVideoResize: M, blocked: R, noVideoRender: L = !1, pulseSpeakingIndicator: k = !1 } = e,
        O = _.Z.getVideoComponent(),
        w = (0, s.e7)([x.default], () => x.default.getId()),
        { user: D, streamId: U, speaking: B } = t,
        H = D.id === w,
        F = (0, b.ZP)(t),
        G = (0, s.e7)([I.Z], () => I.Z.isFocused()),
        V = (0, s.e7)([f.Z], () => f.Z.getWindowFocused(S.KJ3.CHANNEL_CALL_POPOUT)),
        z = (0, s.e7)([_.Z], () => null != D.id && _.Z.isLocalVideoDisabled(D.id, (0, h.Z)(t.type)), [D.id, t.type]),
        W = (0, s.e7)([v.ZP], () => v.ZP.isGuestOrLurker(n.guild_id, D.id)),
        Y = E.ZP.getName(n.getGuildId(), n.id, D) + (W ? ' '.concat(T.intl.string(T.t['pFO/Pj'])) : ''),
        K = B && (V || G),
        q = o < 124 ? A : j,
        { avatarSrc: X, avatarDecorationSrc: J } = (0, g.Z)({
            user: D,
            guildId: n.guild_id,
            size: q,
            animateOnHover: !K
        }),
        Q = (0, s.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id));
    return (l.useEffect(() => {
        n.isGuildStageVoice() && !F && (null == Q ? void 0 : Q.id) === D.id && c.Z.selectParticipant(n.id, null);
    }, [F]),
    r && !z && !L && F && !y && null != O && _.Z.supports(Z.AN.VIDEO))
        ? (0, i.jsx)(
              p.Z,
              {
                  onResize: M,
                  wrapperClassName: N.videoWrapper,
                  className: N.content,
                  mirror: H,
                  streamId: U,
                  videoComponent: O,
                  fit: P,
                  paused: C,
                  videoSpinnerContext: D.id === w ? u.m.SELF_VIDEO : u.m.REMOTE_VIDEO,
                  userId: D.id
              },
              U
          )
        : (0, i.jsx)('div', {
              className: a()(N.content, { [N.blockedAvatar]: R }),
              children: (0, i.jsx)(m.Z, {
                  'aria-label': Y,
                  src: X,
                  avatarDecoration: J,
                  backgroundSrc: D.getAvatarURL(n.guild_id, 80),
                  size: q,
                  pulseSpeakingIndicator: k,
                  speaking: B,
                  userId: D.id
              })
          });
}
