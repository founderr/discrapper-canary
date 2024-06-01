"use strict";
n.r(t), n.d(t, {
  FeatureForumPostConfirmationModal: function() {
    return g
  },
  FeatureItemConfirmationModal: function() {
    return p
  },
  FeatureMessageConfirmationModal: function() {
    return _
  },
  UnfeatureItemConfirmationModal: function() {
    return T
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  r = n("913527"),
  i = n.n(r),
  u = n("536402"),
  o = n("481060"),
  s = n("479531"),
  d = n("294218"),
  c = n("276438"),
  f = n("689938"),
  E = n("797589");

function T(e) {
  let {
    featureableItem: t,
    header: n,
    body: r,
    ...i
  } = e, [u, d] = l.useState(null), [E, T] = l.useState(!1);
  return (0, a.jsxs)(o.ConfirmModal, {
    header: n,
    confirmText: f.default.Messages.GUILD_FEED_UNFEATURE_BUTTON_TEXT,
    confirmButtonColor: o.Button.Colors.RED,
    cancelText: f.default.Messages.CANCEL,
    loading: E,
    onConfirm: async () => {
      try {
        T(!0), await (0, c.unfeatureGuildFeedItem)(t), T(!1)
      } catch (e) {
        throw d(new s.default(e)), T(!1), e
      }
    },
    ...i,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      children: r
    }), null != u && (0, a.jsx)(o.Text, {
      color: "text-danger",
      variant: "text-xs/normal",
      children: u.message
    })]
  })
}

function p(e) {
  let {
    featureableItem: t,
    expiresSeconds: n,
    header: r,
    children: u,
    options: d,
    ...T
  } = e, [p, _] = l.useState(null), [g, h] = l.useState(!1);
  return (0, a.jsxs)(o.ConfirmModal, {
    header: r,
    confirmText: f.default.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
    cancelText: f.default.Messages.CANCEL,
    confirmButtonColor: o.Button.Colors.BRAND,
    loading: g,
    onConfirm: async () => {
      try {
        let e = i()().add(n, "second").toDate();
        h(!0), await (0, c.featureGuildFeedItem)(t, e, d)
      } catch (e) {
        throw _(new s.default(e)), e
      } finally {
        h(!1)
      }
    },
    ...T,
    children: [null != p && (0, a.jsx)(o.Text, {
      className: E.featureModalError,
      color: "text-danger",
      variant: "text-xs/normal",
      children: p.message
    }), u]
  })
}

function _(e) {
  let {
    message: t,
    guildId: n,
    channel: l,
    expiresSeconds: r,
    timePeriod: i,
    options: s,
    ...c
  } = e;
  return (0, a.jsxs)(p, {
    ...c,
    featureableItem: {
      guildId: n,
      entity: t,
      entityType: u.GuildFeedItemTypes.MESSAGE
    },
    header: f.default.Messages.GUILD_FEED_FEATURED_MESSAGE_MODAL_HEADER,
    expiresSeconds: r,
    options: s,
    children: [(0, a.jsx)(o.Text, {
      className: E.featureModalText,
      variant: "text-md/normal",
      children: f.default.Messages.GUILD_FEED_FEATURE_MESSAGE_MODAL_BODY.format({
        timePeriod: i
      })
    }), (0, a.jsx)("div", {
      className: E.featureModalMessage,
      children: (0, a.jsx)(d.default, {
        channel: l,
        message: t,
        disableInteraction: !0
      })
    })]
  })
}

function g(e) {
  let {
    thread: t,
    guildId: n,
    expiresSeconds: l,
    timePeriod: r,
    options: i,
    ...s
  } = e;
  return (0, a.jsx)(p, {
    ...s,
    featureableItem: {
      guildId: n,
      entity: t,
      entityType: u.GuildFeedItemTypes.FORUM_POST
    },
    header: f.default.Messages.GUILD_FEED_FEATURED_FORUM_POST_MODAL_HEADER,
    expiresSeconds: l,
    options: i,
    children: (0, a.jsx)(o.Text, {
      className: E.featureModalText,
      variant: "text-md/normal",
      children: f.default.Messages.GUILD_FEED_FEATURE_FORUM_POST_MODAL_BODY.format({
        threadName: t.name,
        timePeriod: r
      })
    })
  })
}