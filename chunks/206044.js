n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(920906),
  o = n(722770),
  c = n(442837),
  u = n(846519),
  d = n(481060),
  E = n(393238),
  _ = n(607070),
  I = n(210887),
  T = n(810090),
  m = n(572004),
  N = n(617136),
  h = n(113434),
  C = n(497505),
  S = n(918701),
  A = n(566078),
  g = n(685613),
  p = n(611855),
  f = n(644646),
  R = n(670638),
  O = n(87894),
  M = n(46140),
  x = n(689938),
  v = n(491829);
let L = (0, r.animated)(d.ChevronSmallDownIcon),
  Z = (0, r.animated)(T.Z),
  P = e => {
    let {
      quest: t,
      location: n,
      questContentPosition: l,
      ...a
    } = e, [r, o] = i.useState(!1), c = i.useRef(new u.V7);
    i.useEffect(() => {
      let e = c.current;
      return function() {
        e.stop()
      }
    }, []);
    let E = () => {
      (0, N._3)({
        questId: t.id,
        questContent: n,
        questContentCTA: N.jZ.COPY_QUEST_URL,
        questContentPosition: l
      }), (0, m.JG)((0, S.Rs)(t.id)), o(!0), c.current.start(1e3, () => o(!1))
    };
    return (0, s.jsx)(d.Tooltip, {
      forceOpen: r,
      shouldShow: r,
      color: d.Tooltip.Colors.GREEN,
      text: x.Z.Messages.COPY_SUCCESS_1,
      children: () => (0, s.jsx)(d.Button, {
        ...a,
        className: v.shareButton,
        color: d.Button.Colors.PRIMARY,
        size: d.Button.Sizes.SMALL,
        onClick: E,
        children: x.Z.Messages.QUESTS_SHARE_QUEST
      })
    })
  };
