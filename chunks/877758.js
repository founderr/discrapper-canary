n.d(t, {
  Z: function() {
    return i
  }
});
var s = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  l = n(785997),
  o = n(880173);

function i(e) {
  let {
    step: t
  } = e, n = t === l.F.AGE_GATE, a = t === l.F.CHOOSE_TEMPLATE || t === l.F.CREATION_INTENT, i = t === l.F.CUSTOMIZE_GUILD, c = t === l.F.CHANNEL_PROMPT || t === l.F.JOIN_GUILD, d = i || c, u = a || d;
  return (0, s.jsxs)("div", {
    className: o.sidebar,
    children: [(0, s.jsx)("div", {
      className: r()(o.step1, {
        [o.show]: n
      })
    }), (0, s.jsx)("div", {
      className: r()(o.step24Clouds, {
        [o.show]: u
      })
    }), (0, s.jsx)("div", {
      className: r()(o.step34Flag, {
        [o.show]: d
      })
    }), (0, s.jsx)("div", {
      className: r()(o.step24Base, {
        [o.show]: u
      })
    }), (0, s.jsx)("div", {
      className: r()(o.step24Ground, {
        [o.show]: u
      })
    }), (0, s.jsx)("div", {
      className: r()(o.step2Base, {
        [o.show]: a
      })
    }), (0, s.jsx)("div", {
      className: r()(o.step2Character, {
        [o.show]: a
      })
    }), (0, s.jsx)("div", {
      className: r()(o.step34Base, {
        [o.show]: d
      })
    }), (0, s.jsx)("div", {
      className: r()(o.step3Character, {
        [o.show]: i
      })
    }), (0, s.jsx)("div", {
      className: r()(o.step4Character, {
        [o.show]: c
      })
    }), (0, s.jsx)("div", {
      className: r()(o.step24Foreground, {
        [o.show]: u
      })
    })]
  })
}