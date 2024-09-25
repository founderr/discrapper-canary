t.d(n, {
    Z: function () {
        return T;
    }
}),
    t(47120),
    t(733860);
var i = t(718528),
    o = t(931261),
    l = t(355298),
    E = t(333984),
    r = t(905423),
    a = t(695346),
    u = t(283595),
    d = t(923834),
    s = t(55589),
    _ = t(823379),
    c = t(475468),
    A = t(981631),
    C = t(176505);
let S = () => {
    let e = l.Z.getMessageRequestsCount() > 0 || E.Z.getSpamChannelsCount() > 0;
    return [A.Z5c.FRIENDS, u.Z.hasLibraryApplication() && !a.bm.getSetting() ? A.Z5c.APPLICATION_LIBRARY : null, A.Z5c.APPLICATION_STORE, e ? A.Z5c.MESSAGE_REQUESTS : null, A.Z5c.COLLECTIBLES_SHOP, a.Ex.getSetting() ? A.Z5c.FAMILY_CENTER : null].filter(_.lm);
};
function I(e, n) {
    (0, c.K)(e, n);
}
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        n = r.Z.getState().guildId;
    null == n
        ? !(function (e) {
              var n, t, i;
              let { channelId: o, path: l, basePath: E } = r.Z.getState(),
                  a = s.Z.getPrivateChannelIds(),
                  u = __OVERLAY__ ? a : [...S(), ...a];
              let _ = (null == o ? ((n = null != l ? l : E), S().findIndex((e) => n.startsWith(e))) : null != o ? u.indexOf(o) : 0) + e;
              _ >= u.length ? (_ = 0) : _ < 0 && (_ = u.length - 1);
              let C = u[_];
              if (S().includes(C))
                  !(function (e) {
                      let n = d.Z.getCurrentRoute();
                      e === A.Z5c.APPLICATION_STORE && null != n ? (0, c.z)(n) : (0, c.z)(e);
                  })(C);
              else {
                  (t = A.ME), (i = C), (0, c.K)(t, i);
              }
          })(e)
        : !(function (e, n) {
              var t, l, E, a;
              let u = r.Z.getState().channelId,
                  d = (0, i.Z)(n, { withCurrentVoiceChannel: !0 }).map((e) => e.id);
              (0, o.s)(n) && d.unshift(C.oC.GUILD_HOME);
              let s = ((t = (null != u ? d.indexOf(u) : -1) + e), (l = d.length), t < 0 ? l - 1 : t >= l ? 0 : t);
              (E = n), (a = d[s]), (0, c.K)(E, a);
          })(e, n);
}
