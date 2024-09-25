t.d(n, {
    FI: function () {
        return E;
    },
    IL: function () {
        return l;
    }
});
var i = t(585483),
    o = t(981631);
let l = {
        binds: ['mod+return'],
        comboKeysBindGlobal: !0,
        action() {
            if (i.S.hasSubscribers(o.CkL.CALL_ACCEPT)) return i.S.dispatch(o.CkL.CALL_ACCEPT), !1;
        }
    },
    E = {
        binds: ["ctrl+'", "ctrl+shift+'"],
        comboKeysBindGlobal: !0,
        action(e) {
            if (i.S.hasSubscribers(o.CkL.CALL_START)) return i.S.dispatch(o.CkL.CALL_START, e), !1;
        }
    };
