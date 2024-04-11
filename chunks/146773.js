"use strict";
n.r(t), n.d(t, {
  makeChannelSortable: function() {
    return A
  }
});
var l = n("735250");
n("470079");
var a = n("942389"),
  s = n("433517"),
  i = n("481060"),
  r = n("749210"),
  o = n("170509"),
  u = n("740504"),
  d = n("117984"),
  c = n("398758"),
  f = n("680089"),
  h = n("592125"),
  p = n("324067"),
  m = n("984933"),
  C = n("430824"),
  g = n("496675"),
  E = n("914010"),
  S = n("281029"),
  I = n("700785"),
  _ = n("981631");
let N = "DRAGGABLE_GUILD_CHANNEL";

function T(e, t) {
  var n, l;
  if (null == e || null == t) return null;
  if (e !== _.FAVORITES) return h.default.getChannel(t);
  let a = m.default.getChannels(e),
    s = null !== (l = null !== (n = a[0, m.GUILD_SELECTABLE_CHANNELS_KEY].find(e => e.channel.id === t)) && void 0 !== n ? n : a[0, m.GUILD_VOCAL_CHANNELS_KEY].find(e => e.channel.id === t)) && void 0 !== l ? l : a[_.ChannelTypes.GUILD_CATEGORY].find(e => e.channel.id === t);
  return null == s ? void 0 : s.channel
}

function A(e) {
  return (0, a.DropTarget)(N, {
    drop(e, t) {
      let n;
      let a = E.default.getGuildId(),
        s = t.getItem(),
        u = (0, S.getDropData)(T(a, s.id), s.position, e.channel, e.position, s.channelList);
      if (null == u) return;
      let c = T(a, s.id);
      if (null == c) return;
      let f = p.default.getCategories(a),
        m = C.default.getGuild(a);
      if (null == m) return;
      let N = (0, S.getDnDUpdates)(c, T(a, u.referenceId), u.parentId, f);
      if (0 !== N.length) {
        if (a === _.FAVORITES) {
          (0, d.updateFavoriteChannels)(N);
          return
        }
        if (N = N.filter(e => {
            let {
              id: t
            } = e, n = h.default.getChannel(t);
            if (null == n) return !1;
            let l = h.default.getChannel(n.parent_id);
            return n.type === _.ChannelTypes.GUILD_CATEGORY || null == l ? g.default.can(_.Permissions.MANAGE_CHANNELS, m) : g.default.can(_.Permissions.MANAGE_CHANNELS, l)
          }), c.parent_id !== u.parentId && N.find(e => {
            if (e.id !== c.id) return !1;
            let t = h.default.getChannel(e.parent_id);
            if (!(null != t && g.default.can(_.Permissions.MANAGE_ROLES, c) && g.default.can(_.Permissions.MANAGE_ROLES, t))) return !0;
            let l = I.areChannelsLocked(c, t),
              a = I.areChannelsLocked(c, h.default.getChannel(c.parent_id));
            return (null == c.parent_id && !l || a && !l) && (n = e), !0
          }), null != n) {
          let e = h.default.getChannel(n.parent_id);
          null != e && (0, i.openModal)(t => (0, l.jsx)(o.default, {
            ...t,
            channel: c,
            category: e,
            onConfirm: () => {
              null != n && (n.lock_permissions = !0, r.default.batchChannelUpdate(a, N))
            },
            onCancel: () => {
              null != n && r.default.batchChannelUpdate(a, N)
            }
          }))
        } else r.default.batchChannelUpdate(a, N)
      }
    },
    canDrop(e, t) {
      let n = t.getItem(),
        l = h.default.getChannel(n.id);
      if (null == l) return !1;
      let a = (0, S.getDropData)(h.default.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
      if (null == a) return !1;
      if (E.default.getGuildId() === _.FAVORITES) return !0;
      let s = C.default.getGuild(n.guildId);
      if (null == s) return !1;
      let i = h.default.getChannel(a.parentId),
        r = h.default.getChannel(l.parent_id),
        o = g.default.can(_.Permissions.MANAGE_CHANNELS, s),
        u = null != r ? g.default.can(_.Permissions.MANAGE_CHANNELS, r) : o,
        d = null != i ? g.default.can(_.Permissions.MANAGE_CHANNELS, i) : o;
      return u && d
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
  })((0, a.DragSource)(N, {
    canDrag(e) {
      let {
        channel: t
      } = e;
      if (E.default.getGuildId() === _.FAVORITES) return !0;
      let a = C.default.getGuild(t.getGuildId());
      if (null == a) return !1;
      if ((0, c.isOptInEnabledForGuild)(a.id) && g.default.can(_.Permissions.MANAGE_CHANNELS, a)) return "true" !== s.Storage.get("doNotShowReorderModal") && (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("82560")]).then(n.bind(n, "391312"));
        return t => (0, l.jsx)(e, {
          ...t
        })
      }), !1;
      if (t.type === _.ChannelTypes.GUILD_CATEGORY) return g.default.can(_.Permissions.MANAGE_CHANNELS, a) && !(0, c.isOptInEnabledForGuild)(a.id);
      let r = h.default.getChannel(t.parent_id);
      return null != r && g.default.can(_.Permissions.MANAGE_CHANNELS, r) || null == r && g.default.can(_.Permissions.MANAGE_CHANNELS, a)
    },
    beginDrag(e) {
      let {
        channel: {
          id: t,
          parent_id: n,
          guild_id: l,
          type: a
        },
        position: s
      } = e, i = E.default.getGuildId(), r = p.default.getCategories(i);
      return {
        isChannelDrag: !0,
        id: t,
        position: s,
        parentId: n,
        type: a,
        channelList: (0, u.default)(r._categories, r, e => {
          let {
            channel: t
          } = e;
          if (t.type === _.ChannelTypes.GUILD_CATEGORY && null != r[t.id] && 0 === r[t.id].length) return i === _.FAVORITES || g.default.can(_.Permissions.MANAGE_CHANNELS, t) && g.default.can(_.Permissions.VIEW_CHANNEL, t);
          return !f.default.isCollapsed(t.parent_id)
        }),
        guildId: l
      }
    }
  }, e => ({
    connectChannelDragSource: e.dragSource(),
    connectDragPreview: e.dragPreview()
  }))(e))
}