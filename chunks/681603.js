"use strict";
var i = n(470079),
  s = n(149765),
  l = n(442837),
  o = n(367907),
  a = n(731429),
  r = n(188471),
  c = n(318885),
  d = n(592125),
  u = n(984933),
  h = n(271383),
  p = n(430824),
  f = n(496675),
  E = n(944486),
  g = n(914010),
  m = n(594174),
  Z = n(237997),
  I = n(145597),
  S = n(981631);
class _ extends i.Component {
  componentDidUpdate(e) {
    if (this.props.locked) return null;
    let {
      selectedGuild: t,
      selectedChannel: n,
      isMemberPending: i,
      hasPreviewEnabled: s,
      postableChannelCount: l
    } = this.props;
    if (null != t && (t !== e.selectedGuild || i && !e.isMemberPending) && ((0, c.Q)(S.rMx.GUILD_VIEWED, {
        ...i ? {
          is_pending: i,
          preview_enabled: s
        } : {},
        postable_channels: l
      }), (0, r.a)(S.rMx.GUILD_VIEWED_CLICKSTREAM, {
        guildId: t
      })), null != n && n !== e.selectedChannel) {
      let e = (0, a.K)(d.Z.getChannel(n), !0);
      (0, c.Q)(S.rMx.CHANNEL_OPENED, {
        ...e,
        ...(0, o.$H)(n)
      }), (0, r.a)(S.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: n
      })
    }
  }
  render() {
    return null
  }
}
t.Z = l.ZP.connectStores([g.Z, E.Z, p.Z, m.default, Z.Z, u.ZP, f.Z, h.ZP], () => {
  var e, t, n;
  let i = g.Z.getGuildId(),
    l = E.Z.getChannelId(i),
    o = p.Z.getGuild(i),
    a = m.default.getCurrentUser(),
    r = null !== (t = u.ZP.getChannels(null == o ? void 0 : o.id)[u.sH]) && void 0 !== t ? t : [],
    c = r.length > 0 ? r.filter(e => {
      let {
        channel: t
      } = e;
      return f.Z.can(s.$e(S.Plq.SEND_MESSAGES, S.Plq.VIEW_CHANNEL), t)
    }).length : 0,
    d = null != a && null != i && null !== (n = null === (e = h.ZP.getMember(i, a.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n;
  return {
    selectedGuild: i,
    selectedChannel: l,
    locked: Z.Z.isUILocked((0, I.QF)()),
    hasPreviewEnabled: null == o ? void 0 : o.features.has(S.oNc.PREVIEW_ENABLED),
    isMemberPending: d,
    postableChannelCount: c
  }
})(_)