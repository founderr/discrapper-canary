"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
});
var s = n("37983"),
  a = n("884691"),
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
  m = n("659500"),
  E = n("254490"),
  g = n("412861"),
  S = n("149022"),
  _ = n("64096"),
  T = n("49111"),
  A = n("186859"),
  M = n("782340"),
  I = n("245150");

function N(e, t, a, l) {
  (0, i.openModalLazy)(async () => {
    let {
      default: i
    } = await n.el("811475").then(n.bind(n, "811475"));
    return n => (0, s.jsx)(i, {
      ...n,
      activity: e,
      channel: t,
      activityActionType: a,
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
    onSelect: x,
    draftType: y,
    editorTextContent: O,
    setValue: D,
    openClips: P
  } = e;
  (0, c.useMaybeFetchPremiumLikelihood)(f.default);
  let {
    analyticsLocations: j
  } = (0, d.default)();
  a.useEffect(() => {
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
    p.default.track(T.AnalyticEvents.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), D("/", (0, S.toRichValue)("/"))
  }

  function H() {
    P()
  }

  function U() {
    (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("487757").then(n.bind(n, "487757"));
      return n => (0, s.jsx)(e, {
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

  function B() {
    let e = O,
      n = "txt",
      s = "",
      a = O.match(v);
    null != a && (s = a[1], n = a[2], e = a[3], s += a[4]), (0, g.promptToUpload)([(0, E.makeFile)(new Blob([e], {
      type: "text/plain"
    }), "message.".concat(n))], t, y), m.ComponentDispatch.dispatchToLastSubscribed(T.ComponentActions.CLEAR_TEXT), "" !== s && m.ComponentDispatch.dispatchToLastSubscribed(T.ComponentActions.INSERT_TEXT, {
      plainText: s
    })
  }
  return (0, s.jsx)(i.Menu, {
    onSelect: x,
    navId: "channel-attach",
    onClose: R,
    "aria-label": M.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    className: I.menu,
    children: r.map(function(e) {
      var n;
      let a = (0, s.jsxs)("div", {
        className: I.optionLabel,
        children: [(0, s.jsx)(e.icon, {
          className: I.optionIcon
        }), (0, s.jsx)("div", {
          className: I.optionName,
          children: e.display
        }), null != e.badgeVal && e.badgeVal > 0 && (0, s.jsx)(C.NumberBadge, {
          className: I.badge,
          color: null !== (n = e.badgeColor) && void 0 !== n ? n : l.default.STATUS_DANGER,
          count: e.badgeVal
        })]
      });
      switch (e.type) {
        case _.AttachmentTypes.UPLOAD_A_FILE:
          return (0, s.jsx)(i.MenuItem, {
            id: "upload-file",
            label: a,
            action: L
          }, "upload-file");
        case _.AttachmentTypes.UPLOAD_TEXT_AS_FILE:
          if ("" === O) return null;
          return (0, s.jsx)(i.MenuItem, {
            id: "upload-text-as-file",
            label: a,
            action: B
          }, "upload-text-as-file");
        case _.AttachmentTypes.CLIPS:
          return (0, s.jsx)(i.MenuItem, {
            id: "clips",
            label: a,
            action: H
          }, "clips");
        case _.AttachmentTypes.POLL:
          return (0, s.jsx)(i.MenuItem, {
            id: "poll",
            label: a,
            action: U
          }, "poll");
        case _.AttachmentTypes.INVITE_TO_PLAY_GAME:
          return (0, s.jsx)(i.MenuItem, {
            id: "play",
            label: a,
            action: () => {
              var n;
              return n = e.activity, void(p.default.track(T.AnalyticEvents.OPEN_MODAL, {
                type: "Send Join Invite",
                application_id: n.application_id,
                location: T.AnalyticsSections.CHANNEL_TEXT_AREA
              }), N(n, t, T.ActivityActionTypes.JOIN, j))
            }
          }, "play");
        case _.AttachmentTypes.INVITE_TO_LISTEN:
          return (0, s.jsx)(i.MenuItem, {
            id: "listen",
            label: a,
            action: () => {
              var n;
              return n = e.activity, void(p.default.track(T.AnalyticEvents.OPEN_MODAL, {
                type: "Send Listen Invite",
                location: T.AnalyticsSections.CHANNEL_TEXT_AREA
              }), N(n, t, T.ActivityActionTypes.LISTEN, j))
            }
          }, "listen");
        case _.AttachmentTypes.INVITE_TO_WATCH:
          return (0, s.jsx)(i.MenuItem, {
            id: "watch",
            label: a,
            action: () => {
              var n;
              return n = e.activity, void(p.default.track(T.AnalyticEvents.OPEN_MODAL, {
                type: "Send Watch Invite",
                location: T.AnalyticsSections.CHANNEL_TEXT_AREA
              }), N(n, t, T.ActivityActionTypes.WATCH, j))
            }
          }, "watch");
        case _.AttachmentTypes.CREATE_THREAD:
          return (0, s.jsx)(i.MenuItem, {
            id: "THREAD",
            label: a,
            action: b
          }, "THREAD");
        case _.AttachmentTypes.SLASH_COMMAND:
          return (0, s.jsx)(i.MenuItem, {
            id: "SLASH_COMMAND",
            label: a,
            action: F
          }, "SLASH_COMMAND");
        case _.AttachmentTypes.ACTIVITY:
          return (0, s.jsx)(i.MenuItem, {
            id: "activity",
            label: a,
            action: k
          }, "activity");
        default:
          return null
      }
    })
  })
}