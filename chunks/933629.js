"use strict";
n.r(t), n.d(t, {
  EXPRESSION_TOOLTIP_PROPS: function() {
    return Y
  },
  renderVideoComponent: function() {
    return J
  },
  renderAudioComponent: function() {
    return q
  },
  renderVoiceMessageAudioComponent: function() {
    return X
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
    return ei
  },
  TopicsPill: function() {
    return es
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
var l, i, a = n("37983"),
  s = n("884691"),
  r = n("414456"),
  o = n.n(r),
  u = n("917351"),
  d = n.n(u),
  c = n("118810"),
  f = n("446674"),
  m = n("77078"),
  p = n("819689"),
  h = n("267363"),
  E = n("817480"),
  g = n("340616"),
  S = n("115718"),
  C = n("84339"),
  T = n("298878"),
  v = n("793237"),
  I = n("347738"),
  _ = n("584998"),
  N = n("845579"),
  A = n("876308"),
  y = n("660478"),
  x = n("697218"),
  O = n("663175"),
  R = n("888673"),
  M = n("839952"),
  L = n("476765"),
  P = n("62843"),
  b = n("461380"),
  j = n("171710"),
  U = n("945330"),
  D = n("909004"),
  k = n("599110"),
  w = n("449008"),
  F = n("874276"),
  G = n("49111"),
  B = n("894282"),
  H = n("995307"),
  V = n("719347"),
  K = n("782340"),
  W = n("464354");
let Y = {
    delay: 300,
    position: "top"
  },
  z = e => t => {
    null == e || e(t), (0, F.setVolume)(t)
  },
  Z = e => t => {
    null == e || e(t), (0, F.setMuted)(t)
  };

function J(e) {
  let {
    onVolumeChange: t,
    onMute: n,
    volume: l,
    autoMute: i,
    alt: r,
    renderAdjacentContent: o,
    renderOverlayContent: u,
    ...d
  } = e, c = z(t), f = Z(n);
  return l = null == l ? F.getVolume : l, i = null == i ? F.getMuted : i, (0, a.jsxs)(s.Fragment, {
    children: [(0, a.jsx)(R.default, {
      ...d,
      alt: r,
      volume: l,
      autoMute: i,
      onVolumeChange: c,
      onMute: f,
      renderLinkComponent: $,
      renderOverlayContent: u
    }), null != o && o()]
  })
}

function q(e) {
  let {
    onVolumeChange: t,
    volume: n,
    onMute: l,
    onVolumeShow: i,
    onVolumeHide: r,
    renderAdjacentContent: o,
    ...u
  } = e, d = z(t), c = Z(l);
  return n = null == n ? F.getVolume : n, (0, a.jsxs)(s.Fragment, {
    children: [(0, a.jsx)(O.default, {
      ...u,
      onVolumeChange: d,
      onMute: c,
      onVolumeShow: i,
      onVolumeHide: r,
      volume: n,
      autoMute: () => !1,
      renderLinkComponent: $
    }), null != o && o()]
  })
}

function X(e) {
  let {
    onVolumeChange: t,
    volume: n,
    onMute: l,
    ...i
  } = e, s = z(t), r = Z(l);
  return n = null == n ? F.getVolume : n, (0, a.jsx)(A.default, {
    ...i,
    onVolumeChange: s,
    onMute: r,
    volume: n
  })
}

function Q(e) {
  let {
    alt: t,
    hiddenSpoilers: n,
    renderAdjacentContent: l,
    containerClassName: i,
    imageContainerClassName: r,
    disableAltTextDisplay: u = !1,
    mediaLayoutType: d,
    imageContainerStyle: c
  } = e, f = d === V.MediaLayoutType.MOSAIC, p = !u && N.ViewImageDescriptions.getSetting() && null != t && "" !== t && !0 !== n, h = e => {
    let {
      altText: t
    } = e;
    return (0, a.jsxs)(m.Dialog, {
      "aria-label": K.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
      className: W.mediaMosaicAltTextPopout,
      onKeyDown: e => {
        e.key === B.KeyboardEventKey.Escape && setTimeout(() => {
          var e;
          return null === (e = g.current) || void 0 === e ? void 0 : e.focus()
        }, 0)
      },
      children: [(0, a.jsx)("span", {
        className: W.mediaMosaicAltTextPopoutTitle,
        children: K.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE
      }), (0, a.jsx)("span", {
        className: W.mediaMosaicAltTextPopoutDescription,
        children: t
      })]
    })
  }, g = s.createRef();
  return (0, a.jsxs)("div", {
    className: o(W.imageContent, i),
    children: [(0, a.jsxs)("div", {
      className: o(W.imageContainer, r),
      style: c,
      children: [(0, a.jsx)(E.default, {
        ...e,
        renderLinkComponent: $
      }), null != l && l()]
    }), f && p && (0, a.jsx)("div", {
      className: W.mediaMosaicAltTextContainer,
      children: (0, a.jsx)(m.Popout, {
        animation: m.Popout.Animation.FADE,
        renderPopout: () => (0, a.jsx)(h, {
          altText: t
        }),
        children: e => (0, a.jsx)(m.FocusRing, {
          offset: 4,
          children: (0, a.jsx)("button", {
            ...e,
            type: "button",
            ref: g,
            "aria-label": K.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
            className: W.mediaMosaicAltText,
            children: K.default.Messages.MEDIA_MOSAIC_ALT_TEXT_CTA
          })
        })
      })
    }), !f && p && (0, a.jsx)("span", {
      className: W.altText,
      children: t
    })]
  })
}

function $(e) {
  return (0, a.jsx)(g.default, {
    ...e
  })
}

function ee(e) {
  let {
    renderAdjacentContent: t,
    ...n
  } = e;
  return (0, a.jsxs)(s.Fragment, {
    children: [(0, a.jsx)(M.default, {
      ...n
    }), null != t && t()]
  })
}(i = l || (l = {}))[i.OLD_MESSAGES = 0] = "OLD_MESSAGES", i[i.REPLY = 1] = "REPLY";
let et = e => {
    let {
      type: t = 0,
      onClick: n
    } = e;
    return (0, a.jsx)(P.MessagesInteractionContext.Consumer, {
      children: e => e.disableInteractions ? null : (0, a.jsxs)("div", {
        className: W.jumpToPresentBar,
        children: [(0, a.jsx)(m.FocusRing, {
          offset: 4,
          children: (0, a.jsx)("button", {
            type: "button",
            onClick: n,
            className: W.barButtonMain,
            children: function(e) {
              switch (e) {
                case 0:
                  return K.default.Messages.YOURE_VIEWING_OLDER_MESSAGES;
                case 1:
                  return K.default.Messages.JUMP_BAR_VIEWING_REPLY;
                default:
                  return (0, w.assertNever)(e)
              }
            }(t)
          })
        }), null != n ? (0, a.jsx)(m.FocusRing, {
          offset: 4,
          children: (0, a.jsxs)("button", {
            type: "button",
            onClick: n,
            className: W.barButtonAlt,
            children: [function(e) {
              switch (e) {
                case 0:
                  return K.default.Messages.JUMP_TO_PRESENT;
                case 1:
                  return K.default.Messages.JUMP_TO_ORIGINAL_MESSAGE;
                default:
                  return (0, w.assertNever)(e)
              }
            }(t), (0, a.jsx)(b.default, {
              className: W.barButtonIcon
            })]
          })
        }) : (0, a.jsx)(m.Spinner, {
          type: m.Spinner.Type.PULSING_ELLIPSIS,
          className: W.spinner,
          itemClassName: W.spinnerItem
        })]
      })
    })
  },
  en = e => {
    let {
      onClick: t,
      loading: n
    } = e;
    return (0, a.jsx)(P.MessagesInteractionContext.Consumer, {
      children: e => e.disableInteractions ? null : (0, a.jsxs)(m.Clickable, {
        className: W.messagesErrorBar,
        onClick: t,
        focusProps: {
          offset: {
            top: 4,
            right: 4,
            bottom: 12,
            left: 4
          }
        },
        children: [(0, a.jsx)("div", {
          className: W.barButtonMain,
          children: K.default.Messages.MESSAGES_FAILED_TO_LOAD
        }), n ? (0, a.jsx)(m.Spinner, {
          type: m.Spinner.Type.PULSING_ELLIPSIS,
          className: W.spinner,
          itemClassName: W.spinnerItem
        }) : (0, a.jsx)("div", {
          className: W.barButtonAlt,
          children: K.default.Messages.MESSAGES_FAILED_TO_LOAD_TRY_AGAIN
        })]
      })
    })
  };

function el(e) {
  let {
    content: t,
    channelId: n
  } = e, [l] = s.useState(() => (0, L.uid)("NewMessagesBarJumpToNewMessages_")), i = s.useCallback(() => {
    let e = y.default.ackMessageId(n);
    null != e ? p.default.jumpToMessage({
      channelId: n,
      messageId: e,
      offset: 1,
      context: "Mark As Read"
    }) : p.default.jumpToMessage({
      channelId: n,
      messageId: n,
      offset: 1,
      context: "Mark As Read"
    })
  }, [n]), r = s.useCallback(() => {
    (0, h.ack)(n)
  }, [n]), {
    disableInteractions: u
  } = s.useContext(P.MessagesInteractionContext);
  return u ? null : (0, a.jsxs)("div", {
    className: o(W.newMessagesBar, {
      [W.disableInteractions]: u
    }),
    children: [(0, a.jsx)(m.FocusRing, {
      offset: 4,
      children: (0, a.jsx)("button", {
        type: "button",
        className: W.barButtonMain,
        onClick: i,
        "aria-label": K.default.Messages.JUMP_TO_LAST_UNREAD_MESSAGE,
        "aria-describedby": l,
        children: (0, a.jsx)("span", {
          id: l,
          className: W.span,
          children: t
        })
      })
    }), (0, a.jsx)(m.FocusRing, {
      offset: 4,
      children: (0, a.jsxs)("button", {
        type: "button",
        onClick: r,
        className: W.barButtonAlt,
        children: [K.default.Messages.MARK_AS_READ, (0, a.jsx)(j.default, {
          className: W.barButtonIcon
        })]
      })
    })]
  })
}

function ei(e) {
  var t, n, l;
  let {
    channel: i,
    content: r,
    scrollManager: u
  } = e, {
    disableInteractions: E
  } = s.useContext(P.MessagesInteractionContext), [g, N] = s.useState(null), A = s.useRef(null), [O, R] = s.useState(null), M = s.useRef(null), L = (0, f.useStateFromStoresArray)([I.default], () => {
    var e;
    return null !== (e = I.default.summaries(i.id)) && void 0 !== e ? e : []
  }, [i]), F = (0, C.default)(L);
  s.useEffect(() => {
    !d.isEqual(F, L) && k.default.track(G.AnalyticEvents.SUMMARIES_TOPICS_PILL_VIEWED, {
      num_summaries: L.length,
      message_counts: L.map(e => e.count),
      start_message_ids: L.map(e => e.startId),
      end_message_ids: L.map(e => e.endId),
      num_participants: L.map(e => e.people.length),
      guild_id: i.guild_id,
      channel_id: i.id,
      channel_type: i.type
    })
  }, [L, F, i.guild_id, i.id, i.type]);
  let B = (0, f.useStateFromStores)([x.default], () => {
      var e;
      return null !== (e = null == L ? void 0 : L.map(e => {
        var t;
        return null === (t = e.people) || void 0 === t ? void 0 : t.map(e => {
          var t;
          return null !== (t = x.default.getUser(e)) && void 0 !== t ? t : null
        }).filter(w.isNotNullish)
      })) && void 0 !== e ? e : []
    }, [L], ea),
    V = null !== (n = (0, f.useStateFromStores)([I.default], () => I.default.visibleSummaryIndex())) && void 0 !== n ? n : -1,
    Y = null == L ? void 0 : null === (t = L[V]) || void 0 === t ? void 0 : t.topic;
  null == Y && null == g && (null == L ? void 0 : L.length) >= 1 && (Y = null === (l = L[0]) || void 0 === l ? void 0 : l.topic);
  let z = s.useMemo(() => d.debounce(e => {
      var t;
      N(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null)
    }, 64), [N]),
    Z = s.useMemo(() => d.throttle(() => {
      (0, v.setHighlightedSummary)(null)
    }, 1200, {
      trailing: !1
    }), []),
    J = s.useCallback(e => {
      Z(), z(e)
    }, [z, Z]),
    [q, X] = s.useState(!1),
    Q = s.useCallback(() => {
      k.default.track(G.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
        topics_dropdown_open: !q,
        num_summaries: L.length,
        message_counts: L.map(e => e.count),
        start_message_ids: L.map(e => e.startId),
        end_message_ids: L.map(e => e.endId),
        num_participants: L.map(e => e.people.length),
        guild_id: i.guild_id,
        channel_id: i.id,
        channel_type: i.type
      }), X(!q)
    }, [q, L, X, i]),
    $ = s.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H.SummariesTopicClickedSource.PILL_DROPDOWN,
        n = L[e];
      if (null == n) return;
      (0, v.setSelectedSummary)(i.id, n.id), (0, v.setHighlightedSummary)(i.id, n.id);
      let l = () => {
        u.removeScrollCompleteCallback(l), setTimeout(() => {
          u.addAutomaticAnchorCallback(J, !1)
        }, 100)
      };
      u.removeAutomaticAnchorCallback(J), u.addScrollCompleteCallback(l), k.default.track(G.AnalyticEvents.SUMMARIES_TOPIC_CLICKED, {
        source: t,
        message_id: n.startId,
        guild_id: i.guild_id,
        channel_id: i.id,
        channel_type: i.type
      }), p.default.jumpToMessage({
        channelId: i.id,
        messageId: n.startId,
        flash: !0,
        offset: 0,
        jumpType: S.JumpTypes.ANIMATED,
        context: "Summary Jump"
      })
    }, [L, i, J, u]),
    ee = s.useCallback(e => {
      var t;
      X(e);
      let n = null === (t = M.current) || void 0 === t ? void 0 : t.scrollTop;
      null != n && R(n)
    }, []);
  s.useEffect(() => {
    if (null != O && q) {
      var e;
      null === (e = M.current) || void 0 === e || e.scrollTo({
        top: O
      })
    }
  }, [O, q]);
  let et = s.useCallback(e => {
    var t;
    !((0, c.isElement)(e.target) && (null === (t = A.current) || void 0 === t ? void 0 : t.contains(e.target))) && (q && k.default.track(G.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
      topics_dropdown_open: !1,
      num_summaries: L.length,
      message_counts: L.map(e => e.count),
      start_message_ids: L.map(e => e.startId),
      end_message_ids: L.map(e => e.endId),
      num_participants: L.map(e => e.people.length),
      guild_id: i.guild_id,
      channel_id: i.id,
      channel_type: i.type
    }), ee(!1))
  }, [q, L, i, ee]);
  s.useEffect(() => (u.addAutomaticAnchorCallback(J), () => {
    u.removeAutomaticAnchorCallback(J)
  }), [u, J]), (0, v.useSummaryPolling)(i.id, !0), s.useEffect(() => (document.addEventListener("mousedown", et), () => {
    document.removeEventListener("mousedown", et)
  }), [et]);
  let en = s.useMemo(() => (0, a.jsx)(_.default, {
      channel: i,
      summaries: L,
      summariesMembers: B,
      selectTopic: $,
      setOpen: ee
    }), [L, B, $, ee, i]),
    el = s.useCallback(() => {
      let e = y.default.ackMessageId(i.id);
      null != e ? p.default.jumpToMessage({
        channelId: i.id,
        messageId: e,
        offset: 1,
        context: "Mark As Read"
      }) : p.default.jumpToMessage({
        channelId: i.id,
        messageId: i.id,
        offset: 1,
        context: "Mark As Read"
      })
    }, [i.id]),
    ei = s.useCallback(() => {
      (0, h.ack)(i.id)
    }, [i.id]),
    es = K.default.Messages.SUMMARIES_NO_SUMMARIES;
  return L.length > 0 && (es = "" === Y || null == Y ? K.default.Messages.SUMMARIES_VIEW_ALL : Y), E ? null : (0, a.jsxs)("div", {
    ref: A,
    className: o(W.newTopicsBarContainer, W.containerMarginTop),
    children: [(0, a.jsx)("div", {
      className: o(W.newTopicsBarTopicSection),
      children: (0, a.jsx)(m.Clickable, {
        className: W.newTopicsBarTextClickable,
        "aria-label": K.default.Messages.SUMMARY_PILL,
        onClick: Q,
        children: (0, a.jsxs)("div", {
          className: o({
            [W.newTopicsBarTextUnselected]: !q,
            [W.newTopicsBarTextSelected]: q
          }),
          children: [(0, a.jsx)(D.default, {
            className: W.newTopicsBarIcon,
            width: 16,
            height: 16
          }), (0, a.jsx)(m.Text, {
            variant: "text-sm/medium",
            className: o(W.newTopicsBarCompact, W.newTopicsBarText),
            children: es
          }), (0, a.jsx)(b.default, {
            width: 16,
            height: 16,
            direction: b.default.Directions.DOWN,
            className: W.newTopicsBarCaret
          })]
        })
      })
    }), (0, a.jsx)(m.Clickable, {
      onClick: el,
      className: o(W.barButtonMain, W.newTopicsBarInitial),
      children: r
    }), (0, a.jsxs)(m.Clickable, {
      onClick: ei,
      className: o(W.barButtonAlt, W.flexEnd),
      children: [(0, a.jsx)("div", {
        className: W.newTopicsBarCompact,
        children: K.default.Messages.MARK_AS_READ
      }), (0, a.jsx)(j.default, {
        className: W.barButtonIcon
      })]
    }), q && (0, a.jsxs)("div", {
      className: W.topicsDropdown,
      children: [(0, a.jsxs)("div", {
        className: W.topicsDropdownHeading,
        children: [(0, a.jsxs)("div", {
          className: W.topicsDropdownHeadingText,
          children: [(0, a.jsx)(D.default, {
            className: W.topicsPillHeadingIcon,
            width: 18,
            height: 20
          }), (0, a.jsx)(m.Heading, {
            variant: "heading-md/bold",
            color: "header-primary",
            lineClamp: 1,
            children: K.default.Messages.SUMMARIES
          }), (0, a.jsx)(T.default, {
            className: W.summariesBetaTag
          })]
        }), (0, a.jsx)(m.Clickable, {
          "aria-label": K.default.Messages.CLOSE,
          onClick: Q,
          className: W.topicsDropdownClose,
          children: (0, a.jsx)(U.default, {})
        })]
      }), (0, a.jsx)(m.Scroller, {
        ref: M,
        className: W.topicsScroller,
        fade: !0,
        children: en
      })]
    })]
  })
}

