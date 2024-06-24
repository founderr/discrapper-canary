n.d(t, {
  Z: function() {
    return L
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(852229),
  o = n(442837),
  c = n(481060),
  u = n(393238),
  d = n(330726),
  h = n(48929),
  m = n(333535),
  p = n(566006),
  E = n(443877),
  g = n(60174),
  f = n(216337),
  C = n(920888),
  _ = n(287151),
  I = n(569471),
  x = n(346479),
  T = n(592125),
  N = n(934415),
  Z = n(456269),
  S = n(109590),
  v = n(228392),
  A = n(981631),
  M = n(689938),
  R = n(349369),
  j = n(704963);

function L(e) {
  let {
    postId: t,
    isFirstMessage: n,
    isLastItem: s = !1,
    parentChannelId: L
  } = e, {
    ref: O,
    width: P
  } = (0, u.Z)(), [y, b] = i.useState(3), [D, U] = i.useState(!n), [k, w] = (0, d.Z)(!1, 2e3), H = (0, o.e7)([T.Z], () => T.Z.getChannel(t), [t]), {
    firstMessage: B
  } = (0, S.cl)(H), G = (0, o.e7)([I.Z], () => I.Z.hasJoined(t)), {
    disableReactionUpdates: V,
    disableReactionCreates: F,
    isLurking: z,
    isGuest: W,
    isPendingMember: Y
  } = (0, E.Z)(H), K = (0, o.e7)([T.Z], () => T.Z.getChannel(L)), q = (0, Z.Bs)(K), X = (0, o.e7)([h.Z], () => h.Z.shouldDisplayPrompt(t) && !0 === n, [t, n]), Q = i.useCallback(e => {
    let t = e[0];
    if (null != t && n) {
      let e = t.intersectionRect,
        n = t.boundingClientRect;
      U((e.bottom - e.top) / (n.bottom - n.top) < 1)
    }
  }, [n]);
  i.useLayoutEffect(() => {
    let e = O.current;
    if (null == e || !n) return;
    let t = new IntersectionObserver(Q, {
      threshold: 1
    });
    return t.observe(e), () => {
      t.disconnect()
    }
  });
  let [J, $] = i.useState(!0);
  if (i.useEffect(() => {
      if (null != P) b(Math.floor((P - 280) / 58)), $(!1)
    }, [P]), null == H || null == B) return null;
  let ee = B.reactions.length > 0,
    et = () => {
      G ? x.Z.leaveThread(H, "Forum Toolbar") : x.Z.joinThread(H, "Forum Toolbar")
    },
    en = () => {
      (0, v.B)({
        postId: H.id,
        location: {
          section: A.jXE.CHANNEL_HEADER
        }
      }), (0, r.J)((0, N.EO)(H, K)), w(!0)
    },
    el = G ? c.CheckmarkLargeIcon : c.BellIcon;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: a()(R.container, {
        [R.header]: D
      }),
      ref: O,
      children: [(0, l.jsxs)("div", {
        className: a()(R.reactButtons, {
          [R.loading]: J
        }),
        children: [!ee && !F && null != q && (0, l.jsx)("div", {
          className: j.reactions,
          children: (0, l.jsx)(_.le, {
            message: B,
            readOnly: !1,
            useChatFontScaling: !1,
            isLurking: z,
            isGuest: W,
            isPendingMember: Y,
            emoji: q,
            type: p.O.NORMAL,
            hideCount: !0,
            count: 0,
            me: !1,
            burst_count: 0,
            me_burst: !1
          })
        }), (0, l.jsx)(C.Z, {
          message: B,
          channel: H,
          disableReactionCreates: !0,
          disableReactionUpdates: V,
          isLurking: z,
          isGuest: W,
          isPendingMember: Y,
          maxReactions: y,
          className: R.reactions,
          useChatFontScaling: !1,
          isForumToolbar: !0,
          forceHideReactionCreates: !0
        }), !F && (0, l.jsx)(g.X, {
          type: p.O.NORMAL,
          message: B,
          channel: H,
          useChatFontScaling: !1,
          className: R.addReactButton,
          isForumToolbar: !0,
          children: !ee && M.Z.Messages.FORUM_REACT_TO_POST
        })]
      }), (0, l.jsxs)("div", {
        className: R.buttons,
        children: [(0, l.jsx)(c.Tooltip, {
          text: M.Z.Messages.FORUM_FOLLOW_TOOLTIP,
          children: e => (0, l.jsxs)(c.Button, {
            ...e,
            look: c.Button.Looks.BLANK,
            size: c.Button.Sizes.SMALL,
            onClick: et,
            className: R.button,
            innerClassName: a()(R.buttonInner, {
              [R.active]: G
            }),
            children: [(0, l.jsx)(el, {
              size: "xs",
              color: "currentColor"
            }), G ? M.Z.Messages.FORUM_FOLLOWING_POST : M.Z.Messages.FOLLOW]
          })
        }), (0, l.jsx)(c.Tooltip, {
          text: M.Z.Messages.COPY_LINK,
          children: e => (0, l.jsxs)(c.Button, {
            ...e,
            look: c.Button.Looks.BLANK,
            size: c.Button.Sizes.SMALL,
            onClick: en,
            className: R.button,
            innerClassName: R.buttonInner,
            children: [k ? (0, l.jsx)(c.CheckmarkLargeIcon, {
              size: "custom",
              color: "currentColor",
              width: 16,
              height: 16
            }) : (0, l.jsx)(c.LinkIcon, {
              size: "custom",
              color: "currentColor",
              width: 16,
              height: 16
            }), k ? M.Z.Messages.COPIED : null]
          })
        })]
      })]
    }), X && (0, l.jsx)(m.Z, {
      threadId: t
    }), (0, l.jsx)(f.Z, {
      channel: H,
      isLastItem: s
    })]
  })
}