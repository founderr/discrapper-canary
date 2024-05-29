"use strict";
n.r(t), n.d(t, {
  getPromiseableActionHandlers: function() {
    return r
  },
  openConfirmRemoveMentionRaid: function() {
    return A
  },
  openRaidResolveModal: function() {
    return i
  },
  openSubmitFeedback: function() {
    return E
  }
});
var o = n("735250");
n("470079");
var _ = n("481060"),
  a = n("273504"),
  u = n("689938");

function r(e) {
  return {
    [a.AutomodActionType.BLOCK_MESSAGE]: (e, t) => new Promise(e => {
      (0, _.openModalLazy)(async () => {
        let {
          default: _
        } = await Promise.all([n.e("99387"), n.e("94005")]).then(n.bind(n, "144462"));
        return n => {
          var a;
          return (0, o.jsx)(_, {
            initialCustomMessage: null !== (a = t.metadata.customMessage) && void 0 !== a ? a : "",
            onSubmit: o => {
              t.metadata.customMessage = o, e(t), n.onClose()
            },
            ...n,
            onClose: () => (e(null), n.onClose())
          })
        }
      })
    }),
    [a.AutomodActionType.FLAG_TO_CHANNEL]: (t, u) => new Promise(r => {
      (0, _.openModalLazy)(async () => {
        let {
          default: _
        } = await Promise.all([n.e("99387"), n.e("74543")]).then(n.bind(n, "643611")), E = t.actions.find(e => e.type === a.AutomodActionType.FLAG_TO_CHANNEL);
        return n => (0, o.jsx)(_, {
          action: u,
          isEdit: null != E,
          triggerType: t.triggerType,
          guildId: e,
          onEditChannel: e => {
            u.metadata.channelId = e, t.exemptChannels.add(e), r(u), n.onClose()
          },
          ...n,
          onClose: () => (r(null), n.onClose())
        })
      })
    }),
    [a.AutomodActionType.USER_COMMUNICATION_DISABLED]: (e, t) => new Promise(u => {
      (0, _.openModalLazy)(async () => {
        let {
          default: _
        } = await Promise.all([n.e("99387"), n.e("78273")]).then(n.bind(n, "41767")), r = e.actions.find(e => e.type === a.AutomodActionType.USER_COMMUNICATION_DISABLED);
        return n => (0, o.jsx)(_, {
          action: t,
          isEdit: null != r,
          triggerType: e.triggerType,
          onUpdateDuration: e => {
            null != e && (t.metadata.durationSeconds = e), u(t), n.onClose()
          },
          ...n,
          onClose: () => (u(null), n.onClose())
        })
      })
    })
  }
}

function E(e, t, a, u) {
  (0, _.openModalLazy)(async () => {
    let {
      default: _
    } = await Promise.all([n.e("99387"), n.e("37483")]).then(n.bind(n, "241046"));
    return n => (0, o.jsx)(_, {
      ...n,
      automodDecision: {
        messageId: e,
        messageContent: t,
        decisionId: a,
        channel: u
      }
    })
  })
}

function i(e, t) {
  (0, _.openModalLazy)(async () => {
    let {
      default: _
    } = await Promise.all([n.e("99387"), n.e("28382")]).then(n.bind(n, "537623"));
    return n => (0, o.jsx)(_, {
      ...n,
      messageId: e,
      guildId: t
    })
  })
}

function A(e) {
  (0, _.openModal)(t => (0, o.jsx)(_.ConfirmModal, {
    header: u.default.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_TITLE,
    confirmText: u.default.Messages.CONFIRM,
    onConfirm: e,
    cancelText: u.default.Messages.CANCEL,
    ...t,
    children: (0, o.jsx)(_.Text, {
      variant: "text-md/normal",
      children: u.default.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_BODY
    })
  }))
}