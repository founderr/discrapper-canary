C.r(e), C.d(e, {
  default: function() {
    return L4
  }
}), C(47120), C(757143), C(653041);
var a, s, t, i, n = C(735250),
  l = C(470079),
  r = C(120356),
  H = C.n(r),
  V = C(716),
  c = C(266067),
  o = C(990547),
  d = C(442837),
  M = C(477690),
  Z = C(481060),
  E = C(150063),
  I = C(393238),
  _ = C(110924),
  T = C(315263),
  u = C(607070),
  h = C(100527),
  m = C(906732),
  p = C(213609),
  x = C(216547),
  D = C(812206),
  g = C(706454),
  N = C(210887),
  f = C(592125),
  A = C(430824),
  S = C(771845),
  v = C(594174),
  j = C(517802),
  R = C(471731),
  b = C(502568),
  O = C(602623),
  w = C(810090),
  B = C(626135),
  P = C(823379),
  k = C(5192),
  W = C(624138),
  F = C(792125),
  y = C(712092),
  G = C(507885),
  U = C(566620),
  Y = C(317381),
  K = C(379146),
  X = C(273003),
  J = C(754332),
  z = C(140863),
  Q = C(969345),
  q = C(257968),
  $ = C(127255),
  LL = C(361213),
  Le = C(542094),
  LC = C(778569),
  La = C(84e4),
  Ls = C(537789),
  Lt = C(841547),
  Li = C(239298),
  Ln = C(513202),
  Ll = C(701488),
  Lr = C(981631),
  LH = C(689938),
  LV = C(542308),
  Lc = C(131454),
  Lo = C(372065),
  Ld = C(376226),
  LM = C(785930),
  LZ = C(143824),
  LE = C(848366),
  LI = C(392381),
  L_ = C(176890),
  LT = C(997074),
  Lu = C(901924),
  Lh = C(448096),
  Lm = C(286557),
  Lp = C(358176),
  Lx = C(610924),
  LD = C(326822),
  Lg = C(797956),
  LN = C(612852),
  Lf = C(369827);
let LA = "celebrate-with-us",
  LS = "".concat(Lr.Z5c.ACTIVITIES, "#").concat(LA),
  Lv = "https://support.discord.com/hc/en-us/articles/13771635451415-Share-Nitro-Trials-with-a-Friend-FAQ",
  Lj = "https://discord.gg/discord-townhall",
  LR = "https://discordmerch.com/dxcprod";

