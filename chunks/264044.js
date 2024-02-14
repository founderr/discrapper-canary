"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  i = s("819855"),
  r = s("77078"),
  o = s("841098"),
  d = s("376556"),
  u = s("572943"),
  c = s("926994"),
  S = s("599110"),
  E = s("49111"),
  T = s("721687"),
  f = e => {
    let {
      disabled: t = !1,
      type: s,
      className: n,
      innerClassName: f,
      onConnect: m
    } = e, _ = (0, o.default)(), g = d.default.get((0, u.useLegacyPlatformType)(s));
    return (0, a.jsx)(r.Tooltip, {
      text: g.name,
      children: e => {
        let {
          onMouseEnter: o,
          onMouseLeave: u
        } = e;
        return (0, a.jsx)("div", {
          className: l(T.wrapper, n),
          children: (0, a.jsx)(r.FocusRing, {
            children: (0, a.jsx)("button", {
              onMouseEnter: o,
              onMouseLeave: u,
              className: l(T.inner, f),
              type: "button",
              disabled: t,
              style: {
                backgroundImage: "url('".concat((0, i.isThemeDark)(_) ? g.icon.darkSVG : g.icon.lightSVG, "')")
              },
              onClick: null != m ? m : () => (function(e) {
                let t = d.default.get(e);
                (0, c.default)(t.type, "Friends List"), S.default.track(E.AnalyticEvents.ACCOUNT_LINK_STEP, {
                  previous_step: "desktop connections",
                  current_step: "desktop oauth",
                  platform_type: t.type
                })
              })(s),
              "aria-label": g.name
            })
          })
        })
      }
    })
  }