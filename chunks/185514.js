t.d(n, {
    $c: function () {
        return C;
    },
    Nx: function () {
        return _;
    },
    On: function () {
        return h;
    },
    tQ: function () {
        return s;
    },
    x5: function () {
        return E;
    }
});
var l = t(14626),
    i = t(475468),
    o = t(703656),
    a = t(769654),
    u = t(944486),
    r = t(914010),
    d = t(358085),
    c = t(981631);
let s = {
        binds: ['alt+down'],
        comboKeysBindGlobal: !0,
        action: () => ((0, l.Z)(), !1)
    },
    E = {
        binds: ['alt+up'],
        comboKeysBindGlobal: !0,
        action: () => ((0, l.Z)(-1), !1)
    },
    C = {
        binds: ['mod+alt+right'],
        comboKeysBindGlobal: !0,
        action() {
            let e;
            if (null != r.Z.getGuildId()) e = c.ME;
            else {
                let n = r.Z.getLastSelectedGuildId();
                null != n && ((e = n), (0, i.K)(n, u.Z.getChannelId(n)));
            }
            return null != e && (0, a.X)(e), !1;
        }
    },
    _ = {
        binds: (0, d.isMac)() ? ['mod+['] : ['alt+left'],
        comboKeysBindGlobal: !0,
        action: () => ((0, o.op)(), !1)
    },
    h = {
        binds: (0, d.isMac)() ? ['mod+]'] : ['alt+right'],
        comboKeysBindGlobal: !0,
        action: () => ((0, o.eH)(), !1)
    };
