t.d(n, {
    Z: function () {
        return r;
    }
}),
    t(653041),
    t(47120);
var i = t(131704);
function r(e) {
    let n = [];
    for (let t = 0; t < e._categories.length; t++) {
        let r = e._categories[t].channel,
            o = e[r.id].map((e) => e.channel).filter((e) => i.iR.has(e.type));
        if (null != o && 0 !== o.length) for (let e of ('null' !== r.id && n.push(r), o)) n.push(e);
    }
    return n;
}
