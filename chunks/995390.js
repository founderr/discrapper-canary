t.d(n, {
  Z: function() {
    return O
  }
}), t(653041), t(47120);
var i = t(470079),
  l = t(512722),
  s = t.n(l),
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
  g = t(981631);

function O(e, n, t) {
  let l = (0, o.e7)([_.Z], () => _.Z.getApplicationPermissions()),
    a = i.useMemo(() => (function(e, n) {
      let t = {
          ...n
        },
        i = (0, u.bD)(e),
        l = (0, h.rE)(i, d.Kw.CHANNEL),
        s = (0, h.rE)(e, d.Kw.ROLE);
      return !(s in t) && (t[s] = {
        id: e,
        permission: !0,
        type: d.Kw.ROLE
      }), !(l in t) && (t[l] = {
        id: i,
        permission: !0,
        type: d.Kw.CHANNEL
      }), t
    })(e, null != l ? l : {}), [l, e]),
    O = (0, o.e7)([_.Z], () => {
      var e;
      if (null == t) return;
      let n = _.Z.getCommand(t);
      return null !== (e = null == n ? void 0 : n.permissions) && void 0 !== e ? e : {}
    }, [t]),
    A = (0, o.e7)([_.Z], () => {
      var e;
      return null == t ? _.Z.getEditedApplication() : null === (e = _.Z.getEditedCommand()) || void 0 === e ? void 0 : e.permissions
    }, [t]),
    x = null != t ? t : n,
    C = null != t ? O : a,
    S = i.useMemo(() => null != A ? A : {
      ...null != C ? C : {}
    }, [A, C]),
    p = i.useMemo(() => Object.keys(S).length, [S]),
    R = i.useMemo(() => null == C || null == S ? null : !r().isEqual(C, S), [C, S]);
  return i.useEffect(() => {
    if (x === n) R ? c.Z.startEditingCommandPermissions(x) : c.Z.stopEditingCommandPermissions(x)
  }, [n, R, x]), {
    originalApplicationPermissions: a,
    originalCommandPermissions: O,
    editedTargetPermissions: function(e, n) {
      let t = (0, o.e7)([N.Z], () => N.Z.getGuild(e), [e]);
      s()(null != t, "guild must be present to be editing its integration settings");
      let l = (0, o.e7)([E.Z], () => E.Z.getHighestRole(t), [t]),
        a = (0, o.e7)([T.default], () => {
          var e;
          return null === (e = T.default.getCurrentUser()) || void 0 === e ? void 0 : e.id
        });
      s()(null != a, "useComputePermissions: currentUserId must not be null");
      let r = a === t.ownerId,
        {
          channelIds: c,
          roleIds: _,
          userIds: h
        } = i.useMemo(() => {
          let e = [],
            t = [],
            i = [];
          for (let l of Object.values(n)) l.type === d.Kw.CHANNEL ? e.push(l.id) : l.type === d.Kw.ROLE ? t.push(l.id) : l.type === d.Kw.USER && i.push(l.id);
          return {
            channelIds: e,
            roleIds: t,
            userIds: i
          }
        }, [n]),
        O = (0, o.cj)([I.Z], () => Object.fromEntries(c.map(I.Z.getChannel).filter(m.lm).map(e => [e.id, e])), [c]),
        A = (0, o.cj)([N.Z], () => Object.fromEntries(_.map(n => N.Z.getRole(e, n)).filter(m.lm).map(e => [e.id, e])), [_, e]),
        x = (0, o.cj)([T.default], () => Object.fromEntries(h.map(T.default.getUser).filter(m.lm).map(e => [e.id, e])), [h]);
      return i.useMemo(() => {
        let e = t.id,
          i = (0, u.bD)(t.id),
          s = {};
        for (let [a, o] of Object.entries(n)) {
          let n = !1,
            c = !1;
          if (o.type === d.Kw.CHANNEL) {
            let e = o.id === i,
              t = O[o.id];
            n = e || E.Z.can(g.Plq.VIEW_CHANNEL, t), c = !0
          } else if (o.type === d.Kw.ROLE) {
            let i = o.id === e,
              s = A[o.id];
            n = i || null != s, c = r || i || E.Z.isRoleHigher(t, l, s)
          } else if (o.type === d.Kw.USER) {
            let e = x[o.id];
            n = null != e, c = null != e && (r || E.Z.canManageUser(g.Plq.USE_APPLICATION_COMMANDS, e, t))
          }
          s[a] = {
            ...o,
            canRead: n,
            canWrite: c
          }
        }
        return s
      }, [O, t, l, r, n, A, x])
    }(e, S),
    hasChanges: R,
    selectedPermissionCount: p
  }
}