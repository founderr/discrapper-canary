n.d(t, {
  Z: function() {
    return O
  }
}), n(653041), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(831209),
  a = n(442837),
  r = n(704215),
  o = n(481060),
  c = n(538239),
  u = n(566620),
  d = n(403404),
  h = n(906732),
  m = n(605236),
  p = n(706140),
  E = n(243778),
  g = n(488131),
  f = n(375954),
  C = n(626135),
  _ = n(585483),
  I = n(403182),
  x = n(127654),
  T = n(752305),
  N = n(951211),
  Z = n(981631),
  S = n(921944),
  v = n(489887),
  A = n(689938),
  M = n(356195);

function R(e, t, i, s) {
  (0, o.openModalLazy)(async () => {
    let {
      default: a
    } = await Promise.resolve().then(n.bind(n, 538239));
    return n => (0, l.jsx)(a, {
      ...n,
      activity: e,
      channel: t,
      activityActionType: i,
      analyticsLocations: s
    })
  }, {
    modalKey: c.activityInviteKey
  })
}
let j = /(.*)```(\w+)\n(.*)```(.*)/s;

function L() {
  let e = (0, a.e7)([f.Z], () => f.Z.hasCurrentUserSentMessageSinceAppStart()),
    t = [];
  e && t.push(r.z.ACTIVITIES_CHAT_MENU_NEW_BADGE);
  let [n] = (0, p.c)(t);
  return i.useEffect(() => () => {
    n === r.z.ACTIVITIES_CHAT_MENU_NEW_BADGE && (0, m.EW)(r.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
      dismissAction: S.L.TAKE_ACTION
    })
  }, [n]), (0, l.jsx)(E.Z, {
    contentTypes: t,
    children: e => {
      let {
        visibleContent: t
      } = e;
      return t === r.z.ACTIVITIES_CHAT_MENU_NEW_BADGE ? (0, l.jsx)(o.TextBadge, {
        text: A.Z.Messages.NEW,
        color: s.Z.BUTTON_DANGER_BACKGROUND
      }) : null
    }
  })
}

