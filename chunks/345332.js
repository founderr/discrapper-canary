"use strict";
n.r(t), n.d(t, {
  Toast: function() {
    return f
  },
  createToast: function() {
    return T
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("153832"),
  a = n("59262"),
  o = n("632140"),
  l = n("993365"),
  u = n("481060"),
  d = n("529653"),
  _ = n("502283"),
  c = n("525241"),
  E = n("561466"),
  I = n("140139");

function T(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.TOAST_DEFAULT_OPTIONS,
    {
      position: i = E.TOAST_DEFAULT_OPTIONS.position,
      component: r = E.TOAST_DEFAULT_OPTIONS.component,
      duration: a = E.TOAST_DEFAULT_OPTIONS.duration
    } = n;
  return {
    message: e,
    id: (0, s.v4)(),
    type: t,
    options: {
      position: i,
      component: r,
      duration: a
    }
  }
}
let f = r.memo(function(e) {
  let {
    message: t,
    type: n,
    id: r,
    options: {
      component: s = E.TOAST_DEFAULT_OPTIONS.component
    } = E.TOAST_DEFAULT_OPTIONS
  } = e;
  return null != s ? (0, i.jsx)(i.Fragment, {
    children: s
  }) : (0, i.jsxs)("div", {
    id: r,
    className: I.toast,
    children: [function(e) {
      switch (e) {
        case E.ToastType.SUCCESS:
          return (0, i.jsx)(c.default, {
            className: I.icon,
            color: u.tokens.colors.STATUS_POSITIVE.css
          });
        case E.ToastType.FAILURE:
          return (0, i.jsx)(_.default, {
            className: I.icon,
            color: u.tokens.colors.STATUS_DANGER.css
          });
        case E.ToastType.CLIP:
          return (0, i.jsx)(d.default, {
            className: I.clipIcon,
            color: u.tokens.colors.HEADER_PRIMARY.css
          });
        case E.ToastType.LINK:
          return (0, i.jsx)(o.LinkIcon, {
            className: I.icon,
            color: u.tokens.colors.HEADER_PRIMARY.css
          });
        case E.ToastType.FORWARD:
          return (0, i.jsx)(a.ArrowAngleRightUpIcon, {
            className: I.icon,
            color: u.tokens.colors.STATUS_POSITIVE.css
          });
        default:
          return null
      }
    }(n), (0, i.jsx)(l.Text, {
      className: I.__invalid_content,
      color: "header-primary",
      variant: "text-md/normal",
      children: t
    })]
  })
})