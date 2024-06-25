n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(91192),
  o = n(286379),
  c = n(442837),
  u = n(704215),
  d = n(481060),
  E = n(150063),
  h = n(45114),
  _ = n(230711),
  I = n(112724),
  m = n(183126),
  T = n(607070),
  g = n(209613),
  p = n(325708),
  N = n(320149),
  S = n(252618),
  C = n(605236),
  A = n(243778),
  f = n(984370),
  Z = n(797614),
  L = n(359110),
  O = n(6025),
  v = n(897473),
  R = n(108427),
  P = n(970731),
  x = n(210887),
  M = n(433355),
  D = n(592125),
  b = n(819640),
  y = n(151827),
  j = n(626135),
  U = n(792125),
  G = n(879041),
  w = n(647090),
  k = n(385956),
  B = n(610697),
  H = n(26373),
  V = n(486622),
  F = n(922409),
  Y = n(899740),
  z = n(177033),
  W = n(355350),
  K = n(307947),
  q = n(96479),
  Q = n(480874),
  X = n(687683),
  J = n(981631),
  $ = n(921944),
  ee = n(526761),
  et = n(689938),
  en = n(212044),
  es = n(175803);

function ei() {
  let e = i.useRef(null),
    t = (0, Y.q)(),
    n = (0, z.Z)(),
    l = (0, H.K)(),
    c = (0, m.N)(),
    u = n.length > 0 ? null == n ? void 0 : n[0].channel.id : null,
    E = (0, G.e)({
      location: "message-request-page-web"
    });
  i.useEffect(() => {
    if (!!E && null != u)(0, h.ES)(u)
  }, [u, E]);
  let _ = i.useCallback(() => {
      (0, d.showToast)((0, d.createToast)(et.Z.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, d.ToastType.FAILURE))
    }, []),
    {
      rejectAll: I
    } = (0, V.m)({
      onError: _
    }),
    T = (0, g.Z)("message-requests-list"),
    {
      channelId: p
    } = (0, F._)(),
    N = i.useCallback(() => {
      I(n.map(e => e.channel.id))
    }, [n, I]),
    S = i.useCallback(e => {
      var t, i;
      let {
        row: r
      } = e, o = n[r], c = null === (i = n[r + 1]) || void 0 === i ? void 0 : null === (t = i.channel) || void 0 === t ? void 0 : t.id, u = o.channel.id;
      return (0, s.jsx)(q.Z, {
        index: r,
        className: a()({
          [en.selected]: null != p && p === u,
          [en.siblingSelected]: null != p && p === c
        }),
        channel: o.channel,
        user: o.user,
        hasSingleMessageRequest: l
      }, u)
    }, [l, n, p]),
    C = i.useCallback(() => (0, s.jsxs)(y.Z, {
      className: en.sectionTitle,
      children: [t > 0 ? et.Z.Messages.MESSAGE_REQUESTS_PAGE_TITLE_WITH_COUNT.format({
        count: t
      }) : et.Z.Messages.MESSAGE_REQUESTS_PAGE_TITLE, c && t > 0 ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(d.Text, {
          className: en.titleDivider,
          variant: "eyebrow",
          color: "header-secondary",
          tag: "span",
          children: "•"
        }), (0, s.jsx)(d.Button, {
          onClick: N,
          look: d.ButtonLooks.LINK,
          color: d.ButtonColors.LINK,
          size: d.ButtonSizes.SMALL,
          className: en.clearAllButton,
          "aria-label": et.Z.Messages.MESSAGE_REQUESTS_CLEAR_ALL,
          children: et.Z.Messages.MESSAGE_REQUESTS_CLEAR_ALL
        })]
      }) : null]
    }, "title"), [t, N, c]);
  return (n.length !== t && Z.Z.increment({
    name: o.V.MESSAGE_REQUEST_COUNT_DRIFT
  }), 0 === n.length) ? (0, s.jsx)(K.Z, {
    section: X.pS.REQUESTS
  }) : (0, s.jsx)(r.bG, {
    navigator: T,
    children: (0, s.jsx)(r.SJ, {
      children: t => {
        let {
          ref: i,
          role: l,
          ...a
        } = t;
        return (0, s.jsx)(d.List, {
          className: en.list,
          innerRole: l,
          innerAriaLabel: et.Z.Messages.MESSAGE_REQUESTS,
          ref: t => {
            var n;
            e.current = t, i.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null
          },
          paddingTop: 24,
          paddingBottom: 24,
          sectionHeight: X.oi,
          rowHeight: X.WN,
          renderSection: C,
          renderRow: S,
          sections: [n.length],
          chunkSize: 30,
          fade: !0,
          ...a
        }, "message-requests-list")
      }
    })
  })
}

