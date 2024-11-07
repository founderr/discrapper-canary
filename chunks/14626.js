t.d(n, {
    Z: function () {
        return A;
    }
}),
    t(47120),
    t(733860);
var l = t(718528),
    i = t(931261),
    o = t(355298),
    a = t(333984),
    u = t(905423),
    r = t(695346),
    d = t(283595),
    c = t(923834),
    s = t(55589),
    E = t(823379),
    C = t(475468),
    _ = t(981631),
    h = t(176505);
let S = () => {
    let e = o.Z.getMessageRequestsCount() > 0 || a.Z.getSpamChannelsCount() > 0;
    return [_.Z5c.FRIENDS, d.Z.hasLibraryApplication() && !r.bm.getSetting() ? _.Z5c.APPLICATION_LIBRARY : null, _.Z5c.APPLICATION_STORE, e ? _.Z5c.MESSAGE_REQUESTS : null, _.Z5c.COLLECTIBLES_SHOP, r.Ex.getSetting() ? _.Z5c.FAMILY_CENTER : null].filter(E.lm);
};
function I(e, n) {
    (0, C.K)(e, n);
}
function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        n = u.Z.getState().guildId;
    null == n
        ? !(function (e) {
              var n, t, l;
              let { channelId: i, path: o, basePath: a } = u.Z.getState(),
                  r = s.Z.getPrivateChannelIds(),
                  d = __OVERLAY__ ? r : [...S(), ...r];
              let E = (null == i ? ((n = null != o ? o : a), S().findIndex((e) => n.startsWith(e))) : null != i ? d.indexOf(i) : 0) + e;
              E >= d.length ? (E = 0) : E < 0 && (E = d.length - 1);
              let h = d[E];
              if (S().includes(h))
                  !(function (e) {
                      let n = c.Z.getCurrentRoute();
                      e === _.Z5c.APPLICATION_STORE && null != n ? (0, C.z)(n) : (0, C.z)(e);
                  })(h);
              else {
                  (t = _.ME), (l = h), (0, C.K)(t, l);
              }
          })(e)
        : !(function (e, n) {
              var t, o, a, r;
              let d = u.Z.getState().channelId,
                  c = (0, l.Z)(n, { withCurrentVoiceChannel: !0 }).map((e) => e.id);
              (0, i.s)(n) && c.unshift(h.oC.GUILD_HOME);
              let s = ((t = (null != d ? c.indexOf(d) : -1) + e), (o = c.length), t < 0 ? o - 1 : t >= o ? 0 : t);
              (a = n), (r = c[s]), (0, C.K)(a, r);
          })(e, n);
}
