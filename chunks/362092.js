n.d(t, {
    Q2: function () {
        return c;
    },
    i6: function () {
        return d;
    },
    rN: function () {
        return _;
    }
});
var r = n(47120);
var i = n(411104);
var a = n(653041);
var o = n(920478);
n(364964);
let s = o.Z.listLanguages(),
    l = {};
for (let e of s) {
    e = e.toLowerCase();
    let t = o.Z.getLanguage(e);
    if (null == t) continue;
    let n = t.aliases;
    if (((l[e] = e), null != n)) for (let t of n) l[t.toLowerCase()] = e;
}
let u = /^[a-z0-9_+\-.#]+$/,
    c = /^[a-z0-9_+\-.#]+$/i;
for (let e in l) if (null == e.match(u)) throw Error('Language name does not match regex: '.concat(e));
function d(e) {
    return e.toLowerCase() in l;
}
function _(e) {
    let t;
    let n = [],
        r = /\\|```/g;
    for (; null != (t = r.exec(e)); ) {
        if ('\\' === t[0]) {
            r.lastIndex += 1;
            continue;
        }
        n.push(t.index);
    }
    return n;
}