function O(e) {
  let {
    channel: t,
    options: a,
    onFileUpload: c,
    onClose: p,
    onSelect: E,
    draftType: f,
    editorTextContent: O,
    setValue: P,
    openClips: y
  } = e, {
    analyticsLocations: b
  } = (0, h.ZP)();
  i.useEffect(() => {
    C.default.track(Z.rMx.OPEN_POPOUT, {
      type: "Send Attachment",
      channel_id: t.id,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id]);

  function D() {
    (0, g.R6)(t, void 0, "Plus Button")
  }

  function U() {
    C.default.track(Z.rMx.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), P("/", (0, T.JM)("/"))
  }

  function k() {
    y()
  }

  function w() {
    (0, m.EW)(r.z.POLLS_CHAT_INPUT_COACHMARK, {
      dismissAction: S.L.TAKE_ACTION
    }), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("68784")]).then(n.bind(n, 611611));
      return n => (0, l.jsx)(e, {
        ...n,
        channel: t
      })
    }, {
      modalKey: v.$z
    })
  }

  function H() {
    C.default.track(Z.rMx.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
      channel_type: t.type,
      channel_id: t.id,
      guild_id: t.guild_id
    }), (0, d.Z)({
      channel: t,
      guildId: t.guild_id,
      locationObject: {
        page: t.isPrivate() ? Z.ZY5.DM_CHANNEL : Z.ZY5.GUILD_CHANNEL,
        section: Z.jXE.CHANNEL_TEXT_AREA,
        object: Z.qAy.CONTEXT_MENU_ITEM,
        objectType: Z.Qqv.ACTIVITY
      },
      openInPopout: !1,
      enableSelectedTextChannelInvite: !0,
      analyticsLocations: b
    }), (0, u.w1)({
      guildId: t.guild_id
    })
  }

  function B() {
    let e = O,
      n = "txt",
      l = "",
      i = O.match(j);
    null != i && (l = i[1], n = i[2], e = i[3], l += i[4]), (0, x.d)([(0, I.dp)(new Blob([e], {
      type: "text/plain"
    }), "message.".concat(n))], t, f), _.S.dispatchToLastSubscribed(Z.CkL.CLEAR_TEXT), "" !== l && _.S.dispatchToLastSubscribed(Z.CkL.INSERT_TEXT, {
      plainText: l
    })
  }
  return (0, l.jsx)(o.Menu, {
    onSelect: E,
    navId: "channel-attach",
    onClose: p,
    "aria-label": A.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    className: M.menu,
    children: a.map(function(e) {
      var n;
      let i = (0, l.jsxs)("div", {
        className: M.optionLabel,
        children: [(0, l.jsx)(e.icon, {
          className: M.optionIcon,
          color: "currentColor"
        }), (0, l.jsx)("div", {
          className: M.optionName,
          children: e.display
        }), null != e.badgeVal && e.badgeVal > 0 && (0, l.jsx)(o.NumberBadge, {
          className: M.badge,
          color: null !== (n = e.badgeColor) && void 0 !== n ? n : s.Z.STATUS_DANGER,
          count: e.badgeVal
        })]
      });
      switch (e.type) {
        case N.r.UPLOAD_A_FILE:
          return (0, l.jsx)(o.MenuItem, {
            id: "upload-file",
            label: i,
            action: c
          }, "upload-file");
        case N.r.UPLOAD_TEXT_AS_FILE:
          if ("" === O) return null;
          return (0, l.jsx)(o.MenuItem, {
            id: "upload-text-as-file",
            label: i,
            action: B
          }, "upload-text-as-file");
        case N.r.CLIPS:
          return (0, l.jsx)(o.MenuItem, {
            id: "clips",
            label: i,
            action: k
          }, "clips");
        case N.r.POLL:
          return (0, l.jsx)(o.MenuItem, {
            id: "poll",
            label: i,
            action: w
          }, "poll");
        case N.r.INVITE_TO_PLAY_GAME:
          return (0, l.jsx)(o.MenuItem, {
            id: "play",
            label: i,
            action: () => {
              var n;
              return n = e.activity, void(C.default.track(Z.rMx.OPEN_MODAL, {
                type: "Send Join Invite",
                application_id: n.application_id,
                location: Z.jXE.CHANNEL_TEXT_AREA
              }), R(n, t, Z.mFx.JOIN, b))
            }
          }, "play");
        case N.r.INVITE_TO_LISTEN:
          return (0, l.jsx)(o.MenuItem, {
            id: "listen",
            label: i,
            action: () => {
              var n;
              return n = e.activity, void(C.default.track(Z.rMx.OPEN_MODAL, {
                type: "Send Listen Invite",
                location: Z.jXE.CHANNEL_TEXT_AREA
              }), R(n, t, Z.mFx.LISTEN, b))
            }
          }, "listen");
        case N.r.INVITE_TO_WATCH:
          return (0, l.jsx)(o.MenuItem, {
            id: "watch",
            label: i,
            action: () => {
              var n;
              return n = e.activity, void(C.default.track(Z.rMx.OPEN_MODAL, {
                type: "Send Watch Invite",
                location: Z.jXE.CHANNEL_TEXT_AREA
              }), R(n, t, Z.mFx.WATCH, b))
            }
          }, "watch");
        case N.r.CREATE_THREAD:
          return (0, l.jsx)(o.MenuItem, {
            id: "THREAD",
            label: i,
            action: D
          }, "THREAD");
        case N.r.SLASH_COMMAND:
          return (0, l.jsx)(o.MenuItem, {
            id: "SLASH_COMMAND",
            label: i,
            action: U
          }, "SLASH_COMMAND");
        case N.r.ACTIVITY:
          return (0, l.jsx)(o.MenuItem, {
            id: "activity",
            label: i,
            action: H,
            hint: (0, l.jsx)(L, {})
          }, "activity");
        default:
          return null
      }
    })
  })
}