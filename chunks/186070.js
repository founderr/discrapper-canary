e.d(t, {
    FI: function () {
        return r;
    },
    IL: function () {
        return o;
    }
});
var i = e(585483),
    l = e(981631);
let o = {
        binds: ['mod+return'],
        comboKeysBindGlobal: !0,
        action() {
            if (i.S.hasSubscribers(l.CkL.CALL_ACCEPT)) return i.S.dispatch(l.CkL.CALL_ACCEPT), !1;
        }
    },
    r = {
        binds: ["ctrl+'", "ctrl+shift+'"],
        comboKeysBindGlobal: !0,
        action(n) {
            if (i.S.hasSubscribers(l.CkL.CALL_START)) return i.S.dispatch(l.CkL.CALL_START, n), !1;
        }
    };