function Lb() {
  var L, e;
  let {
    width: C,
    ref: a
  } = (0, I.Z)(), s = (0, d.e7)([u.Z], () => u.Z.useReducedMotion), t = (0, d.e7)([G.Z], () => G.Z.isAcknowledged(Ll.ES.FREE)), [i, r] = l.useState(!1), [o, M] = l.useState(!1), [_, T] = l.useState(!1), p = (0, c.k6)(), x = (0, c.TH)(), D = (0, d.e7)([N.Z], () => N.Z.getState().theme), [g] = l.useState((0, q.c)(G.Z) > 0), {
    analyticsLocations: f
  } = (0, m.ZP)([...null !== (e = null == x ? void 0 : null === (L = x.state) || void 0 === L ? void 0 : L.analyticsLocations) && void 0 !== e ? e : [], h.Z.ACTIVITIES_PAGE]), A = l.useRef(new Date);
  return l.useEffect(() => {
    setTimeout(() => {
      !t && y.Z(Ll.ES.FREE)
    }, 500)
  }, [t]), l.useEffect(() => {
    !t && (setTimeout(() => {
      r(!0)
    }, 1300), setTimeout(() => {
      M(!0)
    }, 1500), setTimeout(() => {
      T(!0)
    }, 1700))
  }, [t]), l.useEffect(() => ((0, E.Y)(Lr.Z5c.ACTIVITIES), g && !f.includes(h.Z.ACTIVITIES_PAGE_NOTIFICATION_DOT) && p.replace(Lr.Z5c.ACTIVITIES, {
    analyticsLocations: [...f, h.Z.ACTIVITIES_PAGE_NOTIFICATION_DOT]
  }), () => {
    let L = A.current,
      e = Math.ceil((new Date().getTime() - L.getTime()) / 1e3);
    B.default.track(Lr.rMx.ROUTE_UNMOUNT, {
      route: "/activities",
      page_view_duration_s: e
    })
  }), [f, p, g]), (0, n.jsx)(m.Gt, {
    value: f,
    children: (0, n.jsxs)("div", {
      className: LV.outerContainer,
      children: [(0, n.jsxs)(b.ZP, {
        children: [(0, n.jsx)(j.Z, {
          className: H()(LV.activitiesBirthdayIcon, {
            [LV.activitiesBirthdayIconLight]: "light" === D
          })
        }), (0, n.jsx)(Z.Heading, {
          variant: "heading-md/semibold",
          children: LH.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_TAB_TITLE
        })]
      }), (0, n.jsx)(Z.Scroller, {
        className: LV.scroller,
        children: (0, n.jsxs)("div", {
          className: LV.innerContainer,
          children: [(0, n.jsxs)("div", {
            className: LV.heroFlipper,
            children: [(0, n.jsxs)("div", {
              className: H()(LV.heroFlipperInner, {
                [LV.heroFlipped]: t || s
              }),
              children: [(0, n.jsx)("img", {
                src: "light" === D ? Lc : Lo,
                className: H()(LV.hero),
                alt: LH.Z.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_ACTIVITIES_HERO_ALT
              }), (0, n.jsx)("div", {
                className: H()(LV.heroFlipperBack, {
                  [LV.heroFlipperBackLightMode]: "light" === D
                }),
                children: (0, n.jsx)(LO, {
                  containerRef: a,
                  width: C
                })
              })]
            }), !s && i ? (0, n.jsx)("div", {
              className: LV.heroConfetti01Wrapper,
              children: (0, n.jsx)(V.Z, {
                colors: LW
              })
            }) : null, !s && o ? (0, n.jsx)("div", {
              className: LV.heroConfetti02Wrapper,
              children: (0, n.jsx)(V.Z, {
                colors: LW
              })
            }) : null, !s && _ ? (0, n.jsx)("div", {
              className: LV.heroConfetti03Wrapper,
              children: (0, n.jsx)(V.Z, {
                colors: LW
              })
            }) : null]
          }), null != C && C < 660 ? (0, n.jsx)(w.Z, {
            autoPlay: !0,
            muted: !0,
            src: Ld,
            loop: !0,
            className: LV.freeForeverBreakpointVideo,
            controls: s
          }) : null, (0, n.jsx)(Lw, {}), (0, n.jsx)(LF, {}), (0, n.jsx)(LJ, {}), (0, n.jsx)(LQ, {}), (0, n.jsx)(L$, {}), (0, n.jsx)(L6, {})]
        })
      })]
    })
  })
}

function LO(L) {
  let {
    width: e,
    containerRef: C
  } = L, a = (0, d.e7)([u.Z], () => u.Z.useReducedMotion);
  return (0, n.jsxs)("div", {
    className: LV.freeForeverContainer,
    ref: C,
    children: [(0, n.jsx)("div", {
      className: LV.freeForeverLeft,
      children: (0, n.jsxs)("div", {
        className: LV.freeForeverText,
        children: [(0, n.jsx)(R.Z, {
          className: H()(LV.freeForeverLogo, {
            [LV.freeForeverLogoMedium]: null != e && e < 1e3,
            [LV.freeForeverLogoSmall]: null != e && e < 480
          })
        }), (0, n.jsx)(Z.Heading, {
          variant: null == e || e < 480 ? "heading-sm/bold" : e < 1e3 ? "display-sm" : "display-md",
          children: LH.Z.Messages.EMBEDDED_ACTIVITIES_FREE_FOREVER_TITLE
        }), (0, n.jsx)(Z.Text, {
          variant: null == e || e < 480 ? "text-sm/medium" : e < 1e3 ? "text-md/medium" : "text-lg/medium",
          children: LH.Z.Messages.EMBEDDED_ACTIVITIES_FREE_FOREVER_DESCRIPTION
        })]
      })
    }), null != e && e > 660 ? (0, n.jsx)("div", {
      className: LV.freeForeverRight,
      children: (0, n.jsx)(w.Z, {
        autoPlay: !0,
        muted: !0,
        loop: !0,
        src: Ld,
        poster: LM,
        className: LV.freeForeverVideo,
        controls: a
      })
    }) : null]
  })
}

