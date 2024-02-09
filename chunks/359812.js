"use strict";
l.r(t), l.d(t, {
  default: function() {
    return C
  }
});
var a = l("37983");
l("884691");
var n = l("446674"),
  s = l("77078"),
  r = l("923959"),
  i = l("305961"),
  u = l("957255"),
  o = l("697218"),
  d = l("316133"),
  c = l("223913"),
  f = l("379385"),
  m = l("644169"),
  S = l("782340"),
  E = l("524939");

function C(e) {
  let {
    selectedChannelId: t,
    guildId: l,
    onChangeSelectedChannelId: C
  } = e, h = (0, n.useStateFromStores)([o.default], () => o.default.getCurrentUser()), g = (0, n.useStateFromStores)([i.default, r.default, u.default], () => (0, c.getStreamEligibleChannels)(r.default.getChannels(l), i.default, u.default)), _ = (0, n.useStateFromStores)([d.default], () => d.default.getVoiceStates(l)), N = g.map(e => {
    var l;
    return {
      name: (0, a.jsx)(f.default, {
        channel: e,
        users: null === (l = _[e.id]) || void 0 === l ? void 0 : l.filter(e => {
          let {
            user: t
          } = e;
          return t.id !== (null == h ? void 0 : h.id)
        }).map(e => {
          let {
            user: t
          } = e;
          return t
        }),
        selected: e.id === t
      }),
      value: e.id
    }
  });
  return (0, a.jsx)(m.default, {
    title: S.default.Messages.GO_LIVE_MODAL_SELECT_CHANNEL_FORM_TITLE,
    scrollerInnerClassName: E.channelSelectScrollerInner,
    children: (0, a.jsx)(s.RadioGroup, {
      options: N,
      value: t,
      itemInfoClassName: E.channelInfoWrapper,
      itemTitleClassName: E.channelTitleWrapper,
      onChange: e => {
        let {
          value: t
        } = e;
        return C(t)
      }
    })
  })
}