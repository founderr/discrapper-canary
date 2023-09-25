(() => {
    var r = {
            507167: (r, e, t) => {
                r.exports = function() {
                    return new Worker(t.p + "384a6ac20d257dcf16fc.worker.js")
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