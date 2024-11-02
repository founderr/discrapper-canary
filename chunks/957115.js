n.d(t, {
    B: function () {
        return l;
    }
}),
    n(653041);
var o = n(392711),
    i = n.n(o);
let l = (e, t) => {
    let n = i().shuffle(e),
        o = n.findIndex((e) => e.value === t);
    if (o > -1) {
        let e = n[o];
        n.splice(o, 1), n.push(e);
    }
    return n;
};
