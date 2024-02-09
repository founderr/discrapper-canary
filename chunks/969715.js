"use strict";
n.r(t), n.d(t, {
  UnfeatureItemConfirmationModal: function() {
    return I
  },
  FeatureItemConfirmationModal: function() {
    return E
  },
  FeatureMessageConfirmationModal: function() {
    return m
  },
  FeatureForumPostConfirmationModal: function() {
    return _
  }
}), n("222007");
var s = n("37983"),
  i = n("884691"),
  a = n("866227"),
  r = n.n(a),
  u = n("611221"),
  l = n("77078"),
  o = n("599417"),
  d = n("699473"),
  c = n("713810"),
  h = n("782340"),
  f = n("690187");

function I(e) {
  let {
    featureableItem: t,
    header: n,
    body: a,
    ...r
  } = e, [u, d] = i.useState(null), [f, I] = i.useState(!1);
  return (0, s.jsxs)(l.ConfirmModal, {
    header: n,
    confirmText: h.default.Messages.GUILD_FEED_UNFEATURE_BUTTON_TEXT,
    confirmButtonColor: l.Button.Colors.RED,
    cancelText: h.default.Messages.CANCEL,
    loading: f,
    onConfirm: async () => {
      try {
        I(!0), await (0, c.unfeatureGuildFeedItem)(t), I(!1)
      } catch (e) {
        throw d(new o.default(e)), I(!1), e
      }
    },
    ...r,
    children: [(0, s.jsx)(l.Text, {
      variant: "text-md/normal",
      children: a
    }), null != u && (0, s.jsx)(l.Text, {
      color: "text-danger",
      variant: "text-xs/normal",
      children: u.message
    })]
  })
}

function E(e) {
  let {
    featureableItem: t,
    expiresSeconds: n,
    header: a,
    children: u,
    options: d,
    ...I
  } = e, [E, m] = i.useState(null), [_, p] = i.useState(!1);
  return (0, s.jsxs)(l.ConfirmModal, {
    header: a,
    confirmText: h.default.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
    cancelText: h.default.Messages.CANCEL,
    confirmButtonColor: l.Button.Colors.BRAND,
    loading: _,
    onConfirm: async () => {
      try {
        let e = r().add(n, "second").toDate();
        p(!0), await (0, c.featureGuildFeedItem)(t, e, d)
      } catch (e) {
        throw m(new o.default(e)), e
      } finally {
        p(!1)
      }
    },
    ...I,
    children: [null != E && (0, s.jsx)(l.Text, {
      className: f.featureModalError,
      color: "text-danger",
      variant: "text-xs/normal",
      children: E.message
    }), u]
  })
}

function m(e) {
  let {
    message: t,
    guildId: n,
    channel: i,
    expiresSeconds: a,
    timePeriod: r,
    options: o,
    ...c
  } = e;
  return (0, s.jsxs)(E, {
    ...c,
    featureableItem: {
      guildId: n,
      entity: t,
      entityType: u.GuildFeedItemTypes.MESSAGE
    },
    header: h.default.Messages.GUILD_FEED_FEATURED_MESSAGE_MODAL_HEADER,
    expiresSeconds: a,
    options: o,
    children: [(0, s.jsx)(l.Text, {
      className: f.featureModalText,
      variant: "text-md/normal",
      children: h.default.Messages.GUILD_FEED_FEATURE_MESSAGE_MODAL_BODY.format({
        timePeriod: r
      })
    }), (0, s.jsx)("div", {
      className: f.featureModalMessage,
      children: (0, s.jsx)(d.default, {
        channel: i,
        message: t,
        disableInteraction: !0
      })
    })]
  })
}

function _(e) {
  let {
    thread: t,
    guildId: n,
    expiresSeconds: i,
    timePeriod: a,
    options: r,
    ...o
  } = e;
  return (0, s.jsx)(E, {
    ...o,
    featureableItem: {
      guildId: n,
      entity: t,
      entityType: u.GuildFeedItemTypes.FORUM_POST
    },
    header: h.default.Messages.GUILD_FEED_FEATURED_FORUM_POST_MODAL_HEADER,
    expiresSeconds: i,
    options: r,
    children: (0, s.jsx)(l.Text, {
      className: f.featureModalText,
      variant: "text-md/normal",
      children: h.default.Messages.GUILD_FEED_FEATURE_FORUM_POST_MODAL_BODY.format({
        threadName: t.name,
        timePeriod: a
      })
    })
  })
}