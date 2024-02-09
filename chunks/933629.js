"use strict";
n.r(t), n.d(t, {
  EXPRESSION_TOOLTIP_PROPS: function() {
    return Z
  },
  renderVideoComponent: function() {
    return X
  },
  renderAudioComponent: function() {
    return K
  },
  renderVoiceMessageAudioComponent: function() {
    return q
  },
  renderImageComponent: function() {
    return Q
  },
  renderMaskedLinkComponent: function() {
    return $
  },
  renderPlaintextFilePreview: function() {
    return ee
  },
  JumpBarType: function() {
    return l
  },
  JumpToPresentBar: function() {
    return et
  },
  ErrorLoadingBar: function() {
    return en
  },
  NewMessagesBar: function() {
    return el
  },
  NewTopicsBar: function() {
    return ea
  },
  TopicsPill: function() {
    return ei
  },
  renderClickableTooltipNode: function() {
    return er
  },
  MessagePopoutContent: function() {
    return eo
  },
  PopoutLoadingAnimation: function() {
    return eu
  }
}), n("222007");
var l, a, s = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  u = n("917351"),
  d = n.n(u),
  c = n("118810"),
  m = n("446674"),
  f = n("77078"),
  h = n("819689"),
  p = n("267363"),
  g = n("817480"),
  E = n("340616"),
  C = n("115718"),
  v = n("84339"),
  I = n("298878"),
  S = n("793237"),
  _ = n("347738"),
  x = n("584998"),
  N = n("845579"),
  T = n("876308"),
  M = n("660478"),
  A = n("697218"),
  O = n("663175"),
  j = n("888673"),
  y = n("839952"),
  L = n("476765"),
  R = n("62843"),
  b = n("461380"),
  P = n("171710"),
  D = n("945330"),
  w = n("909004"),
  U = n("599110"),
  k = n("449008"),
  V = n("874276"),
  F = n("49111"),
  B = n("894282"),
  H = n("995307"),
  G = n("719347"),
  W = n("782340"),
  z = n("620109");
let Z = {
    delay: 300,
    position: "top"
  },
  J = e => t => {
    null == e || e(t), (0, V.setVolume)(t)
  },
  Y = e => t => {
    null == e || e(t), (0, V.setMuted)(t)
  };

function X(e) {
  let {
    onVolumeChange: t,
    onMute: n,
    volume: l,
    autoMute: a,
    alt: r,
    renderAdjacentContent: o,
    renderOverlayContent: u,
    ...d
  } = e, c = J(t), m = Y(n);
  return l = null == l ? V.getVolume : l, a = null == a ? V.getMuted : a, (0, s.jsxs)(i.Fragment, {
    children: [(0, s.jsx)(j.default, {
      ...d,
      alt: r,
      volume: l,
      autoMute: a,
      onVolumeChange: c,
      onMute: m,
      renderLinkComponent: $,
      renderOverlayContent: u
    }), null != o && o()]
  })
}

function K(e) {
  let {
    onVolumeChange: t,
    volume: n,
    onMute: l,
    onVolumeShow: a,
    onVolumeHide: r,
    renderAdjacentContent: o,
    ...u
  } = e, d = J(t), c = Y(l);
  return n = null == n ? V.getVolume : n, (0, s.jsxs)(i.Fragment, {
    children: [(0, s.jsx)(O.default, {
      ...u,
      onVolumeChange: d,
      onMute: c,
      onVolumeShow: a,
      onVolumeHide: r,
      volume: n,
      autoMute: () => !1,
      renderLinkComponent: $
    }), null != o && o()]
  })
}

function q(e) {
  let {
    onVolumeChange: t,
    volume: n,
    onMute: l,
    ...a
  } = e, i = J(t), r = Y(l);
  return n = null == n ? V.getVolume : n, (0, s.jsx)(T.default, {
    ...a,
    onVolumeChange: i,
    onMute: r,
    volume: n
  })
}

