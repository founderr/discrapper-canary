t.d(n, {
  Z: function() {
    return S
  }
});
var a = t(735250),
  s = t(470079),
  r = t(442837),
  l = t(481060),
  i = t(99690),
  o = t(58540),
  c = t(995123),
  d = t(200120),
  u = t(937889),
  h = t(739566),
  m = t(271383),
  g = t(306680),
  f = t(699516),
  E = t(594174),
  T = t(512665),
  Z = t(709054),
  I = t(51144),
  x = t(144140),
  _ = t(91159),
  v = t(768760),
  N = t(689938),
  R = t(670914);

function S(e) {
  return e.isActiveThread() ? (0, a.jsx)(A, {
    channel: e
  }) : (0, a.jsx)(M, {
    channel: e
  })
}

function A(e) {
  let {
    channel: n
  } = e, t = (0, r.e7)([x.Z], () => x.Z.getMostRecentMessage(n.id));
  return null == t ? (0, a.jsx)(j, {
    channel: n
  }) : (0, a.jsx)(C, {
    channel: n,
    message: t
  })
}

function j(e) {
  let {
    channel: n
  } = e, t = (0, _.Ok)(n);
  return (0, a.jsxs)(l.Text, {
    className: R.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: [N.Z.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES, "\xa0 • \xa0", (0, _.Ye)(t)]
  })
}

function C(e) {
  let {
    channel: n,
    message: t
  } = e;
  (0, o.$)({
    [n.guild_id]: [t.author.id]
  });
  let c = (0, r.e7)([E.default], () => {
      var e;
      return null !== (e = E.default.getUser(t.author.id)) && void 0 !== e ? e : t.author
    }),
    {
      nick: m,
      colorString: g
    } = (0, h.ZP)(t),
    I = (0, r.e7)([f.Z], () => f.Z.isBlockedForMessage(t)),
    x = (0, d.B)(),
    N = s.useMemo(() => {
      let e = null != t.content && "" !== t.content ? (0, u.ZP)(t, {
          formatInline: !0,
          shouldFilterKeywords: null != x
        }).content : null,
        {
          contentPlaceholder: n,
          renderedContent: s,
          trailingIcon: r,
          leadingIcon: l
        } = (0, T.f)(t, e, I, R.messageContent, {
          trailingIconClass: R.messageContentTrailingIcon,
          leadingIconClass: R.messageContentLeadingIcon,
          iconSize: v.WW
        });
      return (0, a.jsxs)(a.Fragment, {
        children: [l, null != s ? s : (0, a.jsx)("span", {
          children: n
        }), r]
      })
    }, [t, I, x]);
  return (0, a.jsxs)(l.Text, {
    className: R.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: [(0, a.jsx)(i.Z, {
      className: R.avatar,
      user: c,
      size: l.AvatarSizes.SIZE_16
    }), (0, a.jsx)(l.NameWithRole, {
      name: m,
      color: g,
      className: R.authorName
    }), ":\xa0", N, "\xa0 • \xa0", (0, _.Ye)(Z.default.extractTimestamp(t.id))]
  })
}

function M(e) {
  var n, t, s;
  let {
    channel: d
  } = e, u = (0, r.e7)([g.ZP], () => g.ZP.lastMessageId(d.id)), h = null == u ? new Date(null !== (t = null === (n = d.threadMetadata) || void 0 === n ? void 0 : n.archiveTimestamp) && void 0 !== t ? t : Date.now()).getTime() : Z.default.extractTimestamp(u);
  (0, o.$)({
    [d.guild_id]: [d.ownerId]
  });
  let f = (0, r.e7)([E.default], () => E.default.getUser(d.ownerId)),
    T = (0, r.e7)([m.ZP], () => m.ZP.getMember(d.guild_id, d.ownerId)),
    x = null !== (s = (0, c.Z)(d)) && void 0 !== s ? s : l.ThreadIcon;
  return (0, a.jsx)(l.Text, {
    className: R.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: null == f ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: R.noAvatarIcon,
        children: (0, a.jsx)(x, {
          width: 10,
          height: 10,
          size: "custom",
          color: "currentColor"
        })
      }), N.Z.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
        time: (0, _.Ye)(h)
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(i.Z, {
        className: R.avatar,
        user: f,
        size: l.AvatarSizes.SIZE_16
      }), N.Z.Messages.THREAD_BROWSER_STARTED_BY.format({
        authorHook(e, n) {
          var t, s;
          return (0, a.jsx)(l.NameWithRole, {
            className: R.startedByName,
            color: null !== (t = null == T ? void 0 : T.colorString) && void 0 !== t ? t : void 0,
            name: null !== (s = null == T ? void 0 : T.nick) && void 0 !== s ? s : I.ZP.getName(f)
          }, n)
        }
      }), (0, a.jsx)("span", {
        className: R.bullet,
        children: "•"
      }), N.Z.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
        time: (0, _.Ye)(h)
      })]
    })
  })
}