"use strict";
r.r(t), r.d(t, {
  Helmet: function() {
    return J
  },
  HelmetProvider: function() {
    return F
  }
}), r("808653"), r("781738"), r("424973"), r("70102");
var n = r("884691"),
  i = r.n(n),
  o = r("416037"),
  s = r.n(o),
  a = r("153543"),
  u = r.n(a),
  c = r("627445"),
  f = r.n(c),
  l = r("275370"),
  h = r.n(l);

function d() {
  return (d = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  }).apply(this, arguments)
}

function p(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, v(e, t)
}

function v(e, t) {
  return (v = Object.setPrototypeOf || function(e, t) {
    return e.__proto__ = t, e
  })(e, t)
}

function g(e, t) {
  if (null == e) return {};
  var r, n, i = {},
    o = Object.keys(e);
  for (n = 0; n < o.length; n++) t.indexOf(r = o[n]) >= 0 || (i[r] = e[r]);
  return i
}
var b = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title",
    FRAGMENT: "Symbol(react.fragment)"
  },
  m = {
    rel: ["amphtml", "canonical", "alternate"]
  },
  y = {
    type: ["application/ld+json"]
  },
  T = {
    charset: "",
    name: ["robots", "description"],
    property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"]
  },
  O = Object.keys(b).map(function(e) {
    return b[e]
  }),
  x = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
  },
  E = Object.keys(x).reduce(function(e, t) {
    return e[x[t]] = t, e
  }, {}),
  w = function(e, t) {
    for (var r = e.length - 1; r >= 0; r -= 1) {
      var n = e[r];
      if (Object.prototype.hasOwnProperty.call(n, t)) return n[t]
    }
    return null
  },
  C = function(e) {
    var t = w(e, b.TITLE),
      r = w(e, "titleTemplate");
    if (Array.isArray(t) && (t = t.join("")), r && t) return r.replace(/%s/g, function() {
      return t
    });
    var n = w(e, "defaultTitle");
    return t || n || void 0
  },
  A = function(e, t) {
    return t.filter(function(t) {
      return void 0 !== t[e]
    }).map(function(t) {
      return t[e]
    }).reduce(function(e, t) {
      return d({}, e, t)
    }, {})
  },
  z = function(e, t, r) {
    var n = {};
    return r.filter(function(t) {
      return !!Array.isArray(t[e]) || (void 0 !== t[e] && console && "function" == typeof console.warn && console.warn("Helmet: " + e + ' should be of type "Array". Instead found type "' + typeof t[e] + '"'), !1)
    }).map(function(t) {
      return t[e]
    }).reverse().reduce(function(e, r) {
      var i = {};
      r.filter(function(e) {
        for (var r, o = Object.keys(e), s = 0; s < o.length; s += 1) {
          var a = o[s],
            u = a.toLowerCase(); - 1 === t.indexOf(u) || "rel" === r && "canonical" === e[r].toLowerCase() || "rel" === u && "stylesheet" === e[u].toLowerCase() || (r = u), -1 === t.indexOf(a) || "innerHTML" !== a && "cssText" !== a && "itemprop" !== a || (r = a)
        }
        if (!r || !e[r]) return !1;
        var c = e[r].toLowerCase();
        return n[r] || (n[r] = {}), i[r] || (i[r] = {}), !n[r][c] && (i[r][c] = !0, !0)
      }).reverse().forEach(function(t) {
        return e.push(t)
      });
      for (var o = Object.keys(i), s = 0; s < o.length; s += 1) {
        var a = o[s],
          u = d({}, n[a], i[a]);
        n[a] = u
      }
      return e
    }, []).reverse()
  },
  S = function(e, t) {
    if (Array.isArray(e) && e.length) {
      for (var r = 0; r < e.length; r += 1)
        if (e[r][t]) return !0
    }
    return !1
  },
  R = function(e) {
    return Array.isArray(e) ? e.join("") : e
  },
  k = function(e, t) {
    return Array.isArray(e) ? e.reduce(function(e, r) {
      return ! function(e, t) {
        for (var r = Object.keys(e), n = 0; n < r.length; n += 1)
          if (t[r[n]] && t[r[n]].includes(e[r[n]])) return !0;
        return !1
      }(r, t) ? e.default.push(r) : e.priority.push(r), e
    }, {
      priority: [],
      default: []
    }) : {
      default: e
    }
  },
  L = function(e, t) {
    var r;
    return d({}, e, ((r = {})[t] = void 0, r))
  },
  M = [b.NOSCRIPT, b.SCRIPT, b.STYLE],
  I = function(e, t) {
    return void 0 === t && (t = !0), !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
  },
  P = function(e) {
    return Object.keys(e).reduce(function(t, r) {
      var n = void 0 !== e[r] ? r + '="' + e[r] + '"' : "" + r;
      return t ? t + " " + n : n
    }, "")
  },
  B = function(e, t) {
    return void 0 === t && (t = {}), Object.keys(e).reduce(function(t, r) {
      return t[x[r] || r] = e[r], t
    }, t)
  },
  j = function(e, t) {
    return t.map(function(t, r) {
      var n, o = ((n = {
        key: r
      })["data-rh"] = !0, n);
      return Object.keys(t).forEach(function(e) {
        var r = x[e] || e;
        "innerHTML" === r || "cssText" === r ? o.dangerouslySetInnerHTML = {
          __html: t.innerHTML || t.cssText
        } : o[r] = t[e]
      }), i.createElement(e, o)
    })
  },
  D = function(e, t, r) {
    switch (e) {
      case b.TITLE:
        return {
          toComponent: function() {
            var e, r, n, o;
            return r = t.titleAttributes, (n = {
              key: e = t.title
            })["data-rh"] = !0, o = B(r, n), [i.createElement(b.TITLE, o, e)]
          }, toString: function() {
            var n, i, o, s, a, u;
            return n = e, i = t.title, o = t.titleAttributes, s = r, a = P(o), u = R(i), a ? "<" + n + ' data-rh="true" ' + a + ">" + I(u, s) + "</" + n + ">" : "<" + n + ' data-rh="true">' + I(u, s) + "</" + n + ">"
          }
        };
      case "bodyAttributes":
      case "htmlAttributes":
        return {
          toComponent: function() {
            return B(t)
          }, toString: function() {
            return P(t)
          }
        };
      default:
        return {
          toComponent: function() {
            return j(e, t)
          }, toString: function() {
            var n, i, o;
            return n = e, i = t, o = r, i.reduce(function(e, t) {
              var r = Object.keys(t).filter(function(e) {
                  return !("innerHTML" === e || "cssText" === e)
                }).reduce(function(e, r) {
                  var n = void 0 === t[r] ? r : r + '="' + I(t[r], o) + '"';
                  return e ? e + " " + n : n
                }, ""),
                i = t.innerHTML || t.cssText || "",
                s = -1 === M.indexOf(n);
              return e + "<" + n + ' data-rh="true" ' + r + (s ? "/>" : ">" + i + "</" + n + ">")
            }, "")
          }
        }
    }
  },
  N = function(e) {
    var t = e.baseTag,
      r = e.bodyAttributes,
      n = e.encode,
      i = e.htmlAttributes,
      o = e.noscriptTags,
      s = e.styleTags,
      a = e.title,
      u = e.titleAttributes,
      c = e.linkTags,
      f = e.metaTags,
      l = e.scriptTags,
      h = {
        toComponent: function() {},
        toString: function() {
          return ""
        }
      };
    if (e.prioritizeSeoTags) {
      var d, p, v, g, O, x, E, w = (p = (d = e).linkTags, v = d.scriptTags, g = d.encode, O = k(d.metaTags, T), x = k(p, m), E = k(v, y), {
        priorityMethods: {
          toComponent: function() {
            return [].concat(j(b.META, O.priority), j(b.LINK, x.priority), j(b.SCRIPT, E.priority))
          },
          toString: function() {
            return D(b.META, O.priority, g) + " " + D(b.LINK, x.priority, g) + " " + D(b.SCRIPT, E.priority, g)
          }
        },
        metaTags: O.default,
        linkTags: x.default,
        scriptTags: E.default
      });
      h = w.priorityMethods, c = w.linkTags, f = w.metaTags, l = w.scriptTags
    }
    return {
      priority: h,
      base: D(b.BASE, t, n),
      bodyAttributes: D("bodyAttributes", r, n),
      htmlAttributes: D("htmlAttributes", i, n),
      link: D(b.LINK, c, n),
      meta: D(b.META, f, n),
      noscript: D(b.NOSCRIPT, o, n),
      script: D(b.SCRIPT, l, n),
      style: D(b.STYLE, s, n),
      title: D(b.TITLE, {
        title: void 0 === a ? "" : a,
        titleAttributes: u
      }, n)
    }
  },
  H = [],
  _ = function(e, t) {
    var r = this;
    void 0 === t && (t = "undefined" != typeof document), this.instances = [], this.value = {
      setHelmet: function(e) {
        r.context.helmet = e
      },
      helmetInstances: {
        get: function() {
          return r.canUseDOM ? H : r.instances
        },
        add: function(e) {
          (r.canUseDOM ? H : r.instances).push(e)
        },
        remove: function(e) {
          var t = (r.canUseDOM ? H : r.instances).indexOf(e);
          (r.canUseDOM ? H : r.instances).splice(t, 1)
        }
      }
    }, this.context = e, this.canUseDOM = t, t || (e.helmet = N({
      baseTag: [],
      bodyAttributes: {},
      encodeSpecialCharacters: !0,
      htmlAttributes: {},
      linkTags: [],
      metaTags: [],
      noscriptTags: [],
      scriptTags: [],
      styleTags: [],
      title: "",
      titleAttributes: {}
    }))
  },
  q = i.createContext({}),
  U = s.shape({
    setHelmet: s.func,
    helmetInstances: s.shape({
      get: s.func,
      add: s.func,
      remove: s.func
    })
  }),
  F = function(e) {
    function t(r) {
      var n;
      return (n = e.call(this, r) || this).helmetData = new _(n.props.context, t.canUseDOM), n
    }
    return p(t, e), t.prototype.render = function() {
      return i.createElement(q.Provider, {
        value: this.helmetData.value
      }, this.props.children)
    }, t
  }(n.Component);
