n.d(t, {
  M9: function() {
    return C
  },
  Pb: function() {
    return f
  },
  XX: function() {
    return E
  },
  ZP: function() {
    return _
  },
  ZT: function() {
    return h
  },
  iv: function() {
    return g
  },
  pk: function() {
    return p
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(392711),
  r = n.n(a),
  o = n(481060),
  c = n(778143);

function u(e) {
  return "".concat(e / 16, "rem")
}

function d() {
  return (0, l.jsx)("div", {
    className: c.avatar,
    style: {
      opacity: .08
    }
  })
}

function h(e) {
  let {
    width: t,
    opacity: n,
    className: i
  } = e;
  return (0, l.jsx)("div", {
    className: s()(i, {
      [c.blob]: !0
    }),
    style: {
      width: u(t),
      opacity: null != n ? n : r().random(.02, .08)
    }
  })
}

function m(e) {
  let t, {
      groupStart: n = !1,
      compact: i = !1,
      attachmentSpecs: a,
      usernameWidth: u,
      usernameOpacity: m,
      className: p,
      style: E
    } = e,
    g = i ? 50 : r().random(40, 50);
  return !i && n ? t = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(d, {}), (0, l.jsx)(o.H, {
      className: c.header,
      children: (0, l.jsx)(h, {
        width: u,
        opacity: m,
        className: c.__invalid_username
      })
    })]
  }) : i && (t = (0, l.jsxs)(l.Fragment, {
    children: [i && (0, l.jsx)(h, {
      width: g,
      className: s()({
        [c.compactTimestamp]: !0,
        [c.hidden]: !n
      })
    }), (0, l.jsx)(o.H, {
      className: c.header,
      children: (0, l.jsx)(h, {
        width: u,
        opacity: m
      })
    })]
  })), (0, l.jsxs)("div", {
    "aria-hidden": !0,
    className: s()(p, {
      [c.wrapper]: !0,
      [c.compact]: i,
      [c.cozy]: !i
    }),
    style: E,
    children: [(0, l.jsxs)("div", {
      className: c.contents,
      children: [t, (0, l.jsx)("div", {
        className: c.content,
        children: Array(r().random(3, 8)).fill(null).map(() => r().random(30, 80)).map((e, t) => (0, l.jsx)(h, {
          width: e,
          opacity: .06
        }, t))
      })]
    }), null != a && (0, l.jsx)("div", {
      className: c.attachmentContainer,
      children: (0, l.jsx)("div", {
        className: c.attachment,
        style: {
          opacity: .03,
          ...a
        }
      })
    })]
  })
}
let p = 44,
  E = 22,
  g = 26,
  f = 26,
  C = 6;

function _(e) {
  let {
    messages: t,
    groupSpacing: n = 0,
    compact: i = !1,
    attachmentSpecs: s,
    className: a
  } = e, o = null != s ? s.last ? t - 1 : r().random(0, t - 1) : -1, c = r().random(80, 120), d = r().random(.1, .2);
  return (0, l.jsx)(l.Fragment, {
    children: Array(t).fill(null).map((e, t) => (0, l.jsx)(m, {
      compact: i,
      className: a,
      usernameWidth: c,
      usernameOpacity: d,
      groupStart: 0 === t,
      attachmentSpecs: t === o ? s : void 0,
      style: 0 === t ? {
        marginTop: u(n)
      } : void 0
    }, t))
  })
}