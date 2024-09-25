var r = n(141603),
    i = n(735471),
    a = n(611345),
    o = n(964653),
    s = n(925768),
    l = o('IE_PROTO'),
    u = Object,
    c = u.prototype;
e.exports = s
    ? u.getPrototypeOf
    : function (e) {
          var t = a(e);
          if (r(t, l)) return t[l];
          var n = t.constructor;
          return i(n) && t instanceof n ? n.prototype : t instanceof u ? c : null;
      };