function Lw() {
  return (0, n.jsxs)("div", {
    className: LV.birthdayExplanationWrapper,
    children: [(0, n.jsx)("div", {
      className: LV.birthdayBalloonsContainer,
      children: (0, n.jsx)(La.j, {
        className: H()(LV.birthdayExplanationBalloonsLeft, LV.balloon)
      })
    }), (0, n.jsx)(Z.Heading, {
      variant: "heading-md/semibold",
      className: LV.birthdayExplanationText,
      children: LH.Z.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_HERO_TEXT_WITH_2_LINKS.format({
        linkToBdayBlogPost: "https://dis.gd/birthday",
        linkToSurprises: L => (0, n.jsxs)(Z.Anchor, {
          href: LS,
          children: [L, (0, n.jsx)("img", {
            src: Lh,
            className: LV.birthdayExplanationNitroIcon,
            alt: LH.Z.Messages.EMBEDDED_ACTIVITIES_NITRO_ICON_ALT
          })]
        })
      })
    }), (0, n.jsx)("div", {
      className: LV.birthdayBalloonsContainer,
      children: (0, n.jsx)(La.j, {
        className: H()(LV.birthdayExplanationBalloonsRight, LV.balloon),
        flipX: !0
      })
    })]
  })
}
let LB = "whats-new",
  LP = (0, W.Mg)(M.Z.ACTIVITIES_HOME_WHATS_NEW_TILE_WIDTH),
  Lk = (0, W.Mg)(M.Z.ACTIVITIES_HOME_WHATS_NEW_HORIZONTAL_MARGIN),
  LW = [Z.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_BLUE.css, Z.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_GREEN.css, Z.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_PINK.css, Z.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_PURPLE.css, Z.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_YELLOW.css];

function LF() {
  let {
    enabled: L
  } = K.q.useExperiment({
    location: "d72ecf_2"
  }), {
    enabled: e
  } = X.q.useExperiment({
    location: "d72ecf_3"
  }), {
    enabled: C
  } = z.u.useExperiment({
    location: "d72ecf_4"
  }), {
    enabled: a
  } = J.m.useExperiment({
    location: "d72ecf_5"
  }), s = l.useMemo(() => {
    let s = [];
    return s.push({
      id: Ll.ES.DISCORD_TURNS_8,
      title: LH.Z.Messages.EMBEDDED_ACTIVITIES_WEEKLY_DROPS_TILE_TITLE,
      content: (0, n.jsx)(Z.Text, {
        variant: "text-sm/normal",
        className: LV.whatsNewDescription,
        children: LH.Z.Messages.EMBEDDED_ACTIVITIES_WEEKLY_DROPS_TILE_DESCRIPTION
      }),
      imgUrl: LD,
      imgAlt: LH.Z.Messages.EMBEDDED_ACTIVITIES_WEEKLY_DROPS_TILE_IMG_ALT,
      link: void 0,
      isAppLink: !1,
      cardImgUrl: LZ,
      revealDate: new Date("May 15, 2023 17:00:00"),
      enabled: !0
    }), s.push({
      id: Ll.ES.GDM_ACTIVITIES,
      title: LH.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_GDM_TILE_TITLE,
      content: (0, n.jsx)(Z.Text, {
        variant: "text-sm/normal",
        className: LV.whatsNewDescription,
        children: LH.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_GDM_TILE_DESCRIPTION
      }),
      imgUrl: Lx,
      imgAlt: LH.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_GDM_TILE_IMG_ALT,
      link: "https://support.discord.com/hc/en-us/articles/4422142836759-Activities-on-Discord#h_01GSX5FCYNMF5PCGKNNA6XFW29",
      isAppLink: !1,
      cardImgUrl: LE,
      revealDate: new Date("May 15, 2023 17:00:00"),
      enabled: L
    }), s.push({
      id: Ll.ES.PUTT_PARTY,
      title: LH.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_PUTT_PARTY_TILE_TITLE,
      content: (0, n.jsx)(Z.Text, {
        variant: "text-sm/normal",
        className: LV.whatsNewDescription,
        children: LH.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_PUTT_PARTY_TILE_DESCRIPTION
      }),
      imgUrl: Lf,
      imgAlt: LH.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_PUTT_PARTY_TILE_IMG_ALT,
      link: Lr.Z5c.ACTIVITY_DETAILS(Ll.f9),
      isAppLink: !0,
      cardImgUrl: LI,
      revealDate: new Date("May 22, 2023 17:00:00"),
      enabled: C
    }), s.push({
      id: Ll.ES.JAMSPACE,
      title: LH.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_JAMSPACE_TILE_TITLE,
      content: (0, n.jsx)(Z.Text, {
        variant: "text-sm/normal",
        className: LV.whatsNewDescription,
        children: LH.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_JAMSPACE_TILE_DESCRIPTION
      }),
      imgUrl: Lg,
      imgAlt: LH.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_JAMSPACE_TILE_IMG_ALT,
      link: Lr.Z5c.ACTIVITY_DETAILS(Ll.MO),
      isAppLink: !0,
      cardImgUrl: L_,
      revealDate: new Date("May 30, 2023 17:00:00"),
      enabled: e
    }), s.push({
      id: Ll.ES.POKER,
      title: LH.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_POKER_TILE_TITLE,
      content: (0, n.jsx)(Z.Text, {
        variant: "text-sm/normal",
        className: LV.whatsNewDescription,
        children: LH.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_POKER_TILE_DESCRIPTION
      }),
      imgUrl: LN,
      imgAlt: LH.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_POKER_TILE_IMG_ALT,
      link: Lr.Z5c.ACTIVITY_DETAILS(Ll.Zc),
      isAppLink: !0,
      cardImgUrl: LT,
      revealDate: new Date("June 5, 2023 17:00:00"),
      enabled: a
    }), s
  }, [L, e, a, C]);
  return s.length <= 0 ? null : (0, n.jsx)("div", {
    className: LV.whatsNew,
    children: (0, n.jsx)(x.Z, {
      tileMargin: Lk,
      headerId: LB,
      tileWidth: LP,
      header: LH.Z.Messages.WHATS_NEW,
      headerContainerClassName: LV.tileScrollerHeader,
      scrollContainerClassName: LV.tileScrollerContainer,
      children: (0, n.jsx)("ul", {
        "aria-labelledby": LB,
        className: LV.whatsNewItemsContainer,
        children: s.map(L => (0, n.jsx)(Ly, {
          ...L
        }, L.id))
      })
    })
  })
}

