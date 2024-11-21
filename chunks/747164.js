n.d(t, {
    E: function () {
        return I;
    },
    Jz: function () {
        return T;
    },
    Kf: function () {
        return y;
    },
    _w: function () {
        return S;
    }
});
var r = n(780100),
    i = n(386456),
    a = n(591734),
    s = n(192379),
    o = n(39521);
let l = null,
    u = new Set(),
    c = new Map(),
    d = !1,
    f = !1;
function _(e, t) {
    for (let n of u) n(e, t);
}
function p(e) {
    var t;
    if (((d = !0), !((t = e).metaKey || (!(0, r.V5)() && t.altKey) || t.ctrlKey || 'Control' === t.key || 'Shift' === t.key || 'Meta' === t.key))) (l = 'keyboard'), _('keyboard', e);
}
function h(e) {
    (l = 'pointer'), ('mousedown' === e.type || 'pointerdown' === e.type) && ((d = !0), _('pointer', e));
}
function m(e) {
    (0, i.Z)(e) && ((d = !0), (l = 'virtual'));
}
function g(e) {
    e.target !== window && e.target !== document && (!d && !f && ((l = 'virtual'), _('virtual', e)), (d = !1), (f = !1));
}
function E() {
    (d = !1), (f = !0);
}
function v(e) {
    if ('undefined' == typeof window || c.get((0, a.k)(e))) return;
    let t = (0, a.k)(e),
        n = (0, a.r)(e),
        r = t.HTMLElement.prototype.focus;
    (t.HTMLElement.prototype.focus = function () {
        (d = !0), r.apply(this, arguments);
    }),
        n.addEventListener('keydown', p, !0),
        n.addEventListener('keyup', p, !0),
        n.addEventListener('click', m, !0),
        t.addEventListener('focus', g, !0),
        t.addEventListener('blur', E, !1),
        'undefined' != typeof PointerEvent ? (n.addEventListener('pointerdown', h, !0), n.addEventListener('pointermove', h, !0), n.addEventListener('pointerup', h, !0)) : (n.addEventListener('mousedown', h, !0), n.addEventListener('mousemove', h, !0), n.addEventListener('mouseup', h, !0)),
        t.addEventListener(
            'beforeunload',
            () => {
                b(e);
            },
            { once: !0 }
        ),
        c.set(t, { focus: r });
}
let b = (e, t) => {
    let n = (0, a.k)(e),
        r = (0, a.r)(e);
    t && r.removeEventListener('DOMContentLoaded', t), c.has(n) && ((n.HTMLElement.prototype.focus = c.get(n).focus), r.removeEventListener('keydown', p, !0), r.removeEventListener('keyup', p, !0), r.removeEventListener('click', m, !0), n.removeEventListener('focus', g, !0), n.removeEventListener('blur', E, !1), 'undefined' != typeof PointerEvent ? (r.removeEventListener('pointerdown', h, !0), r.removeEventListener('pointermove', h, !0), r.removeEventListener('pointerup', h, !0)) : (r.removeEventListener('mousedown', h, !0), r.removeEventListener('mousemove', h, !0), r.removeEventListener('mouseup', h, !0)), c.delete(n));
};
function I() {
    return 'pointer' !== l;
}
function T() {
    return l;
}
function S(e) {
    (l = e), _(e, null);
}
function y() {
    v();
    let [e, t] = (0, s.useState)(l);
    return (
        (0, s.useEffect)(() => {
            let e = () => {
                t(l);
            };
            return (
                u.add(e),
                () => {
                    u.delete(e);
                }
            );
        }, []),
        (0, o.Av)() ? null : e
    );
}
'undefined' != typeof document &&
    !(function (e) {
        let t;
        let n = (0, a.r)(void 0);
        'loading' !== n.readyState
            ? v(e)
            : ((t = () => {
                  v(e);
              }),
              n.addEventListener('DOMContentLoaded', t)),
            () => b(e, t);
    })();
