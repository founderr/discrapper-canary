n.d(t, {
  Z: function() {
return f;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  r = n(442837),
  l = n(481060),
  o = n(239091),
  c = n(901461),
  d = n(592125),
  u = n(709054),
  _ = n(723774),
  E = n(144140),
  I = n(91159),
  m = n(576799),
  T = n(488131),
  h = n(981631),
  N = n(689938),
  p = n(265940);

function f(e) {
  let {
message: t,
compact: n
  } = e, a = (0, r.e7)([d.Z], () => d.Z.getChannel(u.default.castMessageIdAsChannelId(t.id)));
  return null == a ? null : (0, i.jsx)(C, {
channel: a,
compact: n,
isSystemMessage: (0, c.Z)(t)
  });
}

function C(e) {
  let {
channel: t,
compact: a,
isSystemMessage: c
  } = e, d = (0, r.e7)([E.Z], () => E.Z.getCount(t.id)), u = function(e) {
var t;
let n = (0, r.e7)([E.Z], () => E.Z.getMostRecentMessage(e.id)),
  a = (0, r.e7)([E.Z], () => E.Z.getCount(e.id)),
  s = (0, I.Ok)(e);
return (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) ? N.Z.Messages.NO_RECENT_THREAD_MESSAGES : null == a || 0 === a ? N.Z.Messages.NO_THREAD_MESSAGES : null == n ? (0, i.jsxs)(i.Fragment, {
  children: [
    (0, i.jsx)('span', {
      children: N.Z.Messages.NO_RECENT_THREAD_MESSAGES
    }),
    (0, i.jsx)('span', {
      className: p.timestamp,
      children: (0, I.Ye)(s)
    })
  ]
}) : (0, i.jsxs)(i.Fragment, {
  children: [
    (0, i.jsx)(m.Z, {
      message: n,
      channel: e
    }),
    (0, i.jsx)('span', {
      className: p.timestamp,
      children: (0, I.Ye)(s)
    })
  ]
});
  }(t), f = null != d && d > 0;
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)('div', {
    className: s()(p.spine, {
      [p.cozy]: !a,
      [p.systemMessageSpine]: c
    })
  }),
  (0, i.jsx)(l.Clickable, {
    onClick: function(e) {
      e.stopPropagation(), (0, T.ok)(t, e.shiftKey);
    },
    onKeyDown: function(e) {
      e.stopPropagation();
      let n = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
        i = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
      (e.which === h.yXg.SPACE || e.which === h.yXg.ENTER) && (e.preventDefault(), (n || i) && (0, T.ok)(t, i));
    },
    onContextMenu: function(e) {
      (0, o.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([
          n.e('39285'),
          n.e('48800'),
          n.e('84248')
        ]).then(n.bind(n, 422200));
        return n => (0, i.jsx)(e, {
          channel: t,
          ...n
        });
      });
    },
    'aria-roledescription': N.Z.Messages.THREAD_MESSAGE_ROLE_DESCRIPTION,
    className: s()(p.container, {
      [p.systemMessageContainer]: c
    }),
    children: (0, i.jsxs)(l.BlockInteractions, {
      children: [
        (0, i.jsxs)('div', {
          className: p.topLine,
          children: [
            (0, i.jsx)(l.HiddenVisually, {
              children: N.Z.Messages.THREAD
            }),
            (0, i.jsx)('span', {
              className: p.name,
              children: t.name
            }),
            (0, i.jsx)('span', {
              className: p.cta,
              'aria-hidden': !f,
              children: (0, _.WE)(d, t.id)
            })
          ]
        }),
        (0, i.jsx)('span', {
          'aria-hidden': !0,
          className: s()(p.bottomLine),
          children: u
        })
      ]
    })
  })
]
  });
}