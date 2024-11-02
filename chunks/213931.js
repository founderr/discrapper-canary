t.d(e, {
    M: function () {
        return d;
    },
    t: function () {
        return o;
    }
});
var i = t(381499),
    l = t(675478),
    r = t(592125),
    u = t(626135),
    a = t(981631);
function o(n, e, t, r) {
    if (e !== t)
        (0, l.PS)(
            n,
            (n) => {
                n.customNotificationSoundConfig = { notificationSoundPackId: i.Gm.create({ value: t }) };
            },
            l.fy.INFREQUENT_USER_ACTION
        ),
            u.default.track(a.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
                guild_id: n,
                location: r,
                soundpack: t
            });
}
function d(n, e, t, o, d) {
    var s;
    if (t !== o)
        (0, l.BU)(
            n,
            e,
            (n) => {
                n.customNotificationSoundConfig = { notificationSoundPackId: i.Gm.create({ value: o }) };
            },
            l.fy.INFREQUENT_USER_ACTION
        ),
            u.default.track(a.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
                guild_id: n,
                channel_id: e,
                channel_type: null === (s = r.Z.getChannel(e)) || void 0 === s ? void 0 : s.type,
                location: d,
                soundpack: o
            });
}
