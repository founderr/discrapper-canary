n.d(t, {
  Z: function() {
    return f
  }
});
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(780384),
  r = n(481060),
  o = n(332148),
  c = n(796798),
  u = n(198620),
  d = n(624453),
  h = n(306680),
  m = n(494404),
  p = n(257559),
  E = n(689938);
let g = [];

function f(e) {
  let {
    channel: t,
    onJump: f
  } = e, {
    messages: C,
    loading: _
  } = (0, s.cj)([d.Z], () => {
    let e = d.Z.getPinnedMessages(t.id),
      n = null != e ? e.messages : g;
    return {
      messages: n,
      loading: null == n || null != e && e.loading
    }
  }), I = (0, s.e7)([h.ZP], () => h.ZP.hasUnreadPins(t.id));
  return i.useEffect(() => {
    c.l.getCurrentConfig({
      location: "pins"
    }).enabled && C.some(u.k5) && o.Z.fetchPins(t.id, !0)
  }, []), i.useEffect(() => {
    I && o.Z.ackPins(t.id)
  }, [I, t.id]), (0, l.jsx)(r.Dialog, {
    "aria-label": E.Z.Messages.PINNED_MESSAGES,
    children: (0, l.jsx)(m.ZP, {
      onFetch: function() {
        o.Z.ackPins(t.id), o.Z.fetchPins(t.id)
      },
      channel: t,
      messages: C,
      loading: _,
      analyticsName: "Channel Pins",
      onCloseMessage: function(e, n) {
        null != e && (n.shiftKey ? o.Z.unpinMessage(t, e.id) : p.Z.confirmUnpin(t, e))
      },
      onJump: f,
      getProTip: function() {
        return t.isPrivate() ? E.Z.Messages.PINNED_MESSAGES_PRO_TIP_BODY_DMS : E.Z.Messages.PINNED_MESSAGES_PRO_TIP_BODY_CHANNEL
      },
      renderHeader: () => (0, l.jsx)(m.h4, {
        title: E.Z.Messages.PINNED_MESSAGES
      }),
      renderEmptyState: function(e) {
        let i = E.Z.Messages.NO_PINS_IN_CHANNEL;
        t.isPrivate() && (i = E.Z.Messages.NO_PINS_IN_DM);
        let s = (0, a.ap)(e) ? n(306059) : n(281485);
        return (0, l.jsx)(m.nH, {
          msg: i,
          image: s
        }, "emptystate")
      },
      listName: "pins"
    })
  })
}