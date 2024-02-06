"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var l = n("37983"),
  r = n("884691"),
  a = n("446674"),
  i = n("77078"),
  s = n("308289"),
  u = n("750560"),
  o = n("619335"),
  d = n("95045"),
  c = n("574073"),
  f = n("26989"),
  h = n("660478"),
  p = n("27618"),
  C = n("697218"),
  m = n("959097"),
  v = n("93427"),
  g = n("299039"),
  E = n("158998"),
  S = n("610730"),
  I = n("487269"),
  _ = n("719347"),
  L = n("782340"),
  x = n("140407");

function T(e) {
  return e.isActiveThread() ? (0, l.jsx)(N, {
    channel: e
  }) : (0, l.jsx)(y, {
    channel: e
  })
}

function N(e) {
  let {
    channel: t
  } = e, n = (0, a.useStateFromStores)([S.default], () => S.default.getMostRecentMessage(t.id));
  return null == n ? (0, l.jsx)(A, {
    channel: t
  }) : (0, l.jsx)(M, {
    channel: t,
    message: n
  })
}

function A(e) {
  let {
    channel: t
  } = e, n = (0, I.useLastMessageTimestamp)(t);
  return (0, l.jsxs)(i.Text, {
    className: x.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: [L.default.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES, "\xa0 • \xa0", (0, I.getTimestampString)(n)]
  })
}

function M(e) {
  let {
    channel: t,
    message: n
  } = e;
  (0, u.useSubscribeGuildMembers)({
    [t.guild_id]: [n.author.id]
  });
  let o = (0, a.useStateFromStores)([C.default], () => {
      var e;
      return null !== (e = C.default.getUser(n.author.id)) && void 0 !== e ? e : n.author
    }),
    {
      nick: f,
      colorString: h
    } = (0, c.default)(n),
    m = (0, a.useStateFromStores)([p.default], () => p.default.isBlocked(n.author.id)),
    E = r.useMemo(() => {
      let e = null != n.content && "" !== n.content ? (0, d.default)(n, {
          formatInline: !0
        }).content : null,
        {
          contentPlaceholder: t,
          renderedContent: r,
          icon: a
        } = (0, v.renderSingleLineMessage)(n, e, m, x.messageContent, {
          iconClass: x.messageContentIcon,
          iconSize: _.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
        });
      return (0, l.jsxs)(l.Fragment, {
        children: [null != r ? r : (0, l.jsx)("span", {
          children: t
        }), a]
      })
    }, [n, m]);
  return (0, l.jsxs)(i.Text, {
    className: x.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: [(0, l.jsx)(s.default, {
      className: x.avatar,
      user: o,
      size: i.AvatarSizes.SIZE_16
    }), (0, l.jsx)(i.NameWithRole, {
      name: f,
      color: h,
      className: x.authorName
    }), ":\xa0", E, "\xa0 • \xa0", (0, I.getTimestampString)(g.default.extractTimestamp(n.id))]
  })
}

function y(e) {
  var t, n, r;
  let {
    channel: d
  } = e, c = (0, a.useStateFromStores)([h.default], () => h.default.lastMessageId(d.id)), p = null == c ? new Date(null !== (n = null === (t = d.threadMetadata) || void 0 === t ? void 0 : t.archiveTimestamp) && void 0 !== n ? n : Date.now()).getTime() : g.default.extractTimestamp(c);
  (0, u.useSubscribeGuildMembers)({
    [d.guild_id]: [d.ownerId]
  });
  let v = (0, a.useStateFromStores)([C.default], () => C.default.getUser(d.ownerId)),
    S = (0, a.useStateFromStores)([f.default], () => f.default.getMember(d.guild_id, d.ownerId)),
    _ = null !== (r = (0, o.default)(d)) && void 0 !== r ? r : m.default;
  return (0, l.jsx)(i.Text, {
    className: x.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: null == v ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: x.noAvatarIcon,
        children: (0, l.jsx)(_, {
          width: 10,
          height: 10
        })
      }), L.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
        time: (0, I.getTimestampString)(p)
      })]
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(s.default, {
        className: x.avatar,
        user: v,
        size: i.AvatarSizes.SIZE_16
      }), L.default.Messages.THREAD_BROWSER_STARTED_BY.format({
        authorHook(e, t) {
          var n, r;
          return (0, l.jsx)(i.NameWithRole, {
            className: x.startedByName,
            color: null !== (n = null == S ? void 0 : S.colorString) && void 0 !== n ? n : void 0,
            name: null !== (r = null == S ? void 0 : S.nick) && void 0 !== r ? r : E.default.getName(v)
          }, t)
        }
      }), (0, l.jsx)("span", {
        className: x.bullet,
        children: "•"
      }), L.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
        time: (0, I.getTimestampString)(p)
      })]
    })
  })
}