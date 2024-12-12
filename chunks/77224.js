r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(47120);
var a = r(653041);
var s = r(341702),
    o = r(887490);
let l = 'line';
function u(e, n) {
    if (o.bN.areStylesDisabled(e)) return [];
    let [r, i] = n,
        a = [];
    if (!o.aj.isType(r, l) || null == r.codeBlockState) return a;
    let { hljsTypes: u, isStyledCodeBlockLine: c } = r.codeBlockState;
    if (null == u || 0 === u.length || !c) return [];
    for (let n of u) {
        let l = r.children.map((e) => (o.LC.isText(e) ? e.text : null));
        a.push({
            hljsTypes: n.types,
            anchor: (0, s.t)(e, i, l, n.start),
            focus: (0, s.t)(e, i, l, n.end)
        });
    }
    return a;
}
