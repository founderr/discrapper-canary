r.d(t, {
    e: function () {
        return E;
    }
});
var n = r(622916),
    a = r(370336),
    _ = r(899517),
    o = r(578346);
function E(e) {
    let t = 'console';
    (0, o.Hj)(t, e), (0, o.D2)(t, i);
}
function i() {
    if ('console' in _.n)
        n.RU.forEach(function (e) {
            if (e in _.n.console)
                (0, a.hl)(_.n.console, e, function (t) {
                    return (
                        (n.LD[e] = t),
                        function (...t) {
                            (0, o.rK)('console', {
                                args: t,
                                level: e
                            });
                            let r = n.LD[e];
                            r && r.apply(_.n.console, t);
                        }
                    );
                });
        });
}
