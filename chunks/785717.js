"use strict";
n.r(t), n.d(t, {
  UserProfileAnalyticsProvider: function() {
    return l
  },
  useTrackUserProfileAction: function() {
    return u
  },
  useUserProfileAnalyticsContext: function() {
    return d
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("906732"),
  a = n("221292");
let o = r.createContext({}),
  l = e => {
    let {
      children: t,
      layout: n,
      userId: l,
      guildId: u,
      channelId: d,
      messageId: _,
      roleId: c,
      showGuildProfile: E = !0,
      shouldTrackViewOnMount: I = !0
    } = e, {
      analyticsLocations: T
    } = (0, s.default)(), f = r.useMemo(() => ({
      layout: n,
      userId: l,
      guildId: u,
      channelId: d,
      messageId: _,
      roleId: c,
      showGuildProfile: E
    }), [n, l, u, d, _, c, E]);
    return r.useEffect(() => {
      I && null != n && null != l && (0, a.trackUserProfileAction)({
        action: "VIEW",
        layout: n,
        userId: l,
        guildId: u,
        channelId: d,
        messageId: _,
        roleId: c,
        showGuildProfile: E,
        analyticsLocations: T
      })
    }, [I]), (0, i.jsx)(o.Provider, {
      value: f,
      children: t
    })
  },
  u = e => {
    let {
      analyticsLocations: t
    } = (0, s.default)();
    return r.useCallback(n => {
      let {
        layout: i,
        userId: r
      } = e;
      null != i && null != r && (0, a.trackUserProfileAction)({
        analyticsLocations: t,
        layout: i,
        userId: r,
        ...e,
        ...n
      })
    }, [e, t])
  },
  d = () => {
    let e = r.useContext(o);
    return {
      trackUserProfileAction: u(e),
      ...e
    }
  }