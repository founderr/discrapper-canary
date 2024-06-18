"use strict";
t.d(s, {
  Z: function() {
    return m
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
  _ = t(293810),
  I = t(689938),
  T = t(211340);

function N(e) {
  let {
    checked: s,
    children: t
  } = e;
  return (0, n.jsxs)("div", {
    className: T.row,
    children: [(0, n.jsx)(d.Text, {
      variant: "text-md/normal",
      color: "interactive-active",
      className: T.rowText,
      children: t
    }), s ? (0, n.jsx)(d.CircleCheckIcon, {
      size: "md",
      color: "currentColor",
      secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css,
      className: a()(T.rowIcon, T.rowIconChecked)
    }) : (0, n.jsx)("div", {
      className: a()(T.rowIcon, T.rowIconEmpty)
    })]
  })
}

function m(e) {
  let {
    children: s
  } = e, [t, l] = i.useState(!1), a = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), c = s.flatMap(e => e.items.map(e => e.completed)), m = c.filter(e => e).length / c.length, S = 1 === m, h = (0, r.useSpring)({
    width: "".concat(100 * m, "%"),
    immediate: a
  }), g = [I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LINK_PROMO_PAGE.format({
    promoPageGuideUrl: _.iv.PROMO_PAGE_GUIDE
  }), I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LINK_CASE_STUDIES.format({
    caseStudiesUrl: _.iv.CASE_STUDIES
  }), I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LINK_SUBSCRIPTION_OFFERING.format({
    subscriptionOfferingGuideUrl: _.iv.SUBSCRIPTION_OFFERING_GUIDE
  }), I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LINK_TIER_STRUCTURE.format({
    tierStructureGuideUrl: _.iv.TIER_STRUCTURE_GUIDE
  })], C = t ? null : (0, n.jsxs)(n.Fragment, {
    children: [!S && s.map((e, s) => {
      let {
        title: t,
        items: l
      } = e;
      return (0, n.jsxs)(i.Fragment, {
        children: [s > 0 && (0, n.jsx)(d.FormDivider, {
          className: T.divider
        }), (0, n.jsx)(d.FormTitle, {
          className: T.categoryTitle,
          children: t
        }), l.map((e, s) => (0, n.jsx)(N, {
          children: e.description,
          checked: e.completed
        }, s))]
      }, s)
    }), (0, n.jsx)(d.FormDivider, {
      className: T.divider
    }), (0, n.jsx)(d.FormTitle, {
      className: T.categoryTitle,
      children: I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LEARN_MORE_SECTION_TITLE
    }), g.map((e, s) => (0, n.jsx)("div", {
      className: T.row,
      children: (0, n.jsx)(d.Text, {
        variant: "text-md/normal",
        children: e
      })
    }, s))]
  });
  return (0, n.jsx)("div", {
    className: T.checklist,
    children: (0, n.jsxs)("div", {
      className: T.container,
      children: [(0, n.jsxs)(d.Clickable, {
        className: T.headerBar,
        onClick: () => l(e => !e),
        children: [(0, n.jsx)(d.Heading, {
          variant: "heading-md/semibold",
          className: T.headerText,
          children: I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_HEADER
        }), (0, n.jsx)(E.Z, {
          direction: t ? E.Z.Directions.DOWN : E.Z.Directions.UP,
          className: T.headerCaret
        })]
      }), !S && (0, n.jsx)("div", {
        className: T.progressBarOuter,
        children: (0, n.jsx)(r.animated.div, {
          className: T.progressBarInner,
          style: h
        })
      }), C]
    })
  })
}