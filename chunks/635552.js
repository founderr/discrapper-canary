n.d(t, {
  W: function() {
return d;
  }
}), n(47120);
var r = n(470079),
  a = n(979554),
  o = n(809206),
  l = n(350327),
  i = n(884697),
  s = n(328456),
  c = n(689938);
let d = e => {
  let {
product: t,
onSuccess: d,
onError: u
  } = e, [f, p] = r.useState(!1), {
firstAvatarDecoration: g,
firstProfileEffect: C
  } = (0, s.R)(t), v = (0, i.x6)(t) ? c.Z.Messages.COLLECTIBLES_PROFILE_UPDATE_NOTIFICATION : t.type === a.Z.AVATAR_DECORATION ? c.Z.Messages.COLLECTIBLES_AVATAR_DECO_UPDATED_NOTIFICATION : c.Z.Messages.COLLECTIBLES_PFX_UPDATED_NOTIFICATION;
  return {
handleUseNow: r.useCallback(async () => {
  p(!0);
  try {
    if (null != g && await (0, o.Mn)({
        avatarDecoration: g
      }), null != C) {
      let e = {
        profile_effect_id: C.id
      };
      await (0, l.Z)(e);
    } {
      let {
        ToastPosition: e,
        ToastType: t,
        createToast: r,
        popToast: a,
        showToast: o
      } = await Promise.resolve().then(n.bind(n, 481060));
      a(), o(r(v, t.MESSAGE, {
        duration: 6000,
        position: e.TOP
      }));
    }
    null == d || d();
  } catch (e) {
    null == u || u(e);
  } finally {
    p(!1);
  }
}, [
  g,
  C,
  d,
  v,
  u
]),
isApplying: f
  };
};