    "use strict";
    var n = e("147018"),
      i = e("161581"),
      o = e("197187"),
      u = e("261987"),
      c = "WebAssembly",
      s = i[c],
      a = 7 !== Error("e", {
        cause: 7
      }).cause,
      f = function(r, t) {
        var e = {};
        e[r] = u(r, t, a), n({
          global: !0,
          constructor: !0,
          arity: 1,
          forced: a
        }, e)
      },
      l = function(r, t) {
        if (s && s[r]) {
          var e = {};
          e[r] = u(c + "." + r, t, a), n({
            target: c,
            stat: !0,
            constructor: !0,
            arity: 1,
            forced: a
          }, e)
        }
      };
    f("Error", function(r) {
      return function(t) {
        return o(r, this, arguments)
      }
    }), f("EvalError", function(r) {
      return function(t) {
        return o(r, this, arguments)
      }
    }), f("RangeError", function(r) {
      return function(t) {
        return o(r, this, arguments)
      }
    }), f("ReferenceError", function(r) {
      return function(t) {
        return o(r, this, arguments)
      }
    }), f("SyntaxError", function(r) {
      return function(t) {
        return o(r, this, arguments)
      }
    }), f("TypeError", function(r) {
      return function(t) {
        return o(r, this, arguments)
      }
    }), f("URIError", function(r) {
      return function(t) {
        return o(r, this, arguments)
      }
    }), l("CompileError", function(r) {
      return function(t) {
        return o(r, this, arguments)
      }
    }), l("LinkError", function(r) {
      return function(t) {
        return o(r, this, arguments)
      }
    }), l("RuntimeError", function(r) {
      return function(t) {
        return o(r, this, arguments)
      }
    })