t.d(n, {
    FI: function () {
        return a;
    },
    IL: function () {
        return o;
    }
});
var l = t(585483),
    i = t(981631);
let o = {
        binds: ['mod+return'],
        comboKeysBindGlobal: !0,
        action() {
            if (l.S.hasSubscribers(i.CkL.CALL_ACCEPT)) return l.S.dispatch(i.CkL.CALL_ACCEPT), !1;
        }
    },
    a = {
        binds: ["ctrl+'", "ctrl+shift+'"],
        comboKeysBindGlobal: !0,
        action(e) {
            if (l.S.hasSubscribers(i.CkL.CALL_START)) return l.S.dispatch(i.CkL.CALL_START, e), !1;
        }
    };
