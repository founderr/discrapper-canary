e = r.nmd(e);
var i = r(788255),
    a = n && !n.nodeType && n,
    s = a && e && !e.nodeType && e,
    o = s && s.exports === a && i.process,
    l = (function () {
        try {
            var e = s && s.require && s.require('util').types;
            if (e) return e;
            return o && o.binding && o.binding('util');
        } catch (e) {}
    })();
e.exports = l;
