"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("653041"), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("831209"),
  i = n("442837"),
  r = n("524437"),
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
  g = n("26290"),
  S = n("626135"),
  _ = n("585483"),
  T = n("403182"),
  I = n("127654"),
  A = n("752305"),
  v = n("951211"),
  x = n("981631"),
  N = n("921944"),
  M = n("489887"),
  R = n("689938"),
  y = n("525187");

function L(e, t, l, s) {
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
let O = /(.*)```(\w+)\n(.*)```(.*)/s;

function j() {
  let e = (0, i.useStateFromStores)([C.default], () => C.default.hasCurrentUserSentMessageSinceAppStart()),
    t = [];
  e && t.push(r.DismissibleContent.ACTIVITIES_CHAT_MENU_NEW_BADGE);
  let [n] = (0, m.useGetDismissibleContent)(t);
  return l.useEffect(() => () => {
    n === r.DismissibleContent.ACTIVITIES_CHAT_MENU_NEW_BADGE && (0, h.markDismissibleContentAsDismissed)(r.DismissibleContent.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
      dismissAction: N.ContentDismissActionType.TAKE_ACTION
    })
  }, [n]), (0, a.jsx)(p.default, {
    contentTypes: t,
    children: e => {
      let {
        visibleContent: t
      } = e;
      return t === r.DismissibleContent.ACTIVITIES_CHAT_MENU_NEW_BADGE ? (0, a.jsx)(g.TextBadge, {
        text: R.default.Messages.NEW,
        color: s.default.BUTTON_DANGER_BACKGROUND
      }) : null
    }
  })
}

