"use strict";
n.r(t), n.d(t, {
  popperGenerator: function() {
    return p
  }
}), n("424973");
var r = n("114716"),
  a = n("31644"),
  o = n("403468"),
  i = n("986257"),
  u = n("394442"),
  s = n("683857"),
  l = n("914997"),
  c = n("753671"),
  f = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

function d() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(e) {
    return !(e && "function" == typeof e.getBoundingClientRect)
  })
}

function p(e) {
  void 0 === e && (e = {});
  var t = e,
    n = t.defaultModifiers,
    p = void 0 === n ? [] : n,
    h = t.defaultOptions,
    m = void 0 === h ? f : h;
  return function(e, t, n) {
    void 0 === n && (n = m);
    var h = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, f, m),
        modifiersData: {},
        elements: {
          reference: e,
          popper: t
        },
        attributes: {},
        styles: {}
      },
      _ = [],
      y = !1,
      g = {
        state: h,
        setOptions: function(n) {
          var r = "function" == typeof n ? n(h.options) : n;
          v(), h.options = Object.assign({}, m, h.options, r), h.scrollParents = {
            reference: (0, c.isElement)(e) ? (0, o.default)(e) : e.contextElement ? (0, o.default)(e.contextElement) : [],
            popper: (0, o.default)(t)
          };
          var a = (0, u.default)((0, l.default)([].concat(p, h.options.modifiers)));
          return h.orderedModifiers = a.filter(function(e) {
              return e.enabled
            }),
            function() {
              h.orderedModifiers.forEach(function(e) {
                var t = e.name,
                  n = e.options,
                  r = e.effect;
                if ("function" == typeof r) {
                  var a = r({
                    state: h,
                    name: t,
                    instance: g,
                    options: void 0 === n ? {} : n
                  });
                  _.push(a || function() {})
                }
              })
            }(), g.update()
        },
        forceUpdate: function() {
          if (!y) {
            var e = h.elements,
              t = e.reference,
              n = e.popper;
            if (d(t, n)) {
              h.rects = {
                reference: (0, r.default)(t, (0, i.default)(n), "fixed" === h.options.strategy),
                popper: (0, a.default)(n)
              }, h.reset = !1, h.placement = h.options.placement, h.orderedModifiers.forEach(function(e) {
                return h.modifiersData[e.name] = Object.assign({}, e.data)
              });
              for (var o = 0; o < h.orderedModifiers.length; o++) {
                if (!0 === h.reset) {
                  h.reset = !1, o = -1;
                  continue
                }
                var u = h.orderedModifiers[o],
                  s = u.fn,
                  l = u.options,
                  c = void 0 === l ? {} : l,
                  f = u.name;
                "function" == typeof s && (h = s({
                  state: h,
                  options: c,
                  name: f,
                  instance: g
                }) || h)
              }
            }
          }
        },
        update: (0, s.default)(function() {
          return new Promise(function(e) {
            g.forceUpdate(), e(h)
          })
        }),
        destroy: function() {
          v(), y = !0
        }
      };
    if (!d(e, t)) return g;
    g.setOptions(n).then(function(e) {
      !y && n.onFirstUpdate && n.onFirstUpdate(e)
    });

    function v() {
      _.forEach(function(e) {
        return e()
      }), _ = []
    }
    return g
  }
}