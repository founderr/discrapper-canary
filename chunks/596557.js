"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("524437"),
  i = a("481060"),
  r = a("785697"),
  o = a("626135"),
  u = a("700785"),
  d = a("645041"),
  c = a("981631"),
  f = a("921944"),
  E = a("647086"),
  h = a("135899");

function _(e) {
  var t;
  let _ = (0, r.useCanCurrentUserViewDisableUnsafeGuildSettingsNotice)(e),
    C = h.MODERATOR_PERMISSIONS.some(t => (null == e ? void 0 : e.id) !== E.FAVORITES_RAW_GUILD_ID && u.canEveryone(t, e)),
    m = (null == e ? void 0 : e.defaultMessageNotifications) === c.UserNotificationSettings.ALL_MESSAGES,
    S = (0, d.useIsContentDismissed)(l.DismissibleGuildContent.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : c.EMPTY_STRING_SNOWFLAKE_ID),
    p = _ && (C || m) && !S,
    I = s.useCallback(() => {
      var t;
      (0, d.markContentAsDismissed)(l.DismissibleGuildContent.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : c.EMPTY_STRING_SNOWFLAKE_ID, !0, f.ContentDismissActionType.DISMISS)
    }, [e]),
    T = s.useRef(!1);
  s.useEffect(() => {
    if (p && !T.current) {
      var t;
      (0, i.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([a.e("99387"), a.e("54597")]).then(a.bind(a, "29022"));
        return a => (0, n.jsx)(t, {
          guild: e,
          canEveryoneModerate: C,
          isDefaultNotificationsAllMessages: m,
          ...a
        })
      }, {
        onCloseCallback: I
      }), o.default.track(c.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
        type: l.DismissibleGuildContent[l.DismissibleGuildContent.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
        guild_id: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : c.EMPTY_STRING_SNOWFLAKE_ID
      }), T.current = !0
    }
  }, [C, e, I, m, p])
}