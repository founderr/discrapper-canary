n.d(e, {
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
var i = n(442837),
    l = n(581883),
    o = n(871465);
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
    var e, n;
    return d(t, void 0, null !== (n = null === (e = l.Z.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== n ? n : {});
}
function r(t, e) {
    let n = (0, i.e7)([l.Z], () => {
        var t;
        return null === (t = l.Z.settings.guilds) || void 0 === t ? void 0 : t.guilds;
    });
    return null != e ? d(t, e, n) : void 0;
}
function s(t, e) {
    var n, i;
    let o = null !== (i = null === (n = l.Z.settings.guilds) || void 0 === n ? void 0 : n.guilds) && void 0 !== i ? i : {};
    return null != e ? d(t, e, o) : void 0;
}
function d(t, e, n) {
    var i, l;
    if (null == n) return;
    let a = null != e ? (null === (i = n[t]) || void 0 === i ? void 0 : i.channels[e]) : n[t],
        u = null == a ? void 0 : a.customNotificationSoundConfig;
    return null != u
        ? (function (t) {
              return null != t ? Object.values(o.YC).find((e) => e === t) : void 0;
          })(null == u ? void 0 : null === (l = u.notificationSoundPackId) || void 0 === l ? void 0 : l.value)
        : void 0;
}
