n.d(t, {
  V: function() {
    return s
  }
}), n(47120);
var l = n(442837),
  i = n(375954);

function s(e, t) {
  return (0, l.e7)([i.Z], () => {
    if (null == t) return;
    let n = i.Z.getMessages(e),
      l = n.findOldest(e => e.author.id === t);
    if (null != l) {
      for (let e of n.toArray()) {
        if (e.author.id !== t) break;
        e.content.length > (null == l ? void 0 : l.content.length) && (l = e)
      }
      return l
    }
  }, [e, t])
}