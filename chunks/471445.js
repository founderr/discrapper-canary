"use strict";
n.r(t), n.d(t, {
  getChannelIconComponent: function() {
    return Q
  },
  getChannelIconTooltipText: function() {
    return Z
  },
  getSimpleChannelIconComponent: function() {
    return X
  }
});
var i = n("281956"),
  r = n("271383"),
  s = n("430824"),
  a = n("607744"),
  o = n("594174"),
  l = n("482500"),
  u = n("36082"),
  d = n("119828"),
  _ = n("747380"),
  c = n("648414"),
  E = n("315970"),
  I = n("308540"),
  T = n("814550"),
  f = n("93879"),
  S = n("535321"),
  h = n("277942"),
  A = n("974029"),
  m = n("481479"),
  N = n("160696"),
  p = n("832440"),
  O = n("634648"),
  C = n("630641"),
  R = n("908434"),
  g = n("74846"),
  L = n("789536"),
  v = n("316949"),
  D = n("133429"),
  M = n("702066"),
  y = n("763300"),
  P = n("883877"),
  U = n("724215"),
  b = n("761529"),
  G = n("308570"),
  w = n("632184"),
  k = n("414896"),
  B = n("398856"),
  x = n("170039"),
  V = n("178695"),
  F = n("548420"),
  H = n("761374"),
  Y = n("435443"),
  j = n("447003"),
  W = n("176505"),
  K = n("981631"),
  z = n("689938");

function Z(e, t, n, i) {
  if (null == e) return null;
  if (e.id === (null == t ? void 0 : t.rulesChannelId)) return z.default.Messages.CHANNEL_TOOLTIP_RULES;
  switch (e.type) {
    case K.ChannelTypes.GUILD_TEXT:
      if (i) return z.default.Messages.CHANNEL_TOOLTIP_TEXT_ACTIVE_THREADS;
      if (e.isNSFW()) return z.default.Messages.CHANNEL_TOOLTIP_TEXT_NSFW;
      if ((0, j.default)(e)) return z.default.Messages.CHANNEL_TOOLTIP_TEXT_LIMITED;
      return z.default.Messages.CHANNEL_TOOLTIP_TEXT;
    case K.ChannelTypes.GUILD_FORUM:
      let r = e.isMediaChannel();
      if (e.isNSFW()) return r ? z.default.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW : z.default.Messages.CHANNEL_TOOLTIP_FORUM_NSFW;
      if ((0, j.default)(e)) return r ? z.default.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED : z.default.Messages.CHANNEL_TOOLTIP_FORUM_LIMITED;
      return r ? z.default.Messages.MEDIA_CHANNEL : z.default.Messages.FORUM;
    case K.ChannelTypes.GUILD_MEDIA:
      if (e.isNSFW()) return z.default.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW;
      if ((0, j.default)(e)) return z.default.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED;
      return z.default.Messages.MEDIA_CHANNEL;
    case K.ChannelTypes.GUILD_STAGE_VOICE:
      if (n) return z.default.Messages.CHANNEL_TOOLTIP_STAGE_LOCKED;
      if ((0, j.default)(e)) return z.default.Messages.CHANNEL_TOOLTIP_STAGE_LIMITED;
      return z.default.Messages.CHANNEL_TOOLTIP_STAGE;
    case K.ChannelTypes.GUILD_VOICE:
      if (n) return z.default.Messages.CHANNEL_TOOLTIP_VOICE_LOCKED;
      if ((0, j.default)(e)) return z.default.Messages.CHANNEL_TOOLTIP_VOICE_LIMITED;
      return z.default.Messages.CHANNEL_TOOLTIP_VOICE;
    case K.ChannelTypes.GUILD_ANNOUNCEMENT:
      if (e.isNSFW()) return z.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_NSFW;
      if ((0, j.default)(e)) return z.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_LIMITED;
      return z.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS;
    case K.ChannelTypes.GUILD_STORE:
      return z.default.Messages.CHANNEL_TOOLTIP_STORE;
    case K.ChannelTypes.DM:
      return z.default.Messages.DM;
    case K.ChannelTypes.GROUP_DM:
      return z.default.Messages.GROUP_DM;
    case K.ChannelTypes.GUILD_DIRECTORY:
      return z.default.Messages.CHANNEL_TOOLTIP_DIRECTORY;
    case K.ChannelTypes.PUBLIC_THREAD:
      return z.default.Messages.THREAD;
    case K.ChannelTypes.PRIVATE_THREAD:
      return z.default.Messages.PRIVATE_THREAD;
    default:
      return null
  }
}

