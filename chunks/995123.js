"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var l = n("762914"),
  r = n("36082"),
  s = n("308540"),
  a = n("814550"),
  i = n("93879"),
  u = n("535321"),
  o = n("277942"),
  c = n("436088"),
  d = n("481479"),
  f = n("160696"),
  h = n("832440"),
  C = n("634648"),
  v = n("908434"),
  m = n("74846"),
  p = n("789536"),
  g = n("316949"),
  I = n("133429"),
  N = n("702066"),
  E = n("829134"),
  S = n("158010"),
  D = n("663949"),
  H = n("632184"),
  x = n("414896"),
  L = n("170039"),
  T = n("934458"),
  w = n("447003"),
  A = n("981631");

function R(e, t) {
  switch (e.type) {
    case A.ChannelTypes.DM:
      return r.default;
    case A.ChannelTypes.GROUP_DM:
      return (0, l.getIsBroadcastingGDM)(e.id) ? c.default : S.default;
    case A.ChannelTypes.GUILD_ANNOUNCEMENT:
      if (e.isNSFW()) return N.default;
      if ((0, w.default)(e)) return I.default;
      else return g.default;
    case A.ChannelTypes.GUILD_TEXT:
      if (e.id === (null == t ? void 0 : t.rulesChannelId)) return a.default;
      if (e.isNSFW()) return o.default;
      else if ((0, w.default)(e)) return u.default;
      else return i.default;
    case A.ChannelTypes.GUILD_FORUM:
      let n = e.isMediaChannel();
      if (e.isNSFW()) return n ? p.default : h.default;
      if ((0, w.default)(e)) return n ? m.default : f.default;
      else return n ? v.default : d.default;
    case A.ChannelTypes.GUILD_MEDIA:
      if (e.isNSFW()) return p.default;
      if ((0, w.default)(e)) return m.default;
      else return v.default;
    case A.ChannelTypes.GUILD_STAGE_VOICE:
      return L.default;
    case A.ChannelTypes.GUILD_VOICE:
      if ((0, w.default)(e)) return x.default;
      return H.default;
    case A.ChannelTypes.ANNOUNCEMENT_THREAD:
    case A.ChannelTypes.PUBLIC_THREAD:
      if (e.isNSFW()) return E.default;
      if (e.isForumPost()) return C.default;
      else return T.default;
    case A.ChannelTypes.PRIVATE_THREAD:
      if (e.isNSFW()) return E.default;
      return D.default;
    case A.ChannelTypes.GUILD_DIRECTORY:
      return s.default;
    default:
      return null
  }
}