t.Z = e => {
  var t;
  let {
    isFocused: n,
    isQuestExpired: l,
    quest: u,
    location: T,
    size: m,
    expansionSpring: D,
    isAnimating: j,
    isExpanded: U,
    isInConcurrentQuestExperiment: b,
    contentPosition: y,
    toggleExpanded: B
  } = e, {
    ref: k,
    height: G
  } = (0, E.Z)(), {
    ref: F,
    width: V,
    scrollWidth: w
  } = (0, E.Z)(), H = (0, c.e7)([I.Z], () => I.Z.getState().theme), Y = (0, c.e7)([_.Z], () => _.Z.useReducedMotion), W = i.useMemo(() => (0, S.nP)(u.config.assets.hero), [u]), K = i.useRef(null), z = (0, O.uq)(T), Q = T === C.jn.QUESTS_EMBED, X = (0, h.t5)(u, M.dr.QUESTS_CARD), q = (null === (t = u.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, J = (0, h.B6)(u.config.expiresAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), $ = (0, h.B6)(A.r.build(u.config).rewardsExpireAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), ee = e => {
    e.stopPropagation(), e.currentTarget.blur(), B(), (0, N._3)({
      questId: u.id,
      questContent: T,
      questContentCTA: U ? N.jZ.COLLAPSE : N.jZ.EXPAND,
      questContentPosition: y
    })
  };
  i.useEffect(() => {
    W && null != K.current && (n ? K.current.play() : !n && (K.current.pause(), K.current.currentTime = 0))
  }, [n, W]);
  let et = (0, S.j8)(u);
  return (0, s.jsxs)("div", {
    className: a()(v.outerContainer, {
      [v.outerContainerGiftInventory]: z,
      [v.outerContainerEmbed]: Q,
      [v.outerContainerXs]: "xs" === m
    }),
    "aria-label": x.Z.Messages.EXPAND,
    style: {
      height: z ? G : void 0
    },
    children: [(0, s.jsx)(Z, {
      style: {
        opacity: D.to({
          range: [0, 1],
          output: [.25, 1]
        })
      },
      autoPlay: !1,
      loop: !1,
      muted: !0,
      playsInline: !0,
      className: v.questSplash,
      controls: !1,
      poster: et,
      ref: K,
      children: !Y && W && (0, s.jsx)("source", {
        src: et,
        type: (0, S.mN)(et)
      })
    }), (0, s.jsxs)("div", {
      className: v.header,
      "aria-expanded": U,
      children: [(0, s.jsxs)(r.animated.div, {
        className: a()(v.headerContent, {
          [v.headerContentEmbed]: Q
        }),
        style: {
          y: z ? D.to({
            range: [0, 1],
            output: [O.DJ, 0]
          }) : void 0
        },
        children: [z && (0, s.jsx)(r.animated.div, {
          className: v.headerCollapsedContent,
          style: {
            opacity: D.to({
              range: [0, 1],
              output: [1, 0]
            }),
            visibility: j || !U ? "visible" : "hidden"
          },
          "aria-hidden": !j && U,
          children: (0, s.jsxs)(d.ClickableContainer, {
            "aria-label": x.Z.Messages.EXPAND,
            onClick: ee,
            className: v.headerCollapsedClickableContainer,
            children: [(0, s.jsx)("div", {
              className: v.headerCollapsedContentRewardWrapper,
              children: (0, s.jsx)(f.Z, {
                quest: u,
                questContent: T,
                className: v.headerCollapsedRewardTile
              })
            }), (0, s.jsxs)("div", {
              className: v.headerCollapsedContentCopyWrapper,
              children: [(0, s.jsxs)("div", {
                className: v.headerCollapsedContentCopyLogos,
                children: [(0, s.jsx)(g.Z, {
                  className: v.partnerBranding,
                  gameTileSize: g.f.MEDIUM,
                  quest: u,
                  theme: H
                }), (0, s.jsx)(p.Z, {
                  color: "always-white"
                })]
              }), (0, s.jsx)(d.Text, {
                variant: "text-xs/medium",
                children: X
              })]
            })]
          })
        }), (0, s.jsxs)(r.animated.div, {
          ref: e => {
            k.current = e
          },
          className: a()(v.headerExpandedContent, {
            [v.outerContainerGiftInventory]: z,
            [v.outerContainerEmbed]: Q
          }),
          style: {
            opacity: D.to({
              range: [0, 1],
              output: [0, 1]
            }),
            visibility: j || U ? "visible" : "hidden"
          },
          "aria-hidden": !j && !U,
          children: [(0, s.jsxs)("div", {
            className: v.headerExpandedWrapper,
            children: [(0, s.jsxs)("div", {
              className: v.iconLogotypeContainer,
              children: [(0, s.jsx)(g.Z, {
                className: v.partnerBranding,
                gameTileSize: g.f.MEDIUM,
                quest: u,
                theme: H
              }), Q ? null : (0, s.jsx)(p.Z, {
                color: "always-white"
              })]
            }), (0, s.jsxs)("div", {
              className: v.questInfo,
              children: [(0, s.jsx)(d.Tooltip, {
                text: u.config.messages.questName,
                shouldShow: null != V && null != w && V < w,
                children: e => (0, s.jsx)(d.Heading, {
                  ref: F,
                  variant: "lg" === m ? "heading-xxl/bold" : "sm" === m ? "heading-xl/bold" : "heading-lg/bold",
                  className: v.heading,
                  ...e,
                  children: x.Z.Messages.QUEST.format({
                    questName: u.config.messages.questName
                  })
                })
              }), (0, s.jsx)(d.Text, {
                variant: "text-xs/normal",
                children: q ? x.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
                  expirationDate: $
                }) : l ? x.Z.Messages.QUESTS_EXPIRED_ON.format({
                  expirationDate: J
                }) : x.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                  expirationDate: J
                })
              })]
            })]
          }), !l && z && (0, s.jsx)(P, {
            quest: u,
            location: T,
            questContentPosition: y
          })]
        })]
      }), (0, s.jsxs)(r.animated.div, {
        className: v.iconsContainer,
        style: {
          top: z ? D.to({
            range: [0, 1],
            output: [O.DJ / 2 - O.Z$ / 2, O.jc]
          }) : O.jc
        },
        children: [(0, s.jsx)(R.r, {
          questContent: T,
          quest: u,
          questContentPosition: y,
          shouldShowDisclosure: !0,
          hideLearnMore: z,
          showShareLink: !l && Q,
          children: e => (0, s.jsx)(r.animated.div, {
            style: {
              opacity: D,
              visibility: j || U ? "visible" : "hidden"
            },
            "aria-hidden": !j && !U,
            children: (0, s.jsx)(d.Clickable, {
              ...e,
              className: v.iconWrapper,
              "aria-label": x.Z.Messages.ACTIONS,
              children: (0, s.jsx)(d.MoreHorizontalIcon, {
                size: "md",
                color: o.Z.WHITE
              })
            })
          })
        }), b && !(0, O.W_)(T) && (0, s.jsx)(d.Clickable, {
          onClick: ee,
          className: v.iconWrapper,
          "aria-label": U ? x.Z.Messages.COLLAPSE : x.Z.Messages.EXPAND,
          children: (0, s.jsx)(L, {
            style: {
              rotate: D.to({
                range: [0, 1],
                output: [0, 180]
              })
            },
            color: o.Z.WHITE
          })
        })]
      })]
    })]
  })
}