function Q(e) {
  let {
    alt: t,
    hiddenSpoilers: n,
    renderAdjacentContent: l,
    containerClassName: a,
    imageContainerClassName: r,
    disableAltTextDisplay: u = !1,
    mediaLayoutType: d,
    imageContainerStyle: c
  } = e, m = d === G.MediaLayoutType.MOSAIC, h = !u && N.ViewImageDescriptions.getSetting() && null != t && "" !== t && !0 !== n, p = e => {
    let {
      altText: t
    } = e;
    return (0, s.jsxs)(f.Dialog, {
      "aria-label": W.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
      className: z.mediaMosaicAltTextPopout,
      onKeyDown: e => {
        e.key === B.KeyboardEventKey.Escape && setTimeout(() => {
          var e;
          return null === (e = E.current) || void 0 === e ? void 0 : e.focus()
        }, 0)
      },
      children: [(0, s.jsx)("span", {
        className: z.mediaMosaicAltTextPopoutTitle,
        children: W.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE
      }), (0, s.jsx)("span", {
        className: z.mediaMosaicAltTextPopoutDescription,
        children: t
      })]
    })
  }, E = i.createRef();
  return (0, s.jsxs)("div", {
    className: o(z.imageContent, a),
    children: [(0, s.jsxs)("div", {
      className: o(z.imageContainer, r),
      style: c,
      children: [(0, s.jsx)(g.default, {
        ...e,
        renderLinkComponent: $
      }), null != l && l()]
    }), m && h && (0, s.jsx)("div", {
      className: z.mediaMosaicAltTextContainer,
      children: (0, s.jsx)(f.Popout, {
        animation: f.Popout.Animation.FADE,
        renderPopout: () => (0, s.jsx)(p, {
          altText: t
        }),
        children: e => (0, s.jsx)(f.FocusRing, {
          offset: 4,
          children: (0, s.jsx)("button", {
            ...e,
            type: "button",
            ref: E,
            "aria-label": W.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
            className: z.mediaMosaicAltText,
            children: W.default.Messages.MEDIA_MOSAIC_ALT_TEXT_CTA
          })
        })
      })
    }), !m && h && (0, s.jsx)("span", {
      className: z.altText,
      children: t
    })]
  })
}

function $(e) {
  return (0, s.jsx)(E.default, {
    ...e
  })
}

function ee(e) {
  let {
    renderAdjacentContent: t,
    ...n
  } = e;
  return (0, s.jsxs)(i.Fragment, {
    children: [(0, s.jsx)(y.default, {
      ...n
    }), null != t && t()]
  })
}(a = l || (l = {}))[a.OLD_MESSAGES = 0] = "OLD_MESSAGES", a[a.REPLY = 1] = "REPLY";
let et = e => {
    let {
      type: t = 0,
      onClick: n
    } = e;
    return (0, s.jsx)(R.MessagesInteractionContext.Consumer, {
      children: e => e.disableInteractions ? null : (0, s.jsxs)("div", {
        className: z.jumpToPresentBar,
        children: [(0, s.jsx)(f.FocusRing, {
          offset: 4,
          children: (0, s.jsx)("button", {
            type: "button",
            onClick: n,
            className: z.barButtonMain,
            children: function(e) {
              switch (e) {
                case 0:
                  return W.default.Messages.YOURE_VIEWING_OLDER_MESSAGES;
                case 1:
                  return W.default.Messages.JUMP_BAR_VIEWING_REPLY;
                default:
                  return (0, k.assertNever)(e)
              }
            }(t)
          })
        }), null != n ? (0, s.jsx)(f.FocusRing, {
          offset: 4,
          children: (0, s.jsxs)("button", {
            type: "button",
            onClick: n,
            className: z.barButtonAlt,
            children: [function(e) {
              switch (e) {
                case 0:
                  return W.default.Messages.JUMP_TO_PRESENT;
                case 1:
                  return W.default.Messages.JUMP_TO_ORIGINAL_MESSAGE;
                default:
                  return (0, k.assertNever)(e)
              }
            }(t), (0, s.jsx)(b.default, {
              className: z.barButtonIcon
            })]
          })
        }) : (0, s.jsx)(f.Spinner, {
          type: f.Spinner.Type.PULSING_ELLIPSIS,
          className: z.spinner,
          itemClassName: z.spinnerItem
        })]
      })
    })
  },
  en = e => {
    let {
      onClick: t,
      loading: n
    } = e;
    return (0, s.jsx)(R.MessagesInteractionContext.Consumer, {
      children: e => e.disableInteractions ? null : (0, s.jsxs)(f.Clickable, {
        className: z.messagesErrorBar,
        onClick: t,
        focusProps: {
          offset: {
            top: 4,
            right: 4,
            bottom: 12,
            left: 4
          }
        },
        children: [(0, s.jsx)("div", {
          className: z.barButtonMain,
          children: W.default.Messages.MESSAGES_FAILED_TO_LOAD
        }), n ? (0, s.jsx)(f.Spinner, {
          type: f.Spinner.Type.PULSING_ELLIPSIS,
          className: z.spinner,
          itemClassName: z.spinnerItem
        }) : (0, s.jsx)("div", {
          className: z.barButtonAlt,
          children: W.default.Messages.MESSAGES_FAILED_TO_LOAD_TRY_AGAIN
        })]
      })
    })
  };

