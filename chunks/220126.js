e = r.nmd(e);
var a = r(940151),
    n = t && !t.nodeType && t,
    _ = n && e && !e.nodeType && e,
    o = _ && _.exports === n && a.process,
    E = (function () {
        try {
            var e = _ && _.require && _.require('util').types;
            if (e) return e;
            return o && o.binding && o.binding('util');
        } catch (e) {}
    })();
e.exports = E;
