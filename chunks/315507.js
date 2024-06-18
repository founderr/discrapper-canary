"use strict";
t.d(s, {
  Z: function() {
    return T
  }
}), t(47120), t(390547);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(920906),
  o = t(442837),
  c = t(692547),
  d = t(481060),
  u = t(607070),
  E = t(259580),
  _ = t(295612);

function I(e) {
  let {
    checked: s,
    children: t
  } = e;
  return (0, n.jsxs)("div", {
    className: _.row,
    children: [(0, n.jsx)(d.Text, {
      variant: "text-md/normal",
      color: "interactive-active",
      className: _.rowText,
      children: t
    }), s ? (0, n.jsx)(d.CircleCheckIcon, {
      size: "md",
      color: "currentColor",
      secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css,
      className: a()(_.rowIcon, _.rowIconChecked)
    }) : (0, n.jsx)("div", {
      className: a()(_.rowIcon, _.rowIconEmpty)
    })]
  })
}

function T(e) {
  let {
    title: s,
    children: t,
    buttonLabel: l,
    buttonCallback: a,
    disabled: c
  } = e, [T, N] = i.useState(!1), m = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), S = t.flatMap(e => e.items.map(e => e.completed)), h = S.filter(e => e).length / S.length, g = (0, r.useSpring)({
    width: "".concat(100 * h, "%"),
    immediate: m
  });
  return (0, n.jsxs)("div", {
    className: _.container,
    children: [(0, n.jsxs)(d.Clickable, {
      className: _.headerBar,
      onClick: () => N(e => !e),
      children: [(0, n.jsx)(d.Heading, {
        variant: "heading-md/semibold",
        className: _.headerText,
        children: s
      }), (0, n.jsx)(E.Z, {
        direction: T ? E.Z.Directions.DOWN : E.Z.Directions.UP,
        className: _.headerCaret
      })]
    }), (0, n.jsx)("div", {
      className: _.progressBarOuter,
      children: (0, n.jsx)(r.animated.div, {
        className: _.progressBarInner,
        style: g
      })
    }), !T && t.map((e, s) => {
      let {
        title: t,
        items: l
      } = e;
      return (0, n.jsxs)(i.Fragment, {
        children: [s > 0 && (0, n.jsx)(d.FormDivider, {
          className: _.divider
        }), (0, n.jsx)(d.FormTitle, {
          className: _.categoryTitle,
          children: t
        }), l.map((e, s) => (0, n.jsx)(I, {
          children: e.description,
          checked: e.completed
        }, s))]
      }, s)
    }), null !== l && "" !== l && null !== a && (0, n.jsxs)("div", {
      children: [(0, n.jsx)(d.FormDivider, {
        className: _.divider
      }), (0, n.jsx)(d.Button, {
        className: _.button,
        size: d.Button.Sizes.SMALL,
        color: d.Button.Colors.BRAND,
        onClick: a,
        disabled: 1 !== h || c,
        children: l
      })]
    })]
  })
}