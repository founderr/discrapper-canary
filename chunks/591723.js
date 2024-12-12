r.d(n, {
    V: function () {
        return b;
    }
});
var i = r(573654),
    a = r(40284),
    s = r(481732),
    o = r(478413),
    l = r(919513),
    u = r(158851);
function c(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function d(e, n) {
    for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function f(e, n, r) {
    return n && d(e.prototype, n), r && d(e, r), e;
}
function _(e, n) {
    return E(e) || g(e, n) || p(e, n) || h();
}
function h() {
    throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function p(e, n) {
    if (e) {
        if ('string' == typeof e) return m(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return m(e, n);
    }
}
function m(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var r = 0, i = Array(n); r < n; r++) i[r] = e[r];
    return i;
}
function g(e, n) {
    if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
        var r = [],
            i = !0,
            a = !1,
            s = void 0;
        try {
            for (var o, l = e[Symbol.iterator](); !(i = (o = l.next()).done) && (r.push(o.value), !n || r.length !== n); i = !0);
        } catch (e) {
            (a = !0), (s = e);
        } finally {
            try {
                !i && null != l.return && l.return();
            } finally {
                if (a) throw s;
            }
        }
        return r;
    }
}
function E(e) {
    if (Array.isArray(e)) return e;
}
function v(e) {
    var n = (0, s.p)().toString();
    switch (e) {
        case o.t.SOURCE:
            return 'S'.concat(n);
        case o.t.TARGET:
            return 'T'.concat(n);
        default:
            throw Error('Unknown Handler Role: '.concat(e));
    }
}
function I(e) {
    switch (e[0]) {
        case 'S':
            return o.t.SOURCE;
        case 'T':
            return o.t.TARGET;
        default:
            (0, i.k)(!1, 'Cannot parse handler ID: '.concat(e));
    }
}
function T(e, n) {
    var r = e.entries(),
        i = !1;
    do {
        var a = r.next(),
            s = a.done;
        if (_(a.value, 2)[1] === n) return !0;
        i = !!s;
    } while (!i);
    return !1;
}
var b = (function () {
    function e(n) {
        c(this, e), (this.types = new Map()), (this.dragSources = new Map()), (this.dropTargets = new Map()), (this.pinnedSourceId = null), (this.pinnedSource = null), (this.store = n);
    }
    return (
        f(e, [
            {
                key: 'addSource',
                value: function (e, n) {
                    (0, l.sM)(e), (0, l.up)(n);
                    var r = this.addHandler(o.t.SOURCE, e, n);
                    return this.store.dispatch((0, a.j1)(r)), r;
                }
            },
            {
                key: 'addTarget',
                value: function (e, n) {
                    (0, l.sM)(e, !0), (0, l.JP)(n);
                    var r = this.addHandler(o.t.TARGET, e, n);
                    return this.store.dispatch((0, a.jn)(r)), r;
                }
            },
            {
                key: 'containsHandler',
                value: function (e) {
                    return T(this.dragSources, e) || T(this.dropTargets, e);
                }
            },
            {
                key: 'getSource',
                value: function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return (0, i.k)(this.isSourceId(e), 'Expected a valid source ID.'), n && e === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(e);
                }
            },
            {
                key: 'getTarget',
                value: function (e) {
                    return (0, i.k)(this.isTargetId(e), 'Expected a valid target ID.'), this.dropTargets.get(e);
                }
            },
            {
                key: 'getSourceType',
                value: function (e) {
                    return (0, i.k)(this.isSourceId(e), 'Expected a valid source ID.'), this.types.get(e);
                }
            },
            {
                key: 'getTargetType',
                value: function (e) {
                    return (0, i.k)(this.isTargetId(e), 'Expected a valid target ID.'), this.types.get(e);
                }
            },
            {
                key: 'isSourceId',
                value: function (e) {
                    return I(e) === o.t.SOURCE;
                }
            },
            {
                key: 'isTargetId',
                value: function (e) {
                    return I(e) === o.t.TARGET;
                }
            },
            {
                key: 'removeSource',
                value: function (e) {
                    var n = this;
                    (0, i.k)(this.getSource(e), 'Expected an existing source.'),
                        this.store.dispatch((0, a.wZ)(e)),
                        (0, u.eM)(function () {
                            n.dragSources.delete(e), n.types.delete(e);
                        });
                }
            },
            {
                key: 'removeTarget',
                value: function (e) {
                    (0, i.k)(this.getTarget(e), 'Expected an existing target.'), this.store.dispatch((0, a.BT)(e)), this.dropTargets.delete(e), this.types.delete(e);
                }
            },
            {
                key: 'pinSource',
                value: function (e) {
                    var n = this.getSource(e);
                    (0, i.k)(n, 'Expected an existing source.'), (this.pinnedSourceId = e), (this.pinnedSource = n);
                }
            },
            {
                key: 'unpinSource',
                value: function () {
                    (0, i.k)(this.pinnedSource, 'No source is pinned at the time.'), (this.pinnedSourceId = null), (this.pinnedSource = null);
                }
            },
            {
                key: 'addHandler',
                value: function (e, n, r) {
                    var i = v(e);
                    return this.types.set(i, n), e === o.t.SOURCE ? this.dragSources.set(i, r) : e === o.t.TARGET && this.dropTargets.set(i, r), i;
                }
            }
        ]),
        e
    );
})();