function el(e) {
  let {
    content: t,
    channelId: n
  } = e, [l] = i.useState(() => (0, L.uid)("NewMessagesBarJumpToNewMessages_")), a = i.useCallback(() => {
    let e = M.default.ackMessageId(n);
    null != e ? h.default.jumpToMessage({
      channelId: n,
      messageId: e,
      offset: 1,
      context: "Mark As Read"
    }) : h.default.jumpToMessage({
      channelId: n,
      messageId: n,
      offset: 1,
      context: "Mark As Read"
    })
  }, [n]), r = i.useCallback(() => {
    (0, p.ack)(n)
  }, [n]), {
    disableInteractions: u
  } = i.useContext(R.MessagesInteractionContext);
  return u ? null : (0, s.jsxs)("div", {
    className: o(z.newMessagesBar, {
      [z.disableInteractions]: u
    }),
    children: [(0, s.jsx)(f.FocusRing, {
      offset: 4,
      children: (0, s.jsx)("button", {
        type: "button",
        className: z.barButtonMain,
        onClick: a,
        "aria-label": W.default.Messages.JUMP_TO_LAST_UNREAD_MESSAGE,
        "aria-describedby": l,
        children: (0, s.jsx)("span", {
          id: l,
          className: z.span,
          children: t
        })
      })
    }), (0, s.jsx)(f.FocusRing, {
      offset: 4,
      children: (0, s.jsxs)("button", {
        type: "button",
        onClick: r,
        className: z.barButtonAlt,
        children: [W.default.Messages.MARK_AS_READ, (0, s.jsx)(P.default, {
          className: z.barButtonIcon
        })]
      })
    })]
  })
}

