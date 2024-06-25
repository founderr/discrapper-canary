n.d(t, {
  J: function() {
    return h
  }
});
var s = n(470079),
  i = n(399606),
  l = n(430198),
  a = n(754688),
  r = n(314897),
  o = n(592125),
  c = n(271383),
  u = n(430824),
  d = n(914010),
  E = n(594174),
  _ = n(158222),
  I = n(312146),
  T = n(487554),
  m = n(874748),
  N = n(981631);

function h(e, t) {
  let n = (0, I.p$)(),
    h = (0, m.LR)(e),
    C = (0, i.e7)([c.ZP, r.default], () => {
      let e = r.default.getId();
      return c.ZP.isMember(null == h ? void 0 : h.guildId, e)
    }, [h]),
    S = (0, i.e7)([l.Z], () => null != h && (null == h ? void 0 : h.channelId) != null && l.Z.isChannelGated(h.guildId, h.channelId), [h]),
    A = t.hasFlag(N.iLy.IS_CROSSPOST),
    {
      rawMediaPostEmbedData: g,
      guild: p,
      parentChannel: f,
      user: R,
      selectedGuildId: O,
      canAccess: M
    } = (0, i.cj)([T.Z, u.Z, o.Z, E.default, d.Z], () => {
      var e;
      let t = null === (e = T.Z.getMediaPostEmbed(null == h ? void 0 : h.threadId)) || void 0 === e ? void 0 : e.media,
        n = u.Z.getGuild(null == h ? void 0 : h.guildId),
        s = o.Z.getChannel(null == h ? void 0 : h.channelId),
        i = E.default.getUser(null == t ? void 0 : t.author_id),
        l = d.Z.getGuildId(),
        r = null != s && (0, a.YO)(s);
      return {
        rawMediaPostEmbedData: t,
        guild: n,
        parentChannel: s,
        user: i,
        selectedGuildId: l,
        canAccess: r
      }
    }, [h]),
    x = s.useMemo(() => {
      let e = (0, m.ku)({
        mediaPostEmbedData: g,
        guild: p,
        parentChannel: f,
        user: R,
        selectedGuildId: O,
        canAccess: M
      });
      return null == e ? null : {
        ...e,
        user: R
      }
    }, [g, p, f, R, O, M]);
  return s.useEffect(() => {
    if ((null == h ? void 0 : h.threadId) != null) {
      let e = T.Z.getEmbedFetchState(h.threadId);
      !0 === n && e === T.M.NOT_FETCHED && (!C || !1 !== S) && (C || !A) && (0, _.xP)(null == h ? void 0 : h.threadId)
    }
  }, [h, n, C, S, A]), x
}