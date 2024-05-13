"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("924826"),
  o = n("286379"),
  u = n("442837"),
  d = n("524437"),
  c = n("481060"),
  f = n("150063"),
  E = n("230711"),
  h = n("112724"),
  _ = n("183126"),
  C = n("607070"),
  m = n("209613"),
  S = n("325708"),
  p = n("320149"),
  g = n("252618"),
  I = n("605236"),
  T = n("243778"),
  A = n("984370"),
  N = n("797614"),
  v = n("359110"),
  R = n("6025"),
  L = n("897473"),
  O = n("108427"),
  M = n("970731"),
  y = n("210887"),
  P = n("433355"),
  x = n("592125"),
  D = n("819640"),
  b = n("916187"),
  U = n("151827"),
  j = n("626135"),
  G = n("792125"),
  k = n("647090"),
  w = n("385956"),
  F = n("610697"),
  B = n("26373"),
  H = n("486622"),
  V = n("922409"),
  Y = n("899740"),
  W = n("177033"),
  K = n("355350"),
  z = n("307947"),
  q = n("96479"),
  Q = n("480874"),
  Z = n("687683"),
  X = n("981631"),
  J = n("921944"),
  $ = n("526761"),
  ee = n("689938"),
  et = n("175959"),
  en = n("19340");

function ea() {
  let e = s.useRef(null),
    t = (0, Y.useMessageRequestsCount)(),
    n = (0, W.default)(),
    i = (0, B.useListHasSingleMessageRequest)(),
    u = (0, _.useIsRejectAllMessageRequestsEnabled)(),
    d = s.useCallback(() => {
      (0, c.showToast)((0, c.createToast)(ee.default.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, c.ToastType.FAILURE))
    }, []),
    {
      rejectAll: f
    } = (0, H.useMessageRequestActions)({
      onError: d
    }),
    E = (0, m.default)("message-requests-list"),
    {
      channelId: h
    } = (0, V.useMessageRequestSidebarState)(),
    C = s.useCallback(() => {
      f(n.map(e => e.channel.id))
    }, [n, f]),
    S = s.useCallback(e => {
      var t, s;
      let {
        row: r
      } = e, o = n[r], u = null === (s = n[r + 1]) || void 0 === s ? void 0 : null === (t = s.channel) || void 0 === t ? void 0 : t.id, d = o.channel.id;
      return (0, a.jsx)(q.default, {
        index: r,
        className: l()({
          [et.selected]: null != h && h === d,
          [et.siblingSelected]: null != h && h === u
        }),
        channel: o.channel,
        user: o.user,
        hasSingleMessageRequest: i
      }, d)
    }, [i, n, h]),
    p = s.useCallback(() => (0, a.jsxs)(U.default, {
      className: et.sectionTitle,
      children: [t > 0 ? ee.default.Messages.MESSAGE_REQUESTS_PAGE_TITLE_WITH_COUNT.format({
        count: t
      }) : ee.default.Messages.MESSAGE_REQUESTS_PAGE_TITLE, u && t > 0 ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(c.Text, {
          className: et.titleDivider,
          variant: "eyebrow",
          color: "header-secondary",
          tag: "span",
          children: "•"
        }), (0, a.jsx)(c.Button, {
          onClick: C,
          look: c.ButtonLooks.LINK,
          color: c.ButtonColors.LINK,
          size: c.ButtonSizes.SMALL,
          className: et.clearAllButton,
          "aria-label": ee.default.Messages.MESSAGE_REQUESTS_CLEAR_ALL,
          children: ee.default.Messages.MESSAGE_REQUESTS_CLEAR_ALL
        })]
      }) : null]
    }, "title"), [t, C, u]);
  return (n.length !== t && N.default.increment({
    name: o.MetricEvents.MESSAGE_REQUEST_COUNT_DRIFT
  }), 0 === n.length) ? (0, a.jsx)(z.default, {
    section: Z.MessageRequestSections.REQUESTS
  }) : (0, a.jsx)(r.ListNavigatorProvider, {
    navigator: E,
    children: (0, a.jsx)(r.ListNavigatorContainer, {
      children: t => {
        let {
          ref: s,
          role: i,
          ...l
        } = t;
        return (0, a.jsx)(c.List, {
          className: et.list,
          innerRole: i,
          innerAriaLabel: ee.default.Messages.MESSAGE_REQUESTS,
          ref: t => {
            var n;
            e.current = t, s.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null
          },
          paddingTop: 24,
          paddingBottom: 24,
          sectionHeight: Z.LIST_SECTION_HEIGHT,
          rowHeight: Z.LIST_ROW_HEIGHT,
          renderSection: p,
          renderRow: S,
          sections: [n.length],
          chunkSize: 30,
          fade: !0,
          ...l
        }, "message-requests-list")
      }
    })
  })
}

