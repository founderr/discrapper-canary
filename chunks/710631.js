"use strict";
i.r(t), i.d(t, {
  default: function() {
    return E
  }
}), i("653041"), i("47120");
var a = i("735250"),
  n = i("470079"),
  l = i("442837"),
  d = i("481060"),
  u = i("493683"),
  s = i("447543"),
  o = i("904245"),
  r = i("159300"),
  c = i("592125"),
  f = i("984933"),
  I = i("430824"),
  p = i("496675"),
  A = i("699516"),
  T = i("771845"),
  S = i("594174"),
  _ = i("981631"),
  y = i("689938");

function v(e, t) {
  u.default.ensurePrivateChannel(e).then(e => {
    null != c.default.getChannel(e) && o.default.sendInvite(e, t, "context_menu", null)
  })
}

function E(e) {
  let {
    user: t,
    guildId: i,
    onAction: u
  } = e, o = (0, l.useStateFromStores)([S.default], () => S.default.getCurrentUser(), []), c = (0, l.useStateFromStoresArray)([T.default, I.default, p.default], () => {
    let e = T.default.getFlattenedGuildIds(),
      t = [];
    return e.forEach(e => {
      let a = I.default.getGuild(e);
      null != a && (0, r.canViewInviteModal)(p.default, a) && a.id !== i && t.push(a)
    }), t
  }, [i]), [E, m] = n.useState({});
  return (null == o ? void 0 : o.id) === t.id || t.bot || 0 === c.length || A.default.isBlocked(t.id) ? null : (0, a.jsx)(d.MenuItem, {
    id: "invite-to-server",
    label: y.default.Messages.INVITE_TO_SERVER,
    children: c.map(e => E[e.id] ? (0, a.jsx)(d.MenuItem, {
      id: e.id,
      disabled: !0,
      label: y.default.Messages.INVITE_SENT
    }, e.id) : (0, a.jsx)(d.MenuItem, {
      id: e.id,
      label: e.name,
      action: () => {
        null == u || u(), ! function(e, t) {
          let i = f.default.getDefaultChannel(e.id, !0, _.Permissions.CREATE_INSTANT_INVITE);
          if (null != i) {
            if (m({
                ...E,
                [e.id]: !0
              }), !p.default.can(_.Permissions.CREATE_INSTANT_INVITE, e) && null != e.vanityURLCode) {
              v(t, e.vanityURLCode);
              return
            }
            s.default.createInvite(i.id, {
              max_uses: 1,
              unique: !0
            }, "User Invite Context Menu").then(e => v(t, e.code))
          }
        }(e, t.id)
      }
    }, e.id))
  })
}