function el(e) {
  let {
    pageWidth: t,
    onSidebarResize: n
  } = e, i = (0, c.e7)([M.ZP], () => M.ZP.getSidebarState(M.uZ)), l = (0, c.e7)([D.Z], () => D.Z.getChannel(null == i ? void 0 : i.channelId));
  if (null == i || i.type !== v.tI.VIEW_MESSAGE_REQUEST || null == l || !l.isPrivate()) return null;
  let a = t - J.R7I;
  return (0, s.jsx)(p.Z, {
    sidebarType: p.y.MessageRequestSidebar,
    maxWidth: a,
    onWidthChange: n,
    children: (0, s.jsx)(N.Z, {
      channel: l,
      baseChannelId: M.uZ
    })
  })
}
let ea = function(e) {
    let {
      markAsDismissed: t
    } = e;
    return (0, s.jsx)(P.ZP, {
      header: et.Z.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
      content: et.Z.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT_TEENS,
      buttonCTA: et.Z.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
      className: en.messageRequestCoachmark,
      onClick: () => t($.L.UNKNOWN),
      markAsDismissed: t,
      caretPosition: P.DF.TOP_CENTER,
      headerClassName: en.__invalid_header
    })
  },
  er = e => {
    let t = (0, B.Z)(),
      n = () => b.Z.hasLayers() || (0, d.hasAnyModalOpen)(),
      l = (0, c.e7)([T.Z], () => T.Z.useReducedMotion);
    return i.useEffect(() => {
      (0, C.kk)(u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK)
    }, []), (0, s.jsx)(A.Z, {
      contentTypes: [u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
      children: i => {
        let {
          visibleContent: a,
          markAsDismissed: r
        } = i;
        if (a === u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK) return (0, s.jsx)(d.Popout, {
          renderPopout: () => t ? (0, s.jsx)(ea, {
            markAsDismissed: r
          }) : (0, s.jsx)(P.ZP, {
            header: et.Z.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
            content: et.Z.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT,
            buttonCTA: et.Z.Messages.MESSAGE_REQUESTS_COACHMARK_CONFIRM,
            secondaryButtonCTA: et.Z.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
            className: en.messageRequestCoachmark,
            onClick: e => {
              e.stopPropagation(), _.Z.open(J.oAB.PRIVACY_AND_SAFETY, null, {
                scrollPosition: ee.to.MESSAGE_REQUESTS
              })
            },
            markAsDismissed: r,
            caretPosition: P.DF.TOP_CENTER,
            headerClassName: en.__invalid_header
          }),
          position: "bottom",
          align: "center",
          animation: l ? d.Popout.Animation.NONE : d.Popout.Animation.TRANSLATE,
          shouldShow: !n(),
          spacing: 16,
          children: () => e.children
        });
        return e.children
      }
    })
  };

function eo(e) {
  let {
    section: t
  } = e;
  return t === X.pS.SPAM ? (0, s.jsx)(Q.Z, {}) : (0, s.jsx)(ei, {})
}
let ec = (0, I.Z)(function(e) {
  let {
    width: t
  } = e, n = (0, Y.q)();
  i.useEffect(() => {
    E.Y(J.Z5c.MESSAGE_REQUESTS), (0, R.e)("message-requests"), j.default.track(J.rMx.MESSAGE_REQUESTS_VIEWED, {
      num_message_requests: n
    }), Z.Z.increment({
      name: o.V.MESSAGE_REQUEST_VIEW
    })
  }, []);
  let l = (0, c.e7)([x.Z], () => x.Z.theme),
    r = (0, W.w)(),
    [u, h] = i.useState(!1),
    _ = (0, c.e7)([M.ZP], () => {
      let e = M.ZP.getSidebarState(M.uZ);
      return null != e && e.type === v.tI.VIEW_MESSAGE_REQUEST ? e : null
    }),
    I = null == _ ? void 0 : _.channelId,
    m = null != _,
    T = (0, k.T)(I),
    g = (0, w.J)(I);
  i.useEffect(() => {
    null != I && !T && g && m && ((0, L.Kh)(I), O.Z.closeChannelSidebar(M.uZ))
  }, [I, g, m, T]);
  let [p, N] = i.useState(X.pS.REQUESTS);
  return (0, S.Tt)({
    location: et.Z.Messages.MESSAGE_REQUESTS
  }), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)("div", {
      className: a()(es.chat, en.container, {
        [es.threadSidebarOpen]: m,
        [es.threadSidebarFloating]: m && u
      }),
      children: [(0, s.jsxs)(f.Z, {
        className: (0, U.Q)(l),
        toolbar: !0,
        children: [(0, s.jsx)(f.Z.Icon, {
          icon: d.EnvelopeIcon,
          "aria-hidden": !0
        }), (0, s.jsx)(er, {
          children: (0, s.jsx)(f.Z.Title, {
            children: et.Z.Messages.MESSAGE_REQUESTS
          })
        }), (0, s.jsx)(f.Z.Divider, {}), (0, s.jsxs)(d.TabBar, {
          "aria-label": et.Z.Messages.MESSAGE_REQUESTS,
          selectedItem: p,
          type: "top-pill",
          onItemSelect: e => {
            N(e)
          },
          className: en.__invalid_tabBar,
          children: [(0, s.jsx)(d.TabBar.Item, {
            id: X.pS.REQUESTS,
            className: en.__invalid_item,
            children: et.Z.Messages.MESSAGE_REQUESTS_REQUESTS_TAB_TITLE
          }), (0, s.jsx)(d.TabBar.Item, {
            id: X.pS.SPAM,
            className: en.__invalid_item,
            children: 0 === r ? et.Z.Messages.MESSAGE_REQUESTS_SPAM_TAB_TITLE : et.Z.Messages.MESSAGE_REQUESTS_SPAM_TAB_TITLE_WITH_COUNT.format({
              count: r
            })
          })]
        })]
      }), (0, s.jsx)("div", {
        className: es.content,
        children: (0, s.jsx)(eo, {
          section: p
        })
      })]
    }), m && (0, s.jsx)(el, {
      pageWidth: t,
      onSidebarResize: (e, t) => {
        h(t)
      }
    })]
  })
});
t.Z = ec