"use strict";
n.r(t), n.d(t, {
  UnfeatureItemConfirmationModal: function() {
    return I
  },
  FeatureItemConfirmationModal: function() {
    return f
  },
  FeatureMessageConfirmationModal: function() {
    return _
  },
  FeatureForumPostConfirmationModal: function() {
    return m
  }
}), n("222007");
var s = n("37983"),
  i = n("884691"),
  a = n("866227"),
  l = n.n(a),
  r = n("611221"),
  u = n("77078"),
  d = n("599417"),
  o = n("699473"),
  c = n("713810"),
  h = n("782340"),
  E = n("43229");

function I(e) {
  let {
    featureableItem: t,
    header: n,
    body: a,
    ...l
  } = e, [r, o] = i.useState(null), [E, I] = i.useState(!1);
  return (0, s.jsxs)(u.ConfirmModal, {
    header: n,
    confirmText: h.default.Messages.GUILD_FEED_UNFEATURE_BUTTON_TEXT,
    confirmButtonColor: u.Button.Colors.RED,
    cancelText: h.default.Messages.CANCEL,
    loading: E,
    onConfirm: async () => {
      try {
        I(!0), await (0, c.unfeatureGuildFeedItem)(t), I(!1)
      } catch (e) {
        throw o(new d.default(e)), I(!1), e
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

function f(e) {
  let {
    featureableItem: t,
    expiresSeconds: n,
    header: a,
    children: r,
    options: o,
    ...I
  } = e, [f, _] = i.useState(null), [m, T] = i.useState(!1);
  return (0, s.jsxs)(u.ConfirmModal, {
    header: a,
    confirmText: h.default.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
    cancelText: h.default.Messages.CANCEL,
    confirmButtonColor: u.Button.Colors.BRAND,
    loading: m,
    onConfirm: async () => {
      try {
        let e = l().add(n, "second").toDate();
        T(!0), await (0, c.featureGuildFeedItem)(t, e, o)
      } catch (e) {
        throw _(new d.default(e)), e
      } finally {
        T(!1)
      }
    },
    ...I,
    children: [null != f && (0, s.jsx)(u.Text, {
      className: E.featureModalError,
      color: "text-danger",
      variant: "text-xs/normal",
      children: f.message
    }), r]
  })
}

function _(e) {
  let {
    message: t,
    guildId: n,
    channel: i,
    expiresSeconds: a,
    timePeriod: l,
    options: d,
    ...c
  } = e;
  return (0, s.jsxs)(f, {
    ...c,
    featureableItem: {
      guildId: n,
      entity: t,
      entityType: r.GuildFeedItemTypes.MESSAGE
    },
    header: h.default.Messages.GUILD_FEED_FEATURED_MESSAGE_MODAL_HEADER,
    expiresSeconds: a,
    options: d,
    children: [(0, s.jsx)(u.Text, {
      className: E.featureModalText,
      variant: "text-md/normal",
      children: h.default.Messages.GUILD_FEED_FEATURE_MESSAGE_MODAL_BODY.format({
        timePeriod: l
      })
    }), (0, s.jsx)("div", {
      className: E.featureModalMessage,
      children: (0, s.jsx)(o.default, {
        channel: i,
        message: t,
        disableInteraction: !0
      })
    })]
  })
}

function m(e) {
  let {
    thread: t,
    guildId: n,
    expiresSeconds: i,
    timePeriod: a,
    options: l,
    ...d
  } = e;
  return (0, s.jsx)(f, {
    ...d,
    featureableItem: {
      guildId: n,
      entity: t,
      entityType: r.GuildFeedItemTypes.FORUM_POST
    },
    header: h.default.Messages.GUILD_FEED_FEATURED_FORUM_POST_MODAL_HEADER,
    expiresSeconds: i,
    options: l,
    children: (0, s.jsx)(u.Text, {
      className: E.featureModalText,
      variant: "text-md/normal",
      children: h.default.Messages.GUILD_FEED_FEATURE_FORUM_POST_MODAL_BODY.format({
        threadName: t.name,
        timePeriod: a
      })
    })
  })
}