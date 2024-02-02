"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
});
var l = n("37983"),
  u = n("884691"),
  i = n("917351"),
  a = n.n(i),
  r = n("249654"),
  s = n("446674"),
  d = n("77078"),
  o = n("267363"),
  c = n("15433"),
  f = n("27978"),
  E = n("923959"),
  v = n("124948"),
  g = n("305961"),
  S = n("660478"),
  h = n("476765"),
  m = n("943232"),
  N = n("945330"),
  p = n("599110"),
  C = n("449008"),
  _ = n("933326"),
  T = n("334683"),
  I = n("534222"),
  x = n("473031"),
  D = n("266763"),
  R = n("842672"),
  G = n("745049"),
  M = n("49111"),
  y = n("133335"),
  L = n("782340"),
  A = n("639480");

function U(e) {
  let {
    transitionState: t,
    onClose: i,
    guildId: U
  } = e, j = (0, h.useUID)(), V = (0, s.useStateFromStores)([g.default], () => g.default.getGuild(U)), O = (0, T.default)(null == V ? void 0 : V.id), P = (0, I.default)(U), b = u.useRef(S.default.ackMessageId(U, y.ReadStateTypes.GUILD_EVENT)), k = (0, R.default)();
  return u.useEffect(() => {
    P.forEach(e => _.default.getGuildEventUserCounts(U, e.id, [])), _.default.getGuildEventsForCurrentUser(U)
  }, [P, U]), u.useEffect(() => {
    let e = g.default.getGuild(U);
    if (!(null == e ? void 0 : e.hasFeature(M.GuildFeatures.HUB))) return;
    let {
      showHubEventsList: t
    } = f.default.getCurrentConfig({
      guildId: U,
      location: "d3755f_1"
    });
    if (!t) return;
    let n = E.default.getDefaultChannel(U);
    null != n && c.fetchDirectoryEntries(n.id)
  }, [U]), u.useEffect(() => {
    p.default.track(M.AnalyticEvents.OPEN_MODAL, {
      type: G.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
      guild_id: U,
      guild_events_count: P.length
    })
  }, []), u.useEffect(() => {
    a(P).map(e => e.creator_id).filter(C.isNotNullish).uniq().forEach(e => {
      v.default.requestMember(U, e)
    })
  }, [U, P]), u.useEffect(() => {
    null != U && (0, o.ackGuildFeature)(U, y.ReadStateTypes.GUILD_EVENT)
  }, [U]), (0, l.jsxs)(d.ModalRoot, {
    size: d.ModalSize.MEDIUM,
    transitionState: t,
    "aria-labelledby": j,
    children: [(0, l.jsxs)(d.ModalHeader, {
      className: A.header,
      children: [(0, l.jsx)(m.default, {
        className: A.icon
      }), (0, l.jsx)(d.Heading, {
        id: j,
        variant: "heading-md/semibold",
        children: P.length > 0 ? L.default.Messages.GUILD_EVENTS_PLURAL.format({
          number: P.length
        }) : L.default.Messages.GUILD_EVENTS
      }), O && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          className: A.divider,
          children: "|"
        }), (0, l.jsx)(d.Button, {
          size: d.Button.Sizes.MIN,
          onClick: () => {
            (0, d.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("590942").then(n.bind(n, "590942"));
              return t => (0, l.jsx)(e, {
                ...t,
                guildId: U
              })
            }, k)
          },
          innerClassName: A.button,
          children: L.default.Messages.SCHEDULE_EVENT
        })]
      }), (0, l.jsx)(d.Clickable, {
        onClick: i,
        className: A.iconButton,
        "aria-label": L.default.Messages.CLOSE,
        children: (0, l.jsx)(N.default, {
          className: A.icon
        })
      })]
    }), (0, l.jsx)(d.ModalContent, {
      className: A.content,
      children: P.length > 0 ? P.map(e => (0, l.jsx)(x.default, {
        guildEvent: e,
        guildId: U,
        onActionTaken: i,
        isNew: null != b.current && r.default.compare(e.id, b.current) > 0
      }, e.id)) : (0, l.jsx)(D.default, {
        guildId: U,
        onClose: i
      })
    })]
  })
}