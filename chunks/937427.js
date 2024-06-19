t.d(n, {
  w: function() {
    return d
  }
}), t(47120), t(653041), t(733860);
var i = t(470079),
  s = t(581364),
  l = t(984933),
  a = t(496675),
  r = t(282923),
  o = t(981631),
  c = t(689938);

function d(e) {
  let n = i.useMemo(() => {
      let n = l.ZP.getChannels(e),
        t = [...n[l.sH]];
      t.push(...n[l.Zb].filter(e => e.channel.isGuildVocal()));
      let i = t.map(e => ({
        id: e.channel.id,
        name: e.channel.name,
        canManage: a.Z.can(o.Plq.MANAGE_ROLES, e.channel)
      }));
      return i.unshift({
        id: (0, s.bD)(e),
        name: c.Z.Messages.INTEGRATIONS_APPLICATION_ALL_CHANNELS,
        canManage: !0
      }), i
    }, [e]),
    [t, d] = i.useState(""),
    I = i.useMemo(() => {
      let e = function(e) {
        return e.startsWith("#") ? e.substr(1) : e
      }(t);
      return (0, r.B)(n, u, e)
    }, [n, t]);
  return {
    query: t,
    results: I,
    setQuery: d,
    unfilteredCount: n.length
  }
}

function u(e) {
  return {
    id: e.id,
    names: [e.name]
  }
}