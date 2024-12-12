var i = r(721653),
    a = r(158655),
    s = r(85357);
function o(e) {
    var n = a(e);
    return 1 == n.length && n[0][2]
        ? s(n[0][0], n[0][1])
        : function (r) {
              return r === e || i(r, e, n);
          };
}
e.exports = o;
