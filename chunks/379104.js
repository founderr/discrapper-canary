var i = r(829132);
function a(e) {
    (this.data = e), (this.left = null), (this.right = null), (this.red = !0);
}
function s(e) {
    (this._root = null), (this._comparator = e), (this.size = 0);
}
function o(e) {
    return null !== e && e.red;
}
function l(e, n) {
    var r = e.get_child(!n);
    return e.set_child(!n, r.get_child(n)), r.set_child(n, e), (e.red = !0), (r.red = !1), r;
}
function u(e, n) {
    return e.set_child(!n, l(e.get_child(!n), !n)), l(e, n);
}
(a.prototype.get_child = function (e) {
    return e ? this.right : this.left;
}),
    (a.prototype.set_child = function (e, n) {
        e ? (this.right = n) : (this.left = n);
    }),
    (s.prototype = new i()),
    (s.prototype.insert = function (e) {
        var n = !1;
        if (null === this._root) (this._root = new a(e)), (n = !0), this.size++;
        else {
            var r = new a(void 0),
                i = 0,
                s = 0,
                c = null,
                d = r,
                f = null,
                _ = this._root;
            for (d.right = this._root; ; ) {
                if ((null === _ ? ((_ = new a(e)), f.set_child(i, _), (n = !0), this.size++) : o(_.left) && o(_.right) && ((_.red = !0), (_.left.red = !1), (_.right.red = !1)), o(_) && o(f))) {
                    var h = d.right === c;
                    _ === f.get_child(s) ? d.set_child(h, l(c, !s)) : d.set_child(h, u(c, !s));
                }
                var p = this._comparator(_.data, e);
                if (0 === p) break;
                (s = i), (i = p < 0), null !== c && (d = c), (c = f), (f = _), (_ = _.get_child(i));
            }
            this._root = r.right;
        }
        return (this._root.red = !1), n;
    }),
    (s.prototype.remove = function (e) {
        if (null === this._root) return !1;
        var n = new a(void 0),
            r = n;
        r.right = this._root;
        for (var i = null, s = null, c = null, d = 1; null !== r.get_child(d); ) {
            var f = d;
            (s = i), (i = r), (r = r.get_child(d));
            var _ = this._comparator(e, r.data);
            if (((d = _ > 0), 0 === _ && (c = r), !o(r) && !o(r.get_child(d)))) {
                if (o(r.get_child(!d))) {
                    var h = l(r, d);
                    i.set_child(f, h), (i = h);
                } else if (!o(r.get_child(!d))) {
                    var p = i.get_child(!f);
                    if (null !== p) {
                        if (o(p.get_child(!f)) || o(p.get_child(f))) {
                            var m = s.right === i;
                            o(p.get_child(f)) ? s.set_child(m, u(i, f)) : o(p.get_child(!f)) && s.set_child(m, l(i, f));
                            var g = s.get_child(m);
                            (g.red = !0), (r.red = !0), (g.left.red = !1), (g.right.red = !1);
                        } else (i.red = !1), (p.red = !0), (r.red = !0);
                    }
                }
            }
        }
        return null !== c && ((c.data = r.data), i.set_child(i.right === r, r.get_child(null === r.left)), this.size--), (this._root = n.right), null !== this._root && (this._root.red = !1), null !== c;
    }),
    (e.exports = s);
