"use strict";
n.d(t, {
  A7: function() {
    return i
  },
  BO: function() {
    return eo
  },
  DR: function() {
    return et
  },
  G5: function() {
    return er
  },
  LE: function() {
    return ei
  },
  Rp: function() {
    return en
  },
  SE: function() {
    return eu
  },
  W_: function() {
    return el
  },
  Y: function() {
    return ea
  },
  Yi: function() {
    return Q
  },
  b_: function() {
    return j
  },
  hX: function() {
    return q
  },
  iT: function() {
    return J
  },
  lV: function() {
    return z
  },
  ur: function() {
    return ee
  },
  wj: function() {
    return X
  },
  xi: function() {
    return $
  }
}), n(47120);
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(392711),
  _ = n.n(u),
  c = n(374470),
  d = n(442837),
  E = n(481060),
  I = n(904245),
  T = n(45114),
  h = n(431279),
  f = n(794295),
  S = n(593472),
  N = n(110924),
  A = n(688465),
  m = n(479313),
  O = n(765104),
  p = n(505953),
  R = n(695346),
  g = n(201542),
  C = n(306680),
  v = n(594174),
  L = n(130208),
  D = n(992665),
  M = n(133910),
  P = n(145196),
  y = n(153124),
  U = n(278297),
  b = n(259580),
  G = n(626135),
  w = n(823379),
  x = n(589530),
  B = n(709054),
  k = n(981631),
  V = n(420212),
  Z = n(814249),
  H = n(768760),
  F = n(689938),
  Y = n(304714);
let j = {
    delay: 300,
    position: "top"
  },
  W = e => t => {
    null == e || e(t), (0, x.jA)(t)
  },
  K = e => t => {
    null == e || e(t), (0, x.Zj)(t)
  };

function z(e) {
  let {
    onVolumeChange: t,
    onMute: n,
    volume: i,
    autoMute: r,
    alt: a,
    renderAdjacentContent: l,
    renderOverlayContent: u,
    ..._
  } = e, c = W(t), d = K(n);
  return i = null == i ? x.FC : i, r = null == r ? x.rs : r, (0, s.jsxs)(o.Fragment, {
    children: [(0, s.jsx)(M.Z, {
      ..._,
      alt: a,
      volume: i,
      autoMute: r,
      onVolumeChange: c,
      onMute: d,
      renderLinkComponent: J,
      renderOverlayContent: u
    }), null != l && l()]
  })
}

function q(e) {
  let {
    onVolumeChange: t,
    volume: n,
    onMute: i,
    onVolumeShow: r,
    onVolumeHide: a,
    renderAdjacentContent: l,
    ...u
  } = e, _ = W(t), c = K(i);
  return n = null == n ? x.FC : n, (0, s.jsxs)(o.Fragment, {
    children: [(0, s.jsx)(D.Z, {
      ...u,
      onVolumeChange: _,
      onMute: c,
      onVolumeShow: r,
      onVolumeHide: a,
      volume: n,
      autoMute: () => !1,
      renderLinkComponent: J
    }), null != l && l()]
  })
}

function X(e) {
  let {
    onVolumeChange: t,
    volume: n,
    onMute: i,
    ...r
  } = e, o = W(t), a = K(i);
  return n = null == n ? x.FC : n, (0, s.jsx)(g.Z, {
    ...r,
    onVolumeChange: o,
    onMute: a,
    volume: n
  })
}