function Ly(L) {
  let {
    imgUrl: e,
    imgAlt: C,
    title: a,
    content: s,
    link: t,
    isAppLink: i,
    id: r,
    cardImgUrl: c,
    revealDate: o,
    enabled: M
  } = L, E = (0, d.e7)([u.Z], () => u.Z.useReducedMotion), I = (0, d.e7)([g.default], () => g.default.locale), {
    analyticsLocations: T
  } = (0, m.ZP)(h.Z.ACTIVITIES_PAGE_WHATS_NEW_TILE), [p, x] = l.useState(!1), D = (0, _.Z)(p), N = (0, d.e7)([G.Z], () => {
    if (!M) return 0;
    let L = G.Z.isOpened(r);
    return r === Ll.ES.JAMSPACE ? L || G.Z.isOpened(Ll.ES.JAMSPACE_OLD) ? 2 : 1 : L ? 2 : 1
  }, [M, r]);
  l.useEffect(() => {
    M && y.Z(r)
  }, [M, r]);
  let f = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(Z.Text, {
      variant: "text-sm/semibold",
      className: LV.whatsNewDate,
      children: new Intl.DateTimeFormat(I, {
        dateStyle: "long"
      }).format(o)
    }), (0, n.jsxs)("div", {
      className: LV.whatsNewImageContainer,
      children: [(0, n.jsx)("img", {
        src: e,
        className: LV.whatsNewImage,
        alt: C
      }), (0, n.jsx)(Z.Text, {
        variant: "eyebrow",
        className: LV.newTag,
        children: LH.Z.Messages.NEW
      })]
    }), (0, n.jsxs)("div", {
      className: LV.whatsNewTextArea,
      children: [(0, n.jsx)(Z.Heading, {
        variant: "heading-md/bold",
        className: LV.whatsNewDetailsHeader,
        children: a
      }), s]
    })]
  });
  return (0, n.jsx)(m.Gt, {
    value: T,
    children: (0, n.jsxs)("div", {
      className: LV.flipCardOuter,
      children: [E || 2 !== N || p || !D ? null : (0, n.jsx)("div", {
        className: LV.flipCardConfetti,
        children: (0, n.jsx)(V.Z, {
          colors: LW
        })
      }), (0, n.jsx)(LG, {
        openState: N,
        link: t,
        isAppLink: i,
        onOpen: () => {
          x(!0), y.E(r), B.default.track(Lr.rMx.ACTIVITIES_WHATS_NEW_OPENED, {
            section_id: r
          }), setTimeout(() => {
            x(!1)
          }, 500)
        },
        onCardContentClick: () => {
          B.default.track(Lr.rMx.ACTIVITIES_WHATS_NEW_CLICKED, {
            section_id: r
          })
        }
      }), (0, n.jsxs)("div", {
        className: H()(LV.flipCardInner, {
          [LV.flipCardInnerFlipped]: 2 === N,
          [LV.flipCardOpening]: p && !E,
          [LV.flipCardInnerReducedMotion]: E
        }),
        children: [(0, n.jsx)("div", {
          className: LV.flipCardOpened,
          children: (() => {
            switch (N) {
              case 0:
              case 1:
                return (0, n.jsx)(Z.Text, {
                  variant: "text-md/medium",
                  children: "( ͡\xb0 ͜ʖ ͡\xb0) https://discord.com/careers"
                });
              case 2:
                return (0, n.jsx)("div", {
                  className: LV.whatsNewItemContainer,
                  children: f
                });
              default:
                return null
            }
          })()
        }), (0, n.jsxs)("div", {
          className: LV.flipCardClosed,
          children: [(0, n.jsx)("img", {
            src: c,
            className: LV.flipCardClosedImg,
            alt: LH.Z.Messages.EMBEDDED_ACTIVITIES_PLAYING_CARD_ALT
          }), (() => {
            switch (N) {
              case 0:
                return (0, n.jsx)(Z.Text, {
                  variant: "text-sm/semibold",
                  className: LV.flipCardClosedText,
                  children: LH.Z.Messages.EMBEDDED_ACTIVITIES_CLICK_TO_REVEAL_DATE.format({
                    revealDate: new Intl.DateTimeFormat(I).format(o)
                  })
                });
              case 1:
                return (0, n.jsx)(Z.Text, {
                  variant: "text-sm/semibold",
                  className: LV.flipCardText,
                  children: LH.Z.Messages.EMBEDDED_ACTIVITIES_REVEAL_THIS_WEEKS_DROP.format({
                    revealDate: new Intl.DateTimeFormat(I).format(o)
                  })
                });
              default:
                return null
            }
          })()]
        })]
      })]
    })
  })
}

