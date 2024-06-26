n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(442837),
  o = n(663002),
  c = n(481060),
  d = n(230711),
  u = n(210887),
  _ = n(617136),
  E = n(272008),
  h = n(113434),
  I = n(569984),
  m = n(497505),
  p = n(918701),
  g = n(566078),
  T = n(602667),
  C = n(611855),
  S = n(670638),
  f = n(667105),
  N = n(860151),
  A = n(46140),
  Z = n(981631),
  L = n(689938),
  v = n(199519);

function O(e) {
  var t;
  let {
    quest: n
  } = e, s = (0, h.B6)(n.config.expiresAt), a = (0, h.B6)(g.r.build(n.config).rewardsExpireAt), r = (0, l.e7)([u.Z], () => u.Z.getState().theme), d = (0, o.w)(r) ? Z.BRd.DARK : Z.BRd.LIGHT, _ = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
  return (0, i.jsxs)("div", {
    className: v.heading,
    children: [(0, i.jsx)("img", {
      className: v.headingGameTile,
      alt: "",
      src: (0, p.uo)(n, d)
    }), (0, i.jsxs)("div", {
      className: v.headingCopy,
      children: [(0, i.jsx)(c.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: _ ? L.Z.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE_ACTIVITY_PANEL : L.Z.Messages.QUESTS_TITLE.format({
          questName: n.config.messages.questName
        })
      }), (0, i.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: _ ? L.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
          expirationDate: a
        }) : L.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
          expirationDate: s
        })
      })]
    })]
  })
}
t.Z = function(e) {
  var t, n, a;
  let {
    quest: o
  } = e, u = (0, l.e7)([I.Z], () => I.Z.isEnrolling(o.id), [o]), [g, R] = s.useState(!1), x = s.useCallback(() => R(!0), []), P = s.useCallback(() => R(!1), []), b = s.useCallback(e => {
    e.stopPropagation()
  }, []), M = s.useCallback(() => {
    (0, E.AH)(o.id, {
      questContent: m.jn.ACTIVITY_PANEL,
      questContentCTA: _.jZ.ACCEPT_QUEST
    })
  }, [o]), D = s.useCallback(() => {
    null != o && ((0, _._3)({
      questId: o.id,
      questContent: m.jn.ACTIVITY_PANEL,
      questContentCTA: _.jZ.TRACK_PROGRESS
    }), d.Z.open(Z.oAB.INVENTORY))
  }, [o]), y = s.useCallback(() => {
    (0, _._3)({
      questId: o.id,
      questContent: m.jn.ACTIVITY_PANEL,
      questContentCTA: _.jZ.LEARN_MORE
    }), d.Z.open(Z.oAB.INVENTORY)
  }, [o]), j = (0, f.hf)({
    quest: o,
    location: m.jn.ACTIVITY_PANEL
  }), U = (0, h.tP)(o), G = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, w = (null === (n = o.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, k = (null === (a = o.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null;
  return (null == o ? void 0 : o.userStatus) == null || (0, p.zE)(o.userStatus, m.jn.ACTIVITY_PANEL) || U || k || !(0, p.dl)(o) ? null : (0, i.jsx)(T.A, {
    questOrQuests: o,
    questContent: m.jn.ACTIVITY_PANEL,
    children: e => {
      var t;
      return (0, i.jsxs)("div", {
        ref: t => {
          e.current = t
        },
        className: r()(v.wrapper, {
          [v.wrapperQuestAccepted]: G
        }),
        onClick: b,
        onKeyPress: b,
        onFocus: x,
        onMouseEnter: x,
        onBlur: P,
        onMouseLeave: P,
        children: [(0, i.jsxs)("div", {
          className: v.utils,
          children: [G ? (0, i.jsx)(O, {
            quest: o
          }) : (0, i.jsx)(C.Z, {
            textOpacity: .5
          }), (0, i.jsx)(S.r, {
            quest: o,
            questContent: m.jn.ACTIVITY_PANEL,
            shouldShowDisclosure: (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null,
            showShareLink: !0,
            children: e => (0, i.jsx)(c.Clickable, {
              ...e,
              "aria-label": L.Z.Messages.ACTIONS,
              children: (0, i.jsx)(c.MoreHorizontalIcon, {
                size: "md",
                color: "currentColor",
                className: v.submenuIcon
              })
            })
          })]
        }), !G && (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(O, {
            quest: o
          }), (0, i.jsx)(c.Text, {
            className: v.instructions,
            variant: "text-sm/normal",
            color: "text-normal",
            children: (0, p.pG)({
              quest: o,
              location: A.dr.ACTIVITY_PANEL
            })
          })]
        }), G && !w && (0, i.jsx)(N.Z, {
          autoplay: g,
          className: v.rewardTileWithInstructions,
          quest: o,
          questContent: m.jn.ACTIVITY_PANEL,
          questExperimentLocation: A.dr.ACTIVITY_PANEL
        }), (0, i.jsxs)("div", {
          className: v.ctas,
          children: [!G && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(c.Button, {
              className: v.cta,
              color: c.Button.Colors.PRIMARY,
              fullWidth: !0,
              size: c.Button.Sizes.SMALL,
              onClick: y,
              children: L.Z.Messages.QUESTS_LEARN_MORE_V2
            }), (0, i.jsx)(c.Button, {
              className: v.cta,
              color: c.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: M,
              size: c.Button.Sizes.SMALL,
              submitting: u,
              children: L.Z.Messages.QUESTS_ACCEPT_QUEST
            })]
          }), G && !w && (0, i.jsx)(c.Button, {
            className: v.cta,
            color: c.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: D,
            size: c.Button.Sizes.SMALL,
            children: L.Z.Messages.QUESTS_CHECK_PROGRESS
          }), w && (0, i.jsx)(c.Button, {
            className: v.cta,
            color: c.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: j,
            size: c.Button.Sizes.SMALL,
            children: L.Z.Messages.QUESTS_CLAIM_REWARD
          })]
        })]
      })
    }
  })
}