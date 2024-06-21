n(47120);
var i = n(735250),
  s = n(470079),
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
  g = n(607070),
  p = n(209613),
  N = n(325708),
  T = n(320149),
  C = n(252618),
  S = n(605236),
  A = n(243778),
  f = n(984370),
  Z = n(797614),
  v = n(359110),
  L = n(6025),
  O = n(897473),
  R = n(108427),
  x = n(970731),
  M = n(210887),
  P = n(433355),
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
  ei = n(175803);

function es() {
  let e = s.useRef(null),
    t = (0, Y.q)(),
    n = (0, z.Z)(),
    l = (0, H.K)(),
    c = (0, m.N)(),
    u = n.length > 0 ? null == n ? void 0 : n[0].channel.id : null,
    E = (0, G.e)({
      location: "message-request-page-web"
    });
  s.useEffect(() => {
    if (!!E && null != u)(0, h.ES)(u)
  }, [u, E]);
  let _ = s.useCallback(() => {
      (0, d.showToast)((0, d.createToast)(et.Z.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, d.ToastType.FAILURE))
    }, []),
    {
      rejectAll: I
    } = (0, V.m)({
      onError: _
    }),
    g = (0, p.Z)("message-requests-list"),
    {
      channelId: N
    } = (0, F._)(),
    T = s.useCallback(() => {
      I(n.map(e => e.channel.id))
    }, [n, I]),
    C = s.useCallback(e => {
      var t, s;
      let {
        row: r
      } = e, o = n[r], c = null === (s = n[r + 1]) || void 0 === s ? void 0 : null === (t = s.channel) || void 0 === t ? void 0 : t.id, u = o.channel.id;
      return (0, i.jsx)(q.Z, {
        index: r,
        className: a()({
          [en.selected]: null != N && N === u,
          [en.siblingSelected]: null != N && N === c
        }),
        channel: o.channel,
        user: o.user,
        hasSingleMessageRequest: l
      }, u)
    }, [l, n, N]),
    S = s.useCallback(() => (0, i.jsxs)(y.Z, {
      className: en.sectionTitle,
      children: [t > 0 ? et.Z.Messages.MESSAGE_REQUESTS_PAGE_TITLE_WITH_COUNT.format({
        count: t
      }) : et.Z.Messages.MESSAGE_REQUESTS_PAGE_TITLE, c && t > 0 ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.Text, {
          className: en.titleDivider,
          variant: "eyebrow",
          color: "header-secondary",
          tag: "span",
          children: "•"
        }), (0, i.jsx)(d.Button, {
          onClick: T,
          look: d.ButtonLooks.LINK,
          color: d.ButtonColors.LINK,
          size: d.ButtonSizes.SMALL,
          className: en.clearAllButton,
          "aria-label": et.Z.Messages.MESSAGE_REQUESTS_CLEAR_ALL,
          children: et.Z.Messages.MESSAGE_REQUESTS_CLEAR_ALL
        })]
      }) : null]
    }, "title"), [t, T, c]);
  return (n.length !== t && Z.Z.increment({
    name: o.V.MESSAGE_REQUEST_COUNT_DRIFT
  }), 0 === n.length) ? (0, i.jsx)(K.Z, {
    section: X.pS.REQUESTS
  }) : (0, i.jsx)(r.bG, {
    navigator: g,
    children: (0, i.jsx)(r.SJ, {
      children: t => {
        let {
          ref: s,
          role: l,
          ...a
        } = t;
        return (0, i.jsx)(d.List, {
          className: en.list,
          innerRole: l,
          innerAriaLabel: et.Z.Messages.MESSAGE_REQUESTS,
          ref: t => {
            var n;
            e.current = t, s.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null
          },
          paddingTop: 24,
          paddingBottom: 24,
          sectionHeight: X.oi,
          rowHeight: X.WN,
          renderSection: S,
          renderRow: C,
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
  } = e, s = (0, c.e7)([P.ZP], () => P.ZP.getSidebarState(P.uZ)), l = (0, c.e7)([D.Z], () => D.Z.getChannel(null == s ? void 0 : s.channelId));
  if (null == s || s.type !== O.tI.VIEW_MESSAGE_REQUEST || null == l || !l.isPrivate()) return null;
  let a = t - J.R7I;
  return (0, i.jsx)(N.Z, {
    sidebarType: N.y.MessageRequestSidebar,
    maxWidth: a,
    onWidthChange: n,
    children: (0, i.jsx)(T.Z, {
      channel: l,
      baseChannelId: P.uZ
    })
  })
}
let ea = function(e) {
    let {
      markAsDismissed: t
    } = e;
    return (0, i.jsx)(x.ZP, {
      header: et.Z.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
      content: et.Z.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT_TEENS,
      buttonCTA: et.Z.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
      className: en.messageRequestCoachmark,
      onClick: () => t($.L.UNKNOWN),
      markAsDismissed: t,
      caretPosition: x.DF.TOP_CENTER,
      headerClassName: en.__invalid_header
    })
  },
  er = e => {
    let t = (0, B.Z)(),
      n = () => b.Z.hasLayers() || (0, d.hasAnyModalOpen)(),
      l = (0, c.e7)([g.Z], () => g.Z.useReducedMotion);
    return s.useEffect(() => {
      (0, S.kk)(u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK)
    }, []), (0, i.jsx)(A.Z, {
      contentTypes: [u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
      children: s => {
        let {
          visibleContent: a,
          markAsDismissed: r
        } = s;
        if (a === u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK) return (0, i.jsx)(d.Popout, {
          renderPopout: () => t ? (0, i.jsx)(ea, {
            markAsDismissed: r
          }) : (0, i.jsx)(x.ZP, {
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
            caretPosition: x.DF.TOP_CENTER,
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
  return t === X.pS.SPAM ? (0, i.jsx)(Q.Z, {}) : (0, i.jsx)(es, {})
}
let ec = (0, I.Z)(function(e) {
  let {
    width: t
  } = e, n = (0, Y.q)();
  s.useEffect(() => {
    E.Y(J.Z5c.MESSAGE_REQUESTS), (0, R.e)("message-requests"), j.default.track(J.rMx.MESSAGE_REQUESTS_VIEWED, {
      num_message_requests: n
    }), Z.Z.increment({
      name: o.V.MESSAGE_REQUEST_VIEW
    })
  }, []);
  let l = (0, c.e7)([M.Z], () => M.Z.theme),
    r = (0, W.w)(),
    [u, h] = s.useState(!1),
    _ = (0, c.e7)([P.ZP], () => {
      let e = P.ZP.getSidebarState(P.uZ);
      return null != e && e.type === O.tI.VIEW_MESSAGE_REQUEST ? e : null
    }),
    I = null == _ ? void 0 : _.channelId,
    m = null != _,
    g = (0, k.T)(I),
    p = (0, w.J)(I);
  s.useEffect(() => {
    null != I && !g && p && m && ((0, v.Kh)(I), L.Z.closeChannelSidebar(P.uZ))
  }, [I, p, m, g]);
  let [N, T] = s.useState(X.pS.REQUESTS);
  return (0, C.Tt)({
    location: et.Z.Messages.MESSAGE_REQUESTS
  }), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: a()(ei.chat, en.container, {
        [ei.threadSidebarOpen]: m,
        [ei.threadSidebarFloating]: m && u
      }),
      children: [(0, i.jsxs)(f.Z, {
        className: (0, U.Q)(l),
        toolbar: !0,
        children: [(0, i.jsx)(f.Z.Icon, {
          icon: d.EnvelopeIcon,
          "aria-hidden": !0
        }), (0, i.jsx)(er, {
          children: (0, i.jsx)(f.Z.Title, {
            children: et.Z.Messages.MESSAGE_REQUESTS
          })
        }), (0, i.jsx)(f.Z.Divider, {}), (0, i.jsxs)(d.TabBar, {
          "aria-label": et.Z.Messages.MESSAGE_REQUESTS,
          selectedItem: N,
          type: "top-pill",
          onItemSelect: e => {
            T(e)
          },
          className: en.__invalid_tabBar,
          children: [(0, i.jsx)(d.TabBar.Item, {
            id: X.pS.REQUESTS,
            className: en.__invalid_item,
            children: et.Z.Messages.MESSAGE_REQUESTS_REQUESTS_TAB_TITLE
          }), (0, i.jsx)(d.TabBar.Item, {
            id: X.pS.SPAM,
            className: en.__invalid_item,
            children: 0 === r ? et.Z.Messages.MESSAGE_REQUESTS_SPAM_TAB_TITLE : et.Z.Messages.MESSAGE_REQUESTS_SPAM_TAB_TITLE_WITH_COUNT.format({
              count: r
            })
          })]
        })]
      }), (0, i.jsx)("div", {
        className: ei.content,
        children: (0, i.jsx)(eo, {
          section: N
        })
      })]
    }), m && (0, i.jsx)(el, {
      pageWidth: t,
      onSidebarResize: (e, t) => {
        h(t)
      }
    })]
  })
});
t.Z = ec