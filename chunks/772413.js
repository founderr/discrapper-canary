var n,
    i =
        (this && this.__extends) ||
        ((n = function (t, e) {
            return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e;
                    }) ||
                function (t, e) {
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
        }),
        function (t, e) {
            if ('function' != typeof e && null !== e) throw TypeError('Class extends value ' + String(e) + ' is not a constructor or null');
            function r() {
                this.constructor = t;
            }
            n(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
        }),
    o =
        (this && this.__read) ||
        function (t, e) {
            var r = 'function' == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n,
                i,
                o = r.call(t),
                a = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; ) a.push(n.value);
            } catch (t) {
                i = { error: t };
            } finally {
                try {
                    n && !n.done && (r = o.return) && r.call(o);
                } finally {
                    if (i) throw i.error;
                }
            }
            return a;
        },
    a =
        (this && this.__spreadArray) ||
        function (t, e, r) {
            if (r || 2 == arguments.length) for (var n, i = 0, o = e.length; i < o; i++) (n || !(i in e)) && (!n && (n = Array.prototype.slice.call(e, 0, i)), (n[i] = e[i]));
            return t.concat(n || Array.prototype.slice.call(e));
        };
Object.defineProperty(e, '__esModule', { value: !0 }), (e.reactFormatter = e.DEFAULT_REACT_RICH_TEXT_ELEMENTS = void 0), (e.formatReact = l), (e.makeReactFormatter = h);
var s = r(470079),
    u = r(439185),
    c = s.createElement;
e.DEFAULT_REACT_RICH_TEXT_ELEMENTS = {
    $_: function () {
        return '';
    },
    $b: function (t, e) {
        return c('strong', { key: e }, t);
    },
    $code: function (t, e) {
        return c('code', { key: e }, t);
    },
    $i: function (t, e) {
        return c('em', { key: e }, t);
    },
    $link: function (t, e) {
        var r = o(t);
        return c(
            'a',
            {
                href: r[0],
                key: e
            },
            r.slice(1)
        );
    },
    $p: function (t, e) {
        return c('p', { key: e }, t);
    }
};
function l(t, e, r) {
    if ('string' == typeof t) return s.createElement(s.Fragment, void 0, t);
    var n = this.bindFormatValues(r, t, e);
    return s.createElement(s.Fragment, void 0, n);
}
function h(t) {
    var e;
    return {
        format: l,
        builder:
            ((e = t),
            (function (t) {
                function r() {
                    var e = t.apply(this, a([], o(arguments), !1)) || this;
                    return (e._nodeKey = 0), (e.result = []), e;
                }
                return (
                    i(r, t),
                    (r.prototype.pushRichTextTag = function (t, r) {
                        this.result.push(e[t](r, ''.concat(this._nodeKey++)));
                    }),
                    (r.prototype.pushLiteralText = function (t) {
                        this.result.push(t);
                    }),
                    (r.prototype.pushObject = function (t) {
                        this.result.push(t);
                    }),
                    (r.prototype.finish = function () {
                        return this.result;
                    }),
                    r
                );
            })(u.FormatBuilder))
    };
}
e.reactFormatter = h(e.DEFAULT_REACT_RICH_TEXT_ELEMENTS);
