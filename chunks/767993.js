"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("669491"),
  i = n("819855"),
  r = n("77078"),
  o = n("716241"),
  u = n("161778"),
  d = n("925877"),
  c = n("599110"),
  f = n("49111"),
  h = n("782340"),
  C = n("609793"),
  p = n("919163");

function E(e) {
  let {
    onClose: t,
    onConfirm: E,
    onCancel: m,
    channel: g,
    analyticsType: S,
    popoutText: _,
    animation: T
  } = e;
  s.useEffect(() => {
    c.default.track(f.AnalyticEvents.OPEN_POPOUT, {
      type: S,
      ...(0, o.collectChannelAnalyticsMetadata)(g)
    })
  }, [S, g]);
  let A = s.useCallback(() => {
      null == E || E(), t()
    }, [E, t]),
    M = s.useCallback(() => {
      null == m || m(), t()
    }, [m, t]),
    I = s.useRef(null);
  return s.useEffect(() => {
    let e;
    let t = u.default.theme,
      a = !1;
    return null != T && (async () => {
      let [{
        default: s
      }, l] = await Promise.all([n.el("865981").then(n.t.bind(n, "865981", 23)), (0, i.isThemeDark)(t) ? T.dark() : T.light()]);
      !a && (e = s.loadAnimation({
        container: I.current,
        renderer: "svg",
        loop: !0,
        autoplay: !0,
        animationData: l
      }))
    })(), () => {
      a = !0, null != e && (e.destroy(), e = void 0)
    }
  }, [T]), (0, a.jsx)(r.Dialog, {
    "aria-labelledby": "content-warning-popout-label",
    children: (0, a.jsxs)("form", {
      className: C.contentWarningPopout,
      onSubmit: A,
      children: [(0, a.jsxs)("div", {
        className: C.body,
        children: [null != T && (0, a.jsx)("div", {
          className: C.animation,
          ref: I
        }), (0, a.jsxs)("div", {
          className: C.content,
          children: [(0, a.jsx)("div", {
            className: C.header,
            children: h.default.Messages.SELF_XSS_HEADER
          }), (0, a.jsx)(r.Text, {
            id: "content-warning-popout-label",
            className: p.markup,
            variant: "text-sm/normal",
            children: _.body
          }), (0, a.jsxs)("div", {
            className: C.buttonWrapper,
            children: [(0, a.jsxs)("div", {
              className: C.buttonContainer,
              children: [(0, a.jsx)(r.Button, {
                className: C.button,
                color: r.Button.Colors.PRIMARY,
                onClick: M,
                children: h.default.Messages.EDIT_MESSAGE
              }), (0, a.jsx)(r.Text, {
                variant: "text-xs/normal",
                className: C.buttonHint,
                children: h.default.Messages.EVERYONE_POPOUT_ESC.format()
              })]
            }), (0, a.jsxs)("div", {
              className: C.buttonContainer,
              children: [(0, a.jsx)(r.Button, {
                className: C.button,
                onClick: A,
                type: "submit",
                autoFocus: !0,
                children: h.default.Messages.EVERYONE_POPOUT_SEND_NOW
              }), (0, a.jsx)(r.Text, {
                variant: "text-xs/normal",
                className: C.buttonHint,
                children: h.default.Messages.EVERYONE_POPOUT_ENTER.format()
              })]
            })]
          })]
        })]
      }), null != _.footer && "" !== _.footer ? (0, a.jsxs)("div", {
        className: C.footer,
        children: [(0, a.jsx)(d.default, {
          color: l.default.unsafe_rawColors.PRIMARY_400.css,
          className: C.icon
        }), (0, a.jsx)(r.Text, {
          variant: "text-sm/normal",
          children: _.footer
        })]
      }) : null]
    })
  })
}