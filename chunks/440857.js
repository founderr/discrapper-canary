"use strict";
l.r(t), l.d(t, {
  default: function() {
    return A
  }
}), l("47120");
var a = l("735250"),
  s = l("470079"),
  n = l("692547"),
  o = l("215569"),
  i = l("180035"),
  r = l("481060"),
  d = l("749210"),
  u = l("852860"),
  C = l("367907"),
  c = l("314897"),
  m = l("340149"),
  E = l("964309"),
  f = l("626135"),
  _ = l("910693"),
  M = l("241559"),
  h = l("256003"),
  S = l("981631"),
  T = l("689938"),
  x = l("621747");

function A(e) {
  let {
    guildId: t
  } = e, A = (0, M.useCanAccessBulkBanningFeature)(t), {
    selectedUserIds: p,
    clearSelection: g
  } = (0, h.default)(t), L = p.size > 0, N = async (e, t, l, a) => {
    try {
      let s = await d.default.banMultipleUsers(e, t, l, a);
      (0, r.showToast)((0, r.createToast)(T.default.Messages.BAN_MULTIPLE_SUCCESS_TOAST, r.ToastType.SUCCESS)), f.default.track(S.AnalyticEvents.BULK_MODERATION_ACTION_COMPLETED, {
        ...(0, C.collectGuildAnalyticsMetadata)(e),
        action_type: _.ModerationActionType.BAN,
        target_user_ids: [...p],
        mod_user_id: c.default.getId(),
        successful_user_ids: s.body.banned_users,
        location
      })
    } catch (e) {
      (0, r.showToast)((0, r.createToast)(T.default.Messages.BAN_MULTIPLE_FAILED_TOAST, r.ToastType.FAILURE))
    }
    g()
  }, H = s.useCallback(() => {
    g()
  }, [g]), R = (0, a.jsxs)("span", {
    className: x.messageContainer,
    children: [(0, a.jsx)(E.default, {
      width: 24,
      height: 24,
      color: (0, i.useToken)(n.default.unsafe_rawColors.PRIMARY_500).hex()
    }), (0, a.jsx)(r.Text, {
      variant: "heading-md/bold",
      color: "text-normal",
      children: T.default.Messages.MEMBER_SAFETY_ACTION_NOTICE_SELECTED_MEMBERS_MESSAGE.format({
        count: p.size
      })
    }), (0, a.jsx)(r.Button, {
      color: r.Button.Colors.LINK,
      look: r.Button.Looks.LINK,
      onClick: H,
      className: x.clearButton,
      children: T.default.Messages.MEMBER_SAFETY_ACTION_NOTICE_CLEAR_SELECTION
    })]
  }), I = (0, a.jsxs)("span", {
    className: x.buttonContainer,
    children: [(0, a.jsx)(m.default, {
      width: 20,
      height: 20
    }), (0, a.jsx)(r.Text, {
      variant: "text-sm/semibold",
      children: T.default.Messages.MEMBER_SAFETY_ACTION_NOTICE_BAN_ACTION
    })]
  });
  return A ? (0, a.jsx)(o.TransitionGroup, {
    component: "div",
    className: x.saveNoticeContainer,
    children: L && (0, a.jsx)(r.SlideIn, {
      children: (0, a.jsx)(u.default, {
        onSave: () => {
          f.default.track(S.AnalyticEvents.BULK_MODERATION_ACTION_STARTED, {
            ...(0, C.collectGuildAnalyticsMetadata)(t),
            action_type: _.ModerationActionType.BAN,
            target_user_ids: [...p],
            mod_user_id: c.default.getId(),
            location
          }), (0, r.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([l.e("99387"), l.e("43350")]).then(l.bind(l, "98746"));
            return l => (0, a.jsx)(e, {
              ...l,
              guildId: t,
              canBulkBan: A,
              userIds: p,
              onBanMultiple: N
            })
          })
        },
        onSaveText: I,
        onSaveButtonColor: r.ButtonColors.RED,
        message: R
      })
    })
  }) : null
}