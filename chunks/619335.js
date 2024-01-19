"use strict";
l.r(t), l.d(t, {
  default: function() {
    return M
  }
});
var n = l("274870"),
  s = l("116320"),
  a = l("617559"),
  r = l("213523"),
  i = l("593195"),
  u = l("361777"),
  o = l("497757"),
  d = l("774223"),
  c = l("991497"),
  f = l("393621"),
  m = l("905999"),
  S = l("660074"),
  h = l("990745"),
  C = l("190986"),
  E = l("721618"),
  p = l("733160"),
  N = l("990864"),
  g = l("274652"),
  _ = l("922744"),
  x = l("155207"),
  I = l("745183"),
  v = l("368121"),
  A = l("944633"),
  R = l("228427"),
  T = l("959097"),
  L = l("656038"),
  j = l("49111");

function M(e, t) {
  switch (e.type) {
    case j.ChannelTypes.DM:
      return s.default;
    case j.ChannelTypes.GROUP_DM:
      let l = (0, n.getIsBroadcastingGDM)(e.id);
      return l ? d.default : x.default;
    case j.ChannelTypes.GUILD_ANNOUNCEMENT:
      if (e.isNSFW()) return g.default;
      if ((0, L.default)(e)) return N.default;
      else return p.default;
    case j.ChannelTypes.GUILD_TEXT:
      if (e.id === (null == t ? void 0 : t.rulesChannelId)) return r.default;
      if (e.isNSFW()) return o.default;
      else if ((0, L.default)(e)) return u.default;
      else return i.default;
    case j.ChannelTypes.GUILD_FORUM:
      let M = e.isMediaChannel();
      if (e.isNSFW()) return M ? E.default : m.default;
      if ((0, L.default)(e)) return M ? C.default : f.default;
      else return M ? h.default : c.default;
    case j.ChannelTypes.GUILD_MEDIA:
      if (e.isNSFW()) return E.default;
      if ((0, L.default)(e)) return C.default;
      else return h.default;
    case j.ChannelTypes.GUILD_STAGE_VOICE:
      return R.default;
    case j.ChannelTypes.GUILD_VOICE:
      if ((0, L.default)(e)) return A.default;
      return v.default;
    case j.ChannelTypes.ANNOUNCEMENT_THREAD:
    case j.ChannelTypes.PUBLIC_THREAD:
      if (e.isNSFW()) return _.default;
      if (e.isForumPost()) return S.default;
      else return T.default;
    case j.ChannelTypes.PRIVATE_THREAD:
      if (e.isNSFW()) return _.default;
      return I.default;
    case j.ChannelTypes.GUILD_DIRECTORY:
      return a.default;
    default:
      return null
  }
}