e.exports = function (e) {
    function n() {}
    var r = {
        log: n,
        warn: n,
        error: n
    };
    if (!e && window.console) {
        var i = function (e, n) {
            e[n] = function () {
                var e = console[n];
                if (e.apply) e.apply(console, arguments);
                else for (var r = 0; r < arguments.length; r++) e(arguments[r]);
            };
        };
        i(r, 'log'), i(r, 'warn'), i(r, 'error');
    }
    return r;
};
