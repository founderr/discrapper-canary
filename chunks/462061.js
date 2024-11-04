n.d(t, {
    T: function () {
        return w;
    },
    Z: function () {
        return P;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(475179),
    u = n(763520),
    d = n(358221),
    m = n(414910),
    f = n(266910),
    p = n(352978),
    h = n(928518),
    g = n(518950),
    v = n(470956),
    S = n(314897),
    I = n(271383),
    _ = n(131951),
    x = n(451478),
    E = n(5192),
    C = n(44136),
    Z = n(981631),
    y = n(65154),
    T = n(388032),
    b = n(810190);
let A = o.AvatarSizes.SIZE_80,
    N = o.AvatarSizes.SIZE_40;
function w(e) {
    let { channelId: t, userId: n } = e;
    return (0, v.Eu)(t, n)
        ? (0, i.jsx)(o.Tooltip, {
              text: T.intl.string(T.t.HFwRpq),
              position: 'bottom',
              color: o.TooltipColors.GREY,
              children: (e) =>
                  (0, i.jsx)('div', {
                      ...e,
                      className: b.interactive,
                      children: (0, i.jsx)(o.CircleWarningIcon, { color: o.tokens.colors.STATUS_WARNING_BACKGROUND })
                  })
          })
        : null;
}
function P(e) {
    let { participant: t, channel: n, inCall: a, width: o, paused: v, selected: w, fit: P, onVideoResize: j, blocked: R, noVideoRender: M = !1, pulseSpeakingIndicator: O = !1 } = e,
        L = _.Z.getVideoComponent(),
        k = (0, s.e7)([S.default], () => S.default.getId()),
        { user: D, streamId: U, speaking: F } = t,
        V = D.id === k,
        B = (0, C.ZP)(t),
        W = (0, s.e7)([x.Z], () => x.Z.isFocused()),
        G = (0, s.e7)([h.Z], () => h.Z.getWindowFocused(Z.KJ3.CHANNEL_CALL_POPOUT)),
        H = (0, s.e7)([_.Z], () => null != D.id && _.Z.isLocalVideoDisabled(D.id, (0, m.Z)(t.type)), [D.id, t.type]),
        z = (0, s.e7)([I.ZP], () => I.ZP.isGuestOrLurker(n.guild_id, D.id)),
        Y = E.ZP.getName(n.getGuildId(), n.id, D) + (z ? ' '.concat(T.intl.string(T.t['pFO/Pj'])) : ''),
        J = F && (G || W),
        q = o < 124 ? N : A,
        { avatarSrc: X, avatarDecorationSrc: K } = (0, g.Z)({
            user: D,
            guildId: n.guild_id,
            size: q,
            animateOnHover: !J
        }),
        Q = (0, s.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id));
    return (l.useEffect(() => {
        n.isGuildStageVoice() && !B && (null == Q ? void 0 : Q.id) === D.id && c.Z.selectParticipant(n.id, null);
    }, [B]),
    a && !H && !M && B && !w && null != L && _.Z.supports(y.AN.VIDEO))
        ? (0, i.jsx)(
              p.Z,
              {
                  onResize: j,
                  wrapperClassName: b.videoWrapper,
                  className: b.content,
                  mirror: V,
                  streamId: U,
                  videoComponent: L,
                  fit: P,
                  paused: v,
                  videoSpinnerContext: D.id === k ? u.m.SELF_VIDEO : u.m.REMOTE_VIDEO,
                  userId: D.id
              },
              U
          )
        : (0, i.jsx)('div', {
              className: r()(b.content, { [b.blockedAvatar]: R }),
              children: (0, i.jsx)(f.Z, {
                  'aria-label': Y,
                  src: X,
                  avatarDecoration: K,
                  backgroundSrc: D.getAvatarURL(n.guild_id, 80),
                  size: q,
                  pulseSpeakingIndicator: O,
                  speaking: F,
                  userId: D.id
              })
          });
}
