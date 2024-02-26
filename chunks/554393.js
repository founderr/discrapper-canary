"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("281071"),
  o = n("446674"),
  u = n("77078"),
  d = n("731898"),
  c = n("612039"),
  f = n("275318"),
  h = n("762147"),
  C = n("875978"),
  p = n("359132"),
  m = n("836943"),
  E = n("92981"),
  g = n("592707"),
  S = n("350134"),
  _ = n("755624"),
  T = n("263024"),
  A = n("42203"),
  M = n("660279"),
  I = n("36694"),
  N = n("83900"),
  v = n("404008"),
  L = n("680986"),
  R = n("612278"),
  x = n("867965"),
  y = n("688169"),
  O = n("49111"),
  D = n("782340"),
  P = n("425833"),
  j = n("159441");

function b(e) {
  let {
    postId: t,
    isFirstMessage: n,
    isLastItem: l = !1,
    parentChannelId: b
  } = e, {
    ref: F,
    width: H
  } = (0, d.default)(), [U, k] = a.useState(3), [B, w] = a.useState(!n), [G, V] = (0, c.default)(!1, 2e3), W = (0, o.useStateFromStores)([A.default], () => A.default.getChannel(t), [t]), {
    firstMessage: z
  } = (0, R.useFirstForumPostMessage)(W), Z = (0, o.useStateFromStores)([_.default], () => _.default.hasJoined(t)), {
    disableReactionUpdates: Y,
    disableReactionCreates: K,
    isLurking: q,
    isGuest: X,
    isPendingMember: J
  } = (0, p.default)(W), Q = (0, y.useForumActivityExperiment)(null == W ? void 0 : W.guild_id), $ = (0, o.useStateFromStores)([A.default], () => A.default.getChannel(b)), ee = (0, L.useDefaultReactionEmoji)($), et = (0, o.useStateFromStores)([f.default], () => f.default.shouldDisplayPrompt(t) && !0 === n, [t, n]), en = a.useCallback(e => {
    let t = e[0];
    if (null != t && n) {
      let e = t.intersectionRect,
        n = t.boundingClientRect,
        s = (e.bottom - e.top) / (n.bottom - n.top);
      w(s < 1)
    }
  }, [n]);
  a.useLayoutEffect(() => {
    let e = F.current;
    if (null == e || !n) return;
    let t = new IntersectionObserver(en, {
      threshold: 1
    });
    return t.observe(e), () => {
      t.disconnect()
    }
  });
  let [es, ea] = a.useState(!0);
  if (a.useEffect(() => {
      if (null != H) k(Math.floor((H - 280) / 58)), ea(!1)
    }, [H]), null == W || null == z) return null;
  let el = z.reactions.length > 0,
    ei = () => {
      Z ? T.default.leaveThread(W, "Forum Toolbar") : T.default.joinThread(W, "Forum Toolbar")
    },
    er = () => {
      (0, x.trackForumPostLinkCopied)({
        postId: W.id,
        location: {
          section: O.AnalyticsSections.CHANNEL_HEADER
        }
      }), (0, r.copy)((0, v.getChannelLinkToCopy)(W, $)), V(!0)
    },
    eo = Z ? I.default : M.default;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)("div", {
      className: i(P.container, {
        [P.header]: B
      }),
      ref: F,
      children: [(0, s.jsxs)("div", {
        className: i(P.reactButtons, {
          [P.loading]: es
        }),
        children: [!el && !K && null != ee && (0, s.jsx)("div", {
          className: j.reactions,
          children: (0, s.jsx)(S.Reaction, {
            message: z,
            readOnly: !1,
            useChatFontScaling: !1,
            isLurking: q,
            isGuest: X,
            isPendingMember: J,
            emoji: ee,
            type: C.ReactionTypes.NORMAL,
            hideCount: !0,
            count: 0,
            me: !1,
            burst_count: 0,
            me_burst: !1
          })
        }), (0, s.jsx)(g.default, {
          message: z,
          channel: W,
          disableReactionCreates: !Q || K,
          disableReactionUpdates: Y,
          isLurking: q,
          isGuest: X,
          isPendingMember: J,
          maxReactions: U,
          className: P.reactions,
          useChatFontScaling: !1,
          isForumToolbar: !0,
          forceHideReactionCreates: !0
        }), !K && (0, s.jsx)(m.ButtonAddReaction, {
          type: C.ReactionTypes.NORMAL,
          message: z,
          channel: W,
          useChatFontScaling: !1,
          className: P.addReactButton,
          isForumToolbar: !0,
          children: !el && D.default.Messages.FORUM_REACT_TO_POST
        })]
      }), (0, s.jsxs)("div", {
        className: P.buttons,
        children: [(0, s.jsx)(u.Tooltip, {
          text: D.default.Messages.FORUM_FOLLOW_TOOLTIP,
          children: e => (0, s.jsxs)(u.Button, {
            ...e,
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.SMALL,
            onClick: ei,
            className: P.button,
            innerClassName: i(P.buttonInner, {
              [P.active]: Z
            }),
            children: [(0, s.jsx)(eo, {
              width: 16,
              height: 16
            }), Z ? D.default.Messages.FORUM_FOLLOWING_POST : D.default.Messages.FOLLOW]
          })
        }), (0, s.jsx)(u.Tooltip, {
          text: D.default.Messages.COPY_LINK,
          children: e => (0, s.jsxs)(u.Button, {
            ...e,
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.SMALL,
            onClick: er,
            className: P.button,
            innerClassName: P.buttonInner,
            children: [G ? (0, s.jsx)(I.default, {
              width: 16,
              height: 16
            }) : (0, s.jsx)(N.default, {
              width: 16,
              height: 16
            }), G ? D.default.Messages.COPIED : null]
          })
        })]
      })]
    }), et && (0, s.jsx)(h.default, {
      threadId: t
    }), (0, s.jsx)(E.default, {
      channel: W,
      isLastItem: l
    })]
  })
}