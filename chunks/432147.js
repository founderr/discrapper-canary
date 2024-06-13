"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var s = n("735250");
n("470079");
var a = n("120356"),
  l = n.n(a),
  i = n("442837"),
  r = n("481060"),
  o = n("239091"),
  u = n("901461"),
  d = n("592125"),
  c = n("709054"),
  f = n("723774"),
  E = n("144140"),
  _ = n("91159"),
  T = n("576799"),
  m = n("488131"),
  I = n("981631"),
  N = n("689938"),
  p = n("54771");

function h(e) {
  let {
    message: t,
    compact: n
  } = e, a = (0, i.useStateFromStores)([d.default], () => d.default.getChannel(c.default.castMessageIdAsChannelId(t.id)));
  return null == a ? null : (0, s.jsx)(S, {
    channel: a,
    compact: n,
    isSystemMessage: (0, u.default)(t)
  })
}

function S(e) {
  let {
    channel: t,
    compact: a,
    isSystemMessage: u
  } = e, d = (0, i.useStateFromStores)([E.default], () => E.default.getCount(t.id)), c = function(e) {
    var t;
    let n = (0, i.useStateFromStores)([E.default], () => E.default.getMostRecentMessage(e.id)),
      a = (0, i.useStateFromStores)([E.default], () => E.default.getCount(e.id)),
      l = (0, _.useLastMessageTimestamp)(e);
    return (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) ? N.default.Messages.NO_RECENT_THREAD_MESSAGES : null == a || 0 === a ? N.default.Messages.NO_THREAD_MESSAGES : null == n ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("span", {
        children: N.default.Messages.NO_RECENT_THREAD_MESSAGES
      }), (0, s.jsx)("span", {
        className: p.timestamp,
        children: (0, _.getTimestampString)(l)
      })]
    }) : (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(T.default, {
        message: n,
        channel: e
      }), (0, s.jsx)("span", {
        className: p.timestamp,
        children: (0, _.getTimestampString)(l)
      })]
    })
  }(t), h = null != d && d > 0;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)("div", {
      className: l()(p.spine, {
        [p.cozy]: !a,
        [p.systemMessageSpine]: u
      })
    }), (0, s.jsx)(r.Clickable, {
      onClick: function(e) {
        e.stopPropagation(), (0, m.openThreadSidebarForViewing)(t, e.shiftKey)
      },
      onKeyDown: function(e) {
        e.stopPropagation();
        let n = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
          s = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
        (e.which === I.KeyboardKeys.SPACE || e.which === I.KeyboardKeys.ENTER) && (e.preventDefault(), (n || s) && (0, m.openThreadSidebarForViewing)(t, s))
      },
      onContextMenu: function(e) {
        (0, o.openContextMenuLazy)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("39285"), n.e("48800"), n.e("40157")]).then(n.bind(n, "422200"));
          return n => (0, s.jsx)(e, {
            channel: t,
            ...n
          })
        })
      },
      "aria-roledescription": N.default.Messages.THREAD_MESSAGE_ROLE_DESCRIPTION,
      className: l()(p.container, {
        [p.systemMessageContainer]: u
      }),
      children: (0, s.jsxs)(r.BlockInteractions, {
        children: [(0, s.jsxs)("div", {
          className: p.topLine,
          children: [(0, s.jsx)(r.HiddenVisually, {
            children: N.default.Messages.THREAD
          }), (0, s.jsx)("span", {
            className: p.name,
            children: t.name
          }), (0, s.jsx)("span", {
            className: p.cta,
            "aria-hidden": !h,
            children: (0, f.formatMessageCountLabel)(d, t.id)
          })]
        }), (0, s.jsx)("span", {
          "aria-hidden": !0,
          className: l()(p.bottomLine),
          children: c
        })]
      })
    })]
  })
}