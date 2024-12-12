var i = r(46166),
    a = r(107378),
    s = r(849513);
function o(e) {
    var n = a(e);
    return 1 == n.length && n[0][2]
        ? s(n[0][0], n[0][1])
        : function (r) {
              return r === e || i(r, e, n);
          };
}
e.exports = o;
