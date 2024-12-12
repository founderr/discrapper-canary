var a = r(46166),
    n = r(107378),
    _ = r(849513);
e.exports = function (e) {
    var t = n(e);
    return 1 == t.length && t[0][2]
        ? _(t[0][0], t[0][1])
        : function (r) {
              return r === e || a(r, e, t);
          };
};