function LG(L) {
  let {
    openState: e,
    link: C,
    isAppLink: a,
    onOpen: s,
    onCardContentClick: t
  } = L, {
    analyticsLocations: i
  } = (0, m.ZP)(), l = (0, d.e7)([u.Z], () => u.Z.useReducedMotion);
  switch (e) {
    case 0:
      return (0, n.jsx)("div", {
        className: H()(LV.clickableContainer, LV.noPointer, {
          [LV.clickableContainerReducedMotion]: l
        })
      });
    case 1:
      return (0, n.jsx)(Z.Clickable, {
        "aria-label": LH.Z.Messages.EMBEDDED_ACTIVITIES_OPEN_BIRTHDAY_SURPRISE,
        className: H()(LV.clickableContainer, {
          [LV.clickableContainerReducedMotion]: l
        }),
        onClick: s
      });
    case 2:
      if (null == C) return (0, n.jsx)("div", {
        className: H()(LV.clickableContainer, LV.noPointer, {
          [LV.clickableContainerReducedMotion]: l
        })
      });
      if (a) return (0, n.jsx)(Li.o, {
        className: H()(LV.clickableContainer, {
          [LV.clickableContainerReducedMotion]: l
        }),
        onClick: t,
        to: {
          pathname: C,
          state: {
            analyticsLocations: i
          }
        }
      });
      return (0, n.jsx)(Z.Clickable, {
        tag: "a",
        href: C,
        target: "_blank",
        className: H()(LV.clickableContainer, {
          [LV.clickableContainerReducedMotion]: l
        }),
        onClick: t
      });
    default:
      return null
  }
}(t = a || (a = {}))[t.LOCKED = 0] = "LOCKED", t[t.UNLOCKED = 1] = "UNLOCKED", t[t.OPENED = 2] = "OPENED";
let LU = "happening-now",
  LY = (0, W.Mg)(M.Z.ACTIVITIES_HOME_HAPPENING_NOW_CARD_WIDTH),
  LK = (0, W.Mg)(M.Z.ACTIVITIES_HOME_HAPPENING_NOW_GAP);

function LX(L, e) {
  if (L.length !== e.length) return !1;
  for (let C = 0; C < L.length; C++)
    if (L[C].activityItem.application.id !== e[C].activityItem.application.id || L[C].channel.id !== e[C].channel.id || L[C].users.length !== e[C].users.length) return !1;
  return !0
}