function ea(e, t) {
  return null != t && e.length === t.length && !e.some((e, n) => {
    var l, i;
    return l = e, null == (i = t[n]) || l.length !== i.length || !!l.some((e, t) => i[t] !== e)
  })
}

function es(e) {
  var t, n, l;
  let {
    channel: i,
    scrollManager: r
  } = e, {
    disableInteractions: u
  } = s.useContext(P.MessagesInteractionContext), [h, E] = s.useState(null), g = s.useRef(null), [N, A] = s.useState(null), y = s.useRef(null), O = (0, f.useStateFromStoresArray)([I.default], () => {
    var e;
    return null !== (e = I.default.summaries(i.id)) && void 0 !== e ? e : []
  }, [i]), R = (0, C.default)(O);
  s.useEffect(() => {
    !d.isEqual(R, O) && k.default.track(G.AnalyticEvents.SUMMARIES_TOPICS_PILL_VIEWED, {
      num_summaries: O.length,
      message_counts: O.map(e => e.count),
      start_message_ids: O.map(e => e.startId),
      end_message_ids: O.map(e => e.endId),
      num_participants: O.map(e => e.people.length),
      guild_id: i.guild_id,
      channel_id: i.id,
      channel_type: i.type
    })
  }, [O, R, i.guild_id, i.id, i.type]);
  let M = (0, f.useStateFromStores)([x.default], () => {
      var e;
      return null !== (e = null == O ? void 0 : O.map(e => {
        var t;
        return null === (t = e.people) || void 0 === t ? void 0 : t.map(e => {
          var t;
          return null !== (t = x.default.getUser(e)) && void 0 !== t ? t : null
        }).filter(w.isNotNullish)
      })) && void 0 !== e ? e : []
    }, [O], ea),
    L = null !== (n = (0, f.useStateFromStores)([I.default], () => I.default.visibleSummaryIndex())) && void 0 !== n ? n : -1,
    j = null == O ? void 0 : null === (t = O[L]) || void 0 === t ? void 0 : t.topic;
  null == j && null == h && (null == O ? void 0 : O.length) >= 1 && (j = null === (l = O[0]) || void 0 === l ? void 0 : l.topic);
  let F = s.useMemo(() => d.get(O, L - 1), [L, O]),
    B = s.useMemo(() => d.get(O, L + 1), [L, O]),
    V = s.useMemo(() => d.debounce(e => {
      var t;
      E(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null)
    }, 64), [E]),
    Y = s.useMemo(() => d.throttle(() => {
      (0, v.setHighlightedSummary)(null)
    }, 1200, {
      trailing: !1
    }), []),
    z = s.useCallback(e => {
      Y(), V(e)
    }, [V, Y]),
    [Z, J] = s.useState(!1),
    q = s.useCallback(() => {
      k.default.track(G.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
        topics_dropdown_open: !Z,
        num_summaries: O.length,
        message_counts: O.map(e => e.count),
        start_message_ids: O.map(e => e.startId),
        end_message_ids: O.map(e => e.endId),
        num_participants: O.map(e => e.people.length),
        guild_id: i.guild_id,
        channel_id: i.id,
        channel_type: i.type
      }), J(!Z)
    }, [Z, O, J, i]),
    X = s.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H.SummariesTopicClickedSource.PILL_DROPDOWN,
        n = O[e];
      if (null == n) return;
      (0, v.setSelectedSummary)(i.id, n.id), (0, v.setHighlightedSummary)(i.id, n.id);
      let l = () => {
        r.removeScrollCompleteCallback(l), setTimeout(() => {
          r.addAutomaticAnchorCallback(z, !1)
        }, 100)
      };
      r.removeAutomaticAnchorCallback(z), r.addScrollCompleteCallback(l), k.default.track(G.AnalyticEvents.SUMMARIES_TOPIC_CLICKED, {
        source: t,
        message_id: n.startId,
        guild_id: i.guild_id,
        channel_id: i.id,
        channel_type: i.type
      }), p.default.jumpToMessage({
        channelId: i.id,
        messageId: n.startId,
        flash: !0,
        offset: 0,
        jumpType: S.JumpTypes.ANIMATED,
        context: "Summary Jump"
      })
    }, [O, i, z, r]),
    Q = s.useCallback(() => {
      X(L - 1, H.SummariesTopicClickedSource.PILL_NEXT_ARROW)
    }, [X, L]),
    $ = s.useCallback(() => {
      X(L + 1, H.SummariesTopicClickedSource.PILL_PREVIOUS_ARROW)
    }, [L, X]),
    ee = s.useCallback(e => {
      var t;
      J(e);
      let n = null === (t = y.current) || void 0 === t ? void 0 : t.scrollTop;
      null != n && A(n)
    }, []);
  s.useEffect(() => {
    if (null != N && Z) {
      var e;
      null === (e = y.current) || void 0 === e || e.scrollTo({
        top: N
      })
    }
  }, [N, Z]);
  let et = s.useCallback(e => {
    var t;
    !((0, c.isElement)(e.target) && (null === (t = g.current) || void 0 === t ? void 0 : t.contains(e.target))) && (Z && k.default.track(G.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
      topics_dropdown_open: !1,
      num_summaries: O.length,
      message_counts: O.map(e => e.count),
      start_message_ids: O.map(e => e.startId),
      end_message_ids: O.map(e => e.endId),
      num_participants: O.map(e => e.people.length),
      guild_id: i.guild_id,
      channel_id: i.id,
      channel_type: i.type
    }), ee(!1))
  }, [Z, O, i, ee]);
  s.useEffect(() => (r.addAutomaticAnchorCallback(z), () => {
    r.removeAutomaticAnchorCallback(z)
  }), [r, z]), (0, v.useSummaryPolling)(i.id, !0), s.useEffect(() => (document.addEventListener("mousedown", et), () => {
    document.removeEventListener("mousedown", et)
  }), [et]);
  let en = s.useMemo(() => (0, a.jsx)(_.default, {
      channel: i,
      summaries: O,
      summariesMembers: M,
      selectTopic: X,
      setOpen: ee
    }), [O, M, X, ee, i]),
    el = (0, f.useStateFromStores)([I.default], () => I.default.shouldShowTopicsBar());
  if (!el) return null;
  let ei = K.default.Messages.SUMMARIES_NO_SUMMARIES;
  return O.length > 0 && (ei = "" === j || null == j ? K.default.Messages.SUMMARIES_VIEW_ALL : j), u ? null : (0, a.jsxs)("div", {
    ref: g,
    className: o(W.topicsPillContainer, W.containerMarginTop),
    children: [(0, a.jsxs)("div", {
      className: W.topicsPill,
      children: [(0, a.jsx)(m.Clickable, {
        className: W.topicsPillText,
        "aria-label": K.default.Messages.SUMMARY_PILL,
        onClick: q,
        children: (0, a.jsxs)("div", {
          className: o({
            [W.topicsPillTextUnselected]: !Z,
            [W.topicsPillTextSelected]: Z
          }),
          children: [(0, a.jsx)(D.default, {
            className: W.topicsPillSummaryIcon,
            width: 16,
            height: 16
          }), (0, a.jsx)(m.Text, {
            className: W.topicsPillTextTitle,
            variant: "text-sm/medium",
            children: ei
          }), (0, a.jsx)(b.default, {
            width: 16,
            height: 16,
            direction: b.default.Directions.DOWN,
            className: W.topicsPillDropdownCaret
          })]
        })
      }), (0, a.jsxs)("div", {
        className: W.topicsPillCarets,
        children: [(0, a.jsx)(m.Clickable, {
          "aria-label": K.default.Messages.SUMMARY_PILL_NEXT,
          onClick: $,
          className: o(W.topicsPillCaret, W.topicsCaretLeft, {
            [W.topicsPillCaretDisabled]: null == B
          }),
          children: (0, a.jsx)(b.default, {
            width: 16,
            height: 16,
            direction: b.default.Directions.UP
          })
        }), (0, a.jsx)(m.Clickable, {
          "aria-label": K.default.Messages.SUMMARY_PILL_PREVIOUS,
          onClick: Q,
          className: o(W.topicsPillCaret, W.topicsCaretRight, {
            [W.topicsPillCaretDisabled]: null == F
          }),
          children: (0, a.jsx)(b.default, {
            width: 16,
            height: 16,
            direction: b.default.Directions.DOWN
          })
        })]
      })]
    }), Z && (0, a.jsxs)("div", {
      className: W.topicsDropdown,
      children: [(0, a.jsxs)("div", {
        className: W.topicsDropdownHeading,
        children: [(0, a.jsxs)("div", {
          className: W.topicsDropdownHeadingText,
          children: [(0, a.jsx)(D.default, {
            className: W.topicsPillHeadingIcon,
            width: 18,
            height: 20
          }), (0, a.jsx)(m.Heading, {
            variant: "heading-md/bold",
            color: "header-primary",
            lineClamp: 1,
            children: K.default.Messages.SUMMARIES
          }), (0, a.jsx)(T.default, {
            className: W.summariesBetaTag
          })]
        }), (0, a.jsx)(m.Clickable, {
          "aria-label": K.default.Messages.CLOSE,
          onClick: q,
          className: W.topicsDropdownClose,
          children: (0, a.jsx)(U.default, {})
        })]
      }), (0, a.jsx)(m.Scroller, {
        ref: y,
        className: W.topicsScroller,
        fade: !0,
        children: en
      })]
    })]
  })
}
let er = function(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, a.jsxs)("div", {
      className: W.tooltip,
      children: [(0, a.jsx)(m.Text, {
        color: "none",
        variant: "text-sm/semibold",
        children: e
      }), t && (0, a.jsx)(m.Text, {
        className: W.clickCTA,
        color: "text-muted",
        variant: "text-sm/normal",
        children: K.default.Messages.EMOJI_TOOLTIP_CLICK_CTA
      })]
    })
  },
  eo = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, a.jsx)("div", {
      className: o(W.popoutContainer, n),
      children: t
    })
  },
  eu = e => {
    let {
      className: t
    } = e;
    return (0, a.jsx)(eo, {
      className: t,
      children: (0, a.jsx)("div", {
        className: W.popoutLoadingBackground,
        children: (0, a.jsx)("div", {
          className: W.popoutLoadingForeground
        })
      })
    })
  }