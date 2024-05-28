"use strict";
n.r(t), n.d(t, {
  TOAST_LINGER_MS: function() {
    return L
  },
  default: function() {
    return j
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("392711"),
  o = n("920906"),
  u = n("442837"),
  d = n("481060"),
  c = n("570140"),
  f = n("475179"),
  h = n("904245"),
  m = n("372900"),
  p = n("200120"),
  E = n("937889"),
  C = n("739566"),
  g = n("378233"),
  S = n("419922"),
  _ = n("375954"),
  T = n("699516"),
  I = n("512665"),
  A = n("768581"),
  v = n("70956"),
  x = n("823379"),
  N = n("792125"),
  M = n("981631"),
  R = n("768760"),
  y = n("588233");
let L = 10 * v.default.Millis.SECOND;

function O(e) {
  var t;
  let {
    message: n
  } = e, s = (0, u.useStateFromStores)([T.default], () => T.default.isBlocked(n.author.id)), r = (0, C.useNullableMessageAuthor)(n), o = l.useContext(m.default), [c, _] = l.useState(!1), v = (0, p.useActiveKeywordFiltersCacheKey)(), x = l.useCallback(e => {
    "A" !== e.target.nodeName && (f.default.updateChatOpen(n.channel_id, !0), h.default.jumpToMessage({
      channelId: n.channel_id,
      messageId: n.id,
      flash: !0
    }))
  }, [n.channel_id, n.id]), N = null != n.content && "" !== n.content ? (0, E.default)(n, {
    isInteracting: c,
    shouldFilterKeywords: null != v
  }).content : null, {
    contentPlaceholder: M,
    renderedContent: L,
    icon: O
  } = (0, I.renderSingleLineMessage)(n, N, s, y.messageContent, {
    iconClass: y.messageContentIcon,
    iconSize: R.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
  }), j = (0, g.getMessageStickers)(n), P = j.length > 0 ? j.map(e => (0, a.jsx)(S.default, {
    className: y.sticker,
    size: 128,
    sticker: e,
    isInteracting: c
  }, e.id)) : null;
  return (0, a.jsxs)(d.Clickable, {
    className: y.toast,
    onMouseEnter: () => {
      _(!0)
    },
    onMouseLeave: () => {
      _(!1)
    },
    onClick: x,
    children: [(0, a.jsxs)("div", {
      className: i()(y.messageContentWrapper, {
        [y.mentioned]: n.mentioned
      }),
      children: [null !== (t = null != L ? L : P) && void 0 !== t ? t : (0, a.jsx)("span", {
        children: M
      }), null != P ? null : O]
    }), (0, a.jsx)("img", {
      alt: "",
      src: (null == r ? void 0 : r.guildMemberAvatar) != null && null != o ? (0, A.getGuildMemberAvatarURLSimple)({
        guildId: o,
        userId: n.author.id,
        avatar: r.guildMemberAvatar
      }) : n.author.getAvatarURL(o, 32),
      className: y.avatar
    })]
  })
}

function j(e) {
  let {
    channelId: t,
    className: n
  } = e, [s, d] = l.useState(!1), {
    toastsHidden: f,
    toastMessages: h
  } = function(e) {
    var t;
    let {
      channelId: n,
      isFrozen: a,
      count: s,
      lingerMs: i
    } = e, [r, o] = l.useState([]), [d, f] = l.useState(!1), h = l.useRef(null), m = l.useRef(), p = l.useCallback(() => {
      o([]), f(!0)
    }, []);
    l.useEffect(() => {
      function e(e) {
        let {
          channelId: t,
          message: a
        } = e;
        t === n && a.type !== M.MessageTypes.STAGE_START && a.type !== M.MessageTypes.STAGE_END && a.type !== M.MessageTypes.STAGE_TOPIC && a.type !== M.MessageTypes.STAGE_SPEAKER && a.type !== M.MessageTypes.STAGE_RAISE_HAND && (clearTimeout(m.current), m.current = setTimeout(p, i), o(e => [...e, a.id]))
      }
      return c.default.subscribe("MESSAGE_CREATE", e), () => {
        c.default.unsubscribe("MESSAGE_CREATE", e)
      }
    }, [n, p, s, i]), l.useEffect(() => () => {
      clearTimeout(m.current)
    }, []), l.useEffect(() => {
      r.length > 3 && o(e => {
        let t = e.length - 3;
        return [...e.slice(t)]
      })
    }, [r]), a && null == h.current ? h.current = r : !a && null != h.current && (h.current = null);
    let E = null !== (t = h.current) && void 0 !== t ? t : r;
    return {
      toastsHidden: d,
      toastMessages: (0, u.useStateFromStoresArray)([_.default], () => E.map(e => _.default.getMessage(n, e)), [n, E]).filter(x.isNotNullish)
    }
  }({
    channelId: t,
    isFrozen: s,
    count: 3,
    lingerMs: L
  }), m = l.useRef({}), [p, E] = l.useState({}), C = l.useCallback((e, t) => {
    null == t ? delete m.current[e] : m.current[e] = t
  }, []);
  l.useLayoutEffect(() => {
    let e = {},
      t = 0;
    for (let a of h) {
      var n;
      let l = null !== (n = m.current[a.id]) && void 0 !== n ? n : 0;
      e[a.id] = t, t += l + 8
    }!(0, r.isEqual)(e, p) && E(e)
  }, [h]);
  let g = h.map(e => ({
      message: e,
      height: m.current[e.id],
      y: p[e.id]
    })),
    S = (0, o.useTransition)(g, {
      keys: e => e.message.id,
      from: () => ({
        opacity: 0
      }),
      enter: e => {
        let {
          y: t
        } = e;
        return {
          opacity: 1,
          translateY: t
        }
      },
      update: e => {
        let {
          y: t
        } = e;
        return {
          translateY: t
        }
      },
      leave: e => {
        let {
          height: t,
          y: n
        } = e;
        return {
          opacity: 0,
          translateY: f ? n : -(null != t ? t : 0) - 8,
          pointerEvents: "none"
        }
      }
    });
  return (0, a.jsx)("div", {
    className: i()(n, (0, N.getThemeClass)(M.ThemeTypes.DARK)),
    onMouseEnter: () => {
      d(!0)
    },
    onMouseLeave: () => {
      d(!1)
    },
    children: S((e, t) => (0, a.jsx)(o.animated.div, {
      ref: e => C(t.message.id, null != e ? e.offsetHeight : null),
      className: y.toastWrapper,
      style: e,
      children: (0, a.jsx)(O, {
        message: t.message
      })
    }))
  })
}