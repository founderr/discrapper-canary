t.d(n, {
  U: function() {
    return T
  }
}), t(653041), t(47120), t(733860);
var i = t(470079),
  l = t(512722),
  s = t.n(l),
  a = t(149765),
  r = t(442837),
  o = t(271383),
  c = t(430824),
  d = t(496675),
  u = t(594174),
  I = t(700785),
  N = t(282923),
  E = t(981631);

function T(e) {
  let n = (0, r.e7)([c.Z], () => c.Z.getGuild(e));
  s()(null != n, "guild must be present to be editing its integration settings");
  let t = (0, r.e7)([d.Z], () => d.Z.getHighestRole(n)),
    l = (0, r.Wu)([o.ZP], () => o.ZP.getMembers(e), [e]),
    T = (0, r.cj)([u.default], () => u.default.getUsers()),
    h = (0, r.Wu)([c.Z], () => Object.values(c.Z.getRoles(e)), [e]),
    g = i.useMemo(() => {
      let e = [];
      for (let t of l) {
        let i = T[t.userId];
        if (null == i || i.bot) continue;
        let l = i.id !== n.ownerId && !I.BT({
          permission: E.Plq.ADMINISTRATOR,
          user: i,
          context: n
        }) && d.Z.canManageUser(E.Plq.USE_APPLICATION_COMMANDS, i, n);
        e.push({
          id: i.id,
          canManage: l,
          nick: t.nick,
          username: i.username
        })
      }
      return e
    }, [n, l, T]),
    O = e => {
      var n;
      return e.managed && (null === (n = e.tags) || void 0 === n ? void 0 : n.bot_id) != null
    },
    A = i.useMemo(() => {
      let i = [];
      for (let l of h) {
        if (O(l)) continue;
        let s = !a.e$(l.permissions, E.Plq.ADMINISTRATOR) && d.Z.isRoleHigher(n, t, l),
          r = {
            id: l.id,
            name: l.name,
            canManage: s
          };
        l.id === e ? i.unshift(r) : i.push(r)
      }
      return i
    }, [h, e, n, t]),
    [x, C] = i.useState(""),
    S = i.useMemo(() => {
      let n = function(e) {
          return e.startsWith("@") ? e.substr(1) : e
        }(x),
        t = x.startsWith("@") ? A.filter(n => n.id === e) : A,
        i = (0, N.B)(g, m, n);
      return {
        members: i,
        roles: (0, N.B)(t, _, n)
      }
    }, [e, g, x, A]);
  return {
    query: x,
    results: S,
    setQuery: C,
    unfilteredCount: S.members.length + S.roles.length
  }
}

function m(e) {
  let n = [e.username];
  return (null == e ? void 0 : e.nick) != null && n.push(e.nick), {
    id: e.id,
    names: n
  }
}

function _(e) {
  return {
    id: e.id,
    names: [e.name]
  }
}