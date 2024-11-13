t.d(n, {
    M: function () {
        return l;
    },
    t: function () {
        return d;
    }
});
var a = t(381499),
    c = t(675478),
    i = t(592125),
    o = t(626135),
    r = t(981631);
function d(e, n, t, i) {
    if (n !== t)
        (0, c.PS)(
            e,
            (e) => {
                e.customNotificationSoundConfig = { notificationSoundPackId: a.Gm.create({ value: t }) };
            },
            c.fy.INFREQUENT_USER_ACTION
        ),
            o.default.track(r.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
                guild_id: e,
                location: i,
                soundpack: t
            });
}
function l(e, n, t, d, l) {
    var s;
    if (t !== d)
        (0, c.BU)(
            e,
            n,
            (e) => {
                e.customNotificationSoundConfig = { notificationSoundPackId: a.Gm.create({ value: d }) };
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
