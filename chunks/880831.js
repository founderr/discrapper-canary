n.d(t, {
  Z: function() {
    return O
  },
  z: function() {
    return j
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(392711),
  o = n(920906),
  c = n(442837),
  u = n(481060),
  d = n(570140),
  h = n(475179),
  m = n(904245),
  p = n(372900),
  E = n(905405),
  g = n(937889),
  f = n(739566),
  C = n(267128),
  _ = n(378233),
  I = n(419922),
  x = n(375954),
  T = n(699516),
  N = n(768581),
  Z = n(70956),
  S = n(823379),
  v = n(792125),
  A = n(981631),
  M = n(217702),
  R = n(275953);
let j = 10 * Z.Z.Millis.SECOND;

function L(e) {
  var t;
  let {
    message: n
  } = e, s = (0, c.e7)([T.Z], () => T.Z.isBlockedForMessage(n)), r = (0, f.Uj)(n), o = i.useContext(p.Z), [d, x] = i.useState(!1), Z = (0, E.p)(), S = i.useCallback(e => {
    if ("A" !== e.target.nodeName) h.Z.updateChatOpen(n.channel_id, !0), m.Z.jumpToMessage({
      channelId: n.channel_id,
      messageId: n.id,
      flash: !0
    })
  }, [n.channel_id, n.id]), v = null != n.content && "" !== n.content ? (0, g.ZP)(n, {
    isInteracting: d,
    shouldFilterKeywords: Z
  }).content : null, {
    contentPlaceholder: A,
    renderedContent: j,
    trailingIcon: L,
    leadingIcon: O
  } = (0, C.f)(n, v, s, R.messageContent, {
    trailingIconClass: R.messageContentTrailingIcon,
    leadingIconClass: R.messageContentLeadingIcon,
    iconSize: M.WW
  }), P = (0, _.cv)(n), y = P.length > 0 ? P.map(e => (0, l.jsx)(I.ZP, {
    className: R.sticker,
    size: 128,
    sticker: e,
    isInteracting: d
  }, e.id)) : null;
  return (0, l.jsxs)(u.Clickable, {
    className: R.toast,
    onMouseEnter: () => {
      x(!0)
    },
    onMouseLeave: () => {
      x(!1)
    },
    onClick: S,
    children: [(0, l.jsxs)("div", {
      className: a()(R.messageContentWrapper, {
        [R.mentioned]: n.mentioned
      }),
      children: [null != y ? null : O, null !== (t = null != j ? j : y) && void 0 !== t ? t : (0, l.jsx)("span", {
        children: A
      }), null != y ? null : L]
    }), (0, l.jsx)("img", {
      alt: "",
      src: (null == r ? void 0 : r.guildMemberAvatar) != null && null != o ? (0, N.JM)({
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
  } = e, [s, u] = i.useState(!1), {
    toastsHidden: h,
    toastMessages: m
  } = function(e) {
    var t;
    let {
      channelId: n,
      isFrozen: l,
      count: s,
      lingerMs: a
    } = e, [r, o] = i.useState([]), [u, h] = i.useState(!1), m = i.useRef(null), p = i.useRef(), E = i.useCallback(() => {
      o([]), h(!0)
    }, []);
    i.useEffect(() => {
      function e(e) {
        let {
          channelId: t,
          message: l
        } = e;
        if (t === n && l.type !== A.uaV.STAGE_START && l.type !== A.uaV.STAGE_END && l.type !== A.uaV.STAGE_TOPIC && l.type !== A.uaV.STAGE_SPEAKER && l.type !== A.uaV.STAGE_RAISE_HAND) clearTimeout(p.current), p.current = setTimeout(E, a), o(e => [...e, l.id])
      }
      return d.Z.subscribe("MESSAGE_CREATE", e), () => {
        d.Z.unsubscribe("MESSAGE_CREATE", e)
      }
    }, [n, E, s, a]), i.useEffect(() => () => {
      clearTimeout(p.current)
    }, []), i.useEffect(() => {
      r.length > 3 && o(e => {
        let t = e.length - 3;
        return [...e.slice(t)]
      })
    }, [r]), l && null == m.current ? m.current = r : !l && null != m.current && (m.current = null);
    let g = null !== (t = m.current) && void 0 !== t ? t : r;
    return {
      toastsHidden: u,
      toastMessages: (0, c.Wu)([x.Z], () => g.map(e => x.Z.getMessage(n, e)), [n, g]).filter(S.lm)
    }
  }({
    channelId: t,
    isFrozen: s,
    count: 3,
    lingerMs: j
  }), p = i.useRef({}), [E, g] = i.useState({}), f = i.useCallback((e, t) => {
    null == t ? delete p.current[e] : p.current[e] = t
  }, []);
  i.useLayoutEffect(() => {
    let e = {},
      t = 0;
    for (let l of m) {
      var n;
      let i = null !== (n = p.current[l.id]) && void 0 !== n ? n : 0;
      e[l.id] = t, t += i + 8
    }!(0, r.isEqual)(e, E) && g(e)
  }, [m]);
  let C = m.map(e => ({
      message: e,
      height: p.current[e.id],
      y: E[e.id]
    })),
    _ = (0, o.useTransition)(C, {
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
          translateY: h ? n : -(null != t ? t : 0) - 8,
          pointerEvents: "none"
        }
      }
    });
  return (0, l.jsx)("div", {
    className: a()(n, (0, v.Q)(A.BRd.DARK)),
    onMouseEnter: () => {
      u(!0)
    },
    onMouseLeave: () => {
      u(!1)
    },
    children: _((e, t) => (0, l.jsx)(o.animated.div, {
      ref: e => f(t.message.id, null != e ? e.offsetHeight : null),
      className: R.toastWrapper,
      style: e,
      children: (0, l.jsx)(L, {
        message: t.message
      })
    }))
  })
}