"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
}), n("653041"), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("831209"),
  i = n("442837"),
  r = n("704215"),
  o = n("481060"),
  u = n("538239"),
  d = n("566620"),
  c = n("403404"),
  f = n("906732"),
  h = n("605236"),
  m = n("706140"),
  p = n("243778"),
  E = n("488131"),
  C = n("375954"),
  g = n("626135"),
  S = n("585483"),
  _ = n("403182"),
  T = n("127654"),
  I = n("752305"),
  A = n("951211"),
  v = n("981631"),
  x = n("921944"),
  N = n("489887"),
  M = n("689938"),
  y = n("525187");

function R(e, t, l, s) {
  (0, o.openModalLazy)(async () => {
    let {
      default: i
    } = await Promise.resolve().then(n.bind(n, "538239"));
    return n => (0, a.jsx)(i, {
      ...n,
      activity: e,
      channel: t,
      activityActionType: l,
      analyticsLocations: s
    })
  }, {
    modalKey: u.activityInviteKey
  })
}
let L = /(.*)```(\w+)\n(.*)```(.*)/s;

function O() {
  let e = (0, i.useStateFromStores)([C.default], () => C.default.hasCurrentUserSentMessageSinceAppStart()),
    t = [];
  e && t.push(r.DismissibleContent.ACTIVITIES_CHAT_MENU_NEW_BADGE);
  let [n] = (0, m.useGetDismissibleContent)(t);
  return l.useEffect(() => () => {
    n === r.DismissibleContent.ACTIVITIES_CHAT_MENU_NEW_BADGE && (0, h.markDismissibleContentAsDismissed)(r.DismissibleContent.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
      dismissAction: x.ContentDismissActionType.TAKE_ACTION
    })
  }, [n]), (0, a.jsx)(p.default, {
    contentTypes: t,
    children: e => {
      let {
        visibleContent: t
      } = e;
      return t === r.DismissibleContent.ACTIVITIES_CHAT_MENU_NEW_BADGE ? (0, a.jsx)(o.TextBadge, {
        text: M.default.Messages.NEW,
        color: s.default.BUTTON_DANGER_BACKGROUND
      }) : null
    }
  })
}

