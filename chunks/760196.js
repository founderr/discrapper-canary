"use strict";
n(653041);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(998698),
  u = n(824203),
  _ = n(713583),
  c = n(920455),
  d = n(931981),
  E = n(407661),
  I = n(573809);
t.Z = r.memo(e => {
  let {
    channel: t,
    type: n,
    activeCommand: r,
    pendingReply: s
  } = e, {
    activeCommandOption: T,
    activeCommandOptionStates: h
  } = (0, a.cj)([l.Z], () => ({
    activeCommandOption: l.Z.getActiveOption(t.id),
    activeCommandOptionStates: l.Z.getOptionStates(t.id)
  })), f = (0, d.e)(t), S = (0, u.__)(r, t, {
    location: "ChannelTextAreaBars"
  }), N = [];
  return (null != r && (S && N.push((0, i.jsx)(c.Z, {
    activeCommand: r
  })), N.push((0, i.jsx)(_.Z, {
    activeCommand: r,
    activeOption: null != T ? T : null,
    optionStates: h
  }))), null != s && N.push((0, i.jsx)(E.Z, {
    reply: s,
    chatInputType: n
  })), f && N.push((0, i.jsx)(d.V, {})), 0 === (N = N.map((e, t) => {
    let n = t === N.length - 1;
    return (0, i.jsx)("div", {
      className: o()({
        [I.stackedAttachedBar]: !n
      }),
      children: e
    }, t)
  })).length) ? null : (0, i.jsx)("div", {
    className: I.attachedBars,
    children: N
  })
})