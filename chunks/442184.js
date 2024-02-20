"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
});
var l = a("37983"),
  n = a("884691"),
  r = a("446674"),
  s = a("77078"),
  i = a("308289"),
  u = a("750560"),
  o = a("619335"),
  d = a("95045"),
  c = a("574073"),
  f = a("26989"),
  C = a("660478"),
  h = a("27618"),
  m = a("697218"),
  p = a("959097"),
  v = a("93427"),
  g = a("299039"),
  N = a("158998"),
  S = a("610730"),
  I = a("487269"),
  E = a("719347"),
  L = a("782340"),
  T = a("963906");

function A(e) {
  return e.isActiveThread() ? (0, l.jsx)(x, {
    channel: e
  }) : (0, l.jsx)(w, {
    channel: e
  })
}

function x(e) {
  let {
    channel: t
  } = e, a = (0, r.useStateFromStores)([S.default], () => S.default.getMostRecentMessage(t.id));
  return null == a ? (0, l.jsx)(_, {
    channel: t
  }) : (0, l.jsx)(M, {
    channel: t,
    message: a
  })
}

function _(e) {
  let {
    channel: t
  } = e, a = (0, I.useLastMessageTimestamp)(t);
  return (0, l.jsxs)(s.Text, {
    className: T.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: [L.default.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES, "\xa0 • \xa0", (0, I.getTimestampString)(a)]
  })
}

function M(e) {
  let {
    channel: t,
    message: a
  } = e;
  (0, u.useSubscribeGuildMembers)({
    [t.guild_id]: [a.author.id]
  });
  let o = (0, r.useStateFromStores)([m.default], () => {
      var e;
      return null !== (e = m.default.getUser(a.author.id)) && void 0 !== e ? e : a.author
    }),
    {
      nick: f,
      colorString: C
    } = (0, c.default)(a),
    p = (0, r.useStateFromStores)([h.default], () => h.default.isBlocked(a.author.id)),
    N = n.useMemo(() => {
      let e = null != a.content && "" !== a.content ? (0, d.default)(a, {
          formatInline: !0
        }).content : null,
        {
          contentPlaceholder: t,
          renderedContent: n,
          icon: r
        } = (0, v.renderSingleLineMessage)(a, e, p, T.messageContent, {
          iconClass: T.messageContentIcon,
          iconSize: E.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
        });
      return (0, l.jsxs)(l.Fragment, {
        children: [null != n ? n : (0, l.jsx)("span", {
          children: t
        }), r]
      })
    }, [a, p]);
  return (0, l.jsxs)(s.Text, {
    className: T.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: [(0, l.jsx)(i.default, {
      className: T.avatar,
      user: o,
      size: s.AvatarSizes.SIZE_16
    }), (0, l.jsx)(s.NameWithRole, {
      name: f,
      color: C,
      className: T.authorName
    }), ":\xa0", N, "\xa0 • \xa0", (0, I.getTimestampString)(g.default.extractTimestamp(a.id))]
  })
}

function w(e) {
  var t, a, n;
  let {
    channel: d
  } = e, c = (0, r.useStateFromStores)([C.default], () => C.default.lastMessageId(d.id)), h = null == c ? new Date(null !== (a = null === (t = d.threadMetadata) || void 0 === t ? void 0 : t.archiveTimestamp) && void 0 !== a ? a : Date.now()).getTime() : g.default.extractTimestamp(c);
  (0, u.useSubscribeGuildMembers)({
    [d.guild_id]: [d.ownerId]
  });
  let v = (0, r.useStateFromStores)([m.default], () => m.default.getUser(d.ownerId)),
    S = (0, r.useStateFromStores)([f.default], () => f.default.getMember(d.guild_id, d.ownerId)),
    E = null !== (n = (0, o.default)(d)) && void 0 !== n ? n : p.default;
  return (0, l.jsx)(s.Text, {
    className: T.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: null == v ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: T.noAvatarIcon,
        children: (0, l.jsx)(E, {
          width: 10,
          height: 10
        })
      }), L.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
        time: (0, I.getTimestampString)(h)
      })]
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(i.default, {
        className: T.avatar,
        user: v,
        size: s.AvatarSizes.SIZE_16
      }), L.default.Messages.THREAD_BROWSER_STARTED_BY.format({
        authorHook(e, t) {
          var a, n;
          return (0, l.jsx)(s.NameWithRole, {
            className: T.startedByName,
            color: null !== (a = null == S ? void 0 : S.colorString) && void 0 !== a ? a : void 0,
            name: null !== (n = null == S ? void 0 : S.nick) && void 0 !== n ? n : N.default.getName(v)
          }, t)
        }
      }), (0, l.jsx)("span", {
        className: T.bullet,
        children: "•"
      }), L.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
        time: (0, I.getTimestampString)(h)
      })]
    })
  })
}