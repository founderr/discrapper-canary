"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("383018"),
  r = n("679653"),
  o = n("474643"),
  u = n("247013"),
  d = n("88093"),
  c = n("778588"),
  f = n("957255"),
  h = n("27618"),
  C = n("697218"),
  p = n("659500"),
  E = n("412861"),
  m = n("160864"),
  g = n("527382"),
  _ = n("49111"),
  S = n("782340"),
  T = function(e) {
    let {
      className: t,
      style: n,
      channel: T,
      draftType: A
    } = e, [M, I] = s.useState(!0), N = (0, l.useStateFromStores)([c.default], () => c.default.hasLayers()), v = (0, l.useStateFromStores)([f.default], () => null != T && f.default.can(_.Permissions.ATTACH_FILES, T), [T]), L = (0, l.useStateFromStores)([i.default], () => i.default.getActiveCommand(T.id)), R = null != L, x = T.getGuildId(), y = A === o.DraftType.FirstThreadMessage, O = (0, l.useStateFromStores)([C.default], () => {
      var e;
      return !0 == !(null === (e = C.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed)
    }), D = (0, l.useStateFromStores)([u.default], () => u.default.didAgree(x)), P = D && !O, j = s.useMemo(() => !N && (T.isPrivate() && !T.isManaged() || null != x && (!T.isNSFW() || P) && v && d.default.canChatInGuild(x)), [v, P, T, x, N]), b = y ? _.ChannelTypesSets.GUILD_THREADS_ONLY.has(T.type) ? S.default.Messages.UPLOAD_TO_NEW_POST : S.default.Messages.UPLOAD_TO_NEW_THREAD : M ? S.default.Messages.UPLOAD_TO.format({
      destination: (0, r.computeChannelName)(T, C.default, h.default, !0)
    }) : S.default.Messages.UPLOAD_AREA_TITLE_NO_CONFIRMATION;
    return R || !j ? null : (0, a.jsx)(m.default, {
      className: t,
      style: n,
      title: b,
      description: y ? S.default.Messages.UPLOAD_AREA_NEW_THREAD_HELP : S.default.Messages.UPLOAD_AREA_HELP,
      icons: g.DEFAULT_FILE_UPLOAD_ICONS,
      onDrop: e => {
        if (R) return !1;
        j && null != T && ((0, E.promptToUpload)(e, T, A, {
          requireConfirm: M,
          showLargeMessageDialog: !1
        }), p.ComponentDispatch.dispatchToLastSubscribed(_.ComponentActions.TEXTAREA_FOCUS))
      },
      onDragClear: () => I(!0),
      onDragOver: e => {
        if (R) return !1;
        !y && e.shiftKey === M && I(!e.shiftKey)
      }
    })
  }