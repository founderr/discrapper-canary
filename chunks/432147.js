n.d(t, {
  Z: function() {
    return S
  }
});
var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(442837),
  r = n(481060),
  o = n(239091),
  c = n(901461),
  u = n(592125),
  d = n(709054),
  E = n(723774),
  _ = n(144140),
  I = n(91159),
  T = n(576799),
  N = n(488131),
  m = n(981631),
  h = n(689938),
  C = n(541595);

function S(e) {
  let {
    message: t,
    compact: n
  } = e, i = (0, a.e7)([u.Z], () => u.Z.getChannel(d.default.castMessageIdAsChannelId(t.id)));
  return null == i ? null : (0, s.jsx)(A, {
    channel: i,
    compact: n,
    isSystemMessage: (0, c.Z)(t)
  })
}

function A(e) {
  let {
    channel: t,
    compact: i,
    isSystemMessage: c
  } = e, u = (0, a.e7)([_.Z], () => _.Z.getCount(t.id)), d = function(e) {
    var t;
    let n = (0, a.e7)([_.Z], () => _.Z.getMostRecentMessage(e.id)),
      i = (0, a.e7)([_.Z], () => _.Z.getCount(e.id)),
      l = (0, I.Ok)(e);
    return (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) ? h.Z.Messages.NO_RECENT_THREAD_MESSAGES : null == i || 0 === i ? h.Z.Messages.NO_THREAD_MESSAGES : null == n ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("span", {
        children: h.Z.Messages.NO_RECENT_THREAD_MESSAGES
      }), (0, s.jsx)("span", {
        className: C.timestamp,
        children: (0, I.Ye)(l)
      })]
    }) : (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(T.Z, {
        message: n,
        channel: e
      }), (0, s.jsx)("span", {
        className: C.timestamp,
        children: (0, I.Ye)(l)
      })]
    })
  }(t), S = null != u && u > 0;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)("div", {
      className: l()(C.spine, {
        [C.cozy]: !i,
        [C.systemMessageSpine]: c
      })
    }), (0, s.jsx)(r.Clickable, {
      onClick: function(e) {
        e.stopPropagation(), (0, N.ok)(t, e.shiftKey)
      },
      onKeyDown: function(e) {
        e.stopPropagation();
        let n = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
          s = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
        (e.which === m.yXg.SPACE || e.which === m.yXg.ENTER) && (e.preventDefault(), (n || s) && (0, N.ok)(t, s))
      },
      onContextMenu: function(e) {
        (0, o.jW)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("39285"), n.e("48800"), n.e("78650")]).then(n.bind(n, 422200));
          return n => (0, s.jsx)(e, {
            channel: t,
            ...n
          })
        })
      },
      "aria-roledescription": h.Z.Messages.THREAD_MESSAGE_ROLE_DESCRIPTION,
      className: l()(C.container, {
        [C.systemMessageContainer]: c
      }),
      children: (0, s.jsxs)(r.BlockInteractions, {
        children: [(0, s.jsxs)("div", {
          className: C.topLine,
          children: [(0, s.jsx)(r.HiddenVisually, {
            children: h.Z.Messages.THREAD
          }), (0, s.jsx)("span", {
            className: C.name,
            children: t.name
          }), (0, s.jsx)("span", {
            className: C.cta,
            "aria-hidden": !S,
            children: (0, E.WE)(u, t.id)
          })]
        }), (0, s.jsx)("span", {
          "aria-hidden": !0,
          className: l()(C.bottomLine),
          children: d
        })]
      })
    })]
  })
}