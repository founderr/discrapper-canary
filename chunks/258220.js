n.r(t), n.d(t, {
  ACTIVITY_ENCOURAGES_HW_ACCELERATION: function() {
    return _
  },
  default: function() {
    return I
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(481060),
  a = n(153867),
  r = n(835473),
  o = n(285952),
  c = n(626135),
  u = n(998502),
  d = n(981631),
  E = n(689938),
  h = n(129467);
let _ = "Activity Encourages Hardware Acceleration";

function I(e) {
  var t;
  let {
    applicationId: n,
    ...I
  } = e, [m, T] = i.useState(!1), [g] = (0, r.Z)([n]), p = null !== (t = null == g ? void 0 : g.name) && void 0 !== t ? t : "This Activity";
  i.useEffect(() => {
    c.default.track(d.rMx.OPEN_MODAL, {
      type: _
    })
  }, []);
  let N = () => {
    let e = "temporary";
    m && (e = "permanent", a.ZP.updatedUnsyncedSettings({
      disableActivityHardwareAccelerationPrompt: !0
    })), c.default.track(d.rMx.MODAL_DISMISSED, {
      type: _,
      dismiss_type: e
    }), I.onClose()
  };
  return (0, s.jsxs)(l.ModalRoot, {
    className: h.root,
    "aria-label": E.Z.Messages.ACTIVITY_HARDWARE_ACCELERATION_BETTER_TITLE,
    ...I,
    children: [(0, s.jsxs)(l.ModalHeader, {
      separator: !1,
      children: [(0, s.jsx)(l.Text, {
        className: h.__invalid_header,
        variant: "text-lg/normal",
        children: E.Z.Messages.ACTIVITY_HARDWARE_ACCELERATION_BETTER_TITLE
      }), (0, s.jsx)(l.ModalCloseButton, {
        onClick: N,
        className: h.closeButton
      })]
    }), (0, s.jsx)(l.ModalContent, {
      className: h.content,
      children: (0, s.jsx)(l.Text, {
        variant: "text-md/normal",
        className: h.__invalid_ratingBody,
        children: E.Z.Messages.ACTIVITY_HARDWARE_ACCELERATION_BETTER_BODY.format({
          applicationName: p
        })
      })
    }), (0, s.jsxs)(l.ModalFooter, {
      className: h.footer,
      direction: o.Z.Direction.HORIZONTAL,
      children: [(0, s.jsx)(l.Checkbox, {
        type: l.Checkbox.Types.INVERTED,
        size: 18,
        value: m,
        onChange: () => T(!m),
        children: (0, s.jsx)(l.Text, {
          variant: "text-sm/normal",
          children: E.Z.Messages.DONT_SHOW_AGAIN
        })
      }), (0, s.jsx)(l.Button, {
        color: l.Button.Colors.PRIMARY,
        onClick: N,
        children: E.Z.Messages.ACTIVITY_HARDWARE_ACCELERATION_NO_THANKS
      }), (0, s.jsx)(l.Button, {
        color: l.Button.Colors.BRAND,
        onClick: () => {
          c.default.track(d.rMx.ACTIVITY_ENABLE_HARDWARE_ACCELERATION, {
            application_id: n
          }), u.ZP.setEnableHardwareAcceleration(!0)
        },
        children: E.Z.Messages.ACTIVITY_HARDWARE_ACCELERATION_TURN_IT_ON
      })]
    })]
  })
}