function Q(e) {
  let {
    alt: t,
    hiddenSpoilers: n,
    renderAdjacentContent: i,
    containerClassName: r,
    imageContainerClassName: a,
    disableAltTextDisplay: u = !1,
    mediaLayoutType: _,
    imageContainerStyle: c,
    renderForwardComponent: d
  } = e, I = _ === H.hV.MOSAIC, T = !u && R.H1.getSetting() && null != t && "" !== t && !0 !== n, f = e => {
    let {
      altText: t
    } = e;
    return (0, s.jsxs)(E.Dialog, {
      "aria-label": F.Z.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
      className: Y.mediaMosaicAltTextPopout,
      onKeyDown: e => {
        e.key === V.mR.Escape && setTimeout(() => {
          var e;
          return null === (e = S.current) || void 0 === e ? void 0 : e.focus()
        }, 0)
      },
      children: [(0, s.jsx)("span", {
        className: Y.mediaMosaicAltTextPopoutTitle,
        children: F.Z.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE
      }), (0, s.jsx)("span", {
        className: Y.mediaMosaicAltTextPopoutDescription,
        children: t
      })]
    })
  }, S = o.createRef();
  return (0, s.jsxs)("div", {
    className: l()(Y.imageContent, r),
    children: [(0, s.jsxs)("div", {
      className: l()(Y.imageContainer, a),
      style: c,
      children: [(0, s.jsx)(h.Z, {
        ...e,
        renderLinkComponent: J,
        renderForwardComponent: null != d ? d : k.VqG
      }), null != i && i()]
    }), I && T && (0, s.jsx)("div", {
      className: Y.mediaMosaicAltTextContainer,
      children: (0, s.jsx)(E.Popout, {
        animation: E.Popout.Animation.FADE,
        renderPopout: () => (0, s.jsx)(f, {
          altText: t
        }),
        children: e => (0, s.jsx)(E.FocusRing, {
          offset: 4,
          children: (0, s.jsx)("button", {
            ...e,
            type: "button",
            ref: S,
            "aria-label": F.Z.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
            className: Y.mediaMosaicAltText,
            children: F.Z.Messages.MEDIA_MOSAIC_ALT_TEXT_CTA
          })
        })
      })
    }), !I && T && (0, s.jsx)("span", {
      className: Y.altText,
      children: t
    })]
  })
}

function J(e) {
  return (0, s.jsx)(f.Z, {
    ...e
  })
}

function $(e) {
  let {
    renderAdjacentContent: t,
    ...n
  } = e;
  return (0, s.jsxs)(o.Fragment, {
    children: [(0, s.jsx)(P.Z, {
      ...n
    }), null != t && t()]
  })
}

function ee(e) {
  return (0, s.jsx)(L.Z, {
    ...e
  })
}(r = i || (i = {}))[r.OLD_MESSAGES = 0] = "OLD_MESSAGES", r[r.REPLY = 1] = "REPLY";
let et = e => {
    let {
      type: t = 0,
      onClick: n
    } = e;
    return (0, s.jsx)(U.G.Consumer, {
      children: e => e.disableInteractions ? null : (0, s.jsxs)("div", {
        className: Y.jumpToPresentBar,
        children: [(0, s.jsx)(E.FocusRing, {
          offset: 4,
          children: (0, s.jsx)("button", {
            type: "button",
            onClick: n,
            className: Y.barButtonMain,
            children: function(e) {
              switch (e) {
                case 0:
                  return F.Z.Messages.YOURE_VIEWING_OLDER_MESSAGES;
                case 1:
                  return F.Z.Messages.JUMP_BAR_VIEWING_REPLY;
                default:
                  return (0, w.vE)(e)
              }
            }(t)
          })
        }), null != n ? (0, s.jsx)(E.FocusRing, {
          offset: 4,
          children: (0, s.jsxs)("button", {
            type: "button",
            onClick: n,
            className: Y.barButtonAlt,
            children: [function(e) {
              switch (e) {
                case 0:
                  return F.Z.Messages.JUMP_TO_PRESENT;
                case 1:
                  return F.Z.Messages.JUMP_TO_ORIGINAL_MESSAGE;
                default:
                  return (0, w.vE)(e)
              }
            }(t), (0, s.jsx)(b.Z, {
              className: Y.barButtonIcon
            })]
          })
        }) : (0, s.jsx)(E.Spinner, {
          type: E.Spinner.Type.PULSING_ELLIPSIS,
          className: Y.spinner,
          itemClassName: Y.spinnerItem
        })]
      })
    })
  },
  en = e => {
    let {
      onClick: t,
      loading: n
    } = e;
    return (0, s.jsx)(U.G.Consumer, {
      children: e => e.disableInteractions ? null : (0, s.jsxs)(E.Clickable, {
        className: Y.messagesErrorBar,
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
          className: Y.barButtonMain,
          children: F.Z.Messages.MESSAGES_FAILED_TO_LOAD
        }), n ? (0, s.jsx)(E.Spinner, {
          type: E.Spinner.Type.PULSING_ELLIPSIS,
          className: Y.spinner,
          itemClassName: Y.spinnerItem
        }) : (0, s.jsx)("div", {
          className: Y.barButtonAlt,
          children: F.Z.Messages.MESSAGES_FAILED_TO_LOAD_TRY_AGAIN
        })]
      })
    })
  };

