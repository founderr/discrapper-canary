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
  p = n("74846"),
  m = n("789536"),
  I = n("316949"),
  N = n("133429"),
  g = n("702066"),
  E = n("829134"),
  H = n("158010"),
  D = n("663949"),
  x = n("632184"),
  S = n("414896"),
  L = n("170039"),
  T = n("934458"),
  w = n("447003"),
  A = n("981631");

function R(e, t) {
  switch (e.type) {
    case A.ChannelTypes.DM:
      return r.default;
    case A.ChannelTypes.GROUP_DM:
      return (0, l.getIsBroadcastingGDM)(e.id) ? c.default : H.default;
    case A.ChannelTypes.GUILD_ANNOUNCEMENT:
      if (e.isNSFW()) return g.default;
      if ((0, w.default)(e)) return N.default;
      else return I.default;
    case A.ChannelTypes.GUILD_TEXT:
      if (e.id === (null == t ? void 0 : t.rulesChannelId)) return a.default;
      if (e.isNSFW()) return o.default;
      else if ((0, w.default)(e)) return u.default;
      else return i.default;
    case A.ChannelTypes.GUILD_FORUM:
      let n = e.isMediaChannel();
      if (e.isNSFW()) return n ? m.default : h.default;
      if ((0, w.default)(e)) return n ? p.default : f.default;
      else return n ? v.default : d.default;
    case A.ChannelTypes.GUILD_MEDIA:
      if (e.isNSFW()) return m.default;
      if ((0, w.default)(e)) return p.default;
      else return v.default;
    case A.ChannelTypes.GUILD_STAGE_VOICE:
      return L.default;
    case A.ChannelTypes.GUILD_VOICE:
      if ((0, w.default)(e)) return S.default;
      return x.default;
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