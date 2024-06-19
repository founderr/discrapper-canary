t.d(l, {
  s: function() {
    return i
  }
}), t(47120), t(724458);
var n = t(470079),
  s = t(544891),
  a = t(981631);
let o = new Map;

function i(e) {
  let [l, t] = n.useState(o.has(e) ? Array.from(o.get(e)) : []), [i, r] = n.useState(!1), C = n.useMemo(() => l.map(e => e.code), [l]), c = n.useMemo(() => l.reduce((e, l) => (e[l.code] = l, e), {}), [l]), d = n.useCallback(async () => {
    r(!0);
    let l = (await s.tn.get(a.ANM.GUILD_INSTANT_INVITES(e))).body.sort((e, l) => new Date(l.created_at).getTime() - new Date(e.created_at).getTime());
    t(l), o.set(e, new Set(l)), r(!1)
  }, [e]);
  return n.useEffect(() => {
    d()
  }, [e, d]), {
    invitesRaw: l,
    inviteCodes: C,
    invitesByCode: c,
    loading: i
  }
}