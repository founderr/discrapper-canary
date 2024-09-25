var r = n(96403),
    i = n(548828),
    a = n(982665),
    o = n(141603),
    s = n(780524),
    l = n(809235),
    u = Function,
    c = r([].concat),
    d = r([].join),
    _ = {},
    E = function (e, t, n) {
        if (!o(_, t)) {
            for (var r = [], i = 0; i < t; i++) r[i] = 'a[' + i + ']';
            _[t] = u('C,a', 'return new C(' + d(r, ',') + ')');
        }
        return _[t](e, n);
    };
e.exports = l
    ? u.bind
    : function (e) {
          var t = i(this),
              n = t.prototype,
              r = s(arguments, 1),
              o = function () {
                  var n = c(r, s(arguments));
                  return this instanceof o ? E(t, n.length, n) : t.apply(e, n);
              };
          return a(n) && (o.prototype = n), o;
      };
