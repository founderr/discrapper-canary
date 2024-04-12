"use strict";
n.r(t), n.d(t, {
  useMediaPostEmbedData: function() {
    return p
  }
});
var s = n("470079"),
  a = n("399606"),
  l = n("430198"),
  i = n("754688"),
  r = n("314897"),
  o = n("592125"),
  u = n("271383"),
  d = n("430824"),
  c = n("914010"),
  E = n("594174"),
  f = n("158222"),
  _ = n("312146"),
  T = n("410473"),
  I = n("874748"),
  m = n("981631");

function p(e, t) {
  let n = (0, _.useEligibleForGuildMediaChannelPostPreviewEmbed)(),
    p = (0, I.getMediaPostEmbedChannelPath)(e),
    N = (0, a.useStateFromStores)([u.default, r.default], () => {
      let e = r.default.getId();
      return u.default.isMember(null == p ? void 0 : p.guildId, e)
    }, [p]),
    S = (0, a.useStateFromStores)([l.default], () => null != p && (null == p ? void 0 : p.channelId) != null && l.default.isChannelGated(p.guildId, p.channelId), [p]),
    C = t.hasFlag(m.MessageFlags.IS_CROSSPOST),
    {
      rawMediaPostEmbedData: A,
      guild: h,
      parentChannel: g,
      user: M,
      selectedGuildId: O,
      canAccess: R
    } = (0, a.useStateFromStoresObject)([T.default, d.default, o.default, E.default, c.default], () => {
      var e;
      let t = null === (e = T.default.getMediaPostEmbed(null == p ? void 0 : p.threadId)) || void 0 === e ? void 0 : e.media,
        n = d.default.getGuild(null == p ? void 0 : p.guildId),
        s = o.default.getChannel(null == p ? void 0 : p.channelId),
        a = E.default.getUser(null == t ? void 0 : t.author_id),
        l = c.default.getGuildId(),
        r = null != s && (0, i.canViewChannel)(s);
      return {
        rawMediaPostEmbedData: t,
        guild: n,
        parentChannel: s,
        user: a,
        selectedGuildId: l,
        canAccess: r
      }
    }, [p]),
    v = s.useMemo(() => {
      let e = (0, I.getMediaPostEmbedCommonData)({
        mediaPostEmbedData: A,
        guild: h,
        parentChannel: g,
        user: M,
        selectedGuildId: O,
        canAccess: R
      });
      return null == e ? null : {
        ...e,
        user: M
      }
    }, [A, h, g, M, O, R]);
  return s.useEffect(() => {
    if ((null == p ? void 0 : p.threadId) != null) {
      let e = T.default.getEmbedFetchState(p.threadId);
      !0 === n && e === T.FetchState.NOT_FETCHED && (!N || !1 !== S) && (N || !C) && (0, f.fetchMediaPostEmbed)(null == p ? void 0 : p.threadId)
    }
  }, [p, n, N, S, C]), v
}