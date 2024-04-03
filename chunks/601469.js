"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
}), s("47120");
var a, n, l = s("735250"),
  i = s("470079"),
  r = s("803997"),
  o = s.n(r),
  d = s("442837"),
  u = s("846519"),
  c = s("289987"),
  S = s("481060"),
  E = s("607070"),
  T = s("626135"),
  f = s("641826"),
  m = s("232700"),
  _ = s("981631"),
  g = s("689938"),
  h = s("297370");
(n = a || (a = {}))[n.ODDS_FIRST = 0] = "ODDS_FIRST", n[n.ODDS_2 = 1] = "ODDS_2", n[n.ODDS_3 = 2] = "ODDS_3", n[n.ODDS_4 = 3] = "ODDS_4", n[n.ODDS_5 = 4] = "ODDS_5", n[n.ODDS_6 = 5] = "ODDS_6", n[n.ODDS_LAST = 6] = "ODDS_LAST";

function I(e) {
  let {
    className: t
  } = e, s = (0, d.useStateFromStores)([E.default], () => E.default.useReducedMotion), [a, n] = i.useState(!1), [r, I] = i.useState(0), [N, p] = i.useState(""), [C] = i.useState(new u.Timeout), A = function(e) {
    switch (e) {
      case 0:
        return g.default.Messages.PACKAGES_HELP_1;
      case 1:
        return g.default.Messages.PACKAGES_HELP_2;
      case 2:
        return g.default.Messages.PACKAGES_HELP_3;
      case 3:
        return g.default.Messages.PACKAGES_HELP_4;
      case 4:
        return g.default.Messages.PACKAGES_HELP_5.format({
          percent: Math.floor(1 / Object.keys((0, m.getLootboxes)()).length * 100)
        });
      case 5:
        return g.default.Messages.PACKAGES_HELP_6;
      case 6:
        return g.default.Messages.PACKAGES_HELP_7
    }
  }(r), O = N.length === A.length, x = () => {
    T.default.track(_.AnalyticEvents.EASTER_EGG_INTERACTED, {
      type: "packages_help_icon_click",
      position: r
    }), r < 6 ? I(r + 1) : I(0)
  };
  return i.useEffect(() => {
    if (N.length === A.length || !a || s) {
      C.stop();
      return
    }
    C.start((0, f.randomBetween)(20, 100), () => {
      p(A.substring(0, N.length + 1))
    })
  }, [a, r, N.length, C, A, s]), i.useEffect(() => {
    p(A.substring(0, 1))
  }, [r, A]), i.useEffect(() => () => C.stop(), [C]), (0, l.jsx)(S.Tooltip, {
    text: s ? A : N,
    "aria-label": A,
    onTooltipShow: () => {
      T.default.track(_.AnalyticEvents.EASTER_EGG_INTERACTED, {
        type: "packages_help_icon_hover",
        position: r
      }), n(!0)
    },
    onTooltipHide: () => n(!1),
    children: e => (0, l.jsx)(S.Clickable, {
      ...e,
      onClick: s || O ? x : void 0,
      className: o()(t, h.clickable),
      children: (0, l.jsx)(c.CircleQuestionIcon, {
        className: h.icon,
        color: "currentColor"
      })
    })
  })
}