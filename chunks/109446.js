n.d(t, {
  Z: function() {
    return S
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(392711),
  r = n.n(s),
  a = n(442837),
  o = n(481060),
  u = n(99690),
  c = n(359110),
  d = n(601070),
  h = n(91159),
  p = n(488131),
  g = n(496675),
  m = n(306680),
  C = n(594174),
  E = n(768581),
  f = n(709054),
  _ = n(981631),
  I = n(124368),
  N = n(689938),
  Z = n(542326);

function S(e) {
  let {
    channel: t
  } = e, s = (0, a.Wu)([d.Z, m.ZP, g.Z], () => {
    let e = d.Z.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
    return r()(d.Z.getActiveJoinedThreadsForParent(t.guild_id, t.id)).values().map(e => e.channel).concat(r().values(d.Z.getActiveUnjoinedThreadsForParent(t.guild_id, t.id))).filter(t => !(t.id in e) && g.Z.can(_.Plq.VIEW_CHANNEL, t)).sort((e, t) => {
      let n = m.ZP.lastMessageId(e.id),
        l = m.ZP.lastMessageId(t.id);
      return f.default.compare(n, l)
    }).reverse().value()
  }), u = t.isForumLikeChannel() ? 5 : 3;
  return i.useEffect(() => {
    (0, h.q)()
  }, []), (0, l.jsxs)("div", {
    className: Z.popout,
    children: [(0, l.jsx)(o.Text, {
      className: Z.title,
      variant: "text-xs/bold",
      color: "header-secondary",
      children: t.isForumLikeChannel() ? N.Z.Messages.ACTIVE_THREADS_POPOUT_HEADER_FORUM : N.Z.Messages.ACTIVE_THREADS_POPOUT_HEADER
    }), s.slice(0, t.isForumLikeChannel() ? s.length : u).map(e => (0, l.jsx)(x, {
      thread: e
    }, e.id)).filter(e => i.isValidElement(e)).slice(0, u), (0, l.jsx)(o.Clickable, {
      className: Z.more,
      onClick: () => {
        t.isForumLikeChannel() ? (0, c.Kh)(t.id) : (0, o.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("34424")]).then(n.bind(n, 223901));
          return n => (0, l.jsx)(e, {
            channel: t,
            ...n
          })
        })
      },
      children: (0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: N.Z.Messages.ACTIVE_THREADS_POPOUT_LINK
      })
    })]
  })
}

function x(e) {
  let {
    thread: t
  } = e, n = (0, a.e7)([C.default], () => C.default.getUser(t.ownerId)), i = (0, h.Ok)(t);
  return (0, l.jsxs)(o.Clickable, {
    className: Z.row,
    onClick: e => {
      (0, p.ok)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, I.on.POPOUT)
    },
    children: [null == n ? (0, l.jsx)("img", {
      className: Z.avatar,
      src: E.ZP.getDefaultAvatarURL(void 0, void 0),
      alt: ""
    }) : (0, l.jsx)(u.Z, {
      className: Z.avatar,
      user: n,
      size: o.AvatarSizes.SIZE_16
    }), (0, l.jsx)(o.Text, {
      className: Z.name,
      variant: "text-sm/normal",
      color: "none",
      children: t.name
    }), (0, l.jsxs)(o.Text, {
      className: Z.timestamp,
      variant: "text-sm/normal",
      color: "none",
      children: [(0, l.jsx)("span", {
        className: Z.bullet,
        children: "•"
      }), (0, h.Ye)(i)]
    })]
  })
}