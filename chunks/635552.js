"use strict";
a.r(t), a.d(t, {
  useHandleUseNow: function() {
    return l
  }
}), a("47120");
var r = a("470079"),
  s = a("809206"),
  n = a("350327"),
  o = a("328456");
let l = e => {
  let {
    product: t,
    onSuccess: a,
    onError: l
  } = e, [i, c] = r.useState(!1), {
    firstAvatarDecoration: u,
    firstProfileEffect: d
  } = (0, o.useShopProductItems)(t);
  return {
    handleUseNow: r.useCallback(async () => {
      c(!0);
      try {
        if (null != u && await (0, s.saveAccountChanges)({
            avatarDecoration: u
          }), null != d) {
          let e = {
            profile_effect_id: d.id
          };
          await (0, n.saveProfileChanges)(e)
        }
        a()
      } catch (e) {
        l(e)
      } finally {
        c(!1)
      }
    }, [u, d, a, l]),
    isApplying: i
  }
}