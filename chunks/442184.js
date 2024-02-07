"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983"),
  l = n("884691"),
  r = n("446674"),
  s = n("77078"),
  i = n("308289"),
  u = n("750560"),
  o = n("619335"),
  d = n("95045"),
  c = n("574073"),
  f = n("26989"),
  C = n("660478"),
  h = n("27618"),
  p = n("697218"),
  v = n("959097"),
  m = n("93427"),
  S = n("299039"),
  g = n("158998"),
  E = n("610730"),
  I = n("487269"),
  A = n("719347"),
  T = n("782340"),
  N = n("140407");

function _(e) {
  return e.isActiveThread() ? (0, a.jsx)(y, {
    channel: e
  }) : (0, a.jsx)(M, {
    channel: e
  })
}

function y(e) {
  let {
    channel: t
  } = e, n = (0, r.useStateFromStores)([E.default], () => E.default.getMostRecentMessage(t.id));
  return null == n ? (0, a.jsx)(x, {
    channel: t
  }) : (0, a.jsx)(L, {
    channel: t,
    message: n
  })
}

function x(e) {
  let {
    channel: t
  } = e, n = (0, I.useLastMessageTimestamp)(t);
  return (0, a.jsxs)(s.Text, {
    className: N.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: [T.default.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES, "\xa0 • \xa0", (0, I.getTimestampString)(n)]
  })
}

function L(e) {
  let {
    channel: t,
    message: n
  } = e;
  (0, u.useSubscribeGuildMembers)({
    [t.guild_id]: [n.author.id]
  });
  let o = (0, r.useStateFromStores)([p.default], () => {
      var e;
      return null !== (e = p.default.getUser(n.author.id)) && void 0 !== e ? e : n.author
    }),
    {
      nick: f,
      colorString: C
    } = (0, c.default)(n),
    v = (0, r.useStateFromStores)([h.default], () => h.default.isBlocked(n.author.id)),
    g = l.useMemo(() => {
      let e = null != n.content && "" !== n.content ? (0, d.default)(n, {
          formatInline: !0
        }).content : null,
        {
          contentPlaceholder: t,
          renderedContent: l,
          icon: r
        } = (0, m.renderSingleLineMessage)(n, e, v, N.messageContent, {
          iconClass: N.messageContentIcon,
          iconSize: A.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
        });
      return (0, a.jsxs)(a.Fragment, {
        children: [null != l ? l : (0, a.jsx)("span", {
          children: t
        }), r]
      })
    }, [n, v]);
  return (0, a.jsxs)(s.Text, {
    className: N.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: [(0, a.jsx)(i.default, {
      className: N.avatar,
      user: o,
      size: s.AvatarSizes.SIZE_16
    }), (0, a.jsx)(s.NameWithRole, {
      name: f,
      color: C,
      className: N.authorName
    }), ":\xa0", g, "\xa0 • \xa0", (0, I.getTimestampString)(S.default.extractTimestamp(n.id))]
  })
}

function M(e) {
  var t, n, l;
  let {
    channel: d
  } = e, c = (0, r.useStateFromStores)([C.default], () => C.default.lastMessageId(d.id)), h = null == c ? new Date(null !== (n = null === (t = d.threadMetadata) || void 0 === t ? void 0 : t.archiveTimestamp) && void 0 !== n ? n : Date.now()).getTime() : S.default.extractTimestamp(c);
  (0, u.useSubscribeGuildMembers)({
    [d.guild_id]: [d.ownerId]
  });
  let m = (0, r.useStateFromStores)([p.default], () => p.default.getUser(d.ownerId)),
    E = (0, r.useStateFromStores)([f.default], () => f.default.getMember(d.guild_id, d.ownerId)),
    A = null !== (l = (0, o.default)(d)) && void 0 !== l ? l : v.default;
  return (0, a.jsx)(s.Text, {
    className: N.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: null == m ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: N.noAvatarIcon,
        children: (0, a.jsx)(A, {
          width: 10,
          height: 10
        })
      }), T.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
        time: (0, I.getTimestampString)(h)
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(i.default, {
        className: N.avatar,
        user: m,
        size: s.AvatarSizes.SIZE_16
      }), T.default.Messages.THREAD_BROWSER_STARTED_BY.format({
        authorHook(e, t) {
          var n, l;
          return (0, a.jsx)(s.NameWithRole, {
            className: N.startedByName,
            color: null !== (n = null == E ? void 0 : E.colorString) && void 0 !== n ? n : void 0,
            name: null !== (l = null == E ? void 0 : E.nick) && void 0 !== l ? l : g.default.getName(m)
          }, t)
        }
      }), (0, a.jsx)("span", {
        className: N.bullet,
        children: "•"
      }), T.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
        time: (0, I.getTimestampString)(h)
      })]
    })
  })
}