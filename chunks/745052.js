"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("924826"),
  o = n("286379"),
  u = n("442837"),
  d = n("524437"),
  c = n("481060"),
  f = n("150063"),
  E = n("45114"),
  C = n("230711"),
  h = n("112724"),
  _ = n("183126"),
  S = n("607070"),
  m = n("209613"),
  p = n("325708"),
  I = n("320149"),
  g = n("252618"),
  T = n("605236"),
  A = n("243778"),
  N = n("984370"),
  v = n("797614"),
  R = n("359110"),
  O = n("6025"),
  L = n("897473"),
  P = n("108427"),
  y = n("970731"),
  M = n("210887"),
  D = n("433355"),
  x = n("592125"),
  b = n("819640"),
  U = n("916187"),
  j = n("151827"),
  G = n("626135"),
  w = n("792125"),
  k = n("879041"),
  B = n("647090"),
  F = n("385956"),
  H = n("610697"),
  V = n("26373"),
  Y = n("486622"),
  W = n("922409"),
  K = n("899740"),
  z = n("177033"),
  q = n("355350"),
  Q = n("307947"),
  Z = n("96479"),
  X = n("480874"),
  J = n("687683"),
  $ = n("981631"),
  ee = n("921944"),
  et = n("526761"),
  en = n("689938"),
  ea = n("175959"),
  es = n("19340");

function el() {
  let e = s.useRef(null),
    t = (0, K.useMessageRequestsCount)(),
    n = (0, z.default)(),
    l = (0, V.useListHasSingleMessageRequest)(),
    u = (0, _.useIsRejectAllMessageRequestsEnabled)(),
    d = n.length > 0 ? null == n ? void 0 : n[0].channel.id : null,
    f = (0, k.useIsNewMessageRequestHomeCountEnabled)({
      location: "message-request-page-web"
    });
  s.useEffect(() => {
    f && null != d && (0, E.ackMessageRequest)(d)
  }, [d, f]);
  let C = s.useCallback(() => {
      (0, c.showToast)((0, c.createToast)(en.default.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, c.ToastType.FAILURE))
    }, []),
    {
      rejectAll: h
    } = (0, Y.useMessageRequestActions)({
      onError: C
    }),
    S = (0, m.default)("message-requests-list"),
    {
      channelId: p
    } = (0, W.useMessageRequestSidebarState)(),
    I = s.useCallback(() => {
      h(n.map(e => e.channel.id))
    }, [n, h]),
    g = s.useCallback(e => {
      var t, s;
      let {
        row: r
      } = e, o = n[r], u = null === (s = n[r + 1]) || void 0 === s ? void 0 : null === (t = s.channel) || void 0 === t ? void 0 : t.id, d = o.channel.id;
      return (0, a.jsx)(Z.default, {
        index: r,
        className: i()({
          [ea.selected]: null != p && p === d,
          [ea.siblingSelected]: null != p && p === u
        }),
        channel: o.channel,
        user: o.user,
        hasSingleMessageRequest: l
      }, d)
    }, [l, n, p]),
    T = s.useCallback(() => (0, a.jsxs)(j.default, {
      className: ea.sectionTitle,
      children: [t > 0 ? en.default.Messages.MESSAGE_REQUESTS_PAGE_TITLE_WITH_COUNT.format({
        count: t
      }) : en.default.Messages.MESSAGE_REQUESTS_PAGE_TITLE, u && t > 0 ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(c.Text, {
          className: ea.titleDivider,
          variant: "eyebrow",
          color: "header-secondary",
          tag: "span",
          children: "•"
        }), (0, a.jsx)(c.Button, {
          onClick: I,
          look: c.ButtonLooks.LINK,
          color: c.ButtonColors.LINK,
          size: c.ButtonSizes.SMALL,
          className: ea.clearAllButton,
          "aria-label": en.default.Messages.MESSAGE_REQUESTS_CLEAR_ALL,
          children: en.default.Messages.MESSAGE_REQUESTS_CLEAR_ALL
        })]
      }) : null]
    }, "title"), [t, I, u]);
  return (n.length !== t && v.default.increment({
    name: o.MetricEvents.MESSAGE_REQUEST_COUNT_DRIFT
  }), 0 === n.length) ? (0, a.jsx)(Q.default, {
    section: J.MessageRequestSections.REQUESTS
  }) : (0, a.jsx)(r.ListNavigatorProvider, {
    navigator: S,
    children: (0, a.jsx)(r.ListNavigatorContainer, {
      children: t => {
        let {
          ref: s,
          role: l,
          ...i
        } = t;
        return (0, a.jsx)(c.List, {
          className: ea.list,
          innerRole: l,
          innerAriaLabel: en.default.Messages.MESSAGE_REQUESTS,
          ref: t => {
            var n;
            e.current = t, s.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null
          },
          paddingTop: 24,
          paddingBottom: 24,
          sectionHeight: J.LIST_SECTION_HEIGHT,
          rowHeight: J.LIST_ROW_HEIGHT,
          renderSection: T,
          renderRow: g,
          sections: [n.length],
          chunkSize: 30,
          fade: !0,
          ...i
        }, "message-requests-list")
      }
    })
  })
}

