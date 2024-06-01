    "use strict";
    var n = e("545576"),
      i = e("740362"),
      o = e("251069"),
      u = e("838957"),
      c = e("276321"),
      s = e("381740"),
      a = e("504559"),
      f = e("95948"),
      l = e("892725"),
      p = e("668788"),
      v = e("154154"),
      d = e("325008"),
      I = e("992051");
    r.exports = function(r, t, e, y) {
      var h = "stackTraceLimit",
        E = y ? 2 : 1,
        g = r.split("."),
        T = g[g.length - 1],
        b = n.apply(null, g);
      if (b) {
        var R = b.prototype;
        if (!I && i(R, "cause") && delete R.cause, !e) return b;
        var m = n("Error"),
          A = t(function(r, t) {
            var e = l(y ? t : r, void 0),
              n = y ? new b(r) : new b;
            return void 0 !== e && o(n, "message", e), v(n, A, n.stack, 2), this && u(R, this) && f(n, this, A), arguments.length > E && p(n, arguments[E]), n
          });
        if (A.prototype = R, "Error" !== T ? c ? c(A, m) : s(A, m, {
            name: !0
          }) : d && h in b && (a(A, b, h), a(A, b, "prepareStackTrace")), s(A, b), !I) try {
          R.name !== T && o(R, "name", T), R.constructor = A
        } catch (r) {}
        return A
      }
    }