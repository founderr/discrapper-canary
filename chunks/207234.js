e.d(t, {
    M: function () {
        return s;
    },
    a: function () {
        return d;
    }
});
var i = e(392711),
    o = e.n(i),
    r = e(585483),
    l = e(981631);
let d = {
        binds: ['mod+i'],
        comboKeysBindGlobal: !0,
        action: () => (r.S.dispatch(l.CkL.TOGGLE_INBOX), !1)
    },
    s = {
        binds: ['mod+shift+e'],
        comboKeysBindGlobal: !0,
        action: o().debounce(
            () => {
                if (r.S.hasSubscribers(l.CkL.MARK_TOP_INBOX_CHANNEL_READ)) return r.S.dispatch(l.CkL.MARK_TOP_INBOX_CHANNEL_READ), !1;
            },
            100,
            { leading: !0 }
        )
    };
