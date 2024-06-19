n.r(t), n(47120);
var a = n(735250),
  r = n(470079),
  o = n(830064),
  s = n(702493),
  l = n(77987),
  u = n(133853),
  i = n(703656),
  c = n(643366),
  d = n(94628),
  E = n(659154),
  I = n(902928),
  C = n(240479),
  _ = n(981631),
  A = n(857628);
t.default = (0, l.e)(function() {
  let e;
  let [t, n] = r.useState({
    type: "user-code-input",
    usePrefilledCode: !0
  });
  (0, s.Z)(), (0, c.Y)(t);
  let l = r.useCallback(() => {
      n({
        type: "user-code-input"
      })
    }, [n]),
    T = r.useCallback(e => {
      n({
        type: "authorization",
        userCodeData: e
      })
    }, [n]),
    f = r.useCallback(e => {
      n({
        type: "success",
        userCodeData: e
      })
    }, [n]),
    h = r.useCallback(e => {
      n({
        type: "error",
        userCodeData: e
      })
    }, [n]);
  switch (t.type) {
    case "user-code-input":
      e = (0, a.jsx)(C.v, {
        usePrefilledCode: t.usePrefilledCode || !1,
        onUserCodeAccepted: T
      });
      break;
    case "authorization":
      e = (0, a.jsx)(d.B, {
        data: t.userCodeData,
        onDenied: l,
        onError: h,
        onSuccess: f
      });
      break;
    case "success":
      e = (0, a.jsx)(I.u, {
        onComplete: () => (0, i.uL)(_.Z5c.ME),
        data: t.userCodeData
      });
      break;
    case "error":
      e = (0, a.jsx)(E.c, {
        onTryAgain: l
      });
      break;
    default:
      e = null
  }
  return (0, a.jsxs)("div", {
    className: A.activatePage,
    children: [(0, a.jsx)(o.Z, {
      className: A.artwork,
      preserveAspectRatio: "xMinYMin slice"
    }), (0, a.jsx)(u.Z, {
      show: !0,
      className: A.logo
    }), (0, a.jsx)("div", {
      className: A.content,
      children: e
    })]
  })
})