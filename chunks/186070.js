e.d(t, {
    FI: function () {
        return l;
    },
    IL: function () {
        return r;
    }
});
var i = e(585483),
    o = e(981631);
let r = {
        binds: ['mod+return'],
        comboKeysBindGlobal: !0,
        action() {
            if (i.S.hasSubscribers(o.CkL.CALL_ACCEPT)) return i.S.dispatch(o.CkL.CALL_ACCEPT), !1;
        }
    },
    l = {
        binds: ["ctrl+'", "ctrl+shift+'"],
        comboKeysBindGlobal: !0,
        action(n) {
            if (i.S.hasSubscribers(o.CkL.CALL_START)) return i.S.dispatch(o.CkL.CALL_START, n), !1;
        }
    };
