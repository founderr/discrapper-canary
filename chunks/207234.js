i.d(t, {
    M: function () {
        return d;
    },
    a: function () {
        return s;
    }
});
var o = i(392711),
    r = i.n(o),
    E = i(585483),
    e = i(981631);
let s = {
        binds: ['mod+i'],
        comboKeysBindGlobal: !0,
        action: () => (E.S.dispatch(e.CkL.TOGGLE_INBOX), !1)
    },
    d = {
        binds: ['mod+shift+e'],
        comboKeysBindGlobal: !0,
        action: r().debounce(
            () => {
                if (E.S.hasSubscribers(e.CkL.MARK_TOP_INBOX_CHANNEL_READ)) return E.S.dispatch(e.CkL.MARK_TOP_INBOX_CHANNEL_READ), !1;
            },
            100,
            { leading: !0 }
        )
    };
