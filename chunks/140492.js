e.d(t, {
    Z: function () {
        return g;
    }
}),
    e(47120),
    e(733860);
var i = e(358230),
    o = e(931261),
    r = e(355298),
    l = e(333984),
    d = e(905423),
    s = e(695346),
    u = e(283595),
    a = e(923834),
    c = e(55589),
    E = e(823379),
    C = e(475468),
    b = e(981631),
    A = e(176505);
let S = () => {
    let n = r.Z.getMessageRequestsCount() > 0 || l.Z.getSpamChannelsCount() > 0;
    return [b.Z5c.FRIENDS, u.Z.hasLibraryApplication() && !s.bm.getSetting() ? b.Z5c.APPLICATION_LIBRARY : null, b.Z5c.APPLICATION_STORE, n ? b.Z5c.MESSAGE_REQUESTS : null, b.Z5c.COLLECTIBLES_SHOP, s.Ex.getSetting() ? b.Z5c.FAMILY_CENTER : null].filter(E.lm);
};
function p(n, t) {
    (0, C.K)(n, t);
}
function g() {
    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = d.Z.getState().guildId;
    null == t
        ? !(function (n) {
              var t, e, i;
              let { channelId: o, path: r, basePath: l } = d.Z.getState(),
                  s = c.Z.getPrivateChannelIds(),
                  u = __OVERLAY__ ? s : [...S(), ...s];
              let E = (null == o ? ((t = null != r ? r : l), S().findIndex((n) => t.startsWith(n))) : null != o ? u.indexOf(o) : 0) + n;
              E >= u.length ? (E = 0) : E < 0 && (E = u.length - 1);
              let A = u[E];
              if (S().includes(A))
                  !(function (n) {
                      let t = a.Z.getCurrentRoute();
                      n === b.Z5c.APPLICATION_STORE && null != t ? (0, C.z)(t) : (0, C.z)(n);
                  })(A);
              else {
                  (e = b.ME), (i = A), (0, C.K)(e, i);
              }
          })(n)
        : !(function (n, t) {
              var e, r, l, s;
              let u = d.Z.getState().channelId,
                  a = (0, i.Z)(t, { withCurrentVoiceChannel: !0 }).map((n) => n.id);
              (0, o.s)(t) && a.unshift(A.oC.GUILD_HOME);
              let c = ((e = (null != u ? a.indexOf(u) : -1) + n), (r = a.length), e < 0 ? r - 1 : e >= r ? 0 : e);
              (l = t), (s = a[c]), (0, C.K)(l, s);
          })(n, t);
}
