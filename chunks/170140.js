"use strict";
n.r(t), n.d(t, {
  useMediaPostEmbedData: function() {
    return p
  }
});
var s = n("470079"),
  l = n("399606"),
  a = n("430198"),
  i = n("754688"),
  r = n("314897"),
  o = n("592125"),
  u = n("271383"),
  d = n("430824"),
  c = n("914010"),
  f = n("594174"),
  E = n("158222"),
  _ = n("312146"),
  m = n("410473"),
  T = n("874748"),
  I = n("981631");

function p(e, t) {
  let n = (0, _.useEligibleForGuildMediaChannelPostPreviewEmbed)(),
    p = (0, T.getMediaPostEmbedChannelPath)(e),
    h = (0, l.useStateFromStores)([u.default, r.default], () => {
      let e = r.default.getId();
      return u.default.isMember(null == p ? void 0 : p.guildId, e)
    }, [p]),
    N = (0, l.useStateFromStores)([a.default], () => null != p && (null == p ? void 0 : p.channelId) != null && a.default.isChannelGated(p.guildId, p.channelId), [p]),
    S = t.hasFlag(I.MessageFlags.IS_CROSSPOST),
    {
      rawMediaPostEmbedData: C,
      guild: A,
      parentChannel: g,
      user: M,
      selectedGuildId: R,
      canAccess: v
    } = (0, l.useStateFromStoresObject)([m.default, d.default, o.default, f.default, c.default], () => {
      var e;
      let t = null === (e = m.default.getMediaPostEmbed(null == p ? void 0 : p.threadId)) || void 0 === e ? void 0 : e.media,
        n = d.default.getGuild(null == p ? void 0 : p.guildId),
        s = o.default.getChannel(null == p ? void 0 : p.channelId),
        l = f.default.getUser(null == t ? void 0 : t.author_id),
        a = c.default.getGuildId(),
        r = null != s && (0, i.canViewChannel)(s);
      return {
        rawMediaPostEmbedData: t,
        guild: n,
        parentChannel: s,
        user: l,
        selectedGuildId: a,
        canAccess: r
      }
    }, [p]),
    O = s.useMemo(() => {
      let e = (0, T.getMediaPostEmbedCommonData)({
        mediaPostEmbedData: C,
        guild: A,
        parentChannel: g,
        user: M,
        selectedGuildId: R,
        canAccess: v
      });
      return null == e ? null : {
        ...e,
        user: M
      }
    }, [C, A, g, M, R, v]);
  return s.useEffect(() => {
    if ((null == p ? void 0 : p.threadId) != null) {
      let e = m.default.getEmbedFetchState(p.threadId);
      !0 === n && e === m.FetchState.NOT_FETCHED && (!h || !1 !== N) && (h || !S) && (0, E.fetchMediaPostEmbed)(null == p ? void 0 : p.threadId)
    }
  }, [p, n, h, N, S]), O
}