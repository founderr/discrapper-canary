n.d(t, {
  d: function() {
    return r
  }
});
var s = n(652874),
  i = n(868888),
  l = n(433517),
  a = n(49898);
let r = (0, s.Z)((0, i.tJ)(e => ({
  selectedPage: a.S.SERVERS,
  setSelectedPage: t => e({
    selectedPage: t
  })
}), {
  name: "global-discovery",
  getStorage: () => ({
    getItem: e => {
      var t;
      return null !== (t = l.K.get(e)) && void 0 !== t ? t : null
    },
    setItem: (e, t) => l.K.set(e, t),
    removeItem: e => l.K.remove(e)
  }),
  partialize: e => ({
    selectedPage: e.selectedPage
  })
}))