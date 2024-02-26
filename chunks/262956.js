"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("77078"),
  r = n("112821"),
  u = n("244201"),
  o = n("274870"),
  d = n("247013"),
  c = n("660478"),
  f = n("697218"),
  h = n("566998"),
  m = n("664336"),
  p = n("659500"),
  E = n("49111"),
  S = n("782340"),
  g = function(e) {
    let {
      channel: t
    } = e, n = (0, s.useStateFromStores)([d.default, f.default], () => {
      let e = f.default.getCurrentUser();
      return null == e || t.isNSFW() && (!e.nsfwAllowed || !d.default.didAgree(t.getGuildId()))
    }, [t]), [g, C] = a.useState(!1), _ = (0, s.useStateFromStores)([c.default], () => c.default.hasUnreadPins(t.id), [t]), I = (0, u.useWindowDispatch)(), T = (0, o.useIsBroadcastingGDM)(t.id), v = a.useCallback(() => {
      !n && C(e => !e)
    }, [n]);

    function x(e) {
      !(null == e ? void 0 : e.shiftKey) && I.dispatch(E.ComponentActions.POPOUT_CLOSE)
    }
    return (a.useEffect(() => (p.ComponentDispatch.subscribe(E.ComponentActions.TOGGLE_CHANNEL_PINS, v), () => {
      p.ComponentDispatch.unsubscribe(E.ComponentActions.TOGGLE_CHANNEL_PINS, v)
    }), [v]), T) ? null : (0, l.jsx)(i.Popout, {
      shouldShow: g,
      animation: i.Popout.Animation.NONE,
      position: "bottom",
      align: "right",
      autoInvert: !1,
      ignoreModalClicks: !0,
      onRequestClose: () => C(!1),
      renderPopout: function(e) {
        return (0, l.jsx)(r.default, {
          ...e,
          onJump: x,
          channel: t
        })
      },
      children: (e, t) => {
        let {
          isShown: a
        } = t;
        return (0, l.jsx)(m.Icon, {
          ...e,
          onClick: v,
          tooltip: a ? null : S.default.Messages.PINNED_MESSAGES,
          icon: h.default,
          "aria-label": S.default.Messages.PINNED_MESSAGES,
          disabled: n,
          showBadge: _,
          selected: a
        })
      }
    })
  }