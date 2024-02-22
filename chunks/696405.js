"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("77078"),
  o = n("174727"),
  d = n("788220"),
  c = n("515496"),
  f = n("568088"),
  h = n("624567"),
  m = n("49111"),
  p = n("983127"),
  E = e => {
    let {
      channel: t,
      className: n
    } = e, {
      isHovered: s,
      setIsHovered: E,
      onMouseEnter: S,
      onMouseLeave: g,
      cancelTimers: C
    } = (0, d.default)(200, 300), [_, I] = a.useState(!1), T = (0, r.useStateFromStores)([f.default], () => f.default.effectCooldownEndTime), v = a.useMemo(() => null != T ? (T.getTime() - Date.now()) / 1e3 : 0, [T]), {
      seconds: x
    } = (0, o.default)(null != T ? T : new Date), N = x > 0, A = a.useCallback(e => {
      if ("focus" !== e.type) !_ && !N && S()
    }, [_, N, S]), M = a.useCallback(() => {
      !_ && g()
    }, [g, _]), R = a.useCallback((e, t) => {
      C(), I(!_), (!s || _) && (null == t || t(e))
    }, [C, _, s]), j = s || _;
    return (0, l.jsx)(u.Popout, {
      shouldShow: j,
      animationPosition: "bottom",
      position: "bottom",
      align: "center",
      spacing: 16,
      onRequestClose: () => {
        E(!1), I(!1)
      },
      renderPopout: e => {
        let {
          closePopout: n
        } = e;
        return (0, l.jsx)(h.default, {
          isHovered: j,
          channel: t,
          closePopout: n,
          onMouseEnter: S,
          onMouseLeave: M,
          onFocus: () => I(!0)
        })
      },
      children: e => {
        let {
          onClick: t,
          onKeyDown: a
        } = e;
        return (0, l.jsx)(c.default, {
          isCenterButton: !0,
          totalCooldownSeconds: v,
          remainingCooldownSeconds: x,
          className: i(p.controlButton, n),
          onKeyDown: e => {
            var t, n;
            return t = e, n = a, void(t.keyCode === m.KeyboardKeys.ENTER && t.keyCode === m.KeyboardKeys.SPACE && R(t, n))
          },
          onClick: e => {
            R(e, t)
          },
          onMouseEnter: A,
          onMouseLeave: M,
          isActive: j
        })
      }
    })
  }