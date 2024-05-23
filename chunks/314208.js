"use strict";
a.r(t), a.d(t, {
  default: function() {
    return H
  }
});
var s = a("735250"),
  l = a("470079"),
  r = a("442837"),
  n = a("481060"),
  u = a("99690"),
  d = a("58540"),
  i = a("995123"),
  o = a("200120"),
  c = a("937889"),
  f = a("739566"),
  h = a("271383"),
  m = a("306680"),
  T = a("699516"),
  g = a("594174"),
  C = a("934458"),
  E = a("512665"),
  S = a("709054"),
  v = a("51144"),
  x = a("144140"),
  N = a("91159"),
  _ = a("768760"),
  R = a("689938"),
  M = a("726475");

function H(e) {
  return e.isActiveThread() ? (0, s.jsx)(A, {
    channel: e
  }) : (0, s.jsx)(I, {
    channel: e
  })
}

function A(e) {
  let {
    channel: t
  } = e, a = (0, r.useStateFromStores)([x.default], () => x.default.getMostRecentMessage(t.id));
  return null == a ? (0, s.jsx)(j, {
    channel: t
  }) : (0, s.jsx)(p, {
    channel: t,
    message: a
  })
}

function j(e) {
  let {
    channel: t
  } = e, a = (0, N.useLastMessageTimestamp)(t);
  return (0, s.jsxs)(n.Text, {
    className: M.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: [R.default.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES, "\xa0 • \xa0", (0, N.getTimestampString)(a)]
  })
}

function p(e) {
  let {
    channel: t,
    message: a
  } = e;
  (0, d.useSubscribeGuildMembers)({
    [t.guild_id]: [a.author.id]
  });
  let i = (0, r.useStateFromStores)([g.default], () => {
      var e;
      return null !== (e = g.default.getUser(a.author.id)) && void 0 !== e ? e : a.author
    }),
    {
      nick: h,
      colorString: m
    } = (0, f.default)(a),
    C = (0, r.useStateFromStores)([T.default], () => T.default.isBlocked(a.author.id)),
    v = (0, o.useShouldFilterKeywords)(),
    x = l.useMemo(() => {
      let e = null != a.content && "" !== a.content ? (0, c.default)(a, {
          formatInline: !0,
          shouldFilterKeywords: v
        }).content : null,
        {
          contentPlaceholder: t,
          renderedContent: l,
          icon: r
        } = (0, E.renderSingleLineMessage)(a, e, C, M.messageContent, {
          iconClass: M.messageContentIcon,
          iconSize: _.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
        });
      return (0, s.jsxs)(s.Fragment, {
        children: [null != l ? l : (0, s.jsx)("span", {
          children: t
        }), r]
      })
    }, [a, C, v]);
  return (0, s.jsxs)(n.Text, {
    className: M.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: [(0, s.jsx)(u.default, {
      className: M.avatar,
      user: i,
      size: n.AvatarSizes.SIZE_16
    }), (0, s.jsx)(n.NameWithRole, {
      name: h,
      color: m,
      className: M.authorName
    }), ":\xa0", x, "\xa0 • \xa0", (0, N.getTimestampString)(S.default.extractTimestamp(a.id))]
  })
}

function I(e) {
  var t, a, l;
  let {
    channel: o
  } = e, c = (0, r.useStateFromStores)([m.default], () => m.default.lastMessageId(o.id)), f = null == c ? new Date(null !== (a = null === (t = o.threadMetadata) || void 0 === t ? void 0 : t.archiveTimestamp) && void 0 !== a ? a : Date.now()).getTime() : S.default.extractTimestamp(c);
  (0, d.useSubscribeGuildMembers)({
    [o.guild_id]: [o.ownerId]
  });
  let T = (0, r.useStateFromStores)([g.default], () => g.default.getUser(o.ownerId)),
    E = (0, r.useStateFromStores)([h.default], () => h.default.getMember(o.guild_id, o.ownerId)),
    x = null !== (l = (0, i.default)(o)) && void 0 !== l ? l : C.default;
  return (0, s.jsx)(n.Text, {
    className: M.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: null == T ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("div", {
        className: M.noAvatarIcon,
        children: (0, s.jsx)(x, {
          width: 10,
          height: 10
        })
      }), R.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
        time: (0, N.getTimestampString)(f)
      })]
    }) : (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(u.default, {
        className: M.avatar,
        user: T,
        size: n.AvatarSizes.SIZE_16
      }), R.default.Messages.THREAD_BROWSER_STARTED_BY.format({
        authorHook(e, t) {
          var a, l;
          return (0, s.jsx)(n.NameWithRole, {
            className: M.startedByName,
            color: null !== (a = null == E ? void 0 : E.colorString) && void 0 !== a ? a : void 0,
            name: null !== (l = null == E ? void 0 : E.nick) && void 0 !== l ? l : v.default.getName(T)
          }, t)
        }
      }), (0, s.jsx)("span", {
        className: M.bullet,
        children: "•"
      }), R.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
        time: (0, N.getTimestampString)(f)
      })]
    })
  })
}