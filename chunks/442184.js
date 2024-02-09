"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var a = n("37983"),
  r = n("884691"),
  l = n("446674"),
  i = n("77078"),
  s = n("308289"),
  u = n("750560"),
  o = n("619335"),
  d = n("95045"),
  c = n("574073"),
  f = n("26989"),
  h = n("660478"),
  C = n("27618"),
  p = n("697218"),
  v = n("959097"),
  m = n("93427"),
  I = n("299039"),
  S = n("158998"),
  g = n("610730"),
  E = n("487269"),
  M = n("719347"),
  A = n("782340"),
  x = n("140407");

function T(e) {
  return e.isActiveThread() ? (0, a.jsx)(L, {
    channel: e
  }) : (0, a.jsx)(y, {
    channel: e
  })
}

function L(e) {
  let {
    channel: t
  } = e, n = (0, l.useStateFromStores)([g.default], () => g.default.getMostRecentMessage(t.id));
  return null == n ? (0, a.jsx)(_, {
    channel: t
  }) : (0, a.jsx)(N, {
    channel: t,
    message: n
  })
}

function _(e) {
  let {
    channel: t
  } = e, n = (0, E.useLastMessageTimestamp)(t);
  return (0, a.jsxs)(i.Text, {
    className: x.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: [A.default.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES, "\xa0 • \xa0", (0, E.getTimestampString)(n)]
  })
}

function N(e) {
  let {
    channel: t,
    message: n
  } = e;
  (0, u.useSubscribeGuildMembers)({
    [t.guild_id]: [n.author.id]
  });
  let o = (0, l.useStateFromStores)([p.default], () => {
      var e;
      return null !== (e = p.default.getUser(n.author.id)) && void 0 !== e ? e : n.author
    }),
    {
      nick: f,
      colorString: h
    } = (0, c.default)(n),
    v = (0, l.useStateFromStores)([C.default], () => C.default.isBlocked(n.author.id)),
    S = r.useMemo(() => {
      let e = null != n.content && "" !== n.content ? (0, d.default)(n, {
          formatInline: !0
        }).content : null,
        {
          contentPlaceholder: t,
          renderedContent: r,
          icon: l
        } = (0, m.renderSingleLineMessage)(n, e, v, x.messageContent, {
          iconClass: x.messageContentIcon,
          iconSize: M.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
        });
      return (0, a.jsxs)(a.Fragment, {
        children: [null != r ? r : (0, a.jsx)("span", {
          children: t
        }), l]
      })
    }, [n, v]);
  return (0, a.jsxs)(i.Text, {
    className: x.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: [(0, a.jsx)(s.default, {
      className: x.avatar,
      user: o,
      size: i.AvatarSizes.SIZE_16
    }), (0, a.jsx)(i.NameWithRole, {
      name: f,
      color: h,
      className: x.authorName
    }), ":\xa0", S, "\xa0 • \xa0", (0, E.getTimestampString)(I.default.extractTimestamp(n.id))]
  })
}

function y(e) {
  var t, n, r;
  let {
    channel: d
  } = e, c = (0, l.useStateFromStores)([h.default], () => h.default.lastMessageId(d.id)), C = null == c ? new Date(null !== (n = null === (t = d.threadMetadata) || void 0 === t ? void 0 : t.archiveTimestamp) && void 0 !== n ? n : Date.now()).getTime() : I.default.extractTimestamp(c);
  (0, u.useSubscribeGuildMembers)({
    [d.guild_id]: [d.ownerId]
  });
  let m = (0, l.useStateFromStores)([p.default], () => p.default.getUser(d.ownerId)),
    g = (0, l.useStateFromStores)([f.default], () => f.default.getMember(d.guild_id, d.ownerId)),
    M = null !== (r = (0, o.default)(d)) && void 0 !== r ? r : v.default;
  return (0, a.jsx)(i.Text, {
    className: x.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: null == m ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: x.noAvatarIcon,
        children: (0, a.jsx)(M, {
          width: 10,
          height: 10
        })
      }), A.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
        time: (0, E.getTimestampString)(C)
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(s.default, {
        className: x.avatar,
        user: m,
        size: i.AvatarSizes.SIZE_16
      }), A.default.Messages.THREAD_BROWSER_STARTED_BY.format({
        authorHook(e, t) {
          var n, r;
          return (0, a.jsx)(i.NameWithRole, {
            className: x.startedByName,
            color: null !== (n = null == g ? void 0 : g.colorString) && void 0 !== n ? n : void 0,
            name: null !== (r = null == g ? void 0 : g.nick) && void 0 !== r ? r : S.default.getName(m)
          }, t)
        }
      }), (0, a.jsx)("span", {
        className: x.bullet,
        children: "•"
      }), A.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
        time: (0, E.getTimestampString)(C)
      })]
    })
  })
}