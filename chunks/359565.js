n.d(t, {
  q: function() {
    return g
  },
  s: function() {
    return E
  }
});
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(481060),
  o = n(367907),
  c = n(626135),
  u = n(346479),
  d = n(665906),
  h = n(981631),
  m = n(689938),
  p = n(127747);

function E(e) {
  let {
    channel: t,
    narrow: n
  } = e, s = (0, d.tc)(t);
  return i.useEffect(() => {
    c.default.track(h.rMx.CHANNEL_BANNER_VIEWED, {
      ...(0, o.hH)(t.getGuildId()),
      ...(0, o.v_)(t),
      banner_type: "thread"
    })
  }, [t]), (0, l.jsxs)("div", {
    className: a()(p.chatHeaderBar, {
      [p.narrow]: n
    }),
    children: [(0, l.jsx)(r.Text, {
      className: p.chatHeaderBarText,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: t.isForumPost() ? m.Z.Messages.FORUM_POST_HEADER_NOTICE_LOCKED : m.Z.Messages.THREAD_HEADER_NOTICE_LOCKED
    }), s ? (0, l.jsx)(r.Button, {
      size: n ? r.Button.Sizes.SMALL : r.Button.Sizes.TINY,
      className: p.chatHeaderBarButton,
      color: r.Button.Colors.PRIMARY,
      onClick: () => {
        c.default.track(h.rMx.CHANNEL_BANNER_CTA_CLICKED, {
          ...(0, o.hH)(t.getGuildId()),
          ...(0, o.v_)(t),
          banner_type: "thread",
          cta_type: "unarchive"
        }), u.Z.unarchiveThread(t, !1)
      },
      children: m.Z.Messages.UNARCHIVE
    }) : null]
  })
}

function g(e) {
  let {
    channel: t,
    narrow: n
  } = e, s = (0, d.Xb)(t);
  return i.useEffect(() => {
    c.default.track(h.rMx.CHANNEL_BANNER_VIEWED, {
      ...(0, o.hH)(t.getGuildId()),
      ...(0, o.v_)(t),
      banner_type: "thread"
    })
  }, [t]), (0, l.jsxs)("div", {
    className: a()(p.chatHeaderBar, {
      [p.narrow]: n
    }),
    children: [(0, l.jsx)(r.Text, {
      className: p.chatHeaderBarText,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: t.isForumPost() ? m.Z.Messages.FORUM_POST_HEADER_NOTICE_ACTIVE_LOCKED : m.Z.Messages.THREAD_HEADER_NOTICE_ACTIVE_LOCKED
    }), s ? (0, l.jsx)(r.Button, {
      size: n ? r.Button.Sizes.SMALL : r.Button.Sizes.TINY,
      className: p.chatHeaderBarButton,
      color: r.Button.Colors.PRIMARY,
      onClick: () => {
        c.default.track(h.rMx.CHANNEL_BANNER_CTA_CLICKED, {
          ...(0, o.hH)(t.getGuildId()),
          ...(0, o.v_)(t),
          banner_type: "thread",
          cta_type: "unlock"
        }), u.Z.unlockThread(t)
      },
      children: m.Z.Messages.UNLOCK
    }) : null]
  })
}