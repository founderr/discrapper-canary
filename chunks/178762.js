n.d(t, {
  YN: function() {
    return M
  },
  iZ: function() {
    return R
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(392711),
  a = n.n(s),
  r = n(91192),
  o = n(876215),
  c = n(442837),
  u = n(481060),
  d = n(239091),
  h = n(607070),
  m = n(439170),
  p = n(594174),
  E = n(687694),
  g = n(69259),
  f = n(91140),
  C = n(227172),
  _ = n(551228),
  I = n(678869),
  x = n(278399),
  T = n(886217),
  N = n(555672),
  Z = n(644548),
  S = n(335326),
  v = n(268010),
  A = n(206583);
let M = 72;

function R(e) {
  return (null == e ? void 0 : e.type) === m.so.CONTENT_INVENTORY ? M : 0
}
let j = a().throttle(e => {
    (0, g.L)(A.xP.CARD_HOVER, e)
  }, 5e3, {
    leading: !0,
    trailing: !1
  }),
  L = e => {
    let {
      entry: t,
      ...n
    } = e;
    switch (t.content_type) {
      case o.s.PLAYED_GAME:
        return (0, l.jsx)(f.Z, {
          ...n,
          entry: t
        });
      case o.s.WATCHED_MEDIA:
        return (0, l.jsx)(S.ZP, {
          ...n,
          entry: t
        });
      case o.s.TOP_GAME:
        return (0, l.jsx)(N.ZP, {
          ...n,
          entry: t
        });
      case o.s.TOP_ARTIST:
        return (0, l.jsx)(x.ZP, {
          ...n,
          entry: t
        });
      case o.s.LISTENED_SESSION:
        return (0, l.jsx)(_.ZP, {
          ...n,
          entry: t
        });
      default:
        return null
    }
  },
  O = e => {
    let {
      entry: t,
      ...n
    } = e;
    switch (t.content_type) {
      case o.s.PLAYED_GAME:
        return (0, l.jsx)(C.Z, {
          ...n,
          entry: t
        });
      case o.s.WATCHED_MEDIA:
        return (0, l.jsx)(v.Z, {
          ...n,
          entry: t
        });
      case o.s.TOP_GAME:
        return (0, l.jsx)(Z.Z, {
          ...n,
          entry: t
        });
      case o.s.TOP_ARTIST:
        return (0, l.jsx)(T.Z, {
          ...n,
          entry: t
        });
      case o.s.LISTENED_SESSION:
        return (0, l.jsx)(I.Z, {
          ...n,
          entry: t
        });
      default:
        return null
    }
  };
t.ZP = i.memo(e => {
  var t;
  let {
    index: s,
    ...a
  } = e, [o, m] = i.useState("default"), f = (0, r.JA)("".concat(s)), C = null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff(), _ = {
    entry: a.entry,
    channelId: a.channel.id,
    guildId: a.channel.guild_id,
    requestId: a.requestId
  }, {
    openOnHover: I
  } = (0, E.C)({
    location: "MemberListContentRow"
  }), x = i.useRef(!1), [T, N] = i.useState(!1), [Z, S] = i.useState(!1), [v, M] = i.useState(!1), R = (0, c.e7)([h.Z], () => h.Z.keyboardModeEnabled);
  i.useEffect(() => {
    T && R && M(!0)
  }, [T, R]);
  let P = i.useCallback(e => {
      if (!!C)(0, d.jW)(e, async () => {
        let {
          default: e
        } = await n.e("153").then(n.bind(n, 330150));
        return () => (0, l.jsx)(e, {
          entry: a.entry,
          requestId: a.requestId
        })
      })
    }, [a, C]),
    y = i.useCallback(() => {
      m(String(Date.now()))
    }, []),
    b = () => {
      x.current = !1, setTimeout(() => {
        !x.current && (N(!1), M(R))
      }, 100)
    };
  return (0, l.jsx)("div", {
    onMouseEnter: () => {
      x.current = !0, setTimeout(() => {
        x.current && N(!0), I && (0, g.L)(A.xP.CARD_CLICK, _)
      }, 100)
    },
    onMouseLeave: b,
    children: (0, l.jsx)(u.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, l.jsx)(O, {
          closePopout: t,
          updatePopoutPosition: y,
          ...a
        })
      },
      position: "left",
      shouldShow: I ? T : Z,
      positionKey: o,
      onRequestOpen: () => (0, g.L)(A.xP.CARD_CLICK, _),
      onRequestClose: () => {
        v && b(), !I && (N(!1), S(!1))
      },
      spacing: 8,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, l.jsx)(u.Clickable, {
          onClick: () => {
            I && !T && N(!0), !I && S(e => !e)
          },
          children: (0, l.jsx)(u.FocusRing, {
            offset: {
              top: 4,
              bottom: 4,
              left: 4,
              right: 4
            },
            children: (0, l.jsx)("div", {
              ...e,
              ...f,
              onMouseEnter: () => {
                j(_)
              },
              onContextMenu: P,
              children: (0, l.jsx)(L, {
                ...a,
                selected: n
              })
            })
          })
        })
      }
    })
  })
})