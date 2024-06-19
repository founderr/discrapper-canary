t.r(s), t.d(s, {
  default: function() {
    return m
  }
}), t(47120);
var n = t(735250),
  l = t(470079),
  a = t(442837),
  o = t(481060),
  i = t(91176),
  r = t(906732),
  u = t(594174),
  c = t(373791),
  d = t(153124),
  h = t(626135),
  N = t(71619),
  C = t(590433),
  _ = t(981631),
  I = t(689938),
  M = t(359823);

function m(e) {
  var s, t;
  let {
    guildId: m,
    userId: E,
    anaylticsLocations: f,
    transitionState: p,
    onClose: T
  } = e, O = (0, d.Dt)(), {
    analyticsLocations: U
  } = (0, r.ZP)(), S = null !== (t = null !== (s = null == f ? void 0 : f[0]) && void 0 !== s ? s : null == U ? void 0 : U[0]) && void 0 !== t ? t : null, v = (0, a.e7)([u.default], () => u.default.getUser(E), [E]), [D, A] = (0, N.ZP)(E, m), [g, x] = l.useState(!1), b = l.useCallback(async () => {
    if (null != v) {
      x(!0);
      try {
        await i.Z.setCommunicationDisabledDuration(m, E, null, null, S), (0, o.showToast)((0, o.createToast)(I.Z.Messages.GUILD_ENABLE_COMMUNICATION_SUCCESS, o.ToastType.SUCCESS)), T()
      } catch (e) {
        (0, o.showToast)((0, o.createToast)(I.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, o.ToastType.FAILURE))
      } finally {
        x(!1)
      }
    }
  }, [m, v, E, T, S]), Z = l.useCallback(() => {
    !A && T()
  }, [A, T]);
  return (l.useEffect(() => {
    if (null != v) h.default.track(_.rMx.OPEN_MODAL, {
      type: C.av,
      guild_id: m,
      other_user_id: v.id
    })
  }, []), l.useEffect(() => {
    (null == v || null == m) && T()
  }), null == v || null == m) ? null : (0, n.jsxs)(o.ModalRoot, {
    transitionState: p,
    "aria-labelledby": O,
    children: [(0, n.jsxs)(o.ModalHeader, {
      className: M.header,
      separator: !1,
      children: [(0, n.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        children: I.Z.Messages.GUILD_ENABLE_COMMUNICATION_HEADER
      }), (0, n.jsx)(o.Clickable, {
        onClick: T,
        className: M.closeButton,
        "aria-label": I.Z.Messages.CLOSE,
        children: (0, n.jsx)(o.CloseSmallIcon, {
          size: "xs",
          color: "currentColor",
          className: M.closeIcon
        })
      })]
    }), (0, n.jsxs)(o.ModalContent, {
      children: [(0, n.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "interactive-normal",
        children: I.Z.Messages.GUILD_ENABLE_COMMUNICATION_TIME_REMAINING.format({
          username: v.username,
          countdown: e => null == D ? null : (0, n.jsx)(c.Z, {
            className: M.countdown,
            deadline: new Date(D),
            onInterval: Z,
            showUnits: !0,
            stopAtOneSec: !0
          })
        })
      }), (0, n.jsx)(o.Text, {
        className: M.cta,
        variant: "text-md/normal",
        color: "interactive-normal",
        children: I.Z.Messages.GUILD_ENABLE_COMMUNICATION_CTA.format({
          link: C.cu
        })
      })]
    }), (0, n.jsxs)(o.ModalFooter, {
      children: [(0, n.jsx)(o.Button, {
        color: o.Button.Colors.RED,
        onClick: b,
        submitting: g,
        children: I.Z.Messages.REMOVE_TIME_OUT
      }), (0, n.jsx)(o.Button, {
        type: "button",
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.PRIMARY,
        onClick: T,
        children: I.Z.Messages.CANCEL
      })]
    })]
  })
}