t.d(n, {
  Z: function() {
    return g
  }
}), t(653041), t(47120);
var i = t(470079),
  s = t(512722),
  l = t.n(s),
  a = t(392711),
  r = t.n(a),
  o = t(442837),
  c = t(139387),
  d = t(895924),
  u = t(581364),
  I = t(592125),
  N = t(430824),
  E = t(496675),
  T = t(594174),
  m = t(823379),
  _ = t(905753),
  h = t(399860),
  O = t(981631);

function g(e, n, t) {
  let s = (0, o.e7)([_.Z], () => _.Z.getApplicationPermissions()),
    a = i.useMemo(() => (function(e, n) {
      let t = {
          ...n
        },
        i = (0, u.bD)(e),
        s = (0, h.rE)(i, d.Kw.CHANNEL),
        l = (0, h.rE)(e, d.Kw.ROLE);
      return !(l in t) && (t[l] = {
        id: e,
        permission: !0,
        type: d.Kw.ROLE
      }), !(s in t) && (t[s] = {
        id: i,
        permission: !0,
        type: d.Kw.CHANNEL
      }), t
    })(e, null != s ? s : {}), [s, e]),
    g = (0, o.e7)([_.Z], () => {
      var e;
      if (null == t) return;
      let n = _.Z.getCommand(t);
      return null !== (e = null == n ? void 0 : n.permissions) && void 0 !== e ? e : {}
    }, [t]),
    A = (0, o.e7)([_.Z], () => {
      var e;
      return null == t ? _.Z.getEditedApplication() : null === (e = _.Z.getEditedCommand()) || void 0 === e ? void 0 : e.permissions
    }, [t]),
    C = null != t ? t : n,
    S = null != t ? g : a,
    x = i.useMemo(() => null != A ? A : {
      ...null != S ? S : {}
    }, [A, S]),
    p = i.useMemo(() => Object.keys(x).length, [x]),
    R = i.useMemo(() => null == S || null == x ? null : !r().isEqual(S, x), [S, x]);
  return i.useEffect(() => {
    if (C === n) R ? c.Z.startEditingCommandPermissions(C) : c.Z.stopEditingCommandPermissions(C)
  }, [n, R, C]), {
    originalApplicationPermissions: a,
    originalCommandPermissions: g,
    editedTargetPermissions: function(e, n) {
      let t = (0, o.e7)([N.Z], () => N.Z.getGuild(e), [e]);
      l()(null != t, "guild must be present to be editing its integration settings");
      let s = (0, o.e7)([E.Z], () => E.Z.getHighestRole(t), [t]),
        a = (0, o.e7)([T.default], () => {
          var e;
          return null === (e = T.default.getCurrentUser()) || void 0 === e ? void 0 : e.id
        });
      l()(null != a, "useComputePermissions: currentUserId must not be null");
      let r = a === t.ownerId,
        {
          channelIds: c,
          roleIds: _,
          userIds: h
        } = i.useMemo(() => {
          let e = [],
            t = [],
            i = [];
          for (let s of Object.values(n)) s.type === d.Kw.CHANNEL ? e.push(s.id) : s.type === d.Kw.ROLE ? t.push(s.id) : s.type === d.Kw.USER && i.push(s.id);
          return {
            channelIds: e,
            roleIds: t,
            userIds: i
          }
        }, [n]),
        g = (0, o.cj)([I.Z], () => Object.fromEntries(c.map(I.Z.getChannel).filter(m.lm).map(e => [e.id, e])), [c]),
        A = (0, o.cj)([N.Z], () => Object.fromEntries(_.map(n => N.Z.getRole(e, n)).filter(m.lm).map(e => [e.id, e])), [_, e]),
        C = (0, o.cj)([T.default], () => Object.fromEntries(h.map(T.default.getUser).filter(m.lm).map(e => [e.id, e])), [h]);
      return i.useMemo(() => {
        let e = t.id,
          i = (0, u.bD)(t.id),
          l = {};
        for (let [a, o] of Object.entries(n)) {
          let n = !1,
            c = !1;
          if (o.type === d.Kw.CHANNEL) {
            let e = o.id === i,
              t = g[o.id];
            n = e || E.Z.can(O.Plq.VIEW_CHANNEL, t), c = !0
          } else if (o.type === d.Kw.ROLE) {
            let i = o.id === e,
              l = A[o.id];
            n = i || null != l, c = r || i || E.Z.isRoleHigher(t, s, l)
          } else if (o.type === d.Kw.USER) {
            let e = C[o.id];
            n = null != e, c = null != e && (r || E.Z.canManageUser(O.Plq.USE_APPLICATION_COMMANDS, e, t))
          }
          l[a] = {
            ...o,
            canRead: n,
            canWrite: c
          }
        }
        return l
      }, [g, t, s, r, n, A, C])
    }(e, x),
    hasChanges: R,
    selectedPermissionCount: p
  }
}