t.d(n, {
  U: function() {
    return T
  }
}), t(653041), t(47120), t(733860);
var i = t(470079),
  s = t(512722),
  l = t.n(s),
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
  l()(null != n, "guild must be present to be editing its integration settings");
  let t = (0, r.e7)([d.Z], () => d.Z.getHighestRole(n)),
    s = (0, r.Wu)([o.ZP], () => o.ZP.getMembers(e), [e]),
    T = (0, r.cj)([u.default], () => u.default.getUsers()),
    h = (0, r.Wu)([c.Z], () => Object.values(c.Z.getRoles(e)), [e]),
    O = i.useMemo(() => {
      let e = [];
      for (let t of s) {
        let i = T[t.userId];
        if (null == i || i.bot) continue;
        let s = i.id !== n.ownerId && !I.BT({
          permission: E.Plq.ADMINISTRATOR,
          user: i,
          context: n
        }) && d.Z.canManageUser(E.Plq.USE_APPLICATION_COMMANDS, i, n);
        e.push({
          id: i.id,
          canManage: s,
          nick: t.nick,
          username: i.username
        })
      }
      return e
    }, [n, s, T]),
    g = e => {
      var n;
      return e.managed && (null === (n = e.tags) || void 0 === n ? void 0 : n.bot_id) != null
    },
    A = i.useMemo(() => {
      let i = [];
      for (let s of h) {
        if (g(s)) continue;
        let l = !a.e$(s.permissions, E.Plq.ADMINISTRATOR) && d.Z.isRoleHigher(n, t, s),
          r = {
            id: s.id,
            name: s.name,
            canManage: l
          };
        s.id === e ? i.unshift(r) : i.push(r)
      }
      return i
    }, [h, e, n, t]),
    [C, S] = i.useState(""),
    x = i.useMemo(() => {
      let n = function(e) {
          return e.startsWith("@") ? e.substr(1) : e
        }(C),
        t = C.startsWith("@") ? A.filter(n => n.id === e) : A,
        i = (0, N.B)(O, m, n);
      return {
        members: i,
        roles: (0, N.B)(t, _, n)
      }
    }, [e, O, C, A]);
  return {
    query: C,
    results: x,
    setQuery: S,
    unfilteredCount: x.members.length + x.roles.length
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