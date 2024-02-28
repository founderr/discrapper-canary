"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
});
var l = n("37983"),
  u = n("884691"),
  i = n("917351"),
  a = n.n(i),
  r = n("446674"),
  s = n("77078"),
  d = n("267363"),
  o = n("15433"),
  c = n("27978"),
  f = n("923959"),
  E = n("124948"),
  v = n("305961"),
  g = n("660478"),
  S = n("476765"),
  h = n("943232"),
  N = n("945330"),
  m = n("599110"),
  C = n("449008"),
  p = n("299039"),
  I = n("933326"),
  _ = n("334683"),
  T = n("534222"),
  x = n("473031"),
  D = n("266763"),
  G = n("842672"),
  R = n("745049"),
  L = n("49111"),
  M = n("133335"),
  A = n("782340"),
  U = n("290487");

function y(e) {
  let {
    transitionState: t,
    onClose: i,
    guildId: y
  } = e, V = (0, S.useUID)(), O = (0, r.useStateFromStores)([v.default], () => v.default.getGuild(y)), j = (0, _.default)(null == O ? void 0 : O.id), P = (0, T.default)(y), k = u.useRef(g.default.ackMessageId(y, M.ReadStateTypes.GUILD_EVENT)), b = (0, G.default)();
  return u.useEffect(() => {
    P.forEach(e => I.default.getGuildEventUserCounts(y, e.id, [])), I.default.getGuildEventsForCurrentUser(y)
  }, [P, y]), u.useEffect(() => {
    let e = v.default.getGuild(y);
    if (!(null == e ? void 0 : e.hasFeature(L.GuildFeatures.HUB))) return;
    let {
      showHubEventsList: t
    } = c.default.getCurrentConfig({
      guildId: y,
      location: "d3755f_1"
    });
    if (!t) return;
    let n = f.default.getDefaultChannel(y);
    null != n && o.fetchDirectoryEntries(n.id)
  }, [y]), u.useEffect(() => {
    m.default.track(L.AnalyticEvents.OPEN_MODAL, {
      type: R.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
      guild_id: y,
      guild_events_count: P.length
    })
  }, []), u.useEffect(() => {
    a(P).map(e => e.creator_id).filter(C.isNotNullish).uniq().forEach(e => {
      E.default.requestMember(y, e)
    })
  }, [y, P]), u.useEffect(() => {
    null != y && (0, d.ackGuildFeature)(y, M.ReadStateTypes.GUILD_EVENT)
  }, [y]), (0, l.jsxs)(s.ModalRoot, {
    size: s.ModalSize.MEDIUM,
    transitionState: t,
    "aria-labelledby": V,
    children: [(0, l.jsxs)(s.ModalHeader, {
      className: U.header,
      children: [(0, l.jsx)(h.default, {
        className: U.icon
      }), (0, l.jsx)(s.Heading, {
        id: V,
        variant: "heading-md/semibold",
        children: P.length > 0 ? A.default.Messages.GUILD_EVENTS_PLURAL.format({
          number: P.length
        }) : A.default.Messages.GUILD_EVENTS
      }), j && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          className: U.divider,
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
                guildId: y
              })
            }, b)
          },
          innerClassName: U.button,
          children: A.default.Messages.SCHEDULE_EVENT
        })]
      }), (0, l.jsx)(s.Clickable, {
        onClick: i,
        className: U.iconButton,
        "aria-label": A.default.Messages.CLOSE,
        children: (0, l.jsx)(N.default, {
          className: U.icon
        })
      })]
    }), (0, l.jsx)(s.ModalContent, {
      className: U.content,
      children: P.length > 0 ? P.map(e => (0, l.jsx)(x.default, {
        guildEvent: e,
        guildId: y,
        onActionTaken: i,
        isNew: null != k.current && p.default.compare(e.id, k.current) > 0
      }, e.id)) : (0, l.jsx)(D.default, {
        guildId: y,
        onClose: i
      })
    })]
  })
}