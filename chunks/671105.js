e.d(n, {
    OR: function () {
        return a;
    },
    _c: function () {
        return r;
    },
    bb: function () {
        return s;
    },
    iD: function () {
        return u;
    }
});
var i = e(442837),
    l = e(581883),
    o = e(871465);
function a(t) {
    return d(
        t,
        void 0,
        (0, i.e7)([l.Z], () => {
            var t;
            return null === (t = l.Z.settings.guilds) || void 0 === t ? void 0 : t.guilds;
        })
    );
}
function u(t) {
    var n, e;
    return d(t, void 0, null !== (e = null === (n = l.Z.settings.guilds) || void 0 === n ? void 0 : n.guilds) && void 0 !== e ? e : {});
}
function r(t, n) {
    let e = (0, i.e7)([l.Z], () => {
        var t;
        return null === (t = l.Z.settings.guilds) || void 0 === t ? void 0 : t.guilds;
    });
    return null != n ? d(t, n, e) : void 0;
}
function s(t, n) {
    var e, i;
    let o = null !== (i = null === (e = l.Z.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== i ? i : {};
    return null != n ? d(t, n, o) : void 0;
}
function d(t, n, e) {
    var i, l;
    if (null == e) return;
    let a = null != n ? (null === (i = e[t]) || void 0 === i ? void 0 : i.channels[n]) : e[t],
        u = null == a ? void 0 : a.customNotificationSoundConfig;
    return null != u
        ? (function (t) {
              return null != t ? Object.values(o.YC).find((n) => n === t) : void 0;
          })(null == u ? void 0 : null === (l = u.notificationSoundPackId) || void 0 === l ? void 0 : l.value)
        : void 0;
}
