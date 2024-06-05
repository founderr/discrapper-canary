"use strict";
n.r(t), n.d(t, {
  FeatureForumPostConfirmationModal: function() {
    return x
  },
  FeatureItemConfirmationModal: function() {
    return p
  },
  FeatureMessageConfirmationModal: function() {
    return g
  },
  UnfeatureItemConfirmationModal: function() {
    return h
  }
}), n("47120");
var a = n("735250"),
  r = n("470079"),
  l = n("913527"),
  o = n.n(l),
  u = n("536402"),
  i = n("481060"),
  s = n("479531"),
  d = n("294218"),
  c = n("276438"),
  f = n("689938"),
  m = n("797589");

function h(e) {
  let {
    featureableItem: t,
    header: n,
    body: l,
    ...o
  } = e, [u, d] = r.useState(null), [m, h] = r.useState(!1);
  return (0, a.jsxs)(i.ConfirmModal, {
    header: n,
    confirmText: f.default.Messages.GUILD_FEED_UNFEATURE_BUTTON_TEXT,
    confirmButtonColor: i.Button.Colors.RED,
    cancelText: f.default.Messages.CANCEL,
    loading: m,
    onConfirm: async () => {
      try {
        h(!0), await (0, c.unfeatureGuildFeedItem)(t), h(!1)
      } catch (e) {
        throw d(new s.default(e)), h(!1), e
      }
    },
    ...o,
    children: [(0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      children: l
    }), null != u && (0, a.jsx)(i.Text, {
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
    header: l,
    children: u,
    options: d,
    ...h
  } = e, [p, g] = r.useState(null), [x, E] = r.useState(!1);
  return (0, a.jsxs)(i.ConfirmModal, {
    header: l,
    confirmText: f.default.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
    cancelText: f.default.Messages.CANCEL,
    confirmButtonColor: i.Button.Colors.BRAND,
    loading: x,
    onConfirm: async () => {
      try {
        let e = o()().add(n, "second").toDate();
        E(!0), await (0, c.featureGuildFeedItem)(t, e, d)
      } catch (e) {
        throw g(new s.default(e)), e
      } finally {
        E(!1)
      }
    },
    ...h,
    children: [null != p && (0, a.jsx)(i.Text, {
      className: m.featureModalError,
      color: "text-danger",
      variant: "text-xs/normal",
      children: p.message
    }), u]
  })
}

function g(e) {
  let {
    message: t,
    guildId: n,
    channel: r,
    expiresSeconds: l,
    timePeriod: o,
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
    expiresSeconds: l,
    options: s,
    children: [(0, a.jsx)(i.Text, {
      className: m.featureModalText,
      variant: "text-md/normal",
      children: f.default.Messages.GUILD_FEED_FEATURE_MESSAGE_MODAL_BODY.format({
        timePeriod: o
      })
    }), (0, a.jsx)("div", {
      className: m.featureModalMessage,
      children: (0, a.jsx)(d.default, {
        channel: r,
        message: t,
        disableInteraction: !0
      })
    })]
  })
}

function x(e) {
  let {
    thread: t,
    guildId: n,
    expiresSeconds: r,
    timePeriod: l,
    options: o,
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
    expiresSeconds: r,
    options: o,
    children: (0, a.jsx)(i.Text, {
      className: m.featureModalText,
      variant: "text-md/normal",
      children: f.default.Messages.GUILD_FEED_FEATURE_FORUM_POST_MODAL_BODY.format({
        threadName: t.name,
        timePeriod: l
      })
    })
  })
}