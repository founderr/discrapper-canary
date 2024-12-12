var i = r(816569),
    a = 'object' == typeof exports && exports && !exports.nodeType && exports,
    s = a && 'object' == typeof module && module && !module.nodeType && module,
    o = s && s.exports === a && i.Z.process,
    l = (function () {
        try {
            var e = s && s.require && s.require('util').types;
            if (e) return e;
            return o && o.binding && o.binding('util');
        } catch (e) {}
    })();
n.Z = l;
