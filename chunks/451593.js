s.d(t, {
  E: function() {
return c;
  }
});
var n, a = s(652874),
  i = s(433517);
let r = '__DEBUG_PROFILE_EFFECTS_STORE',
  o = {
profileEffects: null !== (n = i.K.get(r)) && void 0 !== n ? n : {}
  },
  l = e => {
i.K.set(r, e.profileEffects);
  },
  c = (0, a.Z)(e => ({
...o,
upsertConfig: t => e(e => {
  let s = {
    ...e
  };
  return s.profileEffects[t.id] = t, l(s), s;
}),
deleteConfig: t => e(e => {
  let s = {
    ...e
  };
  return delete s.profileEffects[t], l(s), s;
})
  }));