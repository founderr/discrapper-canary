r.d(n, {
    B: function () {
        return o;
    }
});
var i = r(270445),
    a = r(436660),
    s = r(887490);
let o = (e, n) => {
    let { addMark: r, removeMark: o, deleteBackward: l, deleteForward: u, setFragmentData: c, insertData: d, insertFragmentData: f, insertTextData: _ } = e;
    return (
        ((e = (0, i.BU)(e)).addMark = r),
        (e.removeMark = o),
        (e.setFragmentData = c),
        (e.insertData = d),
        (e.insertFragmentData = f),
        (e.insertTextData = _),
        (e.deleteBackward = (r) => {
            if ('line' !== r || n) l(r);
            else {
                let n = s.lP.getLineActionRange(e, !0);
                null != n && a.Q.delete(e, { at: n });
            }
        }),
        (e.deleteForward = (r) => {
            if ('line' !== r || n) u(r);
            else {
                let n = s.lP.getLineActionRange(e, !1);
                null != n && a.Q.delete(e, { at: n });
            }
        }),
        e
    );
};
