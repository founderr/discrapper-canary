"use strict";
n.r(t), n.d(t, {
  useMediaPostEmbedData: function() {
    return h
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
  f = n("594174"),
  E = n("158222"),
  _ = n("312146"),
  m = n("410473"),
  T = n("874748"),
  I = n("981631");

function h(e, t) {
  let n = (0, _.useEligibleForGuildMediaChannelPostPreviewEmbed)(),
    h = (0, T.getMediaPostEmbedChannelPath)(e),
    p = (0, a.useStateFromStores)([u.default, r.default], () => {
      let e = r.default.getId();
      return u.default.isMember(null == h ? void 0 : h.guildId, e)
    }, [h]),
    N = (0, a.useStateFromStores)([l.default], () => null != h && (null == h ? void 0 : h.channelId) != null && l.default.isChannelGated(h.guildId, h.channelId), [h]),
    S = t.hasFlag(I.MessageFlags.IS_CROSSPOST),
    {
      rawMediaPostEmbedData: C,
      guild: g,
      parentChannel: A,
      user: M,
      selectedGuildId: R,
      canAccess: v
    } = (0, a.useStateFromStoresObject)([m.default, d.default, o.default, f.default, c.default], () => {
      var e;
      let t = null === (e = m.default.getMediaPostEmbed(null == h ? void 0 : h.threadId)) || void 0 === e ? void 0 : e.media,
        n = d.default.getGuild(null == h ? void 0 : h.guildId),
        s = o.default.getChannel(null == h ? void 0 : h.channelId),
        a = f.default.getUser(null == t ? void 0 : t.author_id),
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
    }, [h]),
    O = s.useMemo(() => {
      let e = (0, T.getMediaPostEmbedCommonData)({
        mediaPostEmbedData: C,
        guild: g,
        parentChannel: A,
        user: M,
        selectedGuildId: R,
        canAccess: v
      });
      return null == e ? null : {
        ...e,
        user: M
      }
    }, [C, g, A, M, R, v]);
  return s.useEffect(() => {
    if ((null == h ? void 0 : h.threadId) != null) {
      let e = m.default.getEmbedFetchState(h.threadId);
      !0 === n && e === m.FetchState.NOT_FETCHED && (!p || !1 !== N) && (p || !S) && (0, E.fetchMediaPostEmbed)(null == h ? void 0 : h.threadId)
    }
  }, [h, n, p, N, S]), O
}