function ea(e) {
  var t, n, l;
  let {
    channel: a,
    content: r,
    scrollManager: u
  } = e, {
    disableInteractions: g
  } = i.useContext(R.MessagesInteractionContext), [E, N] = i.useState(null), T = i.useRef(null), [O, j] = i.useState(null), y = i.useRef(null), L = (0, m.useStateFromStoresArray)([_.default], () => {
    var e;
    return null !== (e = _.default.summaries(a.id)) && void 0 !== e ? e : []
  }, [a]), V = (0, v.default)(L);
  i.useEffect(() => {
    !d.isEqual(V, L) && U.default.track(F.AnalyticEvents.SUMMARIES_TOPICS_PILL_VIEWED, {
      num_summaries: L.length,
      message_counts: L.map(e => e.count),
      start_message_ids: L.map(e => e.startId),
      end_message_ids: L.map(e => e.endId),
      num_participants: L.map(e => e.people.length),
      guild_id: a.guild_id,
      channel_id: a.id,
      channel_type: a.type
    })
  }, [L, V, a.guild_id, a.id, a.type]);
  let B = (0, m.useStateFromStores)([A.default], () => {
      var e;
      return null !== (e = null == L ? void 0 : L.map(e => {
        var t;
        return null === (t = e.people) || void 0 === t ? void 0 : t.map(e => {
          var t;
          return null !== (t = A.default.getUser(e)) && void 0 !== t ? t : null
        }).filter(k.isNotNullish)
      })) && void 0 !== e ? e : []
    }, [L], es),
    G = null !== (n = (0, m.useStateFromStores)([_.default], () => _.default.visibleSummaryIndex())) && void 0 !== n ? n : -1,
    Z = null == L ? void 0 : null === (t = L[G]) || void 0 === t ? void 0 : t.topic;
  null == Z && null == E && (null == L ? void 0 : L.length) >= 1 && (Z = null === (l = L[0]) || void 0 === l ? void 0 : l.topic);
  let J = i.useMemo(() => d.debounce(e => {
      var t;
      N(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null)
    }, 64), [N]),
    Y = i.useMemo(() => d.throttle(() => {
      (0, S.setHighlightedSummary)(null)
    }, 1200, {
      trailing: !1
    }), []),
    X = i.useCallback(e => {
      Y(), J(e)
    }, [J, Y]),
    [K, q] = i.useState(!1),
    Q = i.useCallback(() => {
      U.default.track(F.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
        topics_dropdown_open: !K,
        num_summaries: L.length,
        message_counts: L.map(e => e.count),
        start_message_ids: L.map(e => e.startId),
        end_message_ids: L.map(e => e.endId),
        num_participants: L.map(e => e.people.length),
        guild_id: a.guild_id,
        channel_id: a.id,
        channel_type: a.type
      }), q(!K)
    }, [K, L, q, a]),
    $ = i.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H.SummariesTopicClickedSource.PILL_DROPDOWN,
        n = L[e];
      if (null == n) return;
      (0, S.setSelectedSummary)(a.id, n.id), (0, S.setHighlightedSummary)(a.id, n.id);
      let l = () => {
        u.removeScrollCompleteCallback(l), setTimeout(() => {
          u.addAutomaticAnchorCallback(X, !1)
        }, 100)
      };
      u.removeAutomaticAnchorCallback(X), u.addScrollCompleteCallback(l), U.default.track(F.AnalyticEvents.SUMMARIES_TOPIC_CLICKED, {
        source: t,
        message_id: n.startId,
        guild_id: a.guild_id,
        channel_id: a.id,
        channel_type: a.type
      }), h.default.jumpToMessage({
        channelId: a.id,
        messageId: n.startId,
        flash: !0,
        offset: 0,
        jumpType: C.JumpTypes.ANIMATED,
        context: "Summary Jump"
      })
    }, [L, a, X, u]),
    ee = i.useCallback(e => {
      var t;
      q(e);
      let n = null === (t = y.current) || void 0 === t ? void 0 : t.scrollTop;
      null != n && j(n)
    }, []);
  i.useEffect(() => {
    if (null != O && K) {
      var e;
      null === (e = y.current) || void 0 === e || e.scrollTo({
        top: O
      })
    }
  }, [O, K]);
  let et = i.useCallback(e => {
    var t;
    !((0, c.isElement)(e.target) && (null === (t = T.current) || void 0 === t ? void 0 : t.contains(e.target))) && (K && U.default.track(F.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
      topics_dropdown_open: !1,
      num_summaries: L.length,
      message_counts: L.map(e => e.count),
      start_message_ids: L.map(e => e.startId),
      end_message_ids: L.map(e => e.endId),
      num_participants: L.map(e => e.people.length),
      guild_id: a.guild_id,
      channel_id: a.id,
      channel_type: a.type
    }), ee(!1))
  }, [K, L, a, ee]);
  i.useEffect(() => (u.addAutomaticAnchorCallback(X), () => {
    u.removeAutomaticAnchorCallback(X)
  }), [u, X]), (0, S.useSummaryPolling)(a.id, !0), i.useEffect(() => (document.addEventListener("mousedown", et), () => {
    document.removeEventListener("mousedown", et)
  }), [et]);
  let en = i.useMemo(() => (0, s.jsx)(x.default, {
      channel: a,
      summaries: L,
      summariesMembers: B,
      selectTopic: $,
      setOpen: ee
    }), [L, B, $, ee, a]),
    el = i.useCallback(() => {
      let e = M.default.ackMessageId(a.id);
      null != e ? h.default.jumpToMessage({
        channelId: a.id,
        messageId: e,
        offset: 1,
        context: "Mark As Read"
      }) : h.default.jumpToMessage({
        channelId: a.id,
        messageId: a.id,
        offset: 1,
        context: "Mark As Read"
      })
    }, [a.id]),
    ea = i.useCallback(() => {
      (0, p.ack)(a.id)
    }, [a.id]),
    ei = W.default.Messages.SUMMARIES_NO_SUMMARIES;
  return L.length > 0 && (ei = "" === Z || null == Z ? W.default.Messages.SUMMARIES_VIEW_ALL : Z), g ? null : (0, s.jsxs)("div", {
    ref: T,
    className: o(z.newTopicsBarContainer, z.containerMarginTop),
    children: [(0, s.jsx)("div", {
      className: o(z.newTopicsBarTopicSection),
      children: (0, s.jsx)(f.Clickable, {
        className: z.newTopicsBarTextClickable,
        "aria-label": W.default.Messages.SUMMARY_PILL,
        onClick: Q,
        children: (0, s.jsxs)("div", {
          className: o({
            [z.newTopicsBarTextUnselected]: !K,
            [z.newTopicsBarTextSelected]: K
          }),
          children: [(0, s.jsx)(w.default, {
            className: z.newTopicsBarIcon,
            width: 16,
            height: 16
          }), (0, s.jsx)(f.Text, {
            variant: "text-sm/medium",
            className: o(z.newTopicsBarCompact, z.newTopicsBarText),
            children: ei
          }), (0, s.jsx)(b.default, {
            width: 16,
            height: 16,
            direction: b.default.Directions.DOWN,
            className: z.newTopicsBarCaret
          })]
        })
      })
    }), (0, s.jsx)(f.Clickable, {
      onClick: el,
      className: o(z.barButtonMain, z.newTopicsBarInitial),
      children: r
    }), (0, s.jsxs)(f.Clickable, {
      onClick: ea,
      className: o(z.barButtonAlt, z.flexEnd),
      children: [(0, s.jsx)("div", {
        className: z.newTopicsBarCompact,
        children: W.default.Messages.MARK_AS_READ
      }), (0, s.jsx)(P.default, {
        className: z.barButtonIcon
      })]
    }), K && (0, s.jsxs)("div", {
      className: z.topicsDropdown,
      children: [(0, s.jsxs)("div", {
        className: z.topicsDropdownHeading,
        children: [(0, s.jsxs)("div", {
          className: z.topicsDropdownHeadingText,
          children: [(0, s.jsx)(w.default, {
            className: z.topicsPillHeadingIcon,
            width: 18,
            height: 20
          }), (0, s.jsx)(f.Heading, {
            variant: "heading-md/bold",
            color: "header-primary",
            lineClamp: 1,
            children: W.default.Messages.SUMMARIES
          }), (0, s.jsx)(I.default, {
            className: z.summariesBetaTag
          })]
        }), (0, s.jsx)(f.Clickable, {
          "aria-label": W.default.Messages.CLOSE,
          onClick: Q,
          className: z.topicsDropdownClose,
          children: (0, s.jsx)(D.default, {})
        })]
      }), (0, s.jsx)(f.Scroller, {
        ref: y,
        className: z.topicsScroller,
        fade: !0,
        children: en
      })]
    })]
  })
}

