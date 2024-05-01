"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("924826"),
  o = a("286379"),
  u = a("442837"),
  d = a("524437"),
  c = a("481060"),
  f = a("150063"),
  E = a("230711"),
  h = a("112724"),
  _ = a("183126"),
  C = a("607070"),
  m = a("209613"),
  S = a("325708"),
  p = a("320149"),
  I = a("252618"),
  g = a("605236"),
  T = a("243778"),
  A = a("984370"),
  N = a("797614"),
  v = a("359110"),
  R = a("6025"),
  L = a("897473"),
  O = a("108427"),
  M = a("970731"),
  P = a("210887"),
  x = a("433355"),
  y = a("592125"),
  D = a("819640"),
  b = a("916187"),
  U = a("151827"),
  j = a("626135"),
  G = a("792125"),
  w = a("647090"),
  k = a("385956"),
  B = a("610697"),
  F = a("26373"),
  H = a("486622"),
  V = a("922409"),
  Y = a("899740"),
  W = a("177033"),
  K = a("355350"),
  z = a("307947"),
  q = a("96479"),
  Q = a("480874"),
  Z = a("687683"),
  X = a("981631"),
  J = a("921944"),
  $ = a("526761"),
  ee = a("689938"),
  et = a("89683"),
  ea = a("749185");

