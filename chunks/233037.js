t.d(n, {
  Z: function() {
    return h
  }
});
var l = t(735250);
t(470079);
var s = t(442837),
  a = t(481060),
  i = t(984933),
  r = t(430824),
  o = t(496675),
  u = t(594174),
  c = t(938475),
  d = t(382182),
  m = t(499596),
  E = t(148381),
  _ = t(689938),
  S = t(597895);

function h(e) {
  let {
    selectedChannelId: n,
    guildId: t,
    onChangeSelectedChannelId: h
  } = e, g = (0, s.e7)([u.default], () => u.default.getCurrentUser()), C = (0, s.e7)([r.Z, i.ZP, o.Z], () => (0, d.h_)(i.ZP.getChannels(t), r.Z, o.Z)), Z = (0, s.e7)([c.ZP], () => c.ZP.getVoiceStates(t)), N = C.map(e => {
    var t;
    return {
      name: (0, l.jsx)(m.Z, {
        channel: e,
        users: null === (t = Z[e.id]) || void 0 === t ? void 0 : t.filter(e => {
          let {
            user: n
          } = e;
          return n.id !== (null == g ? void 0 : g.id)
        }).map(e => {
          let {
            user: n
          } = e;
          return n
        }),
        selected: e.id === n
      }),
      value: e.id
    }
  });
  return (0, l.jsx)(E.Z, {
    title: _.Z.Messages.GO_LIVE_MODAL_SELECT_CHANNEL_FORM_TITLE,
    scrollerInnerClassName: S.channelSelectScrollerInner,
    children: (0, l.jsx)(a.RadioGroup, {
      options: N,
      value: n,
      itemInfoClassName: S.channelInfoWrapper,
      itemTitleClassName: S.channelTitleWrapper,
      onChange: e => {
        let {
          value: n
        } = e;
        return h(n)
      }
    })
  })
}