function P(e) {
  let {
    channel: t,
    options: i,
    onFileUpload: u,
    onClose: m,
    onSelect: p,
    draftType: C,
    editorTextContent: P,
    setValue: D,
    openClips: b
  } = e, {
    analyticsLocations: U
  } = (0, f.default)();
  l.useEffect(() => {
    S.default.track(x.AnalyticEvents.OPEN_POPOUT, {
      type: "Send Attachment",
      channel_id: t.id,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id]);

  function F() {
    (0, E.openThreadSidebarForCreating)(t, void 0, "Plus Button")
  }

  function w() {
    S.default.track(x.AnalyticEvents.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), D("/", (0, A.toRichValue)("/"))
  }

  function k() {
    b()
  }

  function H() {
    (0, h.markDismissibleContentAsDismissed)(r.DismissibleContent.POLLS_CHAT_INPUT_COACHMARK, {
      dismissAction: N.ContentDismissActionType.TAKE_ACTION
    }), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("68784")]).then(n.bind(n, "611611"));
      return n => (0, a.jsx)(e, {
        ...n,
        channel: t
      })
    }, {
      modalKey: M.POLL_CREATION_MODAL_KEY
    })
  }

  function G() {
    S.default.track(x.AnalyticEvents.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
      channel_type: t.type,
      channel_id: t.id,
      guild_id: t.guild_id
    }), (0, c.default)({
      channel: t,
      guildId: t.guild_id,
      locationObject: {
        page: t.isPrivate() ? x.AnalyticsPages.DM_CHANNEL : x.AnalyticsPages.GUILD_CHANNEL,
        section: x.AnalyticsSections.CHANNEL_TEXT_AREA,
        object: x.AnalyticsObjects.CONTEXT_MENU_ITEM,
        objectType: x.AnalyticsObjectTypes.ACTIVITY
      },
      openInPopout: !1,
      enableSelectedTextChannelInvite: !0,
      analyticsLocations: U
    }), (0, d.fetchShelf)({
      guildId: t.guild_id
    })
  }

  function B() {
    let e = P,
      n = "txt",
      a = "",
      l = P.match(O);
    null != l && (a = l[1], n = l[2], e = l[3], a += l[4]), (0, I.promptToUpload)([(0, T.makeFile)(new Blob([e], {
      type: "text/plain"
    }), "message.".concat(n))], t, C), _.ComponentDispatch.dispatchToLastSubscribed(x.ComponentActions.CLEAR_TEXT), "" !== a && _.ComponentDispatch.dispatchToLastSubscribed(x.ComponentActions.INSERT_TEXT, {
      plainText: a
    })
  }
  return (0, a.jsx)(o.Menu, {
    onSelect: p,
    navId: "channel-attach",
    onClose: m,
    "aria-label": R.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
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
        }), null != e.badgeVal && e.badgeVal > 0 && (0, a.jsx)(g.NumberBadge, {
          className: y.badge,
          color: null !== (n = e.badgeColor) && void 0 !== n ? n : s.default.STATUS_DANGER,
          count: e.badgeVal
        })]
      });
      switch (e.type) {
        case v.AttachmentTypes.UPLOAD_A_FILE:
          return (0, a.jsx)(o.MenuItem, {
            id: "upload-file",
            label: l,
            action: u
          }, "upload-file");
        case v.AttachmentTypes.UPLOAD_TEXT_AS_FILE:
          if ("" === P) return null;
          return (0, a.jsx)(o.MenuItem, {
            id: "upload-text-as-file",
            label: l,
            action: B
          }, "upload-text-as-file");
        case v.AttachmentTypes.CLIPS:
          return (0, a.jsx)(o.MenuItem, {
            id: "clips",
            label: l,
            action: k
          }, "clips");
        case v.AttachmentTypes.POLL:
          return (0, a.jsx)(o.MenuItem, {
            id: "poll",
            label: l,
            action: H
          }, "poll");
        case v.AttachmentTypes.INVITE_TO_PLAY_GAME:
          return (0, a.jsx)(o.MenuItem, {
            id: "play",
            label: l,
            action: () => {
              var n;
              return n = e.activity, void(S.default.track(x.AnalyticEvents.OPEN_MODAL, {
                type: "Send Join Invite",
                application_id: n.application_id,
                location: x.AnalyticsSections.CHANNEL_TEXT_AREA
              }), L(n, t, x.ActivityActionTypes.JOIN, U))
            }
          }, "play");
        case v.AttachmentTypes.INVITE_TO_LISTEN:
          return (0, a.jsx)(o.MenuItem, {
            id: "listen",
            label: l,
            action: () => {
              var n;
              return n = e.activity, void(S.default.track(x.AnalyticEvents.OPEN_MODAL, {
                type: "Send Listen Invite",
                location: x.AnalyticsSections.CHANNEL_TEXT_AREA
              }), L(n, t, x.ActivityActionTypes.LISTEN, U))
            }
          }, "listen");
        case v.AttachmentTypes.INVITE_TO_WATCH:
          return (0, a.jsx)(o.MenuItem, {
            id: "watch",
            label: l,
            action: () => {
              var n;
              return n = e.activity, void(S.default.track(x.AnalyticEvents.OPEN_MODAL, {
                type: "Send Watch Invite",
                location: x.AnalyticsSections.CHANNEL_TEXT_AREA
              }), L(n, t, x.ActivityActionTypes.WATCH, U))
            }
          }, "watch");
        case v.AttachmentTypes.CREATE_THREAD:
          return (0, a.jsx)(o.MenuItem, {
            id: "THREAD",
            label: l,
            action: F
          }, "THREAD");
        case v.AttachmentTypes.SLASH_COMMAND:
          return (0, a.jsx)(o.MenuItem, {
            id: "SLASH_COMMAND",
            label: l,
            action: w
          }, "SLASH_COMMAND");
        case v.AttachmentTypes.ACTIVITY:
          return (0, a.jsx)(o.MenuItem, {
            id: "activity",
            label: l,
            action: G,
            hint: (0, a.jsx)(j, {})
          }, "activity");
        default:
          return null
      }
    })
  })
}