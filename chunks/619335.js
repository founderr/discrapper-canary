"use strict";
l.r(t), l.d(t, {
  default: function() {
    return j
  }
});
var s = l("274870"),
  n = l("116320"),
  a = l("617559"),
  r = l("213523"),
  i = l("593195"),
  u = l("361777"),
  o = l("497757"),
  c = l("774223"),
  d = l("991497"),
  f = l("393621"),
  C = l("905999"),
  h = l("660074"),
  N = l("990745"),
  p = l("190986"),
  L = l("721618"),
  T = l("733160"),
  I = l("990864"),
  v = l("274652"),
  m = l("922744"),
  E = l("155207"),
  H = l("745183"),
  x = l("368121"),
  A = l("944633"),
  M = l("228427"),
  R = l("959097"),
  D = l("656038"),
  _ = l("49111");

function j(e, t) {
  switch (e.type) {
    case _.ChannelTypes.DM:
      return n.default;
    case _.ChannelTypes.GROUP_DM:
      let l = (0, s.getIsBroadcastingGDM)(e.id);
      return l ? c.default : E.default;
    case _.ChannelTypes.GUILD_ANNOUNCEMENT:
      if (e.isNSFW()) return v.default;
      if ((0, D.default)(e)) return I.default;
      else return T.default;
    case _.ChannelTypes.GUILD_TEXT:
      if (e.id === (null == t ? void 0 : t.rulesChannelId)) return r.default;
      if (e.isNSFW()) return o.default;
      else if ((0, D.default)(e)) return u.default;
      else return i.default;
    case _.ChannelTypes.GUILD_FORUM:
      let j = e.isMediaChannel();
      if (e.isNSFW()) return j ? L.default : C.default;
      if ((0, D.default)(e)) return j ? p.default : f.default;
      else return j ? N.default : d.default;
    case _.ChannelTypes.GUILD_MEDIA:
      if (e.isNSFW()) return L.default;
      if ((0, D.default)(e)) return p.default;
      else return N.default;
    case _.ChannelTypes.GUILD_STAGE_VOICE:
      return M.default;
    case _.ChannelTypes.GUILD_VOICE:
      if ((0, D.default)(e)) return A.default;
      return x.default;
    case _.ChannelTypes.ANNOUNCEMENT_THREAD:
    case _.ChannelTypes.PUBLIC_THREAD:
      if (e.isNSFW()) return m.default;
      if (e.isForumPost()) return h.default;
      else return R.default;
    case _.ChannelTypes.PRIVATE_THREAD:
      if (e.isNSFW()) return m.default;
      return H.default;
    case _.ChannelTypes.GUILD_DIRECTORY:
      return a.default;
    default:
      return null
  }
}