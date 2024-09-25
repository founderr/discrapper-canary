var r = n(224106),
    i = n(942282),
    a = n(151020),
    o = n(476508),
    s = n(13780),
    l = n(250765),
    u = n(730427),
    c = n(790142),
    d = n(215645),
    _ = n(187592),
    E = n(447631),
    f = n(938988).fastKey,
    h = n(29461),
    p = h.set,
    m = h.getterFor;
e.exports = {
    getConstructor: function (e, t, n, c) {
        var d = e(function (e, i) {
                s(e, _),
                    p(e, {
                        type: t,
                        index: r(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                    }),
                    !E && (e.size = 0),
                    !l(i) &&
                        u(i, e[c], {
                            that: e,
                            AS_ENTRIES: n
                        });
            }),
            _ = d.prototype,
            h = m(t),
            I = function (e, t, n) {
                var r,
                    i,
                    a = h(e),
                    o = T(e, t);
                return (
                    o
                        ? (o.value = n)
                        : ((a.last = o =
                              {
                                  index: (i = f(t, !0)),
                                  key: t,
                                  value: n,
                                  previous: (r = a.last),
                                  next: void 0,
                                  removed: !1
                              }),
                          !a.first && (a.first = o),
                          r && (r.next = o),
                          E ? a.size++ : e.size++,
                          'F' !== i && (a.index[i] = o)),
                    e
                );
            },
            T = function (e, t) {
                var n,
                    r = h(e),
                    i = f(t);
                if ('F' !== i) return r.index[i];
                for (n = r.first; n; n = n.next) if (n.key === t) return n;
            };
        return (
            a(_, {
                clear: function () {
                    for (var e = this, t = h(e), n = t.index, r = t.first; r; ) (r.removed = !0), r.previous && (r.previous = r.previous.next = void 0), delete n[r.index], (r = r.next);
                    (t.first = t.last = void 0), E ? (t.size = 0) : (e.size = 0);
                },
                delete: function (e) {
                    var t = this,
                        n = h(t),
                        r = T(t, e);
                    if (r) {
                        var i = r.next,
                            a = r.previous;
                        delete n.index[r.index], (r.removed = !0), a && (a.next = i), i && (i.previous = a), n.first === r && (n.first = i), n.last === r && (n.last = a), E ? n.size-- : t.size--;
                    }
                    return !!r;
                },
                forEach: function (e) {
                    for (var t, n = h(this), r = o(e, arguments.length > 1 ? arguments[1] : void 0); (t = t ? t.next : n.first); ) for (r(t.value, t.key, this); t && t.removed; ) t = t.previous;
                },
                has: function (e) {
                    return !!T(this, e);
                }
            }),
            a(
                _,
                n
                    ? {
                          get: function (e) {
                              var t = T(this, e);
                              return t && t.value;
                          },
                          set: function (e, t) {
                              return I(this, 0 === e ? 0 : e, t);
                          }
                      }
                    : {
                          add: function (e) {
                              return I(this, (e = 0 === e ? 0 : e), e);
                          }
                      }
            ),
            E &&
                i(_, 'size', {
                    configurable: !0,
                    get: function () {
                        return h(this).size;
                    }
                }),
            d
        );
    },
    setStrong: function (e, t, n) {
        var r = t + ' Iterator',
            i = m(t),
            a = m(r);
        c(
            e,
            t,
            function (e, t) {
                p(this, {
                    type: r,
                    target: e,
                    state: i(e),
                    kind: t,
                    last: void 0
                });
            },
            function () {
                for (var e = a(this), t = e.kind, n = e.last; n && n.removed; ) n = n.previous;
                return e.target && (e.last = n = n ? n.next : e.state.first) ? ('keys' === t ? d(n.key, !1) : 'values' === t ? d(n.value, !1) : d([n.key, n.value], !1)) : ((e.target = void 0), d(void 0, !0));
            },
            n ? 'entries' : 'values',
            !n,
            !0
        ),
            _(t);
    }
};
