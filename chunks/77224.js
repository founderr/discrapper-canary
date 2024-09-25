n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(341702),
    o = n(887490);
let s = 'line';
function l(e, t) {
    if (o.bN.areStylesDisabled(e)) return [];
    let [n, r] = t,
        i = [];
    if (!o.aj.isType(n, s) || null == n.codeBlockState) return i;
    let { hljsTypes: l, isStyledCodeBlockLine: u } = n.codeBlockState;
    if (null == l || 0 === l.length || !u) return [];
    for (let t of l) {
        let s = n.children.map((e) => (o.LC.isText(e) ? e.text : null));
        i.push({
            hljsTypes: t.types,
            anchor: (0, a.t)(e, r, s, t.start),
            focus: (0, a.t)(e, r, s, t.end)
        });
    }
    return i;
}
