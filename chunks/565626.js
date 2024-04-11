"use strict";
s.r(t), s.d(t, {
  useClearNewBadge: function() {
    return C
  },
  useShouldScrollToWhatsNew: function() {
    return E
  }
}), s("47120");
var a = s("470079"),
  i = s("399606"),
  r = s("524437"),
  l = s("211242"),
  n = s("605236"),
  o = s("706140"),
  u = s("581883"),
  d = s("494127"),
  c = s("526761");
let _ = [
    [r.DismissibleContent.WHATS_NEW_AVATAR_DECOS_NOTIF_BADGE, d.WhatsNewAvatarDecoRollout, r.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP],
    [r.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_NOTIF_BADGE, d.WhatsNewProfileFXRollout, r.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP]
  ],
  E = () => _.some(e => {
    let [t, s, a] = e, {
      flipped: i
    } = s.getCurrentConfig({
      location: "useShouldShowNewBadge"
    });
    return !!i && !(0, n.isDismissibleContentDismissed)(t)
  }),
  C = () => {
    let e = (0, l.useBlockedPaymentsConfig)(),
      t = _.map(e => {
        let [t, s] = e, {
          flipped: a
        } = s.getCurrentConfig({
          location: "useClearNewBadge"
        });
        return a ? t : null
      }).filter(e => null != e),
      [s] = (0, o.useGetDismissibleContent)(e ? [] : t);
    null != s && t.includes(s) && !e && (0, n.markDismissibleContentAsDismissed)(s)
  };
t.default = () => {
  let e = (0, l.useBlockedPaymentsConfig)(),
    t = (0, i.useStateFromStores)([u.default], () => u.default.hasLoaded(c.UserSettingsTypes.PRELOADED_USER_SETTINGS)),
    s = _.map(e => {
      let [t, s, a] = e, {
        flipped: i
      } = s.getCurrentConfig({
        location: "useShouldShowNewBadge"
      }), r = null != a && (0, n.isDismissibleContentDismissed)(a);
      return i && !r ? t : null
    }).filter(e => null != e);
  a.useEffect(() => {
    t && _.forEach(e => {
      let [t, s, a] = e;
      if (null != a)(0, n.isDismissibleContentDismissed)(a) && (0, n.markDismissibleContentAsDismissed)(t)
    })
  }, [s, t]);
  let [r] = (0, o.useGetDismissibleContent)(e ? [] : s);
  return null != r && s.includes(r) && !e
}