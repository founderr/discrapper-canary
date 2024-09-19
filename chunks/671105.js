n.d(t, {
    OR: function () {
        return o;
    },
    _c: function () {
        return a;
    },
    bb: function () {
        return r;
    },
    iD: function () {
        return u;
    }
});
var i = n(442837),
    l = n(581883),
    s = n(871465);
function o(e) {
    return d(
        e,
        void 0,
        (0, i.e7)([l.Z], () => {
            var e;
            return null === (e = l.Z.settings.guilds) || void 0 === e ? void 0 : e.guilds;
        })
    );
}
function u(e) {
    var t, n;
    return d(e, void 0, null !== (n = null === (t = l.Z.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {});
}
function a(e, t) {
    let n = (0, i.e7)([l.Z], () => {
        var e;
        return null === (e = l.Z.settings.guilds) || void 0 === e ? void 0 : e.guilds;
    });
    return null != t ? d(e, t, n) : void 0;
}
function r(e, t) {
    var n, i;
    let s = null !== (i = null === (n = l.Z.settings.guilds) || void 0 === n ? void 0 : n.guilds) && void 0 !== i ? i : {};
    return null != t ? d(e, t, s) : void 0;
}
function d(e, t, n) {
    var i, l;
    if (null == n) return;
    let o = null != t ? (null === (i = n[e]) || void 0 === i ? void 0 : i.channels[t]) : n[e],
        u = null == o ? void 0 : o.customNotificationSoundConfig;
    return null != u
        ? (function (e) {
              return null != e ? Object.values(s.YC).find((t) => t === e) : void 0;
          })(null == u ? void 0 : null === (l = u.notificationSoundPackId) || void 0 === l ? void 0 : l.value)
        : void 0;
}
