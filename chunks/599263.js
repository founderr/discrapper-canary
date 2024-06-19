s.r(t), s.d(t, {
  default: function() {
    return B
  }
}), s(47120);
var n = s(735250),
  r = s(470079),
  l = s(120356),
  i = s.n(l),
  o = s(920906),
  a = s(442837),
  d = s(481060),
  c = s(749210),
  u = s(830064),
  m = s(393238),
  h = s(607070),
  x = s(480608),
  g = s(160404),
  p = s(703656),
  N = s(430824),
  E = s(257915),
  I = s(768581),
  f = s(302221),
  Z = s(956664),
  j = s(549817),
  v = s(45966),
  O = s(819553),
  C = s(548473),
  R = s(15320),
  b = s(973051),
  _ = s(981631),
  D = s(689938),
  M = s(749153);
async function T(e) {
  let t = await new Promise((t, s) => {
    let n = new Image;
    n.crossOrigin = "Anonymous", n.onerror = e => {
      s(e), n.onerror = n.onload = null, n = null
    }, n.onload = () => {
      t((0, Z.XN)(n, 2, 10)), n.onerror = n.onload = null, n = null
    }, n.src = e
  });
  return null == t ? void 0 : t.map(e => {
    let [t, s, n] = e;
    return (0, f.vq)(t, s, n)
  })
}

function B(e) {
  let {
    guildId: t
  } = e, s = (0, a.e7)([h.Z], () => h.Z.useReducedMotion), {
    ref: l,
    width: Z,
    height: B
  } = (0, m.Z)(), [P, k] = r.useState(), L = (0, a.Wu)([v.Z], () => v.Z.getOnboardingPromptsForOnboarding(t)), S = (0, a.e7)([v.Z], () => v.Z.getEnabled(t)), A = r.useCallback((e, s, n) => {
    j.Z.selectOption(t, e, s, n)
  }, [t]), U = r.useCallback(() => {
    j.Z.completeOnboarding(t, L)
  }, [t, L]), F = (0, a.e7)([N.Z], () => N.Z.getGuild(t)), w = r.useMemo(() => null == F ? null : I.ZP.getGuildSplashURL({
    id: F.id,
    splash: F.splash
  }), [F]), G = (0, a.e7)([O.ZP], () => O.ZP.getCurrentOnboardingStep(t)), [H, q] = r.useState(null != w ? null : "cover");
  null != w && null == P && T(w).then(e => {
    k(e[0])
  });
  let y = r.useCallback(e => {
      q(G), j.Z.setUserOnboardingStep(t, e)
    }, [t, G]),
    z = (0, a.e7)([g.Z], () => g.Z.isFullServerPreview(t)),
    V = (0, a.e7)([O.ZP], () => O.ZP.getOnboardingStatus(t)),
    Y = null != L && L.length > 0,
    Q = r.useCallback(() => {
      (0, O.kp)(V) && S && Y ? y(0) : U()
    }, [V, S, Y, y, U]);
  r.useEffect(() => {
    if (!O.ZP.shouldShowOnboarding(t)) return c.Z.escapeToDefaultChannel(t);
    (0, x.E)(t)
  }, [t]);
  let W = (0, o.useTransition)(G, {
      config: o.config.default,
      from: {
        scale: .8,
        opacity: 0
      },
      enter: {
        scale: 1,
        opacity: 1
      },
      immediate: s || "cover" !== H && null !== H
    }),
    X = O.ZP.shouldShowOnboarding(t),
    K = null == F;
  if (r.useEffect(() => {
      if (!X || K) {
        let e = setTimeout(() => {
          (0, p.uL)(_.Z5c.CHANNEL(t))
        }, 1e3);
        return () => clearTimeout(e)
      }
    }, [X, K, t]), !O.ZP.shouldShowOnboarding(t) || null == F) return null;
  let J = () => {
    switch (G) {
      case "cover":
        return (0, n.jsx)(C.ZP, {
          guild: F,
          onboardingStatus: O.uX.READY,
          onStart: Q,
          disableTracking: z
        });
      case "rules":
        return (0, n.jsx)(b.Z, {
          setCurrentStep: y,
          previousPromptIndex: L.length - 1,
          guild: F,
          prompts: L,
          completeOnboarding: U,
          disableTracking: z
        });
      case null:
        return null;
      default:
        return (0, n.jsx)(R.Z, {
          guild: F,
          prompts: L,
          step: G,
          selectOption: A,
          completeOnboarding: U,
          setCurrentStep: y,
          disableTracking: z
        })
    }
  };
  return (0, n.jsxs)("div", {
    className: M.main,
    ref: l,
    children: [null != w ? (0, n.jsx)(E.Z, {
      className: i()(M.artwork),
      src: w,
      width: Z,
      height: B,
      imageClassName: M.cover
    }) : (0, n.jsx)(u.Z, {
      className: M.artwork,
      preserveAspectRatio: "xMinYMin slice"
    }), null != P && (0, n.jsx)("div", {
      className: M.gradient,
      style: {
        background: "linear-gradient(180deg, ".concat((0, f.aD)(P, .16), " 0%, ").concat((0, f.aD)(P, 1), " 100%)")
      }
    }), (0, n.jsx)("div", {
      className: M.gradient
    }), W((e, t, s) => {
      let {
        key: r
      } = s;
      return (0, n.jsx)(o.animated.div, {
        style: e,
        children: J()
      }, r)
    }), "cover" === G && (0, n.jsx)("div", {
      className: M.bottomCenterContent,
      children: (0, n.jsx)(d.Heading, {
        variant: "heading-sm/normal",
        color: "header-secondary",
        children: D.Z.Messages.ONBOARDING_COVER_PRIVACY_POLICY.format({
          privacyLink: _.EYA.PRIVACY
        })
      })
    })]
  })
}