function ei(e) {
  let {
    content: t,
    channelId: n
  } = e, [i] = o.useState(() => (0, y.hQ)("NewMessagesBarJumpToNewMessages_")), r = o.useCallback(() => {
    let e = C.ZP.ackMessageId(n);
    null != e ? I.Z.jumpToMessage({
      channelId: n,
      messageId: e,
      offset: 1,
      context: "Mark As Read"
    }) : I.Z.jumpToMessage({
      channelId: n,
      messageId: B.default.castChannelIdAsMessageId(n),
      offset: 1,
      context: "Mark As Read"
    })
  }, [n]), a = o.useCallback(() => {
    (0, T.In)(n)
  }, [n]), {
    disableInteractions: u
  } = o.useContext(U.G);
  return u ? null : (0, s.jsxs)("div", {
    className: l()(Y.newMessagesBar, {
      [Y.disableInteractions]: u
    }),
    children: [(0, s.jsx)(E.FocusRing, {
      offset: 4,
      children: (0, s.jsx)("button", {
        type: "button",
        className: Y.barButtonMain,
        onClick: r,
        "aria-label": F.Z.Messages.JUMP_TO_LAST_UNREAD_MESSAGE,
        "aria-describedby": i,
        children: (0, s.jsx)("span", {
          id: i,
          className: Y.span,
          children: t
        })
      })
    }), (0, s.jsx)(E.FocusRing, {
      offset: 4,
      children: (0, s.jsxs)("button", {
        type: "button",
        onClick: a,
        className: Y.barButtonAlt,
        children: [F.Z.Messages.MARK_AS_READ, (0, s.jsx)(E.ChatCheckIcon, {
          size: "md",
          color: "currentColor",
          className: Y.barButtonIcon
        })]
      })
    })]
  })
}

