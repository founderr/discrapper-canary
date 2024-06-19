t.d(l, {
  Z: function() {
    return L
  }
}), t(47120);
var n = t(735250),
  s = t(470079),
  a = t(692547),
  o = t(215569),
  i = t(180035),
  r = t(481060),
  C = t(749210),
  c = t(852860),
  d = t(367907),
  u = t(314897),
  E = t(626135),
  m = t(910693),
  _ = t(241559),
  M = t(256003),
  h = t(981631),
  x = t(689938),
  T = t(379081);

function L(e) {
  let {
    guildId: l
  } = e, L = (0, _.xC)(l), {
    selectedUserIds: H,
    clearSelection: g
  } = (0, M.Z)(l), A = H.size > 0, I = async (e, l, t, n) => {
    try {
      let s = await C.Z.banMultipleUsers(e, l, t, n);
      (0, r.showToast)((0, r.createToast)(x.Z.Messages.BAN_MULTIPLE_SUCCESS_TOAST, r.ToastType.SUCCESS)), E.default.track(h.rMx.BULK_MODERATION_ACTION_COMPLETED, {
        ...(0, d.hH)(e),
        action_type: m.jQ.BAN,
        target_user_ids: [...H],
        mod_user_id: u.default.getId(),
        successful_user_ids: s.body.banned_users,
        location
      })
    } catch (e) {
      (0, r.showToast)((0, r.createToast)(x.Z.Messages.BAN_MULTIPLE_FAILED_TOAST, r.ToastType.FAILURE))
    }
    g()
  }, N = s.useCallback(() => {
    g()
  }, [g]), R = (0, n.jsxs)("span", {
    className: T.messageContainer,
    children: [(0, n.jsx)(r.UserIcon, {
      size: "custom",
      width: 24,
      height: 24,
      color: (0, i.d)(a.Z.unsafe_rawColors.PRIMARY_500).hex()
    }), (0, n.jsx)(r.Text, {
      variant: "heading-md/bold",
      color: "text-normal",
      children: x.Z.Messages.MEMBER_SAFETY_ACTION_NOTICE_SELECTED_MEMBERS_MESSAGE.format({
        count: H.size
      })
    }), (0, n.jsx)(r.Button, {
      color: r.Button.Colors.LINK,
      look: r.Button.Looks.LINK,
      onClick: N,
      className: T.clearButton,
      children: x.Z.Messages.MEMBER_SAFETY_ACTION_NOTICE_CLEAR_SELECTION
    })]
  }), p = (0, n.jsxs)("span", {
    className: T.buttonContainer,
    children: [(0, n.jsx)(r.HammerIcon, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20
    }), (0, n.jsx)(r.Text, {
      variant: "text-sm/semibold",
      children: x.Z.Messages.MEMBER_SAFETY_ACTION_NOTICE_BAN_ACTION
    })]
  });
  return L ? (0, n.jsx)(o.W, {
    component: "div",
    className: T.saveNoticeContainer,
    children: A && (0, n.jsx)(r.SlideIn, {
      children: (0, n.jsx)(c.Z, {
        onSave: () => {
          E.default.track(h.rMx.BULK_MODERATION_ACTION_STARTED, {
            ...(0, d.hH)(l),
            action_type: m.jQ.BAN,
            target_user_ids: [...H],
            mod_user_id: u.default.getId(),
            location
          }), (0, r.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([t.e("99387"), t.e("43350")]).then(t.bind(t, 98746));
            return t => (0, n.jsx)(e, {
              ...t,
              guildId: l,
              canBulkBan: L,
              userIds: H,
              onBanMultiple: I
            })
          })
        },
        onSaveText: p,
        onSaveButtonColor: r.ButtonColors.RED,
        message: R
      })
    })
  }) : null
}