function LJ() {
  let {
    analyticsLocations: L
  } = (0, m.ZP)(h.Z.ACTIVITIES_HAPPENING_NOW), e = (0, d.e7)([Y.ZP, D.Z, f.Z, v.default, S.ZP], () => {
    let L = [],
      e = v.default.getCurrentUser();
    if (null == e) return L;
    let C = Y.ZP.getShelfActivities(null),
      a = C.map(L => D.Z.getApplication(L.application_id)).filter(P.lm);
    return S.ZP.getFlattenedGuildIds().forEach(s => {
      Y.ZP.getEmbeddedActivitiesForGuild(s).forEach(s => {
        let t = f.Z.getChannel(s.channelId);
        if (null == t || s.userIds.has(e.id)) return;
        let i = (0, Q.Z)({
            activityConfigs: C,
            applicationId: s.applicationId,
            applications: a
          }),
          n = Array.from(s.userIds).map(L => v.default.getUser(L)).filter(P.lm);
        null != i && L.push({
          activityItem: i,
          channel: t,
          users: n
        })
      })
    }), L
  }, [], LX);
  return ((0, p.Z)({
    type: o.ImpressionTypes.PANE,
    name: o.ImpressionNames.ACTIVITIES_HAPPENING_NOW,
    properties: {
      n_activities: e.length
    }
  }, {
    trackOnInitialLoad: !0
  }), e.length <= 0) ? null : (0, n.jsx)(m.Gt, {
    value: L,
    children: (0, n.jsx)("div", {
      className: LV.happeningNowContainer,
      children: (0, n.jsx)(x.Z, {
        tileMargin: LK,
        headerId: LU,
        tileWidth: LY,
        header: LH.Z.Messages.EMBEDDED_ACTIVITIES_HAPPENING_NOW_TITLE,
        subHeader: LH.Z.Messages.EMBEDDED_ACTIVITIES_HAPPENING_NOW_DESCRIPTION,
        headerContainerClassName: LV.tileScrollerHeader,
        scrollContainerClassName: LV.tileScrollerContainer,
        children: (0, n.jsx)("ul", {
          "aria-labelledby": LU,
          className: LV.whatsNewItemsContainer,
          children: e.map(L => {
            let {
              activityItem: e,
              channel: C,
              users: a
            } = L;
            return (0, n.jsx)(Lz, {
              activityItem: e,
              channel: C,
              users: a
            }, "".concat(C.id).concat(e.application.id))
          })
        })
      })
    })
  })
}

function Lz(L) {
  let {
    activityItem: e,
    channel: C,
    users: a
  } = L, s = (0, d.e7)([u.Z], () => u.Z.useReducedMotion), {
    imageBackground: t,
    onActivityItemSelected: i
  } = (0, Le.ZP)({
    activityItem: e,
    channel: C,
    guildId: C.guild_id,
    locationObject: {},
    embeddedActivitiesManager: Ln.Z,
    backgroundResolution: 512
  }), l = k.ZP.getName(C.guild_id, C.id, null == a ? void 0 : a[0]);
  l = (0, W.aF)(l, 25);
  let r = (0, d.e7)([A.Z], () => {
    var L;
    return null === (L = A.Z.getGuild(C.guild_id)) || void 0 === L ? void 0 : L.name
  });
  return (0, n.jsxs)(Z.Clickable, {
    onClick: i,
    className: H()((0, F.Q)(Lr.BRd.DARK), LV.happeningNowCard, {
      [LV.happeningNowCardReducedMotion]: s
    }),
    children: [(0, n.jsx)("img", {
      src: t.url,
      alt: e.application.name,
      className: LV.happeningNowCardImg
    }), (0, n.jsxs)("div", {
      className: LV.happeningNowCardForeground,
      children: [(0, n.jsx)(Z.Heading, {
        variant: "heading-lg/bold",
        children: e.application.name
      }), (0, n.jsx)(O.Z, {
        guildId: C.guild_id,
        users: a,
        max: 4,
        className: LV.happeningNowAvatars
      }), (0, n.jsx)(Z.Text, {
        className: LV.happeningNowAvatarNames,
        variant: "text-xs/normal",
        children: a.length > 1 ? LH.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
          username: l,
          count: a.length - 1
        }) : LH.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
          username: l
        })
      }), (0, n.jsx)(Z.Text, {
        variant: "text-md/medium",
        className: H()(LV.happeningNowJoin, {
          [LV.happeningNowJoinReducedMotion]: s
        }),
        children: LH.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY
      }), null != r ? (0, n.jsx)(Z.Text, {
        variant: "text-xs/medium",
        className: LV.happeningNowChannelAndGuildName,
        children: LH.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_CHANNEL_IN_SERVER.format({
          channelName: (0, W.aF)(C.name, 25),
          serverName: (0, W.aF)(r, 25)
        })
      }) : null]
    })]
  })
}

