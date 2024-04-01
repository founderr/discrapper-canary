"use strict";
n.r(t), n.d(t, {
  useMediaPostEmbedData: function() {
    return N
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
  E = n("594174"),
  f = n("158222"),
  _ = n("312146"),
  T = n("410473"),
  I = n("874748"),
  m = n("981631");

function N(e, t) {
  let n = (0, _.useEligibleForGuildMediaChannelPostPreviewEmbed)(),
    N = (0, I.getMediaPostEmbedChannelPath)(e),
    p = (0, l.useStateFromStores)([u.default, r.default], () => {
      let e = r.default.getId();
      return u.default.isMember(null == N ? void 0 : N.guildId, e)
    }, [N]),
    S = (0, l.useStateFromStores)([a.default], () => null != N && (null == N ? void 0 : N.channelId) != null && a.default.isChannelGated(N.guildId, N.channelId), [N]),
    C = t.hasFlag(m.MessageFlags.IS_CROSSPOST),
    {
      rawMediaPostEmbedData: A,
      guild: h,
      parentChannel: g,
      user: M,
      selectedGuildId: O,
      canAccess: R
    } = (0, l.useStateFromStoresObject)([T.default, d.default, o.default, E.default, c.default], () => {
      var e;
      let t = null === (e = T.default.getMediaPostEmbed(null == N ? void 0 : N.threadId)) || void 0 === e ? void 0 : e.media,
        n = d.default.getGuild(null == N ? void 0 : N.guildId),
        s = o.default.getChannel(null == N ? void 0 : N.channelId),
        l = E.default.getUser(null == t ? void 0 : t.author_id),
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
    }, [N]),
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
    if ((null == N ? void 0 : N.threadId) != null) {
      let e = T.default.getEmbedFetchState(N.threadId);
      !0 === n && e === T.FetchState.NOT_FETCHED && (!p || !1 !== S) && (p || !C) && (0, f.fetchMediaPostEmbed)(null == N ? void 0 : N.threadId)
    }
  }, [N, n, p, S, C]), v
}