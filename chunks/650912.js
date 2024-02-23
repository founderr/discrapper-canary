"use strict";
n.r(t), n.d(t, {
  makeVoiceUserDroppable: function() {
    return c
  },
  makeVoiceUserDraggable: function() {
    return f
  }
});
var l = n("476042"),
  a = n("851387"),
  s = n("305961"),
  i = n("957255"),
  r = n("800762"),
  u = n("316133"),
  o = n("49111");
let d = "DRAGGABLE_USER";

function c(e) {
  return (0, l.DropTarget)(d, {
    canDrop(e) {
      var t, n;
      let {
        channel: l
      } = e, a = l.getGuildId(), d = null !== (n = null === (t = s.default.getGuild(a)) || void 0 === t ? void 0 : t.maxVideoChannelUsers) && void 0 !== n ? n : -1, c = u.default.countVoiceStatesForChannel(l.id), f = null != a && r.default.hasVideo(l.id) && d > 0 && c >= d + 1;
      return i.default.can(o.Permissions.MOVE_MEMBERS, l) && i.default.can(o.Permissions.CONNECT, l) && !f
    },
    drop(e, t) {
      let {
        channel: n
      } = e, l = r.default.getVoiceStateForUser(t.getItem().user.id);
      (null == l ? void 0 : l.channelId) !== n.id && a.default.setChannel(n.getGuildId(), t.getItem().user.id, n.id)
    }
  }, (e, t) => ({
    connectUserDropTarget: e.dropTarget(),
    isUserOver: t.isOver() && t.canDrop()
  }))(e)
}

function f(e) {
  return (0, l.DragSource)(d, {
    canDrag(e) {
      let {
        user: t,
        canDrag: n
      } = e;
      return null != n && n
    },
    beginDrag(e) {
      let {
        user: t
      } = e;
      return {
        user: t
      }
    }
  }, e => ({
    connectUserDragSource: e.dragSource()
  }))(e)
}