function er(e) {
  var t, n, i;
  let {
    channel: r,
    content: a,
    scrollManager: u
  } = e, {
    disableInteractions: h
  } = o.useContext(U.G), [f, R] = o.useState(null), g = o.useRef(null), [L, D] = o.useState(null), M = o.useRef(null), P = (0, d.Wu)([O.Z], () => {
    var e;
    return null !== (e = O.Z.summaries(r.id)) && void 0 !== e ? e : []
  }, [r]), y = (0, N.Z)(P);
  o.useEffect(() => {
    !_().isEqual(y, P) && G.default.track(k.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
      num_summaries: P.length,
      message_counts: P.map(e => e.count),
      start_message_ids: P.map(e => e.startId),
      end_message_ids: P.map(e => e.endId),
      num_participants: P.map(e => e.people.length),
      guild_id: r.guild_id,
      channel_id: r.id,
      channel_type: r.type
    })
  }, [P, y, r.guild_id, r.id, r.type]);
  let x = (0, d.e7)([v.default], () => {
      var e;
      return null !== (e = null == P ? void 0 : P.map(e => {
        var t;
        return null === (t = e.people) || void 0 === t ? void 0 : t.map(e => {
          var t;
          return null !== (t = v.default.getUser(e)) && void 0 !== t ? t : null
        }).filter(w.lm)
      })) && void 0 !== e ? e : []
    }, [P], es),
    V = null !== (n = (0, d.e7)([O.Z], () => O.Z.visibleSummaryIndex())) && void 0 !== n ? n : -1,
    H = null == P ? void 0 : null === (t = P[V]) || void 0 === t ? void 0 : t.topic;
  null == H && null == f && (null == P ? void 0 : P.length) >= 1 && (H = null === (i = P[0]) || void 0 === i ? void 0 : i.topic);
  let j = o.useMemo(() => _().debounce(e => {
      var t;
      R(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null)
    }, 64), [R]),
    W = o.useMemo(() => _().throttle(() => {
      (0, m.yK)(null)
    }, 1200, {
      trailing: !1
    }), []),
    K = o.useCallback(e => {
      W(), j(e)
    }, [j, W]),
    [z, q] = o.useState(!1),
    X = o.useCallback(() => {
      G.default.track(k.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
        topics_dropdown_open: !z,
        num_summaries: P.length,
        message_counts: P.map(e => e.count),
        start_message_ids: P.map(e => e.startId),
        end_message_ids: P.map(e => e.endId),
        num_participants: P.map(e => e.people.length),
        guild_id: r.guild_id,
        channel_id: r.id,
        channel_type: r.type
      }), q(!z)
    }, [z, P, q, r]),
    Q = o.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Z.DZ.PILL_DROPDOWN,
        n = P[e];
      if (null == n) return;
      (0, m.wv)(r.id, n.id), (0, m.yK)(r.id, n.id);
      let i = () => {
        u.removeScrollCompleteCallback(i), setTimeout(() => {
          u.addAutomaticAnchorCallback(K, !1)
        }, 100)
      };
      u.removeAutomaticAnchorCallback(K), u.addScrollCompleteCallback(i), G.default.track(k.rMx.SUMMARIES_TOPIC_CLICKED, {
        source: t,
        message_id: n.startId,
        guild_id: r.guild_id,
        channel_id: r.id,
        channel_type: r.type
      }), I.Z.jumpToMessage({
        channelId: r.id,
        messageId: n.startId,
        flash: !0,
        offset: 0,
        jumpType: S.SR.ANIMATED,
        context: "Summary Jump"
      })
    }, [P, r, K, u]),
    J = o.useCallback(e => {
      var t;
      q(e);
      let n = null === (t = M.current) || void 0 === t ? void 0 : t.scrollTop;
      null != n && D(n)
    }, []);
  o.useEffect(() => {
    if (null != L && z) {
      var e;
      null === (e = M.current) || void 0 === e || e.scrollTo({
        top: L
      })
    }
  }, [L, z]);
  let $ = o.useCallback(e => {
    var t;
    if (!((0, c.k)(e.target) && (null === (t = g.current) || void 0 === t ? void 0 : t.contains(e.target)))) z && G.default.track(k.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
      topics_dropdown_open: !1,
      num_summaries: P.length,
      message_counts: P.map(e => e.count),
      start_message_ids: P.map(e => e.startId),
      end_message_ids: P.map(e => e.endId),
      num_participants: P.map(e => e.people.length),
      guild_id: r.guild_id,
      channel_id: r.id,
      channel_type: r.type
    }), J(!1)
  }, [z, P, r, J]);
  o.useEffect(() => (u.addAutomaticAnchorCallback(K), () => {
    u.removeAutomaticAnchorCallback(K)
  }), [u, K]), o.useEffect(() => {
    (0, m.G1)(r.id)
  }, [r.id]), o.useEffect(() => (document.addEventListener("mousedown", $), () => {
    document.removeEventListener("mousedown", $)
  }), [$]);
  let ee = o.useMemo(() => (0, s.jsx)(p.Z, {
      channel: r,
      summaries: P,
      summariesMembers: x,
      selectTopic: Q,
      setOpen: J
    }), [P, x, Q, J, r]),
    et = o.useCallback(() => {
      let e = C.ZP.ackMessageId(r.id);
      null != e ? I.Z.jumpToMessage({
        channelId: r.id,
        messageId: e,
        offset: 1,
        context: "Mark As Read"
      }) : I.Z.jumpToMessage({
        channelId: r.id,
        messageId: B.default.castChannelIdAsMessageId(r.id),
        offset: 1,
        context: "Mark As Read"
      })
    }, [r.id]),
    en = o.useCallback(() => {
      (0, T.In)(r.id)
    }, [r.id]),
    ei = F.Z.Messages.SUMMARIES_NO_SUMMARIES;
  return P.length > 0 && (ei = "" === H || null == H ? F.Z.Messages.SUMMARIES_VIEW_ALL : H), h ? null : (0, s.jsxs)("div", {
    ref: g,
    className: l()(Y.newTopicsBarContainer, Y.containerMarginTop),
    children: [(0, s.jsx)("div", {
      className: l()(Y.newTopicsBarTopicSection),
      children: (0, s.jsx)(E.Clickable, {
        className: Y.newTopicsBarTextClickable,
        "aria-label": F.Z.Messages.SUMMARY_PILL,
        onClick: X,
        children: (0, s.jsxs)("div", {
          className: l()({
            [Y.newTopicsBarTextUnselected]: !z,
            [Y.newTopicsBarTextSelected]: z
          }),
          children: [(0, s.jsx)(E.TopicsIcon, {
            size: "xs",
            color: "currentColor",
            className: Y.newTopicsBarIcon
          }), (0, s.jsx)(E.Text, {
            variant: "text-sm/medium",
            className: l()(Y.newTopicsBarCompact, Y.newTopicsBarText),
            children: ei
          }), (0, s.jsx)(b.Z, {
            width: 16,
            height: 16,
            direction: b.Z.Directions.DOWN,
            className: Y.newTopicsBarCaret
          })]
        })
      })
    }), (0, s.jsx)(E.Clickable, {
      onClick: et,
      className: l()(Y.barButtonMain, Y.newTopicsBarInitial),
      children: a
    }), (0, s.jsxs)(E.Clickable, {
      onClick: en,
      className: l()(Y.barButtonAlt, Y.flexEnd),
      children: [(0, s.jsx)("div", {
        className: Y.newTopicsBarCompact,
        children: F.Z.Messages.MARK_AS_READ
      }), (0, s.jsx)(E.ChatCheckIcon, {
        size: "md",
        color: "currentColor",
        className: Y.barButtonIcon
      })]
    }), z && (0, s.jsxs)("div", {
      className: Y.topicsDropdown,
      children: [(0, s.jsxs)("div", {
        className: Y.topicsDropdownHeading,
        children: [(0, s.jsxs)("div", {
          className: Y.topicsDropdownHeadingText,
          children: [(0, s.jsx)(E.TopicsIcon, {
            size: "custom",
            color: "currentColor",
            className: Y.topicsPillHeadingIcon,
            width: 18,
            height: 20
          }), (0, s.jsx)(E.Heading, {
            variant: "heading-md/bold",
            color: "header-primary",
            lineClamp: 1,
            children: F.Z.Messages.SUMMARIES
          }), (0, s.jsx)(A.Z, {
            className: Y.summariesBetaTag
          })]
        }), (0, s.jsx)(E.Clickable, {
          "aria-label": F.Z.Messages.CLOSE,
          onClick: X,
          className: Y.topicsDropdownClose,
          children: (0, s.jsx)(E.CloseSmallIcon, {
            size: "md",
            color: "currentColor"
          })
        })]
      }), (0, s.jsx)(E.Scroller, {
        ref: M,
        className: Y.topicsScroller,
        fade: !0,
        children: ee
      })]
    })]
  })
}

