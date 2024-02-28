"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var l = n("37983"),
  a = n("884691"),
  i = n("917351"),
  u = n.n(i),
  r = n("446674"),
  s = n("77078"),
  d = n("267363"),
  o = n("15433"),
  c = n("27978"),
  f = n("923959"),
  E = n("124948"),
  v = n("305961"),
  g = n("660478"),
  h = n("476765"),
  p = n("943232"),
  m = n("945330"),
  C = n("599110"),
  S = n("449008"),
  _ = n("299039"),
  N = n("933326"),
  I = n("334683"),
  T = n("534222"),
  x = n("473031"),
  R = n("266763"),
  M = n("842672"),
  L = n("745049"),
  G = n("49111"),
  D = n("133335"),
  j = n("782340"),
  k = n("290487");

function A(e) {
  let {
    transitionState: t,
    onClose: i,
    guildId: A
  } = e, y = (0, h.useUID)(), P = (0, r.useStateFromStores)([v.default], () => v.default.getGuild(A)), V = (0, I.default)(null == P ? void 0 : P.id), U = (0, T.default)(A), b = a.useRef(g.default.ackMessageId(A, D.ReadStateTypes.GUILD_EVENT)), F = (0, M.default)();
  return a.useEffect(() => {
    U.forEach(e => N.default.getGuildEventUserCounts(A, e.id, [])), N.default.getGuildEventsForCurrentUser(A)
  }, [U, A]), a.useEffect(() => {
    let e = v.default.getGuild(A);
    if (!(null == e ? void 0 : e.hasFeature(G.GuildFeatures.HUB))) return;
    let {
      showHubEventsList: t
    } = c.default.getCurrentConfig({
      guildId: A,
      location: "d3755f_1"
    });
    if (!t) return;
    let n = f.default.getDefaultChannel(A);
    null != n && o.fetchDirectoryEntries(n.id)
  }, [A]), a.useEffect(() => {
    C.default.track(G.AnalyticEvents.OPEN_MODAL, {
      type: L.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
      guild_id: A,
      guild_events_count: U.length
    })
  }, []), a.useEffect(() => {
    u(U).map(e => e.creator_id).filter(S.isNotNullish).uniq().forEach(e => {
      E.default.requestMember(A, e)
    })
  }, [A, U]), a.useEffect(() => {
    null != A && (0, d.ackGuildFeature)(A, D.ReadStateTypes.GUILD_EVENT)
  }, [A]), (0, l.jsxs)(s.ModalRoot, {
    size: s.ModalSize.MEDIUM,
    transitionState: t,
    "aria-labelledby": y,
    children: [(0, l.jsxs)(s.ModalHeader, {
      className: k.header,
      children: [(0, l.jsx)(p.default, {
        className: k.icon
      }), (0, l.jsx)(s.Heading, {
        id: y,
        variant: "heading-md/semibold",
        children: U.length > 0 ? j.default.Messages.GUILD_EVENTS_PLURAL.format({
          number: U.length
        }) : j.default.Messages.GUILD_EVENTS
      }), V && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          className: k.divider,
          children: "|"
        }), (0, l.jsx)(s.Button, {
          size: s.Button.Sizes.MIN,
          onClick: () => {
            (0, s.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("590942").then(n.bind(n, "590942"));
              return t => (0, l.jsx)(e, {
                ...t,
                guildId: A
              })
            }, F)
          },
          innerClassName: k.button,
          children: j.default.Messages.SCHEDULE_EVENT
        })]
      }), (0, l.jsx)(s.Clickable, {
        onClick: i,
        className: k.iconButton,
        "aria-label": j.default.Messages.CLOSE,
        children: (0, l.jsx)(m.default, {
          className: k.icon
        })
      })]
    }), (0, l.jsx)(s.ModalContent, {
      className: k.content,
      children: U.length > 0 ? U.map(e => (0, l.jsx)(x.default, {
        guildEvent: e,
        guildId: A,
        onActionTaken: i,
        isNew: null != b.current && _.default.compare(e.id, b.current) > 0
      }, e.id)) : (0, l.jsx)(R.default, {
        guildId: A,
        onClose: i
      })
    })]
  })
}