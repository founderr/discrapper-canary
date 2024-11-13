n.d(t, {
    T: function () {
        return w;
    },
    Z: function () {
        return j;
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
    Z = n(44136),
    C = n(981631),
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
function j(e) {
    let { participant: t, channel: n, inCall: a, width: o, paused: v, selected: w, fit: j, onVideoResize: P, blocked: R, noVideoRender: M = !1, pulseSpeakingIndicator: O = !1 } = e,
        L = _.Z.getVideoComponent(),
        k = (0, s.e7)([S.default], () => S.default.getId()),
        { user: D, streamId: U, speaking: V } = t,
        F = D.id === k,
        W = (0, Z.ZP)(t),
        G = (0, s.e7)([x.Z], () => x.Z.isFocused()),
        B = (0, s.e7)([h.Z], () => h.Z.getWindowFocused(C.KJ3.CHANNEL_CALL_POPOUT)),
        z = (0, s.e7)([_.Z], () => null != D.id && _.Z.isLocalVideoDisabled(D.id, (0, m.Z)(t.type)), [D.id, t.type]),
        H = (0, s.e7)([I.ZP], () => I.ZP.isGuestOrLurker(n.guild_id, D.id)),
        Y = E.ZP.getName(n.getGuildId(), n.id, D) + (H ? ' '.concat(T.intl.string(T.t['pFO/Pj'])) : ''),
        J = V && (B || G),
        q = o < 124 ? N : A,
        { avatarSrc: X, avatarDecorationSrc: K } = (0, g.Z)({
            user: D,
            guildId: n.guild_id,
            size: q,
            animateOnHover: !J
        }),
        Q = (0, s.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id));
    return (l.useEffect(() => {
        n.isGuildStageVoice() && !W && (null == Q ? void 0 : Q.id) === D.id && c.Z.selectParticipant(n.id, null);
    }, [W]),
    a && !z && !M && W && !w && null != L && _.Z.supports(y.AN.VIDEO))
        ? (0, i.jsx)(
              p.Z,
              {
                  onResize: P,
                  wrapperClassName: b.videoWrapper,
                  className: b.content,
                  mirror: F,
                  streamId: U,
                  videoComponent: L,
                  fit: j,
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
                  speaking: V,
                  userId: D.id
              })
          });
}
