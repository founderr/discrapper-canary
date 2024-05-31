"use strict";
l.r(t), l.d(t, {
  default: function() {
    return Y
  }
}), l("47120"), l("653041");
var i = l("735250"),
  a = l("470079"),
  n = l("120356"),
  s = l.n(n),
  r = l("990547"),
  d = l("442837"),
  o = l("477690"),
  c = l("481060"),
  u = l("110924"),
  v = l("40851"),
  f = l("367907"),
  h = l("565384"),
  m = l("906732"),
  I = l("835473"),
  E = l("592125"),
  T = l("451478"),
  x = l("285952"),
  S = l("292937"),
  C = l("626135"),
  p = l("585483"),
  A = l("624138"),
  _ = l("115130"),
  g = l("566620"),
  N = l("421"),
  j = l("895395"),
  D = l("49978"),
  y = l("427996"),
  M = l("701488"),
  L = l("981631"),
  V = l("689938"),
  b = l("554657"),
  R = l("361205"),
  O = l("812320");
let B = (0, A.cssValueToNumber)(o.default.ACTIVITY_SHELF_MODAL_MODAL_PADDING),
  F = (0, A.cssValueToNumber)(o.default.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
  H = (0, A.cssValueToNumber)(o.default.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) + B + (0, A.cssValueToNumber)(o.default.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);

function Y(e) {
  let {
    channel: t,
    guildId: l,
    locationObject: n,
    onClose: o,
    initialSelectedApplicationId: v,
    initialSlide: T = M.ActivityShelfSlides.DIRECTORY,
    enableSelectedTextChannelInvite: A,
    analyticsLocations: B,
    ...H
  } = e, Y = (0, d.useStateFromStores)([_.default], () => _.default.getIsEnabled(), []), {
    analyticsLocations: P
  } = (0, m.default)(B), [w, G] = a.useState(T), U = (0, u.default)(w), [W, z] = a.useState(null), [Z, q] = a.useState(v), [J, K] = a.useState(void 0), [X] = (0, I.default)(null == Z ? [] : [Z]), Q = a.useRef(null), $ = a.useMemo(() => ({
    application_id: Z,
    source_section: n.section,
    impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW
  }), [n.section, Z]);
  a.useEffect(() => {
    if (w === M.ActivityShelfSlides.DIRECTORY && null != U && U !== M.ActivityShelfSlides.DIRECTORY && null != W) {
      var e;
      null === (e = Q.current) || void 0 === e || e.scrollTo({
        top: W
      })
    }
  }, [W, U, w]);
  let ee = a.useCallback(e => {
      var t;
      let {
        applicationId: l
      } = e, i = null === (t = Q.current) || void 0 === t ? void 0 : t.scrollTop;
      null != i && z(i), q(l), G(M.ActivityShelfSlides.SELECT_CHANNEL)
    }, []),
    et = a.useCallback(e => {
      let {
        applicationId: t
      } = e;
      q(t), G(M.ActivityShelfSlides.DETAIL_PAGE)
    }, []);
  a.useEffect(() => {
    C.default.track(L.AnalyticEvents.OPEN_MODAL, {
      type: "Activity Shelf",
      channel_id: null == t ? void 0 : t.id,
      guild_id: l
    })
  }, [t, l]), a.useEffect(() => (p.ComponentDispatch.subscribe(L.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, ee), () => {
    p.ComponentDispatch.unsubscribe(L.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, ee)
  }), [ee]), a.useEffect(() => (p.ComponentDispatch.subscribe(L.ComponentActions.SHOW_ACTIVITY_DETAILS, et), () => {
    p.ComponentDispatch.unsubscribe(L.ComponentActions.SHOW_ACTIVITY_DETAILS, et)
  }), [et]), a.useEffect(() => {
    g.dismissNewActivityIndicator()
  }, []);
  let el = () => {
      G(M.ActivityShelfSlides.DIRECTORY)
    },
    ei = a.useRef(Date.now()),
    ea = a.useRef(!1),
    en = a.useRef([]),
    es = a.useCallback(e => {
      null == en.current.find(t => t === e.applicationId) && en.current.push(e.applicationId)
    }, []);
  return a.useEffect(() => {
    let e = Q.current;
    if (null != e) {
      let t = () => ea.current = !0;
      return null != e && e.addEventListener("scroll", t), () => {
        null != e && e.removeEventListener("scroll", t)
      }
    }
  }, []), a.useEffect(() => () => {
    let e = {
        activity_tiles_viewed: en.current,
        duration_ms: Date.now() - ei.current,
        scrolled: ea.current
      },
      i = {
        channel_id: null == t ? void 0 : t.id,
        guild_id: l,
        location: (0, h.getLocation)(),
        ...(0, f.collectGuildAnalyticsMetadata)(l),
        ...(0, f.collectChannelAnalyticsMetadata)(E.default.getChannel(null == t ? void 0 : t.id)),
        ...$,
        ...e
      };
    C.default.track(L.AnalyticEvents.ACTIVITY_SHELF_CLOSE, i)
  }, [null == t ? void 0 : t.id, $, l]), (0, i.jsx)(m.AnalyticsLocationProvider, {
    value: P,
    children: (0, i.jsxs)(c.ModalRoot, {
      className: s()(b.root),
      "aria-label": V.default.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
      ...H,
      children: [(0, i.jsx)("img", {
        alt: V.default.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
        src: R,
        className: b.shelfTopBackground
      }), (0, i.jsx)("img", {
        alt: V.default.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
        src: O,
        className: b.shelfTopForeground
      }), (0, i.jsxs)(c.ModalHeader, {
        separator: !1,
        justify: x.default.Justify.BETWEEN,
        className: s()(b.modalHeader),
        children: [(0, i.jsxs)("div", {
          className: b.headerTextContainer,
          children: [(() => {
            if (w === M.ActivityShelfSlides.DETAIL_PAGE) return null == X ? null : (0, i.jsxs)("div", {
              className: b.activityShelfTitle,
              children: [(0, i.jsx)(c.Heading, {
                variant: "heading-xl/extrabold",
                children: X.name
              }), (0, i.jsxs)(c.Clickable, {
                className: b.headerBackButton,
                onClick: el,
                children: [(0, i.jsx)(S.default, {}), (0, i.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  children: V.default.Messages.BACK
                })]
              })]
            });
            return (0, i.jsx)("div", {
              className: b.activityShelfTitle,
              children: (0, i.jsx)(c.Heading, {
                variant: "heading-xl/extrabold",
                children: V.default.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
              })
            })
          })(), (() => {
            if (w === M.ActivityShelfSlides.DIRECTORY) return (0, i.jsx)(c.Text, {
              variant: "text-sm/normal",
              children: Y ? V.default.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE : V.default.Messages.EMBEDDED_ACTIVITIES_SHELF_SUBTITLE
            });
            return null
          })()]
        }), (0, i.jsx)(c.ModalCloseButton, {
          className: b.modalCloseButton,
          onClick: o
        })]
      }), w === M.ActivityShelfSlides.DIRECTORY && Y ? (0, i.jsx)(y.DeveloperShelfControls, {}) : null, (0, i.jsx)("div", {
        className: b.modalDivider
      }), (0, i.jsxs)(c.Slides, {
        activeSlide: w,
        centered: !1,
        width: F,
        children: [(0, i.jsx)(c.Slide, {
          id: M.ActivityShelfSlides.DIRECTORY,
          impressionName: r.ImpressionNames.ACTIVITY_SHELF,
          impressionProperties: {
            source_section: n.section,
            impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW
          },
          children: (0, i.jsx)(k, {
            slide: w,
            children: (0, i.jsx)(j.default, {
              scrollerRef: Q,
              channel: t,
              guildId: l,
              locationObject: n,
              onActivityItemVisible: es,
              onClose: o
            })
          })
        }), (0, i.jsx)(c.Slide, {
          id: M.ActivityShelfSlides.SELECT_CHANNEL,
          impressionName: r.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
          impressionProperties: {
            source_section: n.section,
            impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW,
            application_id: Z
          },
          children: (0, i.jsx)(k, {
            slide: w,
            children: (0, i.jsx)(D.default, {
              applicationId: Z,
              selectedChannelId: J,
              setSelectedChannelId: K,
              guildId: l,
              enableSelectedTextChannelInvite: A
            })
          })
        }), (0, i.jsx)(c.Slide, {
          id: M.ActivityShelfSlides.DETAIL_PAGE,
          impressionName: r.ImpressionNames.ACTIVITY_DETAILS,
          impressionProperties: $,
          children: (0, i.jsx)(k, {
            slide: w,
            children: null == Z ? null : (0, i.jsx)(N.default, {
              applicationId: Z,
              channelId: null == t ? void 0 : t.id,
              guildId: l,
              onActivityLaunch: o
            })
          })
        })]
      }), (0, i.jsx)("div", {
        className: b.modalDivider
      }), (0, i.jsx)(c.ModalFooter, {
        separator: !1,
        className: b.footer,
        children: (() => {
          switch (w) {
            case M.ActivityShelfSlides.DIRECTORY:
              return (0, i.jsx)(j.ActivityDirectoryFooter, {});
            case M.ActivityShelfSlides.SELECT_CHANNEL:
              return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                  className: b.modalDivider
                }), (0, i.jsx)(c.ModalFooter, {
                  separator: !1,
                  className: b.footer,
                  children: (0, i.jsx)(D.ChannelSelectorFooter, {
                    onBack: el,
                    onClose: o,
                    guildId: l,
                    applicationId: Z,
                    locationObject: n,
                    selectedChannelId: J,
                    enableSelectedTextChannelInvite: A
                  })
                })]
              });
            case M.ActivityShelfSlides.DETAIL_PAGE:
            case M.ActivityShelfSlides.DIRECTORY:
            default:
              return null
          }
        })()
      })]
    })
  })
}
let k = e => {
  let {
    children: t,
    slide: l
  } = e, n = (0, d.useStateFromStores)([_.default], () => _.default.getIsEnabled(), []), r = a.useContext(v.default), o = (0, d.useStateFromStores)([T.default], () => T.default.windowSize(r.windowId).height, [r.windowId]);
  return (0, i.jsx)("div", {
    className: s()(b.slideContentOuterContainerSquished, {
      [b.slideContentOuterContainerSquishedWithDev]: l === M.ActivityShelfSlides.DIRECTORY && n,
      [b.slideContentOuterContainerTall]: l === M.ActivityShelfSlides.DIRECTORY && o > H,
      [b.slideContentOuterContainerTallWithDev]: l === M.ActivityShelfSlides.DIRECTORY && o > H && n,
      [b.slideContentOuterContainerNoMetaTextSquished]: l === M.ActivityShelfSlides.SELECT_CHANNEL,
      [b.slideContentOuterContainerNoMetaTextTall]: l === M.ActivityShelfSlides.SELECT_CHANNEL && o > H,
      [b.slideContentOuterContainerNoMetaTextNoFooterSquished]: l === M.ActivityShelfSlides.DETAIL_PAGE,
      [b.slideContentOuterContainerNoMetaTextNoFooterTall]: l === M.ActivityShelfSlides.DETAIL_PAGE && o > H
    }),
    children: t
  })
}