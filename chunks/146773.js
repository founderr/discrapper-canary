n.d(t, {
  B: function() {
    return L
  }
});
var l = n(735250);
n(470079);
var i = n(582966),
  s = n(895162),
  r = n(433517),
  a = n(481060),
  o = n(749210),
  u = n(170509),
  c = n(740504),
  d = n(117984),
  h = n(398758),
  p = n(680089),
  g = n(592125),
  m = n(324067),
  C = n(984933),
  E = n(430824),
  f = n(496675),
  _ = n(914010),
  I = n(281029),
  N = n(700785),
  Z = n(981631);
let S = "DRAGGABLE_GUILD_CHANNEL";

function x(e, t) {
  var n, l;
  if (null == e || null == t) return null;
  if (e !== Z.I_8) return g.Z.getChannel(t);
  let i = C.ZP.getChannels(e),
    s = null !== (l = null !== (n = i[C.sH].find(e => e.channel.id === t)) && void 0 !== n ? n : i[C.Zb].find(e => e.channel.id === t)) && void 0 !== l ? l : i[Z.d4z.GUILD_CATEGORY].find(e => e.channel.id === t);
  return null == s ? void 0 : s.channel
}

function L(e) {
  return (0, i.G)(S, {
    drop(e, t) {
      let n;
      let i = _.Z.getGuildId(),
        s = t.getItem(),
        r = (0, I.if)(x(i, s.id), s.position, e.channel, e.position, s.channelList);
      if (null == r) return;
      let c = x(i, s.id);
      if (null == c) return;
      let h = m.Z.getCategories(i),
        p = E.Z.getGuild(i);
      if (null == p) return;
      let C = (0, I.Dn)(c, x(i, r.referenceId), r.parentId, h);
      if (0 !== C.length) {
        if (i === Z.I_8) {
          (0, d.s3)(C);
          return
        }
        if (C = C.filter(e => {
            let {
              id: t
            } = e, n = g.Z.getChannel(t);
            if (null == n) return !1;
            let l = g.Z.getChannel(n.parent_id);
            return n.type === Z.d4z.GUILD_CATEGORY || null == l ? f.Z.can(Z.Plq.MANAGE_CHANNELS, p) : f.Z.can(Z.Plq.MANAGE_CHANNELS, l)
          }), c.parent_id !== r.parentId && C.find(e => {
            if (e.id !== c.id) return !1;
            let t = g.Z.getChannel(e.parent_id);
            if (!(null != t && f.Z.can(Z.Plq.MANAGE_ROLES, c) && f.Z.can(Z.Plq.MANAGE_ROLES, t))) return !0;
            let l = N.o4(c, t),
              i = N.o4(c, g.Z.getChannel(c.parent_id));
            return (null == c.parent_id && !l || i && !l) && (n = e), !0
          }), null != n) {
          let e = g.Z.getChannel(n.parent_id);
          null != e && (0, a.openModal)(t => (0, l.jsx)(u.default, {
            ...t,
            channel: c,
            category: e,
            onConfirm: () => {
              null != n && (n.lock_permissions = !0, o.Z.batchChannelUpdate(i, C))
            },
            onCancel: () => {
              null != n && o.Z.batchChannelUpdate(i, C)
            }
          }))
        } else o.Z.batchChannelUpdate(i, C)
      }
    },
    canDrop(e, t) {
      let n = t.getItem(),
        l = g.Z.getChannel(n.id);
      if (null == l) return !1;
      let i = (0, I.if)(g.Z.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
      if (null == i) return !1;
      if (_.Z.getGuildId() === Z.I_8) return !0;
      let s = E.Z.getGuild(n.guildId);
      if (null == s) return !1;
      let r = g.Z.getChannel(i.parentId),
        a = g.Z.getChannel(l.parent_id),
        o = f.Z.can(Z.Plq.MANAGE_CHANNELS, s),
        u = null != a ? f.Z.can(Z.Plq.MANAGE_CHANNELS, a) : o,
        c = null != r ? f.Z.can(Z.Plq.MANAGE_CHANNELS, r) : o;
      return u && c
    }
  }, (e, t) => {
    let n = t.getItem();
    return null == n || null == n.isChannelDrag ? {
      connectChannelDropTarget: e.dropTarget(),
      sorting: !1,
      sortingType: null,
      sortingPosition: null,
      sortingParent: null
    } : {
      connectChannelDropTarget: e.dropTarget(),
      sorting: !0,
      sortingType: n.type,
      sortingPosition: t.isOver() && t.canDrop() ? n.position : null,
      sortingParent: t.isOver() && t.canDrop() ? n.parentId : null
    }
  })((0, s.E)(S, {
    canDrag(e) {
      let {
        channel: t
      } = e;
      if (_.Z.getGuildId() === Z.I_8) return !0;
      let i = E.Z.getGuild(t.getGuildId());
      if (null == i) return !1;
      if ((0, h.r1)(i.id) && f.Z.can(Z.Plq.MANAGE_CHANNELS, i)) return "true" !== r.K.get("doNotShowReorderModal") && (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("82560")]).then(n.bind(n, 391312));
        return t => (0, l.jsx)(e, {
          ...t
        })
      }), !1;
      if (t.type === Z.d4z.GUILD_CATEGORY) return f.Z.can(Z.Plq.MANAGE_CHANNELS, i) && !(0, h.r1)(i.id);
      let s = g.Z.getChannel(t.parent_id);
      return null != s && f.Z.can(Z.Plq.MANAGE_CHANNELS, s) || null == s && f.Z.can(Z.Plq.MANAGE_CHANNELS, i)
    },
    beginDrag(e) {
      let {
        channel: {
          id: t,
          parent_id: n,
          guild_id: l,
          type: i
        },
        position: s
      } = e, r = _.Z.getGuildId(), a = m.Z.getCategories(r);
      return {
        isChannelDrag: !0,
        id: t,
        position: s,
        parentId: n,
        type: i,
        channelList: (0, c.Z)(a._categories, a, e => {
          let {
            channel: t
          } = e;
          if (t.type === Z.d4z.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length) return r === Z.I_8 || f.Z.can(Z.Plq.MANAGE_CHANNELS, t) && f.Z.can(Z.Plq.VIEW_CHANNEL, t);
          return !p.Z.isCollapsed(t.parent_id)
        }),
        guildId: l
      }
    }
  }, e => ({
    connectChannelDragSource: e.dragSource(),
    connectDragPreview: e.dragPreview()
  }))(e))
}