function ei(e) {
  let {
    pageWidth: t,
    onSidebarResize: n
  } = e, s = (0, u.useStateFromStores)([D.default], () => D.default.getSidebarState(D.MESSAGE_REQUESTS_BASE_CHANNEL_ID)), l = (0, u.useStateFromStores)([x.default], () => x.default.getChannel(null == s ? void 0 : s.channelId));
  if (null == s || s.type !== L.SidebarType.VIEW_MESSAGE_REQUEST || null == l || !l.isPrivate()) return null;
  let i = t - $.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH;
  return (0, a.jsx)(p.default, {
    sidebarType: p.ChatSidebarType.MessageRequestSidebar,
    maxWidth: i,
    onWidthChange: n,
    children: (0, a.jsx)(I.default, {
      channel: l,
      baseChannelId: D.MESSAGE_REQUESTS_BASE_CHANNEL_ID
    })
  })
}
let er = function(e) {
    let {
      markAsDismissed: t
    } = e;
    return (0, a.jsx)(y.default, {
      header: en.default.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
      content: en.default.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT_TEENS,
      buttonCTA: en.default.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
      className: ea.messageRequestCoachmark,
      onClick: () => t(ee.ContentDismissActionType.UNKNOWN),
      markAsDismissed: t,
      caretPosition: y.CaretPosition.TOP_CENTER,
      headerClassName: ea.__invalid_header
    })
  },
  eo = e => {
    let t = (0, H.default)(),
      n = () => b.default.hasLayers() || (0, c.hasAnyModalOpen)(),
      l = (0, u.useStateFromStores)([S.default], () => S.default.useReducedMotion);
    return s.useEffect(() => {
      (0, T.requestMarkDismissibleContentAsShown)(d.DismissibleContent.MESSAGE_REQUEST_SETTINGS_COACH_MARK)
    }, []), (0, a.jsx)(A.default, {
      contentTypes: [d.DismissibleContent.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
      children: s => {
        let {
          visibleContent: i,
          markAsDismissed: r
        } = s;
        if (i === d.DismissibleContent.MESSAGE_REQUEST_SETTINGS_COACH_MARK) return (0, a.jsx)(c.Popout, {
          renderPopout: () => t ? (0, a.jsx)(er, {
            markAsDismissed: r
          }) : (0, a.jsx)(y.default, {
            header: en.default.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
            content: en.default.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT,
            buttonCTA: en.default.Messages.MESSAGE_REQUESTS_COACHMARK_CONFIRM,
            secondaryButtonCTA: en.default.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
            className: ea.messageRequestCoachmark,
            onClick: e => {
              e.stopPropagation(), C.default.open($.UserSettingsSections.PRIVACY_AND_SAFETY, null, {
                scrollPosition: et.PrivacyAndSafetyScrollPositions.MESSAGE_REQUESTS
              })
            },
            markAsDismissed: r,
            caretPosition: y.CaretPosition.TOP_CENTER,
            headerClassName: ea.__invalid_header
          }),
          position: "bottom",
          align: "center",
          animation: l ? c.Popout.Animation.NONE : c.Popout.Animation.TRANSLATE,
          shouldShow: !n(),
          spacing: 16,
          children: () => e.children
        });
        return e.children
      }
    })
  };

function eu(e) {
  let {
    section: t
  } = e;
  return t === J.MessageRequestSections.SPAM ? (0, a.jsx)(X.default, {}) : (0, a.jsx)(el, {})
}
let ed = (0, h.default)(function(e) {
  let {
    width: t
  } = e, n = (0, K.useMessageRequestsCount)();
  s.useEffect(() => {
    f.setHomeLink($.Routes.MESSAGE_REQUESTS), (0, P.trackAppUIViewed)("message-requests"), G.default.track($.AnalyticEvents.MESSAGE_REQUESTS_VIEWED, {
      num_message_requests: n
    }), v.default.increment({
      name: o.MetricEvents.MESSAGE_REQUEST_VIEW
    })
  }, []);
  let l = (0, u.useStateFromStores)([M.default], () => M.default.theme),
    r = (0, q.useSpamMessageRequestCount)(),
    [d, E] = s.useState(!1),
    C = (0, u.useStateFromStores)([D.default], () => {
      let e = D.default.getSidebarState(D.MESSAGE_REQUESTS_BASE_CHANNEL_ID);
      return null != e && e.type === L.SidebarType.VIEW_MESSAGE_REQUEST ? e : null
    }),
    h = null == C ? void 0 : C.channelId,
    _ = null != C,
    S = (0, F.useIsEitherTypeOfMessageRequest)(h),
    m = (0, B.useHasUserRepliedInChannel)(h);
  s.useEffect(() => {
    null != h && !S && m && _ && ((0, R.transitionToChannel)(h), O.default.closeChannelSidebar(D.MESSAGE_REQUESTS_BASE_CHANNEL_ID))
  }, [h, m, _, S]);
  let [p, I] = s.useState(J.MessageRequestSections.REQUESTS);
  return (0, g.usePageTitle)({
    location: en.default.Messages.MESSAGE_REQUESTS
  }), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: i()(es.chat, ea.container, {
        [es.threadSidebarOpen]: _,
        [es.threadSidebarFloating]: _ && d
      }),
      children: [(0, a.jsxs)(N.default, {
        className: (0, w.getThemeClass)(l),
        toolbar: !0,
        children: [(0, a.jsx)(N.default.Icon, {
          icon: U.default,
          "aria-hidden": !0
        }), (0, a.jsx)(eo, {
          children: (0, a.jsx)(N.default.Title, {
            children: en.default.Messages.MESSAGE_REQUESTS
          })
        }), (0, a.jsx)(N.default.Divider, {}), (0, a.jsxs)(c.TabBar, {
          "aria-label": en.default.Messages.MESSAGE_REQUESTS,
          selectedItem: p,
          type: "top-pill",
          onItemSelect: e => {
            I(e)
          },
          className: ea.__invalid_tabBar,
          children: [(0, a.jsx)(c.TabBar.Item, {
            id: J.MessageRequestSections.REQUESTS,
            className: ea.__invalid_item,
            children: en.default.Messages.MESSAGE_REQUESTS_REQUESTS_TAB_TITLE
          }), (0, a.jsx)(c.TabBar.Item, {
            id: J.MessageRequestSections.SPAM,
            className: ea.__invalid_item,
            children: 0 === r ? en.default.Messages.MESSAGE_REQUESTS_SPAM_TAB_TITLE : en.default.Messages.MESSAGE_REQUESTS_SPAM_TAB_TITLE_WITH_COUNT.format({
              count: r
            })
          })]
        })]
      }), (0, a.jsx)("div", {
        className: es.content,
        children: (0, a.jsx)(eu, {
          section: p
        })
      })]
    }), _ && (0, a.jsx)(ei, {
      pageWidth: t,
      onSidebarResize: (e, t) => {
        E(t)
      }
    })]
  })
});
t.default = ed