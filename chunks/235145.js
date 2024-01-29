"use strict";
l.r(t), l.d(t, {
  useGetDismissibleContent: function() {
    return _
  }
});
var s = l("884691"),
  i = l("446674"),
  n = l("374363"),
  u = l("162771"),
  a = l("674268"),
  o = l("989691"),
  r = l("862853"),
  d = l("10641"),
  c = l("846614"),
  f = l("397336");

function _(e, t, l) {
  let _ = (0, i.useStateFromStores)([n.default], () => {
      var e;
      return null === (e = n.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
    }),
    S = (0, i.useStateFromStores)([u.default], () => u.default.getGuildId()),
    T = (0, c.useNewUserDismissibleContent)(e),
    E = null;
  n.default.hasLoaded(f.UserSettingsTypes.PRELOADED_USER_SETTINGS) ? E = T.find(e => null == _ || !(0, a.hasBit)(_, e)) : null != _ && (E = T.find(e => !(0, a.hasBit)(_, e)));
  let C = (0, r.default)(e => null != E && e.currentlyShown.has(E)),
    p = (0, i.useStateFromStores)([o.default], () => null != E && o.default.hasUserHitDCCap(E));
  s.useEffect(() => {
    if (null != E) return (0, d.requestMarkDismissibleContentAsShown)(E, {
      groupName: t,
      guildId: S
    }, l), () => {
      if (null == E) return;
      let e = !o.default.hasUserHitDCCap();
      (0, r.removeCandidateContent)({
        content: E,
        groupName: t
      }, e)
    }
  }, [E, t, S, p, l]);
  let m = s.useCallback(e => {
    null != E && (0, d.markDismissibleContentAsDismissed)(E, {
      dismissAction: e,
      groupName: t,
      guildId: S
    })
  }, [E, t, S]);
  return [C && null != E ? E : null, m]
}