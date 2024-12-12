r.d(n, {
    oW: function () {
        return p;
    },
    p: function () {
        return h;
    }
});
var i = r(381499),
    a = r(668781),
    s = r(246133),
    o = r(695346),
    l = r(675478),
    u = r(885110),
    c = r(626135),
    d = r(468788),
    f = r(981631),
    _ = r(388032);
function h() {
    let e = o.QZ.useSetting(),
        n = o.fv.useSetting();
    return e && ('0' === n || new Date(Number(n)).getTime() - new Date().getTime() > 0);
}
function p(e, n) {
    let r = o.QZ.getSetting();
    l.hW.updateAsync(
        'notifications',
        (r) => {
            (r.quietMode = i.D5.create({ value: e })), (r.focusModeExpiresAtMs = e && null != n ? ''.concat(Date.now() + n) : '0');
        },
        l.fy.INFREQUENT_USER_ACTION
    ),
        c.default.track(f.rMx.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: d.I.ACCOUNT,
            quiet_mode_enabled: e,
            quiet_mode_enabled_old: r
        }),
        u.Z.getStatus() === f.Skl.DND &&
            e &&
            null == n &&
            a.Z.show({
                title: _.intl.string(_.t['B+cbLS']),
                body: _.intl.string(_.t.CYVgLC),
                cancelText: _.intl.string(_.t.f3Pet7),
                confirmText: _.intl.string(_.t.BddRzc),
                onConfirm: () => {
                    (0, s.Z)(f.Skl.ONLINE);
                }
            });
}
