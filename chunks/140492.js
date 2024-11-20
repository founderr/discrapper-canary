e.d(t, {
    Z: function () {
        return T;
    }
}),
    e(47120),
    e(733860);
var i = e(718528),
    l = e(931261),
    o = e(355298),
    r = e(333984),
    u = e(905423),
    a = e(695346),
    d = e(283595),
    E = e(923834),
    s = e(55589),
    c = e(823379),
    _ = e(475468),
    C = e(981631),
    A = e(176505);
let S = () => {
    let n = o.Z.getMessageRequestsCount() > 0 || r.Z.getSpamChannelsCount() > 0;
    return [C.Z5c.FRIENDS, d.Z.hasLibraryApplication() && !a.bm.getSetting() ? C.Z5c.APPLICATION_LIBRARY : null, C.Z5c.APPLICATION_STORE, n ? C.Z5c.MESSAGE_REQUESTS : null, C.Z5c.COLLECTIBLES_SHOP, a.Ex.getSetting() ? C.Z5c.FAMILY_CENTER : null].filter(c.lm);
};
function I(n, t) {
    (0, _.K)(n, t);
}
function T() {
    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = u.Z.getState().guildId;
    null == t
        ? !(function (n) {
              var t, e, i;
              let { channelId: l, path: o, basePath: r } = u.Z.getState(),
                  a = s.Z.getPrivateChannelIds(),
                  d = __OVERLAY__ ? a : [...S(), ...a];
              let c = (null == l ? ((t = null != o ? o : r), S().findIndex((n) => t.startsWith(n))) : null != l ? d.indexOf(l) : 0) + n;
              c >= d.length ? (c = 0) : c < 0 && (c = d.length - 1);
              let A = d[c];
              if (S().includes(A))
                  !(function (n) {
                      let t = E.Z.getCurrentRoute();
                      n === C.Z5c.APPLICATION_STORE && null != t ? (0, _.z)(t) : (0, _.z)(n);
                  })(A);
              else {
                  (e = C.ME), (i = A), (0, _.K)(e, i);
              }
          })(n)
        : !(function (n, t) {
              var e, o, r, a;
              let d = u.Z.getState().channelId,
                  E = (0, i.Z)(t, { withCurrentVoiceChannel: !0 }).map((n) => n.id);
              (0, l.s)(t) && E.unshift(A.oC.GUILD_HOME);
              let s = ((e = (null != d ? E.indexOf(d) : -1) + n), (o = E.length), e < 0 ? o - 1 : e >= o ? 0 : e);
              (r = t), (a = E[s]), (0, _.K)(r, a);
          })(n, t);
}
