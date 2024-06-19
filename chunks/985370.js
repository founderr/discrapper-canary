n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(774078),
  u = n(579185),
  d = n(272929),
  h = n(456631),
  m = n(643720),
  p = n(981631),
  E = n(559820);
t.Z = e => {
  let {
    channel: t,
    className: n
  } = e, {
    isHovered: s,
    setIsHovered: g,
    onMouseEnter: f,
    onMouseLeave: C,
    cancelTimers: _
  } = (0, u.Z)(200, 300), [I, x] = i.useState(!1), T = (0, r.e7)([h.Z], () => h.Z.effectCooldownEndTime), N = i.useMemo(() => null != T ? (T.getTime() - Date.now()) / 1e3 : 0, [T]), {
    seconds: Z
  } = (0, c.Z)(null != T ? T : new Date), S = Z > 0, v = i.useCallback(e => {
    if ("focus" !== e.type) !I && !S && f()
  }, [I, S, f]), A = i.useCallback(() => {
    !I && C()
  }, [C, I]), M = i.useCallback((e, t) => {
    _(), x(!I), (!s || I) && (null == t || t(e))
  }, [_, I, s]), R = s || I;
  return (0, l.jsx)(o.Popout, {
    shouldShow: R,
    animationPosition: "bottom",
    position: "bottom",
    align: "center",
    spacing: 16,
    onRequestClose: () => {
      g(!1), x(!1)
    },
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, l.jsx)(m.Z, {
        isHovered: R,
        channel: t,
        closePopout: n,
        onMouseEnter: f,
        onMouseLeave: A,
        onFocus: () => x(!0)
      })
    },
    children: e => {
      let {
        onClick: t,
        onKeyDown: i
      } = e;
      return (0, l.jsx)(d.Z, {
        isCenterButton: !0,
        totalCooldownSeconds: N,
        remainingCooldownSeconds: Z,
        className: a()(E.controlButton, n),
        onKeyDown: e => {
          var t, n;
          return t = e, n = i, void(t.keyCode === p.yXg.ENTER && t.keyCode === p.yXg.SPACE && M(t, n))
        },
        onClick: e => {
          M(e, t)
        },
        onMouseEnter: v,
        onMouseLeave: A,
        isActive: R
      })
    }
  })
}