function es(e, t) {
  return null != t && e.length === t.length && !e.some((e, n) => {
    var l, a;
    return l = e, null == (a = t[n]) || l.length !== a.length || !!l.some((e, t) => a[t] !== e)
  })
}

function ei(e) {
  var t, n, l;
  let {
    channel: a,
    scrollManager: r
  } = e, {
    disableInteractions: u
  } = i.useContext(R.MessagesInteractionContext), [p, g] = i.useState(null), E = i.useRef(null), [N, T] = i.useState(null), M = i.useRef(null), O = (0, m.useStateFromStoresArray)([_.default], () => {
    var e;
    return null !== (e = _.default.summaries(a.id)) && void 0 !== e ? e : []
  }, [a]), j = (0, v.default)(O);
  i.useEffect(() => {
    !d.isEqual(j, O) && U.default.track(F.AnalyticEvents.SUMMARIES_TOPICS_PILL_VIEWED, {
      num_summaries: O.length,
      message_counts: O.map(e => e.count),
      start_message_ids: O.map(e => e.startId),
      end_message_ids: O.map(e => e.endId),
      num_participants: O.map(e => e.people.length),
      guild_id: a.guild_id,
      channel_id: a.id,
      channel_type: a.type
    })
  }, [O, j, a.guild_id, a.id, a.type]);
  let y = (0, m.useStateFromStores)([A.default], () => {
      var e;
      return null !== (e = null == O ? void 0 : O.map(e => {
        var t;
        return null === (t = e.people) || void 0 === t ? void 0 : t.map(e => {
          var t;
          return null !== (t = A.default.getUser(e)) && void 0 !== t ? t : null
        }).filter(k.isNotNullish)
      })) && void 0 !== e ? e : []
    }, [O], es),
    L = null !== (n = (0, m.useStateFromStores)([_.default], () => _.default.visibleSummaryIndex())) && void 0 !== n ? n : -1,
    P = null == O ? void 0 : null === (t = O[L]) || void 0 === t ? void 0 : t.topic;
  null == P && null == p && (null == O ? void 0 : O.length) >= 1 && (P = null === (l = O[0]) || void 0 === l ? void 0 : l.topic);
  let V = i.useMemo(() => d.get(O, L - 1), [L, O]),
    B = i.useMemo(() => d.get(O, L + 1), [L, O]),
    G = i.useMemo(() => d.debounce(e => {
      var t;
      g(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null)
    }, 64), [g]),
    Z = i.useMemo(() => d.throttle(() => {
      (0, S.setHighlightedSummary)(null)
    }, 1200, {
      trailing: !1
    }), []),
    J = i.useCallback(e => {
      Z(), G(e)
    }, [G, Z]),
    [Y, X] = i.useState(!1),
    K = i.useCallback(() => {
      U.default.track(F.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
        topics_dropdown_open: !Y,
        num_summaries: O.length,
        message_counts: O.map(e => e.count),
        start_message_ids: O.map(e => e.startId),
        end_message_ids: O.map(e => e.endId),
        num_participants: O.map(e => e.people.length),
        guild_id: a.guild_id,
        channel_id: a.id,
        channel_type: a.type
      }), X(!Y)
    }, [Y, O, X, a]),
    q = i.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H.SummariesTopicClickedSource.PILL_DROPDOWN,
        n = O[e];
      if (null == n) return;
      (0, S.setSelectedSummary)(a.id, n.id), (0, S.setHighlightedSummary)(a.id, n.id);
      let l = () => {
        r.removeScrollCompleteCallback(l), setTimeout(() => {
          r.addAutomaticAnchorCallback(J, !1)
        }, 100)
      };
      r.removeAutomaticAnchorCallback(J), r.addScrollCompleteCallback(l), U.default.track(F.AnalyticEvents.SUMMARIES_TOPIC_CLICKED, {
        source: t,
        message_id: n.startId,
        guild_id: a.guild_id,
        channel_id: a.id,
        channel_type: a.type
      }), h.default.jumpToMessage({
        channelId: a.id,
        messageId: n.startId,
        flash: !0,
        offset: 0,
        jumpType: C.JumpTypes.ANIMATED,
        context: "Summary Jump"
      })
    }, [O, a, J, r]),
    Q = i.useCallback(() => {
      q(L - 1, H.SummariesTopicClickedSource.PILL_NEXT_ARROW)
    }, [q, L]),
    $ = i.useCallback(() => {
      q(L + 1, H.SummariesTopicClickedSource.PILL_PREVIOUS_ARROW)
    }, [L, q]),
    ee = i.useCallback(e => {
      var t;
      X(e);
      let n = null === (t = M.current) || void 0 === t ? void 0 : t.scrollTop;
      null != n && T(n)
    }, []);
  i.useEffect(() => {
    if (null != N && Y) {
      var e;
      null === (e = M.current) || void 0 === e || e.scrollTo({
        top: N
      })
    }
  }, [N, Y]);
  let et = i.useCallback(e => {
    var t;
    !((0, c.isElement)(e.target) && (null === (t = E.current) || void 0 === t ? void 0 : t.contains(e.target))) && (Y && U.default.track(F.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
      topics_dropdown_open: !1,
      num_summaries: O.length,
      message_counts: O.map(e => e.count),
      start_message_ids: O.map(e => e.startId),
      end_message_ids: O.map(e => e.endId),
      num_participants: O.map(e => e.people.length),
      guild_id: a.guild_id,
      channel_id: a.id,
      channel_type: a.type
    }), ee(!1))
  }, [Y, O, a, ee]);
  i.useEffect(() => (r.addAutomaticAnchorCallback(J), () => {
    r.removeAutomaticAnchorCallback(J)
  }), [r, J]), (0, S.useSummaryPolling)(a.id, !0), i.useEffect(() => (document.addEventListener("mousedown", et), () => {
    document.removeEventListener("mousedown", et)
  }), [et]);
  let en = i.useMemo(() => (0, s.jsx)(x.default, {
      channel: a,
      summaries: O,
      summariesMembers: y,
      selectTopic: q,
      setOpen: ee
    }), [O, y, q, ee, a]),
    el = (0, m.useStateFromStores)([_.default], () => _.default.shouldShowTopicsBar());
  if (!el) return null;
  let ea = W.default.Messages.SUMMARIES_NO_SUMMARIES;
  return O.length > 0 && (ea = "" === P || null == P ? W.default.Messages.SUMMARIES_VIEW_ALL : P), u ? null : (0, s.jsxs)("div", {
    ref: E,
    className: o(z.topicsPillContainer, z.containerMarginTop),
    children: [(0, s.jsxs)("div", {
      className: z.topicsPill,
      children: [(0, s.jsx)(f.Clickable, {
        className: z.topicsPillText,
        "aria-label": W.default.Messages.SUMMARY_PILL,
        onClick: K,
        children: (0, s.jsxs)("div", {
          className: o({
            [z.topicsPillTextUnselected]: !Y,
            [z.topicsPillTextSelected]: Y
          }),
          children: [(0, s.jsx)(w.default, {
            className: z.topicsPillSummaryIcon,
            width: 16,
            height: 16
          }), (0, s.jsx)(f.Text, {
            className: z.topicsPillTextTitle,
            variant: "text-sm/medium",
            children: ea
          }), (0, s.jsx)(b.default, {
            width: 16,
            height: 16,
            direction: b.default.Directions.DOWN,
            className: z.topicsPillDropdownCaret
          })]
        })
      }), (0, s.jsxs)("div", {
        className: z.topicsPillCarets,
        children: [(0, s.jsx)(f.Clickable, {
          "aria-label": W.default.Messages.SUMMARY_PILL_NEXT,
          onClick: $,
          className: o(z.topicsPillCaret, z.topicsCaretLeft, {
            [z.topicsPillCaretDisabled]: null == B
          }),
          children: (0, s.jsx)(b.default, {
            width: 16,
            height: 16,
            direction: b.default.Directions.UP
          })
        }), (0, s.jsx)(f.Clickable, {
          "aria-label": W.default.Messages.SUMMARY_PILL_PREVIOUS,
          onClick: Q,
          className: o(z.topicsPillCaret, z.topicsCaretRight, {
            [z.topicsPillCaretDisabled]: null == V
          }),
          children: (0, s.jsx)(b.default, {
            width: 16,
            height: 16,
            direction: b.default.Directions.DOWN
          })
        })]
      })]
    }), Y && (0, s.jsxs)("div", {
      className: z.topicsDropdown,
      children: [(0, s.jsxs)("div", {
        className: z.topicsDropdownHeading,
        children: [(0, s.jsxs)("div", {
          className: z.topicsDropdownHeadingText,
          children: [(0, s.jsx)(w.default, {
            className: z.topicsPillHeadingIcon,
            width: 18,
            height: 20
          }), (0, s.jsx)(f.Heading, {
            variant: "heading-md/bold",
            color: "header-primary",
            lineClamp: 1,
            children: W.default.Messages.SUMMARIES
          }), (0, s.jsx)(I.default, {
            className: z.summariesBetaTag
          })]
        }), (0, s.jsx)(f.Clickable, {
          "aria-label": W.default.Messages.CLOSE,
          onClick: K,
          className: z.topicsDropdownClose,
          children: (0, s.jsx)(D.default, {})
        })]
      }), (0, s.jsx)(f.Scroller, {
        ref: M,
        className: z.topicsScroller,
        fade: !0,
        children: en
      })]
    })]
  })
}
let er = function(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, s.jsxs)("div", {
      className: z.tooltip,
      children: [(0, s.jsx)(f.Text, {
        color: "none",
        variant: "text-sm/semibold",
        children: e
      }), t && (0, s.jsx)(f.Text, {
        className: z.clickCTA,
        color: "text-muted",
        variant: "text-sm/normal",
        children: W.default.Messages.EMOJI_TOOLTIP_CLICK_CTA
      })]
    })
  },
  eo = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, s.jsx)("div", {
      className: o(z.popoutContainer, n),
      children: t
    })
  },
  eu = e => {
    let {
      className: t
    } = e;
    return (0, s.jsx)(eo, {
      className: t,
      children: (0, s.jsx)("div", {
        className: z.popoutLoadingBackground,
        children: (0, s.jsx)("div", {
          className: z.popoutLoadingForeground
        })
      })
    })
  }