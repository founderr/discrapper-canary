"use strict";
t.r(l), t.d(l, {
  default: function() {
    return w
  }
}), t("47120");
var a = t("735250"),
  n = t("470079"),
  s = t("120356"),
  i = t.n(s),
  d = t("442837"),
  r = t("481060"),
  u = t("904245"),
  o = t("368844"),
  c = t("73315"),
  f = t("454585"),
  m = t("118139"),
  h = t("169525"),
  g = t("524444"),
  x = t("703656"),
  C = t("6025"),
  v = t("695346"),
  I = t("592125"),
  S = t("984933"),
  N = t("375954"),
  j = t("496675"),
  p = t("451478"),
  E = t("768581"),
  _ = t("526120"),
  M = t("689981"),
  b = t("825334"),
  A = t("981631"),
  T = t("689938"),
  H = t("538982"),
  R = t("946278"),
  L = t("931057");

function D(e) {
  let l, t, {
      firstMedia: n,
      channelId: s
    } = e,
    r = (0, d.useStateFromStores)([I.default], () => I.default.getChannel(s)),
    [u, o] = (0, h.useShouldObscure)({
      media: n,
      channel: r
    }),
    f = (0, h.getObscuredAlt)(o),
    x = (0, d.useStateFromStores)([p.default], () => p.default.isFocused()),
    C = (0, m.isAnimatedImageUrl)(n.src),
    S = v.GifAutoPlay.useSetting(),
    {
      src: N,
      width: j,
      height: E,
      alt: _
    } = n;
  return E > j ? t = 72 : l = 72, (0, a.jsxs)("div", {
    className: H.media,
    children: [(0, g.renderImageComponent)({
      src: N,
      maxHeight: l,
      maxWidth: t,
      width: j,
      height: E,
      alt: null != _ && u && null != f ? f : _,
      autoPlay: S,
      animated: C && !u && x,
      containerClassName: H.thumbnailContainer,
      imageClassName: i()({
        [H.obscured]: u
      })
    }), u && (0, a.jsx)(c.default, {
      obscureReason: o,
      iconClassname: H.obscuredTag
    })]
  })
}

function F(e) {
  let {
    resource: l
  } = e, t = (0, d.useStateFromStores)([I.default], () => I.default.getChannel(l.channelId)), s = (0, d.useStateFromStores)([N.default], () => N.default.getMessages(l.channelId)), c = (0, d.useStateFromStores)([j.default], () => j.default.can(A.Permissions.VIEW_CHANNEL, t)), m = s.first(), h = (0, M.default)(m), g = (0, o.useForumPostMediaProperties)(m, !1), x = (null == g ? void 0 : g.length) > 0 ? g[0] : null, v = null != t && null == s.first() && !s.loadingMore && !s.ready && !s.hasFetched && c;
  n.useEffect(() => {
    v && u.default.fetchMessages({
      channelId: l.channelId,
      after: l.channelId,
      limit: 5
    })
  }, [l.channelId, v]);
  if (null == t || null == t.guild_id) return null;
  let S = E.default.getResourceChannelIconURL({
      channelId: t.id,
      icon: l.icon
    }),
    p = null == l.description || 0 === l.description.length;
  return (0, a.jsxs)(r.Clickable, {
    className: H.row,
    onClick: e => {
      null != t && (e.shiftKey ? (0, _.selectHomeResourceChannel)(t.guild_id, t.id) : C.default.openResourceChannelAsSidebar({
        guildId: t.guild_id,
        channelId: t.id
      }))
    },
    children: [(0, a.jsxs)("div", {
      className: H.content,
      children: [(0, a.jsx)(r.Text, {
        className: H.title,
        variant: "text-md/bold",
        color: "header-primary",
        children: l.title
      }), p && null != h && (0, a.jsx)(r.Text, {
        className: H.messageContent,
        variant: "text-sm/normal",
        color: "header-secondary",
        lineClamp: 3,
        children: f.default.parse(h, !0, {
          guildId: t.guild_id,
          channelId: t.id
        })
      }), !p && (0, a.jsx)(r.Text, {
        className: i()(H.messageContent, R.markup),
        variant: "text-sm/normal",
        color: "header-secondary",
        lineClamp: 3,
        children: f.default.parse(l.description, !0, {
          guildId: t.guild_id,
          channelId: t.id
        })
      })]
    }), null != l.icon && null != S ? (0, a.jsx)("div", {
      className: H.media,
      children: (0, a.jsx)("img", {
        src: S,
        className: H.__invalid_thumbnail,
        width: 72,
        height: 72,
        alt: "",
        "aria-hidden": !0
      })
    }) : null, null == S && null != x ? (0, a.jsx)(D, {
      firstMedia: x,
      channelId: l.channelId
    }) : null]
  })
}

function w(e) {
  let {
    guild: l,
    isNewMember: t
  } = e, n = (0, b.default)(l.id);
  if (0 === n.length) return t ? null : (0, a.jsxs)("div", {
    className: H.emptyContainer,
    children: [(0, a.jsx)(r.Heading, {
      variant: "heading-xl/bold",
      color: "header-primary",
      children: T.default.Messages.MEMBER_ACTION_COMPLETE_EMPTY_STATE
    }), (0, a.jsx)("img", {
      className: H.emptyStateImage,
      src: L,
      alt: ""
    }), (0, a.jsx)(r.Button, {
      className: H.emptyStateButton,
      onClick: () => {
        let e = S.default.getDefaultChannel(l.id);
        null != e && (0, x.transitionTo)(A.Routes.CHANNEL(l.id, e.id))
      },
      fullWidth: !0,
      children: T.default.Messages.MEMBER_ACTION_COMPLETE_EMPTY_STATE_CTA
    })]
  });
  return (0, a.jsxs)("div", {
    className: H.container,
    children: [(0, a.jsx)(r.Heading, {
      variant: "heading-lg/bold",
      color: "header-primary",
      children: T.default.Messages.GUILD_HOME_RESOURCES
    }), n.map(e => (0, a.jsx)(F, {
      resource: e
    }, e.channelId))]
  })
}