e = r.nmd(e);
var n = r(940151),
    a = t && !t.nodeType && t,
    _ = a && e && !e.nodeType && e,
    o = _ && _.exports === a && n.process,
    i = (function () {
        try {
            var e = _ && _.require && _.require('util').types;
            if (e) return e;
            return o && o.binding && o.binding('util');
        } catch (e) {}
    })();
e.exports = i;
