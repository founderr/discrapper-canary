"use strict";
n.r(t), n.d(t, {
  getPromiseableActionHandlers: function() {
    return E
  },
  openConfirmRemoveMentionRaid: function() {
    return A
  },
  openRaidResolveModal: function() {
    return i
  },
  openSubmitFeedback: function() {
    return r
  }
});
var o = n("735250");
n("470079");
var _ = n("481060"),
  u = n("273504"),
  a = n("689938");

function E(e) {
  return {
    [u.AutomodActionType.BLOCK_MESSAGE]: (e, t) => new Promise(e => {
      (0, _.openModalLazy)(async () => {
        let {
          default: _
        } = await Promise.all([n.e("99387"), n.e("94005")]).then(n.bind(n, "144462"));
        return n => {
          var u;
          return (0, o.jsx)(_, {
            initialCustomMessage: null !== (u = t.metadata.customMessage) && void 0 !== u ? u : "",
            onSubmit: o => {
              t.metadata.customMessage = o, e(t), n.onClose()
            },
            ...n,
            onClose: () => (e(null), n.onClose())
          })
        }
      })
    }),
    [u.AutomodActionType.FLAG_TO_CHANNEL]: (t, a) => new Promise(E => {
      (0, _.openModalLazy)(async () => {
        let {
          default: _
        } = await Promise.all([n.e("99387"), n.e("74543")]).then(n.bind(n, "643611")), r = t.actions.find(e => e.type === u.AutomodActionType.FLAG_TO_CHANNEL);
        return n => (0, o.jsx)(_, {
          action: a,
          isEdit: null != r,
          triggerType: t.triggerType,
          guildId: e,
          onEditChannel: e => {
            a.metadata.channelId = e, t.exemptChannels.add(e), E(a), n.onClose()
          },
          ...n,
          onClose: () => (E(null), n.onClose())
        })
      })
    }),
    [u.AutomodActionType.USER_COMMUNICATION_DISABLED]: (e, t) => new Promise(a => {
      (0, _.openModalLazy)(async () => {
        let {
          default: _
        } = await Promise.all([n.e("99387"), n.e("78273")]).then(n.bind(n, "41767")), E = e.actions.find(e => e.type === u.AutomodActionType.USER_COMMUNICATION_DISABLED);
        return n => (0, o.jsx)(_, {
          action: t,
          isEdit: null != E,
          triggerType: e.triggerType,
          onUpdateDuration: e => {
            null != e && (t.metadata.durationSeconds = e), a(t), n.onClose()
          },
          ...n,
          onClose: () => (a(null), n.onClose())
        })
      })
    })
  }
}

function r(e, t, u, a) {
  (0, _.openModalLazy)(async () => {
    let {
      default: _
    } = await Promise.all([n.e("99387"), n.e("37483")]).then(n.bind(n, "241046"));
    return n => (0, o.jsx)(_, {
      ...n,
      automodDecision: {
        messageId: e,
        messageContent: t,
        decisionId: u,
        channel: a
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
    header: a.default.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_TITLE,
    confirmText: a.default.Messages.CONFIRM,
    onConfirm: e,
    cancelText: a.default.Messages.CANCEL,
    ...t,
    children: (0, o.jsx)(_.Text, {
      variant: "text-md/normal",
      children: a.default.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_BODY
    })
  }))
}