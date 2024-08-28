var n = r(740362),
    a = r(354848),
    o = r(339718),
    i = r(883539),
    _ = r(442975),
    E = i('IE_PROTO'),
    s = Object,
    c = s.prototype;
e.exports = _
    ? s.getPrototypeOf
    : function (e) {
          var t = o(e);
          if (n(t, E)) return t[E];
          var r = t.constructor;
          return a(r) && t instanceof r ? r.prototype : t instanceof s ? c : null;
      };