function LQ() {
  let L = (0, $.Z)({
    guildId: null,
    channel: void 0
  });
  return l.useEffect(() => {
    (0, U.w1)({
      guildId: null
    })
  }, []), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      className: LV.activityGridHeader,
      children: (0, n.jsxs)("div", {
        children: [(0, n.jsx)(Z.Heading, {
          variant: "heading-lg/bold",
          children: LH.Z.Messages.EMBEDDED_ACTIVITIES_EXPLORE_ACTIVITIES
        }), (0, n.jsx)(Z.Text, {
          variant: "text-sm/medium",
          className: LV.activityGridSubheader,
          children: LH.Z.Messages.EMBEDDED_ACTIVITIES_EXPLORE_ACTIVITIES_SUBHEADER
        })]
      })
    }), (0, n.jsx)("div", {
      className: LV.activityGrid,
      children: L.map(L => (0, n.jsx)(Lq, {
        activityItem: L
      }, L.application.id))
    })]
  })
}

function Lq(L) {
  var e;
  let {
    activityItem: C
  } = L, {
    analyticsLocations: a
  } = (0, m.ZP)(), s = (0, LC.Z)({
    applicationId: C.application.id,
    size: 512
  }), t = (0, d.e7)([u.Z], () => u.Z.useReducedMotion), i = (null === (e = C.application.embeddedActivityConfig) || void 0 === e ? void 0 : e.activity_preview_video_asset_id) != null ? (0, LL.Z)(C.application.id, C.application.embeddedActivityConfig.activity_preview_video_asset_id) : null, [r, V] = l.useState(!1), [c, o] = l.useState(r);
  l.useEffect(() => {
    r && o(!0)
  }, [r]);
  let M = () => V(!0),
    E = () => V(!1),
    I = null == C.application.maxParticipants || -1 === C.application.maxParticipants ? LH.Z.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS : LH.Z.Messages.EMBEDDED_ACTIVITIES_ONE_TO_N_PARTICIPANTS.format({
      count: C.application.maxParticipants
    });
  return (0, n.jsxs)(Li.o, {
    to: {
      pathname: Lr.Z5c.ACTIVITY_DETAILS(C.application.id),
      state: {
        analyticsLocations: a
      }
    },
    className: H()(LV.activityCard, {
      [LV.activityCardReducedMotion]: t
    }),
    onMouseEnter: M,
    onFocus: M,
    onMouseLeave: E,
    onBlur: E,
    children: [(0, n.jsxs)("div", {
      className: LV.activityCardImageContainer,
      children: [(0, n.jsx)("img", {
        src: s.url,
        alt: C.application.name,
        className: LV.activityCardImage
      }), !t && null != i && c ? (0, n.jsx)("div", {
        className: H()(LV.video, {
          [LV.videoFadeOut]: !r
        }),
        onAnimationEnd: () => r ? null : o(!1),
        children: (0, n.jsx)(w.Z, {
          className: LV.video,
          src: i,
          loop: !0,
          autoPlay: !0,
          muted: !0
        })
      }) : null]
    }), (0, n.jsxs)("div", {
      className: LV.activityCardDetails,
      children: [(0, n.jsxs)("div", {
        children: [(0, n.jsx)(Z.Heading, {
          variant: "heading-xl/extrabold",
          children: C.application.name
        }), (0, n.jsx)(Z.Text, {
          variant: "text-xs/semibold",
          className: LV.activityCardParticipants,
          children: I
        })]
      }), C.application.tags.length > 0 ? (0, n.jsx)("div", {
        className: LV.activityCardTagContainer,
        children: C.application.tags.slice(0, 3).map(L => (0, n.jsx)("div", {
          className: LV.activityCardTag,
          children: (0, n.jsx)(Z.Text, {
            variant: "text-xs/semibold",
            children: L
          })
        }, L))
      }) : null, (0, n.jsxs)("div", {
        className: H()(LV.activityCardHoverHint, {
          [LV.activityCardHoverHintReducedMotion]: t
        }),
        children: [(0, n.jsx)(Z.Text, {
          variant: "text-sm/semibold",
          children: LH.Z.Messages.LEARN_MORE
        }), (0, n.jsx)(Z.ChevronSmallRightIcon, {
          size: "xs",
          color: "currentColor"
        })]
      })]
    })]
  })
}

