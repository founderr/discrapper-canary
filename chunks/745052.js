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
  h = n("230711"),
  _ = n("112724"),
  C = n("183126"),
  m = n("607070"),
  S = n("209613"),
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
  M = n("108427"),
  P = n("970731"),
  x = n("210887"),
  y = n("433355"),
  D = n("592125"),
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
    u = (0, C.useIsRejectAllMessageRequestsEnabled)(),
    d = n.length > 0 ? null == n ? void 0 : n[0].channel.id : null,
    f = (0, k.useIsNewMessageRequestHomeCountEnabled)({
      location: "message-request-page-web"
    });
  s.useEffect(() => {
    f && null != d && (0, E.ackMessageRequest)(d)
  }, [d, f]);
  let h = s.useCallback(() => {
      (0, c.showToast)((0, c.createToast)(en.default.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, c.ToastType.FAILURE))
    }, []),
    {
      rejectAll: _
    } = (0, Y.useMessageRequestActions)({
      onError: h
    }),
    m = (0, S.default)("message-requests-list"),
    {
      channelId: p
    } = (0, W.useMessageRequestSidebarState)(),
    I = s.useCallback(() => {
      _(n.map(e => e.channel.id))
    }, [n, _]),
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
    navigator: m,
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
  } = e, s = (0, u.useStateFromStores)([y.default], () => y.default.getSidebarState(y.MESSAGE_REQUESTS_BASE_CHANNEL_ID)), l = (0, u.useStateFromStores)([D.default], () => D.default.getChannel(null == s ? void 0 : s.channelId));
  if (null == s || s.type !== L.SidebarType.VIEW_MESSAGE_REQUEST || null == l || !l.isPrivate()) return null;
  let i = t - $.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH;
  return (0, a.jsx)(p.default, {
    sidebarType: p.ChatSidebarType.MessageRequestSidebar,
    maxWidth: i,
    onWidthChange: n,
    children: (0, a.jsx)(I.default, {
      channel: l,
      baseChannelId: y.MESSAGE_REQUESTS_BASE_CHANNEL_ID
    })
  })
}
let er = function(e) {
    let {
      markAsDismissed: t
    } = e;
    return (0, a.jsx)(P.default, {
      header: en.default.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
      content: en.default.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT_TEENS,
      buttonCTA: en.default.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
      className: ea.messageRequestCoachmark,
      onClick: () => t(ee.ContentDismissActionType.UNKNOWN),
      markAsDismissed: t,
      caretPosition: P.CaretPosition.TOP_CENTER,
      headerClassName: ea.__invalid_header
    })
  },
  eo = e => {
    let t = (0, H.default)(),
      n = () => b.default.hasLayers() || (0, c.hasAnyModalOpen)(),
      l = (0, u.useStateFromStores)([m.default], () => m.default.useReducedMotion);
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
          }) : (0, a.jsx)(P.default, {
            header: en.default.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
            content: en.default.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT,
            buttonCTA: en.default.Messages.MESSAGE_REQUESTS_COACHMARK_CONFIRM,
            secondaryButtonCTA: en.default.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
            className: ea.messageRequestCoachmark,
            onClick: e => {
              e.stopPropagation(), h.default.open($.UserSettingsSections.PRIVACY_AND_SAFETY, null, {
                scrollPosition: et.PrivacyAndSafetyScrollPositions.MESSAGE_REQUESTS
              })
            },
            markAsDismissed: r,
            caretPosition: P.CaretPosition.TOP_CENTER,
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
let ed = (0, _.default)(function(e) {
  let {
    width: t
  } = e, n = (0, K.useMessageRequestsCount)();
  s.useEffect(() => {
    f.setHomeLink($.Routes.MESSAGE_REQUESTS), (0, M.trackAppUIViewed)("message-requests"), G.default.track($.AnalyticEvents.MESSAGE_REQUESTS_VIEWED, {
      num_message_requests: n
    }), v.default.increment({
      name: o.MetricEvents.MESSAGE_REQUEST_VIEW
    })
  }, []);
  let l = (0, u.useStateFromStores)([x.default], () => x.default.theme),
    r = (0, q.useSpamMessageRequestCount)(),
    [d, E] = s.useState(!1),
    h = (0, u.useStateFromStores)([y.default], () => {
      let e = y.default.getSidebarState(y.MESSAGE_REQUESTS_BASE_CHANNEL_ID);
      return null != e && e.type === L.SidebarType.VIEW_MESSAGE_REQUEST ? e : null
    }),
    _ = null == h ? void 0 : h.channelId,
    C = null != h,
    m = (0, F.useIsEitherTypeOfMessageRequest)(_),
    S = (0, B.useHasUserRepliedInChannel)(_);
  s.useEffect(() => {
    null != _ && !m && S && C && ((0, R.transitionToChannel)(_), O.default.closeChannelSidebar(y.MESSAGE_REQUESTS_BASE_CHANNEL_ID))
  }, [_, S, C, m]);
  let [p, I] = s.useState(J.MessageRequestSections.REQUESTS);
  return (0, g.usePageTitle)({
    location: en.default.Messages.MESSAGE_REQUESTS
  }), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: i()(es.chat, ea.container, {
        [es.threadSidebarOpen]: C,
        [es.threadSidebarFloating]: C && d
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
    }), C && (0, a.jsx)(ei, {
      pageWidth: t,
      onSidebarResize: (e, t) => {
        E(t)
      }
    })]
  })
});
t.default = ed