function Q(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    {
      locked: z = !1,
      video: Z = !1,
      stream: Q = !1,
      hasActiveThreads: X = !1,
      textFocused: q = !1
    } = n;
  if (null == e) return null;
  null == t && (t = s.default.getGuild(e.getGuildId()));
  let J = (0, i.shouldShowMembershipVerificationGate)(null == t ? void 0 : t.id, [s.default, a.default, o.default, r.default]);
  if ((null == e ? void 0 : e.id) === (null == t ? void 0 : t.rulesChannelId)) return T.default;
  switch (e.type) {
    case K.ChannelTypes.GUILD_ANNOUNCEMENT:
      if (X) {
        if (e.isNSFW()) return y.default;
        if ((0, j.default)(e)) return U.default;
        else return l.default
      }
      if (e.isNSFW()) return M.default;
      if ((0, j.default)(e)) return D.default;
      return v.default;
    case K.ChannelTypes.GUILD_STORE:
      return F.default;
    case K.ChannelTypes.DM:
    case K.ChannelTypes.GROUP_DM:
      return u.default;
    case K.ChannelTypes.PRIVATE_THREAD:
      return b.default;
    case K.ChannelTypes.ANNOUNCEMENT_THREAD:
    case K.ChannelTypes.PUBLIC_THREAD:
      if (e.isNSFW()) return P.default;
      if (e.isForumPost()) return O.default;
      else return Y.default;
    case K.ChannelTypes.GUILD_TEXT:
      if (X) {
        if (e.isNSFW()) return P.default;
        if ((0, j.default)(e)) return b.default;
        else return Y.default
      }
      if (e.isNSFW()) return h.default;
      if ((0, j.default)(e)) return S.default;
      return f.default;
    case K.ChannelTypes.GUILD_FORUM:
      let $ = e.isMediaChannel();
      if (e.isNSFW()) return $ ? L.default : p.default;
      if ((0, j.default)(e)) return $ ? g.default : N.default;
      else return $ ? R.default : m.default;
    case K.ChannelTypes.GUILD_MEDIA:
      if (e.isNSFW()) return L.default;
      if ((0, j.default)(e)) return g.default;
      else return R.default;
    case K.ChannelTypes.GUILD_STAGE_VOICE:
      if (J) return (0, j.default)(e) ? C.default : V.default;
      if (z) return C.default;
      if ((0, j.default)(e)) return V.default;
      else return x.default;
    case K.ChannelTypes.GUILD_VOICE:
      if (q) return A.default;
      if (e.isNSFW()) return B.default;
      if (Q) return H.default;
      if (J) {
        if ((0, j.default)(e)) return C.default;
        return Z ? _.default : k.default
      }
      if (z) return C.default;
      if ((0, j.default)(e)) return Z ? _.default : k.default;
      else return Z ? d.default : w.default;
    case K.ChannelTypes.GUILD_DIRECTORY:
      return I.default;
    case K.ChannelTypes.GUILD_CATEGORY:
      return E.default;
    default:
      if (W.StaticChannelIds.has(e.id)) {
        if (e.id === W.StaticChannelId.GUILD_HOME || e.id === W.StaticChannelId.SERVER_GUIDE) return G.default;
        if (e.id === W.StaticChannelId.CHANNEL_BROWSER || e.id === W.StaticChannelId.CUSTOMIZE_COMMUNITY) return c.default
      }
      return null
  }
}

function X(e) {
  switch (e) {
    case K.ChannelTypes.GUILD_ANNOUNCEMENT:
      return v.default;
    case K.ChannelTypes.GUILD_STORE:
      return F.default;
    case K.ChannelTypes.DM:
    case K.ChannelTypes.GROUP_DM:
      return u.default;
    case K.ChannelTypes.PRIVATE_THREAD:
      return b.default;
    case K.ChannelTypes.ANNOUNCEMENT_THREAD:
    case K.ChannelTypes.PUBLIC_THREAD:
      return Y.default;
    case K.ChannelTypes.GUILD_TEXT:
    case K.ChannelTypes.GUILD_FORUM:
    case K.ChannelTypes.GUILD_MEDIA:
      return f.default;
    case K.ChannelTypes.GUILD_STAGE_VOICE:
      return x.default;
    case K.ChannelTypes.GUILD_VOICE:
      return w.default;
    case K.ChannelTypes.GUILD_CATEGORY:
      return E.default;
    default:
      return null
  }
}