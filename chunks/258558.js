var i = r(653041);
var a = r(411104);
!(function (e) {
    var n = Date.now ? Date.now() : +new Date(),
        r = e.performance || {},
        i = [],
        a = {},
        s = function (e, n) {
            for (var r = 0, a = i.length, s = []; r < a; r++) i[r][e] == n && s.push(i[r]);
            return s;
        },
        o = function (e, n) {
            for (var r, a = i.length; a--; ) (r = i[a]).entryType == e && (void 0 === n || r.name == n) && i.splice(a, 1);
        };
    !r.now &&
        (r.now =
            r.webkitNow ||
            r.mozNow ||
            r.msNow ||
            function () {
                return (Date.now ? Date.now() : +new Date()) - n;
            }),
        !r.mark &&
            (r.mark =
                r.webkitMark ||
                function (e) {
                    var n = {
                        name: e,
                        entryType: 'mark',
                        startTime: r.now(),
                        duration: 0
                    };
                    i.push(n), (a[e] = n);
                }),
        !r.measure &&
            (r.measure =
                r.webkitMeasure ||
                function (e, n, s) {
                    var o, l;
                    if (void 0 !== s && void 0 === a[s]) throw SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + s + "' does not exist.");
                    if (void 0 !== n && void 0 === a[n]) throw SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + n + "' does not exist.");
                    (o = a[n] ? a[n].startTime : 0),
                        (l = a[s] ? a[s].startTime : r.now()),
                        i.push({
                            name: e,
                            entryType: 'measure',
                            startTime: o,
                            duration: l - o
                        });
                }),
        !r.getEntriesByType &&
            (r.getEntriesByType =
                r.webkitGetEntriesByType ||
                function (e) {
                    return s('entryType', e);
                }),
        !r.getEntriesByName &&
            (r.getEntriesByName =
                r.webkitGetEntriesByName ||
                function (e) {
                    return s('name', e);
                }),
        !r.clearMarks &&
            (r.clearMarks =
                r.webkitClearMarks ||
                function (e) {
                    o('mark', e);
                }),
        !r.clearMeasures &&
            (r.clearMeasures =
                r.webkitClearMeasures ||
                function (e) {
                    o('measure', e);
                }),
        (e.performance = r),
        'function' == typeof define &&
            (define.amd || define.ajs) &&
            define('performance', [], function () {
                return r;
            });
})(r.g);
