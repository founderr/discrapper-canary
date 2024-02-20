"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("974667"),
  r = s("446674"),
  i = s("77078"),
  o = s("206230"),
  u = s("339792"),
  d = s("680986"),
  c = s("867965"),
  m = s("90625"),
  h = s("49111"),
  f = s("782340"),
  g = s("282078");

function x() {
  return Promise.resolve()
}

function C(e) {
  let {
    channel: t,
    closePopout: s,
    setPopoutRef: C
  } = e, _ = (0, d.useVisibleForumTags)(t), {
    tagFilter: S
  } = (0, u.useForumChannelStore)(t.id), T = (0, u.useForumChannelStoreApi)(), p = (0, r.useStateFromStores)([o.default], () => o.default.keyboardModeEnabled), E = n.useCallback(e => {
    (0, c.trackForumTagFilterClicked)({
      guildId: t.guild_id,
      channelId: t.id,
      tagId: e,
      filterTagIds: Array.from(S),
      added: !S.has(e),
      location: {
        page: h.AnalyticsPages.GUILD_CHANNEL,
        section: h.AnalyticsSections.FORUM_CHANNEL_HEADER,
        object: h.AnalyticsObjects.CHANNEL_TAG
      }
    }), T.getState().toggleTagFilter(t.id, e)
  }, [t, S, T]), N = n.useCallback(() => {
    T.getState().setTagFilter(t.id, new Set), !p && s()
  }, [T, t.id, p, s]), M = (0, l.default)({
    id: "".concat(t.id, "-all-tags-dropdown-navigator"),
    isEnabled: !0,
    wrap: !0,
    scrollToStart: x,
    scrollToEnd: x
  }), v = n.useRef(null);
  return n.useEffect(() => {
    requestAnimationFrame(() => {
      if (null != v.current) {
        let e = v.current.querySelector(".".concat(g.tag));
        null != e && e.focus()
      }
    })
  }, []), (0, a.jsxs)(i.Dialog, {
    ref: C,
    "aria-label": f.default.Messages.FORUM_TAG_FILTER_HEADER,
    className: g.container,
    children: [(0, a.jsx)("div", {
      className: g.header,
      children: (0, a.jsxs)("div", {
        className: g.headerLeft,
        children: [(0, a.jsx)(i.Heading, {
          color: "interactive-normal",
          variant: "text-xs/bold",
          className: g.headerText,
          children: f.default.Messages.FORUM_TAG_POST_SELECT
        }), (0, a.jsx)("div", {
          className: g.countContainer,
          children: (0, a.jsx)(i.Text, {
            className: g.countText,
            color: "none",
            variant: "text-xs/medium",
            children: S.size
          })
        })]
      })
    }), (0, a.jsx)(l.ListNavigatorProvider, {
      navigator: M,
      children: (0, a.jsx)(l.ListNavigatorContainer, {
        children: e => {
          let {
            ref: t,
            ...s
          } = e;
          return (0, a.jsx)("div", {
            ref: e => {
              t.current = e, v.current = e
            },
            ...s,
            className: g.tagContainer,
            children: _.map(e => (0, a.jsx)(m.default, {
              className: g.tag,
              tag: e,
              selected: S.has(e.id),
              onClick: () => E(e.id)
            }, e.id))
          })
        }
      })
    }), (0, a.jsx)("div", {
      className: g.separator
    }), (0, a.jsx)(i.Button, {
      look: i.Button.Looks.LINK,
      size: i.Button.Sizes.MIN,
      color: i.Button.Colors.CUSTOM,
      className: g.clear,
      "aria-label": f.default.Messages.FORUM_CLEAR_ALL,
      onClick: N,
      children: (0, a.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-link",
        children: f.default.Messages.FORUM_CLEAR_ALL
      })
    })]
  })
}