n.d(t, {
    T: function () {
        return R;
    },
    Z: function () {
        return L;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(442837),
    o = n(481060),
    c = n(475179),
    u = n(763520),
    d = n(358221),
    h = n(414910),
    m = n(266910),
    p = n(352978),
    _ = n(928518),
    f = n(518950),
    E = n(470956),
    g = n(314897),
    C = n(271383),
    I = n(131951),
    T = n(451478),
    x = n(5192),
    S = n(44136),
    v = n(981631),
    N = n(65154),
    A = n(689938),
    Z = n(810190);
let M = o.AvatarSizes.SIZE_80,
    b = o.AvatarSizes.SIZE_40;
function R(e) {
    let { channelId: t, userId: n } = e;
    return (0, E.Eu)(t, n)
        ? (0, i.jsx)(o.Tooltip, {
              text: A.Z.Messages.NOTICE_USER_DISCONNECTED,
              position: 'bottom',
              color: o.TooltipColors.GREY,
              children: (e) =>
                  (0, i.jsx)('div', {
                      ...e,
                      className: Z.interactive,
                      children: (0, i.jsx)(o.CircleWarningIcon, { color: o.tokens.colors.STATUS_WARNING_BACKGROUND })
                  })
          })
        : null;
}
function L(e) {
    let { participant: t, channel: n, inCall: a, width: o, paused: E, selected: R, fit: L, onVideoResize: j, blocked: P, noVideoRender: O = !1, pulseSpeakingIndicator: y = !1 } = e,
        D = I.Z.getVideoComponent(),
        U = (0, r.e7)([g.default], () => g.default.getId()),
        { user: k, streamId: w, speaking: B } = t,
        H = k.id === U,
        G = (0, S.ZP)(t),
        V = (0, r.e7)([T.Z], () => T.Z.isFocused()),
        F = (0, r.e7)([_.Z], () => _.Z.getWindowFocused(v.KJ3.CHANNEL_CALL_POPOUT)),
        W = (0, r.e7)([I.Z], () => null != k.id && I.Z.isLocalVideoDisabled(k.id, (0, h.Z)(t.type)), [k.id, t.type]),
        z = (0, r.e7)([C.ZP], () => C.ZP.isGuestOrLurker(n.guild_id, k.id)),
        Y = x.ZP.getName(n.getGuildId(), n.id, k) + (z ? ' '.concat(A.Z.Messages.GUEST_NAME_SUFFIX) : ''),
        K = B && (F || V),
        q = o < 124 ? b : M,
        { avatarSrc: X, avatarDecorationSrc: J } = (0, f.Z)({
            user: k,
            guildId: n.guild_id,
            size: q,
            animateOnHover: !K
        }),
        Q = (0, r.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id));
    return (s.useEffect(() => {
        n.isGuildStageVoice() && !G && (null == Q ? void 0 : Q.id) === k.id && c.Z.selectParticipant(n.id, null);
    }, [G]),
    a && !W && !O && G && !R && null != D && I.Z.supports(N.AN.VIDEO))
        ? (0, i.jsx)(
              p.Z,
              {
                  onResize: j,
                  wrapperClassName: Z.videoWrapper,
                  className: Z.content,
                  mirror: H,
                  streamId: w,
                  videoComponent: D,
                  fit: L,
                  paused: E,
                  videoSpinnerContext: k.id === U ? u.m.SELF_VIDEO : u.m.REMOTE_VIDEO,
                  userId: k.id
              },
              w
          )
        : (0, i.jsx)('div', {
              className: l()(Z.content, { [Z.blockedAvatar]: P }),
              children: (0, i.jsx)(m.Z, {
                  'aria-label': Y,
                  src: X,
                  avatarDecoration: J,
                  backgroundSrc: k.getAvatarURL(n.guild_id, 80),
                  size: q,
                  pulseSpeakingIndicator: y,
                  speaking: B,
                  userId: k.id
              })
          });
}
