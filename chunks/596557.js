"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("735250"),
  s = n("470079"),
  i = n("524437"),
  l = n("481060"),
  r = n("785697"),
  o = n("626135"),
  u = n("700785"),
  d = n("645041"),
  c = n("981631"),
  f = n("921944"),
  E = n("647086"),
  h = n("135899");

function _(e) {
  var t;
  let _ = (0, r.useCanCurrentUserViewDisableUnsafeGuildSettingsNotice)(e),
    C = h.MODERATOR_PERMISSIONS.some(t => (null == e ? void 0 : e.id) !== E.FAVORITES_RAW_GUILD_ID && u.canEveryone(t, e)),
    m = (null == e ? void 0 : e.defaultMessageNotifications) === c.UserNotificationSettings.ALL_MESSAGES,
    p = (0, d.useIsContentDismissed)(i.DismissibleGuildContent.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : c.EMPTY_STRING_SNOWFLAKE_ID),
    S = _ && (C || m) && !p,
    g = s.useCallback(() => {
      var t;
      (0, d.markContentAsDismissed)(i.DismissibleGuildContent.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : c.EMPTY_STRING_SNOWFLAKE_ID, !0, f.ContentDismissActionType.DISMISS)
    }, [e]),
    I = s.useRef(!1);
  s.useEffect(() => {
    if (S && !I.current) {
      var t;
      (0, l.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("99387"), n.e("54597")]).then(n.bind(n, "29022"));
        return n => (0, a.jsx)(t, {
          guild: e,
          canEveryoneModerate: C,
          isDefaultNotificationsAllMessages: m,
          ...n
        })
      }, {
        onCloseCallback: g
      }), o.default.track(c.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
        type: i.DismissibleGuildContent[i.DismissibleGuildContent.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
        guild_id: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : c.EMPTY_STRING_SNOWFLAKE_ID
      }), I.current = !0
    }
  }, [C, e, g, m, S])
}