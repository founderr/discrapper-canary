t.d(n, {
    M: function () {
        return a;
    },
    a: function () {
        return r;
    }
});
var i = t(392711),
    o = t.n(i),
    l = t(585483),
    E = t(981631);
let r = {
        binds: ['mod+i'],
        comboKeysBindGlobal: !0,
        action: () => (l.S.dispatch(E.CkL.TOGGLE_INBOX), !1)
    },
    a = {
        binds: ['mod+shift+e'],
        comboKeysBindGlobal: !0,
        action: o().debounce(
            () => {
                if (l.S.hasSubscribers(E.CkL.MARK_TOP_INBOX_CHANNEL_READ)) return l.S.dispatch(E.CkL.MARK_TOP_INBOX_CHANNEL_READ), !1;
            },
            100,
            { leading: !0 }
        )
    };
