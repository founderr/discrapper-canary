n.d(t, {
  Z: function() {
    return p
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(692547),
  a = n(780384),
  r = n(481060),
  o = n(367907),
  c = n(210887),
  u = n(626135),
  d = n(981631),
  h = n(689938),
  m = n(683993),
  E = n(622322);

function p(e) {
  let {
    onClose: t,
    onConfirm: p,
    onCancel: g,
    channel: f,
    analyticsType: C,
    popoutText: _,
    animation: I
  } = e;
  i.useEffect(() => {
    u.default.track(d.rMx.OPEN_POPOUT, {
      type: C,
      ...(0, o.v_)(f)
    })
  }, [C, f]);
  let x = i.useCallback(() => {
      null == p || p(), t()
    }, [p, t]),
    T = i.useCallback(() => {
      null == g || g(), t()
    }, [g, t]),
    N = i.useRef(null);
  return i.useEffect(() => {
    let e;
    let t = c.Z.theme,
      l = !1;
    return null != I && (async () => {
      let [{
        default: i
      }, s] = await Promise.all([Promise.resolve().then(n.t.bind(n, 500923, 23)), (0, a.wj)(t) ? I.dark() : I.light()]);
      !l && null != N.current && (e = i.loadAnimation({
        container: N.current,
        renderer: "svg",
        loop: !0,
        autoplay: !0,
        animationData: s
      }))
    })(), () => {
      l = !0, null != e && (e.destroy(), e = void 0)
    }
  }, [I]), (0, l.jsx)(r.Dialog, {
    "aria-labelledby": "content-warning-popout-label",
    children: (0, l.jsxs)("form", {
      className: m.contentWarningPopout,
      onSubmit: x,
      children: [(0, l.jsxs)("div", {
        className: m.body,
        children: [null != I && (0, l.jsx)("div", {
          className: m.animation,
          ref: N
        }), (0, l.jsxs)("div", {
          className: m.content,
          children: [(0, l.jsx)("div", {
            className: m.header,
            children: h.Z.Messages.SELF_XSS_HEADER
          }), (0, l.jsx)(r.Text, {
            id: "content-warning-popout-label",
            className: E.markup,
            variant: "text-sm/normal",
            children: _.body
          }), (0, l.jsxs)("div", {
            className: m.buttonWrapper,
            children: [(0, l.jsxs)("div", {
              className: m.buttonContainer,
              children: [(0, l.jsx)(r.Button, {
                className: m.button,
                color: r.Button.Colors.PRIMARY,
                onClick: T,
                children: h.Z.Messages.EDIT_MESSAGE
              }), (0, l.jsx)(r.Text, {
                variant: "text-xs/normal",
                className: m.buttonHint,
                children: h.Z.Messages.EVERYONE_POPOUT_ESC.format()
              })]
            }), (0, l.jsxs)("div", {
              className: m.buttonContainer,
              children: [(0, l.jsx)(r.Button, {
                className: m.button,
                onClick: x,
                type: "submit",
                autoFocus: !0,
                children: h.Z.Messages.EVERYONE_POPOUT_SEND_NOW
              }), (0, l.jsx)(r.Text, {
                variant: "text-xs/normal",
                className: m.buttonHint,
                children: h.Z.Messages.EVERYONE_POPOUT_ENTER.format()
              })]
            })]
          })]
        })]
      }), null != _.footer && "" !== _.footer ? (0, l.jsxs)("div", {
        className: m.footer,
        children: [(0, l.jsx)(r.CircleInformationIcon, {
          size: "xs",
          color: s.Z.unsafe_rawColors.PRIMARY_400.css,
          className: m.icon
        }), (0, l.jsx)(r.Text, {
          variant: "text-sm/normal",
          children: _.footer
        })]
      }) : null]
    })
  })
}