function en() {
  let e = s.useRef(null),
    t = (0, Y.useMessageRequestsCount)(),
    a = (0, W.default)(),
    l = (0, F.useListHasSingleMessageRequest)(),
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
      f(a.map(e => e.channel.id))
    }, [a, f]),
    S = s.useCallback(e => {
      var t, s;
      let {
        row: r
      } = e, o = a[r], u = null === (s = a[r + 1]) || void 0 === s ? void 0 : null === (t = s.channel) || void 0 === t ? void 0 : t.id, d = o.channel.id;
      return (0, n.jsx)(q.default, {
        index: r,
        className: i()({
          [et.selected]: null != h && h === d,
          [et.siblingSelected]: null != h && h === u
        }),
        channel: o.channel,
        user: o.user,
        hasSingleMessageRequest: l
      }, d)
    }, [l, a, h]),
    p = s.useCallback(() => (0, n.jsxs)(U.default, {
      className: et.sectionTitle,
      children: [t > 0 ? ee.default.Messages.MESSAGE_REQUESTS_PAGE_TITLE_WITH_COUNT.format({
        count: t
      }) : ee.default.Messages.MESSAGE_REQUESTS_PAGE_TITLE, u && t > 0 ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(c.Text, {
          className: et.titleDivider,
          variant: "eyebrow",
          color: "header-secondary",
          tag: "span",
          children: "•"
        }), (0, n.jsx)(c.Button, {
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
  return (a.length !== t && N.default.increment({
    name: o.MetricEvents.MESSAGE_REQUEST_COUNT_DRIFT
  }), 0 === a.length) ? (0, n.jsx)(z.default, {
    section: Z.MessageRequestSections.REQUESTS
  }) : (0, n.jsx)(r.ListNavigatorProvider, {
    navigator: E,
    children: (0, n.jsx)(r.ListNavigatorContainer, {
      children: t => {
        let {
          ref: s,
          role: l,
          ...i
        } = t;
        return (0, n.jsx)(c.List, {
          className: et.list,
          innerRole: l,
          innerAriaLabel: ee.default.Messages.MESSAGE_REQUESTS,
          ref: t => {
            var a;
            e.current = t, s.current = null !== (a = null == t ? void 0 : t.getScrollerNode()) && void 0 !== a ? a : null
          },
          paddingTop: 24,
          paddingBottom: 24,
          sectionHeight: Z.LIST_SECTION_HEIGHT,
          rowHeight: Z.LIST_ROW_HEIGHT,
          renderSection: p,
          renderRow: S,
          sections: [a.length],
          chunkSize: 30,
          fade: !0,
          ...i
        }, "message-requests-list")
      }
    })
  })
}

function es(e) {
  let {
    pageWidth: t,
    onSidebarResize: a
  } = e, s = (0, u.useStateFromStores)([x.default], () => x.default.getSidebarState(x.MESSAGE_REQUESTS_BASE_CHANNEL_ID)), l = (0, u.useStateFromStores)([y.default], () => y.default.getChannel(null == s ? void 0 : s.channelId));
  if (null == s || s.type !== L.SidebarType.VIEW_MESSAGE_REQUEST || null == l || !l.isPrivate()) return null;
  let i = t - X.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH;
  return (0, n.jsx)(S.default, {
    sidebarType: S.ChatSidebarType.MessageRequestSidebar,
    maxWidth: i,
    onWidthChange: a,
    children: (0, n.jsx)(p.default, {
      channel: l,
      baseChannelId: x.MESSAGE_REQUESTS_BASE_CHANNEL_ID
    })
  })
}
let el = function(e) {
    let {
      markAsDismissed: t
    } = e;
    return (0, n.jsx)(M.default, {
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
  ei = e => {
    let t = (0, B.default)(),
      a = () => D.default.hasLayers() || (0, c.hasAnyModalOpen)(),
      l = (0, u.useStateFromStores)([C.default], () => C.default.useReducedMotion);
    return s.useEffect(() => {
      (0, g.requestMarkDismissibleContentAsShown)(d.DismissibleContent.MESSAGE_REQUEST_SETTINGS_COACH_MARK)
    }, []), (0, n.jsx)(T.default, {
      contentTypes: [d.DismissibleContent.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
      children: s => {
        let {
          visibleContent: i,
          markAsDismissed: r
        } = s;
        if (i === d.DismissibleContent.MESSAGE_REQUEST_SETTINGS_COACH_MARK) return (0, n.jsx)(c.Popout, {
          renderPopout: () => t ? (0, n.jsx)(el, {
            markAsDismissed: r
          }) : (0, n.jsx)(M.default, {
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
          animation: l ? c.Popout.Animation.NONE : c.Popout.Animation.TRANSLATE,
          shouldShow: !a(),
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
  return t === Z.MessageRequestSections.SPAM ? (0, n.jsx)(Q.default, {}) : (0, n.jsx)(en, {})
}
let eo = (0, h.default)(function(e) {
  let {
    width: t
  } = e, a = (0, Y.useMessageRequestsCount)();
  s.useEffect(() => {
    f.setHomeLink(X.Routes.MESSAGE_REQUESTS), (0, O.trackAppUIViewed)("message-requests"), j.default.track(X.AnalyticEvents.MESSAGE_REQUESTS_VIEWED, {
      num_message_requests: a
    }), N.default.increment({
      name: o.MetricEvents.MESSAGE_REQUEST_VIEW
    })
  }, []);
  let l = (0, u.useStateFromStores)([P.default], () => P.default.theme),
    r = (0, K.useSpamMessageRequestCount)(),
    [d, E] = s.useState(!1),
    h = (0, u.useStateFromStores)([x.default], () => {
      let e = x.default.getSidebarState(x.MESSAGE_REQUESTS_BASE_CHANNEL_ID);
      return null != e && e.type === L.SidebarType.VIEW_MESSAGE_REQUEST ? e : null
    }),
    _ = null == h ? void 0 : h.channelId,
    C = null != h,
    m = (0, k.useIsEitherTypeOfMessageRequest)(_),
    S = (0, w.useHasUserRepliedInChannel)(_);
  s.useEffect(() => {
    null != _ && !m && S && C && ((0, v.transitionToChannel)(_), R.default.closeChannelSidebar(x.MESSAGE_REQUESTS_BASE_CHANNEL_ID))
  }, [_, S, C, m]);
  let [p, g] = s.useState(Z.MessageRequestSections.REQUESTS);
  return (0, I.usePageTitle)({
    location: ee.default.Messages.MESSAGE_REQUESTS
  }), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: i()(ea.chat, et.container, {
        [ea.threadSidebarOpen]: C,
        [ea.threadSidebarFloating]: C && d
      }),
      children: [(0, n.jsxs)(A.default, {
        className: (0, G.getThemeClass)(l),
        toolbar: !0,
        children: [(0, n.jsx)(A.default.Icon, {
          icon: b.default,
          "aria-hidden": !0
        }), (0, n.jsx)(ei, {
          children: (0, n.jsx)(A.default.Title, {
            children: ee.default.Messages.MESSAGE_REQUESTS
          })
        }), (0, n.jsx)(A.default.Divider, {}), (0, n.jsxs)(c.TabBar, {
          "aria-label": ee.default.Messages.MESSAGE_REQUESTS,
          selectedItem: p,
          type: "top-pill",
          onItemSelect: e => {
            g(e)
          },
          className: et.__invalid_tabBar,
          children: [(0, n.jsx)(c.TabBar.Item, {
            id: Z.MessageRequestSections.REQUESTS,
            className: et.__invalid_item,
            children: ee.default.Messages.MESSAGE_REQUESTS_REQUESTS_TAB_TITLE
          }), (0, n.jsx)(c.TabBar.Item, {
            id: Z.MessageRequestSections.SPAM,
            className: et.__invalid_item,
            children: 0 === r ? ee.default.Messages.MESSAGE_REQUESTS_SPAM_TAB_TITLE : ee.default.Messages.MESSAGE_REQUESTS_SPAM_TAB_TITLE_WITH_COUNT.format({
              count: r
            })
          })]
        })]
      }), (0, n.jsx)("div", {
        className: ea.content,
        children: (0, n.jsx)(er, {
          section: p
        })
      })]
    }), C && (0, n.jsx)(es, {
      pageWidth: t,
      onSidebarResize: (e, t) => {
        E(t)
      }
    })]
  })
});
t.default = eo