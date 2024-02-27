"use strict";
s.r(t), s.d(t, {
  useShouldScrollToWhatsNew: function() {
    return E
  },
  useClearNewBadge: function() {
    return I
  },
  default: function() {
    return T
  }
}), s("222007");
var a = s("884691"),
  i = s("65597"),
  r = s("151426"),
  n = s("619935"),
  l = s("10641"),
  o = s("235145"),
  u = s("374363"),
  d = s("184684"),
  c = s("397336");
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
    return !!i && !(0, l.isDismissibleContentDismissed)(t)
  }),
  I = () => {
    let e = (0, n.useBlockedPaymentsConfig)(),
      t = _.map(e => {
        let [t, s] = e, {
          flipped: a
        } = s.getCurrentConfig({
          location: "useClearNewBadge"
        });
        return a ? t : null
      }).filter(e => null != e),
      [s] = (0, o.useGetDismissibleContent)(e ? [] : t),
      a = null != s && t.includes(s) && !e;
    a && (0, l.markDismissibleContentAsDismissed)(s)
  };
var T = () => {
  let e = (0, n.useBlockedPaymentsConfig)(),
    t = (0, i.default)([u.default], () => u.default.hasLoaded(c.UserSettingsTypes.PRELOADED_USER_SETTINGS)),
    s = _.map(e => {
      let [t, s, a] = e, {
        flipped: i
      } = s.getCurrentConfig({
        location: "useShouldShowNewBadge"
      }), r = null != a && (0, l.isDismissibleContentDismissed)(a);
      return i && !r ? t : null
    }).filter(e => null != e);
  a.useEffect(() => {
    t && _.forEach(e => {
      let [t, s, a] = e;
      if (null == a) return;
      let i = (0, l.isDismissibleContentDismissed)(a);
      i && (0, l.markDismissibleContentAsDismissed)(t)
    })
  }, [s, t]);
  let [r] = (0, o.useGetDismissibleContent)(e ? [] : s), d = null != r && s.includes(r);
  return d && !e
}