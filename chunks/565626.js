"use strict";
s.r(t), s.d(t, {
  useClearNewBadge: function() {
    return R
  },
  useShouldScrollToWhatsNew: function() {
    return I
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
  c = s("687362"),
  _ = s("734741"),
  E = s("526761");
let T = [
    [i.DismissibleContent.WHATS_NEW_AVATAR_DECOS_NOTIF_BADGE, d.WhatsNewAvatarDecoRollout, i.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP],
    [i.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_NOTIF_BADGE, d.WhatsNewProfileFXRollout, i.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP]
  ],
  I = e => {
    let t = T.some(e => {
        let [t, s, a] = e, {
          flipped: r
        } = s.getCurrentConfig({
          location: "useShouldShowNewBadge"
        });
        return !!r && !(0, l.isDismissibleContentDismissed)(t)
      }),
      s = (0, c.useShouldScrollToTenureRewardContent)(e),
      a = (0, _.shouldScrollToMarketingMomentContent)();
    return t || a || !0 === s
  },
  R = () => {
    let e = (0, n.useBlockedPaymentsConfig)(),
      t = T.map(e => {
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
    t = (0, r.useStateFromStores)([u.default], () => u.default.hasLoaded(E.UserSettingsTypes.PRELOADED_USER_SETTINGS)),
    s = T.map(e => {
      let [t, s, a] = e, {
        flipped: r
      } = s.getCurrentConfig({
        location: "useShouldShowNewBadge"
      }), i = null != a && (0, l.isDismissibleContentDismissed)(a);
      return r && !i ? t : null
    }).filter(e => null != e);
  a.useEffect(() => {
    t && T.forEach(e => {
      let [t, s, a] = e;
      if (null != a)(0, l.isDismissibleContentDismissed)(a) && (0, l.markDismissibleContentAsDismissed)(t)
    })
  }, [s, t]);
  let [i] = (0, o.useGetDismissibleContent)(e ? [] : s);
  return null != i && s.includes(i) && !e
}