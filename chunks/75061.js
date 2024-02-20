"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  },
  TestimonialHero: function() {
    return O
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("907002"),
  d = n("446674"),
  o = n("77078"),
  u = n("206230"),
  c = n("246053"),
  N = n("782340"),
  _ = n("148143");

function I(e) {
  let {
    message: t,
    adminTitle: n,
    profilePic: l,
    emphasisColor: s = "interactive-normal",
    arrowPosition: r,
    className: d
  } = e;
  return (0, a.jsxs)("div", {
    className: i(_.testimonialContainer, d),
    children: [(0, a.jsx)(E, {
      testimonial: {
        message: t,
        adminTitle: n,
        profilePic: l,
        emphasisColor: s
      }
    }), (0, a.jsx)(o.Text, {
      variant: "text-lg/bold",
      className: _.quotes,
      children: "“"
    }), (0, a.jsx)("div", {
      className: i(_.arrow, {
        [_.arrowRight]: "right" === r,
        [_.arrowLeft]: "left" === r
      }),
      children: (0, a.jsx)(f, {})
    })]
  })
}

function E(e) {
  let {
    testimonial: t,
    className: n
  } = e, {
    message: l,
    profilePic: s,
    adminTitle: i,
    emphasisColor: r = "interactive-normal"
  } = t;
  return (0, a.jsxs)("div", {
    className: n,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      children: l.format({
        testimonialHook: (e, t) => (0, a.jsx)(o.Text, {
          tag: "span",
          variant: "text-sm/bold",
          color: r,
          children: e
        }, t)
      })
    }), (0, a.jsxs)("div", {
      className: _.userContainer,
      children: [(0, a.jsx)(o.Avatar, {
        src: s,
        size: o.AvatarSizes.SIZE_16,
        "aria-hidden": !0
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: i
      })]
    })]
  })
}

function f() {
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

function O(e) {
  let {
    testimonials: t
  } = e, [
    [n, s], i
  ] = l.useState([0, "right"]), r = l.useCallback(() => {
    i(e => {
      let [n] = e;
      return 0 === n ? [t.length - 1, "left"] : [n - 1, "left"]
    })
  }, [i, t.length]), d = l.useCallback(() => {
    i(e => {
      let [n] = e;
      return [(n + 1) % t.length, "right"]
    })
  }, [i, t.length]), u = t[n], I = l.useCallback((e, t, n, l) => (0, a.jsx)(S, {
    item: t,
    state: n,
    cleanup: l,
    direction: s
  }, e), [s]);
  return (0, a.jsxs)("div", {
    className: _.testimonialHeroContainer,
    children: [(0, a.jsx)("div", {
      className: _.animatedContainer,
      children: (0, a.jsx)(o.TransitionGroup, {
        items: [u],
        renderItem: I,
        getItemKey: e => e.adminTitle
      })
    }), (0, a.jsx)(o.Text, {
      variant: "text-lg/bold",
      className: _.heroQuotes,
      children: "“"
    }), (0, a.jsxs)("div", {
      className: _.testimonialsControls,
      children: [(0, a.jsxs)(o.Button, {
        className: _.testimonialControl,
        innerClassName: _.testimonialControlInner,
        onClick: r,
        size: o.Button.Sizes.MIN,
        color: o.Button.Colors.PRIMARY,
        children: [(0, a.jsx)(c.default, {
          className: _.testimonialControlIcon,
          direction: c.default.Directions.LEFT
        }), (0, a.jsx)(o.HiddenVisually, {
          children: N.default.Messages.BACK
        })]
      }), (0, a.jsxs)(o.Button, {
        className: _.testimonialControl,
        innerClassName: _.testimonialControlInner,
        onClick: d,
        size: o.Button.Sizes.MIN,
        color: o.Button.Colors.PRIMARY,
        children: [(0, a.jsx)(c.default, {
          className: _.testimonialControlIcon,
          direction: c.default.Directions.RIGHT
        }), (0, a.jsx)(o.HiddenVisually, {
          children: N.default.Messages.NEXT
        })]
      })]
    })]
  })
}

function S(e) {
  let {
    item: t,
    state: n,
    cleanup: l,
    direction: s
  } = e, i = (0, d.useStateFromStores)([u.default], () => u.default.useReducedMotion), [c] = (0, r.useSpring)(() => {
    switch (n) {
      case o.TransitionStates.ENTERED:
        return {
          from: {
            transform: "right" === s ? "translateX(150%)" : "translate(-150%)"
          }, to: {
            transform: "translateX(0%)"
          }, immediate: i
        };
      case o.TransitionStates.YEETED:
        return {
          from: {
            transform: "translateX(0%)"
          }, to: {
            transform: "right" === s ? "translateX(-150%)" : "translate(150%)"
          }, immediate: i, onRest: l
        };
      default:
        return {}
    }
  }, [n]);
  return (0, a.jsx)(r.animated.div, {
    style: c,
    children: (0, a.jsx)(E, {
      className: _.testimonial,
      testimonial: t
    })
  })
}