function L$() {
  return (0, n.jsxs)("div", {
    className: LV.celebrateContainer,
    id: LA,
    children: [(0, n.jsx)(Z.Heading, {
      variant: "heading-lg/bold",
      children: LH.Z.Messages.EMBEDDED_ACTIVITIES_HOW_YOU_CAN_CELEBRATE_WITH_US
    }), (0, n.jsxs)("div", {
      className: LV.celebrateCardGrid,
      children: [(0, n.jsxs)(Z.Clickable, {
        tag: "a",
        href: Lv,
        target: "_blank",
        className: LV.celebrateCardContainer,
        onClick: () => B.default.track(Lr.rMx.ACTIVITIES_PAGE_CELEBRATE_TILE_CLICKED, {
          section: "share_nitro"
        }),
        children: [(0, n.jsx)("img", {
          src: Lh,
          className: LV.celebrateNitroIcon,
          alt: LH.Z.Messages.EMBEDDED_ACTIVITIES_NITRO_ICON_ALT
        }), (0, n.jsx)(Z.Heading, {
          variant: "heading-lg/bold",
          className: LV.celebrateCardHeader,
          children: LH.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_THE_GIFT_OF_NITRO
        }), (0, n.jsx)(Z.Heading, {
          variant: "heading-sm/normal",
          className: LV.celebrateCardSubheader,
          children: LH.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_THREE_TRIALS.format({
            nitroLink: Lv
          })
        }), (0, n.jsx)("div", {
          className: LV.celebrateCardFiller
        }), (0, n.jsx)("img", {
          className: LV.celebrateCardImage,
          src: Lm,
          alt: LH.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_NITRO_TRIAL_ALT
        })]
      }), (0, n.jsxs)(Z.Clickable, {
        tag: "a",
        href: LR,
        target: "_blank",
        className: LV.celebrateCardContainer,
        onClick: () => {
          B.default.track(Lr.rMx.ACTIVITIES_PAGE_CELEBRATE_TILE_CLICKED, {
            section: "disxcore_merch"
          })
        },
        children: [(0, n.jsx)(Z.Heading, {
          variant: "heading-lg/bold",
          className: LV.celebrateCardHeader,
          children: LH.Z.Messages.EMBEDDED_ACTIVITIES_EXCLUSIVE_BIRTHDAY_MERCH
        }), (0, n.jsx)(Z.Heading, {
          variant: "heading-sm/normal",
          className: LV.celebrateCardSubheader,
          children: LH.Z.Messages.EMBEDDED_ACTIVITIES_VISIT_OUR_MERCH_STORE.format({
            merchStoreLink: LR
          })
        }), (0, n.jsx)("div", {
          className: LV.celebrateCardFiller
        }), (0, n.jsx)("img", {
          className: LV.celebrateCardImage,
          src: Lu,
          alt: LH.Z.Messages.EMBEDDED_ACTIVITIES_MERCH_STORE_ALT
        })]
      }), (0, n.jsxs)(Z.Clickable, {
        tag: "a",
        href: Lj,
        target: "_blank",
        className: LV.celebrateCardContainer,
        onClick: L => {
          var e;
          B.default.track(Lr.rMx.ACTIVITIES_PAGE_CELEBRATE_TILE_CLICKED, {
            section: "town_hall"
          }), null === (e = (0, T.default)(Lj)) || void 0 === e || e(L)
        },
        children: [(0, n.jsx)(Z.Heading, {
          variant: "heading-lg/bold",
          className: LV.celebrateCardHeader,
          children: LH.Z.Messages.EMBEDDED_ACTIVITIES_CELEBRATE_TOWN_HALL_TITLE
        }), (0, n.jsx)(Z.Heading, {
          variant: "heading-sm/normal",
          className: LV.celebrateCardSubheader,
          children: LH.Z.Messages.EMBEDDED_ACTIVITIES_CELEBRATE_TOWN_HALL_DESCRIPTION.format({
            clickHandler: (0, T.default)(Lj)
          })
        }), (0, n.jsx)("div", {
          className: LV.celebrateCardFiller
        }), (0, n.jsx)("img", {
          className: LV.celebrateCardImage,
          src: Lp,
          alt: LH.Z.Messages.EMBEDDED_ACTIVITIES_CELEBRATE_TOWN_HALL_IMG_ALT
        })]
      })]
    })]
  })
}

function L6() {
  return (0, n.jsx)("div", {
    className: LV.kitBashContainer,
    children: (0, n.jsx)(Lt.i, {})
  })
}

function L4() {
  return (0, n.jsx)(Ls.i, {
    children: (0, n.jsx)(Lb, {})
  })
}(i = s || (s = {})).SHARE_NITRO = "share_nitro", i.DISXCORE_MERCH = "disxcore_merch", i.TOWN_HALL = "town_hall"