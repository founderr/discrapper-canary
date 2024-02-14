"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("446674"),
  u = n("77078"),
  d = n("267567"),
  o = n("817963"),
  c = n("534471"),
  f = n("42203"),
  E = n("305961"),
  h = n("476765"),
  _ = n("794352"),
  v = n("883310"),
  g = n("93550"),
  C = n("617347"),
  S = n("745049"),
  p = n("782340"),
  T = n("764718");

function N(e) {
  var t;
  let {
    transitionState: n,
    event: a,
    onSuccess: N,
    onClose: A
  } = e, I = (0, h.useUID)(), {
    guild_id: m,
    privacy_level: y
  } = a, R = (0, r.useStateFromStores)([f.default], () => f.default.getChannel(a.channel_id), [a]), O = (0, r.useStateFromStores)([E.default], () => E.default.getGuild(m), [m]), {
    canManageGuildEvent: L
  } = (0, o.useManageResourcePermissions)(null != R ? R : O), G = L(a), x = (0, r.useStateFromStores)([d.default], () => d.default.isLurking(m), [m]), M = a.entity_type === S.GuildScheduledEventEntityTypes.STAGE_INSTANCE, [w, U] = i.useState(M), [k, {
    loading: D,
    error: P
  }] = (0, v.default)();
  if (!G) return null;
  let b = y === S.GuildScheduledEventPrivacyLevel.PUBLIC ? p.default.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PUBLIC_LABEL : p.default.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PRIVATE_LABEL,
    j = () => {
      null == N || N(), A(), (0, c.setIsOnStartStageScreen)(!1)
    },
    V = async () => {
      await k(a, w, {
        onSuccess: j
      })
    };
  return (0, l.jsx)(u.ModalRoot, {
    transitionState: n,
    "aria-labelledby": I,
    children: (0, l.jsxs)(u.ModalContent, {
      className: T.content,
      children: [(0, l.jsx)("div", {
        className: T.previewCard,
        children: (0, l.jsx)(C.default, {
          guild: O,
          channel: R,
          name: a.name,
          description: null !== (t = a.description) && void 0 !== t ? t : void 0,
          imageSource: (0, g.default)(a),
          isActive: !1,
          isUserLurking: x,
          speakers: [],
          speakerCount: 0,
          rsvped: !0,
          guildEventId: a.id
        })
      }), (0, l.jsx)(u.Text, {
        color: "header-secondary",
        className: T.privacyLevel,
        variant: "text-sm/normal",
        children: p.default.Messages.START_EVENT_CONFIRMATION.format({
          privacyLevel: b,
          privacyLevelHook: (e, t) => y !== S.GuildScheduledEventPrivacyLevel.PUBLIC ? null : (0, l.jsxs)("div", {
            className: T.privacyLevel,
            children: [(0, l.jsx)(_.default, {
              width: 16,
              height: 16,
              className: T.publicIcon
            }), (0, l.jsx)(u.Text, {
              variant: "text-sm/normal",
              children: e
            })]
          }, t)
        })
      }), (0, l.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        className: T.header,
        children: a.name
      }), M && (0, l.jsx)(u.Checkbox, {
        className: T.verticalSpacing,
        type: u.Checkbox.Types.INVERTED,
        value: w,
        onChange: e => {
          let {
            currentTarget: t
          } = e;
          return U(t.checked)
        },
        children: (0, l.jsx)(u.Text, {
          variant: "text-sm/normal",
          children: p.default.Messages.GUILD_NOTIFY_MEMBERS_DESKTOP
        })
      }), (0, l.jsxs)("div", {
        className: s(T.inline, T.buttons, T.verticalSpacing),
        children: [(0, l.jsx)(u.Button, {
          color: u.Button.Colors.PRIMARY,
          onClick: () => {
            A()
          },
          className: s(T.button, T.spacing),
          children: p.default.Messages.STAGE_BLOCKED_USERS_CANCEL
        }), (0, l.jsx)(u.Button, {
          color: u.Button.Colors.GREEN,
          onClick: V,
          submitting: D,
          className: T.button,
          children: p.default.Messages.START_EVENT
        })]
      }), null != P && null != P.getAnyErrorMessage() ? (0, l.jsx)(u.Text, {
        color: "text-danger",
        variant: "text-sm/normal",
        className: T.errorMessage,
        children: P.getAnyErrorMessage()
      }) : null]
    })
  })
}