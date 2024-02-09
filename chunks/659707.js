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
  C = n("599110"),
  p = n("449008"),
  _ = n("933326"),
  I = n("334683"),
  T = n("534222"),
  x = n("473031"),
  D = n("266763"),
  G = n("842672"),
  R = n("745049"),
  L = n("49111"),
  M = n("133335"),
  A = n("782340"),
  U = n("639480");

function y(e) {
  let {
    transitionState: t,
    onClose: i,
    guildId: y
  } = e, V = (0, h.useUID)(), O = (0, s.useStateFromStores)([g.default], () => g.default.getGuild(y)), P = (0, I.default)(null == O ? void 0 : O.id), j = (0, T.default)(y), k = u.useRef(S.default.ackMessageId(y, M.ReadStateTypes.GUILD_EVENT)), F = (0, G.default)();
  return u.useEffect(() => {
    j.forEach(e => _.default.getGuildEventUserCounts(y, e.id, [])), _.default.getGuildEventsForCurrentUser(y)
  }, [j, y]), u.useEffect(() => {
    let e = g.default.getGuild(y);
    if (!(null == e ? void 0 : e.hasFeature(L.GuildFeatures.HUB))) return;
    let {
      showHubEventsList: t
    } = f.default.getCurrentConfig({
      guildId: y,
      location: "d3755f_1"
    });
    if (!t) return;
    let n = E.default.getDefaultChannel(y);
    null != n && c.fetchDirectoryEntries(n.id)
  }, [y]), u.useEffect(() => {
    C.default.track(L.AnalyticEvents.OPEN_MODAL, {
      type: R.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
      guild_id: y,
      guild_events_count: j.length
    })
  }, []), u.useEffect(() => {
    a(j).map(e => e.creator_id).filter(p.isNotNullish).uniq().forEach(e => {
      v.default.requestMember(y, e)
    })
  }, [y, j]), u.useEffect(() => {
    null != y && (0, o.ackGuildFeature)(y, M.ReadStateTypes.GUILD_EVENT)
  }, [y]), (0, l.jsxs)(d.ModalRoot, {
    size: d.ModalSize.MEDIUM,
    transitionState: t,
    "aria-labelledby": V,
    children: [(0, l.jsxs)(d.ModalHeader, {
      className: U.header,
      children: [(0, l.jsx)(m.default, {
        className: U.icon
      }), (0, l.jsx)(d.Heading, {
        id: V,
        variant: "heading-md/semibold",
        children: j.length > 0 ? A.default.Messages.GUILD_EVENTS_PLURAL.format({
          number: j.length
        }) : A.default.Messages.GUILD_EVENTS
      }), P && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          className: U.divider,
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
                guildId: y
              })
            }, F)
          },
          innerClassName: U.button,
          children: A.default.Messages.SCHEDULE_EVENT
        })]
      }), (0, l.jsx)(d.Clickable, {
        onClick: i,
        className: U.iconButton,
        "aria-label": A.default.Messages.CLOSE,
        children: (0, l.jsx)(N.default, {
          className: U.icon
        })
      })]
    }), (0, l.jsx)(d.ModalContent, {
      className: U.content,
      children: j.length > 0 ? j.map(e => (0, l.jsx)(x.default, {
        guildEvent: e,
        guildId: y,
        onActionTaken: i,
        isNew: null != k.current && r.default.compare(e.id, k.current) > 0
      }, e.id)) : (0, l.jsx)(D.default, {
        guildId: y,
        onClose: i
      })
    })]
  })
}