e.d(t, {
  OL: function() {
    return y
  },
  rU: function() {
    return p
  }
});
var r = e(333032);
e(919499);
var o = e(470079),
  i = e(539528);
e(476400);
var a = e(599295),
  c = e(781212),
  u = e(568895);
o.Component;
o.Component;
var s = function(n, t) {
    return "function" == typeof n ? n(t) : n
  },
  f = function(n, t) {
    return "string" == typeof n ? (0, i.ob)(n, null, null, t) : n
  },
  l = function(n) {
    return n
  },
  h = o.forwardRef;
void 0 === h && (h = l);
var d = h(function(n, t) {
    var e = n.innerRef,
      r = n.navigate,
      i = n.onClick,
      u = (0, c.Z)(n, ["innerRef", "navigate", "onClick"]),
      s = u.target,
      f = (0, a.Z)({}, u, {
        onClick: function(n) {
          var t;
          try {
            i && i(n)
          } catch (t) {
            throw n.preventDefault(), t
          }
          if (!n.defaultPrevented && 0 === n.button && (!s || "_self" === s) && !((t = n).metaKey || t.altKey || t.ctrlKey || t.shiftKey)) n.preventDefault(), r()
        }
      });
    return l !== h ? f.ref = t || e : f.ref = e, o.createElement("a", f)
  }),
  p = h(function(n, t) {
    var e = n.component,
      p = void 0 === e ? d : e,
      v = n.replace,
      m = n.to,
      y = n.innerRef,
      w = (0, c.Z)(n, ["component", "replace", "to", "innerRef"]);
    return o.createElement(r.s6.Consumer, null, function(n) {
      n || (0, u.Z)(!1);
      var e = n.history,
        r = f(s(m, n.location), n.location),
        c = r ? e.createHref(r) : "",
        d = (0, a.Z)({}, w, {
          href: c,
          navigate: function() {
            var t = s(m, n.location),
              r = (0, i.Ep)(n.location) === (0, i.Ep)(f(t));
            (v || r ? e.replace : e.push)(t)
          }
        });
      return l !== h ? d.ref = t || y : d.innerRef = y, o.createElement(p, d)
    })
  }),
  v = function(n) {
    return n
  },
  m = o.forwardRef;
void 0 === m && (m = v);
var y = m(function(n, t) {
  var e = n["aria-current"],
    i = void 0 === e ? "page" : e,
    l = n.activeClassName,
    h = void 0 === l ? "active" : l,
    d = n.activeStyle,
    y = n.className,
    w = n.exact,
    g = n.isActive,
    x = n.location,
    C = n.sensitive,
    k = n.strict,
    E = n.style,
    O = n.to,
    b = n.innerRef,
    A = (0, c.Z)(n, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);
  return o.createElement(r.s6.Consumer, null, function(n) {
    n || (0, u.Z)(!1);
    var e = x || n.location,
      c = f(s(O, e), e),
      l = c.pathname,
      P = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
      R = P ? (0, r.LX)(e.pathname, {
        path: P,
        exact: w,
        sensitive: C,
        strict: k
      }) : null,
      L = !!(g ? g(R, e) : R),
      Z = "function" == typeof y ? y(L) : y,
      S = "function" == typeof E ? E(L) : E;
    L && (Z = function() {
      for (var n = arguments.length, t = Array(n), e = 0; e < n; e++) t[e] = arguments[e];
      return t.filter(function(n) {
        return n
      }).join(" ")
    }(Z, h), S = (0, a.Z)({}, S, d));
    var _ = (0, a.Z)({
      "aria-current": L && i || null,
      className: Z,
      style: S,
      to: c
    }, A);
    return v !== m ? _.ref = t || b : _.innerRef = b, o.createElement(p, _)
  })
})