e.d(t, {
    $c: function () {
        return C;
    },
    Nx: function () {
        return b;
    },
    On: function () {
        return A;
    },
    tQ: function () {
        return c;
    },
    x5: function () {
        return E;
    }
});
var i = e(140492),
    o = e(475468),
    r = e(703656),
    l = e(769654),
    d = e(944486),
    s = e(914010),
    u = e(358085),
    a = e(981631);
let c = {
        binds: ['alt+down'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.Z)(), !1)
    },
    E = {
        binds: ['alt+up'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.Z)(-1), !1)
    },
    C = {
        binds: ['mod+alt+right'],
        comboKeysBindGlobal: !0,
        action() {
            let n;
            if (null != s.Z.getGuildId()) n = a.ME;
            else {
                let t = s.Z.getLastSelectedGuildId();
                null != t && ((n = t), (0, o.K)(t, d.Z.getChannelId(t)));
            }
            return null != n && (0, l.X)(n), !1;
        }
    },
    b = {
        binds: (0, u.isMac)() ? ['mod+['] : ['alt+left'],
        comboKeysBindGlobal: !0,
        action: () => ((0, r.op)(), !1)
    },
    A = {
        binds: (0, u.isMac)() ? ['mod+]'] : ['alt+right'],
        comboKeysBindGlobal: !0,
        action: () => ((0, r.eH)(), !1)
    };
