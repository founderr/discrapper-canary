"use strict";
t.r(l), t.d(l, {
  default: function() {
    return D
  }
}), t("653041");
var a = t("735250"),
  n = t("470079"),
  s = t("442837"),
  i = t("239091"),
  d = t("561472"),
  r = t("36311"),
  u = t("367907"),
  o = t("188471"),
  c = t("541716"),
  f = t("526120"),
  m = t("563534"),
  h = t("736052"),
  g = t("442336"),
  x = t("910611"),
  C = t("41776"),
  v = t("703656"),
  I = t("6025"),
  S = t("592125"),
  N = t("703558"),
  j = t("731290"),
  p = t("430824"),
  E = t("375954"),
  _ = t("594174"),
  M = t("465670"),
  b = t("502568"),
  A = t("933557"),
  T = t("287746"),
  H = t("981631"),
  R = t("689938"),
  L = t("838190");

function D(e) {
  let {
    channelId: l,
    baseChannelId: D,
    channelViewSource: F = "Split View",
    isResourceChannelView: w
  } = e, G = (0, s.useStateFromStores)([S.default], () => S.default.getChannel(l)), O = (0, s.useStateFromStores)([p.default], () => p.default.getGuild(null == G ? void 0 : G.getGuildId())), y = (0, s.useStateFromStores)([_.default], () => _.default.getCurrentUser()), U = (0, s.useStateFromStores)([j.default], () => j.default.didAgree(null == G ? void 0 : G.guild_id)), k = (null == y ? void 0 : y.nsfwAllowed) === !0, B = (0, A.default)(G), P = (0, s.useStateFromStores)([C.default], () => (null == O ? void 0 : O.id) != null && C.default.isLurking(O.id), [O]), V = (0, h.default)(l), W = (0, s.useStateFromStores)([m.default], () => {
    var e;
    return null === (e = m.default.getResourceForChannel(null == O ? void 0 : O.id, l)) || void 0 === e ? void 0 : e.title
  }), z = n.useRef(!1);
  if (n.useEffect(() => {
      null != G && !z.current && (z.current = !0, (0, u.trackWithMetadata)(H.AnalyticEvents.CHANNEL_OPENED, {
        ...(0, u.getChannelOpenedMetadata)(G.id),
        channel_view: F
      }), (0, o.trackClickstream)(H.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: G.id
      }))
    }, [G, F]), null == G || null == O) return null;
  let Z = [];
  return (!P && Z.push((0, a.jsx)(g.default, {
    channel: G
  }, "notifications")), Z.push((0, a.jsx)(b.default.Icon, {
    icon: M.default,
    tooltip: R.default.Messages.CLOSE,
    onClick: () => I.default.closeChannelSidebar(D)
  }, "close")), !G.isNSFW() || k && U) ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(d.default, {
      channel: G,
      draftType: N.DraftType.ChannelMessage
    }), (0, a.jsx)(b.default, {
      toolbar: Z,
      "aria-label": R.default.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
      children: (0, x.renderTitle)({
        channel: G,
        channelName: V ? W : B,
        guild: O,
        inSidebar: !0,
        handleContextMenu: e => {
          (0, i.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await Promise.all([t.e("99387"), t.e("24783")]).then(t.bind(t, "439635"));
            return l => (0, a.jsx)(e, {
              ...l,
              channel: G,
              guild: O
            })
          })
        },
        handleClick: () => {
          let e = E.default.getMessages(G.id);
          if (w) {
            (0, v.transitionTo)(H.Routes.CHANNEL(G.guild_id, G.id)), (0, f.selectHomeResourceChannel)(G.guild_id, null);
            return
          }(0, v.transitionToGuild)(G.guild_id, G.id, e.jumpTargetId)
        }
      })
    }), (0, a.jsx)("div", {
      className: L.chat,
      children: (0, a.jsx)(T.default, {
        channel: G,
        guild: O,
        chatInputType: c.ChatInputTypes.SIDEBAR
      }, l)
    })]
  }) : (0, a.jsx)(r.default, {
    guild: O
  })
}