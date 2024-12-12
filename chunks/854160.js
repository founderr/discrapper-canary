var i = r(970661),
    a = (function () {
        try {
            return !!Object.defineProperty({}, 'a', {});
        } catch (e) {
            return !1;
        }
    })();
a || Object.prototype.__defineGetter__;
var s = a
        ? Object.defineProperty
        : function (e, n, r) {
              'get' in r && e.__defineGetter__ ? e.__defineGetter__(n, r.get) : (!i.hop.call(e, n) || 'value' in r) && (e[n] = r.value);
          },
    o =
        Object.create ||
        function (e, n) {
            var r, a;
            function o() {}
            for (a in ((o.prototype = e), (r = new o()), n)) i.hop.call(n, a) && s(r, a, n[a]);
            return r;
        };
(n.defineProperty = s), (n.objCreate = o);
