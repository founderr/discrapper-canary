e.d(t, {
    I: function () {
        return r;
    }
});
var i = e(585483),
    o = e(981631);
let r = {
    binds: ['mod+f'],
    comboKeysBindGlobal: !0,
    action(n) {
        n.preventDefault(), n.stopPropagation(), i.S.dispatch(o.CkL.FOCUS_SEARCH, { prefillCurrentChannel: !0 });
    }
};
