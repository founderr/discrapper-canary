"use strict";
n.r(t), n.d(t, {
  UnfeatureItemConfirmationModal: function() {
    return E
  },
  FeatureItemConfirmationModal: function() {
    return I
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
  l = n.n(a),
  r = n("611221"),
  u = n("77078"),
  o = n("599417"),
  d = n("699473"),
  c = n("713810"),
  h = n("782340"),
  f = n("690187");

function E(e) {
  let {
    featureableItem: t,
    header: n,
    body: a,
    ...l
  } = e, [r, d] = i.useState(null), [f, E] = i.useState(!1);
  return (0, s.jsxs)(u.ConfirmModal, {
    header: n,
    confirmText: h.default.Messages.GUILD_FEED_UNFEATURE_BUTTON_TEXT,
    confirmButtonColor: u.Button.Colors.RED,
    cancelText: h.default.Messages.CANCEL,
    loading: f,
    onConfirm: async () => {
      try {
        E(!0), await (0, c.unfeatureGuildFeedItem)(t), E(!1)
      } catch (e) {
        throw d(new o.default(e)), E(!1), e
      }
    },
    ...l,
    children: [(0, s.jsx)(u.Text, {
      variant: "text-md/normal",
      children: a
    }), null != r && (0, s.jsx)(u.Text, {
      color: "text-danger",
      variant: "text-xs/normal",
      children: r.message
    })]
  })
}

function I(e) {
  let {
    featureableItem: t,
    expiresSeconds: n,
    header: a,
    children: r,
    options: d,
    ...E
  } = e, [I, m] = i.useState(null), [_, p] = i.useState(!1);
  return (0, s.jsxs)(u.ConfirmModal, {
    header: a,
    confirmText: h.default.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
    cancelText: h.default.Messages.CANCEL,
    confirmButtonColor: u.Button.Colors.BRAND,
    loading: _,
    onConfirm: async () => {
      try {
        let e = l().add(n, "second").toDate();
        p(!0), await (0, c.featureGuildFeedItem)(t, e, d)
      } catch (e) {
        throw m(new o.default(e)), e
      } finally {
        p(!1)
      }
    },
    ...E,
    children: [null != I && (0, s.jsx)(u.Text, {
      className: f.featureModalError,
      color: "text-danger",
      variant: "text-xs/normal",
      children: I.message
    }), r]
  })
}

function m(e) {
  let {
    message: t,
    guildId: n,
    channel: i,
    expiresSeconds: a,
    timePeriod: l,
    options: o,
    ...c
  } = e;
  return (0, s.jsxs)(I, {
    ...c,
    featureableItem: {
      guildId: n,
      entity: t,
      entityType: r.GuildFeedItemTypes.MESSAGE
    },
    header: h.default.Messages.GUILD_FEED_FEATURED_MESSAGE_MODAL_HEADER,
    expiresSeconds: a,
    options: o,
    children: [(0, s.jsx)(u.Text, {
      className: f.featureModalText,
      variant: "text-md/normal",
      children: h.default.Messages.GUILD_FEED_FEATURE_MESSAGE_MODAL_BODY.format({
        timePeriod: l
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
    options: l,
    ...o
  } = e;
  return (0, s.jsx)(I, {
    ...o,
    featureableItem: {
      guildId: n,
      entity: t,
      entityType: r.GuildFeedItemTypes.FORUM_POST
    },
    header: h.default.Messages.GUILD_FEED_FEATURED_FORUM_POST_MODAL_HEADER,
    expiresSeconds: i,
    options: l,
    children: (0, s.jsx)(u.Text, {
      className: f.featureModalText,
      variant: "text-md/normal",
      children: h.default.Messages.GUILD_FEED_FEATURE_FORUM_POST_MODAL_BODY.format({
        threadName: t.name,
        timePeriod: a
      })
    })
  })
}