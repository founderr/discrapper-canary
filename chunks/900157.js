"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("392711"),
  i = n.n(s),
  r = n("442837"),
  o = n("570140"),
  u = n("239091"),
  d = n("561472"),
  c = n("367907"),
  f = n("731429"),
  h = n("188471"),
  m = n("933557"),
  p = n("287746"),
  E = n("541716"),
  C = n("910611"),
  g = n("359110"),
  S = n("592125"),
  _ = n("703558"),
  T = n("430824"),
  I = n("979651"),
  A = n("502568"),
  N = n("664342"),
  v = n("124368"),
  x = n("981631"),
  M = n("689938"),
  R = n("168310");

function y(e) {
  let {
    channelId: t,
    baseChannelId: s,
    channelViewSource: y = "Split View"
  } = e, L = (0, r.useStateFromStores)([S.default], () => S.default.getChannel(t)), O = (0, r.useStateFromStores)([T.default], () => T.default.getGuild(null == L ? void 0 : L.getGuildId())), j = (0, m.default)(L);
  (function(e) {
    let t = (0, r.useStateFromStores)([I.default], () => null != e && !i().isEmpty(I.default.getVoiceStatesForChannel(e.id)));
    l.useEffect(() => {
      t && null != e && (o.default.dispatch({
        type: "SIDEBAR_CLOSE",
        baseChannelId: e.parent_id
      }), (0, g.transitionToThread)(e, v.OpenThreadAnalyticsLocations.VOICE_AUTO_OPEN))
    }, [t, e])
  })(L);
  let P = l.useRef(!1);
  if (l.useEffect(() => {
      if (null == L || P.current) return;
      P.current = !0;
      let e = (0, f.collectThreadMetadata)(S.default.getChannel(L.id), !0);
      (0, c.trackWithMetadata)(x.AnalyticEvents.CHANNEL_OPENED, {
        ...e,
        ...(0, c.getChannelOpenedMetadata)(L.id),
        channel_view: y
      }), (0, h.trackClickstream)(x.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: L.id
      })
    }, [L, y]), null == L || null == O) return null;
  let D = (0, a.jsx)(N.default, {
    channel: L,
    baseChannelId: s
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(d.default, {
      channel: L,
      draftType: _.DraftType.ChannelMessage
    }), (0, a.jsx)(A.default, {
      toolbar: D,
      "aria-label": M.default.Messages.THREAD_HEADER_BAR_A11Y_LABEL,
      children: (0, C.renderTitle)({
        channel: L,
        channelName: j,
        guild: O,
        inSidebar: !0,
        handleContextMenu: function(e) {
          (0, u.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await n.e("78650").then(n.bind(n, "422200"));
            return t => (0, a.jsx)(e, {
              ...t,
              channel: L
            })
          })
        },
        handleClick: function() {
          null != L && (0, g.transitionToChannel)(L.id)
        }
      })
    }), (0, a.jsx)("div", {
      className: R.chat,
      children: (0, a.jsx)(p.default, {
        channel: L,
        guild: O,
        chatInputType: E.ChatInputTypes.SIDEBAR
      }, t)
    })]
  })
}