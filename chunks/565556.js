"use strict";
l.r(t), l.d(t, {
  default: function() {
    return H
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("669491"),
  i = l("266491"),
  o = l("708253"),
  d = l("77078"),
  r = l("851387"),
  u = l("45299"),
  C = l("716241"),
  c = l("271938"),
  f = l("965397"),
  m = l("530346"),
  E = l("781896"),
  M = l("599110"),
  h = l("130037"),
  T = l("466818"),
  x = l("624663"),
  _ = l("49111"),
  g = l("782340"),
  p = l("275699");

function H(e) {
  let {
    guildId: t
  } = e, H = (0, T.useCanAccessBulkBanningFeature)(t), {
    selectedUserIds: A,
    clearSelection: S
  } = (0, x.default)(t), L = A.size > 0, N = async (e, t, l, a) => {
    try {
      let n = await r.default.banMultipleUsers(e, t, l, a);
      (0, d.showToast)((0, d.createToast)(g.default.Messages.BAN_MULTIPLE_SUCCESS_TOAST, d.ToastType.SUCCESS)), M.default.track(_.AnalyticEvents.BULK_MODERATION_ACTION_COMPLETED, {
        ...(0, C.collectGuildAnalyticsMetadata)(e),
        action_type: h.ModerationActionType.BAN,
        target_user_ids: [...A],
        mod_user_id: c.default.getId(),
        successful_user_ids: n.body.banned_users,
        location
      })
    } catch (e) {
      (0, d.showToast)((0, d.createToast)(g.default.Messages.BAN_MULTIPLE_FAILED_TOAST, d.ToastType.FAILURE))
    }
    S()
  }, I = n.useCallback(() => {
    S()
  }, [S]), v = (0, a.jsxs)("span", {
    className: p.messageContainer,
    children: [(0, a.jsx)(E.default, {
      width: 24,
      height: 24,
      color: (0, o.useToken)(s.default.unsafe_rawColors.PRIMARY_500).hex()
    }), (0, a.jsx)(d.Text, {
      variant: "heading-md/bold",
      color: "text-normal",
      children: g.default.Messages.MEMBER_SAFETY_ACTION_NOTICE_SELECTED_MEMBERS_MESSAGE.format({
        count: A.size
      })
    }), (0, a.jsx)(d.Button, {
      color: d.Button.Colors.LINK,
      look: d.Button.Looks.LINK,
      onClick: I,
      className: p.clearButton,
      children: g.default.Messages.MEMBER_SAFETY_ACTION_NOTICE_CLEAR_SELECTION
    })]
  }), b = (0, a.jsxs)("span", {
    className: p.buttonContainer,
    children: [(0, a.jsx)(m.default, {
      width: 20,
      height: 20
    }), (0, a.jsx)(d.Text, {
      variant: "text-sm/semibold",
      children: g.default.Messages.MEMBER_SAFETY_ACTION_NOTICE_BAN_ACTION
    })]
  });
  return H ? (0, a.jsx)(i.default, {
    component: "div",
    className: p.saveNoticeContainer,
    children: L && (0, a.jsx)(f.default, {
      children: (0, a.jsx)(u.default, {
        onSave: () => {
          M.default.track(_.AnalyticEvents.BULK_MODERATION_ACTION_STARTED, {
            ...(0, C.collectGuildAnalyticsMetadata)(t),
            action_type: h.ModerationActionType.BAN,
            target_user_ids: [...A],
            mod_user_id: c.default.getId(),
            location
          }), (0, d.openModalLazy)(async () => {
            let {
              default: e
            } = await l.el("743506").then(l.bind(l, "743506"));
            return l => (0, a.jsx)(e, {
              ...l,
              guildId: t,
              canBulkBan: H,
              userIds: A,
              onBanMultiple: N
            })
          })
        },
        onSaveText: b,
        onSaveButtonColor: d.ButtonColors.RED,
        message: v
      })
    })
  }) : null
}