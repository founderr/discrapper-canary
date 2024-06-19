t.r(n), t.d(n, {
  default: function() {
    return C
  }
}), t(47120);
var _ = t(735250),
  s = t(470079),
  l = t(442837),
  a = t(481060),
  r = t(933557),
  A = t(592125),
  O = t(984933),
  N = t(699516),
  I = t(594174),
  i = t(153124),
  u = t(556012),
  E = t(689938),
  o = t(625132);
let c = e => {
  let {
    guildId: n,
    channel: t,
    onSelectChannel: s
  } = e, A = (0, l.Wu)([O.ZP], () => O.ZP.getChannels(n)[O.sH].filter(e => {
    let {
      channel: n
    } = e;
    return !n.isGuildVocal() && !n.isThread() && !n.isForumLikeChannel()
  }).map(e => {
    let {
      channel: n
    } = e;
    return n
  }), [n]);
  return (0, _.jsx)(a.FormItem, {
    className: o.channelSelector,
    required: !0,
    children: (0, _.jsx)(a.SearchableSelect, {
      value: null == t ? void 0 : t.id,
      options: A.map(e => ({
        value: e.id,
        label: (0, r.F6)(e, I.default, N.Z, !0)
      })),
      onChange: e => {
        let n = A.find(n => n.id === e);
        s(null != n ? n : void 0)
      },
      placeholder: E.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_CHANNEL_PLACEHOLDER
    })
  })
};

function C(e) {
  let {
    action: n,
    triggerType: t,
    guildId: r,
    isEdit: O,
    onEditChannel: N,
    onClose: I,
    transitionState: C
  } = e, S = (0, i.Dt)(), [L, M] = s.useState(n.metadata.channelId), [T, d] = s.useState(null), U = (0, l.e7)([A.Z], () => A.Z.getChannel(L), [L]), D = (0, u.c)(n.type, n, t);
  if (null == D) return null;
  let {
    headerText: j
  } = D;
  return (0, _.jsxs)(a.ModalRoot, {
    transitionState: C,
    "aria-labelledby": S,
    size: a.ModalSize.SMALL,
    children: [(0, _.jsxs)(a.ModalContent, {
      className: o.actionContentContainer,
      children: [(0, _.jsx)(a.Heading, {
        id: S,
        color: "header-primary",
        variant: "heading-lg/semibold",
        className: o.header,
        children: j
      }), (0, _.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: E.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_DESCRIPTION
      }), (0, _.jsx)(c, {
        guildId: r,
        channel: U,
        onSelectChannel: e => {
          if (null != e) M(e.id)
        }
      }), null != T ? (0, _.jsx)(a.Text, {
        color: "text-danger",
        variant: "text-sm/normal",
        children: T
      }) : (0, _.jsx)(a.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: E.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_CHANNEL_HELPER
      })]
    }), (0, _.jsxs)(a.ModalFooter, {
      children: [(0, _.jsx)(a.Button, {
        onClick: () => {
          if (null == L) {
            d(E.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_ERROR_NO_CHANNEL);
            return
          }
          N(L)
        },
        color: a.Button.Colors.BRAND,
        size: a.Button.Sizes.SMALL,
        children: O ? E.Z.Messages.EDIT : E.Z.Messages.SAVE
      }), (0, _.jsx)(a.Button, {
        onClick: () => {
          I()
        },
        color: a.Button.Colors.TRANSPARENT,
        look: a.Button.Looks.LINK,
        children: E.Z.Messages.CANCEL
      })]
    })]
  })
}