function j(e) {
  let {
    channel: t,
    options: i,
    onFileUpload: u,
    onClose: m,
    onSelect: p,
    draftType: C,
    editorTextContent: j,
    setValue: P,
    openClips: D
  } = e, {
    analyticsLocations: b
  } = (0, f.default)();
  l.useEffect(() => {
    g.default.track(v.AnalyticEvents.OPEN_POPOUT, {
      type: "Send Attachment",
      channel_id: t.id,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id]);

  function U() {
    (0, E.openThreadSidebarForCreating)(t, void 0, "Plus Button")
  }

  function F() {
    g.default.track(v.AnalyticEvents.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), P("/", (0, I.toRichValue)("/"))
  }

  function w() {
    D()
  }

  function k() {
    (0, h.markDismissibleContentAsDismissed)(r.DismissibleContent.POLLS_CHAT_INPUT_COACHMARK, {
      dismissAction: x.ContentDismissActionType.TAKE_ACTION
    }), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("68784")]).then(n.bind(n, "611611"));
      return n => (0, a.jsx)(e, {
        ...n,
        channel: t
      })
    }, {
      modalKey: N.POLL_CREATION_MODAL_KEY
    })
  }

  function H() {
    g.default.track(v.AnalyticEvents.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
      channel_type: t.type,
      channel_id: t.id,
      guild_id: t.guild_id
    }), (0, c.default)({
      channel: t,
      guildId: t.guild_id,
      locationObject: {
        page: t.isPrivate() ? v.AnalyticsPages.DM_CHANNEL : v.AnalyticsPages.GUILD_CHANNEL,
        section: v.AnalyticsSections.CHANNEL_TEXT_AREA,
        object: v.AnalyticsObjects.CONTEXT_MENU_ITEM,
        objectType: v.AnalyticsObjectTypes.ACTIVITY
      },
      openInPopout: !1,
      enableSelectedTextChannelInvite: !0,
      analyticsLocations: b
    }), (0, d.fetchShelf)({
      guildId: t.guild_id
    })
  }

  function G() {
    let e = j,
      n = "txt",
      a = "",
      l = j.match(L);
    null != l && (a = l[1], n = l[2], e = l[3], a += l[4]), (0, T.promptToUpload)([(0, _.makeFile)(new Blob([e], {
      type: "text/plain"
    }), "message.".concat(n))], t, C), S.ComponentDispatch.dispatchToLastSubscribed(v.ComponentActions.CLEAR_TEXT), "" !== a && S.ComponentDispatch.dispatchToLastSubscribed(v.ComponentActions.INSERT_TEXT, {
      plainText: a
    })
  }
  return (0, a.jsx)(o.Menu, {
    onSelect: p,
    navId: "channel-attach",
    onClose: m,
    "aria-label": M.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    className: y.menu,
    children: i.map(function(e) {
      var n;
      let l = (0, a.jsxs)("div", {
        className: y.optionLabel,
        children: [(0, a.jsx)(e.icon, {
          className: y.optionIcon
        }), (0, a.jsx)("div", {
          className: y.optionName,
          children: e.display
        }), null != e.badgeVal && e.badgeVal > 0 && (0, a.jsx)(o.NumberBadge, {
          className: y.badge,
          color: null !== (n = e.badgeColor) && void 0 !== n ? n : s.default.STATUS_DANGER,
          count: e.badgeVal
        })]
      });
      switch (e.type) {
        case A.AttachmentTypes.UPLOAD_A_FILE:
          return (0, a.jsx)(o.MenuItem, {
            id: "upload-file",
            label: l,
            action: u
          }, "upload-file");
        case A.AttachmentTypes.UPLOAD_TEXT_AS_FILE:
          if ("" === j) return null;
          return (0, a.jsx)(o.MenuItem, {
            id: "upload-text-as-file",
            label: l,
            action: G
          }, "upload-text-as-file");
        case A.AttachmentTypes.CLIPS:
          return (0, a.jsx)(o.MenuItem, {
            id: "clips",
            label: l,
            action: w
          }, "clips");
        case A.AttachmentTypes.POLL:
          return (0, a.jsx)(o.MenuItem, {
            id: "poll",
            label: l,
            action: k
          }, "poll");
        case A.AttachmentTypes.INVITE_TO_PLAY_GAME:
          return (0, a.jsx)(o.MenuItem, {
            id: "play",
            label: l,
            action: () => {
              var n;
              return n = e.activity, void(g.default.track(v.AnalyticEvents.OPEN_MODAL, {
                type: "Send Join Invite",
                application_id: n.application_id,
                location: v.AnalyticsSections.CHANNEL_TEXT_AREA
              }), R(n, t, v.ActivityActionTypes.JOIN, b))
            }
          }, "play");
        case A.AttachmentTypes.INVITE_TO_LISTEN:
          return (0, a.jsx)(o.MenuItem, {
            id: "listen",
            label: l,
            action: () => {
              var n;
              return n = e.activity, void(g.default.track(v.AnalyticEvents.OPEN_MODAL, {
                type: "Send Listen Invite",
                location: v.AnalyticsSections.CHANNEL_TEXT_AREA
              }), R(n, t, v.ActivityActionTypes.LISTEN, b))
            }
          }, "listen");
        case A.AttachmentTypes.INVITE_TO_WATCH:
          return (0, a.jsx)(o.MenuItem, {
            id: "watch",
            label: l,
            action: () => {
              var n;
              return n = e.activity, void(g.default.track(v.AnalyticEvents.OPEN_MODAL, {
                type: "Send Watch Invite",
                location: v.AnalyticsSections.CHANNEL_TEXT_AREA
              }), R(n, t, v.ActivityActionTypes.WATCH, b))
            }
          }, "watch");
        case A.AttachmentTypes.CREATE_THREAD:
          return (0, a.jsx)(o.MenuItem, {
            id: "THREAD",
            label: l,
            action: U
          }, "THREAD");
        case A.AttachmentTypes.SLASH_COMMAND:
          return (0, a.jsx)(o.MenuItem, {
            id: "SLASH_COMMAND",
            label: l,
            action: F
          }, "SLASH_COMMAND");
        case A.AttachmentTypes.ACTIVITY:
          return (0, a.jsx)(o.MenuItem, {
            id: "activity",
            label: l,
            action: H,
            hint: (0, a.jsx)(O, {})
          }, "activity");
        default:
          return null
      }
    })
  })
}