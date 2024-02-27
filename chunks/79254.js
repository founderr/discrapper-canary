"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("171210"),
  i = n("77078"),
  r = n("811475"),
  o = n("550766"),
  u = n("478272"),
  d = n("685665"),
  c = n("716849"),
  f = n("552917"),
  h = n("967241"),
  C = n("956089"),
  p = n("599110"),
  E = n("659500"),
  m = n("254490"),
  g = n("412861"),
  _ = n("149022"),
  S = n("64096"),
  T = n("49111"),
  A = n("186859"),
  M = n("782340"),
  I = n("245150");

function N(e, t, s, l) {
  (0, i.openModalLazy)(async () => {
    let {
      default: i
    } = await n.el("811475").then(n.bind(n, "811475"));
    return n => (0, a.jsx)(i, {
      ...n,
      activity: e,
      channel: t,
      activityActionType: s,
      analyticsLocations: l
    })
  }, {
    modalKey: r.activityInviteKey
  })
}
let v = /(.*)```(\w+)\n(.*)```(.*)/s;

function L(e) {
  let {
    channel: t,
    options: r,
    onFileUpload: L,
    onClose: R,
    onSelect: y,
    draftType: x,
    editorTextContent: O,
    setValue: D,
    openClips: P
  } = e;
  (0, c.useMaybeFetchPremiumLikelihood)(f.default);
  let {
    analyticsLocations: j
  } = (0, d.default)();
  s.useEffect(() => {
    p.default.track(T.AnalyticEvents.OPEN_POPOUT, {
      type: "Send Attachment",
      channel_id: t.id,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id]);

  function b() {
    (0, h.openThreadSidebarForCreating)(t, void 0, "Plus Button")
  }

  function F() {
    p.default.track(T.AnalyticEvents.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), D("/", (0, _.toRichValue)("/"))
  }

  function H() {
    P()
  }

  function U() {
    (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("487757").then(n.bind(n, "487757"));
      return n => (0, a.jsx)(e, {
        ...n,
        channel: t
      })
    }, {
      modalKey: A.POLL_CREATION_MODAL_KEY
    })
  }

  function k() {
    p.default.track(T.AnalyticEvents.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
      channel_type: t.type,
      channel_id: t.id,
      guild_id: t.guild_id
    }), (0, u.default)({
      channel: t,
      guildId: t.guild_id,
      locationObject: {
        page: t.isPrivate() ? T.AnalyticsPages.DM_CHANNEL : T.AnalyticsPages.GUILD_CHANNEL,
        section: T.AnalyticsSections.CHANNEL_TEXT_AREA,
        object: T.AnalyticsObjects.CONTEXT_MENU_ITEM,
        objectType: T.AnalyticsObjectTypes.ACTIVITY
      },
      openInPopout: !1,
      enableSelectedTextChannelInvite: !0,
      analyticsLocations: j
    }), (0, o.fetchShelf)({
      guildId: t.guild_id
    })
  }

  function w() {
    let e = O,
      n = "txt",
      a = "",
      s = O.match(v);
    null != s && (a = s[1], n = s[2], e = s[3], a += s[4]), (0, g.promptToUpload)([(0, m.makeFile)(new Blob([e], {
      type: "text/plain"
    }), "message.".concat(n))], t, x), E.ComponentDispatch.dispatchToLastSubscribed(T.ComponentActions.CLEAR_TEXT), "" !== a && E.ComponentDispatch.dispatchToLastSubscribed(T.ComponentActions.INSERT_TEXT, {
      plainText: a
    })
  }
  return (0, a.jsx)(i.Menu, {
    onSelect: y,
    navId: "channel-attach",
    onClose: R,
    "aria-label": M.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    className: I.menu,
    children: r.map(function(e) {
      var n;
      let s = (0, a.jsxs)("div", {
        className: I.optionLabel,
        children: [(0, a.jsx)(e.icon, {
          className: I.optionIcon
        }), (0, a.jsx)("div", {
          className: I.optionName,
          children: e.display
        }), null != e.badgeVal && e.badgeVal > 0 && (0, a.jsx)(C.NumberBadge, {
          className: I.badge,
          color: null !== (n = e.badgeColor) && void 0 !== n ? n : l.default.STATUS_DANGER,
          count: e.badgeVal
        })]
      });
      switch (e.type) {
        case S.AttachmentTypes.UPLOAD_A_FILE:
          return (0, a.jsx)(i.MenuItem, {
            id: "upload-file",
            label: s,
            action: L
          }, "upload-file");
        case S.AttachmentTypes.UPLOAD_TEXT_AS_FILE:
          if ("" === O) return null;
          return (0, a.jsx)(i.MenuItem, {
            id: "upload-text-as-file",
            label: s,
            action: w
          }, "upload-text-as-file");
        case S.AttachmentTypes.CLIPS:
          return (0, a.jsx)(i.MenuItem, {
            id: "clips",
            label: s,
            action: H
          }, "clips");
        case S.AttachmentTypes.POLL:
          return (0, a.jsx)(i.MenuItem, {
            id: "poll",
            label: s,
            action: U
          }, "poll");
        case S.AttachmentTypes.INVITE_TO_PLAY_GAME:
          return (0, a.jsx)(i.MenuItem, {
            id: "play",
            label: s,
            action: () => {
              var n;
              return n = e.activity, void(p.default.track(T.AnalyticEvents.OPEN_MODAL, {
                type: "Send Join Invite",
                application_id: n.application_id,
                location: T.AnalyticsSections.CHANNEL_TEXT_AREA
              }), N(n, t, T.ActivityActionTypes.JOIN, j))
            }
          }, "play");
        case S.AttachmentTypes.INVITE_TO_LISTEN:
          return (0, a.jsx)(i.MenuItem, {
            id: "listen",
            label: s,
            action: () => {
              var n;
              return n = e.activity, void(p.default.track(T.AnalyticEvents.OPEN_MODAL, {
                type: "Send Listen Invite",
                location: T.AnalyticsSections.CHANNEL_TEXT_AREA
              }), N(n, t, T.ActivityActionTypes.LISTEN, j))
            }
          }, "listen");
        case S.AttachmentTypes.INVITE_TO_WATCH:
          return (0, a.jsx)(i.MenuItem, {
            id: "watch",
            label: s,
            action: () => {
              var n;
              return n = e.activity, void(p.default.track(T.AnalyticEvents.OPEN_MODAL, {
                type: "Send Watch Invite",
                location: T.AnalyticsSections.CHANNEL_TEXT_AREA
              }), N(n, t, T.ActivityActionTypes.WATCH, j))
            }
          }, "watch");
        case S.AttachmentTypes.CREATE_THREAD:
          return (0, a.jsx)(i.MenuItem, {
            id: "THREAD",
            label: s,
            action: b
          }, "THREAD");
        case S.AttachmentTypes.SLASH_COMMAND:
          return (0, a.jsx)(i.MenuItem, {
            id: "SLASH_COMMAND",
            label: s,
            action: F
          }, "SLASH_COMMAND");
        case S.AttachmentTypes.ACTIVITY:
          return (0, a.jsx)(i.MenuItem, {
            id: "activity",
            label: s,
            action: k
          }, "activity");
        default:
          return null
      }
    })
  })
}