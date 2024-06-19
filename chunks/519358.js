n.d(t, {
  m: function() {
    return x
  }
});
var l = n(735250),
  i = n(470079),
  s = n(399606),
  r = n(704215),
  a = n(692547),
  o = n(481060),
  u = n(239091),
  c = n(605236),
  d = n(45966),
  h = n(31445),
  g = n(22082),
  p = n(703656),
  m = n(306680),
  C = n(709054),
  E = n(540126),
  f = n(434479),
  _ = n(981631),
  I = n(176505),
  N = n(490897),
  Z = n(689938),
  S = n(219644);

function x(e) {
  let {
    guild: t,
    selected: x
  } = e, T = (0, h.Z)(t), L = (0, c.wE)(r.z.CHANNEL_BROWSER_NEW_BADGE_NUX), v = (0, s.Wu)([g.Z], () => Array.from(g.Z.getNewChannelIds(t.id)).filter(e => g.Z.shouldIndicateNewChannel(t.id, e))), A = (0, s.e7)([m.ZP], () => m.ZP.hasUnread(t.id, N.W.GUILD_ONBOARDING_QUESTION)), M = v.length > E.Cb, R = (0, s.e7)([d.Z, m.ZP], () => {
    let e = d.Z.lastFetchedAt(t.id),
      n = m.ZP.lastMessageId(t.id, N.W.GUILD_ONBOARDING_QUESTION);
    if (null == n) return !1;
    let l = C.default.extractTimestamp(n);
    return null != e && e > l
  }), O = i.useCallback(() => {
    (0, p.uL)(_.Z5c.CHANNEL(t.id, T ? I.oC.CUSTOMIZE_COMMUNITY : I.oC.CHANNEL_BROWSER))
  }, [t.id, T]), P = i.useCallback(e => {
    (0, u.jW)(e, async () => {
      let {
        default: e
      } = await n.e("8926").then(n.bind(n, 156673));
      return n => (0, l.jsx)(e, {
        ...n,
        guild: t
      })
    })
  }, [t]), j = null;
  return (!L || A || M) && !x && !R && (j = (0, l.jsx)(o.TextBadge, {
    color: a.Z.unsafe_rawColors.BRAND_260.css,
    text: Z.Z.Messages.NEW,
    className: S.newChannel
  })), (0, l.jsx)(f.m, {
    id: "channels-".concat(t.id),
    renderIcon: e => (0, l.jsx)(o.ChannelListMagnifyingGlassIcon, {
      size: "md",
      color: "currentColor",
      className: e
    }),
    text: T ? Z.Z.Messages.CHANNELS_AND_ROLES : Z.Z.Messages.CHANNEL_BROWSER_TITLE,
    selected: x,
    onClick: O,
    onContextMenu: P,
    trailing: j
  })
}