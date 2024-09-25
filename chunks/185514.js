t.d(n, {
    $c: function () {
        return c;
    },
    Nx: function () {
        return A;
    },
    On: function () {
        return C;
    },
    tQ: function () {
        return s;
    },
    x5: function () {
        return _;
    }
});
var i = t(140492),
    o = t(475468),
    l = t(703656),
    E = t(769654),
    r = t(944486),
    a = t(914010),
    u = t(358085),
    d = t(981631);
let s = {
        binds: ['alt+down'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.Z)(), !1)
    },
    _ = {
        binds: ['alt+up'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.Z)(-1), !1)
    },
    c = {
        binds: ['mod+alt+right'],
        comboKeysBindGlobal: !0,
        action() {
            let e;
            if (null != a.Z.getGuildId()) e = d.ME;
            else {
                let n = a.Z.getLastSelectedGuildId();
                null != n && ((e = n), (0, o.K)(n, r.Z.getChannelId(n)));
            }
            return null != e && (0, E.X)(e), !1;
        }
    },
    A = {
        binds: (0, u.isMac)() ? ['mod+['] : ['alt+left'],
        comboKeysBindGlobal: !0,
        action: () => ((0, l.op)(), !1)
    },
    C = {
        binds: (0, u.isMac)() ? ['mod+]'] : ['alt+right'],
        comboKeysBindGlobal: !0,
        action: () => ((0, l.eH)(), !1)
    };
