n.d(t, {
  TE: function() {
    return _
  },
  h_: function() {
    return I
  }
}), n(47120);
var l = n(470079),
  i = n(392711),
  s = n.n(i),
  a = n(442837),
  r = n(159300),
  o = n(901461),
  c = n(314897),
  u = n(592125),
  d = n(984933),
  h = n(650774),
  m = n(430824),
  E = n(819640),
  p = n(375954),
  g = n(496675),
  f = n(709054),
  C = n(981631);

function _(e, t) {
  return (0, a.cj)([g.Z], () => ({
    canInvite: (0, r.b)(g.Z, t, e),
    canManageGuild: null != t && g.Z.can(C.Plq.MANAGE_GUILD, t),
    canMessage: null != e && g.Z.can(C.Plq.SEND_MESSAGES, e),
    canCreateChannel: null != t && g.Z.can(C.Plq.MANAGE_CHANNELS, t)
  }), [t, e])
}

function I(e) {
  var t;
  return {
    guildPopulated: function(e) {
      let t = (0, a.e7)([u.Z], () => u.Z.getChannel(null == e ? void 0 : e.systemChannelId)),
        n = (0, a.Wu)([p.Z], () => null != t ? p.Z.getMessages(t.id).toArray() : []);
      return (0, a.e7)([h.Z], () => {
        var t;
        let l = null !== (t = h.Z.getMemberCount(null == e ? void 0 : e.id)) && void 0 !== t ? t : 0,
          i = n.some(e => e.type === C.uaV.USER_JOIN);
        return l > 1 || i
      }, [e, n])
    }(e),
    guildMessaged: function(e) {
      let t = (0, a.e7)([u.Z], () => null != e ? u.Z.getMutableBasicGuildChannelsForGuild(e.id) : null);
      return function(e) {
        let t = (0, a.e7)([c.default], () => c.default.getId());
        return (0, a.e7)([p.Z], () => s().some(e, e => {
          let n = p.Z.getMessages(e.id).toArray();
          return s().some(n, e => e.author.id === t && !(0, o.Z)(e))
        }))
      }(l.useMemo(() => null == t ? [] : s().values(t), [t]))
    }(e),
    guildPersonalized: function(e) {
      let t = (0, a.e7)([E.Z], () => E.Z.hasLayers()),
        n = (0, a.e7)([m.Z], () => m.Z.getGuild(null == e ? void 0 : e.id));
      return (null == n ? void 0 : n.icon) != null && !t
    }(e),
    guildChannelCreated: (t = e, (0, a.e7)([d.ZP], () => {
      let e = d.ZP.getChannels(null == t ? void 0 : t.id),
        n = e[d.Zb];

      function l(e) {
        return null != t && f.default.extractTimestamp(e.channel.id) - f.default.extractTimestamp(t.id) > 500
      }
      return e[d.sH].some(l) || n.some(l)
    }, [t]))
  }
}