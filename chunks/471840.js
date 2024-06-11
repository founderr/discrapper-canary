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
  I = l("565384"),
  E = l("906732"),
  m = l("835473"),
  h = l("592125"),
  T = l("451478"),
  x = l("285952"),
  C = l("292937"),
  S = l("626135"),
  p = l("585483"),
  A = l("624138"),
  _ = l("115130"),
  g = l("566620"),
  N = l("421"),
  j = l("895395"),
  D = l("49978"),
  y = l("427996"),
  L = l("701488"),
  M = l("981631"),
  b = l("689938"),
  V = l("554657"),
  O = l("361205"),
  R = l("812320");
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
    initialSlide: T = L.ActivityShelfSlides.DIRECTORY,
    enableSelectedTextChannelInvite: A,
    analyticsLocations: B,
    ...H
  } = e, Y = (0, d.useStateFromStores)([_.default], () => _.default.getIsEnabled(), []), {
    analyticsLocations: P
  } = (0, E.default)(B), [w, U] = a.useState(T), G = (0, u.default)(w), [W, z] = a.useState(null), [Z, q] = a.useState(v), [J, K] = a.useState(void 0), [X] = (0, m.default)(null == Z ? [] : [Z]), Q = a.useRef(null), $ = a.useMemo(() => ({
    application_id: Z,
    source_section: n.section,
    impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW
  }), [n.section, Z]);
  a.useEffect(() => {
    if (w === L.ActivityShelfSlides.DIRECTORY && null != G && G !== L.ActivityShelfSlides.DIRECTORY && null != W) {
      var e;
      null === (e = Q.current) || void 0 === e || e.scrollTo({
        top: W
      })
    }
  }, [W, G, w]);
  let ee = a.useCallback(e => {
      var t;
      let {
        applicationId: l
      } = e, i = null === (t = Q.current) || void 0 === t ? void 0 : t.scrollTop;
      null != i && z(i), q(l), U(L.ActivityShelfSlides.SELECT_CHANNEL)
    }, []),
    et = a.useCallback(e => {
      let {
        applicationId: t
      } = e;
      q(t), U(L.ActivityShelfSlides.DETAIL_PAGE)
    }, []);
  a.useEffect(() => {
    S.default.track(M.AnalyticEvents.OPEN_MODAL, {
      type: "Activity Shelf",
      channel_id: null == t ? void 0 : t.id,
      guild_id: l
    })
  }, [t, l]), a.useEffect(() => (p.ComponentDispatch.subscribe(M.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, ee), () => {
    p.ComponentDispatch.unsubscribe(M.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, ee)
  }), [ee]), a.useEffect(() => (p.ComponentDispatch.subscribe(M.ComponentActions.SHOW_ACTIVITY_DETAILS, et), () => {
    p.ComponentDispatch.unsubscribe(M.ComponentActions.SHOW_ACTIVITY_DETAILS, et)
  }), [et]), a.useEffect(() => {
    g.dismissNewActivityIndicator()
  }, []);
  let el = () => {
      U(L.ActivityShelfSlides.DIRECTORY)
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
        location: (0, I.getLocation)(),
        ...(0, f.collectGuildAnalyticsMetadata)(l),
        ...(0, f.collectChannelAnalyticsMetadata)(h.default.getChannel(null == t ? void 0 : t.id)),
        ...$,
        ...e
      };
    S.default.track(M.AnalyticEvents.ACTIVITY_SHELF_CLOSE, i)
  }, [null == t ? void 0 : t.id, $, l]), (0, i.jsx)(E.AnalyticsLocationProvider, {
    value: P,
    children: (0, i.jsxs)(c.ModalRoot, {
      className: s()(V.root),
      "aria-label": b.default.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
      ...H,
      children: [(0, i.jsx)("img", {
        alt: b.default.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
        src: O,
        className: V.shelfTopBackground
      }), (0, i.jsx)("img", {
        alt: b.default.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
        src: R,
        className: V.shelfTopForeground
      }), (0, i.jsxs)(c.ModalHeader, {
        separator: !1,
        justify: x.default.Justify.BETWEEN,
        className: s()(V.modalHeader),
        children: [(0, i.jsxs)("div", {
          className: V.headerTextContainer,
          children: [(() => {
            if (w === L.ActivityShelfSlides.DETAIL_PAGE) return null == X ? null : (0, i.jsxs)("div", {
              className: V.activityShelfTitle,
              children: [(0, i.jsx)(c.Heading, {
                variant: "heading-xl/extrabold",
                children: X.name
              }), (0, i.jsxs)(c.Clickable, {
                className: V.headerBackButton,
                onClick: el,
                children: [(0, i.jsx)(C.default, {}), (0, i.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  children: b.default.Messages.BACK
                })]
              })]
            });
            return (0, i.jsx)("div", {
              className: V.activityShelfTitle,
              children: (0, i.jsx)(c.Heading, {
                variant: "heading-xl/extrabold",
                children: b.default.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
              })
            })
          })(), (() => {
            if (w === L.ActivityShelfSlides.DIRECTORY) return (0, i.jsx)(c.Text, {
              variant: "text-sm/normal",
              children: Y ? b.default.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE : b.default.Messages.EMBEDDED_ACTIVITIES_SHELF_SUBTITLE
            });
            return null
          })()]
        }), (0, i.jsx)(c.ModalCloseButton, {
          className: V.modalCloseButton,
          onClick: o
        })]
      }), w === L.ActivityShelfSlides.DIRECTORY && Y ? (0, i.jsx)(y.DeveloperShelfControls, {}) : null, (0, i.jsx)("div", {
        className: V.modalDivider
      }), (0, i.jsxs)(c.Slides, {
        activeSlide: w,
        centered: !1,
        width: F,
        children: [(0, i.jsx)(c.Slide, {
          id: L.ActivityShelfSlides.DIRECTORY,
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
          id: L.ActivityShelfSlides.SELECT_CHANNEL,
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
          id: L.ActivityShelfSlides.DETAIL_PAGE,
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
        className: V.modalDivider
      }), (0, i.jsx)(c.ModalFooter, {
        separator: !1,
        className: V.footer,
        children: (() => {
          switch (w) {
            case L.ActivityShelfSlides.DIRECTORY:
              return (0, i.jsx)(j.ActivityDirectoryFooter, {});
            case L.ActivityShelfSlides.SELECT_CHANNEL:
              return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                  className: V.modalDivider
                }), (0, i.jsx)(c.ModalFooter, {
                  separator: !1,
                  className: V.footer,
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
            case L.ActivityShelfSlides.DETAIL_PAGE:
            case L.ActivityShelfSlides.DIRECTORY:
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
    className: s()(V.slideContentOuterContainerSquished, {
      [V.slideContentOuterContainerSquishedWithDev]: l === L.ActivityShelfSlides.DIRECTORY && n,
      [V.slideContentOuterContainerTall]: l === L.ActivityShelfSlides.DIRECTORY && o > H,
      [V.slideContentOuterContainerTallWithDev]: l === L.ActivityShelfSlides.DIRECTORY && o > H && n,
      [V.slideContentOuterContainerNoMetaTextSquished]: l === L.ActivityShelfSlides.SELECT_CHANNEL,
      [V.slideContentOuterContainerNoMetaTextTall]: l === L.ActivityShelfSlides.SELECT_CHANNEL && o > H,
      [V.slideContentOuterContainerNoMetaTextNoFooterSquished]: l === L.ActivityShelfSlides.DETAIL_PAGE,
      [V.slideContentOuterContainerNoMetaTextNoFooterTall]: l === L.ActivityShelfSlides.DETAIL_PAGE && o > H
    }),
    children: t
  })
}