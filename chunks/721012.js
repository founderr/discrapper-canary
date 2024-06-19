s.d(t, {
  Z: function() {
    return h
  },
  i: function() {
    return _
  }
}), s(47120);
var a = s(735250),
  i = s(470079),
  n = s(120356),
  r = s.n(n),
  o = s(920906),
  l = s(442837),
  c = s(481060),
  d = s(607070),
  m = s(671533),
  u = s(689938),
  N = s(993071);

function h(e) {
  let {
    message: t,
    adminTitle: s,
    profilePic: i,
    emphasisColor: n = "interactive-normal",
    arrowPosition: o,
    className: l
  } = e;
  return (0, a.jsxs)("div", {
    className: r()(N.testimonialContainer, l),
    children: [(0, a.jsx)(x, {
      testimonial: {
        message: t,
        adminTitle: s,
        profilePic: i,
        emphasisColor: n
      }
    }), (0, a.jsx)(c.Text, {
      variant: "text-lg/bold",
      className: N.quotes,
      children: "“"
    }), (0, a.jsx)("div", {
      className: r()(N.arrow, {
        [N.arrowRight]: "right" === o,
        [N.arrowLeft]: "left" === o
      }),
      children: (0, a.jsx)(I, {})
    })]
  })
}

function x(e) {
  let {
    testimonial: t,
    className: s
  } = e, {
    message: i,
    profilePic: n,
    adminTitle: r,
    emphasisColor: o = "interactive-normal"
  } = t;
  return (0, a.jsxs)("div", {
    className: s,
    children: [(0, a.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      children: i.format({
        testimonialHook: (e, t) => (0, a.jsx)(c.Text, {
          tag: "span",
          variant: "text-sm/bold",
          color: o,
          children: e
        }, t)
      })
    }), (0, a.jsxs)("div", {
      className: N.userContainer,
      children: [(0, a.jsx)(c.Avatar, {
        src: n,
        size: c.AvatarSizes.SIZE_16,
        "aria-hidden": !0
      }), (0, a.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: r
      })]
    })]
  })
}

function I() {
  return (0, a.jsx)("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, a.jsx)("path", {
      d: "M11.5 0.662598H0L11.5 19.1626V0.662598Z",
      fill: "#2B2D31"
    })
  })
}

function _(e) {
  let {
    testimonials: t
  } = e, [
    [s, n], r
  ] = i.useState([0, "right"]), o = i.useCallback(() => {
    r(e => {
      let [s] = e;
      return 0 === s ? [t.length - 1, "left"] : [s - 1, "left"]
    })
  }, [r, t.length]), l = i.useCallback(() => {
    r(e => {
      let [s] = e;
      return [(s + 1) % t.length, "right"]
    })
  }, [r, t.length]), d = t[s], h = i.useCallback((e, t, s, i) => (0, a.jsx)(j, {
    item: t,
    state: s,
    cleanup: i,
    direction: n
  }, e), [n]);
  return (0, a.jsxs)("div", {
    className: N.testimonialHeroContainer,
    children: [(0, a.jsx)("div", {
      className: N.animatedContainer,
      children: (0, a.jsx)(c.TransitionGroup, {
        items: [d],
        renderItem: h,
        getItemKey: e => e.adminTitle
      })
    }), (0, a.jsx)(c.Text, {
      variant: "text-lg/bold",
      className: N.heroQuotes,
      children: "“"
    }), (0, a.jsxs)("div", {
      className: N.testimonialsControls,
      children: [(0, a.jsxs)(c.Button, {
        className: N.testimonialControl,
        innerClassName: N.testimonialControlInner,
        onClick: o,
        size: c.Button.Sizes.MIN,
        color: c.Button.Colors.PRIMARY,
        children: [(0, a.jsx)(m.Z, {
          className: N.testimonialControlIcon,
          direction: m.Z.Directions.LEFT
        }), (0, a.jsx)(c.HiddenVisually, {
          children: u.Z.Messages.BACK
        })]
      }), (0, a.jsxs)(c.Button, {
        className: N.testimonialControl,
        innerClassName: N.testimonialControlInner,
        onClick: l,
        size: c.Button.Sizes.MIN,
        color: c.Button.Colors.PRIMARY,
        children: [(0, a.jsx)(m.Z, {
          className: N.testimonialControlIcon,
          direction: m.Z.Directions.RIGHT
        }), (0, a.jsx)(c.HiddenVisually, {
          children: u.Z.Messages.NEXT
        })]
      })]
    })]
  })
}

function j(e) {
  let {
    item: t,
    state: s,
    cleanup: i,
    direction: n
  } = e, r = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), [m] = (0, o.useSpring)(() => {
    switch (s) {
      case c.TransitionStates.ENTERED:
        return {
          from: {
            transform: "right" === n ? "translateX(150%)" : "translate(-150%)"
          }, to: {
            transform: "translateX(0%)"
          }, immediate: r
        };
      case c.TransitionStates.YEETED:
        return {
          from: {
            transform: "translateX(0%)"
          }, to: {
            transform: "right" === n ? "translateX(-150%)" : "translate(150%)"
          }, immediate: r, onRest: i
        };
      default:
        return {}
    }
  }, [s]);
  return (0, a.jsx)(o.animated.div, {
    style: m,
    children: (0, a.jsx)(x, {
      className: N.testimonial,
      testimonial: t
    })
  })
}