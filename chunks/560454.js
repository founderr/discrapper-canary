"use strict";
n.r(t), n.d(t, {
  FeatureForumPostConfirmationModal: function() {
    return p
  },
  FeatureItemConfirmationModal: function() {
    return T
  },
  FeatureMessageConfirmationModal: function() {
    return _
  },
  UnfeatureItemConfirmationModal: function() {
    return g
  }
}), n("47120");
var a = n("735250"),
  i = n("470079"),
  r = n("913527"),
  u = n.n(r),
  l = n("536402"),
  o = n("481060"),
  s = n("479531"),
  d = n("294218"),
  c = n("276438"),
  f = n("689938"),
  E = n("158982");

function g(e) {
  let {
    featureableItem: t,
    header: n,
    body: r,
    ...u
  } = e, [l, d] = i.useState(null), [E, g] = i.useState(!1);
  return (0, a.jsxs)(o.ConfirmModal, {
    header: n,
    confirmText: f.default.Messages.GUILD_FEED_UNFEATURE_BUTTON_TEXT,
    confirmButtonColor: o.Button.Colors.RED,
    cancelText: f.default.Messages.CANCEL,
    loading: E,
    onConfirm: async () => {
      try {
        g(!0), await (0, c.unfeatureGuildFeedItem)(t), g(!1)
      } catch (e) {
        throw d(new s.default(e)), g(!1), e
      }
    },
    ...u,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      children: r
    }), null != l && (0, a.jsx)(o.Text, {
      color: "text-danger",
      variant: "text-xs/normal",
      children: l.message
    })]
  })
}

function T(e) {
  let {
    featureableItem: t,
    expiresSeconds: n,
    header: r,
    children: l,
    options: d,
    ...g
  } = e, [T, _] = i.useState(null), [p, S] = i.useState(!1);
  return (0, a.jsxs)(o.ConfirmModal, {
    header: r,
    confirmText: f.default.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
    cancelText: f.default.Messages.CANCEL,
    confirmButtonColor: o.Button.Colors.BRAND,
    loading: p,
    onConfirm: async () => {
      try {
        let e = u()().add(n, "second").toDate();
        S(!0), await (0, c.featureGuildFeedItem)(t, e, d)
      } catch (e) {
        throw _(new s.default(e)), e
      } finally {
        S(!1)
      }
    },
    ...g,
    children: [null != T && (0, a.jsx)(o.Text, {
      className: E.featureModalError,
      color: "text-danger",
      variant: "text-xs/normal",
      children: T.message
    }), l]
  })
}

function _(e) {
  let {
    message: t,
    guildId: n,
    channel: i,
    expiresSeconds: r,
    timePeriod: u,
    options: s,
    ...c
  } = e;
  return (0, a.jsxs)(T, {
    ...c,
    featureableItem: {
      guildId: n,
      entity: t,
      entityType: l.GuildFeedItemTypes.MESSAGE
    },
    header: f.default.Messages.GUILD_FEED_FEATURED_MESSAGE_MODAL_HEADER,
    expiresSeconds: r,
    options: s,
    children: [(0, a.jsx)(o.Text, {
      className: E.featureModalText,
      variant: "text-md/normal",
      children: f.default.Messages.GUILD_FEED_FEATURE_MESSAGE_MODAL_BODY.format({
        timePeriod: u
      })
    }), (0, a.jsx)("div", {
      className: E.featureModalMessage,
      children: (0, a.jsx)(d.default, {
        channel: i,
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
    expiresSeconds: i,
    timePeriod: r,
    options: u,
    ...s
  } = e;
  return (0, a.jsx)(T, {
    ...s,
    featureableItem: {
      guildId: n,
      entity: t,
      entityType: l.GuildFeedItemTypes.FORUM_POST
    },
    header: f.default.Messages.GUILD_FEED_FEATURED_FORUM_POST_MODAL_HEADER,
    expiresSeconds: i,
    options: u,
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