function es(e, t) {
  return null != t && e.length === t.length && !e.some((e, n) => {
    var i, r;
    return i = e, null == (r = t[n]) || i.length !== r.length || !!i.some((e, t) => r[t] !== e)
  })
}

function eo(e) {
  var t, n, i;
  let {
    channel: r,
    scrollManager: a
  } = e, {
    disableInteractions: u
  } = o.useContext(U.G), [T, h] = o.useState(null), f = o.useRef(null), [R, g] = o.useState(null), C = o.useRef(null), L = (0, d.Wu)([O.Z], () => {
    var e;
    return null !== (e = O.Z.summaries(r.id)) && void 0 !== e ? e : []
  }, [r]), D = (0, N.Z)(L);
  o.useEffect(() => {
    !_().isEqual(D, L) && G.default.track(k.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
      num_summaries: L.length,
      message_counts: L.map(e => e.count),
      start_message_ids: L.map(e => e.startId),
      end_message_ids: L.map(e => e.endId),
      num_participants: L.map(e => e.people.length),
      guild_id: r.guild_id,
      channel_id: r.id,
      channel_type: r.type
    })
  }, [L, D, r.guild_id, r.id, r.type]);
  let M = (0, d.e7)([v.default], () => {
      var e;
      return null !== (e = null == L ? void 0 : L.map(e => {
        var t;
        return null === (t = e.people) || void 0 === t ? void 0 : t.map(e => {
          var t;
          return null !== (t = v.default.getUser(e)) && void 0 !== t ? t : null
        }).filter(w.lm)
      })) && void 0 !== e ? e : []
    }, [L], es),
    P = null !== (n = (0, d.e7)([O.Z], () => O.Z.visibleSummaryIndex())) && void 0 !== n ? n : -1,
    y = null == L ? void 0 : null === (t = L[P]) || void 0 === t ? void 0 : t.topic;
  null == y && null == T && (null == L ? void 0 : L.length) >= 1 && (y = null === (i = L[0]) || void 0 === i ? void 0 : i.topic);
  let x = o.useMemo(() => _().get(L, P - 1), [P, L]),
    B = o.useMemo(() => _().get(L, P + 1), [P, L]),
    V = o.useMemo(() => _().debounce(e => {
      var t;
      h(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null)
    }, 64), [h]),
    H = o.useMemo(() => _().throttle(() => {
      (0, m.yK)(null)
    }, 1200, {
      trailing: !1
    }), []),
    j = o.useCallback(e => {
      H(), V(e)
    }, [V, H]),
    [W, K] = o.useState(!1),
    z = o.useCallback(() => {
      G.default.track(k.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
        topics_dropdown_open: !W,
        num_summaries: L.length,
        message_counts: L.map(e => e.count),
        start_message_ids: L.map(e => e.startId),
        end_message_ids: L.map(e => e.endId),
        num_participants: L.map(e => e.people.length),
        guild_id: r.guild_id,
        channel_id: r.id,
        channel_type: r.type
      }), K(!W)
    }, [W, L, K, r]),
    q = o.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Z.DZ.PILL_DROPDOWN,
        n = L[e];
      if (null == n) return;
      (0, m.wv)(r.id, n.id), (0, m.yK)(r.id, n.id);
      let i = () => {
        a.removeScrollCompleteCallback(i), setTimeout(() => {
          a.addAutomaticAnchorCallback(j, !1)
        }, 100)
      };
      a.removeAutomaticAnchorCallback(j), a.addScrollCompleteCallback(i), G.default.track(k.rMx.SUMMARIES_TOPIC_CLICKED, {
        source: t,
        message_id: n.startId,
        guild_id: r.guild_id,
        channel_id: r.id,
        channel_type: r.type
      }), I.Z.jumpToMessage({
        channelId: r.id,
        messageId: n.startId,
        flash: !0,
        offset: 0,
        jumpType: S.SR.ANIMATED,
        context: "Summary Jump"
      })
    }, [L, r, j, a]),
    X = o.useCallback(() => {
      q(P - 1, Z.DZ.PILL_NEXT_ARROW)
    }, [q, P]),
    Q = o.useCallback(() => {
      q(P + 1, Z.DZ.PILL_PREVIOUS_ARROW)
    }, [P, q]),
    J = o.useCallback(e => {
      var t;
      K(e);
      let n = null === (t = C.current) || void 0 === t ? void 0 : t.scrollTop;
      null != n && g(n)
    }, []);
  o.useEffect(() => {
    if (null != R && W) {
      var e;
      null === (e = C.current) || void 0 === e || e.scrollTo({
        top: R
      })
    }
  }, [R, W]);
  let $ = o.useCallback(e => {
    var t;
    if (!((0, c.k)(e.target) && (null === (t = f.current) || void 0 === t ? void 0 : t.contains(e.target)))) W && G.default.track(k.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
      topics_dropdown_open: !1,
      num_summaries: L.length,
      message_counts: L.map(e => e.count),
      start_message_ids: L.map(e => e.startId),
      end_message_ids: L.map(e => e.endId),
      num_participants: L.map(e => e.people.length),
      guild_id: r.guild_id,
      channel_id: r.id,
      channel_type: r.type
    }), J(!1)
  }, [W, L, r, J]);
  o.useEffect(() => (a.addAutomaticAnchorCallback(j), () => {
    a.removeAutomaticAnchorCallback(j)
  }), [a, j]), o.useEffect(() => {
    (0, m.G1)(r.id)
  }, [r.id]), o.useEffect(() => (document.addEventListener("mousedown", $), () => {
    document.removeEventListener("mousedown", $)
  }), [$]);
  let ee = o.useMemo(() => (0, s.jsx)(p.Z, {
    channel: r,
    summaries: L,
    summariesMembers: M,
    selectTopic: q,
    setOpen: J
  }), [L, M, q, J, r]);
  if (!(0, d.e7)([O.Z], () => O.Z.shouldShowTopicsBar())) return null;
  let et = F.Z.Messages.SUMMARIES_NO_SUMMARIES;
  return L.length > 0 && (et = "" === y || null == y ? F.Z.Messages.SUMMARIES_VIEW_ALL : y), u ? null : (0, s.jsxs)("div", {
    ref: f,
    className: l()(Y.topicsPillContainer, Y.containerMarginTop),
    children: [(0, s.jsxs)("div", {
      className: Y.topicsPill,
      children: [(0, s.jsx)(E.Clickable, {
        className: Y.topicsPillText,
        "aria-label": F.Z.Messages.SUMMARY_PILL,
        onClick: z,
        children: (0, s.jsxs)("div", {
          className: l()({
            [Y.topicsPillTextUnselected]: !W,
            [Y.topicsPillTextSelected]: W
          }),
          children: [(0, s.jsx)(E.TopicsIcon, {
            size: "xs",
            color: "currentColor",
            className: Y.topicsPillSummaryIcon
          }), (0, s.jsx)(E.Text, {
            className: Y.topicsPillTextTitle,
            variant: "text-sm/medium",
            children: et
          }), (0, s.jsx)(b.Z, {
            width: 16,
            height: 16,
            direction: b.Z.Directions.DOWN,
            className: Y.topicsPillDropdownCaret
          })]
        })
      }), (0, s.jsxs)("div", {
        className: Y.topicsPillCarets,
        children: [(0, s.jsx)(E.Clickable, {
          "aria-label": F.Z.Messages.SUMMARY_PILL_NEXT,
          onClick: Q,
          className: l()(Y.topicsPillCaret, Y.topicsCaretLeft, {
            [Y.topicsPillCaretDisabled]: null == B
          }),
          children: (0, s.jsx)(b.Z, {
            width: 16,
            height: 16,
            direction: b.Z.Directions.UP
          })
        }), (0, s.jsx)(E.Clickable, {
          "aria-label": F.Z.Messages.SUMMARY_PILL_PREVIOUS,
          onClick: X,
          className: l()(Y.topicsPillCaret, Y.topicsCaretRight, {
            [Y.topicsPillCaretDisabled]: null == x
          }),
          children: (0, s.jsx)(b.Z, {
            width: 16,
            height: 16,
            direction: b.Z.Directions.DOWN
          })
        })]
      })]
    }), W && (0, s.jsxs)("div", {
      className: Y.topicsDropdown,
      children: [(0, s.jsxs)("div", {
        className: Y.topicsDropdownHeading,
        children: [(0, s.jsxs)("div", {
          className: Y.topicsDropdownHeadingText,
          children: [(0, s.jsx)(E.TopicsIcon, {
            size: "custom",
            color: "currentColor",
            className: Y.topicsPillHeadingIcon,
            width: 18,
            height: 20
          }), (0, s.jsx)(E.Heading, {
            variant: "heading-md/bold",
            color: "header-primary",
            lineClamp: 1,
            children: F.Z.Messages.SUMMARIES
          }), (0, s.jsx)(A.Z, {
            className: Y.summariesBetaTag
          })]
        }), (0, s.jsx)(E.Clickable, {
          "aria-label": F.Z.Messages.CLOSE,
          onClick: z,
          className: Y.topicsDropdownClose,
          children: (0, s.jsx)(E.CloseSmallIcon, {
            size: "md",
            color: "currentColor"
          })
        })]
      }), (0, s.jsx)(E.Scroller, {
        ref: C,
        className: Y.topicsScroller,
        fade: !0,
        children: ee
      })]
    })]
  })
}
let ea = function(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, s.jsxs)("div", {
      className: Y.tooltip,
      children: [(0, s.jsx)(E.Text, {
        color: "none",
        variant: "text-sm/semibold",
        lineClamp: 1,
        className: Y.tooltipEmojiName,
        children: e
      }), t && (0, s.jsx)(E.Text, {
        className: Y.clickCTA,
        color: "text-muted",
        variant: "text-sm/normal",
        children: F.Z.Messages.EMOJI_TOOLTIP_CLICK_CTA
      })]
    })
  },
  el = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, s.jsx)("div", {
      className: l()(Y.popoutContainer, n),
      children: t
    })
  },
  eu = e => {
    let {
      className: t
    } = e;
    return (0, s.jsx)(el, {
      className: t,
      children: (0, s.jsx)("div", {
        className: Y.popoutLoadingBackground,
        children: (0, s.jsx)("div", {
          className: Y.popoutLoadingForeground
        })
      })
    })
  }