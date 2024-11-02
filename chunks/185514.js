e.d(t, {
    $c: function () {
        return _;
    },
    Nx: function () {
        return C;
    },
    On: function () {
        return A;
    },
    tQ: function () {
        return s;
    },
    x5: function () {
        return c;
    }
});
var i = e(140492),
    l = e(475468),
    o = e(703656),
    r = e(769654),
    u = e(944486),
    a = e(914010),
    d = e(358085),
    E = e(981631);
let s = {
        binds: ['alt+down'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.Z)(), !1)
    },
    c = {
        binds: ['alt+up'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.Z)(-1), !1)
    },
    _ = {
        binds: ['mod+alt+right'],
        comboKeysBindGlobal: !0,
        action() {
            let n;
            if (null != a.Z.getGuildId()) n = E.ME;
            else {
                let t = a.Z.getLastSelectedGuildId();
                null != t && ((n = t), (0, l.K)(t, u.Z.getChannelId(t)));
            }
            return null != n && (0, r.X)(n), !1;
        }
    },
    C = {
        binds: (0, d.isMac)() ? ['mod+['] : ['alt+left'],
        comboKeysBindGlobal: !0,
        action: () => ((0, o.op)(), !1)
    },
    A = {
        binds: (0, d.isMac)() ? ['mod+]'] : ['alt+right'],
        comboKeysBindGlobal: !0,
        action: () => ((0, o.eH)(), !1)
    };
