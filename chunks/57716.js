i.d(t, {
  Z: function() {
    return o
  }
}), i(47120);
var n = i(470079),
  s = i(434650),
  a = i(626135),
  r = i(132871),
  l = i(981631);

function o(e) {
  let {
    collection: t
  } = e, [i, o] = n.useState(!1), c = (0, r.useApplicationDirectoryHistory)(e => e.guildId), d = (0, s.O)(e => {
    e && o(!0)
  });
  return n.useEffect(() => {
    i && a.default.track(l.rMx.APP_DIRECTORY_COLLECTION_VIEWED, {
      collection_id: t.id,
      guild_id: c
    })
  }, [i, t, c]), d
}