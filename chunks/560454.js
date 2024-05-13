"use strict";
n.r(t), n.d(t, {
  FeatureForumPostConfirmationModal: function() {
    return p
  },
  FeatureItemConfirmationModal: function() {
    return _
  },
  FeatureMessageConfirmationModal: function() {
    return g
  },
  UnfeatureItemConfirmationModal: function() {
    return T
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  i = n("913527"),
  u = n.n(i),
  r = n("536402"),
  s = n("481060"),
  o = n("479531"),
  d = n("294218"),
  c = n("276438"),
  f = n("689938"),
  E = n("797589");

function T(e) {
  let {
    featureableItem: t,
    header: n,
    body: i,
    ...u
  } = e, [r, d] = l.useState(null), [E, T] = l.useState(!1);
  return (0, a.jsxs)(s.ConfirmModal, {
    header: n,
    confirmText: f.default.Messages.GUILD_FEED_UNFEATURE_BUTTON_TEXT,
    confirmButtonColor: s.Button.Colors.RED,
    cancelText: f.default.Messages.CANCEL,
    loading: E,
    onConfirm: async () => {
      try {
        T(!0), await (0, c.unfeatureGuildFeedItem)(t), T(!1)
      } catch (e) {
        throw d(new o.default(e)), T(!1), e
      }
    },
    ...u,
    children: [(0, a.jsx)(s.Text, {
      variant: "text-md/normal",
      children: i
    }), null != r && (0, a.jsx)(s.Text, {
      color: "text-danger",
      variant: "text-xs/normal",
      children: r.message
    })]
  })
}

function _(e) {
  let {
    featureableItem: t,
    expiresSeconds: n,
    header: i,
    children: r,
    options: d,
    ...T
  } = e, [_, g] = l.useState(null), [p, h] = l.useState(!1);
  return (0, a.jsxs)(s.ConfirmModal, {
    header: i,
    confirmText: f.default.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
    cancelText: f.default.Messages.CANCEL,
    confirmButtonColor: s.Button.Colors.BRAND,
    loading: p,
    onConfirm: async () => {
      try {
        let e = u()().add(n, "second").toDate();
        h(!0), await (0, c.featureGuildFeedItem)(t, e, d)
      } catch (e) {
        throw g(new o.default(e)), e
      } finally {
        h(!1)
      }
    },
    ...T,
    children: [null != _ && (0, a.jsx)(s.Text, {
      className: E.featureModalError,
      color: "text-danger",
      variant: "text-xs/normal",
      children: _.message
    }), r]
  })
}

function g(e) {
  let {
    message: t,
    guildId: n,
    channel: l,
    expiresSeconds: i,
    timePeriod: u,
    options: o,
    ...c
  } = e;
  return (0, a.jsxs)(_, {
    ...c,
    featureableItem: {
      guildId: n,
      entity: t,
      entityType: r.GuildFeedItemTypes.MESSAGE
    },
    header: f.default.Messages.GUILD_FEED_FEATURED_MESSAGE_MODAL_HEADER,
    expiresSeconds: i,
    options: o,
    children: [(0, a.jsx)(s.Text, {
      className: E.featureModalText,
      variant: "text-md/normal",
      children: f.default.Messages.GUILD_FEED_FEATURE_MESSAGE_MODAL_BODY.format({
        timePeriod: u
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

function p(e) {
  let {
    thread: t,
    guildId: n,
    expiresSeconds: l,
    timePeriod: i,
    options: u,
    ...o
  } = e;
  return (0, a.jsx)(_, {
    ...o,
    featureableItem: {
      guildId: n,
      entity: t,
      entityType: r.GuildFeedItemTypes.FORUM_POST
    },
    header: f.default.Messages.GUILD_FEED_FEATURED_FORUM_POST_MODAL_HEADER,
    expiresSeconds: l,
    options: u,
    children: (0, a.jsx)(s.Text, {
      className: E.featureModalText,
      variant: "text-md/normal",
      children: f.default.Messages.GUILD_FEED_FEATURE_FORUM_POST_MODAL_BODY.format({
        threadName: t.name,
        timePeriod: i
      })
    })
  })
}