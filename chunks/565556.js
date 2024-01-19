"use strict";
l.r(t), l.d(t, {
  default: function() {
    return S
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
  c = l("685665"),
  f = l("271938"),
  m = l("965397"),
  E = l("530346"),
  M = l("781896"),
  h = l("599110"),
  T = l("130037"),
  x = l("466818"),
  _ = l("624663"),
  H = l("49111"),
  A = l("782340"),
  p = l("275699");

function S(e) {
  var t;
  let {
    guildId: S
  } = e, {
    analyticsLocations: L
  } = (0, c.default)(), N = null !== (t = null == L ? void 0 : L[0]) && void 0 !== t ? t : null, g = (0, x.useCanAccessBulkBanningFeature)(S, N), {
    selectedUserIds: v,
    clearSelection: I
  } = (0, _.default)(S), j = v.size > 0, R = async (e, t, l, a) => {
    try {
      let n = await r.default.banMultipleUsers(e, t, l, a);
      (0, d.showToast)((0, d.createToast)(A.default.Messages.BAN_MULTIPLE_SUCCESS_TOAST, d.ToastType.SUCCESS)), h.default.track(H.AnalyticEvents.BULK_MODERATION_ACTION_COMPLETED, {
        ...(0, C.collectGuildAnalyticsMetadata)(e),
        action_type: T.ModerationActionType.BAN,
        target_user_ids: [...v],
        mod_user_id: f.default.getId(),
        successful_user_ids: n.body.banned_users,
        location: N
      })
    } catch (e) {
      (0, d.showToast)((0, d.createToast)(A.default.Messages.BAN_MULTIPLE_FAILED_TOAST, d.ToastType.FAILURE))
    }
    I()
  }, b = n.useCallback(() => {
    I()
  }, [I]), D = (0, a.jsxs)("span", {
    className: p.messageContainer,
    children: [(0, a.jsx)(M.default, {
      width: 24,
      height: 24,
      color: (0, o.useToken)(s.default.unsafe_rawColors.PRIMARY_500).hex()
    }), (0, a.jsx)(d.Text, {
      variant: "heading-md/bold",
      color: "text-normal",
      children: A.default.Messages.MEMBER_SAFETY_ACTION_NOTICE_SELECTED_MEMBERS_MESSAGE.format({
        count: v.size
      })
    }), (0, a.jsx)(d.Button, {
      color: d.Button.Colors.LINK,
      look: d.Button.Looks.LINK,
      onClick: b,
      className: p.clearButton,
      children: A.default.Messages.MEMBER_SAFETY_ACTION_NOTICE_CLEAR_SELECTION
    })]
  }), O = (0, a.jsxs)("span", {
    className: p.buttonContainer,
    children: [(0, a.jsx)(E.default, {
      width: 20,
      height: 20
    }), (0, a.jsx)(d.Text, {
      variant: "text-sm/semibold",
      children: A.default.Messages.MEMBER_SAFETY_ACTION_NOTICE_BAN_ACTION
    })]
  });
  return g ? (0, a.jsx)(i.default, {
    component: "div",
    className: p.saveNoticeContainer,
    children: j && (0, a.jsx)(m.default, {
      children: (0, a.jsx)(u.default, {
        onSave: () => {
          h.default.track(H.AnalyticEvents.BULK_MODERATION_ACTION_STARTED, {
            ...(0, C.collectGuildAnalyticsMetadata)(S),
            action_type: T.ModerationActionType.BAN,
            target_user_ids: [...v],
            mod_user_id: f.default.getId(),
            location: N
          }), (0, d.openModalLazy)(async () => {
            let {
              default: e
            } = await l.el("743506").then(l.bind(l, "743506"));
            return t => (0, a.jsx)(e, {
              ...t,
              guildId: S,
              canBulkBan: g,
              userIds: v,
              onBanMultiple: R
            })
          })
        },
        onSaveText: O,
        onSaveButtonColor: d.ButtonColors.RED,
        message: D
      })
    })
  }) : null
}