"use strict";
n.d(t, {
  Z: function() {
    return f
  }
}), n(47120);
var s = n(735250),
  l = n(470079),
  a = n(924826),
  r = n(91192),
  i = n(442837),
  o = n(481060),
  c = n(607070),
  d = n(109434),
  u = n(456269),
  m = n(228392),
  h = n(479099),
  g = n(981631),
  x = n(689938),
  _ = n(451379);

function E() {
  return Promise.resolve()
}

function f(e) {
  let {
    channel: t,
    closePopout: n,
    setPopoutRef: f
  } = e, C = (0, u.Vm)(t), {
    tagFilter: T
  } = (0, d.H)(t.id), N = (0, d.v)(), I = (0, i.e7)([c.Z], () => c.Z.keyboardModeEnabled), S = l.useCallback(e => {
    (0, m.e7)({
      guildId: t.guild_id,
      channelId: t.id,
      tagId: e,
      filterTagIds: Array.from(T),
      added: !T.has(e),
      location: {
        page: g.ZY5.GUILD_CHANNEL,
        section: g.jXE.FORUM_CHANNEL_HEADER,
        object: g.qAy.CHANNEL_TAG
      }
    }), N.getState().toggleTagFilter(t.id, e)
  }, [t, T, N]), p = l.useCallback(() => {
    N.getState().setTagFilter(t.id, new Set), !I && n()
  }, [N, t.id, I, n]), v = (0, a.ZP)({
    id: "".concat(t.id, "-all-tags-dropdown-navigator"),
    isEnabled: !0,
    wrap: !0,
    scrollToStart: E,
    scrollToEnd: E
  }), M = l.useRef(null);
  return l.useEffect(() => {
    requestAnimationFrame(() => {
      if (null != M.current) {
        let e = M.current.querySelector(".".concat(_.tag));
        null != e && e.focus()
      }
    })
  }, []), (0, s.jsxs)(o.Dialog, {
    ref: f,
    "aria-label": x.Z.Messages.FORUM_TAG_FILTER_HEADER,
    className: _.container,
    children: [(0, s.jsx)("div", {
      className: _.header,
      children: (0, s.jsxs)("div", {
        className: _.headerLeft,
        children: [(0, s.jsx)(o.Heading, {
          color: "interactive-normal",
          variant: "text-xs/bold",
          className: _.headerText,
          children: x.Z.Messages.FORUM_TAG_POST_SELECT
        }), (0, s.jsx)("div", {
          className: _.countContainer,
          children: (0, s.jsx)(o.Text, {
            className: _.countText,
            color: "none",
            variant: "text-xs/medium",
            children: T.size
          })
        })]
      })
    }), (0, s.jsx)(r.bG, {
      navigator: v,
      children: (0, s.jsx)(r.SJ, {
        children: e => {
          let {
            ref: t,
            ...n
          } = e;
          return (0, s.jsx)("div", {
            ref: e => {
              t.current = e, M.current = e
            },
            ...n,
            className: _.tagContainer,
            children: C.map(e => (0, s.jsx)(h.Z, {
              className: _.tag,
              tag: e,
              selected: T.has(e.id),
              onClick: () => S(e.id)
            }, e.id))
          })
        }
      })
    }), (0, s.jsx)("div", {
      className: _.separator
    }), (0, s.jsx)(o.Button, {
      look: o.Button.Looks.LINK,
      size: o.Button.Sizes.MIN,
      color: o.Button.Colors.CUSTOM,
      className: _.clear,
      "aria-label": x.Z.Messages.FORUM_CLEAR_ALL,
      onClick: p,
      children: (0, s.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-link",
        children: x.Z.Messages.FORUM_CLEAR_ALL
      })
    })]
  })
}