"use strict";
n.r(t), n.d(t, {
  GuildBrowseChannelsRow: function() {
    return L
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("399606"),
  i = n("704215"),
  r = n("692547"),
  o = n("481060"),
  u = n("239091"),
  d = n("605236"),
  c = n("45966"),
  f = n("31445"),
  h = n("22082"),
  m = n("703656"),
  C = n("306680"),
  p = n("648414"),
  g = n("709054"),
  E = n("540126"),
  S = n("434479"),
  _ = n("981631"),
  I = n("176505"),
  N = n("490897"),
  T = n("689938"),
  A = n("658609");

function L(e) {
  let {
    guild: t,
    selected: L
  } = e, v = (0, f.default)(t), x = (0, d.useIsDismissibleContentDismissed)(i.DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX), R = (0, s.useStateFromStoresArray)([h.default], () => Array.from(h.default.getNewChannelIds(t.id)).filter(e => h.default.shouldIndicateNewChannel(t.id, e))), M = (0, s.useStateFromStores)([C.default], () => C.default.hasUnread(t.id, N.ReadStateTypes.GUILD_ONBOARDING_QUESTION)), y = R.length > E.MAX_NEW_CHANNELS_TO_SHOW, O = (0, s.useStateFromStores)([c.default, C.default], () => {
    let e = c.default.lastFetchedAt(t.id),
      n = C.default.lastMessageId(t.id, N.ReadStateTypes.GUILD_ONBOARDING_QUESTION);
    if (null == n) return !1;
    let l = g.default.extractTimestamp(n);
    return null != e && e > l
  }), b = a.useCallback(() => {
    (0, m.transitionTo)(_.Routes.CHANNEL(t.id, v ? I.StaticChannelRoute.CUSTOMIZE_COMMUNITY : I.StaticChannelRoute.CHANNEL_BROWSER))
  }, [t.id, v]), D = a.useCallback(e => {
    (0, u.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("8926").then(n.bind(n, "156673"));
      return n => (0, l.jsx)(e, {
        ...n,
        guild: t
      })
    })
  }, [t]), j = null;
  return (!x || M || y) && !L && !O && (j = (0, l.jsx)(o.TextBadge, {
    color: r.default.unsafe_rawColors.BRAND_260.css,
    text: T.default.Messages.NEW,
    className: A.newChannel
  })), (0, l.jsx)(S.BasicChannelRow, {
    id: "channels-".concat(t.id),
    renderIcon: e => (0, l.jsx)(p.default, {
      className: e
    }),
    text: v ? T.default.Messages.CHANNELS_AND_ROLES : T.default.Messages.CHANNEL_BROWSER_TITLE,
    selected: L,
    onClick: b,
    onContextMenu: D,
    trailing: j
  })
}