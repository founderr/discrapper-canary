if (n.d(t, {
    $: function() {
      return m
    },
    Q: function() {
      return h
    }
  }), 12633 == n.j) var l = n(582966);
var i = n(895162),
  s = n(749210),
  a = n(430824),
  r = n(496675),
  o = n(979651),
  c = n(938475),
  u = n(981631);
let d = "DRAGGABLE_USER";

function h(e) {
  return (0, l.G)(d, {
    canDrop(e) {
      var t, n;
      let {
        channel: l
      } = e, i = l.getGuildId(), s = null !== (n = null === (t = a.Z.getGuild(i)) || void 0 === t ? void 0 : t.maxVideoChannelUsers) && void 0 !== n ? n : -1, d = c.ZP.countVoiceStatesForChannel(l.id), h = null != i && o.Z.hasVideo(l.id) && s > 0 && d >= s + 1;
      return r.Z.can(u.Plq.MOVE_MEMBERS, l) && r.Z.can(u.Plq.CONNECT, l) && !h
    },
    drop(e, t) {
      let {
        channel: n
      } = e, l = o.Z.getVoiceStateForUser(t.getItem().user.id);
      (null == l ? void 0 : l.channelId) !== n.id && s.Z.setChannel(n.getGuildId(), t.getItem().user.id, n.id)
    }
  }, (e, t) => ({
    connectUserDropTarget: e.dropTarget(),
    isUserOver: t.isOver() && t.canDrop()
  }))(e)
}

function m(e) {
  return (0, i.E)(d, {
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