var n,
    i,
    o,
    a =
        (this && this.__extends) ||
        ((i = function (t, e) {
            return (i =
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
            i(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
        }),
    s =
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
    u =
        (this && this.__spreadArray) ||
        function (t, e, r) {
            if (r || 2 == arguments.length) for (var n, i = 0, o = e.length; i < o; i++) (n || !(i in e)) && (!n && (n = Array.prototype.slice.call(e, 0, i)), (n[i] = e[i]));
            return t.concat(n || Array.prototype.slice.call(e));
        };
Object.defineProperty(e, '__esModule', { value: !0 }), (e.astFormatter = e.RichTextNodeType = void 0), (e.formatToAst = f);
var c = r(137560);
((n = o || (e.RichTextNodeType = o = {})).Text = 'text'), (n.Strong = 'strong'), (n.Emphasis = 'emphasis'), (n.Code = 'code'), (n.Link = 'link'), (n.Paragraph = 'paragraph'), (n.Object = 'object');
var l = {
        $_: function () {
            return {
                type: o.Text,
                content: ''
            };
        },
        $b: function (t) {
            return {
                type: o.Strong,
                content: t
            };
        },
        $code: function (t) {
            return {
                type: o.Code,
                content: t
            };
        },
        $i: function (t) {
            return {
                type: o.Emphasis,
                content: t
            };
        },
        $link: function (t) {
            var e = s(t),
                r = e[0],
                n = e.slice(1);
            return {
                type: o.Link,
                target: r.content,
                content: n
            };
        },
        $p: function (t) {
            return {
                type: o.Paragraph,
                content: t
            };
        }
    },
    h = (function (t) {
        function e() {
            var e = t.apply(this, u([], s(arguments), !1)) || this;
            return (e.result = []), e;
        }
        return (
            a(e, t),
            (e.prototype.pushRichTextTag = function (t, e) {
                if (!(t in l)) throw ''.concat(t, ' is not a known rich text formatting tag');
                var r,
                    n = l[t](e, 0);
                Array.isArray(n) ? (r = this.result).push.apply(r, u([], s(n), !1)) : this.result.push(n);
            }),
            (e.prototype.pushLiteralText = function (t) {
                var e = this.result[this.result.length - 1];
                e.type === o.Text
                    ? (e.content += t)
                    : this.result.push({
                          type: o.Text,
                          content: t
                      });
            }),
            (e.prototype.pushObject = function (t) {
                this.result.push({
                    type: o.Object,
                    content: t
                });
            }),
            (e.prototype.finish = function () {
                return this.result;
            }),
            e
        );
    })(c.FormatBuilder);
function f(t, e) {
    return 'string' == typeof t
        ? [
              {
                  type: o.Text,
                  content: t
              }
          ]
        : this.bindFormatValues(h, t, e);
}
e.astFormatter = {
    format: f,
    builder: h
};
