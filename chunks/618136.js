n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(47120);
var i = n(436660),
    a = n(887490),
    o = n(42530);
function s(e) {
    let { apply: t, onChange: n } = e;
    return (
        (e.apply = (n) => {
            t(n), a.Ew.isValid(e, e.selection) && (e.lastGoodSelection = e.selection);
        }),
        (e.onChange = () => {
            if ((!a.Ew.isValid(e, e.selection) && (e.selection = l(e)), null != e.selection)) {
                let t,
                    n,
                    [r, s] = a.M8.edges(e.selection),
                    l = !1;
                for (; null != r && null != (t = a.bN.getParentVoid(e, r)) && !o.On.includes(t[0].type); ) (r = a.bN.before(e, r, { unit: 'offset' })), (l = !0);
                for (; null != s && null != (n = a.bN.getParentVoid(e, s)) && !o.On.includes(n[0].type); ) (s = a.bN.after(e, s, { unit: 'offset' })), (l = !0);
                l &&
                    null != r &&
                    null != s &&
                    (a.M8.isForward(e.selection)
                        ? i.Q.select(e, {
                              anchor: r,
                              focus: s
                          })
                        : i.Q.select(e, {
                              anchor: s,
                              focus: r
                          }));
            }
            n();
        }),
        e
    );
}
function l(e) {
    let t;
    if (a.Ew.isValid(e, e.lastGoodSelection)) t = e.lastGoodSelection;
    else {
        let n = a.bN.end(e, []);
        t = {
            anchor: n,
            focus: n
        };
    }
    return t;
}
