"use strict";
a.r(t), a.d(t, {
  ACTIVITY_ENCOURAGES_HW_ACCELERATION: function() {
    return h
  },
  default: function() {
    return _
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  i = a("153867"),
  r = a("835473"),
  o = a("285952"),
  u = a("626135"),
  d = a("998502"),
  c = a("981631"),
  f = a("689938"),
  E = a("67558");
let h = "Activity Encourages Hardware Acceleration";

function _(e) {
  var t;
  let {
    applicationId: a,
    ..._
  } = e, [C, m] = s.useState(!1), [S] = (0, r.default)([a]), p = null !== (t = null == S ? void 0 : S.name) && void 0 !== t ? t : "This Activity";
  s.useEffect(() => {
    u.default.track(c.AnalyticEvents.OPEN_MODAL, {
      type: h
    })
  }, []);
  let I = () => {
    let e = "temporary";
    C && (e = "permanent", i.default.updatedUnsyncedSettings({
      disableActivityHardwareAccelerationPrompt: !0
    })), u.default.track(c.AnalyticEvents.MODAL_DISMISSED, {
      type: h,
      dismiss_type: e
    }), _.onClose()
  };
  return (0, n.jsxs)(l.ModalRoot, {
    className: E.root,
    "aria-label": f.default.Messages.ACTIVITY_HARDWARE_ACCELERATION_BETTER_TITLE,
    ..._,
    children: [(0, n.jsxs)(l.ModalHeader, {
      separator: !1,
      children: [(0, n.jsx)(l.Text, {
        className: E.__invalid_header,
        variant: "text-lg/normal",
        children: f.default.Messages.ACTIVITY_HARDWARE_ACCELERATION_BETTER_TITLE
      }), (0, n.jsx)(l.ModalCloseButton, {
        onClick: I,
        className: E.closeButton
      })]
    }), (0, n.jsx)(l.ModalContent, {
      className: E.content,
      children: (0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        className: E.__invalid_ratingBody,
        children: f.default.Messages.ACTIVITY_HARDWARE_ACCELERATION_BETTER_BODY.format({
          applicationName: p
        })
      })
    }), (0, n.jsxs)(l.ModalFooter, {
      className: E.footer,
      direction: o.default.Direction.HORIZONTAL,
      children: [(0, n.jsx)(l.Checkbox, {
        type: l.Checkbox.Types.INVERTED,
        size: 18,
        value: C,
        onChange: () => m(!C),
        children: (0, n.jsx)(l.Text, {
          variant: "text-sm/normal",
          children: f.default.Messages.DONT_SHOW_AGAIN
        })
      }), (0, n.jsx)(l.Button, {
        color: l.Button.Colors.PRIMARY,
        onClick: I,
        children: f.default.Messages.ACTIVITY_HARDWARE_ACCELERATION_NO_THANKS
      }), (0, n.jsx)(l.Button, {
        color: l.Button.Colors.BRAND,
        onClick: () => {
          u.default.track(c.AnalyticEvents.ACTIVITY_ENABLE_HARDWARE_ACCELERATION, {
            application_id: a
          }), d.default.setEnableHardwareAcceleration(!0)
        },
        children: f.default.Messages.ACTIVITY_HARDWARE_ACCELERATION_TURN_IT_ON
      })]
    })]
  })
}