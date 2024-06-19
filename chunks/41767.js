t.r(n), t.d(n, {
  default: function() {
    return u
  }
}), t(47120);
var _ = t(735250),
  s = t(470079),
  a = t(481060),
  r = t(153124),
  l = t(556012),
  A = t(590433),
  I = t(689938),
  O = t(629728);
let o = e => {
  var n;
  let {
    duration: t,
    onSelectDuration: s
  } = e, r = (0, A.tr)(), l = r.find(e => e.value === t);
  return (0, _.jsx)(a.FormItem, {
    className: O.durationSelector,
    required: !0,
    children: (0, _.jsx)(a.SearchableSelect, {
      value: null !== (n = null == l ? void 0 : l.value) && void 0 !== n ? n : A.UK.DURATION_60_SEC,
      options: r,
      onChange: e => {
        let n = r.find(n => n.value === e);
        null != n && s(n.value)
      },
      placeholder: I.Z.Messages.GUILD_AUTOMOD_DISABLE_GUILD_COMMUNICATION_PLACEHOLDER
    })
  })
};

function u(e) {
  let {
    action: n,
    triggerType: t,
    isEdit: u,
    onUpdateDuration: N,
    onClose: S,
    transitionState: E
  } = e, i = (0, r.Dt)(), [c, M] = s.useState(() => null != n.metadata.durationSeconds && n.metadata.durationSeconds > 0 ? n.metadata.durationSeconds : A.UK.DURATION_60_SEC), C = (0, l.c)(n.type, n, t);
  if (null == C) return null;
  let {
    headerText: T
  } = C;
  return (0, _.jsxs)(a.ModalRoot, {
    transitionState: E,
    "aria-labelledby": i,
    size: a.ModalSize.SMALL,
    children: [(0, _.jsxs)(a.ModalContent, {
      className: O.actionContentContainer,
      children: [(0, _.jsx)(a.Heading, {
        id: i,
        color: "header-primary",
        variant: "heading-lg/semibold",
        className: O.header,
        children: T
      }), (0, _.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: I.Z.Messages.GUILD_AUTOMOD_DISABLE_GUILD_COMMUNICATION_MODAL_DESCRIPTION
      }), (0, _.jsx)(o, {
        duration: c,
        onSelectDuration: e => {
          M(e)
        }
      })]
    }), (0, _.jsxs)(a.ModalFooter, {
      children: [(0, _.jsx)(a.Button, {
        onClick: () => {
          N(c)
        },
        color: a.Button.Colors.BRAND,
        size: a.Button.Sizes.SMALL,
        children: u ? I.Z.Messages.EDIT : I.Z.Messages.SAVE
      }), (0, _.jsx)(a.Button, {
        onClick: () => {
          S()
        },
        color: a.Button.Colors.TRANSPARENT,
        look: a.Button.Looks.LINK,
        children: I.Z.Messages.CANCEL
      })]
    })]
  })
}