(() => {
    var r = {
            507167: (r, e, t) => {
                r.exports = function() {
                    return new Worker(t.p + "9291a8015ad58c19c19c.worker.js")
                }
            }
        },
        e = {};

    function t(o) {
        var s = e[o];
        if (void 0 !== s) return s.exports;
        var n = e[o] = {
            exports: {}
        };
        r[o](n, n.exports, t);
        return n.exports
    }
    t.p = "/assets/";
    t(507167)
})();