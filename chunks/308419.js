"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("784981"),
  i = n("607391"),
  r = n("49111"),
  u = n("782340"),
  o = n("194868"),
  d = n("425643");

function c(e) {
  let {
    channel: t,
    guild: c,
    width: f,
    inPopout: h
  } = e;
  return (0, l.jsx)(s.default, {
    className: o.root,
    children: (0, l.jsx)(i.default, {
      artURL: d,
      size: (0, i.getSizeForWidth)(f),
      header: u.default.Messages.STREAM_SINGLE_PERSON_BODY,
      onCTAClick: () => (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("310688").then(n.bind(n, "310688"));
        return n => (0, l.jsx)(e, {
          ...n,
          guild: c,
          channel: t,
          source: r.InstantInviteSources.CHANNEL_CALL
        })
      }, {
        contextKey: h ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT
      }),
      callToAction: u.default.Messages.INSTANT_INVITE
    })
  })
}