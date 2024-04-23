"use strict";
s.r(t), s.d(t, {
  useClearNewBadge: function() {
    return T
  },
  useShouldScrollToWhatsNew: function() {
    return E
  }
}), s("47120");
var a = s("470079"),
  r = s("399606"),
  i = s("524437"),
  n = s("211242"),
  l = s("605236"),
  o = s("706140"),
  u = s("581883"),
  d = s("494127"),
  c = s("526761");
let _ = [
    [i.DismissibleContent.WHATS_NEW_AVATAR_DECOS_NOTIF_BADGE, d.WhatsNewAvatarDecoRollout, i.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP],
    [i.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_NOTIF_BADGE, d.WhatsNewProfileFXRollout, i.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP]
  ],
  E = () => _.some(e => {
    let [t, s, a] = e, {
      flipped: r
    } = s.getCurrentConfig({
      location: "useShouldShowNewBadge"
    });
    return !!r && !(0, l.isDismissibleContentDismissed)(t)
  }),
  T = () => {
    let e = (0, n.useBlockedPaymentsConfig)(),
      t = _.map(e => {
        let [t, s] = e, {
          flipped: a
        } = s.getCurrentConfig({
          location: "useClearNewBadge"
        });
        return a ? t : null
      }).filter(e => null != e),
      [s] = (0, o.useGetDismissibleContent)(e ? [] : t);
    null != s && t.includes(s) && !e && (0, l.markDismissibleContentAsDismissed)(s)
  };
t.default = () => {
  let e = (0, n.useBlockedPaymentsConfig)(),
    t = (0, r.useStateFromStores)([u.default], () => u.default.hasLoaded(c.UserSettingsTypes.PRELOADED_USER_SETTINGS)),
    s = _.map(e => {
      let [t, s, a] = e, {
        flipped: r
      } = s.getCurrentConfig({
        location: "useShouldShowNewBadge"
      }), i = null != a && (0, l.isDismissibleContentDismissed)(a);
      return r && !i ? t : null
    }).filter(e => null != e);
  a.useEffect(() => {
    t && _.forEach(e => {
      let [t, s, a] = e;
      if (null != a)(0, l.isDismissibleContentDismissed)(a) && (0, l.markDismissibleContentAsDismissed)(t)
    })
  }, [s, t]);
  let [i] = (0, o.useGetDismissibleContent)(e ? [] : s);
  return null != i && s.includes(i) && !e
}