F.canUseDOM = "undefined" != typeof document, F.propTypes = {
  context: s.shape({
    helmet: s.shape()
  }),
  children: s.node.isRequired
}, F.defaultProps = {
  context: {}
}, F.displayName = "HelmetProvider";
var Y = function(e, t) {
    var r, n = document.head || document.querySelector(b.HEAD),
      i = n.querySelectorAll(e + "[data-rh]"),
      o = [].slice.call(i),
      s = [];
    return t && t.length && t.forEach(function(t) {
      var n = document.createElement(e);
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && ("innerHTML" === i ? n.innerHTML = t.innerHTML : "cssText" === i ? n.styleSheet ? n.styleSheet.cssText = t.cssText : n.appendChild(document.createTextNode(t.cssText)) : n.setAttribute(i, void 0 === t[i] ? "" : t[i]));
      n.setAttribute("data-rh", "true"), o.some(function(e, t) {
        return r = t, n.isEqualNode(e)
      }) ? o.splice(r, 1) : s.push(n)
    }), o.forEach(function(e) {
      return e.parentNode.removeChild(e)
    }), s.forEach(function(e) {
      return n.appendChild(e)
    }), {
      oldTags: o,
      newTags: s
    }
  },
  G = function(e, t) {
    var r = document.getElementsByTagName(e)[0];
    if (r) {
      for (var n = r.getAttribute("data-rh"), i = n ? n.split(",") : [], o = [].concat(i), s = Object.keys(t), a = 0; a < s.length; a += 1) {
        var u = s[a],
          c = t[u] || "";
        r.getAttribute(u) !== c && r.setAttribute(u, c), -1 === i.indexOf(u) && i.push(u);
        var f = o.indexOf(u); - 1 !== f && o.splice(f, 1)
      }
      for (var l = o.length - 1; l >= 0; l -= 1) r.removeAttribute(o[l]);
      i.length === o.length ? r.removeAttribute("data-rh") : r.getAttribute("data-rh") !== s.join(",") && r.setAttribute("data-rh", s.join(","))
    }
  },
  V = function(e, t) {
    var r, n, i = e.baseTag,
      o = e.htmlAttributes,
      s = e.linkTags,
      a = e.metaTags,
      u = e.noscriptTags,
      c = e.onChangeClientState,
      f = e.scriptTags,
      l = e.styleTags,
      h = e.title,
      d = e.titleAttributes;
    G(b.BODY, e.bodyAttributes), G(b.HTML, o), r = h, n = d, void 0 !== r && document.title !== r && (document.title = R(r)), G(b.TITLE, n);
    var p = {
        baseTag: Y(b.BASE, i),
        linkTags: Y(b.LINK, s),
        metaTags: Y(b.META, a),
        noscriptTags: Y(b.NOSCRIPT, u),
        scriptTags: Y(b.SCRIPT, f),
        styleTags: Y(b.STYLE, l)
      },
      v = {},
      g = {};
    Object.keys(p).forEach(function(e) {
      var t = p[e],
        r = t.newTags,
        n = t.oldTags;
      r.length && (v[e] = r), n.length && (g[e] = p[e].oldTags)
    }), t && t(), c(e, v, g)
  },
  W = null,
  X = function(e) {
    function t() {
      for (var t, r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
      return (t = e.call.apply(e, [this].concat(n)) || this).rendered = !1, t
    }
    p(t, e);
    var r = t.prototype;
    return r.shouldComponentUpdate = function(e) {
      return !h(e, this.props)
    }, r.componentDidUpdate = function() {
      this.emitChange()
    }, r.componentWillUnmount = function() {
      this.props.context.helmetInstances.remove(this), this.emitChange()
    }, r.emitChange = function() {
      var e, t, r = this.props.context,
        n = r.setHelmet,
        i = null,
        o = {
          baseTag: (e = ["href"], (t = r.helmetInstances.get().map(function(e) {
            var t = d({}, e.props);
            return delete t.context, t
          })).filter(function(e) {
            return void 0 !== e[b.BASE]
          }).map(function(e) {
            return e[b.BASE]
          }).reverse().reduce(function(t, r) {
            if (!t.length)
              for (var n = Object.keys(r), i = 0; i < n.length; i += 1) {
                var o = n[i].toLowerCase();
                if (-1 !== e.indexOf(o) && r[o]) return t.concat(r)
              }
            return t
          }, [])),
          bodyAttributes: A("bodyAttributes", t),
          defer: w(t, "defer"),
          encode: w(t, "encodeSpecialCharacters"),
          htmlAttributes: A("htmlAttributes", t),
          linkTags: z(b.LINK, ["rel", "href"], t),
          metaTags: z(b.META, ["name", "charset", "http-equiv", "property", "itemprop"], t),
          noscriptTags: z(b.NOSCRIPT, ["innerHTML"], t),
          onChangeClientState: w(t, "onChangeClientState") || function() {},
          scriptTags: z(b.SCRIPT, ["src", "innerHTML"], t),
          styleTags: z(b.STYLE, ["cssText"], t),
          title: C(t),
          titleAttributes: A("titleAttributes", t),
          prioritizeSeoTags: S(t, "prioritizeSeoTags")
        };
      F.canUseDOM ? (W && cancelAnimationFrame(W), o.defer ? W = requestAnimationFrame(function() {
        V(o, function() {
          W = null
        })
      }) : (V(o), W = null)) : N && (i = N(o)), n(i)
    }, r.init = function() {
      this.rendered || (this.rendered = !0, this.props.context.helmetInstances.add(this), this.emitChange())
    }, r.render = function() {
      return this.init(), null
    }, t
  }(n.Component);
X.propTypes = {
  context: U.isRequired
}, X.displayName = "HelmetDispatcher";
var K = ["children"],
  $ = ["children"],
  J = function(e) {
    function t() {
      return e.apply(this, arguments) || this
    }
    p(t, e);
    var r = t.prototype;
    return r.shouldComponentUpdate = function(e) {
      return !u(L(this.props, "helmetData"), L(e, "helmetData"))
    }, r.mapNestedChildrenToProps = function(e, t) {
      if (!t) return null;
      switch (e.type) {
        case b.SCRIPT:
        case b.NOSCRIPT:
          return {
            innerHTML: t
          };
        case b.STYLE:
          return {
            cssText: t
          };
        default:
          throw Error("<" + e.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
      }
    }, r.flattenArrayTypeChildren = function(e) {
      var t, r = e.child,
        n = e.arrayTypeChildren;
      return d({}, n, ((t = {})[r.type] = [].concat(n[r.type] || [], [d({}, e.newChildProps, this.mapNestedChildrenToProps(r, e.nestedChildren))]), t))
    }, r.mapObjectTypeChildren = function(e) {
      var t, r, n = e.child,
        i = e.newProps,
        o = e.newChildProps,
        s = e.nestedChildren;
      switch (n.type) {
        case b.TITLE:
          return d({}, i, ((t = {})[n.type] = s, t.titleAttributes = d({}, o), t));
        case b.BODY:
          return d({}, i, {
            bodyAttributes: d({}, o)
          });
        case b.HTML:
          return d({}, i, {
            htmlAttributes: d({}, o)
          });
        default:
          return d({}, i, ((r = {})[n.type] = d({}, o), r))
      }
    }, r.mapArrayTypeChildrenToProps = function(e, t) {
      var r = d({}, t);
      return Object.keys(e).forEach(function(t) {
        var n;
        r = d({}, r, ((n = {})[t] = e[t], n))
      }), r
    }, r.warnOnInvalidChildren = function(e, t) {
      return f(O.some(function(t) {
        return e.type === t
      }), "function" == typeof e.type ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : "Only elements types " + O.join(", ") + " are allowed. Helmet does not support rendering <" + e.type + "> elements. Refer to our API for more information."), f(!t || "string" == typeof t || Array.isArray(t) && !t.some(function(e) {
        return "string" != typeof e
      }), "Helmet expects a string as a child of <" + e.type + ">. Did you forget to wrap your children in braces? ( <" + e.type + ">{``}</" + e.type + "> ) Refer to our API for more information."), !0
    }, r.mapChildrenToProps = function(e, t) {
      var r = this,
        n = {};
      return i.Children.forEach(e, function(e) {
        if (e && e.props) {
          var i = e.props,
            o = i.children,
            s = g(i, K),
            a = Object.keys(s).reduce(function(e, t) {
              return e[E[t] || t] = s[t], e
            }, {}),
            u = e.type;
          switch ("symbol" == typeof u ? u = u.toString() : r.warnOnInvalidChildren(e, o), u) {
            case b.FRAGMENT:
              t = r.mapChildrenToProps(o, t);
              break;
            case b.LINK:
            case b.META:
            case b.NOSCRIPT:
            case b.SCRIPT:
            case b.STYLE:
              n = r.flattenArrayTypeChildren({
                child: e,
                arrayTypeChildren: n,
                newChildProps: a,
                nestedChildren: o
              });
              break;
            default:
              t = r.mapObjectTypeChildren({
                child: e,
                newProps: t,
                newChildProps: a,
                nestedChildren: o
              })
          }
        }
      }), this.mapArrayTypeChildrenToProps(n, t)
    }, r.render = function() {
      var e = this.props,
        t = e.children,
        r = g(e, $),
        n = d({}, r),
        o = r.helmetData;
      return t && (n = this.mapChildrenToProps(t, n)), !o || o instanceof _ || (o = new _(o.context, o.instances)), o ? i.createElement(X, d({}, n, {
        context: o.value,
        helmetData: void 0
      })) : i.createElement(q.Consumer, null, function(e) {
        return i.createElement(X, d({}, n, {
          context: e
        }))
      })
    }, t
  }(n.Component);
J.propTypes = {
  base: s.object,
  bodyAttributes: s.object,
  children: s.oneOfType([s.arrayOf(s.node), s.node]),
  defaultTitle: s.string,
  defer: s.bool,
  encodeSpecialCharacters: s.bool,
  htmlAttributes: s.object,
  link: s.arrayOf(s.object),
  meta: s.arrayOf(s.object),
  noscript: s.arrayOf(s.object),
  onChangeClientState: s.func,
  script: s.arrayOf(s.object),
  style: s.arrayOf(s.object),
  title: s.string,
  titleAttributes: s.object,
  titleTemplate: s.string,
  prioritizeSeoTags: s.bool,
  helmetData: s.object
}, J.defaultProps = {
  defer: !0,
  encodeSpecialCharacters: !0,
  prioritizeSeoTags: !1
}, J.displayName = "Helmet"