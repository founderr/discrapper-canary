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
  r = n("249654"),
  s = n("446674"),
  d = n("77078"),
  o = n("267363"),
  c = n("15433"),
  f = n("27978"),
  E = n("923959"),
  v = n("124948"),
  g = n("305961"),
  h = n("660478"),
  p = n("476765"),
  m = n("943232"),
  C = n("945330"),
  S = n("599110"),
  _ = n("449008"),
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
  } = e, y = (0, p.useUID)(), P = (0, s.useStateFromStores)([g.default], () => g.default.getGuild(A)), V = (0, I.default)(null == P ? void 0 : P.id), U = (0, T.default)(A), b = a.useRef(h.default.ackMessageId(A, D.ReadStateTypes.GUILD_EVENT)), F = (0, M.default)();
  return a.useEffect(() => {
    U.forEach(e => N.default.getGuildEventUserCounts(A, e.id, [])), N.default.getGuildEventsForCurrentUser(A)
  }, [U, A]), a.useEffect(() => {
    let e = g.default.getGuild(A);
    if (!(null == e ? void 0 : e.hasFeature(G.GuildFeatures.HUB))) return;
    let {
      showHubEventsList: t
    } = f.default.getCurrentConfig({
      guildId: A,
      location: "d3755f_1"
    });
    if (!t) return;
    let n = E.default.getDefaultChannel(A);
    null != n && c.fetchDirectoryEntries(n.id)
  }, [A]), a.useEffect(() => {
    S.default.track(G.AnalyticEvents.OPEN_MODAL, {
      type: L.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
      guild_id: A,
      guild_events_count: U.length
    })
  }, []), a.useEffect(() => {
    u(U).map(e => e.creator_id).filter(_.isNotNullish).uniq().forEach(e => {
      v.default.requestMember(A, e)
    })
  }, [A, U]), a.useEffect(() => {
    null != A && (0, o.ackGuildFeature)(A, D.ReadStateTypes.GUILD_EVENT)
  }, [A]), (0, l.jsxs)(d.ModalRoot, {
    size: d.ModalSize.MEDIUM,
    transitionState: t,
    "aria-labelledby": y,
    children: [(0, l.jsxs)(d.ModalHeader, {
      className: k.header,
      children: [(0, l.jsx)(m.default, {
        className: k.icon
      }), (0, l.jsx)(d.Heading, {
        id: y,
        variant: "heading-md/semibold",
        children: U.length > 0 ? j.default.Messages.GUILD_EVENTS_PLURAL.format({
          number: U.length
        }) : j.default.Messages.GUILD_EVENTS
      }), V && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          className: k.divider,
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
                guildId: A
              })
            }, F)
          },
          innerClassName: k.button,
          children: j.default.Messages.SCHEDULE_EVENT
        })]
      }), (0, l.jsx)(d.Clickable, {
        onClick: i,
        className: k.iconButton,
        "aria-label": j.default.Messages.CLOSE,
        children: (0, l.jsx)(C.default, {
          className: k.icon
        })
      })]
    }), (0, l.jsx)(d.ModalContent, {
      className: k.content,
      children: U.length > 0 ? U.map(e => (0, l.jsx)(x.default, {
        guildEvent: e,
        guildId: A,
        onActionTaken: i,
        isNew: null != b.current && r.default.compare(e.id, b.current) > 0
      }, e.id)) : (0, l.jsx)(R.default, {
        guildId: A,
        onClose: i
      })
    })]
  })
}