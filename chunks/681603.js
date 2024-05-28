"use strict";
n.r(t);
var i = n("470079"),
  a = n("149765"),
  l = n("442837"),
  s = n("367907"),
  o = n("731429"),
  r = n("188471"),
  d = n("318885"),
  u = n("592125"),
  c = n("984933"),
  f = n("271383"),
  h = n("430824"),
  p = n("496675"),
  E = n("944486"),
  m = n("914010"),
  g = n("594174"),
  S = n("237997"),
  v = n("145597"),
  C = n("981631");
class y extends i.Component {
  componentDidUpdate(e) {
    if (this.props.locked) return null;
    let {
      selectedGuild: t,
      selectedChannel: n,
      isMemberPending: i,
      hasPreviewEnabled: a,
      postableChannelCount: l
    } = this.props;
    if (null != t && (t !== e.selectedGuild || i && !e.isMemberPending) && ((0, d.trackWithOverlayMetadata)(C.AnalyticEvents.GUILD_VIEWED, {
        ...i ? {
          is_pending: i,
          preview_enabled: a
        } : {},
        postable_channels: l
      }), (0, r.trackClickstream)(C.AnalyticEvents.GUILD_VIEWED_CLICKSTREAM, {
        guildId: t
      })), null != n && n !== e.selectedChannel) {
      let e = (0, o.collectThreadMetadata)(u.default.getChannel(n), !0);
      (0, d.trackWithOverlayMetadata)(C.AnalyticEvents.CHANNEL_OPENED, {
        ...e,
        ...(0, s.getChannelOpenedMetadata)(n)
      }), (0, r.trackClickstream)(C.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: n
      })
    }
  }
  render() {
    return null
  }
}
t.default = l.default.connectStores([m.default, E.default, h.default, g.default, S.default, c.default, p.default, f.default], () => {
  var e, t, n;
  let i = m.default.getGuildId(),
    l = E.default.getChannelId(i),
    s = h.default.getGuild(i),
    o = g.default.getCurrentUser(),
    r = null !== (t = c.default.getChannels(null == s ? void 0 : s.id)[c.GUILD_SELECTABLE_CHANNELS_KEY]) && void 0 !== t ? t : [],
    d = r.length > 0 ? r.filter(e => {
      let {
        channel: t
      } = e;
      return p.default.can(a.combine(C.Permissions.SEND_MESSAGES, C.Permissions.VIEW_CHANNEL), t)
    }).length : 0,
    u = null != o && null != i && null !== (n = null === (e = f.default.getMember(i, o.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n;
  return {
    selectedGuild: i,
    selectedChannel: l,
    locked: S.default.isUILocked((0, v.getPID)()),
    hasPreviewEnabled: null == s ? void 0 : s.features.has(C.GuildFeatures.PREVIEW_ENABLED),
    isMemberPending: u,
    postableChannelCount: d
  }
})(y)