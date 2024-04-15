"use strict";
o.r(t), o.d(t, {
  default: function() {
    return _
  }
}), o("47120");
var n = o("735250"),
  a = o("470079"),
  l = o("481060"),
  u = o("153124"),
  s = o("556012"),
  r = o("590433"),
  A = o("689938"),
  i = o("525803");
let d = e => {
  var t;
  let {
    duration: o,
    onSelectDuration: a
  } = e, u = (0, r.getDisableCommunicationDurationOptions)(), s = u.find(e => e.value === o);
  return (0, n.jsx)(l.FormItem, {
    className: i.durationSelector,
    required: !0,
    children: (0, n.jsx)(l.SearchableSelect, {
      value: null !== (t = null == s ? void 0 : s.value) && void 0 !== t ? t : r.DisableCommunicationDuration.DURATION_60_SEC,
      options: u,
      onChange: e => {
        let t = u.find(t => t.value === e);
        null != t && a(t.value)
      },
      placeholder: A.default.Messages.GUILD_AUTOMOD_DISABLE_GUILD_COMMUNICATION_PLACEHOLDER
    })
  })
};

function _(e) {
  let {
    action: t,
    triggerType: o,
    isEdit: _,
    onUpdateDuration: c,
    onClose: C,
    transitionState: I
  } = e, T = (0, u.useUID)(), [O, N] = a.useState(() => null != t.metadata.durationSeconds && t.metadata.durationSeconds > 0 ? t.metadata.durationSeconds : r.DisableCommunicationDuration.DURATION_60_SEC), S = (0, s.getActionInfo)(t.type, t, o);
  if (null == S) return null;
  let {
    headerText: E
  } = S;
  return (0, n.jsxs)(l.ModalRoot, {
    transitionState: I,
    "aria-labelledby": T,
    size: l.ModalSize.SMALL,
    children: [(0, n.jsxs)(l.ModalContent, {
      className: i.actionContentContainer,
      children: [(0, n.jsx)(l.Heading, {
        id: T,
        color: "header-primary",
        variant: "heading-lg/semibold",
        className: i.header,
        children: E
      }), (0, n.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: A.default.Messages.GUILD_AUTOMOD_DISABLE_GUILD_COMMUNICATION_MODAL_DESCRIPTION
      }), (0, n.jsx)(d, {
        duration: O,
        onSelectDuration: e => {
          N(e)
        }
      })]
    }), (0, n.jsxs)(l.ModalFooter, {
      children: [(0, n.jsx)(l.Button, {
        onClick: () => {
          c(O)
        },
        color: l.Button.Colors.BRAND,
        size: l.Button.Sizes.SMALL,
        children: _ ? A.default.Messages.EDIT : A.default.Messages.SAVE
      }), (0, n.jsx)(l.Button, {
        onClick: () => {
          C()
        },
        color: l.Button.Colors.TRANSPARENT,
        look: l.Button.Looks.LINK,
        children: A.default.Messages.CANCEL
      })]
    })]
  })
}