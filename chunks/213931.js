a.d(n, {
    M: function () {
        return l;
    },
    t: function () {
        return d;
    }
});
var t = a(381499),
    c = a(675478),
    i = a(592125),
    o = a(626135),
    r = a(981631);
function d(e, n, a, i) {
    if (n !== a)
        (0, c.PS)(
            e,
            (e) => {
                e.customNotificationSoundConfig = { notificationSoundPackId: t.Gm.create({ value: a }) };
            },
            c.fy.INFREQUENT_USER_ACTION
        ),
            o.default.track(r.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
                guild_id: e,
                location: i,
                soundpack: a
            });
}
function l(e, n, a, d, l) {
    var s;
    if (a !== d)
        (0, c.BU)(
            e,
            n,
            (e) => {
                e.customNotificationSoundConfig = { notificationSoundPackId: t.Gm.create({ value: d }) };
            },
            c.fy.INFREQUENT_USER_ACTION
        ),
            o.default.track(r.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
                guild_id: e,
                channel_id: n,
                channel_type: null === (s = i.Z.getChannel(n)) || void 0 === s ? void 0 : s.type,
                location: l,
                soundpack: d
            });
}
