l.r(n), l.d(n, {
  default: function() {
    return H
  }
}), l(47120), l(653041);
var t = l(735250),
  i = l(470079),
  a = l(120356),
  s = l.n(a),
  r = l(990547),
  o = l(442837),
  c = l(477690),
  d = l(481060),
  u = l(110924),
  g = l(40851),
  p = l(367907),
  m = l(565384),
  v = l(906732),
  I = l(835473),
  x = l(592125),
  E = l(451478),
  T = l(285952),
  h = l(626135),
  f = l(585483),
  C = l(624138),
  _ = l(115130),
  S = l(566620),
  j = l(421),
  Z = l(895395),
  N = l(49978),
  M = l(427996),
  A = l(701488),
  D = l(981631),
  y = l(689938),
  b = l(419973),
  L = l(361205),
  V = l(812320);
let R = (0, C.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_PADDING),
  O = (0, C.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
  B = (0, C.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) + R + (0, C.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);

function H(e) {
  let {
    channel: n,
    guildId: l,
    locationObject: a,
    onClose: c,
    initialSelectedApplicationId: g,
    initialSlide: E = A.ag.DIRECTORY,
    enableSelectedTextChannelInvite: C,
    analyticsLocations: R,
    ...B
  } = e, H = (0, o.e7)([_.Z], () => _.Z.getIsEnabled(), []), {
    analyticsLocations: F
  } = (0, v.ZP)(R), [k, Y] = i.useState(E), U = (0, u.Z)(k), [w, G] = i.useState(null), [W, z] = i.useState(g), [J, q] = i.useState(void 0), [K] = (0, I.Z)(null == W ? [] : [W]), X = i.useRef(null), $ = i.useMemo(() => ({
    application_id: W,
    source_section: a.section,
    impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW
  }), [a.section, W]);
  i.useEffect(() => {
    if (k === A.ag.DIRECTORY && null != U && U !== A.ag.DIRECTORY && null != w) {
      var e;
      null === (e = X.current) || void 0 === e || e.scrollTo({
        top: w
      })
    }
  }, [w, U, k]);
  let Q = i.useCallback(e => {
      var n;
      let {
        applicationId: l
      } = e, t = null === (n = X.current) || void 0 === n ? void 0 : n.scrollTop;
      null != t && G(t), z(l), Y(A.ag.SELECT_CHANNEL)
    }, []),
    ee = i.useCallback(e => {
      let {
        applicationId: n
      } = e;
      z(n), Y(A.ag.DETAIL_PAGE)
    }, []);
  i.useEffect(() => {
    h.default.track(D.rMx.OPEN_MODAL, {
      type: "Activity Shelf",
      channel_id: null == n ? void 0 : n.id,
      guild_id: l
    })
  }, [n, l]), i.useEffect(() => (f.S.subscribe(D.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, Q), () => {
    f.S.unsubscribe(D.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, Q)
  }), [Q]), i.useEffect(() => (f.S.subscribe(D.CkL.SHOW_ACTIVITY_DETAILS, ee), () => {
    f.S.unsubscribe(D.CkL.SHOW_ACTIVITY_DETAILS, ee)
  }), [ee]), i.useEffect(() => {
    S.ux()
  }, []);
  let en = () => {
      Y(A.ag.DIRECTORY)
    },
    el = i.useRef(Date.now()),
    et = i.useRef(!1),
    ei = i.useRef([]),
    ea = i.useCallback(e => {
      null == ei.current.find(n => n === e.applicationId) && ei.current.push(e.applicationId)
    }, []);
  return i.useEffect(() => {
    let e = X.current;
    if (null != e) {
      let n = () => et.current = !0;
      return null != e && e.addEventListener("scroll", n), () => {
        null != e && e.removeEventListener("scroll", n)
      }
    }
  }, []), i.useEffect(() => () => {
    let e = {
        activity_tiles_viewed: ei.current,
        duration_ms: Date.now() - el.current,
        scrolled: et.current
      },
      t = {
        channel_id: null == n ? void 0 : n.id,
        guild_id: l,
        location: (0, m.k$)(),
        ...(0, p.hH)(l),
        ...(0, p.v_)(x.Z.getChannel(null == n ? void 0 : n.id)),
        ...$,
        ...e
      };
    h.default.track(D.rMx.ACTIVITY_SHELF_CLOSE, t)
  }, [null == n ? void 0 : n.id, $, l]), (0, t.jsx)(v.Gt, {
    value: F,
    children: (0, t.jsxs)(d.ModalRoot, {
      className: s()(b.root),
      "aria-label": y.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
      ...B,
      children: [(0, t.jsx)("img", {
        alt: y.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
        src: L,
        className: b.shelfTopBackground
      }), (0, t.jsx)("img", {
        alt: y.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
        src: V,
        className: b.shelfTopForeground
      }), (0, t.jsxs)(d.ModalHeader, {
        separator: !1,
        justify: T.Z.Justify.BETWEEN,
        className: s()(b.modalHeader),
        children: [(0, t.jsxs)("div", {
          className: b.headerTextContainer,
          children: [(() => {
            if (k === A.ag.DETAIL_PAGE) return null == K ? null : (0, t.jsxs)("div", {
              className: b.activityShelfTitle,
              children: [(0, t.jsx)(d.Heading, {
                variant: "heading-xl/extrabold",
                children: K.name
              }), (0, t.jsxs)(d.Clickable, {
                className: b.headerBackButton,
                onClick: en,
                children: [(0, t.jsx)(d.ChevronSmallLeftIcon, {
                  size: "md",
                  color: "currentColor"
                }), (0, t.jsx)(d.Text, {
                  variant: "text-sm/semibold",
                  children: y.Z.Messages.BACK
                })]
              })]
            });
            return (0, t.jsx)("div", {
              className: b.activityShelfTitle,
              children: (0, t.jsx)(d.Heading, {
                variant: "heading-xl/extrabold",
                children: y.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
              })
            })
          })(), (() => {
            if (k === A.ag.DIRECTORY) return (0, t.jsx)(d.Text, {
              variant: "text-sm/normal",
              children: H ? y.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE : y.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_SUBTITLE
            });
            return null
          })()]
        }), (0, t.jsx)(d.ModalCloseButton, {
          className: b.modalCloseButton,
          onClick: c
        })]
      }), k === A.ag.DIRECTORY && H ? (0, t.jsx)(M.W, {}) : null, (0, t.jsx)("div", {
        className: b.modalDivider
      }), (0, t.jsxs)(d.Slides, {
        activeSlide: k,
        centered: !1,
        width: O,
        children: [(0, t.jsx)(d.Slide, {
          id: A.ag.DIRECTORY,
          impressionName: r.ImpressionNames.ACTIVITY_SHELF,
          impressionProperties: {
            source_section: a.section,
            impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW
          },
          children: (0, t.jsx)(P, {
            slide: k,
            children: (0, t.jsx)(Z.Z, {
              scrollerRef: X,
              channel: n,
              guildId: l,
              locationObject: a,
              onActivityItemVisible: ea,
              onClose: c
            })
          })
        }), (0, t.jsx)(d.Slide, {
          id: A.ag.SELECT_CHANNEL,
          impressionName: r.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
          impressionProperties: {
            source_section: a.section,
            impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW,
            application_id: W
          },
          children: (0, t.jsx)(P, {
            slide: k,
            children: (0, t.jsx)(N.Z, {
              applicationId: W,
              selectedChannelId: J,
              setSelectedChannelId: q,
              guildId: l,
              enableSelectedTextChannelInvite: C
            })
          })
        }), (0, t.jsx)(d.Slide, {
          id: A.ag.DETAIL_PAGE,
          impressionName: r.ImpressionNames.ACTIVITY_DETAILS,
          impressionProperties: $,
          children: (0, t.jsx)(P, {
            slide: k,
            children: null == W ? null : (0, t.jsx)(j.Z, {
              applicationId: W,
              channelId: null == n ? void 0 : n.id,
              guildId: l,
              onActivityLaunch: c
            })
          })
        })]
      }), (0, t.jsx)("div", {
        className: b.modalDivider
      }), (0, t.jsx)(d.ModalFooter, {
        separator: !1,
        className: b.footer,
        children: (() => {
          switch (k) {
            case A.ag.DIRECTORY:
              return (0, t.jsx)(Z.d, {});
            case A.ag.SELECT_CHANNEL:
              return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                  className: b.modalDivider
                }), (0, t.jsx)(d.ModalFooter, {
                  separator: !1,
                  className: b.footer,
                  children: (0, t.jsx)(N.q, {
                    onBack: en,
                    onClose: c,
                    guildId: l,
                    applicationId: W,
                    locationObject: a,
                    selectedChannelId: J,
                    enableSelectedTextChannelInvite: C
                  })
                })]
              });
            case A.ag.DETAIL_PAGE:
            case A.ag.DIRECTORY:
            default:
              return null
          }
        })()
      })]
    })
  })
}
let P = e => {
  let {
    children: n,
    slide: l
  } = e, a = (0, o.e7)([_.Z], () => _.Z.getIsEnabled(), []), r = i.useContext(g.ZP), c = (0, o.e7)([E.Z], () => E.Z.windowSize(r.windowId).height, [r.windowId]);
  return (0, t.jsx)("div", {
    className: s()(b.slideContentOuterContainerSquished, {
      [b.slideContentOuterContainerSquishedWithDev]: l === A.ag.DIRECTORY && a,
      [b.slideContentOuterContainerTall]: l === A.ag.DIRECTORY && c > B,
      [b.slideContentOuterContainerTallWithDev]: l === A.ag.DIRECTORY && c > B && a,
      [b.slideContentOuterContainerNoMetaTextSquished]: l === A.ag.SELECT_CHANNEL,
      [b.slideContentOuterContainerNoMetaTextTall]: l === A.ag.SELECT_CHANNEL && c > B,
      [b.slideContentOuterContainerNoMetaTextNoFooterSquished]: l === A.ag.DETAIL_PAGE,
      [b.slideContentOuterContainerNoMetaTextNoFooterTall]: l === A.ag.DETAIL_PAGE && c > B
    }),
    children: n
  })
}