function es(e) {
  let {
    pageWidth: t,
    onSidebarResize: n
  } = e, s = (0, u.useStateFromStores)([P.default], () => P.default.getSidebarState(P.MESSAGE_REQUESTS_BASE_CHANNEL_ID)), i = (0, u.useStateFromStores)([x.default], () => x.default.getChannel(null == s ? void 0 : s.channelId));
  if (null == s || s.type !== L.SidebarType.VIEW_MESSAGE_REQUEST || null == i || !i.isPrivate()) return null;
  let l = t - X.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH;
  return (0, a.jsx)(S.default, {
    sidebarType: S.ChatSidebarType.MessageRequestSidebar,
    maxWidth: l,
    onWidthChange: n,
    children: (0, a.jsx)(p.default, {
      channel: i,
      baseChannelId: P.MESSAGE_REQUESTS_BASE_CHANNEL_ID
    })
  })
}
let ei = function(e) {
    let {
      markAsDismissed: t
    } = e;
    return (0, a.jsx)(M.default, {
      header: ee.default.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
      content: ee.default.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT_TEENS,
      buttonCTA: ee.default.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
      className: et.messageRequestCoachmark,
      onClick: () => t(J.ContentDismissActionType.UNKNOWN),
      markAsDismissed: t,
      caretPosition: M.CaretPosition.TOP_CENTER,
      headerClassName: et.__invalid_header
    })
  },
  el = e => {
    let t = (0, F.default)(),
      n = () => D.default.hasLayers() || (0, c.hasAnyModalOpen)(),
      i = (0, u.useStateFromStores)([C.default], () => C.default.useReducedMotion);
    return s.useEffect(() => {
      (0, I.requestMarkDismissibleContentAsShown)(d.DismissibleContent.MESSAGE_REQUEST_SETTINGS_COACH_MARK)
    }, []), (0, a.jsx)(T.default, {
      contentTypes: [d.DismissibleContent.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
      children: s => {
        let {
          visibleContent: l,
          markAsDismissed: r
        } = s;
        if (l === d.DismissibleContent.MESSAGE_REQUEST_SETTINGS_COACH_MARK) return (0, a.jsx)(c.Popout, {
          renderPopout: () => t ? (0, a.jsx)(ei, {
            markAsDismissed: r
          }) : (0, a.jsx)(M.default, {
            header: ee.default.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
            content: ee.default.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT,
            buttonCTA: ee.default.Messages.MESSAGE_REQUESTS_COACHMARK_CONFIRM,
            secondaryButtonCTA: ee.default.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
            className: et.messageRequestCoachmark,
            onClick: e => {
              e.stopPropagation(), E.default.open(X.UserSettingsSections.PRIVACY_AND_SAFETY, null, {
                scrollPosition: $.PrivacyAndSafetyScrollPositions.MESSAGE_REQUESTS
              })
            },
            markAsDismissed: r,
            caretPosition: M.CaretPosition.TOP_CENTER,
            headerClassName: et.__invalid_header
          }),
          position: "bottom",
          align: "center",
          animation: i ? c.Popout.Animation.NONE : c.Popout.Animation.TRANSLATE,
          shouldShow: !n(),
          spacing: 16,
          children: () => e.children
        });
        return e.children
      }
    })
  };

function er(e) {
  let {
    section: t
  } = e;
  return t === Z.MessageRequestSections.SPAM ? (0, a.jsx)(Q.default, {}) : (0, a.jsx)(ea, {})
}
let eo = (0, h.default)(function(e) {
  let {
    width: t
  } = e, n = (0, Y.useMessageRequestsCount)();
  s.useEffect(() => {
    f.setHomeLink(X.Routes.MESSAGE_REQUESTS), (0, O.trackAppUIViewed)("message-requests"), j.default.track(X.AnalyticEvents.MESSAGE_REQUESTS_VIEWED, {
      num_message_requests: n
    }), N.default.increment({
      name: o.MetricEvents.MESSAGE_REQUEST_VIEW
    })
  }, []);
  let i = (0, u.useStateFromStores)([y.default], () => y.default.theme),
    r = (0, K.useSpamMessageRequestCount)(),
    [d, E] = s.useState(!1),
    h = (0, u.useStateFromStores)([P.default], () => {
      let e = P.default.getSidebarState(P.MESSAGE_REQUESTS_BASE_CHANNEL_ID);
      return null != e && e.type === L.SidebarType.VIEW_MESSAGE_REQUEST ? e : null
    }),
    _ = null == h ? void 0 : h.channelId,
    C = null != h,
    m = (0, w.useIsEitherTypeOfMessageRequest)(_),
    S = (0, k.useHasUserRepliedInChannel)(_);
  s.useEffect(() => {
    null != _ && !m && S && C && ((0, v.transitionToChannel)(_), R.default.closeChannelSidebar(P.MESSAGE_REQUESTS_BASE_CHANNEL_ID))
  }, [_, S, C, m]);
  let [p, I] = s.useState(Z.MessageRequestSections.REQUESTS);
  return (0, g.usePageTitle)({
    location: ee.default.Messages.MESSAGE_REQUESTS
  }), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: l()(en.chat, et.container, {
        [en.threadSidebarOpen]: C,
        [en.threadSidebarFloating]: C && d
      }),
      children: [(0, a.jsxs)(A.default, {
        className: (0, G.getThemeClass)(i),
        toolbar: !0,
        children: [(0, a.jsx)(A.default.Icon, {
          icon: b.default,
          "aria-hidden": !0
        }), (0, a.jsx)(el, {
          children: (0, a.jsx)(A.default.Title, {
            children: ee.default.Messages.MESSAGE_REQUESTS
          })
        }), (0, a.jsx)(A.default.Divider, {}), (0, a.jsxs)(c.TabBar, {
          "aria-label": ee.default.Messages.MESSAGE_REQUESTS,
          selectedItem: p,
          type: "top-pill",
          onItemSelect: e => {
            I(e)
          },
          className: et.__invalid_tabBar,
          children: [(0, a.jsx)(c.TabBar.Item, {
            id: Z.MessageRequestSections.REQUESTS,
            className: et.__invalid_item,
            children: ee.default.Messages.MESSAGE_REQUESTS_REQUESTS_TAB_TITLE
          }), (0, a.jsx)(c.TabBar.Item, {
            id: Z.MessageRequestSections.SPAM,
            className: et.__invalid_item,
            children: 0 === r ? ee.default.Messages.MESSAGE_REQUESTS_SPAM_TAB_TITLE : ee.default.Messages.MESSAGE_REQUESTS_SPAM_TAB_TITLE_WITH_COUNT.format({
              count: r
            })
          })]
        })]
      }), (0, a.jsx)("div", {
        className: en.content,
        children: (0, a.jsx)(er, {
          section: p
        })
      })]
    }), C && (0, a.jsx)(es, {
      pageWidth: t,
      onSidebarResize: (e, t) => {
        E(t)
      }
    })]
  })
});
t.default = eo