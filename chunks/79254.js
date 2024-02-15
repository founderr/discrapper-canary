"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("171210"),
  i = n("77078"),
  r = n("811475"),
  o = n("550766"),
  u = n("975148"),
  d = n("478272"),
  c = n("685665"),
  f = n("716849"),
  h = n("552917"),
  C = n("967241"),
  p = n("351825"),
  m = n("956089"),
  E = n("599110"),
  g = n("659500"),
  S = n("254490"),
  _ = n("412861"),
  A = n("149022"),
  T = n("64096"),
  M = n("49111"),
  N = n("186859"),
  I = n("782340"),
  v = n("245150");

function L(e, t, a, l) {
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
let x = /(.*)```(\w+)\n(.*)```(.*)/s;

function R(e) {
  let {
    channel: t,
    options: r,
    onFileUpload: R,
    onClose: y,
    onSelect: O,
    draftType: D,
    editorTextContent: j,
    setValue: b,
    openClips: P
  } = e;
  (0, f.useMaybeFetchPremiumLikelihood)(h.default);
  let H = (0, u.useOmnibuttonFileUploadSubtextEnabled)("ChannelAttachMenu"),
    {
      analyticsLocations: F
    } = (0, c.default)();
  a.useEffect(() => {
    E.default.track(M.AnalyticEvents.OPEN_POPOUT, {
      type: "Send Attachment",
      channel_id: t.id,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id]);

  function U() {
    (0, C.openThreadSidebarForCreating)(t, void 0, "Plus Button")
  }

  function k() {
    E.default.track(M.AnalyticEvents.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), b("/", (0, A.toRichValue)("/"))
  }

  function G() {
    P()
  }

  function w() {
    (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("487757").then(n.bind(n, "487757"));
      return n => (0, s.jsx)(e, {
        ...n,
        channel: t
      })
    }, {
      modalKey: N.POLL_CREATION_MODAL_KEY
    })
  }

  function B() {
    E.default.track(M.AnalyticEvents.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
      channel_type: t.type,
      channel_id: t.id,
      guild_id: t.guild_id
    }), (0, d.default)({
      channel: t,
      guildId: t.guild_id,
      locationObject: {
        page: t.isPrivate() ? M.AnalyticsPages.DM_CHANNEL : M.AnalyticsPages.GUILD_CHANNEL,
        section: M.AnalyticsSections.CHANNEL_TEXT_AREA,
        object: M.AnalyticsObjects.CONTEXT_MENU_ITEM,
        objectType: M.AnalyticsObjectTypes.ACTIVITY
      },
      openInPopout: !1,
      enableSelectedTextChannelInvite: !0,
      analyticsLocations: F
    }), (0, o.fetchShelf)({
      guildId: t.guild_id
    })
  }

  function V() {
    let e = j,
      n = "txt",
      s = "",
      a = j.match(x);
    null != a && (s = a[1], n = a[2], e = a[3], s += a[4]), (0, _.promptToUpload)([(0, S.makeFile)(new Blob([e], {
      type: "text/plain"
    }), "message.".concat(n))], t, D), g.ComponentDispatch.dispatchToLastSubscribed(M.ComponentActions.CLEAR_TEXT), "" !== s && g.ComponentDispatch.dispatchToLastSubscribed(M.ComponentActions.INSERT_TEXT, {
      plainText: s
    })
  }
  return (0, s.jsx)(i.Menu, {
    onSelect: O,
    navId: "channel-attach",
    onClose: y,
    "aria-label": I.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    className: v.menu,
    children: r.map(function(e) {
      var n;
      let a = (0, s.jsxs)("div", {
        className: v.optionLabel,
        children: [(0, s.jsx)(e.icon, {
          className: v.optionIcon
        }), (0, s.jsx)("div", {
          className: v.optionName,
          children: e.display
        }), null != e.badgeVal && e.badgeVal > 0 && (0, s.jsx)(m.NumberBadge, {
          className: v.badge,
          color: null !== (n = e.badgeColor) && void 0 !== n ? n : l.default.STATUS_DANGER,
          count: e.badgeVal
        })]
      });
      switch (e.type) {
        case T.AttachmentTypes.UPLOAD_A_FILE:
          let r = (0, s.jsx)("span", {
            className: v.tipSubtext,
            children: I.default.Messages.UPLOAD_FILE_SUBTEXT.format({
              icon: (e, t) => (0, s.jsx)(p.default, {
                className: v.tipIcon,
                width: 16,
                height: 16
              }, t)
            })
          });
          return (0, s.jsx)(i.MenuItem, {
            id: "upload-file",
            label: a,
            subtext: H ? r : null,
            action: R
          }, "upload-file");
        case T.AttachmentTypes.UPLOAD_TEXT_AS_FILE:
          if ("" === j) return null;
          return (0, s.jsx)(i.MenuItem, {
            id: "upload-text-as-file",
            label: a,
            action: V
          }, "upload-text-as-file");
        case T.AttachmentTypes.CLIPS:
          return (0, s.jsx)(i.MenuItem, {
            id: "clips",
            label: a,
            action: G
          }, "clips");
        case T.AttachmentTypes.POLL:
          return (0, s.jsx)(i.MenuItem, {
            id: "poll",
            label: a,
            action: w
          }, "poll");
        case T.AttachmentTypes.INVITE_TO_PLAY_GAME:
          return (0, s.jsx)(i.MenuItem, {
            id: "play",
            label: a,
            action: () => {
              var n;
              return n = e.activity, void(E.default.track(M.AnalyticEvents.OPEN_MODAL, {
                type: "Send Join Invite",
                application_id: n.application_id,
                location: M.AnalyticsSections.CHANNEL_TEXT_AREA
              }), L(n, t, M.ActivityActionTypes.JOIN, F))
            }
          }, "play");
        case T.AttachmentTypes.INVITE_TO_LISTEN:
          return (0, s.jsx)(i.MenuItem, {
            id: "listen",
            label: a,
            action: () => {
              var n;
              return n = e.activity, void(E.default.track(M.AnalyticEvents.OPEN_MODAL, {
                type: "Send Listen Invite",
                location: M.AnalyticsSections.CHANNEL_TEXT_AREA
              }), L(n, t, M.ActivityActionTypes.LISTEN, F))
            }
          }, "listen");
        case T.AttachmentTypes.INVITE_TO_WATCH:
          return (0, s.jsx)(i.MenuItem, {
            id: "watch",
            label: a,
            action: () => {
              var n;
              return n = e.activity, void(E.default.track(M.AnalyticEvents.OPEN_MODAL, {
                type: "Send Watch Invite",
                location: M.AnalyticsSections.CHANNEL_TEXT_AREA
              }), L(n, t, M.ActivityActionTypes.WATCH, F))
            }
          }, "watch");
        case T.AttachmentTypes.CREATE_THREAD:
          return (0, s.jsx)(i.MenuItem, {
            id: "THREAD",
            label: a,
            action: U
          }, "THREAD");
        case T.AttachmentTypes.SLASH_COMMAND:
          return (0, s.jsx)(i.MenuItem, {
            id: "SLASH_COMMAND",
            label: a,
            action: k
          }, "SLASH_COMMAND");
        case T.AttachmentTypes.ACTIVITY:
          return (0, s.jsx)(i.MenuItem, {
            id: "activity",
            label: a,
            action: B
          }, "activity");
        default:
          return null
      }
    })
  })
}