e.d(t, {
    I: function () {
        return o;
    }
});
var i = e(585483),
    l = e(981631);
let o = {
    binds: ['mod+f'],
    comboKeysBindGlobal: !0,
    action(n) {
        n.preventDefault(), n.stopPropagation(), i.S.dispatch(l.CkL.FOCUS_SEARCH, { prefillCurrentChannel: !0 });
    }
};
