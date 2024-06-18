"use strict";
n.d(t, {
  F: function() {
    return c
  },
  Y: function() {
    return _
  }
});
var i = n(735250),
  r = n(470079),
  s = n(772848),
  o = n(993365),
  a = n(481060),
  l = n(561466),
  u = n(354603);

function _(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.si,
    {
      position: i = l.si.position,
      component: r = l.si.component,
      duration: o = l.si.duration
    } = n;
  return {
    message: e,
    id: (0, s.Z)(),
    type: t,
    options: {
      position: i,
      component: r,
      duration: o
    }
  }
}
let c = r.memo(function(e) {
  let {
    message: t,
    type: n,
    id: r,
    options: {
      component: s = l.si.component
    } = l.si
  } = e;
  return null != s ? (0, i.jsx)(i.Fragment, {
    children: s
  }) : (0, i.jsxs)("div", {
    id: r,
    className: u.toast,
    children: [function(e) {
      switch (e) {
        case l.pC.SUCCESS:
          return (0, i.jsx)(a.CheckmarkLargeIcon, {
            size: "md",
            className: u.icon,
            color: a.tokens.colors.STATUS_POSITIVE.css
          });
        case l.pC.FAILURE:
          return (0, i.jsx)(a.CloseLargeIcon, {
            size: "md",
            className: u.icon,
            color: a.tokens.colors.STATUS_DANGER.css
          });
        case l.pC.CLIP:
          return (0, i.jsx)(a.ClipsIcon, {
            size: "xs",
            className: u.clipIcon,
            color: a.tokens.colors.HEADER_PRIMARY.css
          });
        case l.pC.LINK:
          return (0, i.jsx)(a.LinkIcon, {
            className: u.icon,
            color: a.tokens.colors.HEADER_PRIMARY.css
          });
        case l.pC.FORWARD:
          return (0, i.jsx)(a.ChatArrowRightIcon, {
            className: u.icon,
            color: a.tokens.colors.STATUS_POSITIVE.css
          });
        default:
          return null
      }
    }(n), (0, i.jsx)(o.x, {
      className: u.__invalid_content,
      color: "header-primary",
      variant: "text-md/normal",
      children: t
    })]
  })
})