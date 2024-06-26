"use strict";
n.d(t, {
  c4: function() {
    return f
  },
  st: function() {
    return S
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(718922),
  l = n(442837),
  u = n(481060),
  _ = n(292419),
  c = n(282397),
  d = n(188597),
  E = n(981631),
  I = n(689938),
  T = n(72575);

function h(e) {
  return {
    text: e,
    icon: (0, i.jsx)(u.Dots, {
      className: T.icon,
      dotRadius: 3.5,
      themed: !0
    })
  }
}

function f(e) {
  return {
    text: null != e ? e : I.Z.Messages.APPLICATION_COMMAND_FAILED,
    color: "text-danger",
    icon: (0, i.jsx)(u.CircleExclamationPointIcon, {
      size: "xs",
      color: "currentColor",
      className: o()(T.icon, T.errorIcon)
    })
  }
}

function S(e) {
  let {
    className: t,
    icon: n,
    text: r,
    color: s
  } = e;
  return (0, i.jsxs)("div", {
    className: o()(T.wrapper, t),
    children: [n, (0, i.jsx)(u.Text, {
      variant: "text-md/normal",
      color: s,
      scaleFontToUserSetting: !0,
      children: r
    })]
  })
}
t.ZP = r.memo(function(e) {
  let {
    message: t,
    className: n,
    component: s
  } = e, o = (0, a.Z)(), u = (0, l.e7)([c.Z], () => c.Z.getInteraction(t), [t]);
  r.useEffect(() => {
    let e = null;
    if (t.hasFlag(E.iLy.LOADING) && null != u) {
      let n = (0, d.ow)(t.id) - Date.now();
      n > 0 && (e = setTimeout(() => o(), 1e3 + n))
    }
    return () => {
      clearTimeout(e)
    }
  }, [o, u, t]);
  let T = null;
  if (null == s) T = function(e, t) {
    switch ((0, d.t$)(t, e)) {
      case d.rQ.SENDING:
        return h(I.Z.Messages.APPLICATION_COMMAND_SENDING);
      case d.rQ.CREATED:
        return h(I.Z.Messages.APPLICATION_COMMAND_WAITING.format({
          applicationName: t.author.username
        }));
      case d.rQ.TIMED_OUT:
        return f(I.Z.Messages.APPLICATION_COMMAND_TIMED_OUT);
      case d.rQ.FAILED:
        return f(t.interactionError)
    }
  }(u, t);
  else {
    let e = (0, _.SD)(u, t, s);
    null != e && (T = f(e))
  }
  if (null == T) return null;
  let {
    text: N,
    icon: A,
    color: m
  } = T;
  return (0, i.jsx)(S, {
    icon: A,
    text: N,
    className: n,
    color: m
  })
})