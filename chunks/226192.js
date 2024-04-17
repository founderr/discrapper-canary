"use strict";
n.r(t), n.d(t, {
  getPromiseableActionHandlers: function() {
    return a
  },
  openConfirmRemoveMentionRaid: function() {
    return s
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
  u = n("273504"),
  r = n("689938");

function a(e) {
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
    [u.AutomodActionType.FLAG_TO_CHANNEL]: (t, r) => new Promise(a => {
      (0, _.openModalLazy)(async () => {
        let {
          default: _
        } = await Promise.all([n.e("99387"), n.e("74543")]).then(n.bind(n, "643611")), E = t.actions.find(e => e.type === u.AutomodActionType.FLAG_TO_CHANNEL);
        return n => (0, o.jsx)(_, {
          action: r,
          isEdit: null != E,
          triggerType: t.triggerType,
          guildId: e,
          onEditChannel: e => {
            r.metadata.channelId = e, t.exemptChannels.add(e), a(r), n.onClose()
          },
          ...n,
          onClose: () => (a(null), n.onClose())
        })
      })
    }),
    [u.AutomodActionType.USER_COMMUNICATION_DISABLED]: (e, t) => new Promise(r => {
      (0, _.openModalLazy)(async () => {
        let {
          default: _
        } = await Promise.all([n.e("99387"), n.e("78273")]).then(n.bind(n, "41767")), a = e.actions.find(e => e.type === u.AutomodActionType.USER_COMMUNICATION_DISABLED);
        return n => (0, o.jsx)(_, {
          action: t,
          isEdit: null != a,
          triggerType: e.triggerType,
          onUpdateDuration: e => {
            null != e && (t.metadata.durationSeconds = e), r(t), n.onClose()
          },
          ...n,
          onClose: () => (r(null), n.onClose())
        })
      })
    })
  }
}

function E(e, t, u, r) {
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
        channel: r
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

function s(e) {
  (0, _.openModal)(t => (0, o.jsx)(_.ConfirmModal, {
    header: r.default.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_TITLE,
    confirmText: r.default.Messages.CONFIRM,
    onConfirm: e,
    cancelText: r.default.Messages.CANCEL,
    ...t,
    children: (0, o.jsx)(_.Text, {
      variant: "text-md/normal",
      children: r.default.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_BODY
    })
  }))
}