n.d(e, {
    c: function () {
        return _;
    }
});
var r = n(481060),
    i = n(933557),
    l = n(592125),
    u = n(699516),
    a = n(594174),
    o = n(273504),
    E = n(590433),
    s = n(388032);
let c = (t) => {
        if (t === o.jj.QUARANTINE_USER) return !1;
        return !0;
    },
    d = (t) => {
        switch (t) {
            case o.jj.BLOCK_MESSAGE:
            case o.jj.FLAG_TO_CHANNEL:
            case o.jj.USER_COMMUNICATION_DISABLED:
            case o.jj.QUARANTINE_USER:
                return !0;
            default:
                return !1;
        }
    },
    S = (t) => {
        switch (t) {
            case o.jj.BLOCK_MESSAGE:
                return s.intl.string(s.t.d1ab8v);
            case o.jj.FLAG_TO_CHANNEL:
                return s.intl.string(s.t['Y+Vmvb']);
            case o.jj.USER_COMMUNICATION_DISABLED:
                return s.intl.string(s.t.Xz2njI);
            case o.jj.QUARANTINE_USER:
                return s.intl.string(s.t.NPO8eX);
        }
    },
    T = function (t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.fX.KEYWORD;
        switch (t) {
            case o.jj.BLOCK_MESSAGE:
                switch (e) {
                    case o.fX.MENTION_SPAM:
                        return s.intl.string(s.t['8hdId3']);
                    case o.fX.ML_SPAM:
                        return s.intl.string(s.t.tLQYs7);
                    default:
                        return s.intl.string(s.t.xAAocn);
                }
            case o.jj.FLAG_TO_CHANNEL:
                return s.intl.string(s.t.BHAXfX);
            case o.jj.USER_COMMUNICATION_DISABLED:
                return s.intl.string(s.t['bNK+gI']);
            case o.jj.QUARANTINE_USER:
                return s.intl.string(s.t['/7nL5e']);
        }
    },
    f = (t, e) => {
        var n, r, c;
        switch (t) {
            case o.jj.QUARANTINE_USER:
            case o.jj.BLOCK_MESSAGE:
                return null;
            case o.jj.FLAG_TO_CHANNEL: {
                let t = null == e ? void 0 : null === (n = e.metadata) || void 0 === n ? void 0 : n.channelId;
                if (null == t) return null;
                let r = l.Z.getChannel(t);
                if (null == r) return null;
                let o = (0, i.F6)(r, a.default, u.Z);
                return s.intl.format(s.t.xQXnkJ, { channelName: o });
            }
            case o.jj.USER_COMMUNICATION_DISABLED: {
                let t = null !== (c = null == e ? void 0 : null === (r = e.metadata) || void 0 === r ? void 0 : r.durationSeconds) && void 0 !== c ? c : 0,
                    n = (0, E.L9)(t);
                if (null == n) return null;
                return s.intl.format(s.t.AFmbfX, { duration: n });
            }
        }
    },
    N = (t) => {
        switch (t) {
            case o.jj.BLOCK_MESSAGE:
                return r.CircleXIcon;
            case o.jj.FLAG_TO_CHANNEL:
                return r.TextIcon;
            case o.jj.USER_COMMUNICATION_DISABLED:
                return r.ClockWarningIcon;
            case o.jj.QUARANTINE_USER:
                return r.ChatXIcon;
        }
    };
function _(t, e, n) {
    var i, l, u, a;
    return d(t)
        ? {
              headerText: null !== (i = S(t)) && void 0 !== i ? i : '',
              descriptionText: null !== (l = T(t, n)) && void 0 !== l ? l : '',
              helperText: null !== (u = f(t, e)) && void 0 !== u ? u : null,
              icon: null !== (a = N(t)) && void 0 !== a ? a : r.CircleXIcon,
              isEditable: c(t)
          }
        : null;
}
