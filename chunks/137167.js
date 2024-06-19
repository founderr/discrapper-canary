n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n(47120);
var a = n(735250),
  l = n(470079),
  s = n(392711),
  r = n(442837),
  i = n(381499),
  o = n(481060),
  d = n(367907),
  c = n(971628),
  u = n(695346),
  m = n(675478),
  h = n(430824),
  S = n(892880),
  T = n(226951),
  x = n(498058),
  g = n(158631),
  v = n(644148),
  f = n(243980),
  E = n(995923),
  C = n(981631),
  b = n(71080),
  R = n(689938),
  _ = n(233220);

function I(e) {
  let {
    headerText: t = R.Z.Messages.BROADCASTING_SETTINGS,
    buttonCTA: n = R.Z.Messages.BROADCAST_SETTINGS_SAVE,
    transitionState: I,
    onClose: M,
    onSave: A
  } = e, p = (0, v.jp)(), [N, Z] = l.useState(p), [j, U] = l.useState(""), D = u.Uc.useSetting(), [L, y] = l.useState(null == D || D), w = u.xd.useSetting(), [O, G] = l.useState(w), [B, k] = l.useState(!1), [P, F] = l.useState(!1), z = (0, g._n)(), H = (0, x.Z)(null == z ? void 0 : z.channelId), $ = null != z, K = l.useMemo(() => D !== L || !(0, s.isEqual)(p, N) || w !== O, [D, L, p, N, w, O]), Q = null != A, W = l.useMemo(() => L || Object.keys(N[b.aC.USER]).length > 0 || Object.keys(N[b.aC.GUILD]).length > 0, [L, N]), q = !W && $ || !W && Q || !K && !Q, V = l.useMemo(() => "@" === j.trim().charAt(0), [j]), Y = (0, r.Wu)([h.Z], () => h.Z.getGuildIds()), J = (0, v.Kw)(Y), X = l.useMemo(() => J.map(e => e.id), [J]), [ee, et] = (0, v.BT)(V, function(e) {
    var t;
    let n = (t = j.trim(), V ? t.slice(1) : t);
    return RegExp("".concat(T.Z.escape(n)), "i").test(e)
  }, L);

  function en() {
    var e;
    null == A || A();
    let [t, n] = er();
    d.ZP.trackWithMetadata(C.rMx.BROADCAST_SETTINGS_UPDATED, {
      auto_broadcast: O,
      broadcast_to_all_friends: L,
      num_allowed_users_in_broadcast: n.length,
      allowed_users: n,
      num_guilds_in_broadcast: t.length,
      guilds: t,
      num_viewers_in_broadcast: H.length,
      current_viewers: null !== (e = H.map(e => e.id)) && void 0 !== e ? e : [],
      started_broadcast: Q
    })
  }

  function ea(e) {
    U(e)
  }

  function el(e, t) {
    let n = (0, c.G)(t);
    Z(a => {
      let l = {
        ...a
      };
      return l[e] = {
        ...l[e]
      }, n in l[e] ? delete l[e][n] : l[e][n] = (0, v.OU)(t), l
    })
  }

  function es(e, t) {
    Z(n => {
      let a = {
        ...n
      };
      return a[e] = {
        ...a[e]
      }, delete a[e][t], a
    })
  }

  function er() {
    let e = new Set,
      t = new Set;
    Object.values(N[b.aC.USER]).forEach(e => {
      let {
        row: n
      } = e;
      return t.add(n.id)
    }), Object.values(N[b.aC.GUILD]).forEach(t => {
      let {
        row: n
      } = t;
      return e.add(n.id)
    });
    let n = (0, v.KO)(Array.from(e));
    return [n, (0, v.bI)(Array.from(t))]
  }
  return l.useEffect(() => {
    d.ZP.trackWithMetadata(C.rMx.OPEN_MODAL, {
      type: Q ? "Start Broadcast" : "Update Broadcast"
    })
  }, [Q]), l.useEffect(() => {
    (0, s.chunk)(X, 100).forEach(e => {
      S.Z.requestMembers(e, j.trim())
    })
  }, [X, j]), (0, a.jsxs)(o.ModalRoot, {
    transitionState: I,
    children: [(0, a.jsx)(o.Heading, {
      variant: "heading-xl/semibold",
      className: _.header,
      children: t
    }), (0, a.jsx)(o.ModalCloseButton, {
      onClick: M,
      className: _.close
    }), (0, a.jsxs)(o.ModalContent, {
      className: _.content,
      paddingFix: !1,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: _.description,
        children: R.Z.Messages.BROADCASTING_DESCRIPTION
      }), (0, a.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        className: _.title,
        children: R.Z.Messages.BROADCASTING_SETTINGS_MODAL_AUDIENCE_TITLE
      }), (0, a.jsxs)("div", {
        className: _.switch,
        children: [(0, a.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: R.Z.Messages.BROADCASTING_SETTINGS_MODAL_FRIENDS
        }), (0, a.jsx)(o.Switch, {
          checked: L,
          onChange: e => {
            y(e)
          }
        })]
      }), (0, a.jsx)(f.Z, {
        selectedTags: N[b.aC.USER],
        query: j,
        onQueryChange: ea,
        onClickRow: e => el(b.aC.USER, e),
        onRemoveTag: e => es(b.aC.USER, e),
        title: R.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS,
        hintText: R.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS_HINT.format({
          count: E.uv
        }),
        placeholderText: R.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_USERS,
        users: ee,
        expanded: B,
        setExpanded: e => {
          ea(""), k(e), F(!1)
        },
        maxCount: E.uv
      }), (0, a.jsx)(f.Z, {
        selectedTags: N[b.aC.GUILD],
        query: j,
        onQueryChange: ea,
        onClickRow: e => el(b.aC.GUILD, e),
        onRemoveTag: e => es(b.aC.GUILD, e),
        title: R.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS,
        hintText: R.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS_HINT.format({
          count: E.Ly
        }),
        placeholderText: R.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_GUILDS,
        guilds: et,
        expanded: P,
        setExpanded: e => {
          ea(""), F(e), k(!1)
        },
        maxCount: E.Ly
      }), (0, a.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        className: _.title,
        children: R.Z.Messages.BROADCASTING_SETTINGS_MODAL_BEHAVIOR_TITLE
      }), (0, a.jsxs)("div", {
        className: _.switch,
        children: [(0, a.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: R.Z.Messages.AUTO_BROADCAST_TOGGLE
        }), (0, a.jsx)(o.Switch, {
          checked: O,
          onChange: G
        })]
      })]
    }), (0, a.jsx)(o.ModalFooter, {
      children: (0, a.jsx)(o.Button, {
        disabled: q,
        onClick: function() {
          if (!q) {
            if (K) {
              let [e, t] = er();
              m.hW.updateAsync("broadcast", n => {
                n.allowedGuildIds = e, n.allowedUserIds = t, n.allowFriends = i.D5.create({
                  value: L
                }), n.autoBroadcast = i.D5.create({
                  value: O
                }), en(), M()
              }, m.fy.INFREQUENT_USER_ACTION);
              return
            }
            en(), M()
          }
        },
        children: n
      })
    })]
  })
}