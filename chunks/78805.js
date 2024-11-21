n.d(t, {
    A: function () {
        return c;
    },
    l: function () {
        return u;
    }
});
var r = n(780100),
    i = n(591734),
    a = n(661829);
let s = 'default',
    o = '',
    l = new WeakMap();
function u(e) {
    if ((0, r.gn)()) {
        if ('default' === s) {
            let t = (0, i.r)(e);
            (o = t.documentElement.style.webkitUserSelect), (t.documentElement.style.webkitUserSelect = 'none');
        }
        s = 'disabled';
    } else (e instanceof HTMLElement || e instanceof SVGElement) && (l.set(e, e.style.userSelect), (e.style.userSelect = 'none'));
}
function c(e) {
    if ((0, r.gn)())
        'disabled' === s &&
            ((s = 'restoring'),
            setTimeout(() => {
                (0, a.Q)(() => {
                    if ('restoring' === s) {
                        let t = (0, i.r)(e);
                        'none' === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = o || ''), (o = ''), (s = 'default');
                    }
                });
            }, 300));
    else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && l.has(e)) {
        let t = l.get(e);
        'none' === e.style.userSelect && (e.style.userSelect = t), '' === e.getAttribute('style') && e.removeAttribute('style'), l.delete(e);
    }
}
