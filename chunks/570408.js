t.d(n, {
    I: function () {
        return l;
    }
});
var i = t(585483),
    o = t(981631);
let l = {
    binds: ['mod+f'],
    comboKeysBindGlobal: !0,
    action(e) {
        e.preventDefault(), e.stopPropagation(), i.S.dispatch(o.CkL.FOCUS_SEARCH, { prefillCurrentChannel: !0 });
    }
};
