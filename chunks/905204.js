l.d(n, {
  Z: function() {
    return g
  }
}), l(536091), l(653041), l(47120), l(724458);
var t = l(470079),
  i = l(392711),
  s = l.n(i),
  a = l(442837),
  r = l(570140),
  d = l(724213),
  o = l(9156),
  c = l(630388),
  u = l(823379),
  h = l(549817),
  m = l(45966),
  x = l(526761);

function N(e) {
  r.Z.dispatch({
    type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
    guildId: e
  })
}
let C = {};

function g(e) {
  let n = (0, a.e7)([m.Z], () => {
    var n;
    return null !== (n = m.Z.getPendingResponseOptions(e)) && void 0 !== n ? n : C
  }, [e]);
  return t.useEffect(() => (N(e), () => N(e)), [e]), t.useEffect(() => {
    null != n && 0 !== Object.keys(n).length && h.Z.updateOnboardingResponses(e)
  }, [e, n]), {
    handleSelectOption: t.useCallback((n, l, t) => {
      let i = m.Z.getOnboardingResponses(e),
        {
          addedRoleIds: a,
          removedRoleIds: N
        } = function(e, n, l, t) {
          var i, a, r, d, o;
          let c = [],
            h = [];
          if (e.singleSelect && l) {
            let l = e.options.find(e => t.includes(e.id));
            c = s().difference(null !== (i = n.roleIds) && void 0 !== i ? i : [], null !== (a = null == l ? void 0 : l.roleIds) && void 0 !== a ? a : []), h = s().difference(null !== (r = null == l ? void 0 : l.roleIds) && void 0 !== r ? r : [], null !== (d = n.roleIds) && void 0 !== d ? d : [])
          } else if (l) c = null !== (o = n.roleIds) && void 0 !== o ? o : [], h = [];
          else {
            let l = e.options.filter(e => t.includes(e.id)),
              i = l.filter(e => n.id !== e.id),
              a = l.map(e => e.roleIds).flat().filter(u.lm),
              r = i.map(e => e.roleIds).flat().filter(u.lm);
            c = [], h = s().difference(a, r)
          }
          return {
            addedRoleIds: c,
            removedRoleIds: h
          }
        }(n, l, t, i),
        {
          addedChannelIds: C,
          removedChannelIds: g
        } = function(e) {
          var n, l, t, i, a;
          let {
            guildId: r,
            prompt: o,
            option: c,
            selected: h,
            responses: x
          } = e, N = [], C = [];
          if (o.singleSelect && h) {
            let e = o.options.find(e => x.includes(e.id));
            N = s().difference(null !== (n = c.channelIds) && void 0 !== n ? n : [], null !== (l = null == e ? void 0 : e.channelIds) && void 0 !== l ? l : []), C = s().difference(null !== (t = null == e ? void 0 : e.channelIds) && void 0 !== t ? t : [], null !== (i = c.channelIds) && void 0 !== i ? i : [])
          } else if (h) N = null !== (a = c.channelIds) && void 0 !== a ? a : [], C = [];
          else {
            let e = o.options.filter(e => x.includes(e.id)),
              n = e.filter(e => c.id !== e.id),
              l = e.map(e => e.channelIds).flat().filter(u.lm),
              t = n.map(e => e.channelIds).flat().filter(u.lm);
            N = [], C = s().difference(l, t)
          }
          return (0, d.hi)(r) && N.push(...m.Z.getDefaultChannelIds(r)), {
            addedChannelIds: N,
            removedChannelIds: C
          }
        }({
          guildId: e,
          prompt: n,
          option: l,
          selected: t,
          responses: i
        }),
        E = C.reduce((n, l) => {
          let t = o.ZP.getChannelIdFlags(e, l);
          return n[l] = {
            flags: (0, c.mB)(t, x.ic.OPT_IN_ENABLED, !0)
          }, n
        }, {}),
        p = g.reduce((n, l) => {
          let t = o.ZP.getChannelIdFlags(e, l);
          return n[l] = {
            flags: (0, c.mB)(t, x.ic.OPT_IN_ENABLED, !1)
          }, n
        }, {}),
        f = {
          ...E,
          ...p
        };
      h.Z.selectOption(e, n.id, l.id, t), r.Z.dispatch({
        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
        guildId: e,
        overrides: f
      }), h.Z.updateRolesLocal(e, a, N)
    }, [e])
  }
}