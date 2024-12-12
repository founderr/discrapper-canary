r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(436660),
    s = r(887490),
    o = r(42530);
function l(e) {
    let { apply: n, onChange: r } = e;
    return (
        (e.apply = (r) => {
            n(r), s.Ew.isValid(e, e.selection) && (e.lastGoodSelection = e.selection);
        }),
        (e.onChange = () => {
            if ((!s.Ew.isValid(e, e.selection) && (e.selection = u(e)), null != e.selection)) {
                let n,
                    r,
                    [i, l] = s.M8.edges(e.selection),
                    u = !1;
                for (; null != i && null != (n = s.bN.getParentVoid(e, i)) && !o.On.includes(n[0].type); ) (i = s.bN.before(e, i, { unit: 'offset' })), (u = !0);
                for (; null != l && null != (r = s.bN.getParentVoid(e, l)) && !o.On.includes(r[0].type); ) (l = s.bN.after(e, l, { unit: 'offset' })), (u = !0);
                u &&
                    null != i &&
                    null != l &&
                    (s.M8.isForward(e.selection)
                        ? a.Q.select(e, {
                              anchor: i,
                              focus: l
                          })
                        : a.Q.select(e, {
                              anchor: l,
                              focus: i
                          }));
            }
            r();
        }),
        e
    );
}
function u(e) {
    let n;
    if (s.Ew.isValid(e, e.lastGoodSelection)) n = e.lastGoodSelection;
    else {
        let r = s.bN.end(e, []);
        n = {
            anchor: r,
            focus: r
        };
    }
    return n;
}
