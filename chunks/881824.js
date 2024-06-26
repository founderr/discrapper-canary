"use strict";
n.d(t, {
  $Q: function() {
    return T
  },
  Ev: function() {
    return I
  },
  Gy: function() {
    return A
  },
  R5: function() {
    return N
  },
  T: function() {
    return E
  },
  Us: function() {
    return f
  },
  Zl: function() {
    return S
  },
  vu: function() {
    return h
  }
});
var i = n(735250);
n(470079);
var r = n(952265),
  s = n(359110),
  o = n(314897),
  a = n(88751),
  l = n(427679),
  u = n(513449),
  _ = n(930180),
  c = n(981631),
  d = n(602091);

function E(e, t) {
  (0, r.ZD)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("68241"), n.e("39185")]).then(n.bind(n, 581355));
    return n => (0, i.jsx)(t, {
      ...n,
      channel: e
    })
  }, {
    contextKey: t === c.IlC.POPOUT ? d.u1 : d.z1
  })
}

function I(e, t) {
  (0, r.ZD)(async () => {
    let {
      default: t
    } = await n.e("2634").then(n.bind(n, 548841));
    return n => (0, i.jsx)(t, {
      ...n,
      channel: e
    })
  }, {
    contextKey: t === c.IlC.POPOUT ? d.u1 : d.z1
  })
}

function T(e) {}

function h(e, t) {
  (0, r.ZD)(async () => {
    let {
      default: r
    } = await n.e("1906").then(n.bind(n, 854510));
    return n => (0, i.jsx)(r, {
      ...n,
      channel: e,
      onAccept: t
    })
  })
}

function f(e, t) {
  (0, r.ZD)(async () => {
    let {
      default: t
    } = await n.e("85885").then(n.bind(n, 124779));
    return n => (0, i.jsx)(t, {
      ...n,
      channel: e
    })
  }, {
    contextKey: t === c.IlC.POPOUT ? d.u1 : d.z1
  })
}

function S(e) {
  let t = o.default.getId(),
    n = (0, _.Z7)(e);
  return !a.ZP.isModerator(t, e) && n > 0
}

function N(e, t) {
  var _;
  let c = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  t !== e.id && (0, u.Ku)(!0), _ = e, (0, s.Kh)(_.id), t !== e.id && c && ! function(e) {
    let t = o.default.getId(),
      s = a.ZP.isModerator(t, e.id),
      u = l.Z.isLive(e.id);
    s && !u ? E(e) : s && u && function(e) {
      (0, r.ZD)(async () => {
        let {
          default: t
        } = await n.e("84686").then(n.bind(n, 665111));
        return n => (0, i.jsx)(t, {
          ...n,
          channel: e
        })
      })
    }(e)
  }(e)
}

function A(e, t) {
  return (0, r.ZD)(async () => {
    let {
      default: r
    } = await n.e("65045").then(n.bind(n, 143782));
    return n => (0, i.jsx)(r, {
      channel: e,
      onConfirm: t,
      ...n
    })
  }), !0
}