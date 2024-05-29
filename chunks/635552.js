"use strict";
r.r(t), r.d(t, {
  useHandleUseNow: function() {
    return s
  }
}), r("47120");
var a = r("470079"),
  o = r("809206"),
  l = r("350327"),
  n = r("328456");
let s = e => {
  let {
    product: t,
    onSuccess: r,
    onError: s
  } = e, [i, c] = a.useState(!1), {
    firstAvatarDecoration: u,
    firstProfileEffect: d
  } = (0, n.useShopProductItems)(t);
  return {
    handleUseNow: a.useCallback(async () => {
      c(!0);
      try {
        if (null != u && await (0, o.saveAccountChanges)({
            avatarDecoration: u
          }), null != d) {
          let e = {
            profile_effect_id: d.id
          };
          await (0, l.saveProfileChanges)(e)
        }
        r()
      } catch (e) {
        s(e)
      } finally {
        c(!1)
      }
    }, [u, d, r, s]),
    isApplying: i
  }
}