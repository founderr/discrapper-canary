"use strict";
l.r(t), l.d(t, {
  default: function() {
    return O
  }
}), l("47120");
var n = l("735250"),
  a = l("470079"),
  o = l("442837"),
  s = l("481060"),
  r = l("933557"),
  u = l("592125"),
  A = l("984933"),
  i = l("699516"),
  d = l("594174"),
  _ = l("153124"),
  c = l("556012"),
  C = l("689938"),
  N = l("982237");
let T = e => {
  let {
    guildId: t,
    channel: l,
    onSelectChannel: a
  } = e, u = (0, o.useStateFromStoresArray)([A.default], () => A.default.getChannels(t)[A.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
    let {
      channel: t
    } = e;
    return !t.isGuildVocal() && !t.isThread() && !t.isForumLikeChannel()
  }).map(e => {
    let {
      channel: t
    } = e;
    return t
  }), [t]);
  return (0, n.jsx)(s.FormItem, {
    className: N.channelSelector,
    required: !0,
    children: (0, n.jsx)(s.SearchableSelect, {
      value: null == l ? void 0 : l.id,
      options: u.map(e => ({
        value: e.id,
        label: (0, r.computeChannelName)(e, d.default, i.default, !0)
      })),
      onChange: e => {
        let t = u.find(t => t.id === e);
        a(null != t ? t : void 0)
      },
      placeholder: C.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_CHANNEL_PLACEHOLDER
    })
  })
};

function O(e) {
  let {
    action: t,
    triggerType: l,
    guildId: r,
    isEdit: A,
    onEditChannel: i,
    onClose: d,
    transitionState: O
  } = e, L = (0, _.useUID)(), [I, E] = a.useState(t.metadata.channelId), [S, M] = a.useState(null), f = (0, o.useStateFromStores)([u.default], () => u.default.getChannel(I), [I]), U = (0, c.getActionInfo)(t.type, t, l);
  if (null == U) return null;
  let {
    headerText: D
  } = U;
  return (0, n.jsxs)(s.ModalRoot, {
    transitionState: O,
    "aria-labelledby": L,
    size: s.ModalSize.SMALL,
    children: [(0, n.jsxs)(s.ModalContent, {
      className: N.actionContentContainer,
      children: [(0, n.jsx)(s.Heading, {
        id: L,
        color: "header-primary",
        variant: "heading-lg/semibold",
        className: N.header,
        children: D
      }), (0, n.jsx)(s.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: C.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_DESCRIPTION
      }), (0, n.jsx)(T, {
        guildId: r,
        channel: f,
        onSelectChannel: e => {
          null != e && E(e.id)
        }
      }), null != S ? (0, n.jsx)(s.Text, {
        color: "text-danger",
        variant: "text-sm/normal",
        children: S
      }) : (0, n.jsx)(s.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: C.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_CHANNEL_HELPER
      })]
    }), (0, n.jsxs)(s.ModalFooter, {
      children: [(0, n.jsx)(s.Button, {
        onClick: () => {
          if (null == I) {
            M(C.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_ERROR_NO_CHANNEL);
            return
          }
          i(I)
        },
        color: s.Button.Colors.BRAND,
        size: s.Button.Sizes.SMALL,
        children: A ? C.default.Messages.EDIT : C.default.Messages.SAVE
      }), (0, n.jsx)(s.Button, {
        onClick: () => {
          d()
        },
        color: s.Button.Colors.TRANSPARENT,
        look: s.Button.Looks.LINK,
        children: C.default.Messages.CANCEL
      })]
    })]
  })
}