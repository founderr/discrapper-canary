"use strict";
l.r(t), l.d(t, {
  default: function() {
    return C
  }
});
var n = l("37983");
l("884691");
var s = l("446674"),
  a = l("77078"),
  r = l("923959"),
  i = l("305961"),
  u = l("957255"),
  o = l("697218"),
  d = l("316133"),
  c = l("223913"),
  f = l("379385"),
  m = l("644169"),
  S = l("782340"),
  h = l("524939");

function C(e) {
  let {
    selectedChannelId: t,
    guildId: l,
    onChangeSelectedChannelId: C
  } = e, E = (0, s.useStateFromStores)([o.default], () => o.default.getCurrentUser()), p = (0, s.useStateFromStores)([i.default, r.default, u.default], () => (0, c.getStreamEligibleChannels)(r.default.getChannels(l), i.default, u.default)), N = (0, s.useStateFromStores)([d.default], () => d.default.getVoiceStates(l)), g = p.map(e => {
    var l;
    return {
      name: (0, n.jsx)(f.default, {
        channel: e,
        users: null === (l = N[e.id]) || void 0 === l ? void 0 : l.filter(e => {
          let {
            user: t
          } = e;
          return t.id !== (null == E ? void 0 : E.id)
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
  return (0, n.jsx)(m.default, {
    title: S.default.Messages.GO_LIVE_MODAL_SELECT_CHANNEL_FORM_TITLE,
    scrollerInnerClassName: h.channelSelectScrollerInner,
    children: (0, n.jsx)(a.RadioGroup, {
      options: g,
      value: t,
      itemInfoClassName: h.channelInfoWrapper,
      itemTitleClassName: h.channelTitleWrapper,
      onChange: e => {
        let {
          value: t
        } = e;
        return C(t)
      }
    })
  })
}