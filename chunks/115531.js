"use strict";
n.r(t), n.d(t, {
  TOAST_LINGER_MS: function() {
    return j
  },
  default: function() {
    return O
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  o = n("907002"),
  u = n("446674"),
  d = n("77078"),
  c = n("913144"),
  f = n("255397"),
  h = n("819689"),
  m = n("390236"),
  p = n("95045"),
  E = n("574073"),
  S = n("24373"),
  g = n("41170"),
  C = n("377253"),
  _ = n("27618"),
  I = n("93427"),
  T = n("315102"),
  v = n("718517"),
  x = n("449008"),
  N = n("439932"),
  A = n("49111"),
  M = n("719347"),
  R = n("907646");
let j = 10 * v.default.Millis.SECOND;

function L(e) {
  var t;
  let {
    message: n
  } = e, s = (0, u.useStateFromStores)([_.default], () => _.default.isBlocked(n.author.id)), r = (0, E.useNullableMessageAuthor)(n), o = a.useContext(m.default), [c, C] = a.useState(!1), v = a.useCallback(e => {
    "A" !== e.target.nodeName && (f.default.updateChatOpen(n.channel_id, !0), h.default.jumpToMessage({
      channelId: n.channel_id,
      messageId: n.id,
      flash: !0
    }))
  }, [n.channel_id, n.id]), x = null != n.content && "" !== n.content ? (0, p.default)(n, {
    isInteracting: c
  }).content : null, {
    contentPlaceholder: N,
    renderedContent: A,
    icon: j
  } = (0, I.renderSingleLineMessage)(n, x, s, R.messageContent, {
    iconClass: R.messageContentIcon,
    iconSize: M.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
  }), L = (0, S.getMessageStickers)(n), O = L.length > 0, y = O ? L.map(e => (0, l.jsx)(g.default, {
    className: R.sticker,
    size: 128,
    sticker: e,
    isInteracting: c
  }, e.id)) : null;
  return (0, l.jsxs)(d.Clickable, {
    className: R.toast,
    onMouseEnter: () => {
      C(!0)
    },
    onMouseLeave: () => {
      C(!1)
    },
    onClick: v,
    children: [(0, l.jsxs)("div", {
      className: i(R.messageContentWrapper, {
        [R.mentioned]: n.mentioned
      }),
      children: [null !== (t = null != A ? A : y) && void 0 !== t ? t : (0, l.jsx)("span", {
        children: N
      }), null != y ? null : j]
    }), (0, l.jsx)("img", {
      alt: "",
      src: (null == r ? void 0 : r.guildMemberAvatar) != null && null != o ? (0, T.getGuildMemberAvatarURLSimple)({
        guildId: o,
        userId: n.author.id,
        avatar: r.guildMemberAvatar
      }) : n.author.getAvatarURL(o, 32),
      className: R.avatar
    })]
  })
}

function O(e) {
  let {
    channelId: t,
    className: n
  } = e, [s, d] = a.useState(!1), {
    toastsHidden: f,
    toastMessages: h
  } = function(e) {
    var t;
    let {
      channelId: n,
      isFrozen: l,
      count: s,
      lingerMs: i
    } = e, [r, o] = a.useState([]), [d, f] = a.useState(!1), h = a.useRef(null), m = a.useRef(), p = a.useCallback(() => {
      o([]), f(!0)
    }, []);
    a.useEffect(() => {
      function e(e) {
        let {
          channelId: t,
          message: l
        } = e;
        t === n && l.type !== A.MessageTypes.STAGE_START && l.type !== A.MessageTypes.STAGE_END && l.type !== A.MessageTypes.STAGE_TOPIC && l.type !== A.MessageTypes.STAGE_SPEAKER && l.type !== A.MessageTypes.STAGE_RAISE_HAND && (clearTimeout(m.current), m.current = setTimeout(p, i), o(e => [...e, l.id]))
      }
      return c.default.subscribe("MESSAGE_CREATE", e), () => {
        c.default.unsubscribe("MESSAGE_CREATE", e)
      }
    }, [n, p, s, i]), a.useEffect(() => () => {
      clearTimeout(m.current)
    }, []), a.useEffect(() => {
      r.length > 3 && o(e => {
        let t = e.length - 3;
        return [...e.slice(t)]
      })
    }, [r]), l && null == h.current ? h.current = r : !l && null != h.current && (h.current = null);
    let E = null !== (t = h.current) && void 0 !== t ? t : r,
      S = (0, u.useStateFromStoresArray)([C.default], () => E.map(e => C.default.getMessage(n, e)), [n, E]);
    return {
      toastsHidden: d,
      toastMessages: S.filter(x.isNotNullish)
    }
  }({
    channelId: t,
    isFrozen: s,
    count: 3,
    lingerMs: j
  }), m = a.useRef({}), [p, E] = a.useState({}), S = a.useCallback((e, t) => {
    null == t ? delete m.current[e] : m.current[e] = t
  }, []);
  a.useLayoutEffect(() => {
    let e = {},
      t = 0;
    for (let l of h) {
      var n;
      let a = null !== (n = m.current[l.id]) && void 0 !== n ? n : 0;
      e[l.id] = t, t += a + 8
    }!(0, r.isEqual)(e, p) && E(e)
  }, [h]);
  let g = h.map(e => ({
      message: e,
      height: m.current[e.id],
      y: p[e.id]
    })),
    _ = (0, o.useTransition)(g, {
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
  return (0, l.jsx)("div", {
    className: i(n, (0, N.getThemeClass)(A.ThemeTypes.DARK)),
    onMouseEnter: () => {
      d(!0)
    },
    onMouseLeave: () => {
      d(!1)
    },
    children: _((e, t) => (0, l.jsx)(o.animated.div, {
      ref: e => S(t.message.id, null != e ? e.offsetHeight : null),
      className: R.toastWrapper,
      style: e,
      children: (0, l.jsx)(L, {
        message: t.message
      })
    }))
  })
}